// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";

// 1. Impor CSS Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// 2. Impor file globals.css (kita akan mengeditnya di langkah berikutnya)
import "./globals.css";

import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Corclo",
  description: "The new way to connect, share, and discover.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          // 3. Gunakan 'data-bs-theme' untuk dark mode Bootstrap
          attribute="data-bs-theme"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
