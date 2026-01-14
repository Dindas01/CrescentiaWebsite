import { Program } from '@/types/program'

export const programs: Program[] = [
  {
    id: 'qualificacao-pme',
    slug: 'qualificacao-pme',
    name: 'Qualificação das PME',
    tagline: 'Até 50% do investimento a fundo perdido para transformação digital e inovação',
    status: 'open',
    minInvestment: 100000,
    maxInvestment: null,
    fundingRate: 50,
    fundingRateMax: 65,
    territory: 'Portugal Continental',
    deadline: null,
    description: [
      'O programa Qualificação das PME apoia investimentos em inovação organizacional, digitalização, desenvolvimento de produtos e processos, e sustentabilidade empresarial.',
      'Destina-se a pequenas e médias empresas que pretendam melhorar a sua competitividade através de investimentos não produtivos focados na qualificação da gestão e dos processos.',
      'Financia despesas com consultoria especializada, software de gestão, certificações, registo de propriedade industrial, e contratação de recursos altamente qualificados.'
    ],
    eligibility: [
      { type: 'required', text: 'PME (menos de 250 colaboradores)' },
      { type: 'required', text: 'Volume de negócios inferior a 50M€' },
      { type: 'required', text: 'Situação fiscal e Segurança Social regularizada' },
      { type: 'required', text: 'Contabilidade organizada' },
      { type: 'excluded', text: 'Empresas em situação de dificuldade' },
      { type: 'excluded', text: 'Empresas com dívidas ao Estado' },
    ],
    benefits: [
      'Taxa base de 50% a fundo perdido',
      'Majoração de 10% em territórios de baixa densidade',
      'Majoração de 5% para gestão jovem ou feminina',
      'Possibilidade de contratar até 2 recursos qualificados',
      'Sem limite máximo de investimento'
    ],
    restrictions: [
      'Obras de construção civil não são elegíveis',
      'Equipamento em segunda mão não é financiado',
      'IVA recuperável não é elegível',
      'Despesas antes da submissão não contam',
      'Investimento mínimo de 100.000€'
    ],
    sectors: [
      {
        name: 'Indústria',
        icon: '🏭',
        rangeMin: 200000,
        rangeMax: 500000,
        examples: [
          'Sistemas MES (Manufacturing Execution System)',
          'ERP industrial',
          'IoT e sensores de produção',
          'Certificações ISO 9001, 14001, 45001'
        ]
      },
      {
        name: 'Comércio',
        icon: '🛒',
        rangeMin: 100000,
        rangeMax: 300000,
        examples: [
          'Plataforma e-commerce',
          'CRM e automação de marketing',
          'Sistema de gestão omnichannel',
          'Design de marca e identidade'
        ]
      },
      {
        name: 'Tecnologia',
        icon: '💻',
        rangeMin: 150000,
        rangeMax: 400000,
        examples: [
          'Desenvolvimento de produto digital',
          'Registo de patentes e marcas',
          'Infraestrutura de cibersegurança',
          'Consultoria em I&D'
        ]
      },
      {
        name: 'Turismo',
        icon: '🏨',
        rangeMin: 120000,
        rangeMax: 350000,
        examples: [
          'PMS e channel manager',
          'Sistema de reservas online',
          'Certificações de sustentabilidade',
          'Estratégia de marketing digital'
        ]
      }
    ],
    timeline: [
      {
        number: 1,
        title: 'Análise Preliminar',
        description: 'Validamos a elegibilidade da sua empresa e do investimento planeado. Identificamos o programa mais adequado e estimamos a taxa de financiamento.',
        duration: '1-2 semanas'
      },
      {
        number: 2,
        title: 'Preparação da Candidatura',
        description: 'Reunimos documentação societária, orçamentos detalhados, preparamos business plan e formulário de candidatura completo.',
        duration: '3-4 semanas'
      },
      {
        number: 3,
        title: 'Submissão',
        description: 'Submetemos a candidatura na plataforma oficial do Portugal 2030. Garantimos que todos os documentos estão corretos.',
        duration: '1-2 dias'
      },
      {
        number: 4,
        title: 'Análise da Candidatura',
        description: 'A entidade gestora analisa tecnicamente e financeiramente o projeto. Podemos ser contactados para esclarecimentos.',
        duration: '60-90 dias'
      },
      {
        number: 5,
        title: 'Aprovação e Contratação',
        description: 'Após aprovação, assinamos o contrato de financiamento e podemos iniciar a execução do investimento.',
        duration: '2-4 semanas'
      },
      {
        number: 6,
        title: 'Execução do Projeto',
        description: 'Realizamos o investimento aprovado, organizando todos os comprovativos de despesa para posterior reembolso.',
        duration: '24 meses'
      },
      {
        number: 7,
        title: 'Pedido de Reembolso',
        description: 'Submetemos o pedido de reembolso com todos os comprovativos. A entidade gestora valida e processa o pagamento.',
        duration: '6-12 meses'
      }
    ],
    faq: [
      {
        question: 'Posso candidatar-me se já tiver começado o investimento?',
        answer: 'Não. Apenas despesas realizadas após a data de submissão da candidatura são elegíveis. Começar antes resulta em perda total de elegibilidade dessa despesa.'
      },
      {
        question: 'O apoio é pago adiantado?',
        answer: 'Não. O apoio funciona por reembolso. Primeiro executa o investimento, depois submete os comprovativos e recebe o reembolso. O prazo típico é de 6-12 meses após conclusão do projeto.'
      },
      {
        question: 'Posso contratar recursos humanos com este programa?',
        answer: 'Sim, mas com limites. Pode contratar até 2 recursos altamente qualificados (mestrado ou superior), com custo máximo de 2.250€/mês cada, por um período máximo de 24 meses.'
      },
      {
        question: 'Software em cloud (SaaS) é elegível?',
        answer: 'Depende. Apenas são elegíveis despesas capitalizáveis. Licenças perpétuas sim, mas subscrições mensais tipo SaaS geralmente não são aceites. Avaliamos caso a caso.'
      },
      {
        question: 'Quanto tempo demora todo o processo?',
        answer: 'Desde a candidatura até receber o reembolso: aproximadamente 3 anos. Preparação (1 mês) + Análise (3 meses) + Execução (24 meses) + Reembolso (6-12 meses).'
      },
      {
        question: 'Preciso de comparticipação financeira própria?',
        answer: 'Sim. O apoio cobre 50-65% do investimento. Os restantes 35-50% têm de ser assegurados pela empresa com fundos próprios ou financiamento bancário.'
      }
    ],
    relatedPrograms: ['internacionalizacao-pme', 'descarbonizacao']
  },
  {
    id: 'internacionalizacao-pme',
    slug: 'internacionalizacao-pme',
    name: 'Internacionalização das PME',
    tagline: 'Até 50% a fundo perdido para conquistar mercados internacionais',
    status: 'open',
    minInvestment: 75000,
    maxInvestment: 1000000,
    fundingRate: 50,
    fundingRateMax: 65,
    territory: 'Portugal Continental',
    deadline: null,
    description: [
      'O programa Internacionalização das PME apoia investimentos que promovam a presença e competitividade das empresas portuguesas em mercados externos.',
      'Financia ações de prospeção de mercados, participação em feiras internacionais, certificações para exportação, desenvolvimento de plataformas e-commerce, e criação de estruturas comerciais no exterior.',
      'Ideal para empresas que pretendem diversificar mercados, aumentar volume de exportações ou estabelecer presença comercial permanente em outros países.'
    ],
    eligibility: [
      { type: 'required', text: 'PME com atividade exportadora ou potencial exportador' },
      { type: 'required', text: 'Volume de negócios inferior a 50M€' },
      { type: 'required', text: 'Plano de internacionalização estruturado' },
      { type: 'required', text: 'Situação fiscal regularizada' },
      { type: 'excluded', text: 'Empresas em situação de dificuldade' },
      { type: 'excluded', text: 'Projetos sem componente de exportação clara' },
    ],
    benefits: [
      'Taxa base de 50% a fundo perdido',
      'Majoração de 10% em baixa densidade',
      'Majoração de 5% para jovens empresários',
      'Apoio a missões empresariais',
      'Financiamento de certificações internacionais'
    ],
    restrictions: [
      'Investimento mínimo de 75.000€',
      'Investimento máximo de 1.000.000€',
      'Apenas mercados fora de Portugal',
      'Despesas de deslocação limitadas a 10% do projeto',
      'Feiras apenas se tiverem stand próprio'
    ],
    sectors: [
      {
        name: 'Indústria',
        icon: '🏭',
        rangeMin: 150000,
        rangeMax: 500000,
        examples: [
          'Certificações CE, FDA, ISO para exportação',
          'Adaptação de produto a normas internacionais',
          'Criação de filial comercial',
          'Plataforma B2B internacional'
        ]
      },
      {
        name: 'Tecnologia',
        icon: '💻',
        rangeMin: 100000,
        rangeMax: 400000,
        examples: [
          'Localização de software',
          'Certificações internacionais',
          'Estrutura de vendas internacional',
          'Marketing digital em mercados-alvo'
        ]
      },
      {
        name: 'Agroalimentar',
        icon: '🌾',
        rangeMin: 75000,
        rangeMax: 300000,
        examples: [
          'Certificações BIO/Organic internacionais',
          'Participação em feiras alimentares',
          'Desenvolvimento de embalagem para export',
          'Prospeção de distribuidores'
        ]
      },
      {
        name: 'Moda & Design',
        icon: '👔',
        rangeMin: 80000,
        rangeMax: 250000,
        examples: [
          'Showrooms em capitais europeias',
          'Participação em fashion weeks',
          'E-commerce multilingue',
          'Representação comercial internacional'
        ]
      }
    ],
    timeline: [
      {
        number: 1,
        title: 'Análise de Mercados',
        description: 'Identificamos mercados-alvo prioritários e validamos potencial exportador da empresa.',
        duration: '1-2 semanas'
      },
      {
        number: 2,
        title: 'Plano de Internacionalização',
        description: 'Desenvolvemos estratégia de entrada nos mercados, com ações concretas e investimentos necessários.',
        duration: '3-4 semanas'
      },
      {
        number: 3,
        title: 'Preparação e Submissão',
        description: 'Preparamos candidatura com business plan de internacionalização e documentação de suporte.',
        duration: '2-3 semanas'
      },
      {
        number: 4,
        title: 'Análise',
        description: 'Entidade gestora avalia viabilidade do plano de internacionalização e coerência do investimento.',
        duration: '60-90 dias'
      },
      {
        number: 5,
        title: 'Execução',
        description: 'Implementação das ações de internacionalização aprovadas.',
        duration: '24 meses'
      },
      {
        number: 6,
        title: 'Reembolso',
        description: 'Submissão de comprovativos e processamento de reembolso.',
        duration: '6-12 meses'
      }
    ],
    faq: [
      {
        question: 'Posso usar para criar um e-commerce internacional?',
        answer: 'Sim, desde que seja claramente orientado para mercados de exportação e faça parte de um plano de internacionalização estruturado.'
      },
      {
        question: 'Participação em feiras é financiada?',
        answer: 'Sim, mas apenas se tiver stand próprio e for feira internacional relevante para o setor. Despesas de deslocação e alojamento têm limites.'
      },
      {
        question: 'Posso abrir escritório no estrangeiro?',
        answer: 'Sim, despesas de constituição de estrutura comercial no exterior são elegíveis, incluindo custos legais e comerciais iniciais.'
      },
      {
        question: 'Marketing digital internacional é elegível?',
        answer: 'Sim, ações de marketing e comunicação dirigidas a mercados externos são elegíveis, incluindo websites multilingues, SEO internacional e campanhas digitais.'
      }
    ],
    relatedPrograms: ['qualificacao-pme', 'descarbonizacao']
  },
  {
    id: 'descarbonizacao',
    slug: 'descarbonizacao',
    name: 'Descarbonização da Indústria',
    tagline: 'Até 65% de apoio para transição energética e redução de emissões',
    status: 'open',
    minInvestment: 500000,
    maxInvestment: 15000000,
    fundingRate: 50,
    fundingRateMax: 65,
    territory: 'Portugal Continental',
    deadline: null,
    description: [
      'O programa de Descarbonização apoia investimentos empresariais que contribuam para a neutralidade carbónica, eficiência energética e economia circular.',
      'Financia projetos de produção de energia renovável para autoconsumo, eficiência energética industrial, substituição de combustíveis fósseis, e processos de economia circular.',
      'Dirigido principalmente a empresas industriais com elevado consumo energético ou com potencial significativo de redução de emissões de CO2.'
    ],
    eligibility: [
      { type: 'required', text: 'Empresa industrial ou similares' },
      { type: 'required', text: 'Diagnóstico energético prévio' },
      { type: 'required', text: 'Meta quantificável de redução de emissões' },
      { type: 'required', text: 'Investimento mínimo de 500.000€' },
      { type: 'excluded', text: 'Projetos sem impacto ambiental mensurável' },
      { type: 'excluded', text: 'Empresas do setor energético (produção/distribuição)' },
    ],
    benefits: [
      'Taxa base de 50% a fundo perdido',
      'Majoração até 65% para projetos com alto impacto',
      'Investimentos até 15M€',
      'Apoio a auditorias energéticas',
      'Acompanhamento técnico especializado'
    ],
    restrictions: [
      'Investimento mínimo de 500.000€',
      'Investimento máximo de 15.000.000€',
      'Redução mínima de emissões de 20%',
      'Auditoria energética obrigatória',
      'Compromisso de monitorização de 5 anos'
    ],
    sectors: [
      {
        name: 'Indústria Pesada',
        icon: '🏭',
        rangeMin: 2000000,
        rangeMax: 10000000,
        examples: [
          'Fornos elétricos',
          'Cogeração',
          'Captura de CO2',
          'Caldeiras de biomassa'
        ]
      },
      {
        name: 'Têxtil e Calçado',
        icon: '👕',
        rangeMin: 500000,
        rangeMax: 3000000,
        examples: [
          'Máquinas eficientes',
          'Painéis solares',
          'Tratamento de efluentes',
          'Reciclagem de água'
        ]
      },
      {
        name: 'Alimentar',
        icon: '🍎',
        rangeMin: 750000,
        rangeMax: 5000000,
        examples: [
          'Sistemas de refrigeração eficientes',
          'Energia solar térmica',
          'Aproveitamento de resíduos orgânicos',
          'Embalagens sustentáveis'
        ]
      },
      {
        name: 'Química e Plásticos',
        icon: '⚗️',
        rangeMin: 1000000,
        rangeMax: 8000000,
        examples: [
          'Processos de reciclagem',
          'Substituição de matérias-primas',
          'Eficiência energética de processos',
          'Economia circular'
        ]
      }
    ],
    timeline: [
      {
        number: 1,
        title: 'Diagnóstico Energético',
        description: 'Realização de auditoria energética certificada para identificar potencial de redução de emissões.',
        duration: '4-6 semanas'
      },
      {
        number: 2,
        title: 'Projeto de Descarbonização',
        description: 'Desenvolvimento de projeto técnico detalhado com metas de redução de CO2 e investimentos necessários.',
        duration: '6-8 semanas'
      },
      {
        number: 3,
        title: 'Submissão',
        description: 'Preparação e submissão de candidatura com todos os elementos técnicos e financeiros.',
        duration: '2-3 semanas'
      },
      {
        number: 4,
        title: 'Análise Técnica',
        description: 'Avaliação por peritos em energia e ambiente. Pode haver pedidos de esclarecimento.',
        duration: '90-120 dias'
      },
      {
        number: 5,
        title: 'Implementação',
        description: 'Execução do projeto de descarbonização com acompanhamento técnico.',
        duration: '18-36 meses'
      },
      {
        number: 6,
        title: 'Monitorização',
        description: 'Verificação de cumprimento de metas e processamento de reembolsos.',
        duration: '6-12 meses'
      }
    ],
    faq: [
      {
        question: 'Preciso de ter auditoria energética para me candidatar?',
        answer: 'Sim, é obrigatório ter um diagnóstico energético certificado realizado nos últimos 2 anos. Este identifica as oportunidades de melhoria.'
      },
      {
        question: 'Painéis solares para autoconsumo são elegíveis?',
        answer: 'Sim, instalação de painéis fotovoltaicos para autoconsumo é elegível, desde que integrado num projeto mais amplo de descarbonização.'
      },
      {
        question: 'Como é medida a redução de emissões?',
        answer: 'Através de metodologia certificada baseada em consumos energéticos antes/depois. É obrigatório monitorizar e reportar durante 5 anos.'
      },
      {
        question: 'Posso financiar veículos elétricos para a empresa?',
        answer: 'Veículos ligeiros não são elegíveis. Apenas veículos pesados (camiões, empilhadores, máquinas) usados em processo produtivo podem ser apoiados.'
      }
    ],
    relatedPrograms: ['qualificacao-pme', 'internacionalizacao-pme']
  }
]

export function getProgramBySlug(slug: string): Program | undefined {
  return programs.find(p => p.slug === slug)
}

export function getRelatedPrograms(programId: string): Program[] {
  const program = programs.find(p => p.id === programId)
  if (!program) return []

  return programs.filter(p => program.relatedPrograms.includes(p.id))
}
