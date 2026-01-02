'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const content = {
  pt: {
    title: 'Política de Privacidade',
    lastUpdated: 'Última atualização: 2 de Janeiro de 2026',
    backToHome: '← Voltar ao início',
    sections: {
      intro: {
        title: '1. Introdução',
        content: [
          'A Crescentia ("nós", "nosso" ou "Crescentia") respeita a sua privacidade e está comprometida em proteger os seus dados pessoais. Esta política de privacidade explica como recolhemos, usamos e protegemos as suas informações quando visita os nossos websites (crescentia.pt, wealth.crescentia.pt, apoios.crescentia.pt) e utiliza os nossos serviços.',
          'Esta política está em conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD) da União Europeia e a legislação portuguesa aplicável.'
        ]
      },
      dataCollection: {
        title: '2. Dados que Recolhemos',
        subtitle1: '2.1 Informação Pessoal',
        content1: 'Podemos recolher informações pessoais que fornece voluntariamente ao solicitar os nossos serviços:',
        items1: [
          '<strong>Dados de contacto:</strong> nome, email, telefone',
          '<strong>Dados financeiros:</strong> informações sobre rendimentos, ativos, investimentos',
          '<strong>Dados fiscais:</strong> residência fiscal, cidadania, situação fiscal atual',
          '<strong>Informação profissional:</strong> situação laboral, indústria, qualificações',
          '<strong>Participações em criptomoedas:</strong> para fins de otimização fiscal (se aplicável)'
        ],
        subtitle2: '2.2 Informação Recolhida Automaticamente',
        items2: [
          'Tipo e versão do navegador',
          'Endereço IP e dados de localização',
          'Páginas visitadas e tempo no site',
          'Informação do dispositivo'
        ]
      },
      dataUse: {
        title: '3. Como Usamos os Seus Dados',
        content: 'Utilizamos os dados recolhidos para:',
        items: [
          'Fornecer serviços de consultoria em fundos europeus e otimização fiscal IFICI',
          'Analisar a sua elegibilidade para benefícios fiscais e programas de financiamento',
          'Processar pedidos de consulta e marcações',
          'Comunicar sobre estratégias fiscais e serviços',
          'Cumprir obrigações legais e regulamentares',
          'Melhorar os nossos websites e serviços',
          'Enviar newsletters e atualizações (com o seu consentimento)'
        ]
      },
      legalBasis: {
        title: '4. Base Legal para Processamento',
        content: 'Processamos os seus dados pessoais com base em:',
        items: [
          '<strong>Consentimento:</strong> quando subscreve newsletters ou aceita cookies',
          '<strong>Execução de contrato:</strong> para fornecer os serviços solicitados',
          '<strong>Obrigação legal:</strong> para cumprir regulamentações fiscais e financeiras',
          '<strong>Interesses legítimos:</strong> para melhorar os nossos serviços e comunicações'
        ]
      },
      dataSharing: {
        title: '5. Partilha de Dados',
        content: 'Não vendemos os seus dados pessoais. Podemos partilhar informações com:',
        items: [
          'Prestadores de serviços (hosting, email, analytics) vinculados por acordos de confidencialidade',
          'Autoridade Tributária portuguesa quando legalmente exigido',
          'Consultores jurídicos e contabilistas que assistem no seu caso',
          'Autoridades policiais quando exigido por lei'
        ]
      },
      security: {
        title: '6. Segurança de Dados',
        content: 'Implementamos medidas técnicas e organizacionais adequadas para proteger os seus dados, incluindo encriptação (SSL/TLS), servidores seguros, controles de acesso e auditorias de segurança regulares. No entanto, nenhuma transmissão pela internet é 100% segura e não podemos garantir segurança absoluta.'
      },
      rights: {
        title: '7. Os Seus Direitos sob o RGPD',
        content: 'Tem o direito a:',
        items: [
          '<strong>Acesso:</strong> solicitar cópias dos seus dados pessoais',
          '<strong>Retificação:</strong> corrigir dados incorretos ou incompletos',
          '<strong>Eliminação:</strong> solicitar a eliminação dos seus dados ("direito ao esquecimento")',
          '<strong>Limitação:</strong> limitar como processamos os seus dados',
          '<strong>Portabilidade:</strong> receber os seus dados num formato estruturado',
          '<strong>Oposição:</strong> opor-se ao processamento dos seus dados',
          '<strong>Retirar consentimento:</strong> a qualquer momento, sem afetar o processamento anterior'
        ],
        contact: 'Para exercer estes direitos, contacte-nos através de <strong>info@crescentia.pt</strong>'
      },
      cookies: {
        title: '8. Cookies',
        content: 'Utilizamos cookies para melhorar a sua experiência. Tipos de cookies que usamos:',
        items: [
          '<strong>Essenciais:</strong> necessários para funcionalidade básica do website',
          '<strong>Preferências:</strong> lembram as suas configurações (tema, idioma)',
          '<strong>Analíticos:</strong> ajudam-nos a compreender como os visitantes usam o site'
        ],
        footer: 'Pode gerir as preferências de cookies através do nosso banner de consentimento ou configurações do browser.'
      },
      retention: {
        title: '9. Retenção de Dados',
        content: 'Mantemos os dados pessoais apenas pelo tempo necessário para os fins descritos nesta política, ou conforme exigido por lei. Dados de consultoria de clientes são normalmente retidos por 7 anos para cumprir com regulamentações fiscais portuguesas. Dados de newsletter são mantidos até cancelar a subscrição.'
      },
      transfers: {
        title: '10. Transferências Internacionais de Dados',
        content: 'Os seus dados são principalmente processados dentro da UE. Se transferirmos dados fora da UE, garantimos que salvaguardas apropriadas estão em vigor, como Cláusulas Contratuais Padrão.'
      },
      children: {
        title: '11. Privacidade de Menores',
        content: 'Os nossos serviços não são dirigidos a indivíduos com menos de 18 anos. Não recolhemos conscientemente informações pessoais de menores.'
      },
      changes: {
        title: '12. Alterações a Esta Política',
        content: 'Podemos atualizar esta Política de Privacidade periodicamente. A versão mais recente estará sempre disponível nesta página com a data da última atualização indicada no topo.'
      },
      contact: {
        title: '13. Contacto',
        intro: 'Para questões sobre esta Política de Privacidade ou para exercer os seus direitos, contacte-nos:',
        company: 'Crescentia',
        address1: 'Travessa Teixeira de Pascoaes 100',
        address2: '4460-431 Senhora da Hora',
        country: 'Portugal',
        email: 'info@crescentia.pt',
        footer: 'Tem também o direito de apresentar uma reclamação junto da Comissão Nacional de Proteção de Dados (CNPD) se considerar que os seus direitos de proteção de dados foram violados.'
      }
    }
  },
  en: {
    title: 'Privacy Policy',
    lastUpdated: 'Last updated: January 2, 2026',
    backToHome: '← Back to Home',
    sections: {
      intro: {
        title: '1. Introduction',
        content: [
          'Crescentia ("we," "our," or "Crescentia") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and protect your information when you visit our websites (crescentia.pt, wealth.crescentia.pt, apoios.crescentia.pt) and use our services.',
          'This policy complies with the EU General Data Protection Regulation (GDPR) and Portuguese data protection laws.'
        ]
      },
      dataCollection: {
        title: '2. Information We Collect',
        subtitle1: '2.1 Personal Information',
        content1: 'We may collect personal information that you voluntarily provide when requesting our services:',
        items1: [
          '<strong>Contact information:</strong> name, email, phone number',
          '<strong>Financial information:</strong> income details, asset information, investment portfolio',
          '<strong>Tax information:</strong> tax residency, citizenship, current tax status',
          '<strong>Professional background:</strong> employment status, industry, professional qualifications',
          '<strong>Cryptocurrency holdings:</strong> for tax optimization purposes (if applicable)'
        ],
        subtitle2: '2.2 Automatically Collected Information',
        items2: [
          'Browser type and version',
          'IP address and location data',
          'Pages visited and time spent on site',
          'Device information'
        ]
      },
      dataUse: {
        title: '3. How We Use Your Information',
        content: 'We use collected information for:',
        items: [
          'Providing EU funding and IFICI tax optimization consulting services',
          'Analyzing your eligibility for tax benefits and funding programs',
          'Processing consultation requests and bookings',
          'Communicating about your tax strategy and services',
          'Complying with legal and regulatory obligations',
          'Improving our websites and services',
          'Sending newsletters and updates (with your consent)'
        ]
      },
      legalBasis: {
        title: '4. Legal Basis for Processing',
        content: 'We process your personal data based on:',
        items: [
          '<strong>Consent:</strong> when you subscribe to newsletters or accept cookies',
          '<strong>Contract execution:</strong> to provide requested services',
          '<strong>Legal obligation:</strong> to comply with tax and financial regulations',
          '<strong>Legitimate interests:</strong> to improve our services and communications'
        ]
      },
      dataSharing: {
        title: '5. Data Sharing and Disclosure',
        content: 'We do not sell your personal data. We may share information with:',
        items: [
          'Service providers (hosting, email services, analytics) bound by confidentiality agreements',
          'Portuguese tax authorities when legally required',
          'Legal advisors and accountants assisting with your case',
          'Law enforcement when required by law'
        ]
      },
      security: {
        title: '6. Data Security',
        content: 'We implement appropriate technical and organizational security measures including encryption (SSL/TLS), secure servers, access controls, and regular security audits. However, no internet transmission is 100% secure, and we cannot guarantee absolute security.'
      },
      rights: {
        title: '7. Your Rights Under GDPR',
        content: 'You have the right to:',
        items: [
          '<strong>Access:</strong> request copies of your personal data',
          '<strong>Rectification:</strong> correct inaccurate or incomplete data',
          '<strong>Erasure:</strong> request deletion of your data ("right to be forgotten")',
          '<strong>Restriction:</strong> limit how we process your data',
          '<strong>Portability:</strong> receive your data in a structured format',
          '<strong>Object:</strong> oppose processing of your data',
          '<strong>Withdraw consent:</strong> at any time, without affecting prior processing'
        ],
        contact: 'To exercise these rights, contact us at <strong>info@crescentia.pt</strong>'
      },
      cookies: {
        title: '8. Cookies',
        content: 'We use cookies to enhance your experience. Types of cookies we use:',
        items: [
          '<strong>Essential cookies:</strong> required for basic website functionality',
          '<strong>Preference cookies:</strong> remember your settings (theme, language)',
          '<strong>Analytics cookies:</strong> help us understand how visitors use our site'
        ],
        footer: 'You can manage cookie preferences through our consent banner or your browser settings.'
      },
      retention: {
        title: '9. Data Retention',
        content: 'We retain personal data only as long as necessary for the purposes described in this policy, or as required by law. Client consultation data is typically retained for 7 years to comply with Portuguese tax regulations. Newsletter data is kept until you unsubscribe.'
      },
      transfers: {
        title: '10. International Data Transfers',
        content: 'Your data is primarily processed within the EU. If we transfer data outside the EU, we ensure appropriate safeguards are in place, such as Standard Contractual Clauses.'
      },
      children: {
        title: '11. Children\'s Privacy',
        content: 'Our services are not directed to individuals under 18. We do not knowingly collect personal information from children.'
      },
      changes: {
        title: '12. Changes to This Policy',
        content: 'We may update this Privacy Policy periodically. The latest version will always be available on this page with the "Last updated" date at the top.'
      },
      contact: {
        title: '13. Contact Us',
        intro: 'For questions about this Privacy Policy or to exercise your rights, contact us at:',
        company: 'Crescentia',
        address1: 'Travessa Teixeira de Pascoaes 100',
        address2: '4460-431 Senhora da Hora',
        country: 'Portugal',
        email: 'info@crescentia.pt',
        footer: 'You also have the right to lodge a complaint with the Portuguese Data Protection Authority (CNPD) if you believe your data protection rights have been violated.'
      }
    }
  }
}

export default function PrivacyPage() {
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
            {/* 1. Introduction */}
            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                {t.sections.intro.title}
              </h2>
              {t.sections.intro.content.map((para, idx) => (
                <p key={idx} className={idx > 0 ? 'mt-4' : ''}>
                  {para}
                </p>
              ))}
            </section>

            {/* 2. Data Collection */}
            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                {t.sections.dataCollection.title}
              </h2>
              <h3 className={`text-xl font-semibold mb-3 ${
                theme === 'dark' ? 'text-white/90' : 'text-gray-900'
              }`}>
                {t.sections.dataCollection.subtitle1}
              </h3>
              <p className="mb-4">{t.sections.dataCollection.content1}</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                {t.sections.dataCollection.items1.map((item, idx) => (
                  <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>

              <h3 className={`text-xl font-semibold mb-3 mt-6 ${
                theme === 'dark' ? 'text-white/90' : 'text-gray-900'
              }`}>
                {t.sections.dataCollection.subtitle2}
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                {t.sections.dataCollection.items2.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>

            {/* 3. Data Use */}
            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                {t.sections.dataUse.title}
              </h2>
              <p className="mb-4">{t.sections.dataUse.content}</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                {t.sections.dataUse.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>

            {/* 4. Legal Basis */}
            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                {t.sections.legalBasis.title}
              </h2>
              <p className="mb-4">{t.sections.legalBasis.content}</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                {t.sections.legalBasis.items.map((item, idx) => (
                  <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
            </section>

            {/* 5. Data Sharing */}
            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                {t.sections.dataSharing.title}
              </h2>
              <p className="mb-4">{t.sections.dataSharing.content}</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                {t.sections.dataSharing.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>

            {/* 6. Security */}
            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                {t.sections.security.title}
              </h2>
              <p>{t.sections.security.content}</p>
            </section>

            {/* 7. GDPR Rights */}
            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                {t.sections.rights.title}
              </h2>
              <p className="mb-4">{t.sections.rights.content}</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                {t.sections.rights.items.map((item, idx) => (
                  <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
              <p className="mt-4" dangerouslySetInnerHTML={{ __html: t.sections.rights.contact }} />
            </section>

            {/* 8. Cookies */}
            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                {t.sections.cookies.title}
              </h2>
              <p className="mb-4">{t.sections.cookies.content}</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                {t.sections.cookies.items.map((item, idx) => (
                  <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
              <p className="mt-4">{t.sections.cookies.footer}</p>
            </section>

            {/* 9. Data Retention */}
            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                {t.sections.retention.title}
              </h2>
              <p>{t.sections.retention.content}</p>
            </section>

            {/* 10. International Transfers */}
            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                {t.sections.transfers.title}
              </h2>
              <p>{t.sections.transfers.content}</p>
            </section>

            {/* 11. Children's Privacy */}
            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                {t.sections.children.title}
              </h2>
              <p>{t.sections.children.content}</p>
            </section>

            {/* 12. Changes */}
            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                {t.sections.changes.title}
              </h2>
              <p>{t.sections.changes.content}</p>
            </section>

            {/* 13. Contact */}
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
                <p>{t.sections.contact.address1}</p>
                <p>{t.sections.contact.address2}</p>
                <p>{t.sections.contact.country}</p>
                <p className="mt-4">Email: <a href={`mailto:${t.sections.contact.email}`} className="text-yellow-500 hover:text-yellow-400">{t.sections.contact.email}</a></p>
              </div>
              <p className="mt-4 text-sm">{t.sections.contact.footer}</p>
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
