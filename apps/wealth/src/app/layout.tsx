import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'Crescentia Wealth - Pay 20% Tax in Portugal for 10 Years',
  description:
    'Save thousands with IFICI tax optimization. Expert guidance for international tech professionals in Portugal. 0% crypto tax, EU residency included.',
  keywords: [
    'IFICI',
    'tax optimization',
    'Portugal tax',
    'tech professionals',
    'expat tax',
    'Crescentia',
    'crypto tax',
    '20% tax',
    'NHR alternative',
  ],
  authors: [{ name: 'Crescentia' }],
  icons: {
    icon: '/logos/Crescentia-Icon-Yellow.svg',
    apple: '/logos/Crescentia-Icon-Yellow.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://wealth.crescentia.pt',
    siteName: 'Crescentia Wealth',
    title: 'Pay 20% Tax in Portugal for 10 Years - Crescentia Wealth',
    description: 'Expert IFICI tax optimization for international tech professionals. 0% crypto tax. EU residency.',
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
