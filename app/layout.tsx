import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Davide Rivolta | Web developer & Graphic designer',
  description: 'Portfolio',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
