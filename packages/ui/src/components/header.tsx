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
          ? 'bg-white-100/95 backdrop-blur-sm shadow-md py-4'
          : 'bg-transparent py-6',
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
                className="h-8 w-auto"
              />
            ) : (
              <span className="text-2xl font-bold text-dark-500">
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
                  className="text-dark-400 hover:text-yellow-500 transition-colors font-medium"
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
