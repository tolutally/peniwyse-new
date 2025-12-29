# Peniwyse - Canada USDC Wallet

A modern, secure web application for managing CAD and USDC (Base chain) with seamless conversion, funding, and withdrawal capabilities.

## 🚀 Features

- **Multi-Currency Wallet**: Manage both CAD and USDC balances
- **Instant Conversion**: Convert between CAD and USDC with transparent fees
- **Multiple Funding Options**: E-Transfer and EFT support
- **Secure Withdrawals**: Withdraw USDC to CAD and transfer to your bank
- **KYC/AML Compliance**: Built-in identity verification flow
- **Transaction History**: Complete audit trail with detailed receipts
- **Monthly Statements**: Downloadable financial statements
- **Support System**: Integrated ticket-based support

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Validation**: Zod
- **Blockchain**: Base (USDC)

## 📁 Project Structure

```
peniwyse-new/
├── src/
│   ├── app/           # Next.js pages and routes
│   ├── components/    # Reusable UI components
│   ├── features/      # Feature-specific logic
│   ├── lib/           # Utilities, API client, validators
│   ├── store/         # Zustand state stores
│   ├── mocks/         # Mock data and database
│   ├── styles/        # Global styles and tokens
│   └── types/         # TypeScript type definitions
├── public/            # Static assets
└── [config files]     # Next.js, TypeScript, Tailwind configs
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Copy environment variables:
   ```bash
   cp .env.local.example .env.local
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000)

## 🧪 Mock Mode

The application runs in mock mode by default (`NEXT_PUBLIC_API_MOCK_MODE=true`), using in-memory data stores for development and testing without requiring a backend.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler check

## 🔐 Security

- Client-side route guards
- Form validation with Zod
- Secure session management
- 2FA support (UI mock)

## 📚 Documentation

- **Quick Start**: See `QUICKSTART.md`
- **Setup Guide**: See `PROJECT_SETUP.md`
- **Structure**: See `STRUCTURE.md`

## 📄 License

Private - All rights reserved
