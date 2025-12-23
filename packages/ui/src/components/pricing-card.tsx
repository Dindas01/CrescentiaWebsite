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
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className={cn(
        'relative rounded-3xl p-8 h-full group',
        'border transition-all duration-300',
        highlighted
          ? 'border-2 border-yellow-500 bg-gradient-to-br from-yellow-500/10 via-white-100/80 to-white-100/80 backdrop-blur-xl shadow-2xl shadow-yellow-500/20 scale-105'
          : 'border border-white-100/30 bg-white-100/60 backdrop-blur-lg hover:border-yellow-500/50 hover:shadow-2xl hover:bg-white-100/80',
        className
      )}
    >
      {/* Gradient overlay on hover */}
      <div className={cn(
        "absolute inset-0 rounded-3xl bg-gradient-to-br from-yellow-500/0 to-transparent transition-opacity duration-300",
        highlighted ? "opacity-100" : "opacity-0 group-hover:opacity-5"
      )} />

      {highlighted && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
          <span className="bg-yellow-500 text-dark-500 px-4 py-1 rounded-full text-sm font-bold shadow-lg">
            MOST POPULAR
          </span>
        </div>
      )}

      <div className="relative flex flex-col h-full">
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-dark-500 mb-2">{name}</h3>
          <p className="text-dark-300">{description}</p>
        </div>

        {/* Price */}
        <div className="mb-8">
          <div className="flex items-baseline gap-1">
            <span className="text-5xl font-bold text-dark-500">{currency}</span>
            <span className="text-6xl font-bold text-dark-500">{price}</span>
          </div>
          {period && (
            <p className="text-dark-300 mt-2">{period}</p>
          )}
        </div>

        {/* Features */}
        <ul className="space-y-4 mb-8 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <svg
                className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-dark-400">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Button
          variant={highlighted ? 'primary' : 'secondary'}
          size="lg"
          fullWidth
          onClick={onButtonClick}
          className="shadow-lg hover:shadow-xl"
        >
          {buttonText}
        </Button>
      </div>
    </motion.div>
  )
}

PricingCard.displayName = 'PricingCard'
