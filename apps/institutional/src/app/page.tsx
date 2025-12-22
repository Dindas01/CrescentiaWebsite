'use client'

import { Button } from '@crescentia/ui'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-dark-500 to-dark-400">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white-100 mb-6">
              <span className="text-yellow-500">Crescentia</span>
            </h1>
            <p className="text-2xl md:text-3xl text-white-300 max-w-3xl mx-auto">
              Impulsionamos o crescimento através de financiamento inteligente
              e otimização fiscal
            </p>
          </motion.div>

          {/* Dual Split Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Funding Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white-100 p-8 md:p-12 h-full border-2 border-transparent hover:border-yellow-500 transition-all duration-300 cursor-pointer">
                <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-500 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity" />

                <div className="relative z-10">
                  <div className="text-5xl mb-6">🇵🇹</div>

                  <h2 className="text-4xl font-bold text-dark-500 mb-4">
                    Funding
                  </h2>

                  <p className="text-lg text-dark-300 mb-8">
                    Fundos Europeus para PMEs portuguesas. Portugal 2030, PRR
                    e incentivos para o seu negócio.
                  </p>

                  <ul className="space-y-3 mb-8 text-dark-400">
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-500">✓</span>
                      Portugal 2030
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-500">✓</span>
                      PRR - Plano de Recuperação
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-500">✓</span>
                      Candidaturas de Sucesso
                    </li>
                  </ul>

                  <Link href="https://funding.crescentia.pt" target="_blank">
                    <Button variant="primary" size="lg" fullWidth>
                      Explorar Funding →
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Wealth Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white-100 p-8 md:p-12 h-full border-2 border-transparent hover:border-yellow-500 transition-all duration-300 cursor-pointer">
                <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-500 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity" />

                <div className="relative z-10">
                  <div className="text-5xl mb-6">💰</div>

                  <h2 className="text-4xl font-bold text-dark-500 mb-4">
                    Wealth
                  </h2>

                  <p className="text-lg text-dark-300 mb-8">
                    IFICI tax optimization for international tech professionals
                    in Portugal. Maximize your income legally.
                  </p>

                  <ul className="space-y-3 mb-8 text-dark-400">
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-500">✓</span>
                      IFICI Tax Benefits
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-500">✓</span>
                      Expert Guidance
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-500">✓</span>
                      Fast Setup Process
                    </li>
                  </ul>

                  <Link href="https://wealth.crescentia.pt" target="_blank">
                    <Button variant="primary" size="lg" fullWidth>
                      Explore Wealth →
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-500 mb-6">
            Sobre a Crescentia
          </h2>
          <p className="text-xl text-dark-300 leading-relaxed">
            A Crescentia é uma consultoria especializada em duas verticais de
            negócio: <strong className="text-dark-500">Funding</strong> - apoio
            a PMEs portuguesas no acesso a fundos europeus, e{' '}
            <strong className="text-dark-500">Wealth</strong> - otimização
            fiscal IFICI para profissionais internacionais em Portugal.
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-500 text-white-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-yellow-500 mb-4">
                Crescentia
              </h3>
              <p className="text-white-300">
                Funding & Wealth Management
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Funding</h4>
              <ul className="space-y-2 text-white-300">
                <li>
                  <Link href="https://funding.crescentia.pt" className="hover:text-yellow-500 transition-colors">
                    Fundos Europeus
                  </Link>
                </li>
                <li>
                  <Link href="https://funding.crescentia.pt" className="hover:text-yellow-500 transition-colors">
                    Portugal 2030
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Wealth</h4>
              <ul className="space-y-2 text-white-300">
                <li>
                  <Link href="https://wealth.crescentia.pt" className="hover:text-yellow-500 transition-colors">
                    IFICI Tax Optimization
                  </Link>
                </li>
                <li>
                  <Link href="https://wealth.crescentia.pt" className="hover:text-yellow-500 transition-colors">
                    For Tech Professionals
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-white-100/10">
            <p className="text-white-300">
              © 2024 Crescentia. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
