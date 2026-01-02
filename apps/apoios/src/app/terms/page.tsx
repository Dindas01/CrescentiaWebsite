'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function TermsPage() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  useEffect(() => {
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setTheme(systemPrefersDark ? 'dark' : 'light')
  }, [])

  return (
    <div className={`min-h-screen ${
      theme === 'dark' ? 'bg-[#0a0a0a] text-white' : 'bg-[#fffdf7] text-black'
    }`}>
      {/* Simple Header */}
      <header className={`sticky top-0 z-50 border-b backdrop-blur-xl ${
        theme === 'dark'
          ? 'bg-[#0a0a0a]/95 border-white/5'
          : 'bg-white/95 border-gray-200'
      }`}>
        <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img
              src={theme === 'dark'
                ? "/logos/Crescentia-Horizontal-MainColor-Whiteout.svg"
                : "/logos/Crescentia-Horizontal-MainColor-Blackout.svg"
              }
              alt="Crescentia Apoios"
              className="h-6 md:h-8"
            />
          </a>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className={`p-2 rounded-lg transition-colors ${
              theme === 'dark'
                ? 'bg-white/5 hover:bg-white/10'
                : 'bg-black/5 hover:bg-black/10'
            }`}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 md:px-6 py-16 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-black'
          }`}>
            Termos e Condições
          </h1>
          <p className={`text-sm mb-12 ${
            theme === 'dark' ? 'text-white/60' : 'text-gray-600'
          }`}>
            Última atualização: 2 de Janeiro de 2026
          </p>

          <div className={`space-y-8 ${
            theme === 'dark' ? 'text-white/80' : 'text-gray-700'
          }`}>
            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                1. Aceitação dos Termos
              </h2>
              <p>
                Ao aceder e utilizar o website apoios.crescentia.pt ("Website"), concorda em cumprir e estar vinculado aos presentes Termos e Condições. Se não concordar com estes termos, não deve utilizar este Website.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                2. Sobre a Crescentia Apoios
              </h2>
              <p className="mb-4">
                A Crescentia Apoios é uma consultoria especializada em apoios europeus para PMEs portuguesas, incluindo programas como Portugal 2030, PRR (Plano de Recuperação e Resiliência) e outros fundos estruturais.
              </p>
              <p>
                Os nossos serviços incluem consultoria, análise de elegibilidade, preparação de candidaturas e acompanhamento de projetos financiados por fundos europeus.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                3. Uso do Website
              </h2>
              <p className="mb-4">Ao utilizar este Website, compromete-se a:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Usar o Website apenas para fins legais e legítimos</li>
                <li>Não usar o Website de forma que possa danificá-lo ou prejudicar o seu desempenho</li>
                <li>Não utilizar robots, scrapers ou sistemas automatizados para aceder ao Website</li>
                <li>Não copiar, reproduzir ou redistribuir o conteúdo sem autorização prévia</li>
                <li>Fornecer informações verdadeiras e precisas quando contactar ou submeter formulários</li>
              </ul>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                4. Propriedade Intelectual
              </h2>
              <p className="mb-4">
                Todo o conteúdo disponível no Website, incluindo textos, gráficos, logos, imagens, código e software, é propriedade da Crescentia ou dos seus licenciadores e está protegido por direitos de autor e outras leis de propriedade intelectual.
              </p>
              <p>
                É concedida uma licença limitada para visualizar e usar o conteúdo apenas para uso pessoal e não comercial. Qualquer outro uso requer autorização prévia por escrito.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                5. Serviços de Consultoria
              </h2>
              <p className="mb-4">
                As informações fornecidas no Website têm carácter meramente informativo e não constituem aconselhamento profissional específico para a sua situação.
              </p>
              <p className="mb-4">
                Os serviços de consultoria são prestados mediante contrato específico, que estabelecerá:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Âmbito dos serviços</li>
                <li>Honorários e condições de pagamento</li>
                <li>Prazos e entregas</li>
                <li>Responsabilidades de ambas as partes</li>
                <li>Condições de rescisão</li>
              </ul>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                6. Isenção de Responsabilidade
              </h2>
              <p className="mb-4">
                A Crescentia Apoios esforça-se por garantir que as informações no Website sejam precisas e atualizadas. No entanto:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Não garantimos a exatidão, completude ou atualidade de todas as informações</li>
                <li>As regras e regulamentos dos programas de financiamento podem mudar sem aviso prévio</li>
                <li>O Website é fornecido "como está" sem garantias de qualquer tipo</li>
                <li>Não somos responsáveis por decisões tomadas com base nas informações do Website</li>
              </ul>
              <p className="mt-4">
                Para aconselhamento específico, recomendamos que contacte os nossos consultores diretamente.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                7. Limitação de Responsabilidade
              </h2>
              <p>
                Na medida máxima permitida por lei, a Crescentia não será responsável por quaisquer danos diretos, indiretos, incidentais, consequenciais ou punitivos resultantes do uso ou incapacidade de usar o Website, incluindo perda de dados, lucros cessantes ou interrupção de negócios.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                8. Links Externos
              </h2>
              <p>
                O Website pode conter links para websites de terceiros. Estes links são fornecidos apenas para conveniência. Não controlamos nem endossamos esses websites e não somos responsáveis pelo seu conteúdo ou práticas de privacidade.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                9. Privacidade e Proteção de Dados
              </h2>
              <p>
                A recolha e uso dos seus dados pessoais estão sujeitos à nossa <a href="/privacy" className="text-yellow-500 hover:text-yellow-400 underline">Política de Privacidade</a>. Ao utilizar o Website, consente a recolha e uso dos seus dados conforme descrito nessa política.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                10. Modificações aos Termos
              </h2>
              <p>
                Reservamo-nos o direito de modificar estes Termos e Condições a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação no Website. O uso continuado do Website após quaisquer alterações constitui aceitação dos novos termos.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                11. Rescisão
              </h2>
              <p>
                Podemos suspender ou terminar o seu acesso ao Website a qualquer momento, sem aviso prévio, se violar estes Termos e Condições ou por qualquer outro motivo que consideremos apropriado.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                12. Lei Aplicável e Jurisdição
              </h2>
              <p className="mb-4">
                Estes Termos e Condições são regidos pelas leis de Portugal. Qualquer disputa relacionada com estes termos ou o uso do Website será submetida à jurisdição exclusiva dos tribunais portugueses.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                13. Disposições Gerais
              </h2>
              <p className="mb-4">
                Se qualquer disposição destes termos for considerada inválida ou inexequível, as restantes disposições permanecerão em pleno vigor e efeito.
              </p>
              <p>
                A omissão em fazer valer qualquer direito ou disposição destes termos não constitui renúncia a tal direito ou disposição.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                14. Contacto
              </h2>
              <p className="mb-4">
                Para questões sobre estes Termos e Condições, contacte-nos:
              </p>
              <div className={`p-6 rounded-xl ${
                theme === 'dark' ? 'bg-white/5' : 'bg-gray-100'
              }`}>
                <p><strong>Crescentia Apoios</strong></p>
                <p>Email: <a href="mailto:info@crescentia.pt" className="text-yellow-500 hover:text-yellow-400">info@crescentia.pt</a></p>
                <p>Telefone: <a href="tel:+351913960220" className="text-yellow-500 hover:text-yellow-400">+351 913 960 220</a></p>
              </div>
            </section>
          </div>

          <div className="mt-16 pt-8 border-t border-white/10">
            <a
              href="/"
              className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
                theme === 'dark'
                  ? 'text-yellow-400 hover:text-yellow-300'
                  : 'text-yellow-600 hover:text-yellow-500'
              }`}
            >
              ← Voltar ao início
            </a>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className={`border-t mt-20 py-8 ${
        theme === 'dark' ? 'border-white/5' : 'border-gray-200'
      }`}>
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className={`text-sm ${
            theme === 'dark' ? 'text-white/60' : 'text-gray-600'
          }`}>
            © 2026 Crescentia Apoios. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
