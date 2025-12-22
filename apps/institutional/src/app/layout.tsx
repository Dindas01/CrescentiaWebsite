import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'Crescentia - Funding & Wealth Management',
  description:
    'Crescentia: Especialistas em fundos europeus para PMEs e otimização fiscal IFICI para profissionais internacionais.',
  keywords: [
    'Crescentia',
    'fundos europeus',
    'IFICI',
    'Portugal 2030',
    'tax optimization',
    'wealth management',
  ],
  authors: [{ name: 'Crescentia' }],
  openGraph: {
    type: 'website',
    locale: 'pt_PT',
    url: 'https://crescentia.pt',
    siteName: 'Crescentia',
    title: 'Crescentia - Funding & Wealth Management',
    description: 'Especialistas em fundos europeus e otimização fiscal',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt" className={spaceGrotesk.variable}>
      <body className="font-sans antialiased bg-white-100 text-dark-500">
        {children}
      </body>
    </html>
  )
}
