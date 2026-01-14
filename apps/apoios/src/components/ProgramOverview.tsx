'use client'

import { motion } from 'framer-motion'
import { Zap, TrendingUp, Shield, AlertTriangle } from 'lucide-react'

interface InfoCardProps {
  icon: React.ReactNode
  title: string
  tagline: string
  content: React.ReactNode
}

// Componente Card Individual
const InfoCard = ({ icon, title, tagline, content }: InfoCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group relative bg-white/5 backdrop-blur-sm border border-yellow-500/20 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-500/10 hover:bg-yellow-500/5"
    >
      {/* Header */}
      <div className="flex items-start gap-4 mb-6">
        <div className="flex-shrink-0">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white mb-1">
            {title}
          </h3>
          <p className="text-sm text-slate-400">
            {tagline}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-6">
        {content}
      </div>

      {/* Hover border effect */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-yellow-500/30 transition-colors pointer-events-none" />
    </motion.div>
  )
}

// Conteúdo: O Que Financia
const FinanciamentoContent = () => (
  <>
    {/* Áreas Principais */}
    <div>
      <h4 className="text-xs font-semibold text-yellow-400 tracking-wider mb-3">
        ÁREAS PRINCIPAIS
      </h4>
      <div className="grid grid-cols-2 gap-3">
        {['Transformação Digital', 'Inovação Organizacional', 'Marca & Produto', 'Sustentabilidade'].map((area, idx) => (
          <div key={idx} className="bg-slate-900/50 rounded-lg p-4 border border-yellow-500/20 text-center">
            <div className="text-sm font-semibold text-white">
              {area}
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Exemplos Concretos */}
    <div>
      <h4 className="text-xs font-semibold text-yellow-400 tracking-wider mb-3">
        EXEMPLOS CONCRETOS
      </h4>
      <ul className="space-y-2">
        {[
          'Software de gestão (ERP, CRM, MES)',
          'Sistemas de IA e automação',
          'Consultoria especializada',
          'Certificações (ISO, ESG)',
          'Registo de patentes e marcas',
          'Contratação de até 2 especialistas (máx. 2.250€/mês)',
        ].map((item, idx) => (
          <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm">
            <span className="text-[#F5CF00] mt-1">▸</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Valores Típicos */}
    <div>
      <h4 className="text-xs font-semibold text-yellow-400 tracking-wider mb-3">
        VALORES TÍPICOS
      </h4>
      <div className="space-y-2 text-sm text-slate-300">
        <div className="flex justify-between items-center">
          <span>Pequeno projeto:</span>
          <span className="font-semibold text-[#F5CF00]">100k-200k</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Médio projeto:</span>
          <span className="font-semibold text-[#F5CF00]">200k-500k</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Grande projeto:</span>
          <span className="font-semibold text-[#F5CF00]">500k-1M+</span>
        </div>
      </div>
    </div>
  </>
)

// Conteúdo: Quanto Recebe
const ValoresContent = () => (
  <>
    {/* Base */}
    <div>
      <h4 className="text-xs font-semibold text-yellow-400 tracking-wider mb-3">
        BASE: 50% A FUNDO PERDIDO
      </h4>
    </div>

    {/* Majorações */}
    <div>
      <h4 className="text-xs font-semibold text-yellow-400 tracking-wider mb-3">
        MAJORAÇÕES
      </h4>
      <div className="bg-slate-900/50 rounded-lg p-4 border border-yellow-500/20 space-y-2 text-sm text-slate-300">
        <div className="flex justify-between">
          <span>Baixa Densidade</span>
          <span className="font-semibold text-[#F5CF00]">+10%</span>
        </div>
        <div className="flex justify-between">
          <span>Gestão Jovem/Mulher</span>
          <span className="font-semibold text-[#F5CF00]">+5%</span>
        </div>
        <div className="flex justify-between">
          <span>Mérito do Projeto</span>
          <span className="font-semibold text-[#F5CF00]">+X%</span>
        </div>
      </div>
    </div>

    {/* Exemplos Reais */}
    <div>
      <h4 className="text-xs font-semibold text-yellow-400 tracking-wider mb-3">
        EXEMPLOS REAIS
      </h4>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-700">
              <th className="py-2 text-slate-400 font-medium text-xs text-left">
                Investimento
              </th>
              <th className="py-2 text-slate-400 font-medium text-xs text-left">
                Local
              </th>
              <th className="py-2 text-slate-400 font-medium text-xs text-right">
                Apoio
              </th>
            </tr>
          </thead>
          <tbody className="text-slate-300">
            <tr className="border-b border-slate-800">
              <td className="py-3">150.000€</td>
              <td className="py-3">Lisboa</td>
              <td className="py-3 text-right font-semibold text-[#F5CF00]">
                75.000€
              </td>
            </tr>
            <tr className="border-b border-slate-800">
              <td className="py-3">150.000€</td>
              <td className="py-3">Guarda</td>
              <td className="py-3 text-right font-semibold text-[#F5CF00]">
                90.000€
              </td>
            </tr>
            <tr className="border-b border-slate-800">
              <td className="py-3">300.000€</td>
              <td className="py-3">Porto</td>
              <td className="py-3 text-right font-semibold text-[#F5CF00]">
                165.000€
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    {/* Atenção */}
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

// Conteúdo: Quem Qualifica
const ElegibilidadeContent = () => (
  <>
    {/* Requisitos Críticos */}
    <div>
      <h4 className="text-xs font-semibold text-yellow-400 tracking-wider mb-3">
        REQUISITOS CRÍTICOS
      </h4>
      <ul className="space-y-2">
        {[
          'PME (menos de 250 colaboradores)',
          'Volume de negócios inferior a 50M€',
          'Situação fiscal e Segurança Social regularizada',
          'Contabilidade organizada',
        ].map((item, idx) => (
          <li key={idx} className="flex items-start gap-3 text-sm">
            <span className="text-green-400">✓</span>
            <span className="text-slate-300">{item}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Atenção - Excluídos */}
    <div>
      <h4 className="text-xs font-semibold text-red-400 tracking-wider mb-3">
        ATENÇÃO - EXCLUÍDOS
      </h4>
      <ul className="space-y-2">
        {[
          'Empresas em situação de dificuldade',
          'Empresas com dívidas ao Estado',
          'Setor da pesca e aquicultura',
          'Produção agrícola primária',
        ].map((item, idx) => (
          <li key={idx} className="flex items-start gap-3 text-sm">
            <span className="text-red-400">✗</span>
            <span className="text-slate-300">{item}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Dica Prática */}
    <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-lg p-4">
      <h4 className="text-xs font-semibold text-yellow-400 tracking-wider mb-3">
        DICA PRÁTICA
      </h4>
      <div className="space-y-3 text-sm text-slate-300">
        <p>Se tem participações noutras empresas:</p>
        <ul className="space-y-1 ml-3">
          <li>▸ Soma-se o número de trabalhadores de todas</li>
          <li>▸ Soma-se o volume de negócios do grupo</li>
          <li>▸ Pode perder estatuto PME sem saber</li>
        </ul>
        <p className="font-semibold text-[#F5CF00] pt-2">
          Valide antes de investir tempo na candidatura
        </p>
      </div>
    </div>
  </>
)

// Conteúdo: Pontos de Atenção
const AtencaoContent = () => (
  <>
    {/* O Que Não É Financiado */}
    <div>
      <h4 className="text-xs font-semibold text-red-400 tracking-wider mb-3">
        O QUE NÃO É FINANCIADO
      </h4>
      <ul className="space-y-2">
        {[
          'Obras de construção civil',
          'Equipamento em segunda mão',
          'IVA recuperável pela empresa',
          'Viaturas ligeiras de passageiros',
          'Despesas realizadas antes da candidatura',
          'Capital circulante ou fundo de maneio',
        ].map((item, idx) => (
          <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm">
            <span className="text-red-400 mt-1">✗</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Erros Comuns */}
    <div>
      <h4 className="text-xs font-semibold text-yellow-400 tracking-wider mb-3">
        ERROS COMUNS
      </h4>
      <div className="space-y-3">
        {[
          {
            erro: 'Começar o investimento antes da aprovação',
            resultado: 'Perde 100% da elegibilidade',
          },
          {
            erro: 'Não organizar comprovativos desde o início',
            resultado: 'Reembolso pode ser recusado',
          },
          {
            erro: 'Orçamentos genéricos ou incompletos',
            resultado: 'Candidatura rejeitada na análise',
          },
          {
            erro: 'Não cumprir regras de publicidade',
            resultado: 'Penalizações e devoluções',
          },
        ].map((item, idx) => (
          <div key={idx} className="bg-slate-900/50 rounded-lg p-3 border border-red-400/20">
            <div className="text-sm font-semibold text-white mb-1">
              {idx + 1}. {item.erro}
            </div>
            <div className="text-xs text-red-400">
              → Resultado: {item.resultado}
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Timing Real */}
    <div>
      <h4 className="text-xs font-semibold text-yellow-400 tracking-wider mb-3">
        TIMING REAL
      </h4>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-700">
              <th className="py-2 text-slate-400 font-medium text-xs text-left">
                Fase
              </th>
              <th className="py-2 text-slate-400 font-medium text-xs text-right">
                Duração
              </th>
            </tr>
          </thead>
          <tbody className="text-slate-300">
            <tr className="border-b border-slate-800">
              <td className="py-3">Submissão → Aprovação</td>
              <td className="py-3 text-right">60-90 dias</td>
            </tr>
            <tr className="border-b border-slate-800">
              <td className="py-3">Execução do projeto</td>
              <td className="py-3 text-right">24 meses</td>
            </tr>
            <tr className="border-b border-slate-800">
              <td className="py-3">Conclusão → Reembolso</td>
              <td className="py-3 text-right">6-12 meses</td>
            </tr>
            <tr className="border-t-2 border-yellow-500/30">
              <td className="py-3 font-semibold text-[#F5CF00]">Total estimado</td>
              <td className="py-3 text-right font-semibold text-[#F5CF00]">~3 anos</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </>
)

// Componente Principal
export default function ProgramOverview({ theme }: { theme: 'light' | 'dark' }) {
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
    <section className={`py-20 px-4 ${
      theme === 'dark' ? 'bg-[#12141C]' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-black'
          }`}>
            Como Funciona Este Programa
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-slate-300' : 'text-gray-700'
          }`}>
            Informação clara sobre elegibilidade, valores e processo.
            Sem marketing, apenas factos.
          </p>
        </motion.div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {cards.map((card, idx) => (
            <InfoCard key={idx} {...card} />
          ))}
        </div>

        {/* CTA Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className={`mb-6 text-lg ${
            theme === 'dark' ? 'text-slate-300' : 'text-gray-700'
          }`}>
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
