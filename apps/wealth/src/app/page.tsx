'use client'

import { Button, Header, Footer, PricingCard } from '@crescentia/ui'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@crescentia/ui'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HomePage() {
  return (
    <>
      {/* Header */}
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
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-dark-500 via-dark-400 to-dark-500">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
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
                <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 font-semibold text-lg">
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
                <Button size="lg" variant="primary" className="text-lg px-10 py-5">
                  Book Free Consultation →
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  className="border-2 border-white-100 text-white-100 hover:bg-white-100/10 text-lg px-10 py-5"
                >
                  Learn More
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '0.7s' }} />
        </section>

        {/* Benefits Bar */}
        <section id="benefits" className="bg-yellow-500 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: '📊',
                  title: '20% Tax Rate',
                  description: 'Instead of 48% standard rate',
                },
                {
                  icon: '💎',
                  title: '0% Crypto Tax',
                  description: 'Tax-free cryptocurrency gains',
                },
                {
                  icon: '🇪🇺',
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
                  className="text-center"
                >
                  <div className="text-6xl mb-4">{benefit.icon}</div>
                  <h3 className="text-2xl font-bold text-dark-500 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-lg text-dark-400">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Who is this for */}
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
                icon: '👨‍💻',
                title: 'Developers',
                description:
                  'Software engineers, DevOps, full-stack developers working remotely or for Portuguese companies',
              },
              {
                icon: '🚀',
                title: 'Founders',
                description:
                  'Startup founders and entrepreneurs building tech companies from Portugal',
              },
              {
                icon: '📈',
                title: 'Traders',
                description:
                  'Day traders, crypto investors, and financial professionals managing portfolios',
              },
              {
                icon: '💼',
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
              >
                <Card variant="elevated" className="h-full hover:shadow-2xl transition-all hover:scale-105">
                  <CardHeader>
                    <div className="text-7xl mb-6">{persona.icon}</div>
                    <CardTitle className="text-2xl">{persona.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {persona.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="bg-dark-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              className="bg-white-100 rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-dark-500 text-white-100">
                    <tr>
                      <th className="px-6 py-5 text-left text-lg font-bold">Country</th>
                      <th className="px-6 py-5 text-left text-lg font-bold">Income Tax</th>
                      <th className="px-6 py-5 text-left text-lg font-bold">Crypto Tax</th>
                      <th className="px-6 py-5 text-left text-lg font-bold">Social Security</th>
                      <th className="px-6 py-5 text-left text-lg font-bold">Total Tax</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-dark-100">
                    <tr className="bg-yellow-50 border-2 border-yellow-500">
                      <td className="px-6 py-6 font-bold text-dark-500 text-lg">
                        🇵🇹 Portugal (IFICI)
                      </td>
                      <td className="px-6 py-6 text-yellow-600 font-bold text-lg">20%</td>
                      <td className="px-6 py-6 text-yellow-600 font-bold text-lg">0%</td>
                      <td className="px-6 py-6 text-yellow-600 font-bold text-lg">~21.4%</td>
                      <td className="px-6 py-6 text-yellow-600 font-bold text-lg">~41.4%</td>
                    </tr>
                    <tr className="hover:bg-dark-50 transition-colors">
                      <td className="px-6 py-5 font-semibold text-dark-500">🇪🇸 Spain</td>
                      <td className="px-6 py-5 text-dark-400">47%</td>
                      <td className="px-6 py-5 text-dark-400">23-26%</td>
                      <td className="px-6 py-5 text-dark-400">~30%</td>
                      <td className="px-6 py-5 text-error font-bold">~77%</td>
                    </tr>
                    <tr className="hover:bg-dark-50 transition-colors">
                      <td className="px-6 py-5 font-semibold text-dark-500">🇫🇷 France</td>
                      <td className="px-6 py-5 text-dark-400">45%</td>
                      <td className="px-6 py-5 text-dark-400">30%</td>
                      <td className="px-6 py-5 text-dark-400">~45%</td>
                      <td className="px-6 py-5 text-error font-bold">~90%</td>
                    </tr>
                    <tr className="hover:bg-dark-50 transition-colors">
                      <td className="px-6 py-5 font-semibold text-dark-500">🇩🇪 Germany</td>
                      <td className="px-6 py-5 text-dark-400">45%</td>
                      <td className="px-6 py-5 text-dark-400">26.4%</td>
                      <td className="px-6 py-5 text-dark-400">~20%</td>
                      <td className="px-6 py-5 text-error font-bold">~65%</td>
                    </tr>
                    <tr className="hover:bg-dark-50 transition-colors">
                      <td className="px-6 py-5 font-semibold text-dark-500">🇬🇧 UK</td>
                      <td className="px-6 py-5 text-dark-400">45%</td>
                      <td className="px-6 py-5 text-dark-400">20%</td>
                      <td className="px-6 py-5 text-dark-400">~13.8%</td>
                      <td className="px-6 py-5 text-error font-bold">~58.8%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-yellow-500 px-8 py-6">
                <p className="text-dark-500 font-bold text-lg text-center">
                  💡 On a €100k salary, you could save between €16,600 - €48,600 per year with IFICI
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Section */}
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

        {/* Final CTA */}
        <section className="bg-gradient-to-r from-yellow-500 to-yellow-400 py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
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
                className="text-xl px-12 py-6"
              >
                Book Free Consultation →
              </Button>
              <p className="text-dark-400 mt-6 text-lg">
                ✓ No commitment required  •  ✓ 30-minute call  •  ✓ Get instant answers
              </p>
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
