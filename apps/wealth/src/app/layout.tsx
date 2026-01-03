import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'Crescentia Wealth | IFICI Tax Optimization Portugal',
  description:
    'Tax optimization for international professionals in Portugal. 20% flat tax under IFICI regime, 0% crypto tax. Expert wealth transition services.',
  keywords: [
    'ifici portugal',
    'nhr successor',
    'portugal tax',
    'crypto tax portugal',
    'wealth optimization',
    'tax planning portugal',
    'international professionals',
    '20% flat tax',
    'expat tax portugal',
    'crescentia wealth',
  ],
  authors: [{ name: 'Crescentia' }],
  icons: {
    icon: '/logos/Crescentia-Icon-Yellow.svg',
    apple: '/logos/Crescentia-Icon-Yellow.svg',
  },
  openGraph: {
    title: 'Crescentia Wealth | IFICI Tax Optimization Portugal',
    description: '20% flat income tax. 0% crypto tax. Expert IFICI regime advisory for high-income professionals.',
    url: 'https://wealth.crescentia.pt',
    siteName: 'Crescentia Wealth',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crescentia Wealth | IFICI Tax Optimization',
    description: '20% flat tax. 0% crypto tax. Portugal IFICI regime experts.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Crescentia Wealth",
    "description": "IFICI tax optimization for international professionals in Portugal",
    "url": "https://wealth.crescentia.pt",
    "logo": "https://wealth.crescentia.pt/logos/Crescentia-Icon-Yellow.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+351-913-960-220",
      "contactType": "Customer Service",
      "email": "info@crescentia.pt",
      "areaServed": "PT",
      "availableLanguage": ["English", "Portuguese"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "PT",
      "addressLocality": "Porto"
    }
  }

  const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX' // TODO: Replace with actual GA4 measurement ID

  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body className="font-sans antialiased bg-white-100 text-dark-500">
        {children}
      </body>
    </html>
  )
}
