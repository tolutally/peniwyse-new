peniwyse-new/
├── README.md
├── PROJECT_SETUP.md
├── QUICKSTART.md
├── STRUCTURE.md
├── mvp-roadmap
├── package.json
├── next.config.js
├── tsconfig.json
├── postcss.config.js
├── tailwind.config.ts
├── .env.local.example
├── .gitignore
│
├── public/
│  ├── brand/
│  │  └── .gitkeep
│  ├── images/
│  │  └── .gitkeep
│  └── favicons/
│     └── .gitkeep
│
└── src/
   ├── app/
   │  ├── (marketing)/
   │  │  ├── page.tsx                 ✅ Landing page (implemented)
   │  │  ├── pricing/                 📝 To be implemented
   │  │  ├── fees/                    📝 To be implemented
   │  │  ├── security/                📝 To be implemented
   │  │  └── legal/
   │  │     ├── privacy/              📝 To be implemented
   │  │     └── terms/                📝 To be implemented
   │  │
   │  ├── (auth)/
   │  │  ├── login/
   │  │  │  └── page.tsx              ✅ Placeholder created
   │  │  ├── signup/
   │  │  │  └── page.tsx              ✅ Placeholder created
   │  │  └── verify/                  📝 To be implemented
   │  │
   │  ├── (app)/
   │  │  ├── layout.tsx               ✅ Auth guard implemented
   │  │  ├── dashboard/
   │  │  │  └── page.tsx              ✅ Placeholder created
   │  │  ├── wallet/                  📝 To be implemented
   │  │  ├── onboarding/              📝 To be implemented
   │  │  ├── fund/                    📝 To be implemented
   │  │  ├── convert/                 📝 To be implemented
   │  │  ├── receive/                 📝 To be implemented
   │  │  ├── withdraw/                📝 To be implemented
   │  │  ├── transactions/            📝 To be implemented
   │  │  ├── statements/              📝 To be implemented
   │  │  ├── support/                 📝 To be implemented
   │  │  └── settings/                📝 To be implemented
   │  │
   │  ├── layout.tsx                  ✅ Root layout
   │  ├── globals.css                 ✅ Global styles
   │  ├── loading.tsx                 ✅ Loading component
   │  └── not-found.tsx               ✅ 404 page
   │
   ├── components/
   │  ├── ui/
   │  │  └── index.ts                 ✅ Placeholder
   │  ├── layout/
   │  │  └── index.ts                 ✅ Placeholder
   │  ├── charts/                     📝 To be created
   │  └── feedback/                   📝 To be created
   │
   ├── features/
   │  ├── index.ts                    ✅ Placeholder
   │  ├── auth/                       📝 To be implemented
   │  ├── onboarding/                 📝 To be implemented
   │  ├── funding/                    📝 To be implemented
   │  ├── conversion/                 📝 To be implemented
   │  ├── receive/                    📝 To be implemented
   │  ├── withdraw/                   📝 To be implemented
   │  ├── transactions/               📝 To be implemented
   │  ├── statements/                 📝 To be implemented
   │  └── support/                    📝 To be implemented
   │
   ├── lib/
   │  ├── api/
   │  │  ├── client.ts                ✅ API client with mock mode
   │  │  └── mockTransport.ts         📝 To be implemented
   │  ├── auth/                       📝 To be implemented
   │  ├── format/
   │  │  ├── currency.ts              ✅ Currency formatting
   │  │  └── date.ts                  ✅ Date formatting
   │  ├── validators/
   │  │  └── index.ts                 ✅ Zod schemas
   │  ├── constants/
   │  │  ├── index.ts                 ✅ Fees & blockchain config
   │  │  └── limits.ts                ✅ KYC tier limits
   │  └── utils.ts                    ✅ Common utilities
   │
   ├── store/
   │  ├── useSessionStore.ts          ✅ Session/auth state
   │  ├── useWalletStore.ts           ✅ Wallet state
   │  └── useUiStore.ts               ✅ UI state
   │
   ├── mocks/
   │  ├── db.ts                       ✅ In-memory database
   │  ├── handlers.ts                 📝 To be implemented
   │  ├── seed.ts                     📝 To be implemented
   │  └── fixtures/
   │     ├── transactions.json        ✅ Sample data
   │     ├── statements.json          ✅ Sample data
   │     └── profile.json             ✅ Sample data
   │
   ├── styles/
   │  └── tokens.css                  ✅ Design tokens
   │
   └── types/
      ├── wallet.ts                   ✅ Wallet types
      ├── transactions.ts             ✅ Transaction types
      ├── kyc.ts                      ✅ KYC types
      └── support.ts                  ✅ Support types

Legend:
✅ = Implemented/Created
📝 = To be implemented
