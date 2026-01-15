'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { programs, searchPrograms, getProgramsByStatus } from '@/data/programs'
import { Program, ProgramStatus } from '@/types/program'
import ProgramCard from '@/components/program/ProgramCard'

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
      filtered = getProgramsByStatus(statusFilter)
    }

    // Filter by search term
    if (searchTerm.trim()) {
      filtered = searchPrograms(searchTerm).filter(p =>
        statusFilter === 'all' || p.status === statusFilter
      )
    }

    setFilteredPrograms(filtered)
  }, [searchTerm, statusFilter])

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
                Explore os 7 programas prioritários para PMEs portuguesas em 2025
              </p>
            </motion.div>

            {/* Filtros */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex flex-col md:flex-row gap-4">
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
                  className="px-6 py-4 rounded-lg bg-slate-900/50 border border-slate-800 text-white focus:outline-none focus:border-[#F5CF00] transition-colors cursor-pointer"
                >
                  <option value="all">Todos os Estados</option>
                  <option value="open">Abertos</option>
                  <option value="continuous">Contínuos</option>
                  <option value="closed">Fechados</option>
                </select>
              </div>

              {/* Results Count */}
              <p className="text-slate-400 text-center mt-6">
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
            {filteredPrograms.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPrograms.map((program, idx) => (
                  <ProgramCard key={program.id} program={program} index={idx} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-lg text-slate-300 mb-4">
                  Nenhum programa encontrado com esses critérios.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('')
                    setStatusFilter('all')
                  }}
                  className="text-[#F5CF00] hover:underline font-semibold"
                >
                  Limpar filtros
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
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
                Não sabe qual o programa ideal?
              </h2>
              <p className="text-lg text-[#12141C]/80 mb-8 max-w-2xl mx-auto">
                Fazemos uma análise gratuita da sua empresa e identificamos as melhores oportunidades de financiamento disponíveis.
              </p>
              <a
                href="mailto:info@crescentia.pt"
                className="inline-block bg-[#12141C] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#12141C]/90 transition-colors shadow-lg hover:shadow-xl"
              >
                Análise Gratuita em 48h →
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
