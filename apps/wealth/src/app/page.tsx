'use client'

import { useState } from 'react'
import { Button, Header, Footer, PricingCard, CalendlyModal } from '@crescentia/ui'
import { motion } from 'framer-motion'

// Clean, minimal SVG Icons (2px stroke)
const ChartIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
)

const DiamondIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
)

const GlobeIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const CodeIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
)

const RocketIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
)

const TrendingUpIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
)

const BriefcaseIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

export default function HomePage() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false)

  return (
    <>
      {/* Calendly Modal */}
      <CalendlyModal
        isOpen={isCalendlyOpen}
        onClose={() => setIsCalendlyOpen(false)}
        url="https://calendly.com/crescentiapt"
      />

      {/* Header - Apple Style */}
      <Header
        logo="/logos/Crescentia-Horizontal-Whiteout.svg"
        logoAlt="Crescentia Wealth"
        links={[
          { label: 'Benefits', href: '#benefits' },
          { label: 'Who is this for', href: '#who' },
          { label: 'Pricing', href: '#pricing' },
        ]}
        ctaText="Book Consultation"
        onCtaClick={() => setIsCalendlyOpen(true)}
      />

      <main className="min-h-screen pt-20">
        {/* Hero Section - Apple Style: Clean gradient, massive typography */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#0a0a0a] via-[#12141C] to-[#1a1d2e] min-h-[90vh] flex items-center">
          {/* Single elegant radial glow - very subtle */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-yellow-500/5 rounded-full blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 md:py-40 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              className="text-center"
            >
              {/* Small badge - minimal */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block mb-10"
              >
                <span className="text-white-100/50 font-light text-sm tracking-wide uppercase">
                  IFICI Tax Regime
                </span>
              </motion.div>

              {/* Massive heading - Apple style */}
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-white-100 mb-8 leading-[1.05] tracking-tight">
                Pay 20% Tax
                <br />
                in Portugal.
              </h1>

              <p className="text-xl md:text-2xl text-white-100/60 mb-16 max-w-3xl mx-auto leading-relaxed font-light">
                Save thousands in taxes with Portugal's IFICI regime.
                <br />
                Designed for international tech professionals.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="primary"
                  onClick={() => setIsCalendlyOpen(true)}
                >
                  Book Free Consultation
                </Button>
                <Button
                  size="lg"
                  variant="secondary"
                >
                  Learn More
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section - Clean, spacious */}
        <section id="benefits" className="relative py-40 overflow-hidden bg-gradient-to-br from-[#0a0a0a] to-[#12141C]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-12">
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
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  className="group"
                >
                  {/* Subtle glass card - Apple style */}
                  <div className="relative p-12 rounded-3xl bg-white-100/3 backdrop-blur-xl border border-white-100/8 hover:bg-white-100/5 hover:border-white-100/15 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-[0_4px_24px_rgba(0,0,0,0.12),0_1px_3px_rgba(0,0,0,0.08)]">
                    <div className="flex justify-center mb-8 text-yellow-500">
                      {benefit.icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-white-100 mb-3 text-center tracking-tight">
                      {benefit.title}
                    </h3>
                    <p className="text-base text-white-100/50 text-center font-light leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Who is this for - Generous spacing, clean cards */}
        <section id="who" className="relative py-40 bg-gradient-to-b from-[#12141C] to-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-6xl md:text-7xl font-bold text-white-100 mb-6 tracking-tight leading-[1.1]">
                Who is this for?
              </h2>
              <p className="text-xl text-white-100/60 max-w-2xl mx-auto font-light leading-relaxed">
                IFICI is designed for high-income international professionals
                working in Portugal
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <CodeIcon />,
                  title: 'Developers',
                  description:
                    'Software engineers and full-stack developers working remotely or for Portuguese companies',
                },
                {
                  icon: <RocketIcon />,
                  title: 'Founders',
                  description:
                    'Startup founders and entrepreneurs building tech companies from Portugal',
                },
                {
                  icon: <TrendingUpIcon />,
                  title: 'Traders',
                  description:
                    'Crypto investors and financial professionals managing portfolios',
                },
                {
                  icon: <BriefcaseIcon />,
                  title: 'Executives',
                  description:
                    'C-level executives and senior leaders in tech companies',
                },
              ].map((persona, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  className="group"
                >
                  <div className="relative h-full p-10 rounded-3xl bg-white-100/3 backdrop-blur-xl border border-white-100/8 hover:bg-white-100/5 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-[0_4px_24px_rgba(0,0,0,0.12),0_1px_3px_rgba(0,0,0,0.08)]">
                    <div className="flex justify-center mb-8 text-yellow-500">
                      {persona.icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-white-100 mb-4 text-center tracking-tight">
                      {persona.title}
                    </h3>
                    <p className="text-base leading-relaxed text-white-100/60 text-center font-light">
                      {persona.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table - Clean, minimal, elegant */}
        <section className="relative py-40 bg-gradient-to-br from-[#0a0a0a] to-[#12141C]">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-6xl md:text-7xl font-bold text-white-100 mb-6 tracking-tight leading-[1.1]">
                Portugal vs Europe
              </h2>
              <p className="text-xl text-white-100/60 max-w-2xl mx-auto font-light leading-relaxed">
                See how much you can save with IFICI
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true }}
              className="relative rounded-3xl bg-white-100/3 backdrop-blur-xl border border-white-100/8 shadow-[0_8px_32px_rgba(0,0,0,0.15),0_2px_6px_rgba(0,0,0,0.1)] overflow-hidden"
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-white-100/5 backdrop-blur-sm border-b border-white-100/10">
                    <tr>
                      <th className="px-8 py-6 text-left text-sm font-semibold text-white-100/90 tracking-wide">Country</th>
                      <th className="px-8 py-6 text-left text-sm font-semibold text-white-100/90 tracking-wide">Income Tax</th>
                      <th className="px-8 py-6 text-left text-sm font-semibold text-white-100/90 tracking-wide">Crypto Tax</th>
                      <th className="px-8 py-6 text-left text-sm font-semibold text-white-100/90 tracking-wide">Social Security</th>
                      <th className="px-8 py-6 text-left text-sm font-semibold text-white-100/90 tracking-wide">Total</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white-100/5">
                    <tr className="bg-yellow-500/5 border-l-4 border-yellow-500">
                      <td className="px-8 py-6 font-semibold text-white-100">
                        Portugal (IFICI)
                      </td>
                      <td className="px-8 py-6 text-yellow-500 font-medium">20%</td>
                      <td className="px-8 py-6 text-yellow-500 font-medium">0%</td>
                      <td className="px-8 py-6 text-white-100/70">~21.4%</td>
                      <td className="px-8 py-6 text-yellow-500 font-semibold">~41.4%</td>
                    </tr>
                    <tr className="hover:bg-white-100/3 transition-colors duration-300">
                      <td className="px-8 py-5 font-medium text-white-100/80">Spain</td>
                      <td className="px-8 py-5 text-white-100/60">47%</td>
                      <td className="px-8 py-5 text-white-100/60">23-26%</td>
                      <td className="px-8 py-5 text-white-100/60">~30%</td>
                      <td className="px-8 py-5 text-white-100/60">~77%</td>
                    </tr>
                    <tr className="hover:bg-white-100/3 transition-colors duration-300">
                      <td className="px-8 py-5 font-medium text-white-100/80">France</td>
                      <td className="px-8 py-5 text-white-100/60">45%</td>
                      <td className="px-8 py-5 text-white-100/60">30%</td>
                      <td className="px-8 py-5 text-white-100/60">~45%</td>
                      <td className="px-8 py-5 text-white-100/60">~90%</td>
                    </tr>
                    <tr className="hover:bg-white-100/3 transition-colors duration-300">
                      <td className="px-8 py-5 font-medium text-white-100/80">Germany</td>
                      <td className="px-8 py-5 text-white-100/60">45%</td>
                      <td className="px-8 py-5 text-white-100/60">26.4%</td>
                      <td className="px-8 py-5 text-white-100/60">~20%</td>
                      <td className="px-8 py-5 text-white-100/60">~65%</td>
                    </tr>
                    <tr className="hover:bg-white-100/3 transition-colors duration-300">
                      <td className="px-8 py-5 font-medium text-white-100/80">United Kingdom</td>
                      <td className="px-8 py-5 text-white-100/60">45%</td>
                      <td className="px-8 py-5 text-white-100/60">20%</td>
                      <td className="px-8 py-5 text-white-100/60">~13.8%</td>
                      <td className="px-8 py-5 text-white-100/60">~58.8%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Section - Clean, elegant cards */}
        <section id="pricing" className="relative py-40 bg-gradient-to-b from-[#12141C] to-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-6xl md:text-7xl font-bold text-white-100 mb-6 tracking-tight leading-[1.1]">
                Choose your package
              </h2>
              <p className="text-xl text-white-100/60 max-w-2xl mx-auto font-light leading-relaxed">
                Complete IFICI setup and support tailored to your needs
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <PricingCard
                name="Essential"
                price="12,997"
                description="Perfect for individuals who want the basics covered"
                features={[
                  'IFICI application filing',
                  'Tax residency setup',
                  'NIF & Social Security registration',
                  'Bank account opening support',
                  'Basic tax planning consultation',
                  'Email support for 12 months',
                ]}
                buttonText="Get Essential"
                onButtonClick={() => setIsCalendlyOpen(true)}
              />

              <PricingCard
                name="Professional"
                price="24,997"
                highlighted
                description="Most popular for serious professionals"
                features={[
                  'Everything in Essential, plus:',
                  'Personalized tax optimization strategy',
                  'Crypto tax planning (0% optimization)',
                  'Annual tax filing (first year included)',
                  'Dedicated tax advisor',
                  'Priority WhatsApp & email support',
                  'Quarterly tax review meetings',
                ]}
                buttonText="Get Professional"
                onButtonClick={() => setIsCalendlyOpen(true)}
              />

              <PricingCard
                name="Complete"
                price="49,997"
                description="Full white-glove service for executives"
                features={[
                  'Everything in Professional, plus:',
                  'Corporate structure optimization',
                  'Multi-country tax planning',
                  'Wealth management consultation',
                  'Legal entity setup support',
                  'VIP 24/7 concierge support',
                  'Monthly strategy sessions',
                  'Family tax planning included',
                ]}
                buttonText="Get Complete"
                onButtonClick={() => setIsCalendlyOpen(true)}
              />
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <p className="text-white-100/50 text-base font-light">
                All packages include a money-back guarantee if IFICI is not approved
              </p>
            </motion.div>
          </div>
        </section>

        {/* Final CTA - Clean, confident */}
        <section className="relative py-40 overflow-hidden bg-gradient-to-br from-[#0a0a0a] to-[#12141C]">
          <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true }}
            >
              <h2 className="text-6xl md:text-7xl font-bold text-white-100 mb-8 tracking-tight leading-[1.1]">
                Ready to pay
                <br />
                only 20% tax?
              </h2>
              <p className="text-xl text-white-100/60 mb-12 font-light leading-relaxed">
                Book a free consultation with our IFICI experts.
                <br />
                Learn if you qualify and how much you can save.
              </p>
              <Button
                size="lg"
                variant="primary"
                onClick={() => setIsCalendlyOpen(true)}
              >
                Book Free Consultation
              </Button>
              <div className="flex items-center justify-center gap-8 mt-10 text-white-100/50 text-sm flex-wrap font-light">
                <span>No commitment required</span>
                <span className="w-1 h-1 bg-white-100/30 rounded-full" />
                <span>30-minute call</span>
                <span className="w-1 h-1 bg-white-100/30 rounded-full" />
                <span>Get instant answers</span>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer
        logo="/logos/Crescentia-Horizontal-Whiteout.svg"
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
