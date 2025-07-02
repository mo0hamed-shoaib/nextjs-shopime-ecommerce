# ShopiMe - Modern E-commerce Platform

A full-featured e-commerce application built with Next.js 14, featuring modern UI design, user authentication, shopping cart functionality, and a complete shopping experience.

## 🚀 Features

### Core E-commerce Features

- **Product Catalog**: Browse products by categories (TV, Mobile, Gaming, Audio)
- **Product Details**: Detailed product pages with images, descriptions, and pricing
- **Shopping Cart**: Persistent cart with localStorage, add/remove items, quantity management
- **Wishlist**: Save favorite products with add-to-cart functionality
- **User Authentication**: Facebook OAuth integration with NextAuth.js
- **User Profiles**: Edit profile information and view order history
- **Checkout Process**: Complete checkout flow with order confirmation
- **Order Management**: View and track completed orders

### Technical Features

- **Server & Client Components**: Optimized Next.js 14 App Router architecture
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Type Safety**: Full TypeScript implementation
- **State Management**: React Context for cart and user state
- **Data Persistence**: localStorage for cart and order data
- **Error Handling**: Comprehensive error boundaries and loading states
- **SEO Optimized**: Server-side rendering and metadata

### UI/UX Features

- **Modern Design**: Clean, professional interface with consistent styling
- **Navigation**: Sticky navigation with user menu and cart indicator
- **Category Icons**: Lucide icons for visual category identification
- **Loading States**: Smooth loading experiences throughout the app
- **Footer**: Legal pages and social links

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + DaisyUI
- **Authentication**: NextAuth.js with Facebook OAuth
- **Icons**: Lucide React
- **State Management**: React Context API
- **Data Storage**: localStorage (client-side persistence)
- **Deployment**: Vercel-ready

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes (NextAuth)
│   ├── cart/              # Shopping cart pages
│   ├── category/          # Category browsing pages
│   ├── checkout/          # Checkout flow
│   ├── login/             # Authentication pages
│   ├── orders/            # Order history
│   ├── pay/               # Payment confirmation
│   ├── products/          # Product listing and details
│   ├── profile/           # User profile management
│   ├── register/          # User registration
│   ├── wishlist/          # Wishlist functionality
│   ├── terms/             # Legal pages
│   ├── privacy/           # Privacy policy
│   ├── user-data-deletion/# Data deletion page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # Reusable React components
│   ├── Navigation.tsx     # Main navigation
│   ├── Footer.tsx         # Footer component
│   ├── ProductCard.tsx    # Product display card
│   ├── CartContext.tsx    # Cart state management
│   └── ...                # Other UI components
├── types/                 # TypeScript type definitions
│   └── product.ts         # Product interfaces
├── utils/                 # Utility functions
│   └── helpers.ts         # Helper functions
└── auth.ts               # NextAuth configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun
- Facebook Developer Account (for OAuth)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd product-demo
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:

   ```env
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-secret-key-here
   FACEBOOK_CLIENT_ID=your-facebook-app-id
   FACEBOOK_CLIENT_SECRET=your-facebook-app-secret
   ```

4. **Facebook OAuth Setup**

   - Create a Facebook App at [developers.facebook.com](https://developers.facebook.com)
   - Add `http://localhost:3000/api/auth/callback/facebook` to Valid OAuth Redirect URIs
   - Copy the App ID and App Secret to your `.env.local` file

5. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🎯 Key Features Explained

### Shopping Cart System

- Persistent cart using localStorage
- Add/remove items with quantity management
- Real-time cart updates across all pages
- Cart summary with total calculation

### User Authentication

- Facebook OAuth integration
- Protected routes and user sessions
- Profile management with editable information
- Secure sign-out functionality

### Product Management

- Dynamic product catalog with categories
- Product filtering and search capabilities
- Detailed product pages with images
- Wishlist functionality with add-to-cart

### Order System

- Complete checkout process
- Order history with localStorage persistence
- Order confirmation and payment flow
- User-friendly order tracking

## 🎨 Design System

The application uses a consistent design system with:

- **Color Scheme**: Dark theme with indigo accents
- **Typography**: Clear hierarchy with consistent font sizes
- **Spacing**: Standardized padding and margins
- **Components**: Reusable UI components with consistent styling
- **Responsive**: Mobile-first responsive design

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Style

- TypeScript for type safety
- ESLint for code quality
- Consistent component structure
- Server/Client component separation

## 🚀 Deployment

The application is optimized for deployment on Vercel:

1. **Push to GitHub**: Ensure your code is in a GitHub repository
2. **Connect to Vercel**: Import your repository in Vercel
3. **Environment Variables**: Add your environment variables in Vercel dashboard
4. **Deploy**: Vercel will automatically deploy your application

### Production Environment Variables

```env
NEXTAUTH_URL=https://your-domain.vercel.app
NEXTAUTH_SECRET=your-production-secret
FACEBOOK_CLIENT_ID=your-facebook-app-id
FACEBOOK_CLIENT_SECRET=your-facebook-app-secret
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting and deployment
- Tailwind CSS for the utility-first CSS framework
- Lucide for the beautiful icons
- NextAuth.js for authentication solutions

---

Built with ❤️ using Next.js 14
