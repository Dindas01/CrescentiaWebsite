import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'Crescentia | Financiamento Europeu & Otimização Fiscal',
  description:
    'Consultoria especializada em apoios europeus para PMEs e otimização fiscal para profissionais internacionais. Portugal 2030, PRR e regime IFICI.',
  keywords: [
    'crescentia',
    'apoios europeus',
    'portugal 2030',
    'financiamento empresas',
    'ifici',
    'otimização fiscal',
    'consultoria portugal',
    'PRR',
    'fundos europeus',
    'wealth optimization',
  ],
  authors: [{ name: 'Crescentia' }],
  icons: {
    icon: '/logos/Crescentia-Icon-Yellow.svg',
    apple: '/logos/Crescentia-Icon-Yellow.svg',
  },
  openGraph: {
    title: 'Crescentia | Financiamento Europeu & Otimização Fiscal',
    description: 'Aceda a €24B+ em fundos europeus. Consultoria especializada para PMEs e profissionais internacionais.',
    url: 'https://crescentia.pt',
    siteName: 'Crescentia',
    locale: 'pt_PT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crescentia | Financiamento Europeu & Otimização Fiscal',
    description: 'Aceda a €24B+ em fundos europeus. Consultoria especializada.',
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
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Crescentia",
    "description": "Consultoria em fundos europeus e otimização fiscal",
    "url": "https://crescentia.pt",
    "logo": "https://crescentia.pt/logos/Crescentia-Icon-Yellow.svg",
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

  const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX' // TODO: Replace with actual GA4 measurement ID

  return (
    <html lang="pt">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
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
      <body className="font-sans antialiased bg-[#0a0a0a] text-white">
        {children}
      </body>
    </html>
  )
}
