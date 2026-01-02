'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function TermsOfService() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  useEffect(() => {
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setTheme(systemPrefersDark ? 'dark' : 'light')
  }, [])

  return (
    <div className={`min-h-screen ${
      theme === 'dark' ? 'bg-[#0a0a0a]' : 'bg-white'
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
              alt="Crescentia Wealth"
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
            Terms of Service
          </h1>

          <p className={`text-sm mb-12 ${
            theme === 'dark' ? 'text-white/60' : 'text-gray-600'
          }`}>
            Last updated: January 2, 2026
          </p>

          <div className={`space-y-8 ${
            theme === 'dark' ? 'text-white/80' : 'text-gray-700'
          }`}>
            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and using the website wealth.crescentia.pt ("Website"), you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, you should not use this Website.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                2. About Crescentia Wealth
              </h2>
              <p className="mb-4">
                Crescentia Wealth is a specialized consultancy focused on IFICI (Individual Fiscal Incentive for Scientific Research) tax optimization for high-income professionals in Portugal.
              </p>
              <p>
                Our services include eligibility analysis, tax strategy development, IFICI application assistance, and ongoing tax optimization consulting for qualified individuals.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                3. Use of the Website
              </h2>
              <p className="mb-4">By using this Website, you agree to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Use the Website only for lawful and legitimate purposes</li>
                <li>Not use the Website in any way that could damage or impair its performance</li>
                <li>Not use robots, scrapers, or automated systems to access the Website</li>
                <li>Not copy, reproduce, or redistribute content without prior authorization</li>
                <li>Provide truthful and accurate information when contacting us or submitting forms</li>
              </ul>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                4. Intellectual Property
              </h2>
              <p className="mb-4">
                All content available on the Website, including text, graphics, logos, images, code, and software, is the property of Crescentia or its licensors and is protected by copyright and other intellectual property laws.
              </p>
              <p>
                A limited license is granted to view and use the content for personal and non-commercial use only. Any other use requires prior written authorization.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                5. Consulting Services
              </h2>
              <p className="mb-4">
                Information provided on the Website is for informational purposes only and does not constitute specific professional advice for your situation.
              </p>
              <p className="mb-4">
                Consulting services are provided under a specific contract, which will establish:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Scope of services</li>
                <li>Fees and payment terms</li>
                <li>Deadlines and deliverables</li>
                <li>Responsibilities of both parties</li>
                <li>Termination conditions</li>
              </ul>
              <p className="mt-4">
                <strong>Important:</strong> Our services provide tax optimization strategies but do not guarantee specific tax savings. Results depend on individual circumstances and Portuguese tax authority decisions.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                6. IFICI Tax Regime Disclaimer
              </h2>
              <p className="mb-4">
                The IFICI (Individual Fiscal Incentive for Scientific Research) tax regime is governed by Portuguese tax law and is subject to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Specific eligibility criteria set by Portuguese tax authorities</li>
                <li>Annual application and approval processes</li>
                <li>Potential changes to tax legislation</li>
                <li>Individual assessment by the Portuguese Tax Authority (AT)</li>
              </ul>
              <p className="mt-4">
                Crescentia Wealth provides professional guidance but cannot guarantee IFICI approval or specific tax outcomes. Final decisions rest with the Portuguese Tax Authority.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                7. Disclaimer of Warranties
              </h2>
              <p className="mb-4">
                Crescentia Wealth strives to ensure that information on the Website is accurate and up-to-date. However:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>We do not guarantee the accuracy, completeness, or timeliness of all information</li>
                <li>Tax laws and regulations may change without prior notice</li>
                <li>The Website is provided "as is" without warranties of any kind</li>
                <li>We are not responsible for decisions made based on Website information</li>
              </ul>
              <p className="mt-4">
                For specific advice, we recommend contacting our consultants directly.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                8. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by law, Crescentia shall not be liable for any direct, indirect, incidental, consequential, or punitive damages resulting from the use or inability to use the Website, including loss of data, lost profits, or business interruption.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                9. External Links
              </h2>
              <p>
                The Website may contain links to third-party websites. These links are provided for convenience only. We do not control or endorse these websites and are not responsible for their content or privacy practices.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                10. Privacy and Data Protection
              </h2>
              <p>
                The collection and use of your personal data are subject to our <a href="/privacy" className="text-yellow-500 hover:text-yellow-400 underline">Privacy Policy</a>. By using the Website, you consent to the collection and use of your data as described in that policy.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                11. Modifications to Terms
              </h2>
              <p>
                We reserve the right to modify these Terms of Service at any time. Changes will take effect immediately upon posting on the Website. Continued use of the Website after any changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                12. Termination
              </h2>
              <p>
                We may suspend or terminate your access to the Website at any time, without prior notice, if you violate these Terms of Service or for any other reason we deem appropriate.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                13. Governing Law and Jurisdiction
              </h2>
              <p className="mb-4">
                These Terms of Service are governed by the laws of Portugal. Any dispute related to these terms or the use of the Website shall be submitted to the exclusive jurisdiction of the Portuguese courts.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                14. General Provisions
              </h2>
              <p className="mb-4">
                If any provision of these terms is deemed invalid or unenforceable, the remaining provisions shall remain in full force and effect.
              </p>
              <p>
                Failure to enforce any right or provision of these terms does not constitute a waiver of such right or provision.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                15. Contact
              </h2>
              <p className="mb-4">
                For questions about these Terms of Service, contact us:
              </p>
              <div className={`p-6 rounded-xl ${
                theme === 'dark' ? 'bg-white/5' : 'bg-gray-100'
              }`}>
                <p><strong>Crescentia Wealth</strong></p>
                <p>Email: <a href="mailto:info@crescentia.pt" className="text-yellow-500 hover:text-yellow-400">info@crescentia.pt</a></p>
                <p>Phone: <a href="tel:+351913960220" className="text-yellow-500 hover:text-yellow-400">+351 913 960 220</a></p>
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
              ← Back to Home
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
            © 2026 Crescentia Wealth. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
