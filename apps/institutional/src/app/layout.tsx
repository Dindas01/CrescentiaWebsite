import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Crescentia Incentivos | European Funding & Wealth Optimization',
  description:
    'Exclusive advisory for ambitious businesses and professionals. European funding for SMEs and premium tax optimization for international professionals.',
  keywords: [
    'European funding',
    'Portugal 2030',
    'PRR',
    'IFICI',
    'tax optimization',
    'wealth optimization',
    'Crescentia',
    'SME funding',
    'international professionals',
  ],
  authors: [{ name: 'Crescentia Incentivos' }],
  icons: {
    icon: '/logos/Crescentia-Icon-Yellow.svg',
    apple: '/logos/Crescentia-Icon-Yellow.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://crescentia.pt',
    siteName: 'Crescentia Incentivos',
    title: 'European Funding & Wealth Optimization - Crescentia Incentivos',
    description: 'Exclusive advisory for ambitious businesses and professionals.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-[#0a0a0a] text-white">
        {children}
      </body>
    </html>
  )
}
