'use client'

import Link from 'next/link'
import { Program } from '@/types/program'
import { motion } from 'framer-motion'

interface ProgramCardProps {
  program: Program
  index?: number
}

export default function ProgramCard({ program, index = 0 }: ProgramCardProps) {
  const statusConfig = {
    open: {
      label: 'ABERTO',
      class: 'bg-green-500/10 border-green-500/30 text-green-400',
      dotClass: 'bg-green-400'
    },
    continuous: {
      label: 'CONTÍNUO',
      class: 'bg-blue-500/10 border-blue-500/30 text-blue-400',
      dotClass: 'bg-blue-400'
    },
    closed: {
      label: 'FECHADO',
      class: 'bg-red-500/10 border-red-500/30 text-red-400',
      dotClass: 'bg-red-400'
    }
  }

  const config = statusConfig[program.status]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link
        href={`/programas/${program.slug}`}
        className="block h-full"
      >
        <div className="h-full bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-[#F5CF00]/30 hover:bg-slate-900 hover:scale-105 transition-all duration-300 group">
          {/* Badge */}
          <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-4 border ${config.class}`}>
            {(program.status === 'open' || program.status === 'continuous') && (
              <span className={`w-2 h-2 ${config.dotClass} rounded-full animate-pulse mr-2`} />
            )}
            {config.label}
          </div>

          {/* Título */}
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#F5CF00] transition-colors">
            {program.name}
          </h3>

          {/* Tagline */}
          <p className="text-slate-400 text-sm mb-4 line-clamp-2">
            {program.tagline}
          </p>

          {/* Info Grid */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div>
              <div className="text-xs text-slate-500 mb-1">Investimento</div>
              <div className="text-sm font-semibold text-white">
                {program.minInvestment === 0 ? 'Variável' : `${(program.minInvestment / 1000).toFixed(0)}k€`}+
              </div>
            </div>
            <div>
              <div className="text-xs text-slate-500 mb-1">Taxa Apoio</div>
              <div className="text-sm font-semibold text-[#F5CF00]">
                {program.fundingRate === program.fundingRateMax
                  ? `${program.fundingRate}%`
                  : `${program.fundingRate}%-${program.fundingRateMax}%`
                }
              </div>
            </div>
          </div>

          {/* Deadline se aplicável */}
          {program.deadline && (
            <div className="text-xs text-slate-400 mb-4">
              {program.deadline}
            </div>
          )}

          {/* CTA */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-800">
            <span className="text-sm text-slate-400">Saber mais</span>
            <span className="text-[#F5CF00] group-hover:translate-x-2 transition-transform">→</span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
