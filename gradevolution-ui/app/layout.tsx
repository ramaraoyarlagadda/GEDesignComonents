import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gradevolution UI — Editorial indie-SaaS component library",
  description:
    "A warm, hand-drawn, editorial UI component library built with Next.js, TypeScript, Tailwind, and shadcn-style primitives. Inspired by the Ken AI visual language.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-cream text-ink font-sans paper-grain">
        {children}
      </body>
    </html>
  );
}
