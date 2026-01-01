'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import CookieBanner from '@/components/CookieBanner'

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
      description: 'Access millions in EU incentives. From innovation to internationalization.',
      stat: '€24B+',
      statLabel: 'Available',
      cta: 'Learn More'
    },
    wealth: {
      title: 'Wealth Optimization',
      subtitle: 'For International Professionals',
      description: '20% tax for 10 years. 0% crypto tax. Premium IFICI advisory.',
      stat1: '20%',
      stat1Label: 'Tax Rate',
      stat2: '0%',
      stat2Label: 'Crypto Tax',
      cta: 'Learn More'
    },
    whyUs: {
      title: 'Why Crescentia?',
      reasons: [
        {
          title: 'Expert Team',
          desc: 'Specialists in EU funding and tax optimization'
        },
        {
          title: 'Fast Processing',
          desc: 'Quick turnaround on all applications'
        },
        {
          title: 'Transparent Pricing',
          desc: 'Clear pricing with success-based fees'
        },
        {
          title: 'Proven Results',
          desc: 'High success rate in funding approvals'
        }
      ]
    },
    stats: {
      funding: 'Available Funding',
      clients: 'Clients Served',
      cryptoTax: 'Crypto Tax',
      taxRate: 'IFICI Tax Rate'
    },
    about: {
      title: 'About Crescentia',
      desc: 'Portuguese consultancy specializing in EU funding and international tax optimization.'
    },
    services: {
      title: 'Our',
      titleHighlight: 'Services',
      subtitle: 'Comprehensive support for European funding and tax optimization',
      items: [
        {
          title: 'Innovation & R&D',
          desc: 'Funding for research, development and innovative projects'
        },
        {
          title: 'Digitalization',
          desc: 'Support for digital transformation and technology adoption'
        },
        {
          title: 'Internationalization',
          desc: 'Funding for market expansion and international growth'
        }
      ]
    },
    cta: {
      title: 'Ready to',
      titleHighlight: 'Grow',
      subtitle: 'Get in touch to discuss your funding or tax optimization needs',
      contact: 'Contact Us'
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
      description: 'Aceda a milhões em incentivos europeus. Da inovação à internacionalização.',
      stat: '€24B+',
      statLabel: 'Disponíveis',
      cta: 'Saber Mais'
    },
    wealth: {
      title: 'Otimização Fiscal',
      subtitle: 'Para Profissionais Internacionais',
      description: '20% de imposto por 10 anos. 0% imposto crypto. Consultoria IFICI premium.',
      stat1: '20%',
      stat1Label: 'Taxa Imposto',
      stat2: '0%',
      stat2Label: 'Imposto Crypto',
      cta: 'Saber Mais'
    },
    whyUs: {
      title: 'Porquê a Crescentia?',
      reasons: [
        {
          title: 'Equipa Experiente',
          desc: 'Especialistas em fundos europeus e fiscalidade'
        },
        {
          title: 'Processo Rápido',
          desc: 'Respostas rápidas em todas as candidaturas'
        },
        {
          title: 'Preços Transparentes',
          desc: 'Preços claros com taxas de sucesso'
        },
        {
          title: 'Resultados Comprovados',
          desc: 'Alta taxa de sucesso nas aprovações'
        }
      ]
    },
    stats: {
      funding: 'Fundos Disponíveis',
      clients: 'Clientes Servidos',
      cryptoTax: 'Imposto Crypto',
      taxRate: 'Taxa IFICI'
    },
    about: {
      title: 'Sobre a Crescentia',
      desc: 'Consultoria portuguesa especializada em fundos europeus e otimização fiscal internacional.'
    },
    services: {
      title: 'Os Nossos',
      titleHighlight: 'Serviços',
      subtitle: 'Suporte completo para financiamento europeu e otimização fiscal',
      items: [
        {
          title: 'Inovação & I&D',
          desc: 'Financiamento para investigação, desenvolvimento e projetos inovadores'
        },
        {
          title: 'Digitalização',
          desc: 'Apoio à transformação digital e adoção de tecnologia'
        },
        {
          title: 'Internacionalização',
          desc: 'Financiamento para expansão de mercado e crescimento internacional'
        }
      ]
    },
    cta: {
      title: 'Pronto para',
      titleHighlight: 'Crescer',
      subtitle: 'Entre em contacto para discutir as suas necessidades de financiamento ou otimização fiscal',
      contact: 'Contactar'
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
            {/* Services Dropdown */}
            <div className="relative group">
              <button className={`hidden md:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                theme === 'dark'
                  ? 'text-white/80 hover:text-white hover:bg-white/5'
                  : 'text-gray-700 hover:text-black hover:bg-gray-100'
              }`}>
                Serviços
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div className={`absolute top-full right-0 mt-2 w-64 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ${
                theme === 'dark'
                  ? 'bg-[#12141C] border border-white/10'
                  : 'bg-white border border-gray-200'
              }`}>
                <div className="p-2">
                  <a
                    href="https://apoios.crescentia.pt"
                    className={`block px-4 py-3 rounded-xl transition-colors ${
                      theme === 'dark'
                        ? 'hover:bg-white/5'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className={`font-semibold mb-1 ${
                      theme === 'dark' ? 'text-white' : 'text-black'
                    }`}>
                      Para PMEs
                    </div>
                    <div className={`text-xs ${
                      theme === 'dark' ? 'text-white/50' : 'text-gray-500'
                    }`}>
                      Apoios Europeus & Fundos
                    </div>
                  </a>

                  <a
                    href="https://wealth.crescentia.pt"
                    className={`block px-4 py-3 rounded-xl transition-colors ${
                      theme === 'dark'
                        ? 'hover:bg-white/5'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className={`font-semibold mb-1 ${
                      theme === 'dark' ? 'text-white' : 'text-black'
                    }`}>
                      For Professionals
                    </div>
                    <div className={`text-xs ${
                      theme === 'dark' ? 'text-white/50' : 'text-gray-500'
                    }`}>
                      IFICI Tax Optimization
                    </div>
                  </a>
                </div>
              </div>
            </div>

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
                    ? 'bg-yellow-500 text-black shadow-[0_0_20px_rgba(245,207,0,0.4)]'
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
                    ? 'bg-yellow-500 text-black shadow-[0_0_20px_rgba(245,207,0,0.4)]'
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

      {/* Hero - Centered & Simple */}
      <section className={`relative py-32 md:py-40 overflow-hidden ${
        theme === 'dark' ? 'bg-[#0a0a0a]' : 'bg-[#fffdf7]'
      }`}>
        {/* Layer 1: Base */}
        <div className={`absolute inset-0 ${
          theme === 'dark' ? 'bg-[#0a0a0a]' : 'bg-[#fffdf7]'
        }`} />

        {/* Layer 2: Radial gradient */}
        <div className={`absolute inset-0 ${
          theme === 'dark'
            ? 'bg-[radial-gradient(ellipse_at_center,#1a1d2e_0%,#0a0a0a_50%)]'
            : 'bg-[radial-gradient(ellipse_at_top,#faf8f2_0%,#fffdf7_50%)]'
        }`} />

        {/* Layer 3: Yellow accent glows - MORE VISIBLE in light */}
        {theme === 'dark' ? (
          <>
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-yellow-500/12 rounded-full blur-[120px] animate-pulse-slow" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-yellow-600/10 rounded-full blur-[100px] animate-pulse-slower" />
          </>
        ) : (
          <>
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-yellow-400/12 rounded-full blur-[120px] animate-pulse-slow" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-yellow-300/10 rounded-full blur-[100px] animate-pulse-slower" />
          </>
        )}

        {/* Layer 4: Gradient mesh - more visible in light */}
        <div className={`absolute inset-0 ${theme === 'dark' ? 'opacity-25' : 'opacity-50'}`}>
          <div className={`absolute inset-0 bg-gradient-to-br ${
            theme === 'dark'
              ? 'from-yellow-500/8 via-transparent to-yellow-600/8'
              : 'from-yellow-50/60 via-transparent to-yellow-100/40'
          } animate-gradient-shift`} />
        </div>

        {/* Layer 5: Noise texture - more visible */}
        <div
          className={`absolute inset-0 mix-blend-overlay ${
            theme === 'dark' ? 'opacity-[0.02]' : 'opacity-[0.04]'
          }`}
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
          }}
        />

        {/* Layer 6: Subtle top highlight (premium depth) */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yellow-200 to-transparent opacity-50" />

        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-6">
              <span className={`bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent ${
                theme === 'dark'
                  ? 'drop-shadow-[0_0_60px_rgba(245,207,0,0.4)]'
                  : 'drop-shadow-[0_4px_20px_rgba(245,207,0,0.25)]'
              }`}>
                {content[language].hero.headline1}
              </span>
              {' '}
              <span className={theme === 'dark' ? 'text-white/90' : 'text-gray-900'}>
                &
              </span>
              {' '}
              <span className={`bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent ${
                theme === 'dark'
                  ? 'drop-shadow-[0_0_60px_rgba(245,207,0,0.4)]'
                  : 'drop-shadow-[0_4px_20px_rgba(245,207,0,0.25)]'
              }`}>
                {content[language].hero.headline2}
              </span>
            </h1>

            <p className={`text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto ${
              theme === 'dark' ? 'text-white/70' : 'text-gray-800'
            }`}>
              {content[language].hero.tagline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid - Modern Layout */}
      <section className={`relative py-24 md:py-32 ${
        theme === 'dark' ? 'bg-[#0a0a0a]' : 'bg-[#faf8f2]'
      }`}>
        <div className="container mx-auto px-4 md:px-6">
          {/* BENTO GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8 max-w-7xl mx-auto">

            {/* FUNDING CARD - Large (spans 5 cols on lg) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`lg:col-span-5 p-8 md:p-10 rounded-3xl transition-all duration-500 ${
                theme === 'dark'
                  ? 'bg-white/[0.02] backdrop-blur-2xl border border-white/[0.06] hover:border-yellow-500/30'
                  : 'bg-[#ffffff]/95 backdrop-blur-xl border border-gray-200/80 shadow-[0_8px_40px_rgba(245,207,0,0.08)] hover:shadow-[0_20px_70px_rgba(245,207,0,0.15)]'
              }`}
            >
              {/* Icon */}
              <div className={`w-16 h-16 mb-6 rounded-2xl flex items-center justify-center ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-yellow-400/15 to-yellow-600/10 border border-yellow-500/20'
                  : 'bg-gradient-to-br from-yellow-400/40 to-yellow-500/30 border border-yellow-500/50 shadow-[inset_0_2px_8px_rgba(245,207,0,0.2)]'
              }`}>
                <svg className={`w-8 h-8 ${theme === 'dark' ? 'text-yellow-400/80' : 'text-yellow-700'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

              {/* Content */}
              <h3 className={`text-3xl md:text-4xl font-bold mb-3 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                {content[language].funding.title}
              </h3>

              <p className={`text-base md:text-lg mb-6 font-medium ${
                theme === 'dark' ? 'text-yellow-400/90' : 'text-yellow-600'
              }`}>
                {content[language].funding.subtitle}
              </p>

              <p className={`text-sm md:text-base leading-relaxed mb-8 ${
                theme === 'dark' ? 'text-white/70' : 'text-gray-700'
              }`}>
                {content[language].funding.description}
              </p>

              {/* Stats */}
              <div className="flex items-center gap-6 mb-8">
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                    {content[language].funding.stat}
                  </div>
                  <div className={`text-xs ${theme === 'dark' ? 'text-white/50' : 'text-gray-500'}`}>
                    {content[language].funding.statLabel}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <motion.a
                href="/funding"
                whileHover={{ x: 6 }}
                className={`inline-flex items-center gap-2 font-semibold transition-colors ${
                  theme === 'dark' ? 'text-yellow-400 hover:text-yellow-300' : 'text-yellow-600 hover:text-yellow-700'
                }`}
              >
                {content[language].funding.cta}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </motion.div>

            {/* WHY US CARD - Tall (spans 4 cols, row-span-2) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`lg:col-span-4 lg:row-span-2 p-8 md:p-10 rounded-3xl transition-all duration-500 ${
                theme === 'dark'
                  ? 'bg-white/[0.02] backdrop-blur-2xl border border-white/[0.06] hover:border-yellow-500/30'
                  : 'bg-[#ffffff]/95 backdrop-blur-xl border border-gray-200/80 shadow-[0_8px_40px_rgba(245,207,0,0.08)] hover:shadow-[0_20px_70px_rgba(245,207,0,0.15)]'
              }`}
            >
              <h3 className={`text-2xl md:text-3xl font-bold mb-8 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                {content[language].whyUs.title}
              </h3>

              {/* 4 Reasons */}
              <div className="space-y-6">
                {content[language].whyUs.reasons.map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${
                      theme === 'dark'
                        ? 'bg-yellow-500/10 border border-yellow-500/20'
                        : 'bg-yellow-500/30 border border-yellow-500/40'
                    }`}>
                      <svg className={`w-5 h-5 ${theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className={`font-semibold mb-1 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                        {item.title}
                      </h4>
                      <p className={`text-sm ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* STATS CARD - Small (spans 3 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`lg:col-span-3 p-8 rounded-3xl transition-all duration-500 ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 border border-yellow-500/20'
                  : 'bg-gradient-to-br from-yellow-400/20 to-yellow-500/10 border border-yellow-500/30 shadow-lg'
              }`}
            >
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-2">
                €24B+
              </div>
              <p className={`text-sm font-medium ${theme === 'dark' ? 'text-white/70' : 'text-gray-700'}`}>
                {content[language].stats.funding}
              </p>
              <p className={`text-xs mt-2 ${theme === 'dark' ? 'text-white/50' : 'text-gray-600'}`}>
                Portugal 2030 & PRR
              </p>
            </motion.div>

            {/* WEALTH CARD - Large (spans 5 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`lg:col-span-5 p-8 md:p-10 rounded-3xl transition-all duration-500 ${
                theme === 'dark'
                  ? 'bg-white/[0.02] backdrop-blur-2xl border border-white/[0.06] hover:border-yellow-500/30'
                  : 'bg-[#ffffff]/95 backdrop-blur-xl border border-gray-200/80 shadow-[0_8px_40px_rgba(245,207,0,0.08)] hover:shadow-[0_20px_70px_rgba(245,207,0,0.15)]'
              }`}
            >
              {/* Icon */}
              <div className={`w-16 h-16 mb-6 rounded-2xl flex items-center justify-center ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-yellow-400/15 to-yellow-600/10 border border-yellow-500/20'
                  : 'bg-gradient-to-br from-yellow-400/40 to-yellow-500/30 border border-yellow-500/50 shadow-[inset_0_2px_8px_rgba(245,207,0,0.2)]'
              }`}>
                <svg className={`w-8 h-8 ${theme === 'dark' ? 'text-yellow-400/80' : 'text-yellow-700'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>

              {/* Content */}
              <h3 className={`text-3xl md:text-4xl font-bold mb-3 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                {content[language].wealth.title}
              </h3>

              <p className={`text-base md:text-lg mb-6 font-medium ${
                theme === 'dark' ? 'text-yellow-400/90' : 'text-yellow-600'
              }`}>
                {content[language].wealth.subtitle}
              </p>

              <p className={`text-sm md:text-base leading-relaxed mb-8 ${
                theme === 'dark' ? 'text-white/70' : 'text-gray-700'
              }`}>
                {content[language].wealth.description}
              </p>

              {/* Stats */}
              <div className="flex items-center gap-6 mb-8">
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                    {content[language].wealth.stat1}
                  </div>
                  <div className={`text-xs ${theme === 'dark' ? 'text-white/50' : 'text-gray-500'}`}>
                    {content[language].wealth.stat1Label}
                  </div>
                </div>
                <div className={`w-px h-10 ${theme === 'dark' ? 'bg-white/10' : 'bg-gray-300'}`} />
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                    {content[language].wealth.stat2}
                  </div>
                  <div className={`text-xs ${theme === 'dark' ? 'text-white/50' : 'text-gray-500'}`}>
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
                className={`inline-flex items-center gap-2 font-semibold transition-colors ${
                  theme === 'dark' ? 'text-yellow-400 hover:text-yellow-300' : 'text-yellow-600 hover:text-yellow-700'
                }`}
              >
                {content[language].wealth.cta}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </motion.div>

            {/* ABOUT US CARD - Small (spans 3 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={`lg:col-span-3 p-8 rounded-3xl transition-all duration-500 ${
                theme === 'dark'
                  ? 'bg-white/[0.02] backdrop-blur-2xl border border-white/[0.06] hover:border-yellow-500/30'
                  : 'bg-white/80 backdrop-blur-2xl border border-gray-200/50 hover:border-yellow-500/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)]'
              }`}
            >
              <div className={`w-12 h-12 mb-4 rounded-xl flex items-center justify-center ${
                theme === 'dark'
                  ? 'bg-yellow-500/10 border border-yellow-500/20'
                  : 'bg-yellow-500/20 border border-yellow-500/30'
              }`}>
                <svg className={`w-6 h-6 ${theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>

              <h4 className={`text-lg font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                {content[language].about.title}
              </h4>

              <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
                {content[language].about.desc}
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Stats Bar - Full Width with Animated Counters */}
      <section className={`relative py-16 border-y ${
        theme === 'dark' ? 'border-white/10 bg-[#0a0a0a]' : 'border-yellow-500/15 bg-gradient-to-b from-yellow-50/30 to-transparent'
      }`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                value: '€24B+',
                label: content[language].stats.funding
              },
              {
                value: '50+',
                label: content[language].stats.clients
              },
              {
                value: '0%',
                label: content[language].stats.cryptoTax
              },
              {
                value: '20%',
                label: content[language].stats.taxRate
              },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="text-center"
              >
                <div className={`text-4xl md:text-5xl font-bold mb-2 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 bg-clip-text text-transparent'
                    : 'text-yellow-600'
                }`}>
                  {stat.value}
                </div>
                <div className={`text-sm md:text-base ${
                  theme === 'dark' ? 'text-white/60' : 'text-gray-600'
                }`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={`relative py-24 md:py-32 ${
        theme === 'dark' ? 'bg-[#0a0a0a]' : 'bg-[#fffdf7]'
      }`}>
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-black'
            }`}>
              {content[language].services.title}{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                {content[language].services.titleHighlight}
              </span>
            </h2>
            <p className={`text-lg md:text-xl max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-white/70' : 'text-gray-700'
            }`}>
              {content[language].services.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {content[language].services.items.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`p-8 rounded-3xl transition-all duration-500 ${
                  theme === 'dark'
                    ? 'bg-white/[0.02] backdrop-blur-2xl border border-white/[0.06] hover:border-yellow-500/30'
                    : 'bg-[#ffffff]/95 backdrop-blur-xl border border-gray-200/80 shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_60px_rgba(245,207,0,0.12)]'
                }`}
              >
                <div className={`w-14 h-14 mb-6 rounded-2xl flex items-center justify-center ${
                  theme === 'dark'
                    ? 'bg-yellow-500/10 border border-yellow-500/20'
                    : 'bg-yellow-500/30 border border-yellow-500/40'
                }`}>
                  <svg className={`w-7 h-7 ${theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {idx === 0 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    )}
                    {idx === 1 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    )}
                    {idx === 2 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    )}
                  </svg>
                </div>

                <h3 className={`text-xl md:text-2xl font-bold mb-3 ${
                  theme === 'dark' ? 'text-white' : 'text-black'
                }`}>
                  {service.title}
                </h3>

                <p className={`text-sm md:text-base leading-relaxed ${
                  theme === 'dark' ? 'text-white/70' : 'text-gray-600'
                }`}>
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={`relative py-24 md:py-32 overflow-hidden ${
        theme === 'dark' ? 'bg-[#0a0a0a]' : 'bg-[#faf8f2]'
      }`}>
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className={`absolute top-0 left-0 w-full h-px ${
            theme === 'dark'
              ? 'bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent'
              : 'bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent'
          }`} />
        </div>

        <div className="relative container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-black'
            }`}>
              {content[language].cta.title}{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                {content[language].cta.titleHighlight}
              </span>
              ?
            </h2>

            <p className={`text-lg md:text-xl mb-12 ${
              theme === 'dark' ? 'text-white/70' : 'text-gray-700'
            }`}>
              {content[language].cta.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:info@crescentia.pt"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold text-lg shadow-[0_0_30px_rgba(245,207,0,0.4)] hover:shadow-[0_0_40px_rgba(245,207,0,0.6)] transition-all"
              >
                {content[language].cta.contact}
              </motion.a>

              <motion.a
                href="tel:+351913960220"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`px-8 py-4 rounded-full font-semibold text-lg transition-all ${
                  theme === 'dark'
                    ? 'bg-white/5 border border-white/10 hover:border-white/20 text-white'
                    : 'bg-black/5 border border-black/10 hover:border-black/20 text-black'
                }`}
              >
                +351 913 960 220
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`relative py-8 md:py-12 ${
        theme === 'dark'
          ? 'border-t border-white/5 bg-[#0a0a0a]'
          : 'border-t border-yellow-500/10 bg-[#fffdf7]'
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

      {/* Cookie Consent Banner */}
      <CookieBanner theme={theme} />
    </>
  )
}
