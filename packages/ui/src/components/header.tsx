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
      transition={{ duration: 0.5 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white-100/70 backdrop-blur-xl border-b border-white-100/20 shadow-lg shadow-dark-500/5 py-4'
          : 'bg-dark-500/30 backdrop-blur-md border-b border-white-100/10 py-6',
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            {logo ? (
              <Image
                src={logo}
                alt={logoAlt}
                width={180}
                height={40}
                className={cn(
                  "h-8 w-auto transition-all duration-300",
                  isScrolled ? "brightness-0" : "brightness-100"
                )}
              />
            ) : (
              <span className={cn(
                "text-2xl font-bold transition-colors duration-300",
                isScrolled ? "text-dark-500" : "text-white-100"
              )}>
                Crescentia
              </span>
            )}
          </div>

          {/* Navigation Links */}
          {links.length > 0 && (
            <nav className="hidden md:flex items-center gap-8">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={cn(
                    "font-medium transition-colors duration-300",
                    isScrolled
                      ? "text-dark-400 hover:text-yellow-500"
                      : "text-white-200 hover:text-yellow-500"
                  )}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          )}

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <Button
              variant="primary"
              size="md"
              onClick={onCtaClick}
              className="shadow-lg hover:shadow-xl transition-shadow"
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
