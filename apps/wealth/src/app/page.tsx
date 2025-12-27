'use client'

import { useState } from 'react'
import { Button, Footer, PricingCard, CalendlyModal } from '@crescentia/ui'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

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

// Apple-style Premium Header Component
const PremiumHeader = ({ onCtaClick }: { onCtaClick: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useState(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  })

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
        isScrolled
          ? 'bg-[#0a0a0a]/90 backdrop-blur-2xl border-b border-white-100/10 py-3'
          : 'bg-transparent border-b border-white-100/0 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo - Using img tag for reliability */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="/logos/Crescentia-Horizontal-MainColor-Whiteout.svg"
              alt="Crescentia"
              className="h-7 w-auto"
              onError={(e) => {
                console.error('Logo failed to load')
                e.currentTarget.style.display = 'none'
              }}
            />
          </motion.div>

          {/* Navigation */}
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
                className="text-sm font-light text-white-100/60 hover:text-white-100 transition-all duration-400 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-yellow-500 group-hover:w-full transition-all duration-400" />
              </motion.a>
            ))}
          </nav>

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
    </motion.header>
  )
}

export default function HomePage() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false)
  const { scrollY } = useScroll()
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0])
  const heroY = useTransform(scrollY, [0, 300], [0, -50])

  return (
    <>
      <CalendlyModal
        isOpen={isCalendlyOpen}
        onClose={() => setIsCalendlyOpen(false)}
        url="https://calendly.com/crescentiapt"
      />

      <PremiumHeader onCtaClick={() => setIsCalendlyOpen(true)} />

      <main className="min-h-screen pt-20">
        {/* ULTRA-PREMIUM HERO - Apple Pro Level */}
        <motion.section
          style={{ opacity: heroOpacity }}
          className="relative overflow-hidden min-h-[95vh] flex items-center"
        >
          {/* Sophisticated Multi-Stop Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#000000] via-[#0a0a0a] via-[#12141C] to-[#1a1d2e]" />

          {/* Animated Subtle Gradient Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-yellow-500/3 via-transparent to-transparent"
            animate={{
              background: [
                'linear-gradient(to bottom right, rgba(245,207,0,0.03), transparent, transparent)',
                'linear-gradient(to bottom right, transparent, rgba(245,207,0,0.02), transparent)',
                'linear-gradient(to bottom right, rgba(245,207,0,0.03), transparent, transparent)',
              ]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />

          {/* Noise Texture for Depth */}
          <div className="absolute inset-0 opacity-[0.015]" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")'
          }} />

          {/* Elegant Radial Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[800px] bg-yellow-500/[0.04] rounded-full blur-[120px]" />

          <motion.div
            style={{ y: heroY }}
            className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 md:py-40 w-full"
          >
            <div className="text-center max-w-5xl mx-auto">
              {/* Small Badge - Minimal */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                className="inline-block mb-12"
              >
                <span className="text-white-100/40 font-light text-xs tracking-[0.2em] uppercase">
                  IFICI Tax Regime
                </span>
              </motion.div>

              {/* MASSIVE Typography - Gradient Text Effect */}
              <div className="mb-10">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className="text-8xl md:text-9xl lg:text-[180px] font-bold leading-[0.95] tracking-[-0.03em] mb-6"
                >
                  <span className="block">Pay</span>
                  <span className="block bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                    20% Tax
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  className="text-6xl md:text-7xl lg:text-8xl font-bold text-white-100/90 leading-[1.05] tracking-[-0.03em]"
                >
                  in Portugal for{' '}
                  <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                    10 Years
                  </span>
                </motion.p>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.4, 0, 0.2, 1] }}
                className="text-xl md:text-2xl text-white-100/50 mb-16 max-w-3xl mx-auto leading-relaxed font-light tracking-[-0.01em]"
              >
                Save thousands in taxes with Portugal's IFICI regime.
                <br />
                Designed for international tech professionals.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9, ease: [0.4, 0, 0.2, 1] }}
                className="flex flex-col sm:flex-row gap-5 justify-center"
              >
                <Button
                  size="lg"
                  variant="primary"
                  onClick={() => setIsCalendlyOpen(true)}
                  className="group relative overflow-hidden"
                >
                  <span className="relative z-10">Book Free Consultation</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                </Button>
                <Button size="lg" variant="secondary">
                  Learn More
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 rounded-full border-2 border-white-100/20 flex items-start justify-center p-2"
            >
              <motion.div className="w-1.5 h-1.5 bg-white-100/40 rounded-full" />
            </motion.div>
          </motion.div>
        </motion.section>

        {/* SOPHISTICATED GOLD BENEFITS SECTION */}
        <section id="benefits" className="relative py-48 overflow-hidden bg-gradient-to-br from-[#E8C547] via-[#DFC13F] to-[#D4AF37]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-16">
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
        <section id="who" className="relative py-48 bg-gradient-to-b from-[#0a0a0a] to-[#000000]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true }}
              className="text-center mb-24"
            >
              <h2 className="text-7xl md:text-8xl font-bold text-white-100 mb-8 tracking-[-0.03em] leading-[1.05]">
                Who is this for?
              </h2>
              <p className="text-xl text-white-100/50 max-w-2xl mx-auto font-light leading-relaxed tracking-[-0.01em]">
                IFICI is designed for high-income international professionals
                working in Portugal
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
              {[
                {
                  icon: <CodeIcon />,
                  title: 'Developers',
                  description: 'Software engineers and full-stack developers working remotely',
                },
                {
                  icon: <RocketIcon />,
                  title: 'Founders',
                  description: 'Startup founders building tech companies from Portugal',
                },
                {
                  icon: <TrendingUpIcon />,
                  title: 'Traders',
                  description: 'Crypto investors and financial professionals',
                },
                {
                  icon: <BriefcaseIcon />,
                  title: 'Executives',
                  description: 'C-level executives and senior tech leaders',
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
                  <div className="relative h-full p-12 rounded-[32px] bg-white-100/[0.02] backdrop-blur-2xl border border-white-100/[0.06] hover:bg-white-100/[0.04] hover:border-white-100/10 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.03)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.06)]">
                    {/* Gradient border effect on hover */}
                    <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-yellow-500/0 via-transparent to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-700" />

                    <div className="relative flex justify-center mb-10 text-yellow-500/80 group-hover:text-yellow-500 group-hover:scale-110 transition-all duration-700">
                      {persona.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white-100 mb-5 text-center tracking-tight">
                      {persona.title}
                    </h3>
                    <p className="text-base leading-relaxed text-white-100/50 text-center font-light tracking-[-0.01em]">
                      {persona.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* COMPARISON TABLE - Elegant & Spaced */}
        <section className="relative py-48 bg-gradient-to-b from-[#000000] to-[#0a0a0a]">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true }}
              className="text-center mb-24"
            >
              <h2 className="text-7xl md:text-8xl font-bold text-white-100 mb-8 tracking-[-0.03em] leading-[1.05]">
                Compare Tax Systems
              </h2>
              <p className="text-xl text-white-100/50 max-w-2xl mx-auto font-light leading-relaxed tracking-[-0.01em]">
                See why Portugal's IFICI regime is unmatched in Europe
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true }}
              className="relative rounded-[32px] bg-white-100/[0.02] backdrop-blur-2xl border border-white-100/[0.06] p-2 overflow-hidden"
            >
              {/* Subtle inner glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/[0.01] to-transparent pointer-events-none" />

              <div className="relative overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white-100/10">
                      <th className="text-left py-8 px-8 text-base font-semibold text-white-100/90 tracking-tight">Country</th>
                      <th className="text-right py-8 px-8 text-base font-semibold text-white-100/90 tracking-tight">Income Tax</th>
                      <th className="text-right py-8 px-8 text-base font-semibold text-white-100/90 tracking-tight">Crypto Tax</th>
                      <th className="text-right py-8 px-8 text-base font-semibold text-white-100/90 tracking-tight">Quality of Life</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { country: 'Portugal (IFICI)', income: '20%', crypto: '0%', qol: '9/10', highlight: true },
                      { country: 'Germany', income: '45%', crypto: '26.4%', qol: '8/10', highlight: false },
                      { country: 'UK', income: '45%', crypto: '20%', qol: '7/10', highlight: false },
                      { country: 'France', income: '45%', crypto: '30%', qol: '8/10', highlight: false },
                      { country: 'Netherlands', income: '49.5%', crypto: '31%', qol: '8/10', highlight: false },
                      { country: 'Spain', income: '47%', crypto: '23%', qol: '8/10', highlight: false },
                    ].map((row, index) => (
                      <motion.tr
                        key={row.country}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.08, ease: [0.4, 0, 0.2, 1] }}
                        viewport={{ once: true }}
                        className={`border-b border-white-100/5 transition-all duration-500 hover:bg-white-100/[0.02] ${
                          row.highlight ? 'bg-yellow-500/[0.03]' : ''
                        }`}
                      >
                        <td className="py-6 px-8 text-white-100/90 font-medium tracking-tight">
                          {row.country}
                          {row.highlight && (
                            <span className="ml-3 text-xs px-3 py-1.5 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-500/90 font-semibold tracking-wide">
                              BEST
                            </span>
                          )}
                        </td>
                        <td className="py-6 px-8 text-right font-mono text-lg text-white-100/70">
                          {row.income}
                        </td>
                        <td className="py-6 px-8 text-right font-mono text-lg text-white-100/70">
                          {row.crypto}
                        </td>
                        <td className="py-6 px-8 text-right font-mono text-lg text-white-100/70">
                          {row.qol}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </section>

        {/* PRICING SECTION - Ultra-Premium Cards */}
        <section id="pricing" className="relative py-48 bg-gradient-to-b from-[#0a0a0a] to-[#000000]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true }}
              className="text-center mb-24"
            >
              <h2 className="text-7xl md:text-8xl font-bold text-white-100 mb-8 tracking-[-0.03em] leading-[1.05]">
                Investment in Your Future
              </h2>
              <p className="text-xl text-white-100/50 max-w-3xl mx-auto font-light leading-relaxed tracking-[-0.01em]">
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

                  <div className="relative h-full p-12 rounded-[32px] bg-white-100/[0.02] backdrop-blur-2xl border border-white-100/[0.06] hover:bg-white-100/[0.04] transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.03)] hover:shadow-[0_24px_64px_rgba(0,0,0,0.24),inset_0_2px_0_rgba(255,255,255,0.06)]">
                    {/* Gradient border glow on hover */}
                    <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-yellow-500/0 via-yellow-500/0 to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-700" />
                    <div className="absolute inset-0 rounded-[32px] border border-yellow-500/0 group-hover:border-yellow-500/20 transition-all duration-700" />

                    {/* Subtle outer glow */}
                    <div className="absolute -inset-[1px] rounded-[32px] bg-gradient-to-br from-yellow-500/0 to-transparent opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-700" />

                    <div className="relative">
                      {/* Plan Name */}
                      <h3 className="text-2xl font-bold text-white-100 mb-3 tracking-tight">
                        {plan.name}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-white-100/50 mb-10 font-light leading-relaxed tracking-[-0.01em]">
                        {plan.description}
                      </p>

                      {/* Price */}
                      <div className="mb-12">
                        <div className="text-6xl font-bold text-white-100 tracking-[-0.03em] mb-2">
                          {plan.price}
                        </div>
                        <div className="text-sm text-white-100/40 font-light tracking-wide">
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
                            className="flex items-start gap-4 text-white-100/70 font-light leading-relaxed"
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
              className="text-center mt-16 text-white-100/40 text-sm font-light tracking-wide"
            >
              All prices include Portuguese VAT. Payment plans available for Executive package.
            </motion.p>
          </div>
        </section>

        {/* FINAL CTA SECTION - Clean & Confident */}
        <section className="relative py-48 overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#12141C] to-[#000000]">
          {/* Elegant radial glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-yellow-500/[0.03] rounded-full blur-[140px]" />

          <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true }}
            >
              <h2 className="text-7xl md:text-8xl lg:text-9xl font-bold text-white-100 mb-12 tracking-[-0.03em] leading-[0.95]">
                Start Saving{' '}
                <span className="block bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                  Today
                </span>
              </h2>

              <p className="text-2xl text-white-100/60 mb-16 max-w-3xl mx-auto font-light leading-relaxed tracking-[-0.01em]">
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
                className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-12 text-white-100/40 text-sm font-light"
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
    </>
  )
}
