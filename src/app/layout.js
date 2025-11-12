// app/layout.js
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Just Becho - India\'s Most Trusted Luxury Marketplace',
  description: 'India\'s most trusted marketplace for selling pre-loved luxury items. Authentic luxury bags, watches, and accessories.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}