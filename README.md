# 🛍️ ShopiMe - Modern E-commerce Platform

<div align="center">

**A full-featured e-commerce application built with Next.js 14**

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![NextAuth.js](https://img.shields.io/badge/NextAuth.js-000000?style=for-the-badge&logo=auth0&logoColor=white)](https://next-auth.js.org/)

[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=flat&logo=vercel)](https://vercel.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](http://makeapullrequest.com)

[🚀 Live Demo](https://your-demo-url.vercel.app) • [📖 Documentation](#-getting-started) • [🐛 Report Bug](https://github.com/yourusername/shopime/issues) • [✨ Request Feature](https://github.com/yourusername/shopime/issues)

</div>

---

## 📋 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Getting Started](#-getting-started)
- [📁 Project Structure](#-project-structure)
- [🎯 Key Features](#-key-features)
- [🎨 Design System](#-design-system)
- [🔧 Development](#-development)
- [🚀 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

## ✨ Features

<details>
<summary><strong>🛒 Core E-commerce Features</strong></summary>

- 🏪 **Product Catalog** - Browse products by categories (TV, Mobile, Gaming, Audio)
- 📱 **Product Details** - Detailed pages with images, descriptions, and pricing
- 🛍️ **Shopping Cart** - Persistent cart with localStorage, quantity management
- ❤️ **Wishlist** - Save favorite products with add-to-cart functionality
- 🔐 **User Authentication** - Facebook OAuth integration with NextAuth.js
- 👤 **User Profiles** - Edit profile information and view order history
- 💳 **Checkout Process** - Complete checkout flow with order confirmation
- 📦 **Order Management** - View and track completed orders

</details>

<details>
<summary><strong>⚡ Technical Features</strong></summary>

- 🏗️ **Server & Client Components** - Optimized Next.js 14 App Router architecture
- 📱 **Responsive Design** - Mobile-first design with Tailwind CSS
- 🛡️ **Type Safety** - Full TypeScript implementation
- 🔄 **State Management** - React Context for cart and user state
- 💾 **Data Persistence** - localStorage for cart and order data
- ⚠️ **Error Handling** - Comprehensive error boundaries and loading states
- 🔍 **SEO Optimized** - Server-side rendering and metadata

</details>

<details>
<summary><strong>🎨 UI/UX Features</strong></summary>

- ✨ **Modern Design** - Clean, professional interface with consistent styling
- 🧭 **Navigation** - Sticky navigation with user menu and cart indicator
- 🎯 **Category Icons** - Lucide icons for visual category identification
- ⏳ **Loading States** - Smooth loading experiences throughout the app
- 📄 **Footer** - Legal pages and social links

</details>

## 🛠️ Tech Stack

<table>
<tr>
<td align="center"><strong>Frontend</strong></td>
<td align="center"><strong>Backend</strong></td>
<td align="center"><strong>Database</strong></td>
<td align="center"><strong>Deployment</strong></td>
</tr>
<tr>
<td align="center">
<img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js"/><br>
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/><br>
<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS"/><br>
<img src="https://img.shields.io/badge/DaisyUI-5A0EFF?style=for-the-badge&logo=daisyui&logoColor=white" alt="DaisyUI"/>
</td>
<td align="center">
<img src="https://img.shields.io/badge/Next.js_API-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js API"/><br>
<img src="https://img.shields.io/badge/NextAuth.js-000000?style=for-the-badge&logo=auth0&logoColor=white" alt="NextAuth.js"/><br>
<img src="https://img.shields.io/badge/React_Context-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React Context"/>
</td>
<td align="center">
<img src="https://img.shields.io/badge/localStorage-FFD43B?style=for-the-badge&logo=javascript&logoColor=black" alt="localStorage"/><br>
</td>
<td align="center">
<img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel"/><br>
<img src="https://img.shields.io/badge/Facebook_OAuth-1877F2?style=for-the-badge&logo=facebook&logoColor=white" alt="Facebook OAuth"/>
</td>
</tr>
</table>

## 🚀 Getting Started

### 📋 Prerequisites

Before you begin, ensure you have the following installed:

- ![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat&logo=node.js&logoColor=white)
- ![npm](https://img.shields.io/badge/npm-latest-CB3837?style=flat&logo=npm&logoColor=white) / ![yarn](https://img.shields.io/badge/yarn-latest-2C8EBB?style=flat&logo=yarn&logoColor=white) / ![pnpm](https://img.shields.io/badge/pnpm-latest-F69220?style=flat&logo=pnpm&logoColor=white)
- Facebook Developer Account (for OAuth)

### 🔧 Installation

1. **📥 Clone the repository**

   ```bash
   git clone https://github.com/yourusername/shopime.git
   cd shopime
   ```

2. **📦 Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **⚙️ Environment Setup**
   
   Create a `.env.local` file in the root directory:

   ```env
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-secret-key-here
   FACEBOOK_CLIENT_ID=your-facebook-app-id
   FACEBOOK_CLIENT_SECRET=your-facebook-app-secret
   ```

4. **🔑 Facebook OAuth Setup**

   - Create a Facebook App at [developers.facebook.com](https://developers.facebook.com)
   - Add `http://localhost:3000/api/auth/callback/facebook` to Valid OAuth Redirect URIs
   - Copy the App ID and App Secret to your `.env.local` file

5. **🚀 Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

6. **🌐 Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
📦 src/
├── 📂 app/                    # Next.js App Router pages
│   ├── 📂 api/               # API routes (NextAuth)
│   ├── 📂 cart/              # Shopping cart pages
│   ├── 📂 category/          # Category browsing pages
│   ├── 📂 checkout/          # Checkout flow
│   ├── 📂 login/             # Authentication pages
│   ├── 📂 orders/            # Order history
│   ├── 📂 pay/               # Payment confirmation
│   ├── 📂 products/          # Product listing and details
│   ├── 📂 profile/           # User profile management
│   ├── 📂 register/          # User registration
│   ├── 📂 wishlist/          # Wishlist functionality
│   ├── 📂 terms/             # Legal pages
│   ├── 📂 privacy/           # Privacy policy
│   ├── 📂 user-data-deletion/# Data deletion page
│   ├── 📄 layout.tsx         # Root layout
│   ├── 📄 page.tsx           # Homepage
│   └── 📄 globals.css        # Global styles
├── 📂 components/            # Reusable React components
│   ├── 🧭 Navigation.tsx     # Main navigation
│   ├── 📄 Footer.tsx         # Footer component
│   ├── 🛍️ ProductCard.tsx    # Product display card
│   ├── 🛒 CartContext.tsx    # Cart state management
│   └── ⚡ ...                # Other UI components
├── 📂 types/                 # TypeScript type definitions
│   └── 📄 product.ts         # Product interfaces
├── 📂 utils/                 # Utility functions
│   └── 📄 helpers.ts         # Helper functions
└── 📄 auth.ts               # NextAuth configuration
```

## 🎯 Key Features

### 🛒 Shopping Cart System
> Persistent cart using localStorage with real-time updates across all pages

- ✅ Add/remove items with quantity management
- ✅ Cart summary with total calculation
- ✅ Persistent storage across sessions

### 🔐 User Authentication
> Secure Facebook OAuth integration with profile management

- ✅ Protected routes and user sessions
- ✅ Profile management with editable information
- ✅ Secure sign-out functionality

### 📱 Product Management
> Dynamic catalog with advanced filtering capabilities

- ✅ Product filtering and search capabilities
- ✅ Detailed product pages with images
- ✅ Wishlist functionality with add-to-cart

### 📦 Order System
> Complete order management from checkout to tracking

- ✅ Complete checkout process
- ✅ Order history with localStorage persistence
- ✅ Order confirmation and payment flow

## 🎨 Design System

<div align="center">

| Element | Description | Preview |
|---------|-------------|---------|
| **🎨 Color Scheme** | Dark theme with indigo accents | `#1F2937` `#4F46E5` |
| **📝 Typography** | Clear hierarchy with consistent fonts | `Headings: font-bold` `Body: font-normal` |
| **📐 Spacing** | Standardized padding and margins | `4px, 8px, 16px, 24px, 32px` |
| **📱 Responsive** | Mobile-first responsive design | `sm:, md:, lg:, xl:` breakpoints |

</div>

## 🔧 Development

### 📜 Available Scripts

| Command | Description | Usage |
|---------|-------------|-------|
| `npm run dev` | 🚀 Start development server | Development |
| `npm run build` | 🏗️ Build for production | Production build |
| `npm run start` | ▶️ Start production server | Production |
| `npm run lint` | 🔍 Run ESLint | Code quality |

### 📝 Code Style

- ✅ **TypeScript** for type safety
- ✅ **ESLint** for code quality
- ✅ **Consistent component structure**
- ✅ **Server/Client component separation**

## 🚀 Deployment

### 📤 Deploy to Vercel

<div align="center">

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/shopime)

</div>

1. **📤 Push to GitHub** - Ensure your code is in a GitHub repository
2. **🔗 Connect to Vercel** - Import your repository in Vercel
3. **⚙️ Environment Variables** - Add your environment variables in Vercel dashboard
4. **🚀 Deploy** - Vercel will automatically deploy your application

### 🌍 Production Environment Variables

```env
NEXTAUTH_URL=https://your-domain.vercel.app
NEXTAUTH_SECRET=your-production-secret
FACEBOOK_CLIENT_ID=your-facebook-app-id
FACEBOOK_CLIENT_SECRET=your-facebook-app-secret
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. 🍴 **Fork** the repository
2. 🌿 **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. 💾 **Commit** your changes (`git commit -m 'feat: add amazing feature'`)
4. 📤 **Push** to the branch (`git push origin feature/amazing-feature`)
5. 🔄 **Open** a Pull Request

### 🐛 Found a Bug?

If you find a bug, please [create an issue](https://github.com/yourusername/shopime/issues) with:
- 📝 Clear description of the bug
- 🔄 Steps to reproduce
- 💻 Your environment details

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

Special thanks to these amazing projects and teams:

- 🚀 [Next.js](https://nextjs.org/) - The React framework for production
- ☁️ [Vercel](https://vercel.com/) - Platform for frontend deployment
- 🎨 [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- 🎯 [Lucide](https://lucide.dev/) - Beautiful & consistent icons
- 🔐 [NextAuth.js](https://next-auth.js.org/) - Authentication for Next.js

---

<div align="center">

**Built with ❤️ using Next.js 14**

[![GitHub stars](https://img.shields.io/github/stars/yourusername/shopime?style=social)](https://github.com/yourusername/shopime/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/yourusername/shopime?style=social)](https://github.com/yourusername/shopime/network/members)
[![GitHub watchers](https://img.shields.io/github/watchers/yourusername/shopime?style=social)](https://github.com/yourusername/shopime/watchers)

[⬆ Back to Top](#️-shopime---modern-e-commerce-platform)

</div>
