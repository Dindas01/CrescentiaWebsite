'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FAQItem } from '@/types/program'

interface ProgramFAQProps {
  items: FAQItem[]
  theme: 'light' | 'dark'
}

export default function ProgramFAQ({ items, theme }: ProgramFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className={`py-16 md:py-20 px-4 ${
      theme === 'dark' ? 'bg-[#1a1d2e]' : 'bg-gray-800'
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
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-slate-300">
            Respostas diretas às dúvidas mais comuns sobre este programa
          </p>
        </motion.div>

        <div className="space-y-4">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className={`rounded-lg border overflow-hidden ${
                theme === 'dark'
                  ? 'bg-[#12141C] border-slate-800'
                  : 'bg-gray-900 border-gray-700'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full text-left p-6 flex items-start justify-between gap-4 hover:bg-slate-800/50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {item.question}
                </h3>
                <span className="text-[#F5CF00] text-2xl flex-shrink-0">
                  {openIndex === idx ? '−' : '+'}
                </span>
              </button>

              {openIndex === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-slate-800"
                >
                  <div className="p-6 pt-4">
                    <p className="text-slate-300 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
