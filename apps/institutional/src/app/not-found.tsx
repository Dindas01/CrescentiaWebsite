'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function NotFound() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  useEffect(() => {
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setTheme(systemPrefersDark ? 'dark' : 'light')
  }, [])

  return (
    <div className={`min-h-screen flex items-center justify-center px-4 ${
      theme === 'dark' ? 'bg-[#0a0a0a]' : 'bg-[#fffdf7]'
    }`}>
      <div className="text-center max-w-2xl">
        <h1 className={`text-9xl font-bold mb-4 ${
          theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'
        }`}>
          404
        </h1>
        <h2 className={`text-3xl font-bold mb-4 ${
          theme === 'dark' ? 'text-white' : 'text-black'
        }`}>
          Página Não Encontrada
        </h2>
        <p className={`text-lg mb-8 ${
          theme === 'dark' ? 'text-white/70' : 'text-gray-700'
        }`}>
          A página que procura não existe ou foi movida.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold shadow-lg hover:shadow-xl transition-all"
        >
          Voltar ao Início
        </Link>
      </div>
    </div>
  )
}
