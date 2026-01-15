'use client'

import { motion } from 'framer-motion'
import { Program } from '@/types/program'
import { Zap, TrendingUp, Shield, AlertTriangle } from 'lucide-react'

interface ProgramDetailsProps {
  program: Program
  theme: 'light' | 'dark'
}

interface InfoCardProps {
  icon: React.ReactNode
  title: string
  tagline: string
  content: React.ReactNode
}

const InfoCard = ({ icon, title, tagline, content }: InfoCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group relative bg-white/5 backdrop-blur-sm border border-yellow-500/20 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-500/10 hover:bg-yellow-500/5"
    >
      <div className="flex items-start gap-4 mb-6">
        <div className="flex-shrink-0">{icon}</div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
          <p className="text-sm text-slate-400">{tagline}</p>
        </div>
      </div>
      <div className="space-y-6">{content}</div>
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-yellow-500/30 transition-colors pointer-events-none" />
    </motion.div>
  )
}

export default function ProgramDetails({ program, theme }: ProgramDetailsProps) {
  // O Que Financia - baseado nos benefícios
  const FinanciamentoContent = () => (
    <>
      <div>
        <h4 className="text-xs font-semibold text-yellow-400 tracking-wider mb-3">
          BENEFÍCIOS PRINCIPAIS
        </h4>
        <ul className="space-y-2">
          {program.benefits.map((benefit, idx) => (
            <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm">
              <span className="text-[#F5CF00] mt-1">▸</span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      {program.sectors.length > 0 && (
        <div>
          <h4 className="text-xs font-semibold text-yellow-400 tracking-wider mb-3">
            SETORES ELEGÍVEIS
          </h4>
          <div className="grid grid-cols-2 gap-3">
            {program.sectors.slice(0, 4).map((sector, idx) => (
              <div key={idx} className="bg-slate-900/50 rounded-lg p-3 border border-yellow-500/20 text-center">
                <div className="text-2xl mb-1">{sector.icon}</div>
                <div className="text-xs font-semibold text-white">{sector.name}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )

  // Quanto Recebe
  const ValoresContent = () => (
    <>
      <div>
        <h4 className="text-xs font-semibold text-yellow-400 tracking-wider mb-3">
          TAXA BASE
        </h4>
        <div className="text-3xl font-bold text-[#F5CF00] mb-4">
          {program.fundingRate}% a fundo perdido
        </div>
        {program.fundingRateMax && program.fundingRateMax > program.fundingRate && (
          <p className="text-sm text-slate-300">
            Com majorações pode chegar até <span className="font-semibold text-[#F5CF00]">{program.fundingRateMax}%</span>
          </p>
        )}
      </div>

      <div>
        <h4 className="text-xs font-semibold text-yellow-400 tracking-wider mb-3">
          VALORES DE INVESTIMENTO
        </h4>
        <div className="space-y-2 text-sm text-slate-300">
          <div className="flex justify-between items-center">
            <span>Mínimo:</span>
            <span className="font-semibold text-[#F5CF00]">
              {(program.minInvestment / 1000).toFixed(0)}k€
            </span>
          </div>
          {program.maxInvestment && (
            <div className="flex justify-between items-center">
              <span>Máximo:</span>
              <span className="font-semibold text-[#F5CF00]">
                {(program.maxInvestment / 1000000).toFixed(1)}M€
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-lg p-4">
        <h4 className="text-xs font-semibold text-yellow-400 tracking-wider mb-3">
          ATENÇÃO
        </h4>
        <div className="space-y-1 text-sm text-slate-300">
          <p>▸ Reembolso (não adiantamento direto)</p>
          <p>▸ Comprovação obrigatória</p>
          <p>▸ Prazo: 6-12 meses após execução</p>
        </div>
      </div>
    </>
  )

  // Quem Qualifica
  const ElegibilidadeContent = () => (
    <>
      <div>
        <h4 className="text-xs font-semibold text-yellow-400 tracking-wider mb-3">
          REQUISITOS CRÍTICOS
        </h4>
        <ul className="space-y-2">
          {program.eligibility
            .filter(e => e.type === 'required')
            .map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm">
                <span className="text-green-400">✓</span>
                <span className="text-slate-300">{item.text}</span>
              </li>
            ))}
        </ul>
      </div>

      <div>
        <h4 className="text-xs font-semibold text-red-400 tracking-wider mb-3">
          ATENÇÃO - EXCLUÍDOS
        </h4>
        <ul className="space-y-2">
          {program.eligibility
            .filter(e => e.type === 'excluded')
            .map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm">
                <span className="text-red-400">✗</span>
                <span className="text-slate-300">{item.text}</span>
              </li>
            ))}
        </ul>
      </div>

      <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-lg p-4">
        <h4 className="text-xs font-semibold text-yellow-400 tracking-wider mb-3">
          TERRITÓRIO
        </h4>
        <p className="text-sm text-slate-300">
          Este programa está disponível para: <span className="font-semibold text-[#F5CF00]">{program.territory}</span>
        </p>
      </div>
    </>
  )

  // Pontos de Atenção
  const AtencaoContent = () => (
    <>
      <div>
        <h4 className="text-xs font-semibold text-red-400 tracking-wider mb-3">
          O QUE NÃO É FINANCIADO
        </h4>
        <ul className="space-y-2">
          {program.restrictions.map((restriction, idx) => (
            <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm">
              <span className="text-red-400 mt-1">✗</span>
              <span>{restriction}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-xs font-semibold text-yellow-400 tracking-wider mb-3">
          ERROS COMUNS
        </h4>
        <div className="space-y-3">
          <div className="bg-slate-900/50 rounded-lg p-3 border border-red-400/20">
            <div className="text-sm font-semibold text-white mb-1">
              1. Começar o investimento antes da aprovação
            </div>
            <div className="text-xs text-red-400">
              → Resultado: Perde 100% da elegibilidade
            </div>
          </div>
          <div className="bg-slate-900/50 rounded-lg p-3 border border-red-400/20">
            <div className="text-sm font-semibold text-white mb-1">
              2. Não organizar comprovativos desde o início
            </div>
            <div className="text-xs text-red-400">
              → Resultado: Reembolso pode ser recusado
            </div>
          </div>
        </div>
      </div>

      {program.timeline.length > 0 && (
        <div>
          <h4 className="text-xs font-semibold text-yellow-400 tracking-wider mb-3">
            TIMING ESTIMADO
          </h4>
          <div className="text-sm text-slate-300 space-y-1">
            {program.timeline.slice(0, 3).map((step, idx) => (
              <div key={idx} className="flex justify-between">
                <span>{step.title}</span>
                <span className="text-slate-400">{step.duration}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )

  const cards: InfoCardProps[] = [
    {
      icon: <Zap className="w-8 h-8 stroke-[#F5CF00]" strokeWidth={2} />,
      title: 'O Que Financia',
      tagline: 'Invista nestes domínios',
      content: <FinanciamentoContent />,
    },
    {
      icon: <TrendingUp className="w-8 h-8 stroke-[#F5CF00]" strokeWidth={2} />,
      title: 'Quanto Recebe',
      tagline: 'O valor real que entra na conta',
      content: <ValoresContent />,
    },
    {
      icon: <Shield className="w-8 h-8 stroke-[#F5CF00]" strokeWidth={2} />,
      title: 'Quem Qualifica',
      tagline: 'Requisitos que realmente contam',
      content: <ElegibilidadeContent />,
    },
    {
      icon: <AlertTriangle className="w-8 h-8 stroke-[#F5CF00]" strokeWidth={2} />,
      title: 'Pontos de Atenção',
      tagline: 'O que os avisos oficiais não dizem',
      content: <AtencaoContent />,
    },
  ]

  return (
    <section className={`py-20 px-4 ${theme === 'dark' ? 'bg-[#12141C]' : 'bg-white'}`} id="requisitos">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            Como Funciona Este Programa
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}`}>
            Informação clara sobre elegibilidade, valores e processo. Sem marketing, apenas factos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {cards.map((card, idx) => (
            <InfoCard key={idx} {...card} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className={`mb-6 text-lg ${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}`}>
            Tem dúvidas sobre elegibilidade?
          </p>
          <a
            href="mailto:info@crescentia.pt"
            className="inline-block bg-[#F5CF00] text-[#12141C] px-8 py-4 rounded-lg font-semibold hover:bg-[#F5CF00]/90 transition-colors shadow-lg hover:shadow-xl"
          >
            Análise Gratuita em 48h
          </a>
        </motion.div>
      </div>
    </section>
  )
}
