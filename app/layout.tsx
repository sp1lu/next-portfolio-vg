import type { Metadata } from 'next'

import { AudioProvider } from './store/audio.context'
import AudioToggle from '@/components/audio-toggle/AudioToggle'

import './globals.css'

export const metadata: Metadata = {
  title: 'Davide Rivolta | Web developer & Graphic designer',
  description: 'Portfolio',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en'>
      <body>
        <AudioProvider>
          {children}
        </AudioProvider>
        <AudioToggle />
      </body>
    </html>
  );
}
