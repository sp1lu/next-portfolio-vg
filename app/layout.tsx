import type { Metadata } from 'next'

import Copyright from '@/components/copyright/copyright'
import Background from '@/components/background/background'

import './globals.css'

export const metadata: Metadata = {
  title: 'Davide Rivolta | Web developer & Graphic designer',
  description: 'Portfolio'
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en'>
      <body className='dark'>
        {children}
        <Copyright />
        <Background />
      </body>
    </html>
  );
}
