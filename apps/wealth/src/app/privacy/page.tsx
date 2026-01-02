'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function PrivacyPolicy() {
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
            Privacy Policy
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
                1. Introduction
              </h2>
              <p className="mb-4">
                Crescentia Wealth ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website wealth.crescentia.pt and use our IFICI tax optimization services.
              </p>
              <p>
                This policy complies with the EU General Data Protection Regulation (GDPR) and Portuguese data protection laws.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                2. Information We Collect
              </h2>
              <h3 className={`text-xl font-semibold mb-3 ${
                theme === 'dark' ? 'text-white/90' : 'text-gray-900'
              }`}>
                2.1 Personal Information
              </h3>
              <p className="mb-4">
                We may collect personal information that you voluntarily provide when requesting our services:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Contact information:</strong> name, email, phone number</li>
                <li><strong>Financial information:</strong> income details, asset information, investment portfolio</li>
                <li><strong>Tax information:</strong> tax residency, citizenship, current tax status</li>
                <li><strong>Professional background:</strong> employment status, industry, professional qualifications</li>
                <li><strong>Cryptocurrency holdings:</strong> for tax optimization purposes (if applicable)</li>
              </ul>

              <h3 className={`text-xl font-semibold mb-3 mt-6 ${
                theme === 'dark' ? 'text-white/90' : 'text-gray-900'
              }`}>
                2.2 Automatically Collected Information
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Browser type and version</li>
                <li>IP address and location data</li>
                <li>Pages visited and time spent on site</li>
                <li>Device information</li>
              </ul>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                3. How We Use Your Information
              </h2>
              <p className="mb-4">We use collected information for:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Providing IFICI tax optimization consulting services</li>
                <li>Analyzing your eligibility for tax benefits</li>
                <li>Processing consultation requests and bookings</li>
                <li>Communicating about your tax strategy and services</li>
                <li>Complying with legal and regulatory obligations</li>
                <li>Improving our website and services</li>
                <li>Sending newsletters and updates (with your consent)</li>
              </ul>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                4. Legal Basis for Processing
              </h2>
              <p className="mb-4">We process your personal data based on:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Consent:</strong> when you subscribe to newsletters or accept cookies</li>
                <li><strong>Contract execution:</strong> to provide requested services</li>
                <li><strong>Legal obligation:</strong> to comply with tax and financial regulations</li>
                <li><strong>Legitimate interests:</strong> to improve our services and communications</li>
              </ul>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                5. Data Sharing and Disclosure
              </h2>
              <p className="mb-4">
                We do not sell your personal data. We may share information with:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Service providers (hosting, email services, analytics) bound by confidentiality agreements</li>
                <li>Portuguese tax authorities when legally required</li>
                <li>Legal advisors and accountants assisting with your case</li>
                <li>Law enforcement when required by law</li>
              </ul>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                6. Data Security
              </h2>
              <p>
                We implement appropriate technical and organizational security measures including encryption (SSL/TLS), secure servers, access controls, and regular security audits. However, no internet transmission is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                7. Your Rights Under GDPR
              </h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Access:</strong> request copies of your personal data</li>
                <li><strong>Rectification:</strong> correct inaccurate or incomplete data</li>
                <li><strong>Erasure:</strong> request deletion of your data ("right to be forgotten")</li>
                <li><strong>Restriction:</strong> limit how we process your data</li>
                <li><strong>Portability:</strong> receive your data in a structured format</li>
                <li><strong>Object:</strong> oppose processing of your data</li>
                <li><strong>Withdraw consent:</strong> at any time, without affecting prior processing</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, contact us at <strong>info@crescentia.pt</strong>
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                8. Cookies
              </h2>
              <p className="mb-4">
                We use cookies to enhance your experience. Types of cookies we use:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Essential cookies:</strong> required for basic website functionality</li>
                <li><strong>Preference cookies:</strong> remember your settings (theme, language)</li>
                <li><strong>Analytics cookies:</strong> help us understand how visitors use our site</li>
              </ul>
              <p className="mt-4">
                You can manage cookie preferences through our consent banner or your browser settings.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                9. Data Retention
              </h2>
              <p>
                We retain personal data only as long as necessary for the purposes described in this policy, or as required by law. Client consultation data is typically retained for 7 years to comply with Portuguese tax regulations. Newsletter data is kept until you unsubscribe.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                10. International Data Transfers
              </h2>
              <p>
                Your data is primarily processed within the EU. If we transfer data outside the EU, we ensure appropriate safeguards are in place, such as Standard Contractual Clauses.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                11. Children's Privacy
              </h2>
              <p>
                Our services are not directed to individuals under 18. We do not knowingly collect personal information from children.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                12. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy periodically. The latest version will always be available on this page with the "Last updated" date at the top.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                13. Contact Us
              </h2>
              <p className="mb-4">
                For questions about this Privacy Policy or to exercise your rights, contact us at:
              </p>
              <div className={`p-6 rounded-xl ${
                theme === 'dark' ? 'bg-white/5' : 'bg-gray-100'
              }`}>
                <p><strong>Crescentia Wealth</strong></p>
                <p>Email: <a href="mailto:info@crescentia.pt" className="text-yellow-500 hover:text-yellow-400">info@crescentia.pt</a></p>
                <p>Phone: <a href="tel:+351913960220" className="text-yellow-500 hover:text-yellow-400">+351 913 960 220</a></p>
              </div>
              <p className="mt-4 text-sm">
                You also have the right to lodge a complaint with the Portuguese Data Protection Authority (CNPD) if you believe your data protection rights have been violated.
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
