import "./globals.css";
import type { ReactNode } from "react";

// For better TypeScript, you can use this metadata type
export const metadata = {
  title: "Control Test - Gas Pipe Control Services",
  description: "Professional gas pipe control and testing services ensuring safety and compliance",
  keywords: "gas pipe, control, testing, safety, inspection",
  authors: [{ name: "Control Test" }],
};

// You can also add viewport for responsive design
export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}