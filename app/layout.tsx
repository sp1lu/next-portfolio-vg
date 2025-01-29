import type { Metadata } from 'next'

import Copyright from '@/components/copyright/copyright'
import Background from '@/components/background/background'

import './globals.css'

export const metadata: Metadata = {
  title: 'Davide Rivolta | Web developer & Graphic designer',
  description: 'Self-taught web developer and graphic designer, video game enthusiast, unique passwords creator, cat lover and lifelong learner based in Italy.'
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
