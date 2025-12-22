import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'Crescentia Wealth - IFICI Tax Optimization for Tech Professionals',
  description:
    'Maximize your income with IFICI tax optimization. Expert guidance for international tech professionals in Portugal.',
  keywords: [
    'IFICI',
    'tax optimization',
    'Portugal tax',
    'tech professionals',
    'expat tax',
    'Crescentia',
  ],
  authors: [{ name: 'Crescentia' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://wealth.crescentia.pt',
    siteName: 'Crescentia Wealth',
    title: 'Crescentia Wealth - IFICI Tax Optimization',
    description: 'Expert tax optimization services for international tech professionals',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="font-sans antialiased bg-white-100 text-dark-500">
        {children}
      </body>
    </html>
  )
}
