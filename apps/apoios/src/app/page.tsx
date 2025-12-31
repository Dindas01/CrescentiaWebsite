'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function ApoiosPage() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')
  const [scrolled, setScrolled] = useState(false)

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

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? theme === 'dark'
            ? 'bg-[#0a0a0a]/95 border-b border-white/5 shadow-2xl'
            : 'bg-white/95 border-b border-gray-200/50 shadow-lg'
          : 'bg-transparent'
      } backdrop-blur-xl`}>
        <div className="container mx-auto px-4 md:px-6 py-4 md:py-5 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center transition-opacity hover:opacity-80">
            <img
              src={theme === 'dark'
                ? "/logos/Crescentia-Horizontal-MainColor-Whiteout.svg"
                : "/logos/Crescentia-Horizontal-MainColor-Blackout.svg"
              }
              alt="Crescentia Apoios"
              className="h-6 md:h-8"
            />
          </a>

          {/* Controls - Only theme toggle, NO language */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Theme toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={`p-2 rounded-lg transition-colors ${
                theme === 'dark'
                  ? 'bg-white/5 hover:bg-white/10 text-white'
                  : 'bg-black/5 hover:bg-black/10 text-black'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* 1. HERO - Expertise Statement */}
      <section className={`relative py-32 md:py-40 overflow-hidden ${
        theme === 'dark' ? 'bg-[#0a0a0a]' : 'bg-[#fffdf7]'
      }`}>
        {/* Simple background - just gradient + noise */}
        <div className="absolute inset-0">
          <div className={theme === 'dark'
            ? 'bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a] to-[#12141C]'
            : 'bg-gradient-to-b from-[#fffdf7] via-[#faf8f2] to-[#fffdf7]'
          } />
          <div
            className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-6">
              <span className={`${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                Especialistas em{' '}
              </span>
              <br />
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                Apoios Europeus
              </span>
              <br />
              <span className={`${
                theme === 'dark' ? 'text-white/90' : 'text-gray-900'
              }`}>
                para PMEs
              </span>
            </h1>

            <p className={`text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto mb-12 leading-relaxed ${
              theme === 'dark' ? 'text-white/70' : 'text-gray-700'
            }`}>
              Acedemos a €24B+ disponíveis através de Portugal 2030, PRR e fundos estruturais.
              Consultoria estratégica para empresas que querem crescer.
            </p>

            <motion.a
              href="mailto:info@crescentia.pt"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold text-lg shadow-[0_0_30px_rgba(245,207,0,0.4)] hover:shadow-[0_0_40px_rgba(245,207,0,0.6)] transition-all"
            >
              Marcar Reunião Gratuita
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* 2. STATS BAR - Credibilidade */}
      <section className={`relative py-16 border-y ${
        theme === 'dark'
          ? 'border-white/10 bg-[#0a0a0a]'
          : 'border-gray-200 bg-white'
      }`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { value: '€24B+', label: 'Fundos Disponíveis' },
              { value: '6', label: 'Áreas Especializadas' },
              { value: '50+', label: 'Projetos Submetidos' },
              { value: '2020', label: 'No Mercado Desde' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="text-center"
              >
                <div className={`text-4xl md:text-5xl font-bold mb-2 ${
                  theme === 'dark'
                    ? 'text-yellow-400'
                    : 'text-yellow-600'
                }`}>
                  {stat.value}
                </div>
                <div className={`text-sm md:text-base ${
                  theme === 'dark' ? 'text-white/60' : 'text-gray-600'
                }`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PORQUÊ CRESCENTIA - 4 Diferenciadores */}
      <section className={`relative py-20 md:py-28 ${
        theme === 'dark' ? 'bg-[#12141C]' : 'bg-white'
      }`}>
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-black'
            }`}>
              Porquê{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Crescentia
              </span>
              ?
            </h2>
            <p className={`text-lg md:text-xl max-w-3xl mx-auto ${
              theme === 'dark' ? 'text-white/70' : 'text-gray-700'
            }`}>
              Somos mais que consultores. Somos parceiros estratégicos do crescimento da sua empresa.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Expertise Comprovada',
                desc: 'Mais de 50 projetos submetidos desde 2020, com conhecimento profundo dos sistemas Portugal 2030, PRR e fundos estruturais europeus.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: 'Abordagem 360°',
                desc: 'Não fazemos apenas candidaturas. Desenvolvemos estratégia, preparamos documentação, acompanhamos aprovação e monitorizamos execução.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Sem Custos Iniciais',
                desc: 'Trabalhamos à success fee em muitos projetos. Só pagamos quando o apoio é aprovado, alinhando totalmente os nossos interesses.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: 'Equipa Multidisciplinar',
                desc: 'Economistas, engenheiros, advogados e gestores de projeto. Cobrimos todas as dimensões técnicas, financeiras e legais.',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`p-8 rounded-2xl transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-white/[0.02] border border-white/[0.06] hover:border-yellow-500/30'
                    : 'bg-[#fffdf7] border border-gray-200 hover:border-yellow-500/40 shadow-sm hover:shadow-md'
                }`}
              >
                <div className={`w-14 h-14 mb-4 rounded-xl flex items-center justify-center ${
                  theme === 'dark'
                    ? 'bg-yellow-500/10 text-yellow-400'
                    : 'bg-yellow-400/20 text-yellow-600'
                }`}>
                  {item.icon}
                </div>
                <h3 className={`text-xl md:text-2xl font-bold mb-3 ${
                  theme === 'dark' ? 'text-white' : 'text-black'
                }`}>
                  {item.title}
                </h3>
                <p className={`text-base md:text-lg leading-relaxed ${
                  theme === 'dark' ? 'text-white/70' : 'text-gray-700'
                }`}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FAQ - Perguntas Estratégicas */}
      <section className={`relative py-20 md:py-28 ${
        theme === 'dark' ? 'bg-[#0a0a0a]' : 'bg-[#faf8f2]'
      }`}>
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-black'
            }`}>
              Perguntas{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Frequentes
              </span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                q: 'A minha empresa é elegível para apoios europeus?',
                a: 'A maioria das PMEs portuguesas é elegível para algum tipo de apoio. Os critérios variam por programa, mas geralmente incluem: ter menos de 250 colaboradores, faturação inferior a €50M, e estar registada em Portugal. Fazemos uma análise gratuita de elegibilidade.',
              },
              {
                q: 'Quanto tempo demora o processo de candidatura?',
                a: 'Depende do tipo de apoio. Candidaturas mais simples podem estar prontas em 2-3 semanas. Projetos complexos (I&D, internacionalização) podem levar 1-2 meses. O período de aprovação varia entre 2-6 meses, dependendo do sistema de incentivos.',
              },
              {
                q: 'Qual é a taxa de sucesso das vossas candidaturas?',
                a: 'Não divulgamos taxas genéricas porque cada projeto é único. Trabalhamos apenas projetos que consideramos terem viabilidade real de aprovação. O nosso foco está em qualidade, não quantidade de candidaturas.',
              },
              {
                q: 'Quanto custa trabalhar com a Crescentia?',
                a: 'Oferecemos modelos flexíveis: success fee (apenas pagamos se aprovado), fee fixo, ou modelo híbrido. O investimento depende da complexidade do projeto. Marcamos sempre uma reunião gratuita para discutir o enquadramento.',
              },
              {
                q: 'E se a candidatura não for aprovada?',
                a: 'Em modelo success fee, não há custos se não houver aprovação. Analisamos sempre o feedback das entidades gestoras e, quando aplicável, preparamos recurso ou recandidatura com ajustes estratégicos.',
              },
              {
                q: 'Que tipo de projetos têm maior probabilidade de aprovação?',
                a: 'Projetos com impacto claro (criação de emprego, inovação, exportação), bem fundamentados financeira e tecnicamente, e alinhados com prioridades nacionais/europeias (transição digital, sustentabilidade, competitividade).',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className={`p-6 md:p-8 rounded-2xl ${
                  theme === 'dark'
                    ? 'bg-white/[0.02] border border-white/[0.06]'
                    : 'bg-white border border-gray-200 shadow-sm'
                }`}
              >
                <h3 className={`text-lg md:text-xl font-bold mb-3 ${
                  theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'
                }`}>
                  {item.q}
                </h3>
                <p className={`text-base md:text-lg leading-relaxed ${
                  theme === 'dark' ? 'text-white/70' : 'text-gray-700'
                }`}>
                  {item.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. QUEM SOMOS - Credenciais da Equipa */}
      <section className={`relative py-20 md:py-28 ${
        theme === 'dark' ? 'bg-[#12141C]' : 'bg-white'
      }`}>
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-black'
            }`}>
              Quem{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Somos
              </span>
            </h2>
            <p className={`text-lg md:text-xl max-w-3xl mx-auto ${
              theme === 'dark' ? 'text-white/70' : 'text-gray-700'
            }`}>
              Uma equipa multidisciplinar especializada em financiamento europeu para PMEs.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Expertise */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className={`text-2xl md:text-3xl font-bold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                Expertise
              </h3>
              <div className="space-y-4">
                {[
                  'Fundos Europeus Estruturais (FEDER, FSE+)',
                  'Portugal 2030 (competitividade, inovação, I&D)',
                  'Plano de Recuperação e Resiliência (PRR)',
                  'Programas setoriais (Mar, Agricultura, Turismo)',
                  'Internacionalização e captação de investimento',
                  'Due diligence e apoio à execução de projetos',
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex items-start gap-3 text-base md:text-lg ${
                      theme === 'dark' ? 'text-white/70' : 'text-gray-700'
                    }`}
                  >
                    <svg className={`w-6 h-6 mt-0.5 flex-shrink-0 ${
                      theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'
                    }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Experiência */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className={`text-2xl md:text-3xl font-bold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                Experiência
              </h3>
              <div className="space-y-4">
                {[
                  'Mais de 50 candidaturas submetidas desde 2020',
                  'Projetos aprovados em 6 áreas de especialização',
                  'Acompanhamento desde diagnóstico até execução',
                  'Parcerias com entidades gestoras e certificadas',
                  'Conhecimento profundo de legislação e normativos',
                  'Network consolidado no ecossistema de fundos EU',
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex items-start gap-3 text-base md:text-lg ${
                      theme === 'dark' ? 'text-white/70' : 'text-gray-700'
                    }`}
                  >
                    <svg className={`w-6 h-6 mt-0.5 flex-shrink-0 ${
                      theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'
                    }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. CTA FINAL - Soft Sell */}
      <section className={`relative py-20 md:py-28 overflow-hidden ${
        theme === 'dark' ? 'bg-[#0a0a0a]' : 'bg-[#faf8f2]'
      }`}>
        {/* Subtle top border */}
        <div className="absolute inset-0">
          <div className={`absolute top-0 left-0 w-full h-px ${
            theme === 'dark'
              ? 'bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent'
              : 'bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent'
          }`} />
        </div>

        <div className="relative container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-black'
            }`}>
              Pronto para{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Acelerar
              </span>
              {' '}o Crescimento?
            </h2>

            <p className={`text-lg md:text-xl mb-12 leading-relaxed ${
              theme === 'dark' ? 'text-white/70' : 'text-gray-700'
            }`}>
              Marque uma reunião gratuita de 30 minutos. Analisamos a elegibilidade da sua empresa
              e identificamos as melhores oportunidades de financiamento disponíveis.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <motion.a
                href="mailto:info@crescentia.pt"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold text-lg shadow-[0_0_30px_rgba(245,207,0,0.4)] hover:shadow-[0_0_40px_rgba(245,207,0,0.6)] transition-all"
              >
                Marcar Reunião Gratuita
              </motion.a>

              <motion.a
                href="tel:+351913960220"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`px-8 py-4 rounded-full font-semibold text-lg transition-all ${
                  theme === 'dark'
                    ? 'bg-white/5 border border-white/10 hover:border-white/20 text-white'
                    : 'bg-black/5 border border-black/10 hover:border-black/20 text-black'
                }`}
              >
                +351 913 960 220
              </motion.a>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-3 gap-6 md:gap-8 max-w-3xl mx-auto pt-8 border-t border-white/5">
              {[
                { icon: '🔒', text: 'Sem compromisso' },
                { icon: '⚡', text: 'Resposta em 24h' },
                { icon: '🎯', text: 'Análise personalizada' },
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl md:text-4xl mb-2">{item.icon}</div>
                  <p className={`text-sm md:text-base ${
                    theme === 'dark' ? 'text-white/60' : 'text-gray-600'
                  }`}>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`relative py-8 md:py-12 ${
        theme === 'dark'
          ? 'border-t border-white/5 bg-[#0a0a0a]'
          : 'border-t border-yellow-500/10 bg-[#fffdf7]'
      }`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 text-center md:text-left">
            {/* Copyright */}
            <p className={`text-sm ${
              theme === 'dark' ? 'text-white/60' : 'text-gray-600'
            }`}>
              © 2024 Crescentia. Todos os direitos reservados.
            </p>

            {/* Contact */}
            <div className="flex items-center gap-4 md:gap-6 text-sm">
              <a
                href="mailto:info@crescentia.pt"
                className={`transition-colors ${
                  theme === 'dark'
                    ? 'text-white/60 hover:text-yellow-400'
                    : 'text-gray-600 hover:text-yellow-600'
                }`}
              >
                info@crescentia.pt
              </a>
              <span className={theme === 'dark' ? 'text-white/30' : 'text-gray-400'}>|</span>
              <a
                href="tel:+351913960220"
                className={`transition-colors ${
                  theme === 'dark'
                    ? 'text-white/60 hover:text-yellow-400'
                    : 'text-gray-600 hover:text-yellow-600'
                }`}
              >
                +351 913 960 220
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
