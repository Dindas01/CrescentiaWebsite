import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'Crescentia Funding - Fundos Europeus para PMEs',
  description:
    'Especialistas em candidaturas a fundos europeus. Portugal 2030, PRR e incentivos para empresas portuguesas.',
  keywords: [
    'fundos europeus',
    'Portugal 2030',
    'PRR',
    'incentivos',
    'PME',
    'financiamento',
    'Crescentia',
  ],
  authors: [{ name: 'Crescentia' }],
  openGraph: {
    type: 'website',
    locale: 'pt_PT',
    url: 'https://funding.crescentia.pt',
    siteName: 'Crescentia Funding',
    title: 'Crescentia Funding - Fundos Europeus',
    description: 'Especialistas em candidaturas a fundos europeus para PMEs portuguesas',
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
