import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'Crescentia Apoios | Fundos Europeus para PMEs Portuguesas',
  description:
    'Aceda a €24B+ em apoios europeus. Especialistas em Portugal 2030, PRR e fundos estruturais. Consultoria para PMEs portuguesas com foco em inovação, digitalização e internacionalização.',
  keywords: [
    'apoios europeus',
    'portugal 2030',
    'prr',
    'fundos europeus',
    'financiamento pme',
    'inovação',
    'digitalização',
    'internacionalização',
    'incentivos empresas',
    'crescentia apoios',
  ],
  authors: [{ name: 'Crescentia' }],
  icons: {
    icon: '/logos/Crescentia-Icon-Yellow.svg',
    apple: '/logos/Crescentia-Icon-Yellow.svg',
  },
  openGraph: {
    title: 'Crescentia Apoios | Fundos Europeus para PMEs',
    description: 'Aceda a €24B+ disponíveis. Especialistas em Portugal 2030, PRR e fundos estruturais para PMEs portuguesas.',
    url: 'https://apoios.crescentia.pt',
    siteName: 'Crescentia Apoios',
    locale: 'pt_PT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crescentia Apoios | Fundos Europeus para PMEs',
    description: 'Aceda a €24B+ em apoios. Portugal 2030 & PRR experts.',
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
    "@type": "FinancialService",
    "name": "Crescentia Apoios",
    "description": "Consultoria em apoios europeus para PMEs portuguesas",
    "url": "https://apoios.crescentia.pt",
    "logo": "https://apoios.crescentia.pt/logos/Crescentia-Icon-Yellow.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+351-913-960-220",
      "contactType": "Customer Service",
      "email": "info@crescentia.pt",
      "areaServed": "PT",
      "availableLanguage": ["Portuguese", "English"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "PT",
      "addressLocality": "Porto"
    }
  }

  return (
    <html lang="pt">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        {/* Google Analytics - Apoios */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QV978BBKXN"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QV978BBKXN', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body className="font-sans antialiased bg-[#0a0a0a] text-white">
        {children}
      </body>
    </html>
  )
}
