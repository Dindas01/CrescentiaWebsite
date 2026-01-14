'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { programs } from '@/data/programs'
import { Program, ProgramStatus } from '@/types/program'

export default function ProgramasPage() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<ProgramStatus | 'all'>('all')
  const [filteredPrograms, setFilteredPrograms] = useState<Program[]>(programs)

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

  // Filter programs
  useEffect(() => {
    let filtered = programs

    // Filter by status
    if (statusFilter !== 'all') {
      filtered = filtered.filter(p => p.status === statusFilter)
    }

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(term) ||
        p.tagline.toLowerCase().includes(term) ||
        p.description.some(d => d.toLowerCase().includes(term))
      )
    }

    setFilteredPrograms(filtered)
  }, [searchTerm, statusFilter])

  const getStatusBadge = (status: ProgramStatus) => {
    const config = {
      open: { label: 'Aberto', class: 'bg-green-500/10 border-green-500/30 text-green-400' },
      closed: { label: 'Fechado', class: 'bg-red-500/10 border-red-500/30 text-red-400' },
      continuous: { label: 'Contínuo', class: 'bg-blue-500/10 border-blue-500/30 text-blue-400' },
    }
    return config[status]
  }

  return (
    <main className={theme === 'dark' ? 'bg-[#0a0a0a]' : 'bg-gray-50'}>
      {/* Header */}
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

          <div className="flex items-center gap-4">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors ${
                theme === 'dark'
                  ? 'text-white/80 hover:text-white'
                  : 'text-gray-700 hover:text-black'
              }`}
            >
              ← Voltar ao Site
            </Link>
          </div>
        </div>
      </header>

      <div className="pt-16">
        {/* Hero */}
        <section className={`py-20 md:py-28 px-4 ${
          theme === 'dark'
            ? 'bg-gradient-to-b from-[#12141C] to-[#1a1d2e]'
            : 'bg-gradient-to-b from-gray-900 to-gray-800'
        }`}>
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Todos os{' '}
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  Programas
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
                Explore os programas de financiamento disponíveis para PMEs portuguesas
              </p>
            </motion.div>

            {/* Filtros */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                {/* Search */}
                <input
                  type="text"
                  placeholder="Pesquisar programas..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1 px-6 py-4 rounded-lg bg-slate-900/50 border border-slate-800 text-white placeholder:text-slate-400 focus:outline-none focus:border-[#F5CF00] transition-colors"
                />

                {/* Status Filter */}
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value as ProgramStatus | 'all')}
                  className="px-6 py-4 rounded-lg bg-slate-900/50 border border-slate-800 text-white focus:outline-none focus:border-[#F5CF00] transition-colors"
                >
                  <option value="all">Todos os Estados</option>
                  <option value="open">Abertos</option>
                  <option value="continuous">Contínuos</option>
                  <option value="closed">Fechados</option>
                </select>
              </div>

              {/* Results Count */}
              <p className="text-slate-400 text-center">
                {filteredPrograms.length} {filteredPrograms.length === 1 ? 'programa encontrado' : 'programas encontrados'}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className={`py-16 md:py-20 px-4 ${
          theme === 'dark' ? 'bg-[#12141C]' : 'bg-white'
        }`}>
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPrograms.map((program, idx) => {
                const statusBadge = getStatusBadge(program.status)

                return (
                  <motion.div
                    key={program.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                  >
                    <Link
                      href={`/programas/${program.slug}`}
                      className={`block h-full rounded-xl p-6 border transition-all duration-300 hover:scale-105 ${
                        theme === 'dark'
                          ? 'bg-slate-900/50 border-slate-800 hover:border-[#F5CF00]/30 hover:shadow-2xl hover:shadow-[#F5CF00]/10'
                          : 'bg-white border-gray-200 hover:border-[#F5CF00]/30 hover:shadow-xl'
                      }`}
                    >
                      {/* Status Badge */}
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-semibold mb-4 ${statusBadge.class}`}>
                        {statusBadge.label}
                      </div>

                      {/* Title */}
                      <h3 className={`text-xl font-semibold mb-3 ${
                        theme === 'dark' ? 'text-white' : 'text-black'
                      }`}>
                        {program.name}
                      </h3>

                      {/* Tagline */}
                      <p className={`text-sm mb-4 ${
                        theme === 'dark' ? 'text-slate-300' : 'text-gray-600'
                      }`}>
                        {program.tagline}
                      </p>

                      {/* Stats */}
                      <div className="flex flex-wrap gap-3 text-xs text-slate-400 mb-4">
                        <div className="flex items-center gap-1">
                          <span>💰</span>
                          <span>{(program.minInvestment / 1000).toFixed(0)}k€+</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <span>📈</span>
                          <span>{program.fundingRate}%-{program.fundingRateMax || program.fundingRate}%</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <span>📍</span>
                          <span>{program.territory}</span>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                        <span className={`text-sm font-semibold ${
                          theme === 'dark' ? 'text-[#F5CF00]' : 'text-yellow-600'
                        }`}>
                          Saber mais
                        </span>
                        <span className="text-[#F5CF00]">→</span>
                      </div>
                    </Link>
                  </motion.div>
                )
              })}
            </div>

            {filteredPrograms.length === 0 && (
              <div className="text-center py-16">
                <p className={`text-lg ${
                  theme === 'dark' ? 'text-slate-300' : 'text-gray-600'
                }`}>
                  Nenhum programa encontrado com esses critérios.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('')
                    setStatusFilter('all')
                  }}
                  className="mt-4 text-[#F5CF00] hover:underline"
                >
                  Limpar filtros
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className={`py-16 md:py-20 px-4 ${
          theme === 'dark' ? 'bg-[#1a1d2e]' : 'bg-gray-100'
        }`}>
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                Não sabe qual o programa ideal?
              </h2>
              <p className={`text-lg mb-8 ${
                theme === 'dark' ? 'text-slate-300' : 'text-gray-700'
              }`}>
                Fazemos uma análise gratuita da sua empresa e identificamos as melhores oportunidades de financiamento.
              </p>
              <a
                href="mailto:info@crescentia.pt"
                className="inline-block bg-[#F5CF00] text-[#12141C] px-8 py-4 rounded-lg font-semibold hover:bg-[#F5CF00]/90 transition-colors shadow-lg hover:shadow-xl"
              >
                Análise Gratuita em 48h ➜
              </a>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
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
