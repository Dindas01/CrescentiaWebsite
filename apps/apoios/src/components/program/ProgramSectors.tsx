'use client'

import { motion } from 'framer-motion'
import { ProgramSector } from '@/types/program'

interface ProgramSectorsProps {
  sectors: ProgramSector[]
  theme: 'light' | 'dark'
}

export default function ProgramSectors({ sectors, theme }: ProgramSectorsProps) {
  if (!sectors || sectors.length === 0) return null

  return (
    <section className={`py-16 md:py-20 px-4 ${
      theme === 'dark' ? 'bg-[#1a1d2e]' : 'bg-gray-800'
    }`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Investimentos Típicos por Setor
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Exemplos reais de projetos financiados em diferentes setores de atividade
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((sector, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`rounded-xl p-6 border ${
                theme === 'dark'
                  ? 'bg-[#12141C] border-slate-800 hover:border-[#F5CF00]/30'
                  : 'bg-gray-900 border-gray-700 hover:border-[#F5CF00]/30'
              } transition-all duration-300`}
            >
              {/* Header */}
              <div className="mb-4">
                <div className="text-4xl mb-3">{sector.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {sector.name}
                </h3>
              </div>

              {/* Range */}
              <div className="text-[#F5CF00] text-2xl font-bold mb-4">
                {(sector.rangeMin / 1000).toFixed(0)}k - {(sector.rangeMax / 1000).toFixed(0)}k
              </div>

              {/* Examples */}
              <ul className="space-y-2 text-sm text-slate-300">
                {sector.examples.map((example, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#F5CF00] mt-1">▸</span>
                    <span>{example}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
