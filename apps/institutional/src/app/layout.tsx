import type { Metadata } from 'next'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  // Base URL para canonical e og:image
  metadataBase: new URL('https://crescentia.pt'),

  // SEO Básico
  title: 'Crescentia | Consultoria Apoios Comunitários Portugal 2030',
  description:
    'Consultoria especializada em fundos Portugal 2030 e PRR. Apoiamos PMEs portuguesas a aceder a milhões em financiamento europeu com taxa de sucesso elevada.',
  keywords: [
    'apoios comunitários',
    'portugal 2030',
    'PRR',
    'financiamento empresas',
    'consultoria fundos europeus',
    'crescentia',
    'apoios europeus',
    'incentivos pme',
    'fundos estruturais',
    'inovação empresarial',
  ],
  authors: [{ name: 'Crescentia' }],

  // Favicon
  icons: {
    icon: '/logos/Crescentia-Icon-Yellow.svg',
    apple: '/logos/Crescentia-Icon-Yellow.svg',
  },

  // Open Graph (Facebook, LinkedIn)
  openGraph: {
    title: 'Crescentia | Consultoria Apoios Comunitários Portugal 2030',
    description: 'Consultoria especializada em fundos Portugal 2030 e PRR. Apoiamos PMEs portuguesas a aceder a milhões em financiamento europeu.',
    url: 'https://crescentia.pt',
    siteName: 'Crescentia',
    locale: 'pt_PT',
    type: 'website',
    images: [
      {
        url: '/logos/Crescentia-Horizontal-MainColor-Blackout.svg',
        width: 1200,
        height: 630,
        alt: 'Crescentia - Consultoria em Apoios Comunitários',
      },
    ],
  },

  // Twitter Cards
  twitter: {
    card: 'summary_large_image',
    title: 'Crescentia | Consultoria Apoios Comunitários Portugal 2030',
    description: 'Apoiamos PMEs portuguesas a aceder a milhões em financiamento europeu Portugal 2030 e PRR.',
    images: ['/logos/Crescentia-Horizontal-MainColor-Blackout.svg'],
  },

  // Robots & Indexação
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Canonical (alternates)
  alternates: {
    canonical: 'https://crescentia.pt',
  },

  // Verificação de motores de busca (se necessário no futuro)
  // verification: {
  //   google: 'código-verificação-google',
  // },
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
    "alternateName": "Crescentia Incentivos",
    "description": "Consultoria especializada em apoios comunitários Portugal 2030 e PRR para PMEs portuguesas",
    "url": "https://crescentia.pt",
    "logo": "https://crescentia.pt/logos/Crescentia-Icon-Yellow.svg",
    "image": "https://crescentia.pt/logos/Crescentia-Horizontal-MainColor-Blackout.svg",
    "sameAs": [],
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
    },
    "knowsAbout": [
      "Portugal 2030",
      "PRR - Plano de Recuperação e Resiliência",
      "Fundos Europeus",
      "Apoios Comunitários",
      "Financiamento PME"
    ]
  }

  return (
    <html lang="pt">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* Google Analytics - Institutional */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6XGWBVK4D3"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6XGWBVK4D3', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body className="font-sans antialiased bg-[#0a0a0a] text-white">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
