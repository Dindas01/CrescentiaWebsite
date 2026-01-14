'use client'

import { useState, useEffect } from 'react'
import { notFound } from 'next/navigation'
import { programs, getProgramBySlug, getRelatedPrograms } from '@/data/programs'
import ProgramHero from '@/components/program/ProgramHero'
import ProgramInfoCards from '@/components/program/ProgramInfoCards'
import ProgramSectors from '@/components/program/ProgramSectors'
import ProgramDetails from '@/components/program/ProgramDetails'
import ProgramTimeline from '@/components/program/ProgramTimeline'
import ProgramFAQ from '@/components/program/ProgramFAQ'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ProgramPage({ params }: { params: { slug: string } }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')
  const program = getProgramBySlug(params.slug)

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

  if (!program) {
    notFound()
  }

  const relatedPrograms = getRelatedPrograms(program.id)

  return (
    <main className={theme === 'dark' ? 'bg-[#0a0a0a]' : 'bg-gray-50'}>
      {/* Header Simples */}
      <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl ${
        theme === 'dark'
          ? 'bg-[#0a0a0a]/95 border-b border-white/5'
          : 'bg-white/95 border-b border-gray-200/50'
      }`}>
        <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center transition-opacity hover:opacity-80">
            <img
              src={theme === 'dark'
                ? "/logos/Crescentia-Horizontal-MainColor-Whiteout.svg"
                : "/logos/Crescentia-Horizontal-MainColor-Blackout.svg"
              }
              alt="Crescentia Apoios"
              className="h-6 md:h-8"
            />
          </Link>

          <Link
            href="/programas"
            className={`text-sm font-medium transition-colors ${
              theme === 'dark'
                ? 'text-white/80 hover:text-white'
                : 'text-gray-700 hover:text-black'
            }`}
          >
            ← Todos os Programas
          </Link>
        </div>
      </header>

      <div className="pt-16">
        {/* Hero */}
        <ProgramHero program={program} theme={theme} />

        {/* Info Cards */}
        <ProgramInfoCards program={program} theme={theme} />

        {/* Descrição */}
        <section className={`py-16 md:py-20 px-4 ${
          theme === 'dark' ? 'bg-[#12141C]' : 'bg-white'
        }`}>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                Sobre Este Programa
              </h2>
              <div className="space-y-4">
                {program.description.map((para, i) => (
                  <p key={i} className={`text-lg leading-relaxed ${
                    theme === 'dark' ? 'text-slate-300' : 'text-gray-700'
                  }`}>
                    {para}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Detalhes do Programa (4 cards) */}
        <ProgramDetails program={program} theme={theme} />

        {/* Setores */}
        {program.sectors && program.sectors.length > 0 && (
          <ProgramSectors sectors={program.sectors} theme={theme} />
        )}

        {/* Timeline */}
        {program.timeline && program.timeline.length > 0 && (
          <ProgramTimeline steps={program.timeline} theme={theme} />
        )}

        {/* FAQ */}
        {program.faq && program.faq.length > 0 && (
          <ProgramFAQ items={program.faq} theme={theme} />
        )}

        {/* Programas Relacionados */}
        {relatedPrograms.length > 0 && (
          <section className={`py-16 md:py-20 px-4 ${
            theme === 'dark' ? 'bg-[#12141C]' : 'bg-white'
          }`}>
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-black'
                }`}>
                  Programas Relacionados
                </h2>
                <p className={`text-lg ${
                  theme === 'dark' ? 'text-slate-300' : 'text-gray-700'
                }`}>
                  Outros programas que podem interessar
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {relatedPrograms.map((relProg, idx) => (
                  <motion.div
                    key={relProg.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                  >
                    <Link
                      href={`/programas/${relProg.slug}`}
                      className={`block rounded-xl p-6 border transition-all duration-300 hover:scale-105 ${
                        theme === 'dark'
                          ? 'bg-slate-900/50 border-slate-800 hover:border-[#F5CF00]/30'
                          : 'bg-gray-50 border-gray-200 hover:border-[#F5CF00]/30'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <h3 className={`text-xl font-semibold ${
                          theme === 'dark' ? 'text-white' : 'text-black'
                        }`}>
                          {relProg.name}
                        </h3>
                        <span className="text-[#F5CF00]">→</span>
                      </div>
                      <p className={`text-sm mb-4 ${
                        theme === 'dark' ? 'text-slate-300' : 'text-gray-600'
                      }`}>
                        {relProg.tagline}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-slate-400">
                        <span>{relProg.fundingRate}% - {relProg.fundingRateMax || relProg.fundingRate}%</span>
                        <span>•</span>
                        <span>{(relProg.minInvestment / 1000).toFixed(0)}k€+</span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Final */}
        <section className={`py-16 md:py-20 px-4 ${
          theme === 'dark' ? 'bg-[#F5CF00]' : 'bg-[#F5CF00]'
        }`}>
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#12141C] mb-6">
                Pronto para Candidatar?
              </h2>
              <p className="text-lg text-[#12141C]/80 mb-8 max-w-2xl mx-auto">
                Analisamos a elegibilidade da sua empresa gratuitamente em 48h.
                Sem compromisso, sem custos iniciais.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:info@crescentia.pt"
                  className="bg-[#12141C] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#12141C]/90 transition-colors shadow-lg hover:shadow-xl"
                >
                  Solicitar Análise Gratuita ➜
                </a>
                <Link
                  href="/programas"
                  className="border-2 border-[#12141C] text-[#12141C] px-8 py-4 rounded-lg font-semibold hover:bg-[#12141C]/10 transition-colors"
                >
                  Ver Outros Programas
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer Simples */}
        <footer className={`py-8 px-4 border-t ${
          theme === 'dark'
            ? 'bg-[#0a0a0a] border-white/5'
            : 'bg-white border-gray-200'
        }`}>
          <div className="max-w-7xl mx-auto text-center">
            <p className={`text-sm ${
              theme === 'dark' ? 'text-slate-400' : 'text-gray-600'
            }`}>
              © 2026 Crescentia Apoios. Todos os direitos reservados.
            </p>
          </div>
        </footer>
      </div>
    </main>
  )
}
