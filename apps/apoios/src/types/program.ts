export type ProgramStatus = 'open' | 'closed' | 'continuous'

export interface Program {
  id: string
  slug: string
  name: string
  tagline: string
  status: ProgramStatus
  minInvestment: number
  maxInvestment: number | null
  fundingRate: number
  fundingRateMax?: number // Para majorações
  territory: string
  deadline: string | null
  description: string[]
  eligibility: EligibilityItem[]
  sectors: ProgramSector[]
  timeline: TimelineStep[]
  faq: FAQItem[]
  relatedPrograms: string[]
  benefits: string[]
  restrictions: string[]
}

export interface EligibilityItem {
  type: 'required' | 'excluded'
  text: string
}

export interface ProgramSector {
  name: string
  icon: string
  rangeMin: number
  rangeMax: number
  examples: string[]
}

export interface TimelineStep {
  number: number
  title: string
  description: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface ProgramFilter {
  status?: ProgramStatus[]
  minInvestment?: number
  maxInvestment?: number
  territory?: string[]
  search?: string
}
