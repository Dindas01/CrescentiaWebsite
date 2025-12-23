'use client'

import * as React from 'react'
import { cn } from '../utils/cn'
import Image from 'next/image'

export interface FooterLink {
  label: string
  href: string
}

export interface FooterSection {
  title: string
  links: FooterLink[]
}

export interface FooterProps {
  logo?: string
  logoAlt?: string
  description?: string
  sections?: FooterSection[]
  copyright?: string
  className?: string
}

export const Footer: React.FC<FooterProps> = ({
  logo,
  logoAlt = 'Logo',
  description,
  sections = [],
  copyright,
  className,
}) => {
  return (
    <footer className={cn('bg-dark-500 text-white-100 py-12', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            {logo ? (
              <Image
                src={logo}
                alt={logoAlt}
                width={180}
                height={40}
                className="h-8 w-auto mb-4"
              />
            ) : (
              <h3 className="text-2xl font-bold text-yellow-500 mb-4">
                Crescentia
              </h3>
            )}
            {description && (
              <p className="text-white-300 max-w-md">{description}</p>
            )}
          </div>

          {/* Links Sections */}
          {sections.map((section, index) => (
            <div key={index}>
              <h4 className="font-bold mb-4 text-white-100">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-white-300 hover:text-yellow-500 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-white-100/10">
          <p className="text-white-300">
            {copyright || '© 2024 Crescentia. All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  )
}

Footer.displayName = 'Footer'
