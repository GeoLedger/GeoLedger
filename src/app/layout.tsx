import "./globals.css";
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react"


export const metadata: Metadata = {
  title: "GeoLedger",
  description: "Secure land ownership on Stellar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}