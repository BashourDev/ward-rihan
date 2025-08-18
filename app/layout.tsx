import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ward Rihan - Sophisticated B2B Corporate Floral Website',
  description: 'Premium corporate floral services for businesses worldwide',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}