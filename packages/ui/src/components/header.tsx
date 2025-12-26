'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { cn } from '../utils/cn'
import { Button } from './button'
import Image from 'next/image'

export interface HeaderProps {
  logo?: string
  logoAlt?: string
  links?: { label: string; href: string }[]
  ctaText?: string
  onCtaClick?: () => void
  className?: string
}

export const Header: React.FC<HeaderProps> = ({
  logo,
  logoAlt = 'Logo',
  links = [],
  ctaText = 'Get Started',
  onCtaClick,
  className,
}) => {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]',
        isScrolled
          ? 'bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white-100/10 py-4'
          : 'bg-transparent border-b border-white-100/0 py-6',
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            {logo ? (
              <Image
                src={logo}
                alt={logoAlt}
                width={180}
                height={40}
                className="h-7 w-auto brightness-100"
              />
            ) : (
              <span className="text-xl font-semibold text-white-100 tracking-tight">
                Crescentia
              </span>
            )}
          </div>

          {/* Navigation Links - Apple style */}
          {links.length > 0 && (
            <nav className="hidden md:flex items-center gap-10">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-sm font-light text-white-100/70 hover:text-white-100 transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          )}

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <Button
              variant="secondary"
              size="sm"
              onClick={onCtaClick}
            >
              {ctaText}
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  )
}

Header.displayName = 'Header'
