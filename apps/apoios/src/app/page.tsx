'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function ApoiosPage() {
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
              alt="Crescentia Apoios"
              className="h-6 md:h-8"
            />
          </a>

          {/* Controls - Only theme toggle, NO language */}
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
          </div>
        </div>
      </header>

      {/* 1. HERO - Expertise Statement */}
      <section className={`relative py-32 md:py-40 overflow-hidden ${
        theme === 'dark' ? 'bg-[#0a0a0a]' : 'bg-[#fffdf7]'
      }`}>
        {/* Simple background - just gradient + noise */}
        <div className="absolute inset-0">
          <div className={theme === 'dark'
            ? 'bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a] to-[#12141C]'
            : 'bg-gradient-to-b from-[#fffdf7] via-[#faf8f2] to-[#fffdf7]'
          } />
          <div
            className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-6">
              <span className={`${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                Especialistas em{' '}
              </span>
              <br />
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                Apoios Europeus
              </span>
              <br />
              <span className={`${
                theme === 'dark' ? 'text-white/90' : 'text-gray-900'
              }`}>
                para PMEs
              </span>
            </h1>

            <p className={`text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto mb-12 leading-relaxed ${
              theme === 'dark' ? 'text-white/70' : 'text-gray-700'
            }`}>
              Acedemos a €24B+ disponíveis através de Portugal 2030, PRR e fundos estruturais.
              Consultoria estratégica para empresas que querem crescer.
            </p>

            <motion.a
              href="mailto:info@crescentia.pt"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold text-lg shadow-[0_0_30px_rgba(245,207,0,0.4)] hover:shadow-[0_0_40px_rgba(245,207,0,0.6)] transition-all"
            >
              Marcar Reunião Gratuita
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* 2. STATS BAR - Credibilidade */}
      <section className={`relative py-16 border-y ${
        theme === 'dark'
          ? 'border-white/10 bg-[#0a0a0a]'
          : 'border-gray-200 bg-white'
      }`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { value: '€24B+', label: 'Fundos Disponíveis' },
              { value: '6', label: 'Áreas Especializadas' },
              { value: '50+', label: 'Projetos Submetidos' },
              { value: '2020', label: 'No Mercado Desde' },
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
                    ? 'text-yellow-400'
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

      {/* Sections 3-6 will be added - This is Part 1 of the implementation */}
      {/* Awaiting Part 2 implementation with remaining sections */}

    </>
  )
}
