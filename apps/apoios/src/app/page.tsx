'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import CookieBanner from '../components/CookieBanner'

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
            {/* Services Dropdown */}
            <div className="relative group">
              <button className={`hidden md:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                theme === 'dark'
                  ? 'text-white/80 hover:text-white hover:bg-white/5'
                  : 'text-gray-700 hover:text-black hover:bg-gray-100'
              }`}>
                Serviços
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div className={`absolute top-full right-0 mt-2 w-64 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ${
                theme === 'dark'
                  ? 'bg-[#12141C] border border-white/10'
                  : 'bg-white border border-gray-200'
              }`}>
                <div className="p-2">
                  <a
                    href="https://wealth.crescentia.pt"
                    className={`block px-4 py-3 rounded-xl transition-colors ${
                      theme === 'dark'
                        ? 'hover:bg-white/5'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className={`font-semibold mb-1 ${
                      theme === 'dark' ? 'text-white' : 'text-black'
                    }`}>
                      Para Profissionais
                    </div>
                    <div className={`text-xs ${
                      theme === 'dark' ? 'text-white/50' : 'text-gray-500'
                    }`}>
                      Otimização Fiscal IFICI
                    </div>
                  </a>

                  <a
                    href="https://crescentia.pt"
                    className={`block px-4 py-3 rounded-xl transition-colors ${
                      theme === 'dark'
                        ? 'hover:bg-white/5'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className={`font-semibold mb-1 ${
                      theme === 'dark' ? 'text-white' : 'text-black'
                    }`}>
                      Institucional
                    </div>
                    <div className={`text-xs ${
                      theme === 'dark' ? 'text-white/50' : 'text-gray-500'
                    }`}>
                      Sobre a Crescentia
                    </div>
                  </a>
                </div>
              </div>
            </div>

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
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1554224311-beee460ae6fb?w=1920&q=80"
            alt="Portuguese business"
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 ${
            theme === 'dark'
              ? 'bg-gradient-to-b from-[#0a0a0a]/95 via-[#0a0a0a]/90 to-[#0a0a0a]/95'
              : 'bg-gradient-to-b from-[#fffdf7]/95 via-[#fffdf7]/85 to-[#fffdf7]/95'
          }`} />
        </div>

        {/* Gradient + noise layers */}
        <div className="absolute inset-0 z-[1]">
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

      {/* Programas Oficiais - Logo Section */}
      <section className={`relative py-12 border-y ${
        theme === 'dark'
          ? 'border-white/5 bg-[#0a0a0a]'
          : 'border-gray-200 bg-white'
      }`}>
        <div className="container mx-auto px-4 md:px-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={`text-center text-xs uppercase tracking-wider mb-8 ${
              theme === 'dark' ? 'text-white/40' : 'text-gray-400'
            }`}
          >
            Programas com que trabalhamos
          </motion.p>

          <div className="flex flex-wrap items-center justify-center gap-16 md:gap-20 max-w-5xl mx-auto">
            {/* Portugal 2030 + UE - Temporary text badge until PNG logos added */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="transition-all duration-300 hover:scale-105"
            >
              <div className={`px-8 py-6 rounded-2xl border-2 ${
                theme === 'dark'
                  ? 'border-blue-500/30 bg-blue-500/5'
                  : 'border-blue-600/30 bg-blue-50'
              }`}>
                <div className={`text-center ${
                  theme === 'dark' ? 'text-blue-400' : 'text-blue-700'
                }`}>
                  <div className="text-3xl font-bold mb-1">PT 2030</div>
                  <div className="text-xs font-semibold opacity-80">Portugal 2030</div>
                  <div className="text-[10px] mt-2 opacity-60">+ União Europeia</div>
                </div>
              </div>
            </motion.div>

            {/* PRR - Temporary text badge until PNG logo added */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="transition-all duration-300 hover:scale-105"
            >
              <div className={`px-8 py-6 rounded-2xl border-2 ${
                theme === 'dark'
                  ? 'border-green-500/30 bg-green-500/5'
                  : 'border-green-600/30 bg-green-50'
              }`}>
                <div className={`text-center ${
                  theme === 'dark' ? 'text-green-400' : 'text-green-700'
                }`}>
                  <div className="text-3xl font-bold mb-1">PRR</div>
                  <div className="text-xs font-semibold opacity-80">Recuperação e</div>
                  <div className="text-xs font-semibold opacity-80">Resiliência</div>
                </div>
              </div>
            </motion.div>
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

      {/* Quem Somos - História do Fundador */}
      <section className={`relative py-24 md:py-32 ${
        theme === 'dark' ? 'bg-[#0a0a0a]' : 'bg-[#fffdf7]'
      }`}>
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-black'
            }`}>
              Sobre a{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Crescentia
              </span>
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-8">
            {/* História do Fundador */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`p-8 md:p-12 rounded-3xl ${
                theme === 'dark'
                  ? 'bg-white/[0.02] backdrop-blur-xl border border-white/[0.06]'
                  : 'bg-white backdrop-blur-xl border border-gray-200 shadow-lg'
              }`}
            >
              <div className="mb-8">
                <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-black'
                }`}>
                  A Nossa História
                </h3>
                <div className={`space-y-4 text-base md:text-lg leading-relaxed ${
                  theme === 'dark' ? 'text-white/80' : 'text-gray-700'
                }`}>
                  <p>
                    Fundámos a Crescentia com uma <span className={`font-semibold ${
                      theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'
                    }`}>missão clara: aumentar a competitividade das empresas portuguesas</span> através
                    do acesso facilitado a fundos europeus.
                  </p>
                  <p>
                    Testemunhámos ao longo dos anos inúmeras PMEs com projetos de excelência
                    a deixarem passar oportunidades de financiamento por desconhecimento dos
                    programas disponíveis ou pela complexidade burocrática dos processos.
                  </p>
                  <p>
                    Decidimos criar uma consultoria especializada, focada exclusivamente em
                    apoios comunitários, com uma abordagem diferente: <span className="font-semibold">transparência
                    total, expertise profundo e compromisso com resultados reais</span>.
                  </p>
                  <p>
                    Acreditamos que todas as empresas portuguesas com ambição e bons projetos
                    merecem ter acesso aos <span className={`font-semibold ${
                      theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'
                    }`}>€24 mil milhões disponíveis</span> em fundos europeus. É esse o
                    nosso compromisso diário.
                  </p>
                </div>
              </div>

              <div className={`pt-8 border-t ${
                theme === 'dark' ? 'border-white/10' : 'border-gray-200'
              }`}>
                <h4 className={`text-xl font-bold mb-6 ${
                  theme === 'dark' ? 'text-white' : 'text-black'
                }`}>
                  Os Nossos Valores
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      title: 'Competitividade',
                      description: 'Ajudamos empresas a crescer e a competir em mercados nacionais e internacionais'
                    },
                    {
                      title: 'Transparência',
                      description: 'Processo claro desde o primeiro contacto. Sem taxas escondidas, sem falsas promessas'
                    },
                    {
                      title: 'Resultados',
                      description: 'Foco absoluto em projetos que realmente impulsionam o desenvolvimento empresarial'
                    },
                  ].map((item, idx) => (
                    <div key={idx}>
                      <h5 className={`text-base font-semibold mb-2 ${
                        theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'
                      }`}>
                        {item.title}
                      </h5>
                      <p className={`text-sm ${
                        theme === 'dark' ? 'text-white/70' : 'text-gray-600'
                      }`}>
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Expertise & Credenciais */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className={`p-8 md:p-12 rounded-3xl ${
                theme === 'dark'
                  ? 'bg-white/[0.02] backdrop-blur-xl border border-white/[0.06]'
                  : 'bg-white backdrop-blur-xl border border-gray-200 shadow-lg'
              }`}
            >
              <h3 className={`text-2xl md:text-3xl font-bold mb-8 text-center ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                Expertise & Resultados
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Especialização */}
                <div>
                  <h4 className={`text-lg font-bold mb-4 ${
                    theme === 'dark' ? 'text-white' : 'text-black'
                  }`}>
                    Áreas de Especialização
                  </h4>
                  <ul className="space-y-3">
                    {[
                      'Fundos Europeus & Portugal 2030',
                      'PRR - Plano de Recuperação e Resiliência',
                      'Gestão e acompanhamento de projetos',
                      'Análise de elegibilidade',
                      'Consultoria estratégica',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <svg className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'
                        }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className={`text-sm md:text-base ${
                          theme === 'dark' ? 'text-white/80' : 'text-gray-700'
                        }`}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Track Record */}
                <div>
                  <h4 className={`text-lg font-bold mb-4 ${
                    theme === 'dark' ? 'text-white' : 'text-black'
                  }`}>
                    Track Record
                  </h4>
                  <ul className="space-y-3">
                    {[
                      '50+ candidaturas submetidas',
                      '6 áreas de especialização',
                      'Parcerias com contabilistas certificados',
                      'Conhecimento profundo dos programas',
                      'Acompanhamento pós-aprovação',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <svg className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'
                        }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className={`text-sm md:text-base ${
                          theme === 'dark' ? 'text-white/80' : 'text-gray-700'
                        }`}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Compromisso */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className={`p-6 md:p-8 rounded-2xl text-center ${
                theme === 'dark'
                  ? 'bg-yellow-500/5 border border-yellow-500/20'
                  : 'bg-yellow-50 border border-yellow-500/30'
              }`}
            >
              <p className={`text-base md:text-lg font-medium ${
                theme === 'dark' ? 'text-white/90' : 'text-gray-800'
              }`}>
                <span className="font-bold">O nosso compromisso:</span> aumentar a competitividade
                das empresas portuguesas através do acesso facilitado aos €24 mil milhões
                disponíveis em fundos europeus. Com transparência, profissionalismo e foco
                em crescimento real.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className={`relative py-16 md:py-20 ${
        theme === 'dark' ? 'bg-[#0a0a0a]' : 'bg-[#faf8f2]'
      }`}>
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`max-w-3xl mx-auto p-8 md:p-12 rounded-3xl text-center ${
              theme === 'dark'
                ? 'bg-yellow-500/5 border border-yellow-500/20'
                : 'bg-yellow-50 border border-yellow-500/30'
            }`}
          >
            <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-black'
            }`}>
              Receba Avisos de Novos Concursos
            </h3>
            <p className={`text-base md:text-lg mb-6 ${
              theme === 'dark' ? 'text-white/70' : 'text-gray-700'
            }`}>
              Fique a par de novas oportunidades de financiamento e dicas exclusivas para PMEs
            </p>

            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="O seu email"
                required
                className={`flex-1 px-6 py-3 rounded-full text-base focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                  theme === 'dark'
                    ? 'bg-white/10 border border-white/20 text-white placeholder:text-white/50'
                    : 'bg-white border border-gray-300 text-black placeholder:text-gray-500'
                }`}
              />
              <button
                type="submit"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold hover:shadow-lg transition-all whitespace-nowrap"
              >
                Subscrever
              </button>
            </form>

            <p className={`text-xs mt-4 ${
              theme === 'dark' ? 'text-white/50' : 'text-gray-500'
            }`}>
              Sem spam. Pode cancelar a qualquer momento.
            </p>
          </motion.div>
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
                href="mailto:info@crescentia.pt"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`px-8 py-4 rounded-full font-semibold text-lg transition-all ${
                  theme === 'dark'
                    ? 'bg-white/5 border border-white/10 hover:border-white/20 text-white'
                    : 'bg-black/5 border border-black/10 hover:border-black/20 text-black'
                }`}
              >
                info@crescentia.pt
              </motion.a>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-3 gap-6 md:gap-8 max-w-3xl mx-auto pt-8 border-t border-white/5">
              {[
                {
                  icon: (
                    <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  ),
                  text: 'Sem compromisso',
                },
                {
                  icon: (
                    <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  text: 'Resposta em 24h',
                },
                {
                  icon: (
                    <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  text: 'Análise personalizada',
                },
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className={`mb-3 flex justify-center ${
                    theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'
                  }`}>
                    {item.icon}
                  </div>
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
          <div className="space-y-6">
            {/* Legal Links */}
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm">
              <a
                href="/privacy"
                className={`transition-colors ${
                  theme === 'dark'
                    ? 'text-white/60 hover:text-yellow-400'
                    : 'text-gray-600 hover:text-yellow-600'
                }`}
              >
                Política de Privacidade
              </a>
              <span className={theme === 'dark' ? 'text-white/30' : 'text-gray-400'}>|</span>
              <a
                href="/terms"
                className={`transition-colors ${
                  theme === 'dark'
                    ? 'text-white/60 hover:text-yellow-400'
                    : 'text-gray-600 hover:text-yellow-600'
                }`}
              >
                Termos e Condições
              </a>
            </div>

            {/* Copyright & Contact */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 text-center md:text-left">
              {/* Copyright */}
              <p className={`text-sm ${
                theme === 'dark' ? 'text-white/60' : 'text-gray-600'
              }`}>
                © 2026 Crescentia Apoios. Todos os direitos reservados.
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
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Cookie Consent Banner */}
      <CookieBanner theme={theme} />
    </>
  )
}
