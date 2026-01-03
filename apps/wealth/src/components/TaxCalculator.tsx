'use client'

import { useState } from 'react'

interface TaxCalculatorProps {
  theme: 'light' | 'dark'
}

export default function TaxCalculator({ theme }: TaxCalculatorProps) {
  const [income, setIncome] = useState(200000)
  const [crypto, setCrypto] = useState(0)
  const [country, setCountry] = useState('UK')

  // Tax rates (simplified)
  const rates: Record<string, number> = {
    'UK': 0.45,
    'USA': 0.37,
    'Germany': 0.45,
    'France': 0.45,
    'Spain': 0.47,
    'Netherlands': 0.49,
  }

  const currentCountryRate = rates[country] || 0.45
  const regularTax = income * currentCountryRate + crypto * 0.28
  const ificiTax = income * 0.20 + crypto * 0 // 0% crypto
  const savings = regularTax - ificiTax

  return (
    <div className={`p-8 rounded-2xl ${
      theme === 'dark'
        ? 'bg-white/5 border border-white/10'
        : 'bg-gray-50 border border-gray-200'
    }`}>
      {/* Inputs */}
      <div className="space-y-6 mb-8">
        <div>
          <label className={`block text-sm font-medium mb-2 ${
            theme === 'dark' ? 'text-white/80' : 'text-gray-700'
          }`}>
            Annual Income (€)
          </label>
          <input
            type="number"
            value={income}
            onChange={(e) => setIncome(Number(e.target.value))}
            className={`w-full px-4 py-3 rounded-lg ${
              theme === 'dark'
                ? 'bg-white/10 border-white/20 text-white'
                : 'bg-white border-gray-300 text-black'
            } border focus:ring-2 focus:ring-yellow-400 focus:border-transparent`}
          />
        </div>

        <div>
          <label className={`block text-sm font-medium mb-2 ${
            theme === 'dark' ? 'text-white/80' : 'text-gray-700'
          }`}>
            Crypto Gains (€)
          </label>
          <input
            type="number"
            value={crypto}
            onChange={(e) => setCrypto(Number(e.target.value))}
            className={`w-full px-4 py-3 rounded-lg ${
              theme === 'dark'
                ? 'bg-white/10 border-white/20 text-white'
                : 'bg-white border-gray-300 text-black'
            } border focus:ring-2 focus:ring-yellow-400 focus:border-transparent`}
          />
        </div>

        <div>
          <label className={`block text-sm font-medium mb-2 ${
            theme === 'dark' ? 'text-white/80' : 'text-gray-700'
          }`}>
            Current Country
          </label>
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className={`w-full px-4 py-3 rounded-lg ${
              theme === 'dark'
                ? 'bg-white/10 border-white/20 text-white'
                : 'bg-white border-gray-300 text-black'
            } border focus:ring-2 focus:ring-yellow-400 focus:border-transparent`}
          >
            {Object.keys(rates).map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Results */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className={`p-6 rounded-xl ${
          theme === 'dark' ? 'bg-red-500/10' : 'bg-red-50'
        }`}>
          <p className={`text-sm mb-2 ${
            theme === 'dark' ? 'text-white/60' : 'text-gray-600'
          }`}>
            Current Tax ({country})
          </p>
          <p className="text-2xl font-bold text-red-500">
            €{regularTax.toLocaleString('pt-PT', { maximumFractionDigits: 0 })}
          </p>
        </div>

        <div className={`p-6 rounded-xl ${
          theme === 'dark' ? 'bg-yellow-400/10' : 'bg-yellow-50'
        }`}>
          <p className={`text-sm mb-2 ${
            theme === 'dark' ? 'text-white/60' : 'text-gray-600'
          }`}>
            IFICI Tax (Portugal)
          </p>
          <p className="text-2xl font-bold text-yellow-400">
            €{ificiTax.toLocaleString('pt-PT', { maximumFractionDigits: 0 })}
          </p>
        </div>

        <div className={`p-6 rounded-xl ${
          theme === 'dark' ? 'bg-green-500/10' : 'bg-green-50'
        }`}>
          <p className={`text-sm mb-2 ${
            theme === 'dark' ? 'text-white/60' : 'text-gray-600'
          }`}>
            Annual Savings
          </p>
          <p className="text-2xl font-bold text-green-500">
            €{savings.toLocaleString('pt-PT', { maximumFractionDigits: 0 })}
          </p>
        </div>
      </div>

      <div className="mt-8 text-center">
        <a
          href="mailto:info@crescentia.pt?subject=IFICI Tax Optimization Consultation"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold hover:shadow-lg hover:scale-105 transition-all"
        >
          Get Custom Tax Plan
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>

      <p className={`text-xs text-center mt-4 ${
        theme === 'dark' ? 'text-white/50' : 'text-gray-400'
      }`}>
        Estimates based on standard rates. Actual savings depend on individual circumstances.
      </p>
    </div>
  )
}
