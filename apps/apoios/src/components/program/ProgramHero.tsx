'use client'

import { motion } from 'framer-motion'
import { Program } from '@/types/program'

interface ProgramHeroProps {
  program: Program
  theme: 'light' | 'dark'
}

export default function ProgramHero({ program, theme }: ProgramHeroProps) {
  const getStatusBadge = () => {
    const statusConfig = {
      open: {
        color: 'green',
        label: 'ABERTO',
        bgClass: 'bg-green-500/10 border-green-500/30 text-green-400'
      },
      closed: {
        color: 'red',
        label: 'FECHADO',
        bgClass: 'bg-red-500/10 border-red-500/30 text-red-400'
      },
      continuous: {
        color: 'blue',
        label: 'CONTÍNUO',
        bgClass: 'bg-blue-500/10 border-blue-500/30 text-blue-400'
      }
    }

    const config = statusConfig[program.status]

    return (
      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold mb-6 ${config.bgClass}`}>
        <span className={`w-2 h-2 bg-${config.color}-400 rounded-full animate-pulse`} />
        {config.label}
      </div>
    )
  }

  return (
    <section className={`py-20 md:py-28 px-4 ${
      theme === 'dark'
        ? 'bg-gradient-to-b from-[#12141C] to-[#1a1d2e]'
        : 'bg-gradient-to-b from-gray-900 to-gray-800'
    }`}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge de Estado */}
          {getStatusBadge()}

          {/* Título */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {program.name}
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            {program.tagline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="mailto:info@crescentia.pt"
              className="bg-[#F5CF00] text-[#12141C] px-8 py-4 rounded-lg font-semibold hover:bg-[#F5CF00]/90 transition-colors shadow-lg hover:shadow-xl"
            >
              Solicitar Análise ➜
            </a>
            <a
              href="#requisitos"
              className="border-2 border-slate-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-slate-800 transition-colors"
            >
              Ver Requisitos
            </a>
          </div>

          {/* Info Extra */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <span className="text-[#F5CF00]">💰</span>
              <span>Investimento mínimo: {(program.minInvestment / 1000).toFixed(0)}k€</span>
            </div>
            {program.maxInvestment && (
              <>
                <span>•</span>
                <div className="flex items-center gap-2">
                  <span>Máximo: {(program.maxInvestment / 1000000).toFixed(1)}M€</span>
                </div>
              </>
            )}
            <span>•</span>
            <div className="flex items-center gap-2">
              <span className="text-[#F5CF00]">📍</span>
              <span>{program.territory}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
