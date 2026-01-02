'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const content = {
  pt: {
    title: 'Termos e Condições',
    lastUpdated: 'Última atualização: 2 de Janeiro de 2026',
    backToHome: '← Voltar ao início',
    sections: {
      acceptance: {
        title: '1. Aceitação dos Termos',
        content: 'Ao aceder e utilizar os websites da Crescentia (crescentia.pt, wealth.crescentia.pt, apoios.crescentia.pt), concorda em cumprir e estar vinculado aos presentes Termos e Condições. Se não concordar com estes termos, não deve utilizar estes websites.'
      },
      about: {
        title: '2. Sobre a Crescentia',
        para1: 'A Crescentia é uma consultoria especializada em:',
        items: [
          '<strong>Apoios Europeus:</strong> consultoria para PMEs portuguesas em programas como Portugal 2030, PRR e outros fundos estruturais',
          '<strong>Otimização Fiscal IFICI:</strong> consultoria fiscal especializada para profissionais de elevados rendimentos em Portugal'
        ],
        para2: 'Os nossos serviços incluem análise de elegibilidade, desenvolvimento de estratégias, preparação de candidaturas e acompanhamento contínuo.'
      },
      usage: {
        title: '3. Uso dos Websites',
        content: 'Ao utilizar os nossos websites, compromete-se a:',
        items: [
          'Usar os websites apenas para fins legais e legítimos',
          'Não usar os websites de forma que possa danificá-los ou prejudicar o seu desempenho',
          'Não utilizar robots, scrapers ou sistemas automatizados para aceder aos websites',
          'Não copiar, reproduzir ou redistribuir o conteúdo sem autorização prévia',
          'Fornecer informações verdadeiras e precisas quando contactar ou submeter formulários'
        ]
      },
      ip: {
        title: '4. Propriedade Intelectual',
        para1: 'Todo o conteúdo disponível nos websites, incluindo textos, gráficos, logos, imagens, código e software, é propriedade da Crescentia ou dos seus licenciadores e está protegido por direitos de autor e outras leis de propriedade intelectual.',
        para2: 'É concedida uma licença limitada para visualizar e usar o conteúdo apenas para uso pessoal e não comercial. Qualquer outro uso requer autorização prévia por escrito.'
      },
      services: {
        title: '5. Serviços de Consultoria',
        para1: 'As informações fornecidas nos websites têm carácter meramente informativo e não constituem aconselhamento profissional específico para a sua situação.',
        para2: 'Os serviços de consultoria são prestados mediante contrato específico, que estabelecerá:',
        items: [
          'Âmbito dos serviços',
          'Honorários e condições de pagamento',
          'Prazos e entregas',
          'Responsabilidades de ambas as partes',
          'Condições de rescisão'
        ],
        para3: '<strong>Importante:</strong> Os nossos serviços fornecem estratégias de otimização e acesso a fundos, mas não garantimos resultados específicos. Os resultados dependem de circunstâncias individuais e decisões das autoridades competentes.'
      },
      disclaimer: {
        title: '6. Isenção de Responsabilidade',
        para1: 'A Crescentia esforça-se por garantir que as informações nos websites sejam precisas e atualizadas. No entanto:',
        items: [
          'Não garantimos a exatidão, completude ou atualidade de todas as informações',
          'As regras e regulamentos dos programas de financiamento e regimes fiscais podem mudar sem aviso prévio',
          'Os websites são fornecidos "como estão" sem garantias de qualquer tipo',
          'Não somos responsáveis por decisões tomadas com base nas informações dos websites'
        ],
        para2: 'Para aconselhamento específico, recomendamos que contacte os nossos consultores diretamente.'
      },
      liability: {
        title: '7. Limitação de Responsabilidade',
        content: 'Na medida máxima permitida por lei, a Crescentia não será responsável por quaisquer danos diretos, indiretos, incidentais, consequenciais ou punitivos resultantes do uso ou incapacidade de usar os websites, incluindo perda de dados, lucros cessantes ou interrupção de negócios.'
      },
      links: {
        title: '8. Links Externos',
        content: 'Os websites podem conter links para websites de terceiros. Estes links são fornecidos apenas para conveniência. Não controlamos nem endossamos esses websites e não somos responsáveis pelo seu conteúdo ou práticas de privacidade.'
      },
      privacy: {
        title: '9. Privacidade e Proteção de Dados',
        content: 'A recolha e uso dos seus dados pessoais estão sujeitos à nossa <a href="/privacy" class="text-yellow-500 hover:text-yellow-400 underline">Política de Privacidade</a>. Ao utilizar os websites, consente a recolha e uso dos seus dados conforme descrito nessa política.'
      },
      modifications: {
        title: '10. Modificações aos Termos',
        content: 'Reservamo-nos o direito de modificar estes Termos e Condições a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação nos websites. O uso continuado dos websites após quaisquer alterações constitui aceitação dos novos termos.'
      },
      termination: {
        title: '11. Rescisão',
        content: 'Podemos suspender ou terminar o seu acesso aos websites a qualquer momento, sem aviso prévio, se violar estes Termos e Condições ou por qualquer outro motivo que consideremos apropriado.'
      },
      law: {
        title: '12. Lei Aplicável e Jurisdição',
        content: 'Estes Termos e Condições são regidos pelas leis de Portugal. Qualquer disputa relacionada com estes termos ou o uso dos websites será submetida à jurisdição exclusiva dos tribunais portugueses.'
      },
      general: {
        title: '13. Disposições Gerais',
        para1: 'Se qualquer disposição destes termos for considerada inválida ou inexequível, as restantes disposições permanecerão em pleno vigor e efeito.',
        para2: 'A omissão em fazer valer qualquer direito ou disposição destes termos não constitui renúncia a tal direito ou disposição.'
      },
      contact: {
        title: '14. Contacto',
        intro: 'Para questões sobre estes Termos e Condições, contacte-nos:',
        company: 'Crescentia',
        email: 'info@crescentia.pt',
        phone: '+351 913 960 220'
      }
    }
  },
  en: {
    title: 'Terms and Conditions',
    lastUpdated: 'Last updated: January 2, 2026',
    backToHome: '← Back to Home',
    sections: {
      acceptance: {
        title: '1. Acceptance of Terms',
        content: 'By accessing and using Crescentia websites (crescentia.pt, wealth.crescentia.pt, apoios.crescentia.pt), you agree to comply with and be bound by these Terms and Conditions. If you do not agree to these terms, you should not use these websites.'
      },
      about: {
        title: '2. About Crescentia',
        para1: 'Crescentia is a consultancy specialized in:',
        items: [
          '<strong>EU Funding:</strong> consulting for Portuguese SMEs on programs such as Portugal 2030, PRR, and other structural funds',
          '<strong>IFICI Tax Optimization:</strong> specialized tax consulting for high-income professionals in Portugal'
        ],
        para2: 'Our services include eligibility analysis, strategy development, application preparation, and ongoing support.'
      },
      usage: {
        title: '3. Use of Websites',
        content: 'By using our websites, you agree to:',
        items: [
          'Use the websites only for lawful and legitimate purposes',
          'Not use the websites in any way that could damage or impair their performance',
          'Not use robots, scrapers, or automated systems to access the websites',
          'Not copy, reproduce, or redistribute content without prior authorization',
          'Provide truthful and accurate information when contacting us or submitting forms'
        ]
      },
      ip: {
        title: '4. Intellectual Property',
        para1: 'All content available on the websites, including text, graphics, logos, images, code, and software, is the property of Crescentia or its licensors and is protected by copyright and other intellectual property laws.',
        para2: 'A limited license is granted to view and use the content for personal and non-commercial use only. Any other use requires prior written authorization.'
      },
      services: {
        title: '5. Consulting Services',
        para1: 'Information provided on the websites is for informational purposes only and does not constitute specific professional advice for your situation.',
        para2: 'Consulting services are provided under a specific contract, which will establish:',
        items: [
          'Scope of services',
          'Fees and payment terms',
          'Deadlines and deliverables',
          'Responsibilities of both parties',
          'Termination conditions'
        ],
        para3: '<strong>Important:</strong> Our services provide optimization strategies and access to funding, but we do not guarantee specific results. Results depend on individual circumstances and decisions by competent authorities.'
      },
      disclaimer: {
        title: '6. Disclaimer of Warranties',
        para1: 'Crescentia strives to ensure that information on the websites is accurate and up-to-date. However:',
        items: [
          'We do not guarantee the accuracy, completeness, or timeliness of all information',
          'Rules and regulations of funding programs and tax regimes may change without prior notice',
          'The websites are provided "as is" without warranties of any kind',
          'We are not responsible for decisions made based on website information'
        ],
        para2: 'For specific advice, we recommend contacting our consultants directly.'
      },
      liability: {
        title: '7. Limitation of Liability',
        content: 'To the maximum extent permitted by law, Crescentia shall not be liable for any direct, indirect, incidental, consequential, or punitive damages resulting from the use or inability to use the websites, including loss of data, lost profits, or business interruption.'
      },
      links: {
        title: '8. External Links',
        content: 'The websites may contain links to third-party websites. These links are provided for convenience only. We do not control or endorse these websites and are not responsible for their content or privacy practices.'
      },
      privacy: {
        title: '9. Privacy and Data Protection',
        content: 'The collection and use of your personal data are subject to our <a href="/privacy" class="text-yellow-500 hover:text-yellow-400 underline">Privacy Policy</a>. By using the websites, you consent to the collection and use of your data as described in that policy.'
      },
      modifications: {
        title: '10. Modifications to Terms',
        content: 'We reserve the right to modify these Terms and Conditions at any time. Changes will take effect immediately upon posting on the websites. Continued use of the websites after any changes constitutes acceptance of the new terms.'
      },
      termination: {
        title: '11. Termination',
        content: 'We may suspend or terminate your access to the websites at any time, without prior notice, if you violate these Terms and Conditions or for any other reason we deem appropriate.'
      },
      law: {
        title: '12. Governing Law and Jurisdiction',
        content: 'These Terms and Conditions are governed by the laws of Portugal. Any dispute related to these terms or the use of the websites shall be submitted to the exclusive jurisdiction of the Portuguese courts.'
      },
      general: {
        title: '13. General Provisions',
        para1: 'If any provision of these terms is deemed invalid or unenforceable, the remaining provisions shall remain in full force and effect.',
        para2: 'Failure to enforce any right or provision of these terms does not constitute a waiver of such right or provision.'
      },
      contact: {
        title: '14. Contact',
        intro: 'For questions about these Terms and Conditions, contact us:',
        company: 'Crescentia',
        email: 'info@crescentia.pt',
        phone: '+351 913 960 220'
      }
    }
  }
}

export default function TermsPage() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')
  const [language, setLanguage] = useState<'en' | 'pt'>('pt')

  useEffect(() => {
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setTheme(systemPrefersDark ? 'dark' : 'light')
  }, [])

  const t = content[language]

  return (
    <div className={`min-h-screen ${
      theme === 'dark' ? 'bg-[#0a0a0a] text-white' : 'bg-white text-black'
    }`}>
      {/* Header */}
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
              alt="Crescentia"
              className="h-6 md:h-8"
            />
          </a>

          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  language === 'en'
                    ? 'bg-yellow-500 text-black'
                    : theme === 'dark'
                    ? 'bg-white/5 text-white/60 hover:bg-white/10'
                    : 'bg-black/5 text-black/60 hover:bg-black/10'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('pt')}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  language === 'pt'
                    ? 'bg-yellow-500 text-black'
                    : theme === 'dark'
                    ? 'bg-white/5 text-white/60 hover:bg-white/10'
                    : 'bg-black/5 text-black/60 hover:bg-black/10'
                }`}
              >
                PT
              </button>
            </div>

            {/* Theme Toggle */}
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
            {t.title}
          </h1>

          <p className={`text-sm mb-12 ${
            theme === 'dark' ? 'text-white/60' : 'text-gray-600'
          }`}>
            {t.lastUpdated}
          </p>

          <div className={`space-y-8 ${
            theme === 'dark' ? 'text-white/80' : 'text-gray-700'
          }`}>
            {/* 1. Acceptance */}
            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                {t.sections.acceptance.title}
              </h2>
              <p>{t.sections.acceptance.content}</p>
            </section>

            {/* 2. About */}
            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                {t.sections.about.title}
              </h2>
              <p className="mb-4">{t.sections.about.para1}</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                {t.sections.about.items.map((item, idx) => (
                  <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
              <p className="mt-4">{t.sections.about.para2}</p>
            </section>

            {/* 3. Usage */}
            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                {t.sections.usage.title}
              </h2>
              <p className="mb-4">{t.sections.usage.content}</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                {t.sections.usage.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>

            {/* 4. IP */}
            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                {t.sections.ip.title}
              </h2>
              <p className="mb-4">{t.sections.ip.para1}</p>
              <p>{t.sections.ip.para2}</p>
            </section>

            {/* 5. Services */}
            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                {t.sections.services.title}
              </h2>
              <p className="mb-4">{t.sections.services.para1}</p>
              <p className="mb-4">{t.sections.services.para2}</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                {t.sections.services.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <p className="mt-4" dangerouslySetInnerHTML={{ __html: t.sections.services.para3 }} />
            </section>

            {/* 6. Disclaimer */}
            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                {t.sections.disclaimer.title}
              </h2>
              <p className="mb-4">{t.sections.disclaimer.para1}</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                {t.sections.disclaimer.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <p className="mt-4">{t.sections.disclaimer.para2}</p>
            </section>

            {/* 7. Liability */}
            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                {t.sections.liability.title}
              </h2>
              <p>{t.sections.liability.content}</p>
            </section>

            {/* 8. Links */}
            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                {t.sections.links.title}
              </h2>
              <p>{t.sections.links.content}</p>
            </section>

            {/* 9. Privacy */}
            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                {t.sections.privacy.title}
              </h2>
              <p dangerouslySetInnerHTML={{ __html: t.sections.privacy.content }} />
            </section>

            {/* 10. Modifications */}
            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                {t.sections.modifications.title}
              </h2>
              <p>{t.sections.modifications.content}</p>
            </section>

            {/* 11. Termination */}
            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                {t.sections.termination.title}
              </h2>
              <p>{t.sections.termination.content}</p>
            </section>

            {/* 12. Law */}
            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                {t.sections.law.title}
              </h2>
              <p>{t.sections.law.content}</p>
            </section>

            {/* 13. General */}
            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                {t.sections.general.title}
              </h2>
              <p className="mb-4">{t.sections.general.para1}</p>
              <p>{t.sections.general.para2}</p>
            </section>

            {/* 14. Contact */}
            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                {t.sections.contact.title}
              </h2>
              <p className="mb-4">{t.sections.contact.intro}</p>
              <div className={`p-6 rounded-xl ${
                theme === 'dark' ? 'bg-white/5' : 'bg-gray-100'
              }`}>
                <p><strong>{t.sections.contact.company}</strong></p>
                <p>Email: <a href={`mailto:${t.sections.contact.email}`} className="text-yellow-500 hover:text-yellow-400">{t.sections.contact.email}</a></p>
                <p>
                  {language === 'pt' ? 'Telefone' : 'Phone'}: <a href={`tel:${t.sections.contact.phone.replace(/\s/g, '')}`} className="text-yellow-500 hover:text-yellow-400">{t.sections.contact.phone}</a>
                </p>
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
              {t.backToHome}
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
            © 2026 Crescentia. {language === 'pt' ? 'Todos os direitos reservados.' : 'All rights reserved.'}
          </p>
        </div>
      </footer>
    </div>
  )
}
