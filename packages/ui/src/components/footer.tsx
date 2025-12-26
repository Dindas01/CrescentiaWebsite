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
    <footer className={cn('bg-[#0a0a0a] border-t border-white-100/5 text-white-100 py-20', className)}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            {logo ? (
              <Image
                src={logo}
                alt={logoAlt}
                width={180}
                height={40}
                className="h-7 w-auto mb-6"
              />
            ) : (
              <h3 className="text-xl font-semibold text-white-100 mb-6 tracking-tight">
                Crescentia
              </h3>
            )}
            {description && (
              <p className="text-white-100/50 max-w-md font-light leading-relaxed text-sm">{description}</p>
            )}
          </div>

          {/* Links Sections */}
          {sections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-5 text-white-100 text-sm tracking-wide">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-white-100/50 hover:text-white-100 transition-colors duration-300 text-sm font-light"
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
        <div className="pt-8 border-t border-white-100/5">
          <p className="text-white-100/40 text-xs font-light">
            {copyright || '© 2024 Crescentia. All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  )
}

Footer.displayName = 'Footer'
