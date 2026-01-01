'use client'

import { useState, useEffect } from 'react'

interface CookieBannerProps {
  theme: 'light' | 'dark'
}

export default function CookieBanner({ theme }: CookieBannerProps) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShow(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setShow(false)
  }

  if (!show) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className={`max-w-7xl mx-auto p-6 rounded-2xl shadow-2xl ${
        theme === 'dark'
          ? 'bg-[#12141C] border border-white/10'
          : 'bg-white border border-gray-200'
      }`}>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className={`text-sm ${
            theme === 'dark' ? 'text-white/80' : 'text-gray-700'
          }`}>
            Utilizamos cookies para melhorar a sua experiência. Ao continuar, aceita a nossa política de privacidade.
          </p>
          <button
            onClick={acceptCookies}
            className="px-6 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold text-sm hover:shadow-lg transition-all whitespace-nowrap"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  )
}
