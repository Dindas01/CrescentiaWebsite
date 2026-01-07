export function WebsiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Crescentia Wealth',
    description: 'IFICI tax optimization and wealth management services for international professionals relocating to Portugal',
    url: 'https://wealth.crescentia.pt',
    logo: 'https://wealth.crescentia.pt/logos/Crescentia-Horizontal-MainColor-Whiteout.svg',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'PT',
      addressLocality: 'Porto',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'wealth@crescentia.pt',
      contactType: 'Customer Service',
      areaServed: 'PT',
      availableLanguage: ['English', 'Portuguese'],
    },
    areaServed: {
      '@type': 'Country',
      name: 'Portugal',
    },
    serviceType: [
      'IFICI Tax Optimization',
      'Cryptocurrency Tax Planning',
      'International Wealth Planning',
      'Tax Residency Establishment',
      'Relocation Services',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ServiceSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Tax Optimization Consulting',
    provider: {
      '@type': 'Organization',
      name: 'Crescentia Wealth',
      url: 'https://wealth.crescentia.pt',
      logo: 'https://wealth.crescentia.pt/logos/Crescentia-Horizontal-MainColor-Whiteout.svg',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Portugal',
    },
    offers: {
      '@type': 'Offer',
      priceRange: '€5,000 - €75,000+',
      priceCurrency: 'EUR',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      bestRating: '5',
      worstRating: '1',
      ratingCount: '100',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
