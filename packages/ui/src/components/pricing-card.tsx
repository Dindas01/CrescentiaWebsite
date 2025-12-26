'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { cn } from '../utils/cn'
import { Button } from './button'

export interface PricingCardProps {
  name: string
  price: string
  currency?: string
  period?: string
  description: string
  features: string[]
  highlighted?: boolean
  buttonText?: string
  onButtonClick?: () => void
  className?: string
}

export const PricingCard: React.FC<PricingCardProps> = ({
  name,
  price,
  currency = '€',
  period = '',
  description,
  features,
  highlighted = false,
  buttonText = 'Get Started',
  onButtonClick,
  className,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: -4 }}
      className={cn(
        'relative rounded-3xl p-10 h-full group',
        'border transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]',
        highlighted
          ? 'border border-yellow-500/30 bg-white-100/5 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.12),0_1px_3px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_32px_rgba(245,207,0,0.15),0_2px_6px_rgba(0,0,0,0.1)]'
          : 'border-white-100/8 bg-white-100/3 backdrop-blur-xl hover:border-white-100/20 hover:bg-white-100/5 shadow-[0_4px_24px_rgba(0,0,0,0.12),0_1px_3px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.15),0_2px_6px_rgba(0,0,0,0.1)]',
        className
      )}
    >
      {/* Subtle gradient overlay */}
      <div className={cn(
        "absolute inset-0 rounded-3xl bg-gradient-to-br from-yellow-500/0 via-transparent to-transparent transition-opacity duration-500",
        highlighted ? "opacity-5" : "opacity-0 group-hover:opacity-3"
      )} />

      {highlighted && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
          <span className="bg-yellow-500 text-dark-500 px-5 py-2 rounded-full text-xs font-semibold tracking-wide shadow-lg uppercase">
            Most Popular
          </span>
        </div>
      )}

      <div className="relative flex flex-col h-full">
        {/* Header */}
        <div className="mb-8">
          <h3 className="text-3xl font-bold text-white-100 mb-3 tracking-tight">{name}</h3>
          <p className="text-white-100/60 font-light leading-relaxed">{description}</p>
        </div>

        {/* Price */}
        <div className="mb-10">
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-semibold text-white-100/90">{currency}</span>
            <span className="text-6xl font-bold text-white-100 tracking-tight">{price}</span>
          </div>
          {period && (
            <p className="text-white-100/50 mt-2 font-light">{period}</p>
          )}
        </div>

        {/* Features */}
        <ul className="space-y-5 mb-10 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3.5">
              <svg
                className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-white-100/70 font-light leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Button
          variant={highlighted ? 'primary' : 'secondary'}
          size="lg"
          fullWidth
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      </div>
    </motion.div>
  )
}

PricingCard.displayName = 'PricingCard'
