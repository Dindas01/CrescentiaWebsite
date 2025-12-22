'use client'

import * as React from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { cn } from '../utils/cn'

export interface CardProps extends HTMLMotionProps<'div'> {
  variant?: 'default' | 'bordered' | 'elevated'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

const variantStyles = {
  default: 'bg-white-100 border border-dark-100',
  bordered: 'bg-white-100 border-2 border-dark-500',
  elevated: 'bg-white-100 shadow-lg shadow-dark-500/10',
}

const paddingStyles = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = 'default',
      padding = 'md',
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          'rounded-xl',
          'transition-all duration-200',
          variantStyles[variant],
          paddingStyles[padding],
          className
        )}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

Card.displayName = 'Card'

// Card sub-components
export const CardHeader = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex flex-col gap-1.5 mb-4', className)} {...props}>
    {children}
  </div>
)

CardHeader.displayName = 'CardHeader'

export const CardTitle = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3
    className={cn('text-2xl font-bold text-dark-500', className)}
    {...props}
  >
    {children}
  </h3>
)

CardTitle.displayName = 'CardTitle'

export const CardDescription = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={cn('text-sm text-dark-300', className)} {...props}>
    {children}
  </p>
)

CardDescription.displayName = 'CardDescription'

export const CardContent = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('', className)} {...props}>
    {children}
  </div>
)

CardContent.displayName = 'CardContent'

export const CardFooter = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex items-center gap-4 mt-4', className)} {...props}>
    {children}
  </div>
)

CardFooter.displayName = 'CardFooter'
