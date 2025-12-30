'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// Content object with dual language support
const content = {
  en: {
    hero: {
      headline1: 'European Funding',
      headline2: 'Wealth Optimization',
      tagline: 'Exclusive advisory for ambitious businesses and professionals'
    },
    funding: {
      title: 'European Funding',
      subtitle: 'For Portuguese SMEs',
      description: 'Access millions in EU incentives. From innovation to internationalization, we handle the entire application process.',
      stat1: '€24B+',
      stat1Label: 'Available',
      stat2: 'Portugal 2030',
      stat2Label: '& PRR',
      cta: 'Learn More'
    },
    wealth: {
      title: 'Wealth Optimization',
      subtitle: 'For International Professionals',
      description: '20% tax for 10 years in Portugal. 0% crypto tax. Premium IFICI advisory for high-income professionals.',
      stat1: '20%',
      stat1Label: 'Tax Rate',
      stat2: '0%',
      stat2Label: 'Crypto Tax',
      cta: 'Learn More'
    },
    footer: {
      copyright: '© 2025 Crescentia Incentivos. Exclusive advisory services.',
      email: 'info@crescentia.pt',
      phone: '+351 913 960 220'
    }
  },
  pt: {
    hero: {
      headline1: 'Financiamento Europeu',
      headline2: 'Otimização Fiscal',
      tagline: 'Consultoria exclusiva para empresas e profissionais ambiciosos'
    },
    funding: {
      title: 'Financiamento Europeu',
      subtitle: 'Para PMEs Portuguesas',
      description: 'Aceda a milhões em incentivos europeus. Da inovação à internacionalização, tratamos de todo o processo de candidatura.',
      stat1: '€24B+',
      stat1Label: 'Disponíveis',
      stat2: 'Portugal 2030',
      stat2Label: '& PRR',
      cta: 'Saber Mais'
    },
    wealth: {
      title: 'Otimização Fiscal',
      subtitle: 'Para Profissionais Internacionais',
      description: '20% de imposto por 10 anos em Portugal. 0% imposto crypto. Consultoria IFICI premium para profissionais de alto rendimento.',
      stat1: '20%',
      stat1Label: 'Taxa Imposto',
      stat2: '0%',
      stat2Label: 'Imposto Crypto',
      cta: 'Saber Mais'
    },
    footer: {
      copyright: '© 2025 Crescentia Incentivos. Serviços de consultoria exclusiva.',
      email: 'info@crescentia.pt',
      phone: '+351 913 960 220'
    }
  }
}

export default function InstitutionalPage() {
  const [language, setLanguage] = useState<'en' | 'pt'>('pt') // DEFAULT PT
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')
  const [scrolled, setScrolled] = useState(false)

  // Detect system theme preference
  useEffect(() => {
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setTheme(systemPrefersDark ? 'dark' : 'light')

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? 'dark' : 'light')
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? theme === 'dark'
            ? 'bg-[#0a0a0a]/95 border-b border-white/5 shadow-2xl'
            : 'bg-white/95 border-b border-gray-200/50 shadow-lg'
          : 'bg-transparent'
      } backdrop-blur-xl`}>
        <div className="container mx-auto px-4 md:px-6 py-4 md:py-5 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center transition-opacity hover:opacity-80">
            <img
              src={theme === 'dark'
                ? "/logos/Crescentia-Horizontal-MainColor-Whiteout.svg"
                : "/logos/Crescentia-Horizontal-MainColor-Blackout.svg"
              }
              alt="Crescentia Incentivos"
              className="h-6 md:h-8"
            />
          </a>

          {/* Controls */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Theme toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={`p-2 rounded-lg transition-colors ${
                theme === 'dark'
                  ? 'bg-white/5 hover:bg-white/10 text-white'
                  : 'bg-black/5 hover:bg-black/10 text-black'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* Language Switcher */}
            <div className="flex items-center gap-1.5 md:gap-2">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${
                  language === 'en'
                    ? 'bg-yellow-500 text-black shadow-[0_0_20px_rgba(234,179,8,0.4)]'
                    : theme === 'dark'
                      ? 'text-white/60 hover:text-white hover:bg-white/5'
                      : 'text-black/60 hover:text-black hover:bg-black/5'
                }`}
              >
                EN
              </button>
              <div className={`w-px h-4 ${theme === 'dark' ? 'bg-white/20' : 'bg-gray-300'}`} />
              <button
                onClick={() => setLanguage('pt')}
                className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${
                  language === 'pt'
                    ? 'bg-yellow-500 text-black shadow-[0_0_20px_rgba(234,179,8,0.4)]'
                    : theme === 'dark'
                      ? 'text-white/60 hover:text-white hover:bg-white/5'
                      : 'text-black/60 hover:text-black hover:bg-black/5'
                }`}
              >
                PT
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Section with Background */}
      <section className={`relative min-h-screen overflow-hidden ${
        theme === 'dark' ? 'bg-[#0a0a0a]' : 'bg-white'
      }`}>
        {/* Layer 1: Base */}
        <div className={`absolute inset-0 ${
          theme === 'dark' ? 'bg-[#0a0a0a]' : 'bg-white'
        }`} />

        {/* Layer 2: Radial gradient */}
        <div className={`absolute inset-0 ${
          theme === 'dark'
            ? 'bg-[radial-gradient(ellipse_at_center,#1a1d2e_0%,#0a0a0a_50%)]'
            : 'bg-[radial-gradient(ellipse_at_top,#fafafa_0%,#ffffff_50%)]'
        }`} />

        {/* Layer 3: Yellow accent glows - MORE VISIBLE in light */}
        {theme === 'dark' ? (
          <>
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-yellow-500/12 rounded-full blur-[120px] animate-pulse-slow" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-yellow-600/10 rounded-full blur-[100px] animate-pulse-slower" />
          </>
        ) : (
          <>
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-yellow-500/8 rounded-full blur-[120px] animate-pulse-slow" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-yellow-400/6 rounded-full blur-[100px] animate-pulse-slower" />
          </>
        )}

        {/* Layer 4: Gradient mesh - more visible in light */}
        <div className={`absolute inset-0 ${theme === 'dark' ? 'opacity-25' : 'opacity-40'}`}>
          <div className={`absolute inset-0 bg-gradient-to-br ${
            theme === 'dark'
              ? 'from-yellow-500/8 via-transparent to-yellow-600/8'
              : 'from-yellow-50 via-transparent to-orange-50'
          } animate-gradient-shift`} />
        </div>

        {/* Layer 5: Noise texture - more visible */}
        <div
          className={`absolute inset-0 mix-blend-overlay ${
            theme === 'dark' ? 'opacity-[0.02]' : 'opacity-[0.03]'
          }`}
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
          }}
        />

        {/* Layer 6: Subtle top highlight (premium depth) */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yellow-200 to-transparent opacity-50" />

        {/* Content */}
        <div className="relative z-10">
          {/* Hero section */}
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center pt-24 md:pt-32 pb-16 md:pb-24">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
                  <span className={`bg-gradient-to-r from-yellow-500 via-yellow-600 to-orange-500 bg-clip-text text-transparent ${
                    theme === 'dark'
                      ? 'drop-shadow-[0_0_60px_rgba(234,179,8,0.4)]'
                      : 'drop-shadow-[0_4px_20px_rgba(234,179,8,0.25)]'
                  }`}>
                    {content[language].hero.headline1}
                  </span>
                  <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}> & </span>
                  <span className={`bg-gradient-to-r from-yellow-500 via-yellow-600 to-orange-500 bg-clip-text text-transparent ${
                    theme === 'dark'
                      ? 'drop-shadow-[0_0_60px_rgba(234,179,8,0.4)]'
                      : 'drop-shadow-[0_4px_20px_rgba(234,179,8,0.25)]'
                  }`}>
                    {content[language].hero.headline2}
                  </span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className={`text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed ${
                  theme === 'dark' ? 'text-white/70' : 'text-gray-700'
                }`}
              >
                {content[language].hero.tagline}
              </motion.p>
            </div>
          </div>

          {/* Cards container */}
          <div className="container mx-auto px-4 md:px-6 pb-16 md:pb-32">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">

              {/* FUNDING CARD (LEFT) */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
                whileHover={{ y: -12, scale: 1.01 }}
                className={`group relative p-6 md:p-10 lg:p-12 rounded-2xl md:rounded-3xl transition-all duration-500 overflow-hidden ${
                  theme === 'dark'
                    ? 'bg-white/[0.02] backdrop-blur-2xl border border-white/[0.06] hover:border-yellow-500/30'
                    : 'bg-white/80 backdrop-blur-2xl border border-gray-200/50 hover:border-yellow-500/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.08)]'
                }`}
                style={{ willChange: 'transform' }}
              >
                {/* Hover gradient border */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className={`absolute inset-[1px] rounded-3xl ${
                    theme === 'dark'
                      ? 'bg-gradient-to-br from-yellow-500/10 via-transparent to-transparent'
                      : 'bg-gradient-to-br from-yellow-500/15 via-yellow-100/50 to-transparent'
                  }`} />
                </div>

                {/* Glow on hover (dark only) */}
                {theme === 'dark' && (
                  <div className="absolute -top-40 -right-40 w-96 h-96 bg-yellow-500/15 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                )}

                {/* Inner highlight (depth) */}
                <div className={`absolute inset-0 rounded-3xl ${
                  theme === 'dark'
                    ? 'shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]'
                    : 'shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]'
                }`} />

                {/* Subtle inner shadow (MORE depth in light) */}
                {theme === 'light' && (
                  <div className="absolute inset-0 rounded-3xl shadow-[inset_0_0_60px_rgba(0,0,0,0.02)]" />
                )}

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon circle */}
                  <div className={`w-16 h-16 md:w-20 md:h-20 mb-6 md:mb-8 rounded-xl md:rounded-2xl flex items-center justify-center backdrop-blur-xl ${
                    theme === 'dark'
                      ? 'bg-gradient-to-br from-yellow-400/15 to-yellow-600/10 border border-yellow-500/20'
                      : 'bg-gradient-to-br from-yellow-400/30 to-yellow-600/20 border border-yellow-500/40 shadow-inner'
                  }`}>
                    <svg className={`w-8 h-8 md:w-10 md:h-10 ${
                      theme === 'dark' ? 'text-yellow-400/80' : 'text-yellow-700'
                    }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>

                  {/* Title */}
                  <h2 className={`text-3xl md:text-4xl font-bold mb-3 tracking-tight ${
                    theme === 'dark' ? 'text-white' : 'text-black'
                  }`}>
                    {content[language].funding.title}
                  </h2>

                  {/* Subtitle */}
                  <p className={`text-base md:text-lg mb-6 font-medium ${
                    theme === 'dark' ? 'text-yellow-400/90' : 'text-yellow-600'
                  }`}>
                    {content[language].funding.subtitle}
                  </p>

                  {/* Description */}
                  <p className={`text-sm md:text-base leading-relaxed mb-8 md:mb-10 ${
                    theme === 'dark' ? 'text-white/70' : 'text-gray-600'
                  }`}>
                    {content[language].funding.description}
                  </p>

                  {/* Stats row */}
                  <div className={`flex items-center gap-6 md:gap-8 mb-8 md:mb-10 pb-8 md:pb-10 ${
                    theme === 'dark' ? 'border-b border-white/5' : 'border-b border-gray-200'
                  }`}>
                    <div>
                      <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-1">
                        {content[language].funding.stat1}
                      </div>
                      <div className={`text-xs md:text-sm ${
                        theme === 'dark' ? 'text-white/50' : 'text-gray-500'
                      }`}>
                        {content[language].funding.stat1Label}
                      </div>
                    </div>
                    <div className={`w-px h-12 ${
                      theme === 'dark' ? 'bg-white/10' : 'bg-gray-300'
                    }`} />
                    <div>
                      <div className={`text-lg md:text-xl font-semibold mb-1 ${
                        theme === 'dark' ? 'text-white/90' : 'text-gray-900'
                      }`}>
                        {content[language].funding.stat2}
                      </div>
                      <div className={`text-xs md:text-sm ${
                        theme === 'dark' ? 'text-white/50' : 'text-gray-500'
                      }`}>
                        {content[language].funding.stat2Label}
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <motion.a
                    href="/funding"
                    whileHover={{ x: 6 }}
                    className={`inline-flex items-center gap-3 font-semibold text-base md:text-lg transition-colors group/link ${
                      theme === 'dark'
                        ? 'text-yellow-400 hover:text-yellow-300'
                        : 'text-yellow-600 hover:text-yellow-700'
                    }`}
                  >
                    {content[language].funding.cta}
                    <svg className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.a>
                </div>
              </motion.div>

              {/* WEALTH CARD (RIGHT) */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
                whileHover={{ y: -12, scale: 1.01 }}
                className={`group relative p-6 md:p-10 lg:p-12 rounded-2xl md:rounded-3xl transition-all duration-500 overflow-hidden ${
                  theme === 'dark'
                    ? 'bg-white/[0.02] backdrop-blur-2xl border border-white/[0.06] hover:border-yellow-500/30'
                    : 'bg-white/80 backdrop-blur-2xl border border-gray-200/50 hover:border-yellow-500/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.08)]'
                }`}
                style={{ willChange: 'transform' }}
              >
                {/* Hover gradient border */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className={`absolute inset-[1px] rounded-3xl ${
                    theme === 'dark'
                      ? 'bg-gradient-to-br from-yellow-500/10 via-transparent to-transparent'
                      : 'bg-gradient-to-br from-yellow-500/15 via-yellow-100/50 to-transparent'
                  }`} />
                </div>

                {/* Glow on hover (dark only) */}
                {theme === 'dark' && (
                  <div className="absolute -top-40 -left-40 w-96 h-96 bg-yellow-500/15 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                )}

                {/* Inner highlight (depth) */}
                <div className={`absolute inset-0 rounded-3xl ${
                  theme === 'dark'
                    ? 'shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]'
                    : 'shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]'
                }`} />

                {/* Subtle inner shadow (MORE depth in light) */}
                {theme === 'light' && (
                  <div className="absolute inset-0 rounded-3xl shadow-[inset_0_0_60px_rgba(0,0,0,0.02)]" />
                )}

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon circle */}
                  <div className={`w-16 h-16 md:w-20 md:h-20 mb-6 md:mb-8 rounded-xl md:rounded-2xl flex items-center justify-center backdrop-blur-xl ${
                    theme === 'dark'
                      ? 'bg-gradient-to-br from-yellow-400/15 to-yellow-600/10 border border-yellow-500/20'
                      : 'bg-gradient-to-br from-yellow-400/30 to-yellow-600/20 border border-yellow-500/40 shadow-inner'
                  }`}>
                    <svg className={`w-8 h-8 md:w-10 md:h-10 ${
                      theme === 'dark' ? 'text-yellow-400/80' : 'text-yellow-700'
                    }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>

                  {/* Title */}
                  <h2 className={`text-3xl md:text-4xl font-bold mb-3 tracking-tight ${
                    theme === 'dark' ? 'text-white' : 'text-black'
                  }`}>
                    {content[language].wealth.title}
                  </h2>

                  {/* Subtitle */}
                  <p className={`text-base md:text-lg mb-6 font-medium ${
                    theme === 'dark' ? 'text-yellow-400/90' : 'text-yellow-600'
                  }`}>
                    {content[language].wealth.subtitle}
                  </p>

                  {/* Description */}
                  <p className={`text-sm md:text-base leading-relaxed mb-8 md:mb-10 ${
                    theme === 'dark' ? 'text-white/70' : 'text-gray-600'
                  }`}>
                    {content[language].wealth.description}
                  </p>

                  {/* Stats row */}
                  <div className={`flex items-center gap-6 md:gap-8 mb-8 md:mb-10 pb-8 md:pb-10 ${
                    theme === 'dark' ? 'border-b border-white/5' : 'border-b border-gray-200'
                  }`}>
                    <div>
                      <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-1">
                        {content[language].wealth.stat1}
                      </div>
                      <div className={`text-xs md:text-sm ${
                        theme === 'dark' ? 'text-white/50' : 'text-gray-500'
                      }`}>
                        {content[language].wealth.stat1Label}
                      </div>
                    </div>
                    <div className={`w-px h-12 ${
                      theme === 'dark' ? 'bg-white/10' : 'bg-gray-300'
                    }`} />
                    <div>
                      <div className={`text-lg md:text-xl font-semibold mb-1 ${
                        theme === 'dark' ? 'text-white/90' : 'text-gray-900'
                      }`}>
                        {content[language].wealth.stat2}
                      </div>
                      <div className={`text-xs md:text-sm ${
                        theme === 'dark' ? 'text-white/50' : 'text-gray-500'
                      }`}>
                        {content[language].wealth.stat2Label}
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <motion.a
                    href="https://wealth.crescentia.pt"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 6 }}
                    className={`inline-flex items-center gap-3 font-semibold text-base md:text-lg transition-colors group/link ${
                      theme === 'dark'
                        ? 'text-yellow-400 hover:text-yellow-300'
                        : 'text-yellow-600 hover:text-yellow-700'
                    }`}
                  >
                    {content[language].wealth.cta}
                    <svg className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`relative py-8 md:py-12 ${
        theme === 'dark'
          ? 'border-t border-white/5 bg-[#0a0a0a]'
          : 'border-t border-gray-200 bg-white'
      }`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 text-center md:text-left">
            {/* Copyright */}
            <p className={`text-sm ${
              theme === 'dark' ? 'text-white/60' : 'text-gray-600'
            }`}>
              {content[language].footer.copyright}
            </p>

            {/* Contact */}
            <div className="flex items-center gap-4 md:gap-6 text-sm">
              <a
                href={`mailto:${content[language].footer.email}`}
                className={`transition-colors ${
                  theme === 'dark'
                    ? 'text-white/60 hover:text-yellow-400'
                    : 'text-gray-600 hover:text-yellow-600'
                }`}
              >
                {content[language].footer.email}
              </a>
              <span className={theme === 'dark' ? 'text-white/30' : 'text-gray-400'}>|</span>
              <a
                href={`tel:${content[language].footer.phone.replace(/\s/g, '')}`}
                className={`transition-colors ${
                  theme === 'dark'
                    ? 'text-white/60 hover:text-yellow-400'
                    : 'text-gray-600 hover:text-yellow-600'
                }`}
              >
                {content[language].footer.phone}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
