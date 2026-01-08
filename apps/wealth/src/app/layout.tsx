import type { Metadata, Viewport } from 'next'
import { Space_Grotesk } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { WebsiteSchema, ServiceSchema } from './schema'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap', // Critical for performance - prevents FOIT
  preload: true,
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#12141C',
}

/**
 * SEO Metadata Configuration
 *
 * To add OG image in the future:
 * 1. Add image file: apps/wealth/public/og-image.jpg (1200x630px)
 * 2. Uncomment image sections in openGraph and twitter objects below
 * 3. Change twitter.card back to 'summary_large_image'
 */
export const metadata: Metadata = {
  metadataBase: new URL('https://wealth.crescentia.pt'),
  title: {
    default: 'IFICI Tax Optimization Portugal | 20% Tax Rate for 10 Years | Crescentia Wealth',
    template: '%s | Crescentia Wealth'
  },
  description: 'Expert IFICI and cryptocurrency tax optimization for high-income professionals relocating to Portugal. Reduce your tax burden by €50,000-€500,000+ over 10 years with Portugal\'s 20% tax regime.',
  keywords: [
    'IFICI Portugal',
    'NHR 2.0',
    'Portugal tax optimization',
    'crypto tax Portugal',
    'tax residency Portugal',
    'Portuguese tax regime',
    '20% tax Portugal',
    'relocate to Portugal',
    'HNWI Portugal',
    'cryptocurrency tax planning',
    'international tax planning',
    'Portugal Golden Visa alternative',
    'tech executives Portugal',
    'digital nomad tax Portugal',
    'high net worth Portugal',
    'expat tax Portugal',
    'wealth management Portugal',
    'tax consultant Portugal',
    'IFICI application',
    'Portuguese residency tax benefits'
  ],
  authors: [{ name: 'Crescentia Wealth' }],
  creator: 'Crescentia',
  publisher: 'Crescentia',
  icons: {
    icon: '/logos/Crescentia-Icon-Yellow.svg',
    apple: '/logos/Crescentia-Icon-Yellow.svg',
  },
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://wealth.crescentia.pt',
    siteName: 'Crescentia Wealth',
    title: 'IFICI Tax Optimization Portugal | 20% Tax for 10 Years',
    description: 'Expert IFICI and cryptocurrency tax optimization for high-income professionals. Reduce your tax burden by €50,000-€500,000+ over 10 years.',
    // No images - clean social sharing with title and description only
    // Uncomment below to add OG image:
    // images: [
    //   {
    //     url: '/og-image.jpg',
    //     width: 1200,
    //     height: 630,
    //     alt: 'Crescentia Wealth - IFICI Tax Optimization Portugal',
    //   },
    // ],
  },
  twitter: {
    card: 'summary', // Changed from 'summary_large_image' - no image card
    title: 'IFICI Tax Optimization Portugal | Crescentia Wealth',
    description: 'Expert IFICI and cryptocurrency tax optimization for high-income professionals relocating to Portugal.',
    // Uncomment below to add Twitter image:
    // images: ['/og-image.jpg'],
    creator: '@crescentia',
  },
  alternates: {
    canonical: 'https://wealth.crescentia.pt',
  },
  verification: {
    // google: 'ADD_GOOGLE_VERIFICATION_CODE_HERE', // User needs to add from Search Console
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <head>
        {/* Preconnect to external resources for performance */}
        <link rel="preconnect" href="https://calendly.com" />
        <link rel="dns-prefetch" href="https://calendly.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* Schema.org structured data */}
        <WebsiteSchema />
        <ServiceSchema />

        {/* Google Analytics - Wealth */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-V47LMR3NQ4"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-V47LMR3NQ4', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body className="font-sans antialiased bg-white-100 text-dark-500">
        {children}
      </body>
    </html>
  )
}
