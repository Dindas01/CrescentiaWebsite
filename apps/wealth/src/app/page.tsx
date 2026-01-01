'use client'

import { useState, useEffect, useCallback } from 'react'
import { Button, Footer, PricingCard, CalendlyModal } from '@crescentia/ui'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import CookieBanner from '../components/CookieBanner'

// Throttle utility for performance
function throttle<T extends (...args: any[]) => any>(func: T, delay: number): T {
  let timeoutId: NodeJS.Timeout | null = null
  let lastRan = 0
  return ((...args: Parameters<T>) => {
    const now = Date.now()
    if (now - lastRan >= delay) {
      func(...args)
      lastRan = now
    } else {
      if (timeoutId) clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        func(...args)
        lastRan = Date.now()
      }, delay - (now - lastRan))
    }
  }) as T
}

// Ultra-clean minimal icons (2px stroke, purposeful only)
const ChartIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
)

const DiamondIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
)

const GlobeIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const CodeIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
)

const RocketIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
)

const TrendingUpIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
)

const BriefcaseIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

// Apple-style Premium Header Component - ADAPTIVE LOGO WITH THEME
const PremiumHeader = ({ onCtaClick, theme, setTheme }: { onCtaClick: () => void; theme: 'light' | 'dark'; setTheme: (theme: 'light' | 'dark') => void }) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    // Throttled scroll handler for 60fps performance
    const handleScroll = throttle(() => {
      setIsScrolled(window.scrollY > 100)
    }, 100)

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-[400ms] ease-out ${
        isScrolled
          ? theme === 'dark'
            ? 'bg-[#0a0a0a]/95 backdrop-blur-xl shadow-2xl border-b border-white-100/10 py-3'
            : 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200/50 py-3'
          : theme === 'dark'
            ? 'bg-[#0a0a0a]/60 backdrop-blur-md border-b border-white-100/5 py-5'
            : 'bg-white/80 backdrop-blur-md border-b border-gray-200/50 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo - Adapts to theme */}
          <motion.div
            className="flex items-center relative h-6 md:h-7"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={theme === 'dark'
                ? "/logos/Crescentia-Horizontal-MainColor-Whiteout.svg"
                : "/logos/Crescentia-Horizontal-MainColor-Blackout.svg"
              }
              alt="Crescentia"
              className="h-6 md:h-7 w-auto"
            />
          </motion.div>

          {/* Navigation - Adaptive Colors */}
          <nav className="hidden md:flex items-center gap-12">
            {[
              { label: 'Benefits', href: '#benefits' },
              { label: 'Who is this for', href: '#who' },
              { label: 'Pricing', href: '#pricing' },
            ].map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                className={`text-sm font-light transition-all duration-[400ms] ease-out relative group ${
                  theme === 'dark'
                    ? 'text-white-100/70 hover:text-white-100'
                    : 'text-gray-800 hover:text-black'
                }`}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-yellow-500 group-hover:w-full transition-all duration-400" />
              </motion.a>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Services Dropdown */}
            <div className="relative group">
              <button className={`hidden md:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                theme === 'dark'
                  ? 'text-white/80 hover:text-white hover:bg-white/5'
                  : 'text-gray-700 hover:text-black hover:bg-gray-100'
              }`}>
                Services
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
                      For Portuguese SMEs
                    </div>
                    <div className={`text-xs ${
                      theme === 'dark' ? 'text-white/50' : 'text-gray-500'
                    }`}>
                      EU Funding & Grants
                    </div>
                  </a>

                  <a
                    href="https://crescentia.pt"
                    className={`block px-4 py-3 rounded-xl transition-colors ${
                      theme === 'dark'
                        ? 'hover:bg-white/5'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className={`font-semibold mb-1 ${
                      theme === 'dark' ? 'text-white' : 'text-black'
                    }`}>
                      Corporate
                    </div>
                    <div className={`text-xs ${
                      theme === 'dark' ? 'text-white/50' : 'text-gray-500'
                    }`}>
                      About Crescentia
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

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button variant="secondary" size="sm" onClick={onCtaClick}>
                Book Consultation
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.header>
  )
}

export default function HomePage() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')
  const { scrollY } = useScroll()
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0])
  const heroY = useTransform(scrollY, [0, 300], [0, -50])

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

  return (
    <>
      <CalendlyModal
        isOpen={isCalendlyOpen}
        onClose={() => setIsCalendlyOpen(false)}
        url="https://calendly.com/crescentiapt"
      />

      <PremiumHeader onCtaClick={() => setIsCalendlyOpen(true)} theme={theme} setTheme={setTheme} />

      <main className="min-h-screen pt-20">
        {/* ULTRA-PREMIUM HERO - Apple Vision Pro Level */}
        <motion.section
          style={{ opacity: heroOpacity }}
          className={`relative overflow-hidden min-h-screen flex items-center ${
            theme === 'dark' ? 'bg-[#0a0a0a]' : 'bg-[#fafafa]'
          }`}
        >
          {/* Layer 1: Deep base */}
          <div className={`absolute inset-0 ${
            theme === 'dark' ? 'bg-[#0a0a0a]' : 'bg-gradient-to-b from-[#fafafa] via-[#f5f5f5] to-[#ffffff]'
          }`} />

          {/* Layer 2: Radial gradient center glow */}
          <div className={`absolute inset-0 ${
            theme === 'dark'
              ? 'bg-[radial-gradient(ellipse_at_center,#1a1d2e_0%,#0a0a0a_50%)]'
              : 'bg-[radial-gradient(ellipse_at_center,#ffffff_0%,#fafafa_50%)]'
          }`} />

          {/* Layer 3: Yellow accent glows - ANIMATED */}
          {theme === 'dark' ? (
            <>
              <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-yellow-500/20 rounded-full blur-[150px] animate-pulse-slow" />
              <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-yellow-600/15 rounded-full blur-[120px] animate-pulse-slower" />
            </>
          ) : (
            <>
              <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-yellow-500/3 rounded-full blur-[150px] animate-pulse-slow" />
              <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-yellow-600/2 rounded-full blur-[120px] animate-pulse-slower" />
            </>
          )}

          {/* Layer 4: Animated gradient mesh */}
          <div className={`absolute inset-0 ${theme === 'dark' ? 'opacity-30' : 'opacity-10'}`}>
            <div className={`absolute inset-0 bg-gradient-to-br ${
              theme === 'dark'
                ? 'from-yellow-500/10 via-transparent to-yellow-600/10'
                : 'from-yellow-500/2 via-transparent to-yellow-600/2'
            } animate-gradient-shift`} />
          </div>

          {/* Layer 5: Noise texture (subtle) */}
          <div
            className={`absolute inset-0 mix-blend-overlay ${
              theme === 'dark' ? 'opacity-[0.02]' : 'opacity-[0.01]'
            }`}
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
            }}
          />

          {/* Layer 6: WEALTH background text - PREMIUM STYLE */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative"
            >
              {/* Main text with gradient */}
              <span className={`text-[35rem] font-black tracking-[-0.05em] leading-none select-none bg-gradient-to-b ${
                theme === 'dark'
                  ? 'from-white/[0.12] via-white/[0.08] to-transparent'
                  : 'from-gray-900/[0.08] via-gray-900/[0.04] to-transparent'
              } bg-clip-text text-transparent`}>
                Wealth
              </span>
              {/* Glow effect behind text */}
              <div className={`absolute inset-0 blur-3xl -z-10 ${
                theme === 'dark' ? 'bg-yellow-500/10' : 'bg-yellow-500/3'
              }`} />
            </motion.div>
          </div>

          <motion.div
            style={{ y: heroY, willChange: 'transform' }}
            className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-24 md:py-32 lg:py-40 w-full z-10"
          >
            <div className="text-center max-w-5xl mx-auto">
              {/* Small Badge - Minimal */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                className="inline-block mb-12"
              >
                <span className={`font-light text-xs tracking-[0.2em] uppercase ${
                  theme === 'dark' ? 'text-white-100/40' : 'text-gray-600'
                }`}>
                  IFICI Tax Regime
                </span>
              </motion.div>

              {/* HERO HEADLINE - MORE IMPACT */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight leading-[0.95] mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  {/* "20% Tax" with gradient + glow/shadow + underline */}
                  <span className="relative inline-block">
                    <span className={`bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent ${
                      theme === 'dark'
                        ? 'drop-shadow-[0_0_80px_rgba(234,179,8,0.5)]'
                        : 'drop-shadow-[0_4px_12px_rgba(234,179,8,0.25)]'
                    }`}>
                      20% Tax
                    </span>
                    {/* Subtle underline effect */}
                    <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent rounded-full" />
                  </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="mt-4"
                >
                  <span className={theme === 'dark' ? 'text-white drop-shadow-2xl' : 'text-black drop-shadow-lg'}>
                    in Portugal for{" "}
                  </span>
                  {/* "10 Years" with gradient + glow/shadow + underline */}
                  <span className="relative inline-block">
                    <span className={`bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent ${
                      theme === 'dark'
                        ? 'drop-shadow-[0_0_80px_rgba(234,179,8,0.5)]'
                        : 'drop-shadow-[0_4px_12px_rgba(234,179,8,0.25)]'
                    }`}>
                      10 Years
                    </span>
                    <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent rounded-full" />
                  </span>
                </motion.div>
              </h1>

              {/* SUBHEADLINE - MORE CONTRAST AND LEGIBILITY */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed mb-12"
              >
                <span className={`font-medium ${
                  theme === 'dark' ? 'text-white/95' : 'text-gray-900'
                }`}>
                  Save thousands in taxes with Portugal's IFICI regime.
                </span>
                <br />
                <span className={theme === 'dark' ? 'text-white/70' : 'text-gray-600'}>
                  Designed for high-income professionals and business owners.
                </span>
              </motion.p>

              {/* CTAs - PREMIUM GLOW EFFECTS */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12"
              >
                {/* Primary CTA - Yellow gradient with glow */}
                <motion.button
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 0 40px rgba(234, 179, 8, 0.6)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsCalendlyOpen(true)}
                  className="group relative px-10 py-5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-lg font-bold rounded-full overflow-hidden shadow-[0_0_30px_rgba(234,179,8,0.4)] transition-all duration-300"
                >
                  {/* Animated gradient sweep on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <span className="relative z-10">Book Free Consultation</span>
                </motion.button>

                {/* Secondary CTA - Glassmorphism style */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    const benefitsSection = document.getElementById('benefits')
                    benefitsSection?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className={`px-10 py-5 backdrop-blur-xl text-lg font-semibold rounded-full border transition-all duration-300 ${
                    theme === 'dark'
                      ? 'bg-white/5 text-white border-white/10 hover:border-white/20 hover:bg-white/10'
                      : 'bg-black/5 text-black border-black/10 hover:border-black/20 hover:bg-black/10'
                  }`}
                >
                  Learn More
                </motion.button>
              </motion.div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className={`w-6 h-10 rounded-full border-2 flex items-start justify-center p-2 ${
                theme === 'dark' ? 'border-white-100/20' : 'border-gray-400/30'
              }`}
            >
              <motion.div className={`w-1.5 h-1.5 rounded-full ${
                theme === 'dark' ? 'bg-white-100/40' : 'bg-gray-600'
              }`} />
            </motion.div>
          </motion.div>
        </motion.section>

        {/* SOPHISTICATED GOLD BENEFITS SECTION */}
        <section id="benefits" className="relative py-32 md:py-48 overflow-hidden bg-gradient-to-br from-[#E8C547] via-[#DFC13F] to-[#D4AF37]">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 md:gap-16">
              {[
                {
                  icon: <ChartIcon />,
                  title: '20% Tax Rate',
                  description: 'Instead of 48% standard rate',
                },
                {
                  icon: <DiamondIcon />,
                  title: '0% Crypto Tax',
                  description: 'Tax-free cryptocurrency gains',
                },
                {
                  icon: <GlobeIcon />,
                  title: 'EU Residency',
                  description: 'Live and work across Europe',
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.15, ease: [0.4, 0, 0.2, 1] }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <div className="relative p-14 rounded-[32px] bg-white-100/8 backdrop-blur-xl border border-white-100/15 hover:bg-white-100/12 hover:border-white-100/25 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-[0_8px_32px_rgba(0,0,0,0.06),0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.09),0_4px_12px_rgba(0,0,0,0.04)]">
                    {/* Inner glow */}
                    <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-white-100/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    <div className="relative flex justify-center mb-10 text-[#0a0a0a] group-hover:scale-110 transition-transform duration-700">
                      {benefit.icon}
                    </div>
                    <h3 className="text-3xl font-bold text-[#0a0a0a] mb-4 text-center tracking-tight leading-tight">
                      {benefit.title}
                    </h3>
                    <p className="text-base text-[#0a0a0a]/60 text-center font-light leading-relaxed tracking-[-0.01em]">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* WHO IS THIS FOR - Premium Cards */}
        <section id="who" className={`relative py-32 md:py-48 overflow-hidden ${
          theme === 'dark' ? 'bg-[#0a0a0a]' : 'bg-white'
        }`}>
          {/* Subtle gradient */}
          <div className={`absolute inset-0 opacity-50 ${
            theme === 'dark'
              ? 'bg-gradient-to-b from-[#0a0a0a] via-[#12141C] to-[#0a0a0a]'
              : 'bg-gradient-to-b from-white via-gray-50 to-white'
          }`} />
          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true }}
              className="text-center mb-24"
            >
              <h2 className={`text-7xl md:text-8xl font-bold mb-8 tracking-[-0.03em] leading-[1.05] ${
                theme === 'dark' ? 'text-white-100' : 'text-black'
              }`}>
                Who is this for?
              </h2>
              <p className={`text-xl max-w-2xl mx-auto font-light leading-relaxed tracking-[-0.01em] ${
                theme === 'dark' ? 'text-white-100/50' : 'text-gray-600'
              }`}>
                IFICI is designed for high-income professionals and entrepreneurs
                relocating to Portugal
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
              {[
                {
                  icon: <BriefcaseIcon />,
                  title: 'Business Executives',
                  description: 'CEOs, directors, and senior management professionals',
                },
                {
                  icon: <RocketIcon />,
                  title: 'Entrepreneurs',
                  description: 'Business owners and founders across all industries',
                },
                {
                  icon: <TrendingUpIcon />,
                  title: 'Investors',
                  description: 'Investment professionals, traders, and portfolio managers',
                },
                {
                  icon: <CodeIcon />,
                  title: 'Digital Professionals',
                  description: 'Consultants, freelancers, and remote professionals',
                },
              ].map((persona, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.12, ease: [0.4, 0, 0.2, 1] }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <div className={`relative h-full p-12 rounded-[32px] backdrop-blur-2xl border transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    theme === 'dark'
                      ? 'bg-white-100/[0.02] border-white-100/[0.06] hover:bg-white-100/[0.04] hover:border-white-100/10 shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.03)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.06)]'
                      : 'bg-white border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl'
                  }`}>
                    {/* Gradient border effect on hover */}
                    <div className={`absolute inset-0 rounded-[32px] bg-gradient-to-br from-yellow-500/0 via-transparent to-transparent opacity-0 group-hover:opacity-${
                      theme === 'dark' ? '5' : '10'
                    } transition-opacity duration-700`} />

                    <div className={`relative flex justify-center mb-10 group-hover:scale-110 transition-all duration-700 ${
                      theme === 'dark'
                        ? 'text-yellow-500/80 group-hover:text-yellow-500'
                        : 'text-yellow-600 group-hover:text-yellow-500'
                    }`}>
                      {persona.icon}
                    </div>
                    <h3 className={`text-2xl font-bold mb-5 text-center tracking-tight ${
                      theme === 'dark' ? 'text-white-100' : 'text-black'
                    }`}>
                      {persona.title}
                    </h3>
                    <p className={`text-base leading-relaxed text-center font-light tracking-[-0.01em] ${
                      theme === 'dark' ? 'text-white-100/50' : 'text-gray-600'
                    }`}>
                      {persona.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* COMPARISON TABLE - Strategic Premium */}
        <section className={`relative py-32 md:py-48 overflow-hidden ${
          theme === 'dark' ? 'bg-[#0a0a0a]' : 'bg-gray-50'
        }`}>
          {/* Subtle gradient layer */}
          <div className={`absolute inset-0 opacity-60 ${
            theme === 'dark'
              ? 'bg-gradient-to-b from-[#000000] via-[#0a0a0a] to-[#12141C]'
              : 'bg-gradient-to-b from-gray-50 via-white to-gray-100'
          }`} />
          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true }}
              className="text-center mb-24"
            >
              <h2 className={`text-7xl md:text-8xl font-bold mb-8 tracking-[-0.03em] leading-[1.05] ${
                theme === 'dark' ? 'text-white-100' : 'text-black'
              }`}>
                Compare Tax Systems
              </h2>
              <p className={`text-xl max-w-2xl mx-auto font-light leading-relaxed tracking-[-0.01em] ${
                theme === 'dark' ? 'text-white-100/50' : 'text-gray-600'
              }`}>
                See why Portugal's IFICI regime is unmatched in Europe
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true }}
              className={`relative rounded-[32px] backdrop-blur-2xl border p-2 overflow-hidden ${
                theme === 'dark'
                  ? 'bg-white-100/[0.02] border-white-100/[0.06]'
                  : 'bg-white border-gray-200 shadow-lg'
              }`}
            >
              {/* Subtle inner glow */}
              <div className={`absolute inset-0 bg-gradient-to-br to-transparent pointer-events-none ${
                theme === 'dark' ? 'from-yellow-500/[0.01]' : 'from-yellow-500/[0.02]'
              }`} />

              <div className="relative overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className={`border-b ${
                      theme === 'dark' ? 'border-white-100/10' : 'border-gray-300'
                    }`}>
                      <th className={`text-left py-8 px-6 text-sm font-semibold tracking-tight ${
                        theme === 'dark' ? 'text-white-100/90' : 'text-gray-900'
                      }`}>Country</th>
                      <th className={`text-right py-8 px-6 text-sm font-semibold tracking-tight ${
                        theme === 'dark' ? 'text-white-100/90' : 'text-gray-900'
                      }`}>Income Tax</th>
                      <th className={`text-right py-8 px-6 text-sm font-semibold tracking-tight ${
                        theme === 'dark' ? 'text-white-100/90' : 'text-gray-900'
                      }`}>Crypto Tax</th>
                      <th className={`text-right py-8 px-6 text-sm font-semibold tracking-tight ${
                        theme === 'dark' ? 'text-white-100/90' : 'text-gray-900'
                      }`}>Cost of Living</th>
                      <th className={`text-right py-8 px-6 text-sm font-semibold tracking-tight ${
                        theme === 'dark' ? 'text-white-100/90' : 'text-gray-900'
                      }`}>Quality of Life</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Portugal - DESTACADO */}
                    <motion.tr
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                      viewport={{ once: true }}
                      className={`relative border-y-2 border-yellow-500/30 ${
                        theme === 'dark'
                          ? 'bg-gradient-to-r from-yellow-500/10 via-yellow-500/5 to-transparent'
                          : 'bg-gradient-to-r from-yellow-500/20 via-yellow-500/10 to-transparent'
                      }`}
                    >
                      <td className={`py-6 px-6 font-bold tracking-tight ${
                        theme === 'dark' ? 'text-white-100' : 'text-black'
                      }`}>
                        <div className="flex items-center gap-3">
                          <span>Portugal (IFICI)</span>
                          <span className="px-3 py-1 bg-yellow-500 text-[#0a0a0a] text-xs font-bold rounded-full">
                            BEST VALUE
                          </span>
                        </div>
                      </td>
                      <td className="py-6 px-6 text-right font-mono text-lg font-bold text-green-400">
                        20%*
                      </td>
                      <td className="py-6 px-6 text-right font-mono text-lg font-bold text-green-400">
                        0%**
                      </td>
                      <td className="py-6 px-6 text-right font-mono text-sm text-green-400">
                        €1,200-1,800
                      </td>
                      <td className={`py-6 px-6 text-right font-mono text-lg font-bold ${
                        theme === 'dark' ? 'text-white-100' : 'text-black'
                      }`}>
                        9/10
                      </td>
                    </motion.tr>

                    {/* Germany */}
                    <motion.tr
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.08, ease: [0.4, 0, 0.2, 1] }}
                      viewport={{ once: true }}
                      className={`border-b transition-all duration-500 ${
                        theme === 'dark'
                          ? 'border-white-100/5 hover:bg-white-100/[0.02]'
                          : 'border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      <td className={`py-6 px-6 font-medium tracking-tight ${
                        theme === 'dark' ? 'text-white-100/90' : 'text-gray-900'
                      }`}>Germany</td>
                      <td className="py-6 px-6 text-right font-mono text-lg text-red-400">42-45%</td>
                      <td className="py-6 px-6 text-right font-mono text-lg text-orange-400">0-45%***</td>
                      <td className="py-6 px-6 text-right font-mono text-sm text-red-400">€2,500-3,500</td>
                      <td className={`py-6 px-6 text-right font-mono text-lg ${
                        theme === 'dark' ? 'text-white-100/70' : 'text-gray-700'
                      }`}>8/10</td>
                    </motion.tr>

                    {/* Spain */}
                    <motion.tr
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.16, ease: [0.4, 0, 0.2, 1] }}
                      viewport={{ once: true }}
                      className={`border-b transition-all duration-500 ${
                        theme === 'dark'
                          ? 'border-white-100/5 hover:bg-white-100/[0.02]'
                          : 'border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      <td className={`py-6 px-6 font-medium tracking-tight ${
                        theme === 'dark' ? 'text-white-100/90' : 'text-gray-900'
                      }`}>Spain</td>
                      <td className="py-6 px-6 text-right font-mono text-lg text-red-400">47%</td>
                      <td className="py-6 px-6 text-right font-mono text-lg text-orange-400">19-28%</td>
                      <td className="py-6 px-6 text-right font-mono text-sm text-orange-400">€1,500-2,200</td>
                      <td className={`py-6 px-6 text-right font-mono text-lg ${
                        theme === 'dark' ? 'text-white-100/70' : 'text-gray-700'
                      }`}>8/10</td>
                    </motion.tr>

                    {/* France */}
                    <motion.tr
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.24, ease: [0.4, 0, 0.2, 1] }}
                      viewport={{ once: true }}
                      className={`border-b transition-all duration-500 ${
                        theme === 'dark'
                          ? 'border-white-100/5 hover:bg-white-100/[0.02]'
                          : 'border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      <td className={`py-6 px-6 font-medium tracking-tight ${
                        theme === 'dark' ? 'text-white-100/90' : 'text-gray-900'
                      }`}>France</td>
                      <td className="py-6 px-6 text-right font-mono text-lg text-red-400">45%</td>
                      <td className="py-6 px-6 text-right font-mono text-lg text-orange-400">30%****</td>
                      <td className="py-6 px-6 text-right font-mono text-sm text-red-400">€2,000-3,000</td>
                      <td className={`py-6 px-6 text-right font-mono text-lg ${
                        theme === 'dark' ? 'text-white-100/70' : 'text-gray-700'
                      }`}>8/10</td>
                    </motion.tr>

                    {/* UK */}
                    <motion.tr
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.32, ease: [0.4, 0, 0.2, 1] }}
                      viewport={{ once: true }}
                      className={`border-b transition-all duration-500 ${
                        theme === 'dark'
                          ? 'border-white-100/5 hover:bg-white-100/[0.02]'
                          : 'border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      <td className={`py-6 px-6 font-medium tracking-tight ${
                        theme === 'dark' ? 'text-white-100/90' : 'text-gray-900'
                      }`}>United Kingdom</td>
                      <td className="py-6 px-6 text-right font-mono text-lg text-red-400">45%</td>
                      <td className="py-6 px-6 text-right font-mono text-lg text-orange-400">20-24%</td>
                      <td className="py-6 px-6 text-right font-mono text-sm text-red-400">€3,000-4,800</td>
                      <td className={`py-6 px-6 text-right font-mono text-lg ${
                        theme === 'dark' ? 'text-white-100/70' : 'text-gray-700'
                      }`}>7/10</td>
                    </motion.tr>

                    {/* Netherlands */}
                    <motion.tr
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.40, ease: [0.4, 0, 0.2, 1] }}
                      viewport={{ once: true }}
                      className={`border-b transition-all duration-500 ${
                        theme === 'dark'
                          ? 'border-white-100/5 hover:bg-white-100/[0.02]'
                          : 'border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      <td className={`py-6 px-6 font-medium tracking-tight ${
                        theme === 'dark' ? 'text-white-100/90' : 'text-gray-900'
                      }`}>Netherlands</td>
                      <td className="py-6 px-6 text-right font-mono text-lg text-red-400">49.5%</td>
                      <td className="py-6 px-6 text-right font-mono text-lg text-orange-400">36%*****</td>
                      <td className="py-6 px-6 text-right font-mono text-sm text-red-400">€2,200-3,200</td>
                      <td className={`py-6 px-6 text-right font-mono text-lg ${
                        theme === 'dark' ? 'text-white-100/70' : 'text-gray-700'
                      }`}>8/10</td>
                    </motion.tr>
                  </tbody>
                </table>
              </div>

              {/* Footnotes */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className={`mt-6 px-6 pb-4 space-y-2 text-sm font-light ${
                  theme === 'dark' ? 'text-white-100/60' : 'text-gray-600'
                }`}
              >
                <p>* IFICI special tax regime - 20% flat rate for 10 years on Portuguese income</p>
                <p>** Crypto gains tax-free if held &gt;365 days (long-term investment)</p>
                <p>*** Germany: 0% after 1 year, progressive rates 14-45% if sold within 1 year</p>
                <p>**** France: 30% flat tax (PFU) on investment income including crypto</p>
                <p>***** Netherlands: Wealth tax on deemed returns (~36% effective rate)</p>
                <p className={`pt-2 text-xs ${
                  theme === 'dark' ? 'text-white-100/40' : 'text-gray-500'
                }`}>
                  Cost of living based on urban areas (monthly). Quality of life: Numbeo + Mercer indices 2024.
                </p>
              </motion.div>
            </motion.div>

            {/* Savings Calculator */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true }}
              className={`mt-16 p-12 rounded-[32px] border ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-yellow-500/10 to-yellow-500/5 border-yellow-500/20'
                  : 'bg-gradient-to-br from-yellow-500/15 to-yellow-500/10 border-yellow-500/30'
              }`}
            >
              <h3 className={`text-3xl font-bold mb-6 tracking-tight ${
                theme === 'dark' ? 'text-white-100' : 'text-black'
              }`}>Calculate Your Savings</h3>
              <p className={`mb-8 font-light ${
                theme === 'dark' ? 'text-white-100/70' : 'text-gray-700'
              }`}>
                On a €100,000 salary with €50,000 crypto gains per year:
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-red-500/10 rounded-2xl border border-red-500/20">
                  <div className="text-sm text-red-400 mb-2 font-medium">Germany</div>
                  <div className="text-3xl font-bold text-red-400 mb-1">€65,000</div>
                  <div className={`text-sm ${
                    theme === 'dark' ? 'text-white-100/50' : 'text-gray-600'
                  }`}>Total tax paid</div>
                </div>

                <div className="p-6 bg-red-500/10 rounded-2xl border border-red-500/20">
                  <div className="text-sm text-red-400 mb-2 font-medium">France</div>
                  <div className="text-3xl font-bold text-red-400 mb-1">€60,000</div>
                  <div className={`text-sm ${
                    theme === 'dark' ? 'text-white-100/50' : 'text-gray-600'
                  }`}>Total tax paid</div>
                </div>

                <div className="p-6 bg-green-500/10 rounded-2xl border border-green-500/30 ring-2 ring-green-500/50">
                  <div className="text-sm text-green-400 mb-2 font-medium">Portugal (IFICI)</div>
                  <div className="text-3xl font-bold text-green-400 mb-1">€20,000</div>
                  <div className={`text-sm ${
                    theme === 'dark' ? 'text-white-100/50' : 'text-gray-600'
                  }`}>Total tax paid</div>
                  <div className="mt-3 text-xs text-green-400 font-semibold">
                    SAVE €40,000-45,000/YEAR
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* PRICING SECTION - Ultra-Premium Cards */}
        <section id="pricing" className={`relative py-32 md:py-48 overflow-hidden ${
          theme === 'dark' ? 'bg-[#0a0a0a]' : 'bg-white'
        }`}>
          {/* Subtle gradient layer */}
          <div className={`absolute inset-0 opacity-50 ${
            theme === 'dark'
              ? 'bg-gradient-to-b from-[#12141C] via-[#0a0a0a] to-[#000000]'
              : 'bg-gradient-to-b from-white via-gray-50 to-white'
          }`} />
          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true }}
              className="text-center mb-24"
            >
              <h2 className={`text-7xl md:text-8xl font-bold mb-8 tracking-[-0.03em] leading-[1.05] ${
                theme === 'dark' ? 'text-white-100' : 'text-black'
              }`}>
                Investment in Your Future
              </h2>
              <p className={`text-xl max-w-3xl mx-auto font-light leading-relaxed tracking-[-0.01em] ${
                theme === 'dark' ? 'text-white-100/50' : 'text-gray-600'
              }`}>
                Professional IFICI setup and optimization. Save thousands in taxes for years to come.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  name: 'Essential',
                  price: '€12,000',
                  description: 'Complete IFICI setup for individuals',
                  features: [
                    'Full IFICI application',
                    'Tax residency setup',
                    'NIF & tax registration',
                    'Bank account setup',
                    'Healthcare registration',
                    '1 year email support',
                  ],
                  popular: false,
                },
                {
                  name: 'Professional',
                  price: '€24,000',
                  description: 'For entrepreneurs and complex cases',
                  features: [
                    'Everything in Essential',
                    'Company formation',
                    'Crypto tax optimization',
                    'International tax planning',
                    'Dual residency strategy',
                    'Priority support',
                    'Annual tax filing (1 year)',
                  ],
                  popular: true,
                },
                {
                  name: 'Executive',
                  price: '€49,000',
                  description: 'White-glove concierge service',
                  features: [
                    'Everything in Professional',
                    'Property acquisition support',
                    'Private banking introductions',
                    'Investment structuring',
                    'Family relocation assistance',
                    'Dedicated account manager',
                    'Annual tax filing (3 years)',
                    'Quarterly strategy reviews',
                  ],
                  popular: false,
                },
              ].map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.15, ease: [0.4, 0, 0.2, 1] }}
                  viewport={{ once: true }}
                  whileHover={{ y: -12, scale: 1.02 }}
                  className="group relative"
                >
                  {/* Most Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10">
                      <div className="px-6 py-2.5 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full">
                        <span className="text-sm font-bold text-[#0a0a0a] tracking-wide">
                          MOST POPULAR
                        </span>
                      </div>
                    </div>
                  )}

                  <div className={`relative h-full p-12 rounded-[32px] backdrop-blur-2xl border transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    theme === 'dark'
                      ? 'bg-white-100/[0.02] border-white-100/[0.06] hover:bg-white-100/[0.04] shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.03)] hover:shadow-[0_24px_64px_rgba(0,0,0,0.24),inset_0_2px_0_rgba(255,255,255,0.06)]'
                      : 'bg-white border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl'
                  }`}>
                    {/* Gradient border glow on hover */}
                    <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-yellow-500/0 via-yellow-500/0 to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-700" />
                    <div className={`absolute inset-0 rounded-[32px] border border-yellow-500/0 transition-all duration-700 ${
                      theme === 'dark' ? 'group-hover:border-yellow-500/20' : 'group-hover:border-yellow-500/30'
                    }`} />

                    {/* Subtle outer glow */}
                    <div className="absolute -inset-[1px] rounded-[32px] bg-gradient-to-br from-yellow-500/0 to-transparent opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-700" />

                    <div className="relative">
                      {/* Plan Name */}
                      <h3 className={`text-2xl font-bold mb-3 tracking-tight ${
                        theme === 'dark' ? 'text-white-100' : 'text-black'
                      }`}>
                        {plan.name}
                      </h3>

                      {/* Description */}
                      <p className={`text-sm mb-10 font-light leading-relaxed tracking-[-0.01em] ${
                        theme === 'dark' ? 'text-white-100/50' : 'text-gray-600'
                      }`}>
                        {plan.description}
                      </p>

                      {/* Price */}
                      <div className="mb-12">
                        <div className={`text-6xl font-bold tracking-[-0.03em] mb-2 ${
                          theme === 'dark' ? 'text-white-100' : 'text-black'
                        }`}>
                          {plan.price}
                        </div>
                        <div className={`text-sm font-light tracking-wide ${
                          theme === 'dark' ? 'text-white-100/40' : 'text-gray-500'
                        }`}>
                          One-time investment
                        </div>
                      </div>

                      {/* CTA Button */}
                      <Button
                        variant={plan.popular ? 'primary' : 'secondary'}
                        size="lg"
                        onClick={() => setIsCalendlyOpen(true)}
                        className="w-full mb-12 group/btn relative overflow-hidden"
                      >
                        <span className="relative z-10">Get Started</span>
                        {plan.popular && (
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-500"
                            initial={{ x: '-100%' }}
                            whileHover={{ x: '100%' }}
                            transition={{ duration: 0.6 }}
                          />
                        )}
                      </Button>

                      {/* Features List */}
                      <ul className="space-y-5">
                        {plan.features.map((feature, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 + i * 0.05 }}
                            viewport={{ once: true }}
                            className={`flex items-start gap-4 font-light leading-relaxed ${
                              theme === 'dark' ? 'text-white-100/70' : 'text-gray-700'
                            }`}
                          >
                            <motion.svg
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              transition={{ duration: 0.4, delay: index * 0.1 + i * 0.05 + 0.2 }}
                              viewport={{ once: true }}
                              className="w-6 h-6 text-yellow-500/80 flex-shrink-0 mt-0.5"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2.5}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M20 6L9 17l-5-5" />
                            </motion.svg>
                            <span>{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Trust Signal */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className={`text-center mt-16 text-sm font-light tracking-wide ${
                theme === 'dark' ? 'text-white-100/40' : 'text-gray-500'
              }`}
            >
              All prices include Portuguese VAT. Payment plans available for Executive package.
            </motion.p>
          </div>
        </section>

        {/* FINAL CTA SECTION - Clean & Confident */}
        <section className={`relative py-32 md:py-48 overflow-hidden ${
          theme === 'dark'
            ? 'bg-gradient-to-br from-[#0a0a0a] via-[#12141C] to-[#000000]'
            : 'bg-gradient-to-br from-white via-gray-50 to-white'
        }`}>
          {/* Elegant radial glow */}
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] rounded-full blur-[140px] ${
            theme === 'dark' ? 'bg-yellow-500/[0.03]' : 'bg-yellow-500/[0.05]'
          }`} />

          <div className="relative max-w-5xl mx-auto px-4 md:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true }}
            >
              <h2 className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-12 tracking-[-0.03em] leading-[0.95] ${
                theme === 'dark' ? 'text-white-100' : 'text-black'
              }`}>
                Start Saving{' '}
                <span className="block bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                  Today
                </span>
              </h2>

              <p className={`text-lg md:text-xl lg:text-2xl mb-16 max-w-3xl mx-auto font-light leading-relaxed tracking-[-0.01em] ${
                theme === 'dark' ? 'text-white-100/60' : 'text-gray-600'
              }`}>
                Book a free consultation with our IFICI specialists. We'll analyze your situation and show you exactly how much you can save.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-6 justify-center"
              >
                <Button
                  size="lg"
                  variant="primary"
                  onClick={() => setIsCalendlyOpen(true)}
                  className="group relative overflow-hidden text-lg px-12 py-6"
                >
                  <span className="relative z-10">Book Free Consultation</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-500"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                </Button>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className={`mt-20 flex flex-col sm:flex-row items-center justify-center gap-12 text-sm font-light ${
                  theme === 'dark' ? 'text-white-100/40' : 'text-gray-500'
                }`}
              >
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-yellow-500/60" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span>100+ successful applications</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-yellow-500/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span>Fully licensed & regulated</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-yellow-500/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Average setup: 6-8 weeks</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className={`relative py-16 md:py-20 ${
          theme === 'dark' ? 'bg-[#0a0a0a]' : 'bg-white'
        }`}>
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`max-w-3xl mx-auto p-8 md:p-12 rounded-3xl text-center ${
                theme === 'dark'
                  ? 'bg-yellow-500/5 border border-yellow-500/20'
                  : 'bg-yellow-50 border border-yellow-500/30'
              }`}
            >
              <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                Stay Updated on Tax Changes
              </h3>
              <p className={`text-base md:text-lg mb-6 ${
                theme === 'dark' ? 'text-white/70' : 'text-gray-700'
              }`}>
                Get exclusive insights on IFICI updates, tax optimization strategies, and Portugal residence news
              </p>

              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Your email"
                  required
                  className={`flex-1 px-6 py-3 rounded-full text-base focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                    theme === 'dark'
                      ? 'bg-white/10 border border-white/20 text-white placeholder:text-white/50'
                      : 'bg-white border border-gray-300 text-black placeholder:text-gray-500'
                  }`}
                />
                <button
                  type="submit"
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold hover:shadow-lg transition-all whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>

              <p className={`text-xs mt-4 ${
                theme === 'dark' ? 'text-white/50' : 'text-gray-500'
              }`}>
                No spam. Unsubscribe anytime.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer
        logo="/logos/Crescentia-Horizontal-MainColor-Whiteout.svg"
        logoAlt="Crescentia Wealth"
        description="Expert IFICI tax optimization for international tech professionals in Portugal."
        sections={[
          {
            title: 'Services',
            links: [
              { label: 'IFICI Setup', href: '#' },
              { label: 'Tax Planning', href: '#' },
              { label: 'Crypto Tax', href: '#' },
            ],
          },
          {
            title: 'Company',
            links: [
              { label: 'About', href: '#' },
              { label: 'Contact', href: '#' },
              { label: 'Blog', href: '#' },
            ],
          },
        ]}
        copyright="© 2024 Crescentia Wealth. All rights reserved."
      />

      {/* Cookie Consent Banner */}
      <CookieBanner theme={theme} />
    </>
  )
}
