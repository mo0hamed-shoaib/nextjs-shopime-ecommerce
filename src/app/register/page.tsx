"use client"
import { signIn } from "next-auth/react"
import { useState } from "react"
import Link from "next/link"
import { Mail, Lock, Eye, EyeOff, User, UserPlus } from "lucide-react"

export default function RegisterPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [nameError, setNameError] = useState("")
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [nameFocused, setNameFocused] = useState(false)
  const [emailFocused, setEmailFocused] = useState(false)
  const [passwordFocused, setPasswordFocused] = useState(false)

  const validate = () => {
    let valid = true
    setNameError("")
    setEmailError("")
    setPasswordError("")
    if (!name) {
      setNameError("Name is required")
      valid = false
    }
    if (!email) {
      setEmailError("Email is required")
      valid = false
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setEmailError("Invalid email address")
      valid = false
    }
    if (!password) {
      setPasswordError("Password is required")
      valid = false
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters")
      valid = false
    }
    return valid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    setError("")
    setTimeout(() => {
      setLoading(false)
      setError("Demo: Use Google or Facebook to register.")
    }, 1000)
  }

  const handleSignIn = async (provider: string) => {
    setLoading(true)
    setError("")
    try {
      const res: any = await signIn(provider, { callbackUrl: "/" })
      if (res && res.error) setError("Sign in failed. Please try again.")
    } catch (e) {
      setError("Sign in failed. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 py-8">
      <div className="bg-gray-900 rounded-2xl shadow-2xl p-8 w-full max-w-md border border-gray-800">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <UserPlus className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-medium text-white mb-2">Create account</h1>
          <p className="text-gray-400 text-sm">Enter your details to get started</p>
        </div>

        <div className="space-y-6">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="name">
              Full name
            </label>
            <div className={`relative bg-gray-800 rounded-lg border transition-colors ${
              nameFocused ? 'border-indigo-500' : 'border-gray-700'
            } ${nameError ? 'border-red-500' : ''}`}>
              <div className="flex items-center">
                <User className={`w-5 h-5 ml-3 transition-colors ${
                  nameFocused ? 'text-indigo-400' : 'text-gray-500'
                }`} />
                <input
                  id="name"
                  type="text"
                  className="w-full bg-transparent px-3 py-3 text-white placeholder-gray-500 focus:outline-none"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  onFocus={() => setNameFocused(true)}
                  onBlur={() => setNameFocused(false)}
                  placeholder="Enter your full name"
                  autoComplete="name"
                />
              </div>
            </div>
            {nameError && <p className="text-red-400 text-sm mt-1">{nameError}</p>}
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="email">
              Email address
            </label>
            <div className={`relative bg-gray-800 rounded-lg border transition-colors ${
              emailFocused ? 'border-indigo-500' : 'border-gray-700'
            } ${emailError ? 'border-red-500' : ''}`}>
              <div className="flex items-center">
                <Mail className={`w-5 h-5 ml-3 transition-colors ${
                  emailFocused ? 'text-indigo-400' : 'text-gray-500'
                }`} />
                <input
                  id="email"
                  type="email"
                  className="w-full bg-transparent px-3 py-3 text-white placeholder-gray-500 focus:outline-none"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  onFocus={() => setEmailFocused(true)}
                  onBlur={() => setEmailFocused(false)}
                  placeholder="Enter your email"
                  autoComplete="email"
                />
              </div>
            </div>
            {emailError && <p className="text-red-400 text-sm mt-1">{emailError}</p>}
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="password">
              Password
            </label>
            <div className={`relative bg-gray-800 rounded-lg border transition-colors ${
              passwordFocused ? 'border-indigo-500' : 'border-gray-700'
            } ${passwordError ? 'border-red-500' : ''}`}>
              <div className="flex items-center">
                <Lock className={`w-5 h-5 ml-3 transition-colors ${
                  passwordFocused ? 'text-indigo-400' : 'text-gray-500'
                }`} />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="flex-1 bg-transparent px-3 py-3 text-white placeholder-gray-500 focus:outline-none"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  onFocus={() => setPasswordFocused(true)}
                  onBlur={() => setPasswordFocused(false)}
                  placeholder="Create a password"
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="p-3 text-gray-500 hover:text-gray-300"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
            {passwordError && <p className="text-red-400 text-sm mt-1">{passwordError}</p>}
          </div>

          {/* Register Button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            disabled={loading}
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <UserPlus className="w-5 h-5" />
                Create account
              </>
            )}
          </button>

          {error && (
            <div className="text-red-400 text-sm text-center p-3 bg-red-900/20 rounded-lg border border-red-800">
              {error}
            </div>
                      )}
        </div>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-gray-700"></div>
          <span className="mx-4 text-gray-500 text-sm">or</span>
          <div className="flex-1 border-t border-gray-700"></div>
        </div>

        {/* Social Login Buttons */}
        <div className="space-y-3">
          <button
            onClick={() => handleSignIn("google")}
            className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-gray-900 font-medium py-3 px-4 rounded-lg transition-colors disabled:opacity-50 cursor-pointer"
            disabled={loading}
          >
            <svg className="w-5 h-5" viewBox="0 0 48 48">
              <g>
                <path fill="#4285F4" d="M24 9.5c3.54 0 6.7 1.22 9.19 3.23l6.85-6.85C36.68 2.36 30.77 0 24 0 14.82 0 6.71 5.13 2.69 12.56l8.01 6.22C12.33 13.13 17.68 9.5 24 9.5z"/>
                <path fill="#34A853" d="M46.1 24.55c0-1.64-.15-3.22-.42-4.74H24v9.01h12.42c-.54 2.9-2.18 5.36-4.65 7.04l7.19 5.6C43.93 37.13 46.1 31.36 46.1 24.55z"/>
                <path fill="#FBBC05" d="M10.7 28.78c-1.13-3.36-1.13-6.99 0-10.35l-8.01-6.22C.86 16.1 0 19.94 0 24c0 4.06.86 7.9 2.69 11.22l8.01-6.22z"/>
                <path fill="#EA4335" d="M24 48c6.77 0 12.48-2.24 16.64-6.09l-7.19-5.6c-2.01 1.35-4.59 2.15-7.45 2.15-6.32 0-11.67-3.63-14.3-8.78l-8.01 6.22C6.71 42.87 14.82 48 24 48z"/>
                <path fill="none" d="M0 0h48v48H0z"/>
              </g>
            </svg>
            Continue with Google
          </button>

          <button
            onClick={() => handleSignIn("facebook")}
            className="w-full flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors disabled:opacity-50 cursor-pointer"
            disabled={loading}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Continue with Facebook
          </button>
        </div>

        {/* Login Link */}
        <div className="mt-6 text-gray-400 text-center text-sm">
          Already have an account?{' '}
          <Link href="/login" className="text-indigo-400 hover:text-indigo-300 font-medium cursor-pointer">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  )
}