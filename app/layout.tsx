import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Ayush - Portfolio',
  description: 'Creative developer portfolio',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/ayush.jpg?v=1',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/ayush.jpg?v=1',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/ayush.jpg?v=1',
        type: 'image/svg+xml',
      },
    ],
    apple: '/ayush.jpg?v=1',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased bg-background">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
