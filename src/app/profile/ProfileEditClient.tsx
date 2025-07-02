"use client";
import { useState } from "react";
import Image from "next/image";

interface ProfileEditClientProps {
  name: string;
  email: string;
  image?: string;
}

export default function ProfileEditClient({ name, email, image }: ProfileEditClientProps) {
  const [editName, setEditName] = useState(name);
  const [editEmail, setEditEmail] = useState(email);
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 2000);
    }, 1200);
  };

  return (
    <form onSubmit={handleSave} className="w-full mt-8 bg-gray-800 rounded-lg p-6 flex flex-col gap-4 shadow">
      <h2 className="text-3xl font-bold text-white text-center mb-8">Edit Profile</h2>
      <div>
        <label className="block text-lg text-gray-300 mb-1" htmlFor="editName">Name</label>
        <input
          id="editName"
          type="text"
          className="w-full px-3 py-2 rounded bg-gray-900 text-lg text-gray-300 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={editName}
          onChange={e => setEditName(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-lg text-gray-300 mb-1" htmlFor="editEmail">Email</label>
        <input
          id="editEmail"
          type="email"
          className="w-full px-3 py-2 rounded bg-gray-900 text-lg text-gray-300 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={editEmail}
          onChange={e => setEditEmail(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded transition-colors cursor-pointer text-lg"
        disabled={saving}
      >
        {saving ? "Saving..." : "Save Changes"}
      </button>
      {success && (
        <div className="text-green-400 text-sm mt-2">Profile updated (demo only)</div>
      )}
    </form>
  );
} 