'use client'

import { motion } from 'framer-motion'
import { Program } from '@/types/program'

interface ProgramInfoCardsProps {
  program: Program
  theme: 'light' | 'dark'
}

export default function ProgramInfoCards({ program, theme }: ProgramInfoCardsProps) {
  const cards = [
    {
      icon: '💰',
      label: 'Investimento',
      value: program.maxInvestment
        ? `${(program.minInvestment / 1000).toFixed(0)}k - ${(program.maxInvestment / 1000000).toFixed(1)}M€`
        : `${(program.minInvestment / 1000).toFixed(0)}k€+`
    },
    {
      icon: '📍',
      label: 'Território',
      value: program.territory
    },
    {
      icon: '⏰',
      label: 'Abertura',
      value: program.deadline || 'Contínuo'
    },
    {
      icon: '💡',
      label: 'Taxa de Apoio',
      value: program.fundingRateMax
        ? `${program.fundingRate}% - ${program.fundingRateMax}%`
        : `${program.fundingRate}%`
    }
  ]

  return (
    <section className={`py-8 px-4 border-b ${
      theme === 'dark'
        ? 'bg-[#12141C] border-slate-800'
        : 'bg-gray-900 border-gray-800'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`rounded-lg p-4 md:p-6 border ${
                theme === 'dark'
                  ? 'bg-slate-900/50 border-slate-800 hover:border-[#F5CF00]/30'
                  : 'bg-gray-800/50 border-gray-700 hover:border-[#F5CF00]/30'
              } transition-colors`}
            >
              <div className="text-2xl md:text-3xl mb-3">{card.icon}</div>
              <div className="text-xs text-slate-400 mb-2">{card.label}</div>
              <div className="text-white font-semibold text-sm md:text-base">
                {card.value}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
