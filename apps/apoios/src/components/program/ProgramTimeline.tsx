'use client'

import { motion } from 'framer-motion'
import { TimelineStep } from '@/types/program'

interface ProgramTimelineProps {
  steps: TimelineStep[]
  theme: 'light' | 'dark'
}

export default function ProgramTimeline({ steps, theme }: ProgramTimelineProps) {
  return (
    <section className={`py-16 md:py-20 px-4 ${
      theme === 'dark' ? 'bg-[#12141C]' : 'bg-gray-900'
    }`}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Processo de Candidatura
          </h2>
          <p className="text-lg text-slate-300">
            Do primeiro contacto até ao reembolso: passo a passo
          </p>
        </motion.div>

        <div className="space-y-6">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex gap-6"
            >
              {/* Número e Linha */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#F5CF00] text-[#12141C] font-bold flex items-center justify-center text-xl flex-shrink-0">
                  {step.number}
                </div>
                {idx < steps.length - 1 && (
                  <div className="w-1 h-full bg-slate-800 mt-2 min-h-[60px]" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pb-8">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
