'use client'

import { useState, useEffect, useCallback } from 'react'
import { Button, Footer, PricingCard, CalendlyModal } from '@crescentia/ui'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import CookieBanner from '../components/CookieBanner'
import TaxCalculator from '../components/TaxCalculator'

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

// Newsletter Section Component with Web3Forms
const NewsletterSection = ({ theme }: { theme: 'light' | 'dark' }) => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '2870d717-cc56-43d6-a7b1-259c924cc073',
          subject: 'New Newsletter Subscription - Crescentia Wealth',
          from_name: 'Crescentia Wealth Newsletter',
          email: email,
          message: `New subscription from: ${email}`,
        }),
      })

      const data = await response.json()

      if (data.success) {
        setStatus('success')
        setMessage('Successfully subscribed! Check your email.')
        setEmail('')

        setTimeout(() => {
          setStatus('idle')
          setMessage('')
        }, 5000)
      } else {
        throw new Error('Submission failed')
      }
    } catch (error) {
      setStatus('error')
      setMessage('Error subscribing. Please try again.')

      setTimeout(() => {
        setStatus('idle')
        setMessage('')
      }, 5000)
    }
  }

  return (
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

          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              required
              disabled={status === 'loading'}
              className={`flex-1 px-6 py-3 rounded-full text-base focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                theme === 'dark'
                  ? 'bg-white/10 border border-white/20 text-white placeholder:text-white/50 disabled:opacity-50'
                  : 'bg-white border border-gray-300 text-black placeholder:text-gray-500 disabled:opacity-50'
              }`}
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold hover:shadow-lg transition-all whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>

          {message && (
            <p className={`text-sm mt-4 ${
              status === 'success' ? 'text-green-500' : 'text-red-500'
            }`}>
              {message}
            </p>
          )}

          <p className={`text-xs mt-4 ${
            theme === 'dark' ? 'text-white/50' : 'text-gray-500'
          }`}>
            No spam. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

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
              { label: 'Expertise', href: '#expertise' },
              { label: 'Investment', href: '#pricing' },
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
                    target="_blank"
                    rel="noopener noreferrer"
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
                    href="https://www.crescentia.pt"
                    target="_blank"
                    rel="noopener noreferrer"
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
          className={`relative overflow-hidden min-h-screen flex items-center ${
            theme === 'dark' ? 'bg-[#0a0a0a]' : 'bg-[#fafafa]'
          }`}
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1920&q=80"
              alt="Cascais Portugal lifestyle"
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 ${
              theme === 'dark'
                ? 'bg-gradient-to-b from-[#0a0a0a]/95 via-[#0a0a0a]/92 to-[#0a0a0a]/95'
                : 'bg-gradient-to-b from-[#fafafa]/95 via-[#fafafa]/90 to-[#fafafa]/95'
            }`} />
          </div>

          {/* Layer 1: Deep base */}
          <div className={`absolute inset-0 z-[1] ${
            theme === 'dark' ? 'bg-[#0a0a0a]/20' : 'bg-gradient-to-b from-[#fafafa]/20 via-[#f5f5f5]/20 to-[#ffffff]/20'
          }`} />

          {/* Layer 2: Radial gradient center glow */}
          <div className={`absolute inset-0 z-[2] ${
            theme === 'dark'
              ? 'bg-[radial-gradient(ellipse_at_center,#1a1d2e_0%,#0a0a0a_50%)]'
              : 'bg-[radial-gradient(ellipse_at_center,#ffffff_0%,#fafafa_50%)]'
          }`} />

          {/* Layer 3: Yellow accent glows - ANIMATED */}
          {theme === 'dark' ? (
            <>
              <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-yellow-500/20 rounded-full blur-[150px] animate-pulse-slow z-[3]" />
              <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-yellow-600/15 rounded-full blur-[120px] animate-pulse-slower z-[3]" />
            </>
          ) : (
            <>
              <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-yellow-500/3 rounded-full blur-[150px] animate-pulse-slow z-[3]" />
              <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-yellow-600/2 rounded-full blur-[120px] animate-pulse-slower z-[3]" />
            </>
          )}

          {/* Layer 4: Animated gradient mesh */}
          <div className={`absolute inset-0 z-[4] ${theme === 'dark' ? 'opacity-30' : 'opacity-10'}`}>
            <div className={`absolute inset-0 bg-gradient-to-br ${
              theme === 'dark'
                ? 'from-yellow-500/10 via-transparent to-yellow-600/10'
                : 'from-yellow-500/2 via-transparent to-yellow-600/2'
            } animate-gradient-shift`} />
          </div>

          {/* Layer 5: Noise texture (subtle) */}
          <div
            className={`absolute inset-0 z-[5] mix-blend-overlay ${
              theme === 'dark' ? 'opacity-[0.02]' : 'opacity-[0.01]'
            }`}
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
            }}
          />

          {/* Layer 6: WEALTH background text - PREMIUM STYLE */}
          <div className="absolute inset-0 z-[6] flex items-center justify-center overflow-hidden pointer-events-none">
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
            className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-24 md:py-32 lg:py-40 w-full z-[10]"
          >
            <div className="text-center max-w-5xl mx-auto">
              {/* Small Badge - Minimal */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                className="inline-block mb-8"
              >
                <span className={`font-light text-xs tracking-[0.2em] uppercase ${
                  theme === 'dark' ? 'text-white-100/40' : 'text-gray-600'
                }`}>
                  Premium Wealth Consultancy
                </span>
              </motion.div>

              {/* HERO HEADLINE */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.05] mb-8"
              >
                <span className={theme === 'dark' ? 'text-white drop-shadow-2xl' : 'text-black drop-shadow-lg'}>
                  Portugal's Premier{' '}
                </span>
                <span className="relative inline-block">
                  <span className={`bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent ${
                    theme === 'dark'
                      ? 'drop-shadow-[0_0_80px_rgba(234,179,8,0.5)]'
                      : 'drop-shadow-[0_4px_12px_rgba(234,179,8,0.25)]'
                  }`}>
                    IFICI & Crypto
                  </span>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent rounded-full" />
                </span>
                <span className={theme === 'dark' ? 'text-white drop-shadow-2xl' : 'text-black drop-shadow-lg'}>
                  {' '}Tax Specialists
                </span>
              </motion.h1>

              {/* SUBHEADLINE */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed mb-6"
              >
                <span className={`font-medium ${
                  theme === 'dark' ? 'text-white/95' : 'text-gray-900'
                }`}>
                  We help high-income professionals and crypto investors legally reduce their tax burden by €50,000-€500,000+ over 10 years.
                </span>
              </motion.p>

              {/* Trust Badge */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className={`text-sm md:text-base mb-12 font-light ${
                  theme === 'dark' ? 'text-white/60' : 'text-gray-600'
                }`}
              >
                Trusted by international executives, entrepreneurs, and investors
              </motion.p>

              {/* CTAs - PREMIUM GLOW EFFECTS */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
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
                  <span className="relative z-10">Request Private Consultation</span>
                </motion.button>

                {/* Secondary CTA - Glassmorphism style */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    const calculatorSection = document.getElementById('calculator')
                    calculatorSection?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className={`px-10 py-5 backdrop-blur-xl text-lg font-semibold rounded-full border transition-all duration-300 ${
                    theme === 'dark'
                      ? 'bg-white/5 text-white border-white/10 hover:border-white/20 hover:bg-white/10'
                      : 'bg-black/5 text-black border-black/10 hover:border-black/20 hover:bg-black/10'
                  }`}
                >
                  Calculate Your Savings
                </motion.button>
              </motion.div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 z-[10]"
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

        {/* OUR EXPERTISE - Premium Cards */}
        <section id="expertise" className={`relative py-32 md:py-48 overflow-hidden ${
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
                Our Expertise
              </h2>
              <p className={`text-xl max-w-2xl mx-auto font-light leading-relaxed tracking-[-0.01em] ${
                theme === 'dark' ? 'text-white-100/50' : 'text-gray-600'
              }`}>
                Specialized services for international professionals and investors
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  title: 'IFICI Tax Regime Setup',
                  description: 'Complete management of your IFICI application and Portuguese tax residency. From initial eligibility assessment to final approval, we handle every step with precision.',
                  features: [
                    'IFICI application & approval guarantee',
                    'Tax residency establishment',
                    'NIF and fiscal coordination',
                    'Healthcare & social security setup',
                    'Banking relationships',
                    'Ongoing compliance support',
                  ],
                },
                {
                  title: 'Cryptocurrency Tax Optimization',
                  description: 'Specialized strategies for crypto investors navigating Portugal\'s favorable tax environment. We understand DeFi, staking, NFTs, and complex digital asset structures.',
                  features: [
                    'Crypto portfolio tax analysis',
                    'Long-term vs short-term gain strategies',
                    'Crypto-friendly banking introductions',
                    'International crypto tax coordination',
                    'OTC trading tax structure',
                    'Exit strategy planning',
                  ],
                },
                {
                  title: 'International Wealth Planning',
                  description: 'Comprehensive tax and wealth structuring for high-net-worth individuals and families relocating to Portugal or managing multi-jurisdiction affairs.',
                  features: [
                    'Portuguese company formation',
                    'Dual residency compliance',
                    'International tax treaties',
                    'Property acquisition structuring',
                    'Private banking introductions',
                    'Investment portfolio optimization',
                    'Family relocation coordination',
                  ],
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.15, ease: [0.4, 0, 0.2, 1] }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <div className={`relative h-full p-10 rounded-[32px] backdrop-blur-2xl border transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    theme === 'dark'
                      ? 'bg-white-100/[0.02] border-white-100/[0.06] hover:bg-white-100/[0.04] hover:border-white-100/10 shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.03)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.06)]'
                      : 'bg-white border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl'
                  }`}>
                    {/* Gradient border effect on hover */}
                    <div className={`absolute inset-0 rounded-[32px] bg-gradient-to-br from-yellow-500/0 via-transparent to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-700`} />

                    <div className="relative">
                      <h3 className={`text-2xl font-bold mb-4 tracking-tight ${
                        theme === 'dark' ? 'text-white-100' : 'text-black'
                      }`}>
                        {service.title}
                      </h3>
                      <p className={`text-base leading-relaxed mb-6 font-light tracking-[-0.01em] ${
                        theme === 'dark' ? 'text-white-100/60' : 'text-gray-600'
                      }`}>
                        {service.description}
                      </p>
                      <ul className="space-y-3">
                        {service.features.map((feature, i) => (
                          <li
                            key={i}
                            className={`flex items-start gap-3 text-sm font-light ${
                              theme === 'dark' ? 'text-white-100/70' : 'text-gray-700'
                            }`}
                          >
                            <svg
                              className="w-5 h-5 text-yellow-500/80 flex-shrink-0 mt-0.5"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2.5}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* WHO WE WORK WITH */}
        <section className={`relative py-32 md:py-48 overflow-hidden ${
          theme === 'dark' ? 'bg-[#12141C]' : 'bg-gray-50'
        }`}>
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
                Who We Work With
              </h2>
              <p className={`text-xl max-w-3xl mx-auto font-light leading-relaxed tracking-[-0.01em] ${
                theme === 'dark' ? 'text-white-100/50' : 'text-gray-600'
              }`}>
                We specialize in serving international professionals and investors who value expert guidance and absolute discretion.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  title: 'Tech Executives & Entrepreneurs',
                  description: 'CEOs, CTOs, and founders relocating to Portugal. Typical profile: €150k-€500k annual income, equity compensation, international exposure.',
                  tag: 'Common needs: IFICI setup, company structuring, equity tax planning',
                },
                {
                  title: 'Cryptocurrency Investors',
                  description: 'Digital asset holders seeking Portugal\'s favorable crypto tax regime. Typical profile: €500k-€10M+ crypto portfolio, active trading or long-term holding.',
                  tag: 'Common needs: Crypto tax optimization, banking relationships, exit strategies',
                },
                {
                  title: 'High-Net-Worth Families',
                  description: 'Established wealth seeking Portuguese residency for lifestyle and tax benefits. Typical profile: €2M-€50M+ net worth, multi-jurisdiction assets.',
                  tag: 'Common needs: Family relocation, wealth structuring, private banking, succession planning',
                },
              ].map((profile, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.15, ease: [0.4, 0, 0.2, 1] }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <div className={`relative h-full p-10 rounded-[32px] backdrop-blur-2xl border transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    theme === 'dark'
                      ? 'bg-white-100/[0.02] border-white-100/[0.06] hover:bg-white-100/[0.04] hover:border-white-100/10 shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.03)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.06)]'
                      : 'bg-white border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl'
                  }`}>
                    <div className={`absolute inset-0 rounded-[32px] bg-gradient-to-br from-yellow-500/0 via-transparent to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-700`} />

                    <div className="relative">
                      <h3 className={`text-2xl font-bold mb-4 tracking-tight ${
                        theme === 'dark' ? 'text-white-100' : 'text-black'
                      }`}>
                        {profile.title}
                      </h3>
                      <p className={`text-base leading-relaxed mb-6 font-light tracking-[-0.01em] ${
                        theme === 'dark' ? 'text-white-100/60' : 'text-gray-600'
                      }`}>
                        {profile.description}
                      </p>
                      <div className={`px-4 py-3 rounded-xl text-sm font-medium ${
                        theme === 'dark'
                          ? 'bg-yellow-500/10 border border-yellow-500/20 text-yellow-400'
                          : 'bg-yellow-500/10 border border-yellow-500/30 text-yellow-700'
                      }`}>
                        {profile.tag}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={() => setIsCalendlyOpen(true)}
              >
                See If You Qualify
              </Button>
            </motion.div>
          </div>
        </section>

        {/* HOW WE WORK */}
        <section className={`relative py-32 md:py-48 overflow-hidden ${
          theme === 'dark' ? 'bg-[#0a0a0a]' : 'bg-white'
        }`}>
          <div className={`absolute inset-0 opacity-50 ${
            theme === 'dark'
              ? 'bg-gradient-to-b from-[#12141C] via-[#0a0a0a] to-[#12141C]'
              : 'bg-gradient-to-b from-gray-50 via-white to-gray-50'
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
                How We Work
              </h2>
              <p className={`text-xl max-w-3xl mx-auto font-light leading-relaxed tracking-[-0.01em] ${
                theme === 'dark' ? 'text-white-100/50' : 'text-gray-600'
              }`}>
                Our engagements are fully customized to your specific situation and goals. Here's what you can expect:
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-8">
              {[
                {
                  number: '1',
                  title: 'Discovery Consultation (Complimentary)',
                  description: '60-minute confidential call to understand your situation, objectives, and challenges. We\'ll provide an initial assessment of potential savings and outline a tailored approach.',
                },
                {
                  number: '2',
                  title: 'Detailed Proposal',
                  description: 'Within 48 hours, receive a comprehensive proposal outlining:\n• Recommended strategy and services\n• Timeline and key milestones\n• Investment required\n• Expected tax savings over 10 years',
                },
                {
                  number: '3',
                  title: 'White-Glove Execution',
                  description: 'Once engaged, we handle everything:\n• All applications and registrations\n• Coordination with Portuguese authorities\n• Banking and service provider introductions\n• Regular progress updates\n• Complete documentation',
                },
                {
                  number: '4',
                  title: 'Ongoing Partnership (Optional)',
                  description: 'For clients seeking continuous optimization:\n• Quarterly strategic reviews\n• Annual tax filing and planning\n• Network event access\n• Priority advisory support',
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.15, ease: [0.4, 0, 0.2, 1] }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className={`relative p-10 rounded-[32px] backdrop-blur-2xl border transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    theme === 'dark'
                      ? 'bg-white-100/[0.02] border-white-100/[0.06] hover:bg-white-100/[0.04] hover:border-white-100/10'
                      : 'bg-white border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl'
                  }`}>
                    <div className="flex gap-6">
                      <div className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold ${
                        theme === 'dark'
                          ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
                          : 'bg-yellow-500/10 text-yellow-700 border border-yellow-500/30'
                      }`}>
                        {step.number}
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-2xl font-bold mb-3 tracking-tight ${
                          theme === 'dark' ? 'text-white-100' : 'text-black'
                        }`}>
                          {step.title}
                        </h3>
                        <p className={`text-base leading-relaxed font-light whitespace-pre-line ${
                          theme === 'dark' ? 'text-white-100/60' : 'text-gray-600'
                        }`}>
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={() => setIsCalendlyOpen(true)}
              >
                Start Your Discovery Call
              </Button>
            </motion.div>
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

        {/* Tax Calculator Section */}
        <section id="calculator" className={`relative py-32 md:py-48 overflow-hidden ${
          theme === 'dark' ? 'bg-[#12141C]' : 'bg-gray-50'
        }`}>
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-black'
                }`}>
                  Calculate Your Tax Savings
                </h2>
                <p className={`text-lg md:text-xl ${
                  theme === 'dark' ? 'text-white/70' : 'text-gray-600'
                }`}>
                  See how much you could save with IFICI regime
                </p>
              </motion.div>

              <TaxCalculator theme={theme} />
            </div>
          </div>
        </section>

        {/* INVESTMENT IN YOUR FUTURE */}
        <section id="pricing" className={`relative py-32 md:py-48 overflow-hidden ${
          theme === 'dark' ? 'bg-[#0a0a0a]' : 'bg-white'
        }`}>
          {/* Subtle gradient layer */}
          <div className={`absolute inset-0 opacity-50 ${
            theme === 'dark'
              ? 'bg-gradient-to-b from-[#12141C] via-[#0a0a0a] to-[#000000]'
              : 'bg-gradient-to-b from-white via-gray-50 to-white'
          }`} />
          <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className={`text-7xl md:text-8xl font-bold mb-8 tracking-[-0.03em] leading-[1.05] ${
                theme === 'dark' ? 'text-white-100' : 'text-black'
              }`}>
                Investment in Your Future
              </h2>
              <p className={`text-xl max-w-3xl mx-auto font-light leading-relaxed tracking-[-0.01em] ${
                theme === 'dark' ? 'text-white-100/50' : 'text-gray-600'
              }`}>
                Our fees are tailored to the complexity of your situation and scope of services required.
              </p>
            </motion.div>

            {/* Typical Engagement Ranges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h3 className={`text-2xl font-bold mb-10 text-center tracking-tight ${
                theme === 'dark' ? 'text-white-100' : 'text-black'
              }`}>
                Typical engagement ranges:
              </h3>

              <div className="space-y-6 max-w-3xl mx-auto">
                {[
                  {
                    title: 'For straightforward IFICI applications with basic crypto tax planning:',
                    price: '€5,000 - €12,000',
                    subtitle: '(one-time)',
                  },
                  {
                    title: 'For comprehensive optimization including company formation and advanced strategies:',
                    price: '€15,000 - €30,000',
                    subtitle: '(one-time)',
                  },
                  {
                    title: 'For white-glove family office services with ongoing wealth management:',
                    price: '€35,000 - €75,000+',
                    subtitle: '(annually)',
                  },
                ].map((range, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`p-6 rounded-2xl border ${
                      theme === 'dark'
                        ? 'bg-white-100/[0.02] border-white-100/[0.06]'
                        : 'bg-white border-gray-200'
                    }`}
                  >
                    <p className={`text-base mb-2 font-light ${
                      theme === 'dark' ? 'text-white-100/70' : 'text-gray-600'
                    }`}>
                      {range.title}
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span className={`text-3xl font-bold ${
                        theme === 'dark' ? 'text-white-100' : 'text-black'
                      }`}>
                        {range.price}
                      </span>
                      <span className={`text-sm font-light ${
                        theme === 'dark' ? 'text-white-100/50' : 'text-gray-500'
                      }`}>
                        {range.subtitle}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* What's Included */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className={`p-10 rounded-[32px] border mb-8 ${
                theme === 'dark'
                  ? 'bg-white-100/[0.02] border-white-100/[0.06]'
                  : 'bg-white border-gray-200'
              }`}
            >
              <h3 className={`text-2xl font-bold mb-6 text-center tracking-tight ${
                theme === 'dark' ? 'text-white-100' : 'text-black'
              }`}>
                What's included in every engagement:
              </h3>
              <ul className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                {[
                  'Dedicated advisor throughout process',
                  'Complete application management',
                  'All coordination with Portuguese authorities',
                  'Banking and service provider introductions',
                  'First tax return preparation',
                  '12-month support for questions and updates',
                ].map((item, i) => (
                  <li
                    key={i}
                    className={`flex items-start gap-3 text-base font-light ${
                      theme === 'dark' ? 'text-white-100/70' : 'text-gray-700'
                    }`}
                  >
                    <svg
                      className="w-6 h-6 text-yellow-500/80 flex-shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Premium Clients */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className={`p-10 rounded-[32px] border mb-12 ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-yellow-500/10 to-yellow-500/5 border-yellow-500/20'
                  : 'bg-gradient-to-br from-yellow-500/15 to-yellow-500/10 border-yellow-500/30'
              }`}
            >
              <h3 className={`text-2xl font-bold mb-6 text-center tracking-tight ${
                theme === 'dark' ? 'text-white-100' : 'text-black'
              }`}>
                Premium clients additionally receive:
              </h3>
              <ul className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                {[
                  'Private banking introductions (3+ institutions)',
                  'Access to our exclusive investor network',
                  'Quarterly in-person strategy sessions',
                  'Multi-year tax planning and filing',
                  'Priority response (24h guarantee)',
                ].map((item, i) => (
                  <li
                    key={i}
                    className={`flex items-start gap-3 text-base font-light ${
                      theme === 'dark' ? 'text-white-100/70' : 'text-gray-700'
                    }`}
                  >
                    <svg
                      className="w-6 h-6 text-yellow-500/80 flex-shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Final Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-center space-y-6"
            >
              <p className={`text-lg font-light ${
                theme === 'dark' ? 'text-white-100/60' : 'text-gray-600'
              }`}>
                Your exact investment will be determined during the discovery consultation based on your specific needs and objectives.
              </p>
              <p className={`text-xl font-semibold ${
                theme === 'dark' ? 'text-white-100' : 'text-black'
              }`}>
                Average client saves 3-5x their investment in the first year alone.
              </p>

              <div className="pt-8">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => setIsCalendlyOpen(true)}
                >
                  Schedule Discovery Consultation
                </Button>
              </div>

              <p className={`text-sm font-light pt-4 ${
                theme === 'dark' ? 'text-white-100/40' : 'text-gray-500'
              }`}>
                All fees are agreed upon in advance. No hidden costs. No surprises.
              </p>
            </motion.div>
          </div>
        </section>

        {/* WHY CRESCENTIA */}
        <section className={`relative py-32 md:py-48 overflow-hidden ${
          theme === 'dark' ? 'bg-[#12141C]' : 'bg-gray-50'
        }`}>
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
                Why Leading Professionals Choose Us
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Crypto Specialization',
                  description: 'Portugal\'s only IFICI consultancy with deep cryptocurrency expertise. We understand your digital assets.',
                },
                {
                  title: '100% Success Rate',
                  description: 'Every IFICI application we submit gets approved. We pre-screen to ensure perfect qualification.',
                },
                {
                  title: 'Premium Network',
                  description: 'Direct relationships with crypto-friendly banks, private bankers, and wealth managers. Your introduction is our reputation.',
                },
                {
                  title: 'Absolute Discretion',
                  description: 'White-glove service with complete confidentiality. Your privacy is paramount.',
                },
                {
                  title: 'Long-Term Partnership',
                  description: 'We\'re not transactional. Many clients have been with us for years, continuously optimizing as life evolves.',
                },
                {
                  title: 'Proven Results',
                  description: 'Average client tax savings: €85,000 over 10 years. Your investment pays for itself many times over.',
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <div className={`relative h-full p-8 rounded-[32px] backdrop-blur-2xl border transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    theme === 'dark'
                      ? 'bg-white-100/[0.02] border-white-100/[0.06] hover:bg-white-100/[0.04] hover:border-white-100/10'
                      : 'bg-white border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl'
                  }`}>
                    <div className={`absolute inset-0 rounded-[32px] bg-gradient-to-br from-yellow-500/0 via-transparent to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-700`} />

                    <div className="relative">
                      <h3 className={`text-xl font-bold mb-3 tracking-tight ${
                        theme === 'dark' ? 'text-white-100' : 'text-black'
                      }`}>
                        {feature.title}
                      </h3>
                      <p className={`text-base leading-relaxed font-light tracking-[-0.01em] ${
                        theme === 'dark' ? 'text-white-100/60' : 'text-gray-600'
                      }`}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className={`relative py-32 md:py-48 overflow-hidden ${
          theme === 'dark' ? 'bg-[#0a0a0a]' : 'bg-white'
        }`}>
          <div className={`absolute inset-0 opacity-50 ${
            theme === 'dark'
              ? 'bg-gradient-to-b from-[#12141C] via-[#0a0a0a] to-[#12141C]'
              : 'bg-gradient-to-b from-gray-50 via-white to-gray-50'
          }`} />
          <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
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
                Frequently Asked Questions
              </h2>
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  question: 'What makes you different from other IFICI consultants?',
                  answer: 'We\'re the only consultancy specializing in both IFICI and cryptocurrency tax optimization. Most firms understand one or the other—we excel at both.',
                },
                {
                  question: 'Do I need to have crypto to work with you?',
                  answer: 'No. While we specialize in crypto, we serve all high-income professionals relocating to Portugal. Our expertise simply extends further than others.',
                },
                {
                  question: 'What\'s your typical client profile?',
                  answer: 'Tech executives, entrepreneurs, and investors earning €150k+ annually or with portfolios exceeding €1M. We work with clients from Silicon Valley to Singapore.',
                },
                {
                  question: 'How long does the process take?',
                  answer: 'IFICI approval typically takes 6-12 weeks from application. Complete relocation and optimization can take 3-6 months depending on complexity.',
                },
                {
                  question: 'Do you provide ongoing services?',
                  answer: 'Yes. Many clients retain us for annual tax planning, filings, and strategic advisory. This is optional but recommended for complex situations.',
                },
                {
                  question: 'What if I\'m not eligible for IFICI?',
                  answer: 'We\'ll tell you during the discovery call—honestly and free of charge. We only take on clients we can genuinely help.',
                },
                {
                  question: 'Are your fees negotiable?',
                  answer: 'Our fees reflect the significant value we deliver and expertise we provide. That said, we\'re always transparent about costs and tailor our scope to your budget where possible.',
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-8 rounded-[32px] border ${
                    theme === 'dark'
                      ? 'bg-white-100/[0.02] border-white-100/[0.06]'
                      : 'bg-white border-gray-200'
                  }`}
                >
                  <h3 className={`text-xl font-bold mb-3 tracking-tight ${
                    theme === 'dark' ? 'text-white-100' : 'text-black'
                  }`}>
                    {faq.question}
                  </h3>
                  <p className={`text-base leading-relaxed font-light tracking-[-0.01em] ${
                    theme === 'dark' ? 'text-white-100/60' : 'text-gray-600'
                  }`}>
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
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
              <h2 className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-[-0.03em] leading-[1.05] ${
                theme === 'dark' ? 'text-white-100' : 'text-black'
              }`}>
                Start Your{' '}
                <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                  Tax Optimization Journey
                </span>
              </h2>

              <p className={`text-lg md:text-xl lg:text-2xl mb-6 max-w-3xl mx-auto font-light leading-relaxed tracking-[-0.01em] ${
                theme === 'dark' ? 'text-white-100/60' : 'text-gray-600'
              }`}>
                Book a complimentary 60-minute discovery consultation. We'll analyze your situation and show you exactly how much you can save.
              </p>

              <p className={`text-base mb-12 font-light ${
                theme === 'dark' ? 'text-white-100/50' : 'text-gray-500'
              }`}>
                No obligation. Complete confidentiality.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-6 mb-16"
              >
                <Button
                  size="lg"
                  variant="primary"
                  onClick={() => setIsCalendlyOpen(true)}
                  className="group relative overflow-hidden text-lg px-12 py-6"
                >
                  <span className="relative z-10">Schedule Your Discovery Call</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-500"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                </Button>

                <p className={`text-sm font-light ${
                  theme === 'dark' ? 'text-white-100/50' : 'text-gray-500'
                }`}>
                  Or email us directly:{' '}
                  <a
                    href="mailto:wealth@crescentia.pt"
                    className={`font-medium hover:text-yellow-500 transition-colors ${
                      theme === 'dark' ? 'text-white-100/70' : 'text-gray-700'
                    }`}
                  >
                    wealth@crescentia.pt
                  </a>
                </p>
              </motion.div>

              {/* What to Prepare */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className={`max-w-2xl mx-auto p-8 rounded-[32px] border ${
                  theme === 'dark'
                    ? 'bg-white-100/[0.02] border-white-100/[0.06]'
                    : 'bg-white border-gray-200'
                }`}
              >
                <h3 className={`text-xl font-bold mb-6 text-center tracking-tight ${
                  theme === 'dark' ? 'text-white-100' : 'text-black'
                }`}>
                  What to prepare:
                </h3>
                <ul className={`space-y-3 text-base font-light ${
                  theme === 'dark' ? 'text-white-100/70' : 'text-gray-700'
                }`}>
                  {[
                    'Your current country of residence and tax status',
                    'Annual income and sources (employment, business, investments)',
                    'Cryptocurrency holdings (if applicable)',
                    'Your objectives for relocating to Portugal',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className={`mt-1 ${
                        theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'
                      }`}>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className={`text-center mt-6 font-medium ${
                  theme === 'dark' ? 'text-white-100/80' : 'text-gray-800'
                }`}>
                  We'll handle the rest.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Newsletter Section */}
        <NewsletterSection theme={theme} />
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
          {
            title: 'Legal',
            links: [
              { label: 'Privacy Policy', href: '/privacy' },
              { label: 'Terms of Service', href: '/terms' },
            ],
          },
        ]}
        copyright="© 2026 Crescentia Wealth. All rights reserved."
      />

      {/* Cookie Consent Banner */}
      <CookieBanner theme={theme} />
    </>
  )
}
