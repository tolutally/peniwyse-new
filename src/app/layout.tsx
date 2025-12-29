import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Canada USDC Wallet - Secure CAD & USDC Management",
    description: "Seamlessly manage CAD and USDC with instant conversion, secure funding, and easy withdrawals on Base chain.",
    keywords: ["USDC", "CAD", "cryptocurrency", "wallet", "Base chain", "Canada"],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}
