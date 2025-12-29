# Quick Start Guide

## 🚀 Getting Started in 3 Steps

### Step 1: Install Dependencies

Navigate to the project directory and install all required packages:

```bash
cd canada-usdc-wallet-frontend
npm install
```

This will install:
- Next.js 14 and React 18
- TypeScript and type definitions
- Tailwind CSS for styling
- Zustand for state management
- Zod for form validation
- date-fns for date formatting
- And other utilities

### Step 2: Configure Environment

Copy the example environment file:

```bash
cp .env.local.example .env.local
```

The default configuration runs in **mock mode** (no backend required):
- `NEXT_PUBLIC_API_MOCK_MODE=true`
- Mock API URL: `http://localhost:3001`
- Base chain (USDC): Chain ID 8453

You can modify `.env.local` if needed, but the defaults work out of the box.

### Step 3: Start Development Server

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

You should see the landing page! 🎉

## 📱 Available Pages

### Public Pages (No Auth Required)
- **Landing Page:** `http://localhost:3000/`
- **Login:** `http://localhost:3000/login`
- **Sign Up:** `http://localhost:3000/signup`

### Protected Pages (Auth Required)
- **Dashboard:** `http://localhost:3000/dashboard`

Note: Protected pages will redirect to login if not authenticated.

## 🧪 Testing Mock Authentication

To test the authentication flow:

1. Go to the login page
2. Enter any email (e.g., `demo@example.com`)
3. Enter any password (min 8 characters)
4. Click login

The mock authentication will create a session and redirect you to the dashboard.

## 📝 Available Scripts

```bash
# Development server (with hot reload)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint

# Type check without building
npm run type-check
```

## 🎨 Design System

The project includes a premium design system:

### Colors
- **Primary:** Blue shades (primary-50 to primary-950)
- **Success:** Green shades
- **Warning:** Orange shades
- **Danger:** Red shades

### Typography
- **Font:** Inter (loaded from Google Fonts)
- **Weights:** 300, 400, 500, 600, 700

### Utilities
- Custom shadows: `shadow-soft`, `shadow-glow`
- Border radius: `rounded-lg`, `rounded-xl`
- Spacing: Tailwind's default scale

## 🗂️ Project Structure Overview

```
src/
├── app/           # Next.js pages and routes
├── components/    # Reusable UI components
├── features/      # Feature-specific logic
├── lib/           # Utilities, API client, validators
├── store/         # Zustand state stores
├── mocks/         # Mock data and database
├── styles/        # Global styles and tokens
└── types/         # TypeScript type definitions
```

## 🔧 Common Tasks

### Adding a New Page

1. Create a new folder in `src/app/(marketing)/` or `src/app/(app)/`
2. Add a `page.tsx` file
3. Export a default React component

Example:
```tsx
// src/app/(marketing)/about/page.tsx
export default function AboutPage() {
  return <div>About Us</div>;
}
```

### Creating a Component

1. Create a new file in `src/components/ui/` or `src/components/layout/`
2. Export your component

Example:
```tsx
// src/components/ui/Button.tsx
export function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="px-4 py-2 bg-primary-600 text-white rounded-lg">
      {children}
    </button>
  );
}
```

### Using State Management

Import and use the Zustand stores:

```tsx
'use client';

import { useSessionStore } from '@/store/useSessionStore';

export default function MyComponent() {
  const { user, isAuthenticated } = useSessionStore();
  
  return (
    <div>
      {isAuthenticated ? `Hello ${user?.firstName}` : 'Not logged in'}
    </div>
  );
}
```

## 🐛 Troubleshooting

### Port Already in Use
If port 3000 is already in use:
```bash
npm run dev -- -p 3001
```

### Type Errors
Run type checking to see all errors:
```bash
npm run type-check
```

### Styling Not Working
Make sure Tailwind is processing your files. Check that your file is included in `tailwind.config.ts`:
```ts
content: [
  "./src/**/*.{js,ts,jsx,tsx,mdx}",
],
```

## 📚 Next Steps

1. **Review the codebase:**
   - Check `src/types/` for data structures
   - Review `src/lib/constants/` for configuration
   - Explore `src/store/` for state management

2. **Start building:**
   - Implement the login/signup pages
   - Build the KYC onboarding flow
   - Create the wallet dashboard

3. **Read the docs:**
   - See `PROJECT_SETUP.md` for detailed setup info
   - Check `STRUCTURE.md` for the complete file tree

## 🆘 Need Help?

- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **TypeScript:** https://www.typescriptlang.org/docs
- **Zustand:** https://github.com/pmndrs/zustand

---

Happy coding! 🚀
