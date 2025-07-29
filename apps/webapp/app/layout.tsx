import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { HeaderNavigation } from '@/components/home/header-navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blend Template',
  description: 'A modern Next.js template for building web applications',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderNavigation />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}