import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ByteSpace - Online Learning Platform",
  description: "Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icons/logo.svg" type="image/svg+xml" />
      </head>
      <body className="min-h-screen bg-white text-[#040819] font-sans antialiased selection:bg-[#D4FB20] selection:text-black">
        {children}
      </body>
    </html>
  );
}
