'use client'

import { Button, Header, Footer, PricingCard } from '@crescentia/ui'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@crescentia/ui'
import { motion } from 'framer-motion'

// Professional SVG Icons
const ChartIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
)

const DiamondIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
)

const GlobeIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const CodeIcon = () => (
  <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
)

const RocketIcon = () => (
  <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
)

const TrendingUpIcon = () => (
  <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
)

const BriefcaseIcon = () => (
  <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const LightbulbIcon = () => (
  <svg className="w-6 h-6 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
)

export default function HomePage() {
  return (
    <>
      {/* Header with Glassmorphism */}
      <Header
        logo="/logos/Crescentia-Horizontal-Whiteout.svg"
        logoAlt="Crescentia Wealth"
        links={[
          { label: 'Benefits', href: '#benefits' },
          { label: 'Who is this for', href: '#who' },
          { label: 'Pricing', href: '#pricing' },
        ]}
        ctaText="Book Consultation"
        onCtaClick={() => console.log('Book consultation')}
      />

      <main className="min-h-screen pt-20">
        {/* Hero Section with Glass Overlay */}
        <section className="relative overflow-hidden bg-gradient-to-br from-dark-500 via-dark-400 to-dark-500">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

          {/* Glass overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-500/20 to-dark-500/40 backdrop-blur-[1px]" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block mb-8"
              >
                <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 font-semibold text-lg backdrop-blur-sm">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
                  IFICI Tax Optimization for Tech Professionals
                </span>
              </motion.div>

              <h1 className="text-6xl md:text-8xl font-bold text-white-100 mb-8 leading-tight">
                Pay <span className="text-yellow-500">20% Tax</span>
                <br />
                in Portugal for{' '}
                <span className="text-yellow-500">10 Years</span>
              </h1>

              <p className="text-2xl md:text-3xl text-white-200 mb-12 max-w-4xl mx-auto leading-relaxed">
                Save thousands in taxes with Portugal's IFICI regime.
                <br />
                Designed for international tech professionals like you.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" variant="primary" className="text-lg px-10 py-5 shadow-xl shadow-yellow-500/20">
                  Book Free Consultation →
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  className="border-2 border-white-100/30 text-white-100 hover:bg-white-100/10 text-lg px-10 py-5 backdrop-blur-sm"
                >
                  Learn More
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Decorative glass elements */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '0.7s' }} />
        </section>

        {/* Benefits Bar with Glassmorphism */}
        <section id="benefits" className="relative py-24 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-yellow-400" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
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
                  description: 'Live & work across Europe',
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  {/* Glassmorphism card */}
                  <div className="relative p-8 rounded-2xl bg-white-100/10 backdrop-blur-md border border-white-100/20 hover:bg-white-100/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <div className="flex justify-center mb-6 text-dark-500 group-hover:text-dark-600 transition-colors">
                      {benefit.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-dark-500 mb-2 text-center">
                      {benefit.title}
                    </h3>
                    <p className="text-lg text-dark-400 text-center">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Who is this for with Glass Cards */}
        <section id="who" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-dark-500 mb-6">
              Who Is This For?
            </h2>
            <p className="text-xl text-dark-300 max-w-3xl mx-auto">
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
                  'Software engineers, DevOps, full-stack developers working remotely or for Portuguese companies',
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
                  'Day traders, crypto investors, and financial professionals managing portfolios',
              },
              {
                icon: <BriefcaseIcon />,
                title: 'Executives',
                description:
                  'C-level executives, CTOs, VPs, and senior leaders in tech companies',
              },
            ].map((persona, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                {/* Glassmorphism card */}
                <div className="relative h-full p-8 rounded-2xl bg-white-100/60 backdrop-blur-lg border border-white-100/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-white-100/80">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-500/0 to-yellow-500/0 group-hover:from-yellow-500/5 group-hover:to-transparent transition-all duration-300" />

                  <div className="relative">
                    <div className="flex justify-center mb-6 text-yellow-600 group-hover:text-yellow-500 transition-colors">
                      {persona.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-dark-500 mb-4 text-center">
                      {persona.title}
                    </h3>
                    <p className="text-base leading-relaxed text-dark-400 text-center">
                      {persona.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Comparison Table with Glassmorphism */}
        <section className="relative py-24 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-dark-50 to-dark-100" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-dark-500 mb-6">
                Portugal vs Rest of Europe
              </h2>
              <p className="text-xl text-dark-300 max-w-3xl mx-auto">
                See how much you can save with IFICI compared to other EU countries
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative rounded-2xl bg-white-100/70 backdrop-blur-xl border border-white-100/30 shadow-2xl overflow-hidden"
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-dark-500/90 backdrop-blur-sm text-white-100">
                    <tr>
                      <th className="px-6 py-5 text-left text-lg font-bold">Country</th>
                      <th className="px-6 py-5 text-left text-lg font-bold">Income Tax</th>
                      <th className="px-6 py-5 text-left text-lg font-bold">Crypto Tax</th>
                      <th className="px-6 py-5 text-left text-lg font-bold">Social Security</th>
                      <th className="px-6 py-5 text-left text-lg font-bold">Total Tax</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-dark-100/30">
                    <tr className="bg-yellow-500/20 border-2 border-yellow-500/50 backdrop-blur-sm">
                      <td className="px-6 py-6 font-bold text-dark-500 text-lg">
                        <span className="inline-flex items-center gap-2">
                          <span className="px-2 py-1 rounded bg-yellow-500 text-dark-500 text-sm font-bold">PT</span>
                          Portugal (IFICI)
                        </span>
                      </td>
                      <td className="px-6 py-6 text-yellow-600 font-bold text-lg">20%</td>
                      <td className="px-6 py-6 text-yellow-600 font-bold text-lg">0%</td>
                      <td className="px-6 py-6 text-yellow-600 font-bold text-lg">~21.4%</td>
                      <td className="px-6 py-6 text-yellow-600 font-bold text-lg">~41.4%</td>
                    </tr>
                    <tr className="hover:bg-white-100/50 transition-colors backdrop-blur-sm">
                      <td className="px-6 py-5 font-semibold text-dark-500">
                        <span className="inline-flex items-center gap-2">
                          <span className="px-2 py-1 rounded bg-dark-200 text-dark-500 text-sm font-bold">ES</span>
                          Spain
                        </span>
                      </td>
                      <td className="px-6 py-5 text-dark-400">47%</td>
                      <td className="px-6 py-5 text-dark-400">23-26%</td>
                      <td className="px-6 py-5 text-dark-400">~30%</td>
                      <td className="px-6 py-5 text-error font-bold">~77%</td>
                    </tr>
                    <tr className="hover:bg-white-100/50 transition-colors backdrop-blur-sm">
                      <td className="px-6 py-5 font-semibold text-dark-500">
                        <span className="inline-flex items-center gap-2">
                          <span className="px-2 py-1 rounded bg-dark-200 text-dark-500 text-sm font-bold">FR</span>
                          France
                        </span>
                      </td>
                      <td className="px-6 py-5 text-dark-400">45%</td>
                      <td className="px-6 py-5 text-dark-400">30%</td>
                      <td className="px-6 py-5 text-dark-400">~45%</td>
                      <td className="px-6 py-5 text-error font-bold">~90%</td>
                    </tr>
                    <tr className="hover:bg-white-100/50 transition-colors backdrop-blur-sm">
                      <td className="px-6 py-5 font-semibold text-dark-500">
                        <span className="inline-flex items-center gap-2">
                          <span className="px-2 py-1 rounded bg-dark-200 text-dark-500 text-sm font-bold">DE</span>
                          Germany
                        </span>
                      </td>
                      <td className="px-6 py-5 text-dark-400">45%</td>
                      <td className="px-6 py-5 text-dark-400">26.4%</td>
                      <td className="px-6 py-5 text-dark-400">~20%</td>
                      <td className="px-6 py-5 text-error font-bold">~65%</td>
                    </tr>
                    <tr className="hover:bg-white-100/50 transition-colors backdrop-blur-sm">
                      <td className="px-6 py-5 font-semibold text-dark-500">
                        <span className="inline-flex items-center gap-2">
                          <span className="px-2 py-1 rounded bg-dark-200 text-dark-500 text-sm font-bold">UK</span>
                          United Kingdom
                        </span>
                      </td>
                      <td className="px-6 py-5 text-dark-400">45%</td>
                      <td className="px-6 py-5 text-dark-400">20%</td>
                      <td className="px-6 py-5 text-dark-400">~13.8%</td>
                      <td className="px-6 py-5 text-error font-bold">~58.8%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="relative bg-yellow-500/90 backdrop-blur-sm px-8 py-6 border-t border-yellow-400/30">
                <p className="text-dark-500 font-bold text-lg text-center flex items-center justify-center gap-2">
                  <LightbulbIcon />
                  On a €100k salary, you could save between €16,600 - €48,600 per year with IFICI
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Section - Cards already have glassmorphism from PricingCard component */}
        <section id="pricing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-dark-500 mb-6">
              Choose Your Package
            </h2>
            <p className="text-xl text-dark-300 max-w-3xl mx-auto">
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
              onButtonClick={() => console.log('Essential clicked')}
            />

            <PricingCard
              name="Professional"
              price="24,997"
              highlighted
              description="Most popular for serious professionals optimizing their tax"
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
              onButtonClick={() => console.log('Professional clicked')}
            />

            <PricingCard
              name="Complete"
              price="49,997"
              description="Full white-glove service for executives and founders"
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
              onButtonClick={() => console.log('Complete clicked')}
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-dark-300 text-lg">
              All packages include a <span className="font-bold text-dark-500">money-back guarantee</span> if IFICI is not approved
            </p>
          </motion.div>
        </section>

        {/* Final CTA with Glass Effect */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-400" />

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-12 rounded-3xl bg-white-100/10 backdrop-blur-md border border-white-100/20"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-dark-500 mb-6">
                Ready to Pay Only 20% Tax?
              </h2>
              <p className="text-2xl text-dark-400 mb-10">
                Book a free consultation with our IFICI experts today.
                <br />
                Learn if you qualify and how much you can save.
              </p>
              <Button
                size="lg"
                variant="secondary"
                className="text-xl px-12 py-6 shadow-2xl hover:shadow-3xl transition-shadow"
              >
                Book Free Consultation →
              </Button>
              <div className="flex items-center justify-center gap-6 mt-8 text-dark-400 text-lg flex-wrap">
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-dark-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  No commitment required
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-dark-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  30-minute call
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-dark-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Get instant answers
                </span>
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
