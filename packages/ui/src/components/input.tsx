'use client'

import * as React from 'react'
import { cn } from '../utils/cn'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
  fullWidth?: boolean
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      fullWidth = false,
      className,
      type = 'text',
      ...props
    },
    ref
  ) => {
    const inputId = React.useId()

    return (
      <div className={cn('flex flex-col gap-1.5', fullWidth && 'w-full')}>
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-dark-500"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          type={type}
          className={cn(
            'px-4 py-2.5 rounded-lg border-2',
            'bg-white-100 text-dark-500',
            'placeholder:text-dark-200',
            'transition-all duration-200',
            'focus:outline-none focus:ring-2',
            error
              ? 'border-error focus:border-error focus:ring-error/20'
              : 'border-dark-100 focus:border-yellow-500 focus:ring-yellow-500/20',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            fullWidth && 'w-full',
            className
          )}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={
            error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined
          }
          {...props}
        />
        {error && (
          <span
            id={`${inputId}-error`}
            className="text-sm text-error font-medium"
          >
            {error}
          </span>
        )}
        {!error && helperText && (
          <span
            id={`${inputId}-helper`}
            className="text-sm text-dark-300"
          >
            {helperText}
          </span>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
