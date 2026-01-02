'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function PrivacyPage() {
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
            Política de Privacidade
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
                1. Introdução
              </h2>
              <p className="mb-4">
                A Crescentia Apoios ("nós", "nosso" ou "Crescentia") respeita a sua privacidade e está comprometida em proteger os seus dados pessoais. Esta política de privacidade explica como recolhemos, usamos e protegemos as suas informações quando visita o nosso website apoios.crescentia.pt.
              </p>
              <p>
                Esta política está em conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD) da União Europeia e a legislação portuguesa aplicável.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                2. Dados que Recolhemos
              </h2>
              <p className="mb-4">Podemos recolher e processar os seguintes dados:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Dados de contacto:</strong> nome, email, telefone (quando fornecidos voluntariamente)</li>
                <li><strong>Dados de navegação:</strong> endereço IP, tipo de browser, páginas visitadas, tempo de visita</li>
                <li><strong>Cookies:</strong> pequenos ficheiros armazenados no seu dispositivo para melhorar a experiência</li>
                <li><strong>Dados de formulários:</strong> informações fornecidas quando subscreve a newsletter ou nos contacta</li>
              </ul>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                3. Como Usamos os Seus Dados
              </h2>
              <p className="mb-4">Utilizamos os seus dados para:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Responder às suas questões e pedidos de informação</li>
                <li>Enviar newsletters e informações sobre apoios europeus (com o seu consentimento)</li>
                <li>Melhorar o nosso website e serviços</li>
                <li>Cumprir obrigações legais e regulamentares</li>
                <li>Analisar o uso do website para fins estatísticos</li>
              </ul>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                4. Base Legal para Processamento
              </h2>
              <p className="mb-4">Processamos os seus dados com base em:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Consentimento:</strong> quando subscreve a nossa newsletter ou aceita cookies</li>
                <li><strong>Interesses legítimos:</strong> para melhorar os nossos serviços e comunicação</li>
                <li><strong>Obrigação legal:</strong> quando exigido por lei</li>
                <li><strong>Execução de contrato:</strong> para fornecer os serviços solicitados</li>
              </ul>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                5. Partilha de Dados
              </h2>
              <p className="mb-4">
                Não vendemos os seus dados pessoais. Podemos partilhar informações com:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Prestadores de serviços (hosting, email marketing) que nos ajudam a operar o website</li>
                <li>Autoridades legais quando obrigatório por lei</li>
                <li>Parceiros de confiança, apenas com o seu consentimento explícito</li>
              </ul>
              <p className="mt-4">
                Todos os prestadores de serviços estão contratualmente obrigados a proteger os seus dados e usá-los apenas para as finalidades especificadas.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                6. Cookies
              </h2>
              <p className="mb-4">
                Utilizamos cookies para melhorar a sua experiência no website. Pode gerir as preferências de cookies através do banner de consentimento ou configurações do seu browser.
              </p>
              <p className="mb-4"><strong>Tipos de cookies que usamos:</strong></p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Essenciais:</strong> necessários para o funcionamento básico do site</li>
                <li><strong>Analíticos:</strong> para compreender como os visitantes usam o site</li>
                <li><strong>Funcionais:</strong> para lembrar as suas preferências (ex: tema escuro/claro)</li>
              </ul>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                7. Retenção de Dados
              </h2>
              <p>
                Mantemos os seus dados pessoais apenas pelo tempo necessário para as finalidades descritas nesta política, ou conforme exigido por lei. Dados de newsletter são mantidos até cancelar a subscrição. Dados de contacto são eliminados após 3 anos de inatividade.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                8. Os Seus Direitos
              </h2>
              <p className="mb-4">De acordo com o RGPD, tem direito a:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Acesso:</strong> solicitar uma cópia dos seus dados pessoais</li>
                <li><strong>Retificação:</strong> corrigir dados incorretos ou incompletos</li>
                <li><strong>Eliminação:</strong> solicitar a eliminação dos seus dados ("direito ao esquecimento")</li>
                <li><strong>Limitação:</strong> limitar o processamento dos seus dados</li>
                <li><strong>Portabilidade:</strong> receber os seus dados em formato estruturado</li>
                <li><strong>Oposição:</strong> opor-se ao processamento dos seus dados</li>
                <li><strong>Retirar consentimento:</strong> a qualquer momento, sem afetar a legalidade do processamento anterior</li>
              </ul>
              <p className="mt-4">
                Para exercer qualquer destes direitos, contacte-nos através de <strong>info@crescentia.pt</strong>
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                9. Segurança
              </h2>
              <p>
                Implementamos medidas técnicas e organizacionais adequadas para proteger os seus dados contra acesso não autorizado, alteração, divulgação ou destruição. Utilizamos encriptação SSL/TLS para proteger a transmissão de dados.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                10. Links Externos
              </h2>
              <p>
                O nosso website pode conter links para sites externos. Não somos responsáveis pelas práticas de privacidade desses sites. Recomendamos que leia as políticas de privacidade de cada site que visita.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                11. Alterações a Esta Política
              </h2>
              <p>
                Podemos atualizar esta política de privacidade periodicamente. A versão mais recente estará sempre disponível nesta página com a data da última atualização indicada no topo.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                12. Contacto
              </h2>
              <p className="mb-4">
                Para questões sobre esta política de privacidade ou sobre os seus dados pessoais, contacte-nos:
              </p>
              <div className={`p-6 rounded-xl ${
                theme === 'dark' ? 'bg-white/5' : 'bg-gray-100'
              }`}>
                <p><strong>Crescentia Apoios</strong></p>
                <p>Email: <a href="mailto:info@crescentia.pt" className="text-yellow-500 hover:text-yellow-400">info@crescentia.pt</a></p>
                <p>Telefone: <a href="tel:+351913960220" className="text-yellow-500 hover:text-yellow-400">+351 913 960 220</a></p>
              </div>
              <p className="mt-4 text-sm">
                Tem também o direito de apresentar uma reclamação junto da Comissão Nacional de Proteção de Dados (CNPD) se considerar que o processamento dos seus dados pessoais viola o RGPD.
              </p>
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
