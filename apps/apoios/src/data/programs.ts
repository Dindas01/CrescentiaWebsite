import { Program } from '@/types/program'

export const programs: Program[] = [
  {
    id: 'ia-nas-pme',
    slug: 'ia-nas-pme',
    name: 'IA nas PME',
    tagline: 'Até 75% de apoio para adoção de Inteligência Artificial',
    status: 'closed',
    minInvestment: 5000,
    maxInvestment: 200000,
    fundingRate: 75,
    fundingRateMax: 75,
    territory: 'Portugal Continental',
    deadline: 'Última fase: 28/11/2025',
    description: [
      'Apoio à adoção de soluções de inteligência artificial por PME para otimização de processos, aumento de eficiência operacional e integração de tecnologias digitais avançadas.',
      'Novo programa PRR focado exclusivamente em IA, respondendo às necessidades emergentes das empresas portuguesas na transformação digital através de tecnologias de machine learning, processamento de linguagem natural e automação inteligente.',
      'Investimentos elegíveis incluem implementação de sistemas de IA, formação de equipas, consultoria especializada e infraestrutura tecnológica necessária para suportar soluções de inteligência artificial.'
    ],
    eligibility: [
      { type: 'required', text: 'PME (menos de 250 colaboradores)' },
      { type: 'required', text: 'Volume de negócios inferior a 50M€' },
      { type: 'required', text: 'Projeto com componente clara de IA' },
      { type: 'required', text: 'Situação fiscal regularizada' },
      { type: 'excluded', text: 'Empresas em situação de dificuldade' },
      { type: 'excluded', text: 'Projetos sem implementação prática de IA' },
    ],
    benefits: [
      'Taxa de 75% a fundo perdido',
      'Investimento entre 5k€ e 200k€',
      'Foco em IA e automação inteligente',
      'Consultoria e formação elegíveis',
      'Processo simplificado PRR'
    ],
    restrictions: [
      'Investimento mínimo de 5.000€',
      'Investimento máximo de 200.000€',
      'Apenas projetos com componente IA',
      'Despesas antes da submissão não elegíveis',
      'Fases de candidatura limitadas até 2026'
    ],
    sectors: [
      {
        name: 'Indústria',
        icon: '',
        rangeMin: 50000,
        rangeMax: 150000,
        examples: [
          'Visão computacional para controlo qualidade',
          'Manutenção preditiva com ML',
          'Otimização de produção com IA',
          'Robótica inteligente'
        ]
      },
      {
        name: 'Retalho',
        icon: '',
        rangeMin: 30000,
        rangeMax: 100000,
        examples: [
          'Sistemas de recomendação',
          'Previsão de procura com IA',
          'Chatbots inteligentes',
          'Análise de sentimento de clientes'
        ]
      },
      {
        name: 'Serviços',
        icon: '',
        rangeMin: 25000,
        rangeMax: 80000,
        examples: [
          'Automação de processos (RPA)',
          'Análise preditiva',
          'Assistentes virtuais',
          'Document AI'
        ]
      },
      {
        name: 'Tecnologia',
        icon: '',
        rangeMin: 40000,
        rangeMax: 200000,
        examples: [
          'Desenvolvimento de produtos com IA',
          'APIs de machine learning',
          'Processamento de linguagem natural',
          'Computer vision'
        ]
      }
    ],
    timeline: [
      {
        number: 1,
        title: 'Análise de Viabilidade',
        description: 'Avaliamos o potencial de implementação de IA na sua empresa e identificamos casos de uso prioritários.',
      },
      {
        number: 2,
        title: 'Preparação da Candidatura',
        description: 'Desenvolvemos o projeto de IA, reunimos orçamentos de fornecedores especializados e preparamos documentação.',
      },
      {
        number: 3,
        title: 'Submissão',
        description: 'Submetemos a candidatura na plataforma PRR dentro das fases disponíveis.',
      },
      {
        number: 4,
        title: 'Análise',
        description: 'Entidade gestora avalia tecnicamente o projeto de IA e a sua viabilidade de implementação.',
      },
      {
        number: 5,
        title: 'Implementação',
        description: 'Execução do projeto de IA com acompanhamento técnico especializado.',
      },
      {
        number: 6,
        title: 'Reembolso',
        description: 'Submissão de comprovativos e processamento do reembolso.',
      }
    ],
    faq: [
      {
        question: 'O que é considerado um projeto de IA?',
        answer: 'Projetos que implementam machine learning, processamento de linguagem natural, visão computacional, sistemas de recomendação, automação inteligente (RPA com IA) ou análise preditiva. Simples automação sem componente de aprendizagem não qualifica.'
      },
      {
        question: 'Preciso ter equipa técnica de IA?',
        answer: 'Não é obrigatório. Pode contratar consultoria externa especializada em IA e formação para a equipa interna. Estas despesas são elegíveis dentro do projeto.'
      },
      {
        question: 'Software SaaS de IA é elegível?',
        answer: 'Apenas licenças perpétuas ou subscrições capitalizáveis. Subscrições mensais tipo SaaS geralmente não são aceites. Implementações on-premise ou em cloud privada são preferíveis.'
      },
      {
        question: 'Quanto tempo tenho para implementar?',
        answer: 'O prazo típico de execução é 12-18 meses após aprovação. A implementação deve ser faseada com marcos de validação.'
      }
    ],
    relatedPrograms: ['inovacao-produtiva', 'qualificacao-pme']
  },
  {
    id: 'inovacao-produtiva',
    slug: 'inovacao-produtiva',
    name: 'Inovação Produtiva',
    tagline: 'Até 50% para produção de novos bens e serviços',
    status: 'open',
    minInvestment: 100000,
    maxInvestment: null,
    fundingRate: 50,
    fundingRateMax: 60,
    territory: 'Portugal Continental',
    deadline: 'Fase 2: 31/03/2026',
    description: [
      'Financiamento de operações de investimento em atividades inovadoras que contribuam para o desenvolvimento, diversificação e internacionalização das empresas portuguesas.',
      'Apoia projetos de produção de novos bens e serviços, implementação de novos processos de fabrico, sistemas de logística e distribuição inovadores, e novos modelos organizacionais.',
      'Um dos programas mais procurados em 2025, ideal para empresas que querem dar o salto para produção inovadora e diferenciação competitiva.'
    ],
    eligibility: [
      { type: 'required', text: 'PME com atividade produtiva' },
      { type: 'required', text: 'Investimento mínimo de 100.000€' },
      { type: 'required', text: 'Componente de inovação demonstrável' },
      { type: 'required', text: 'Situação fiscal regularizada' },
      { type: 'excluded', text: 'Empresas em dificuldade' },
      { type: 'excluded', text: 'Mera substituição de equipamentos' },
    ],
    benefits: [
      'Taxa base de 50% a fundo perdido',
      'Majoração de 10% em baixa densidade (até 60%)',
      'Sem limite máximo de investimento',
      'Equipamentos produtivos elegíveis',
      'Faseamento até março 2026'
    ],
    restrictions: [
      'Investimento mínimo de 100.000€',
      'Apenas investimentos produtivos inovadores',
      'Capital circulante não elegível',
      'Construção civil excluída',
      'Despesas pré-candidatura não contam'
    ],
    sectors: [
      {
        name: 'Indústria',
        icon: '',
        rangeMin: 200000,
        rangeMax: 1000000,
        examples: [
          'Linhas de produção inovadoras',
          'Equipamentos de fabrico avançado',
          'Sistemas de automação industrial',
          'Tecnologias Indústria 4.0'
        ]
      },
      {
        name: 'Agroalimentar',
        icon: '',
        rangeMin: 150000,
        rangeMax: 600000,
        examples: [
          'Unidades de transformação',
          'Sistemas de embalagem inovadores',
          'Rastreabilidade e qualidade',
          'Processos de conservação'
        ]
      },
      {
        name: 'Tecnologia',
        icon: '',
        rangeMin: 100000,
        rangeMax: 500000,
        examples: [
          'Laboratórios de desenvolvimento',
          'Infraestrutura de produção de software',
          'Equipamento de testing',
          'Ambiente de DevOps'
        ]
      },
      {
        name: 'Têxtil',
        icon: '',
        rangeMin: 180000,
        rangeMax: 800000,
        examples: [
          'Máquinas de confeção automáticas',
          'Sistemas de corte digital',
          'Impressão têxtil inovadora',
          'Acabamentos sustentáveis'
        ]
      }
    ],
    timeline: [
      {
        number: 1,
        title: 'Análise de Inovação',
        description: 'Validamos a componente inovadora do projeto e alinhamos com prioridades do programa.',
      },
      {
        number: 2,
        title: 'Projeto Técnico',
        description: 'Desenvolvemos projeto técnico detalhado, business plan e orçamentos de equipamentos.',
      },
      {
        number: 3,
        title: 'Submissão em Fase',
        description: 'Submetemos na Fase 1 (28/11/2025) ou Fase 2 (31/03/2026).',
      },
      {
        number: 4,
        title: 'Avaliação',
        description: 'Análise técnica e financeira. Pode haver pedidos de esclarecimento.',
      },
      {
        number: 5,
        title: 'Execução',
        description: 'Implementação do investimento produtivo com milestones de acompanhamento.',
      },
      {
        number: 6,
        title: 'Reembolso',
        description: 'Pedidos de reembolso faseados com comprovativos de despesa.',
      }
    ],
    faq: [
      {
        question: 'O que é considerado "inovação produtiva"?',
        answer: 'Novos produtos que não existiam antes na empresa, novos processos de fabrico mais eficientes, novos modelos de negócio ou organizacionais. Mera modernização de equipamentos não qualifica.'
      },
      {
        question: 'Posso candidatar equipamentos usados?',
        answer: 'Não. Apenas equipamentos novos são elegíveis. Equipamento em segunda mão está explicitamente excluído do programa.'
      },
      {
        question: 'Há limite de investimento?',
        answer: 'Apenas mínimo de 100.000€. Não há limite máximo, mas projetos muito grandes podem ter análise mais demorada.'
      },
      {
        question: 'Como provo a inovação?',
        answer: 'Através de comparação com práticas atuais, benchmarking setorial, pareceres técnicos e demonstração clara do diferencial inovador.'
      }
    ],
    relatedPrograms: ['qualificacao-pme', 'ia-nas-pme']
  },
  {
    id: 'qualificacao-pme',
    slug: 'qualificacao-pme',
    name: 'Qualificação das PME',
    tagline: 'Até 60% para transformação digital e inovação organizacional',
    status: 'continuous',
    minInvestment: 100000,
    maxInvestment: null,
    fundingRate: 50,
    fundingRateMax: 60,
    territory: 'Portugal Continental',
    deadline: null,
    description: [
      'Programa de abertura contínua para apoiar investimentos em inovação organizacional, digitalização, desenvolvimento de produtos, gestão e marca.',
      'Financia despesas com consultoria especializada, software de gestão, certificações, registo de propriedade industrial, e contratação de recursos altamente qualificados.',
      'Ideal para empresas que precisam de melhorar processos, implementar sistemas de gestão ou fortalecer a marca e produto.'
    ],
    eligibility: [
      { type: 'required', text: 'PME (menos de 250 colaboradores)' },
      { type: 'required', text: 'Volume de negócios inferior a 50M€' },
      { type: 'required', text: 'Situação fiscal e SS regularizada' },
      { type: 'required', text: 'Contabilidade organizada' },
      { type: 'excluded', text: 'Empresas em situação de dificuldade' },
      { type: 'excluded', text: 'Investimentos produtivos (usar outro programa)' },
    ],
    benefits: [
      'Taxa base de 50% a fundo perdido',
      'Majoração de 10% em baixa densidade',
      'Candidaturas em regime contínuo',
      'Contratação de até 2 recursos qualificados',
      'Software e consultoria elegíveis'
    ],
    restrictions: [
      'Investimento mínimo de 100.000€',
      'Equipamentos produtivos não elegíveis',
      'IVA recuperável excluído',
      'Obras de construção civil não elegíveis',
      'Despesas antes da candidatura não contam'
    ],
    sectors: [
      {
        name: 'Serviços',
        icon: '',
        rangeMin: 100000,
        rangeMax: 300000,
        examples: [
          'CRM e automação marketing',
          'Software de gestão de projetos',
          'Sistemas de faturação e contabilidade',
          'Consultoria em gestão'
        ]
      },
      {
        name: 'Comércio',
        icon: '',
        rangeMin: 120000,
        rangeMax: 350000,
        examples: [
          'Plataforma e-commerce',
          'Sistema omnichannel',
          'Rebranding e identidade',
          'CRM e loyalty'
        ]
      },
      {
        name: 'Tecnologia',
        icon: '',
        rangeMin: 150000,
        rangeMax: 400000,
        examples: [
          'Registo de patentes',
          'Certificações ISO',
          'Desenvolvimento de produto (não produtivo)',
          'Consultoria especializada'
        ]
      },
      {
        name: 'Turismo',
        icon: '',
        rangeMin: 110000,
        rangeMax: 280000,
        examples: [
          'PMS e channel manager',
          'Website e motor de reservas',
          'Sistema de gestão hoteleira',
          'Certificações de qualidade'
        ]
      }
    ],
    timeline: [
      {
        number: 1,
        title: 'Análise Preliminar',
        description: 'Validação de elegibilidade e identificação do programa mais adequado.',
      },
      {
        number: 2,
        title: 'Preparação',
        description: 'Business plan, orçamentos e documentação de candidatura.',
      },
      {
        number: 3,
        title: 'Submissão',
        description: 'Candidatura submetida em regime contínuo (sem prazos de fecho).',
      },
      {
        number: 4,
        title: 'Análise',
        description: 'Avaliação pela entidade gestora regional.',
      },
      {
        number: 5,
        title: 'Execução',
        description: 'Implementação do projeto com organização de comprovativos.',
      },
      {
        number: 6,
        title: 'Reembolso',
        description: 'Pedido de reembolso com comprovativos.',
      }
    ],
    faq: [
      {
        question: 'Qual a diferença para Inovação Produtiva?',
        answer: 'Qualificação PME é para investimentos não produtivos (gestão, marca, consultoria). Inovação Produtiva é para equipamentos e linhas de produção.'
      },
      {
        question: 'Posso contratar pessoas?',
        answer: 'Sim, até 2 recursos altamente qualificados (mestrado+), máximo 2.250€/mês cada, por 24 meses. Devem ser para funções técnicas especializadas.'
      },
      {
        question: 'Software SaaS é elegível?',
        answer: 'Apenas se for capitalizável. Licenças perpétuas sim, subscrições mensais geralmente não. Avaliamos caso a caso.'
      },
      {
        question: 'Há prazos de candidatura?',
        answer: 'Não, é regime contínuo. Pode candidatar a qualquer altura durante o ano, desde que haja orçamento disponível.'
      }
    ],
    relatedPrograms: ['inovacao-produtiva', 'internacionalizacao-pme']
  },
  {
    id: 'internacionalizacao-pme',
    slug: 'internacionalizacao-pme',
    name: 'Internacionalização das PME',
    tagline: 'Até 45% para conquistar mercados internacionais',
    status: 'continuous',
    minInvestment: 50000,
    maxInvestment: 3000000,
    fundingRate: 45,
    fundingRateMax: 45,
    territory: 'Portugal Continental',
    deadline: null,
    description: [
      'Apoio a investimentos que promovam a presença e competitividade das empresas portuguesas em mercados externos.',
      'Financia prospeção de mercados, participação em feiras internacionais, certificações para exportação, e-commerce internacional, e criação de estruturas comerciais no exterior.',
      'Programa contínuo ideal para empresas que querem diversificar mercados e aumentar o volume de exportações.'
    ],
    eligibility: [
      { type: 'required', text: 'PME com atividade exportadora ou potencial' },
      { type: 'required', text: 'Plano de internacionalização estruturado' },
      { type: 'required', text: 'Investimento mínimo de 50.000€' },
      { type: 'required', text: 'Situação fiscal regularizada' },
      { type: 'excluded', text: 'Empresas em dificuldade' },
      { type: 'excluded', text: 'Projetos sem componente exportação' },
    ],
    benefits: [
      'Taxa de 45% a fundo perdido',
      'Investimento de 50k€ a 3M€',
      'Abertura contínua',
      'Feiras e missões elegíveis',
      'E-commerce internacional apoiado'
    ],
    restrictions: [
      'Investimento mínimo de 50.000€',
      'Investimento máximo de 3.000.000€',
      'Apenas mercados fora de Portugal',
      'Deslocações limitadas a 10% do projeto',
      'Feiras: apenas com stand próprio'
    ],
    sectors: [
      {
        name: 'Indústria',
        icon: '',
        rangeMin: 150000,
        rangeMax: 1000000,
        examples: [
          'Certificações CE, FDA para export',
          'Adaptação de produto',
          'Filial comercial no estrangeiro',
          'Plataforma B2B internacional'
        ]
      },
      {
        name: 'Tecnologia',
        icon: '',
        rangeMin: 100000,
        rangeMax: 500000,
        examples: [
          'Localização de software',
          'Certificações internacionais',
          'Vendas internacionais',
          'Marketing em mercados-alvo'
        ]
      },
      {
        name: 'Agroalimentar',
        icon: '',
        rangeMin: 75000,
        rangeMax: 400000,
        examples: [
          'Certificações BIO/Organic',
          'Feiras alimentares internacionais',
          'Embalagem para export',
          'Prospeção de distribuidores'
        ]
      },
      {
        name: 'Moda',
        icon: '',
        rangeMin: 80000,
        rangeMax: 300000,
        examples: [
          'Showrooms em capitais',
          'Fashion weeks',
          'E-commerce multilingue',
          'Representação comercial'
        ]
      }
    ],
    timeline: [
      {
        number: 1,
        title: 'Análise de Mercados',
        description: 'Identificação de mercados-alvo e validação de potencial exportador.',
      },
      {
        number: 2,
        title: 'Plano de Internacionalização',
        description: 'Estratégia de entrada, ações concretas e investimentos necessários.',
      },
      {
        number: 3,
        title: 'Submissão',
        description: 'Candidatura com business plan de internacionalização.',
      },
      {
        number: 4,
        title: 'Análise',
        description: 'Avaliação da viabilidade do plano de internacionalização.',
      },
      {
        number: 5,
        title: 'Execução',
        description: 'Implementação das ações de internacionalização.',
      },
      {
        number: 6,
        title: 'Reembolso',
        description: 'Submissão de comprovativos e processamento.',
      }
    ],
    faq: [
      {
        question: 'Posso criar um e-commerce internacional?',
        answer: 'Sim, desde que seja orientado para mercados de exportação e faça parte de um plano de internacionalização estruturado. Website multilingue, payment gateways internacionais e logistics são elegíveis.'
      },
      {
        question: 'Participação em feiras é financiada?',
        answer: 'Sim, mas apenas com stand próprio em feiras internacionais relevantes. Despesas de deslocação e alojamento têm limites (máximo 10% do projeto total).'
      },
      {
        question: 'Posso abrir escritório no estrangeiro?',
        answer: 'Sim, constituição de estrutura comercial no exterior é elegível, incluindo custos legais, comerciais iniciais e marketing local.'
      },
      {
        question: 'Marketing digital internacional é elegível?',
        answer: 'Sim, ações dirigidas a mercados externos: websites multilingues, SEO internacional, campanhas Google Ads/Meta em mercados-alvo, tradução de conteúdos.'
      }
    ],
    relatedPrograms: ['qualificacao-pme', 'inovacao-produtiva']
  },
  {
    id: 'economia-circular',
    slug: 'economia-circular',
    name: 'Economia Circular',
    tagline: 'Até 50% para sustentabilidade e gestão de resíduos',
    status: 'closed',
    minInvestment: 100000,
    maxInvestment: null,
    fundingRate: 50,
    fundingRateMax: 50,
    territory: 'Portugal Continental',
    deadline: 'Norte: 31/03/2025 | Centro: 30/04/2025',
    description: [
      'Apoio a investimentos que promovam a transição para modelos de economia circular, incluindo prevenção e gestão de resíduos, eficiência de recursos e valorização de subprodutos.',
      'Financia projetos de reciclagem, reutilização de materiais, simbiose industrial, ecodesign de produtos e processos de produção circular.',
      'Prioridade para projetos com impacto ambiental mensurável e contributo para a circularidade da economia portuguesa.'
    ],
    eligibility: [
      { type: 'required', text: 'PME com projeto de economia circular' },
      { type: 'required', text: 'Impacto ambiental mensurável' },
      { type: 'required', text: 'Investimento mínimo de 100.000€' },
      { type: 'required', text: 'Situação fiscal regularizada' },
      { type: 'excluded', text: 'Empresas em dificuldade' },
      { type: 'excluded', text: 'Projetos sem componente circular' },
    ],
    benefits: [
      'Taxa de 50% a fundo perdido',
      'Foco em sustentabilidade e ESG',
      'Reciclagem e valorização de resíduos',
      'Simbiose industrial apoiada',
      'Certificações ambientais elegíveis'
    ],
    restrictions: [
      'Investimento mínimo de 100.000€',
      'Apenas projetos com impacto circular',
      'Prazos regionais (Norte: 31/03, Centro: 30/04)',
      'Impacto ambiental deve ser quantificável',
      'Resíduos perigosos têm regras específicas'
    ],
    sectors: [
      {
        name: 'Indústria',
        icon: '',
        rangeMin: 200000,
        rangeMax: 800000,
        examples: [
          'Sistemas de reciclagem de resíduos',
          'Valorização de subprodutos',
          'Ecodesign de processos',
          'Simbiose industrial'
        ]
      },
      {
        name: 'Têxtil',
        icon: '',
        rangeMin: 150000,
        rangeMax: 500000,
        examples: [
          'Reciclagem de têxteis',
          'Fibras recicladas',
          'Tratamento de efluentes',
          'Upcycling de materiais'
        ]
      },
      {
        name: 'Embalagem',
        icon: '',
        rangeMin: 180000,
        rangeMax: 600000,
        examples: [
          'Embalagens recicláveis',
          'Redução de plástico',
          'Materiais biodegradáveis',
          'Design circular'
        ]
      },
      {
        name: 'Agroalimentar',
        icon: '',
        rangeMin: 120000,
        rangeMax: 450000,
        examples: [
          'Aproveitamento de resíduos orgânicos',
          'Compostagem industrial',
          'Embalagens sustentáveis',
          'Redução de desperdício'
        ]
      }
    ],
    timeline: [
      {
        number: 1,
        title: 'Diagnóstico Ambiental',
        description: 'Avaliação do potencial de circularidade e identificação de oportunidades.',
      },
      {
        number: 2,
        title: 'Projeto de Economia Circular',
        description: 'Desenvolvimento de projeto técnico com metas de impacto ambiental.',
      },
      {
        number: 3,
        title: 'Submissão Regional',
        description: 'Candidatura submetida na região (Norte ou Centro) dentro do prazo.',
      },
      {
        number: 4,
        title: 'Avaliação Técnica',
        description: 'Análise por peritos em ambiente e circularidade.',
      },
      {
        number: 5,
        title: 'Implementação',
        description: 'Execução do projeto circular com monitorização de KPIs ambientais.',
      },
      {
        number: 6,
        title: 'Reembolso',
        description: 'Submissão de comprovativos e verificação de metas.',
      }
    ],
    faq: [
      {
        question: 'O que é economia circular?',
        answer: 'Modelo económico que mantém recursos em uso pelo máximo tempo possível, extraindo valor máximo durante uso e recuperando produtos/materiais no fim de vida. Contrasta com modelo linear (extrair-produzir-descartar).'
      },
      {
        question: 'Como medir o impacto circular?',
        answer: 'Através de indicadores como taxa de reciclagem, redução de resíduos, aproveitamento de subprodutos, eficiência de recursos e pegada de carbono. Metodologia deve ser definida no projeto.'
      },
      {
        question: 'Certificações são elegíveis?',
        answer: 'Sim, certificações ambientais (ISO 14001, Ecolabel, Cradle to Cradle, etc.) são elegíveis quando integradas num projeto mais amplo de economia circular.'
      },
      {
        question: 'Quais os prazos de candidatura?',
        answer: 'Região Norte: 31/03/2025. Região Centro: 30/04/2025. Outras regiões podem ter avisos diferentes. Consulte o programa regional específico.'
      }
    ],
    relatedPrograms: ['qualificacao-pme', 'inovacao-produtiva']
  },
  {
    id: 'base-territorial',
    slug: 'base-territorial',
    name: 'Apoio de Base Territorial',
    tagline: 'Até 65% para micro e pequenas empresas em territórios de baixa densidade',
    status: 'open',
    minInvestment: 25000,
    maxInvestment: 300000,
    fundingRate: 55,
    fundingRateMax: 65,
    territory: 'Territórios de Baixa Densidade',
    deadline: null,
    description: [
      'Programa específico para apoiar micro e pequenas empresas localizadas em territórios de baixa densidade populacional.',
      'Financia investimentos produtivos, comercialização, inovação e digitalização com taxas de apoio superiores aos programas gerais.',
      'Sem concursos - análise contínua das candidaturas por ordem de chegada, facilitando o acesso para empresas de menor dimensão.'
    ],
    eligibility: [
      { type: 'required', text: 'Micro ou Pequena Empresa (< 50 colaboradores)' },
      { type: 'required', text: 'Localização em território de baixa densidade' },
      { type: 'required', text: 'Investimento entre 25k€ e 300k€' },
      { type: 'required', text: 'Situação fiscal regularizada' },
      { type: 'excluded', text: 'Médias empresas (usar outro programa)' },
      { type: 'excluded', text: 'Empresas em dificuldade' },
    ],
    benefits: [
      'Taxa de 55-65% a fundo perdido',
      'Investimento de 25k€ a 300k€',
      'Análise contínua (sem concursos)',
      'Processo simplificado',
      'Prioridade para baixa densidade'
    ],
    restrictions: [
      'Apenas micro e pequenas empresas',
      'Investimento máximo de 300.000€',
      'Deve estar em território baixa densidade',
      'Limite de 1 candidatura por 3 anos',
      'Equipamento usado não elegível'
    ],
    sectors: [
      {
        name: 'Comércio Local',
        icon: '',
        rangeMin: 25000,
        rangeMax: 80000,
        examples: [
          'Modernização de loja',
          'Sistema de gestão',
          'Presença digital',
          'Equipamentos comerciais'
        ]
      },
      {
        name: 'Turismo Rural',
        icon: '',
        rangeMin: 40000,
        rangeMax: 150000,
        examples: [
          'Sistema de reservas',
          'Equipamentos hoteleiros',
          'Marketing digital',
          'Certificações'
        ]
      },
      {
        name: 'Produção Local',
        icon: '',
        rangeMin: 50000,
        rangeMax: 250000,
        examples: [
          'Equipamentos de produção',
          'Modernização de instalações',
          'Certificação de qualidade',
          'Canais de comercialização'
        ]
      },
      {
        name: 'Serviços',
        icon: '',
        rangeMin: 30000,
        rangeMax: 100000,
        examples: [
          'Software de gestão',
          'Equipamento de escritório',
          'Ferramentas digitais',
          'Formação especializada'
        ]
      }
    ],
    timeline: [
      {
        number: 1,
        title: 'Verificação de Elegibilidade',
        description: 'Confirmamos localização em baixa densidade e dimensão da empresa.',
      },
      {
        number: 2,
        title: 'Preparação Simplificada',
        description: 'Documentação reduzida adequada a micro/pequenas empresas.',
      },
      {
        number: 3,
        title: 'Submissão Contínua',
        description: 'Candidatura por ordem de chegada, sem fases de concurso.',
      },
      {
        number: 4,
        title: 'Análise Rápida',
        description: 'Processo de análise simplificado e mais rápido.',
      },
      {
        number: 5,
        title: 'Execução',
        description: 'Implementação do investimento.',
      },
      {
        number: 6,
        title: 'Reembolso',
        description: 'Processamento simplificado de reembolso.',
      }
    ],
    faq: [
      {
        question: 'O que é considerado baixa densidade?',
        answer: 'Territórios definidos pela Portaria de Baixa Densidade. Geralmente interior do país, zonas rurais. Consulte lista oficial ou contacte-nos para verificar elegibilidade da sua localização.'
      },
      {
        question: 'Qual o limite de dimensão da empresa?',
        answer: 'Micro (< 10 colaboradores, < 2M€ volume negócios) ou Pequena (< 50 colaboradores, < 10M€ volume negócios). Médias empresas devem usar programas gerais.'
      },
      {
        question: 'Posso candidatar várias vezes?',
        answer: 'Não consecutivamente. Apenas 1 projeto aprovado por empresa num período de 3 anos. Após esse período pode voltar a candidatar.'
      },
      {
        question: 'O processo é mais simples?',
        answer: 'Sim, documentação reduzida e análise mais rápida. Adequado a empresas de menor dimensão que podem não ter estrutura para candidaturas complexas.'
      }
    ],
    relatedPrograms: ['qualificacao-pme', 'economia-circular']
  },
  {
    id: 'step-inovacao-produtiva-digital',
    slug: 'step-inovacao-produtiva-digital',
    name: 'STEP - Inovação Produtiva Digital',
    tagline: 'Desenvolvimento ou fabrico de tecnologias digitais críticas e biotecnologia',
    status: 'open',
    minInvestment: 0,
    maxInvestment: null,
    fundingRate: 50,
    fundingRateMax: 50,
    territory: 'Portugal Continental',
    deadline: 'Até 30/09/2026',
    description: [
      'Apoio ao desenvolvimento ou fabrico de tecnologias digitais críticas e biotecnologia no âmbito do programa STEP.',
      'Investimento total de 401M€ disponível para projetos que promovam a inovação produtiva em tecnologias digitais estratégicas.',
      'Programa orientado para o reforço da capacidade produtiva nacional em áreas tecnológicas de elevado valor acrescentado.'
    ],
    eligibility: [
      { type: 'required', text: 'PME ou Grande Empresa' },
      { type: 'required', text: 'Projeto em tecnologias digitais críticas' },
      { type: 'required', text: 'Componente de produção ou desenvolvimento' },
      { type: 'required', text: 'Situação fiscal regularizada' },
      { type: 'excluded', text: 'Empresas em situação de dificuldade' },
      { type: 'excluded', text: 'Projetos sem componente tecnológica crítica' },
    ],
    benefits: [
      'Taxa de 50% a fundo perdido',
      'Dotação de 401M€',
      'Tecnologias digitais críticas',
      'Biotecnologia elegível',
      'Prazo até 30/09/2026'
    ],
    restrictions: [
      'Candidaturas até 30/09/2026',
      'Apenas tecnologias digitais críticas',
      'Componente produtiva obrigatória',
      'Despesas antes da submissão não elegíveis'
    ],
    sectors: [
      {
        name: 'Tecnologias Digitais',
        icon: '',
        rangeMin: 500000,
        rangeMax: 5000000,
        examples: [
          'Semicondutores e microeletrónica',
          'Inteligência artificial avançada',
          'Computação quântica',
          'Cibersegurança'
        ]
      },
      {
        name: 'Biotecnologia',
        icon: '',
        rangeMin: 400000,
        rangeMax: 4000000,
        examples: [
          'Biofármacos',
          'Biotecnologia industrial',
          'Diagnóstico molecular',
          'Terapias avançadas'
        ]
      }
    ],
    timeline: [
      {
        number: 1,
        title: 'Análise de Elegibilidade',
        description: 'Validação do enquadramento em tecnologias digitais críticas ou biotecnologia.',
      },
      {
        number: 2,
        title: 'Preparação da Candidatura',
        description: 'Desenvolvimento do projeto técnico e reunião de documentação.',
      },
      {
        number: 3,
        title: 'Submissão',
        description: 'Candidatura submetida até 30/09/2026.',
      },
      {
        number: 4,
        title: 'Análise',
        description: 'Avaliação técnica e financeira do projeto.',
      },
      {
        number: 5,
        title: 'Implementação',
        description: 'Execução do projeto de investimento.',
      },
      {
        number: 6,
        title: 'Reembolso',
        description: 'Submissão de comprovativos e processamento do reembolso.',
      }
    ],
    faq: [
      {
        question: 'O que são tecnologias digitais críticas?',
        answer: 'Tecnologias consideradas estratégicas pela UE: semicondutores, IA, computação quântica, cibersegurança, entre outras definidas no regulamento STEP.'
      },
      {
        question: 'Qual o montante disponível?',
        answer: 'O programa dispõe de 401M€ para projetos de inovação produtiva digital e biotecnologia.'
      },
      {
        question: 'Grandes empresas podem candidatar?',
        answer: 'Sim, este programa está aberto tanto a PME como a grandes empresas.'
      }
    ],
    relatedPrograms: ['step-inovacao-produtiva-energia', 'step-id-empresarial-digital']
  },
  {
    id: 'step-inovacao-produtiva-energia',
    slug: 'step-inovacao-produtiva-energia',
    name: 'STEP - Inovação Produtiva Energia',
    tagline: 'Produção de tecnologias para energias renováveis e transição energética',
    status: 'open',
    minInvestment: 0,
    maxInvestment: null,
    fundingRate: 50,
    fundingRateMax: 50,
    territory: 'Portugal Continental',
    deadline: 'Até 30/09/2026',
    description: [
      'Apoio à produção de tecnologias para energias renováveis e transição energética no âmbito do programa STEP.',
      'Investimento total de 400M€ disponível para projetos que promovam a capacidade produtiva nacional em tecnologias energéticas limpas.',
      'Programa estratégico para o reforço da autonomia energética e desenvolvimento de tecnologias verdes.'
    ],
    eligibility: [
      { type: 'required', text: 'PME ou Grande Empresa' },
      { type: 'required', text: 'Projeto em tecnologias energéticas' },
      { type: 'required', text: 'Componente de produção' },
      { type: 'required', text: 'Situação fiscal regularizada' },
      { type: 'excluded', text: 'Empresas em situação de dificuldade' },
      { type: 'excluded', text: 'Projetos sem componente energética renovável' },
    ],
    benefits: [
      'Taxa de 50% a fundo perdido',
      'Dotação de 400M€',
      'Energias renováveis',
      'Transição energética',
      'Prazo até 30/09/2026'
    ],
    restrictions: [
      'Candidaturas até 30/09/2026',
      'Apenas tecnologias energéticas elegíveis',
      'Componente produtiva obrigatória',
      'Despesas antes da submissão não elegíveis'
    ],
    sectors: [
      {
        name: 'Energia Solar',
        icon: '',
        rangeMin: 500000,
        rangeMax: 5000000,
        examples: [
          'Painéis fotovoltaicos',
          'Inversores solares',
          'Sistemas de armazenamento',
          'Componentes solares'
        ]
      },
      {
        name: 'Energia Eólica',
        icon: '',
        rangeMin: 600000,
        rangeMax: 6000000,
        examples: [
          'Turbinas eólicas',
          'Componentes eólicos',
          'Sistemas de controlo',
          'Manutenção preditiva'
        ]
      },
      {
        name: 'Hidrogénio Verde',
        icon: '',
        rangeMin: 800000,
        rangeMax: 8000000,
        examples: [
          'Eletrolisadores',
          'Células de combustível',
          'Armazenamento de H2',
          'Sistemas de distribuição'
        ]
      }
    ],
    timeline: [
      {
        number: 1,
        title: 'Análise de Elegibilidade',
        description: 'Validação do enquadramento em tecnologias energéticas elegíveis.',
      },
      {
        number: 2,
        title: 'Preparação da Candidatura',
        description: 'Desenvolvimento do projeto técnico e reunião de documentação.',
      },
      {
        number: 3,
        title: 'Submissão',
        description: 'Candidatura submetida até 30/09/2026.',
      },
      {
        number: 4,
        title: 'Análise',
        description: 'Avaliação técnica e financeira do projeto.',
      },
      {
        number: 5,
        title: 'Implementação',
        description: 'Execução do projeto de investimento.',
      },
      {
        number: 6,
        title: 'Reembolso',
        description: 'Submissão de comprovativos e processamento do reembolso.',
      }
    ],
    faq: [
      {
        question: 'Que tecnologias energéticas são elegíveis?',
        answer: 'Tecnologias para produção de energia renovável (solar, eólica, hidrogénio verde), armazenamento de energia, e componentes para transição energética.'
      },
      {
        question: 'Qual o montante disponível?',
        answer: 'O programa dispõe de 400M€ para projetos de inovação produtiva em energia.'
      },
      {
        question: 'É necessário ter produção em Portugal?',
        answer: 'Sim, o projeto deve incluir componente de produção em território nacional.'
      }
    ],
    relatedPrograms: ['step-inovacao-produtiva-digital', 'step-id-empresarial-energia']
  },
  {
    id: 'step-id-empresarial-digital',
    slug: 'step-id-empresarial-digital',
    name: 'STEP - I&D&I Empresarial Digital',
    tagline: 'Investigação e desenvolvimento em tecnologias digitais críticas (copromoção)',
    status: 'open',
    minInvestment: 0,
    maxInvestment: null,
    fundingRate: 50,
    fundingRateMax: 50,
    territory: 'Portugal Continental',
    deadline: 'Até 30/09/2026',
    description: [
      'Apoio a projetos de investigação e desenvolvimento em tecnologias digitais críticas em regime de copromoção.',
      'Investimento total de 210M€ disponível para projetos colaborativos entre empresas e entidades de I&D.',
      'Programa focado no reforço das capacidades de I&D empresarial em tecnologias digitais estratégicas.'
    ],
    eligibility: [
      { type: 'required', text: 'Projeto em copromoção' },
      { type: 'required', text: 'Tecnologias digitais críticas' },
      { type: 'required', text: 'Parceria com entidade I&D' },
      { type: 'required', text: 'Situação fiscal regularizada' },
      { type: 'excluded', text: 'Empresas em situação de dificuldade' },
      { type: 'excluded', text: 'Projetos sem parceria I&D' },
    ],
    benefits: [
      'Taxa de 50% a fundo perdido',
      'Dotação de 210M€',
      'Regime de copromoção',
      'Tecnologias digitais críticas',
      'Prazo até 30/09/2026'
    ],
    restrictions: [
      'Candidaturas até 30/09/2026',
      'Obrigatório regime de copromoção',
      'Apenas tecnologias digitais críticas',
      'Despesas antes da submissão não elegíveis'
    ],
    sectors: [
      {
        name: 'I&D Digital',
        icon: '',
        rangeMin: 300000,
        rangeMax: 3000000,
        examples: [
          'Investigação em IA',
          'Desenvolvimento de algoritmos',
          'Cibersegurança avançada',
          'Computação de alto desempenho'
        ]
      }
    ],
    timeline: [
      {
        number: 1,
        title: 'Identificação de Parceiros',
        description: 'Seleção de parceiros empresariais e entidades de I&D.',
      },
      {
        number: 2,
        title: 'Desenvolvimento do Projeto',
        description: 'Preparação do projeto de I&D em copromoção.',
      },
      {
        number: 3,
        title: 'Submissão',
        description: 'Candidatura submetida até 30/09/2026.',
      },
      {
        number: 4,
        title: 'Análise',
        description: 'Avaliação técnico-científica do projeto.',
      },
      {
        number: 5,
        title: 'Execução',
        description: 'Implementação do projeto de I&D.',
      },
      {
        number: 6,
        title: 'Reembolso',
        description: 'Submissão de comprovativos e processamento.',
      }
    ],
    faq: [
      {
        question: 'O que é copromoção?',
        answer: 'Regime de colaboração entre empresas e entidades do sistema científico e tecnológico para desenvolvimento de projetos de I&D.'
      },
      {
        question: 'Quantas entidades são necessárias?',
        answer: 'Mínimo de 2 entidades, sendo pelo menos uma empresa e uma entidade de I&D (universidade, laboratório, etc).'
      }
    ],
    relatedPrograms: ['step-inovacao-produtiva-digital', 'step-id-empresarial-energia']
  },
  {
    id: 'step-id-empresarial-energia',
    slug: 'step-id-empresarial-energia',
    name: 'STEP - I&D&I Empresarial Energia',
    tagline: 'Investigação e desenvolvimento em tecnologias energéticas (copromoção)',
    status: 'open',
    minInvestment: 0,
    maxInvestment: null,
    fundingRate: 50,
    fundingRateMax: 50,
    territory: 'Portugal Continental',
    deadline: 'Até 30/09/2026',
    description: [
      'Apoio a projetos de investigação e desenvolvimento em tecnologias energéticas em regime de copromoção.',
      'Investimento total de 115M€ disponível para projetos colaborativos em energias renováveis e transição energética.',
      'Programa focado no desenvolvimento de soluções inovadoras para os desafios energéticos.'
    ],
    eligibility: [
      { type: 'required', text: 'Projeto em copromoção' },
      { type: 'required', text: 'Tecnologias energéticas' },
      { type: 'required', text: 'Parceria com entidade I&D' },
      { type: 'required', text: 'Situação fiscal regularizada' },
      { type: 'excluded', text: 'Empresas em situação de dificuldade' },
      { type: 'excluded', text: 'Projetos sem parceria I&D' },
    ],
    benefits: [
      'Taxa de 50% a fundo perdido',
      'Dotação de 115M€',
      'Regime de copromoção',
      'Tecnologias energéticas',
      'Prazo até 30/09/2026'
    ],
    restrictions: [
      'Candidaturas até 30/09/2026',
      'Obrigatório regime de copromoção',
      'Apenas tecnologias energéticas',
      'Despesas antes da submissão não elegíveis'
    ],
    sectors: [
      {
        name: 'I&D Energética',
        icon: '',
        rangeMin: 250000,
        rangeMax: 2500000,
        examples: [
          'Novas tecnologias solares',
          'Armazenamento de energia',
          'Redes inteligentes',
          'Eficiência energética'
        ]
      }
    ],
    timeline: [
      {
        number: 1,
        title: 'Identificação de Parceiros',
        description: 'Seleção de parceiros empresariais e entidades de I&D.',
      },
      {
        number: 2,
        title: 'Desenvolvimento do Projeto',
        description: 'Preparação do projeto de I&D em copromoção.',
      },
      {
        number: 3,
        title: 'Submissão',
        description: 'Candidatura submetida até 30/09/2026.',
      },
      {
        number: 4,
        title: 'Análise',
        description: 'Avaliação técnico-científica do projeto.',
      },
      {
        number: 5,
        title: 'Execução',
        description: 'Implementação do projeto de I&D.',
      },
      {
        number: 6,
        title: 'Reembolso',
        description: 'Submissão de comprovativos e processamento.',
      }
    ],
    faq: [
      {
        question: 'Qual a diferença para Inovação Produtiva Energia?',
        answer: 'Este programa é para I&D (investigação) em regime de copromoção. Inovação Produtiva é para investimentos em produção.'
      },
      {
        question: 'Posso ter apenas empresas no consórcio?',
        answer: 'Não, é obrigatória a participação de pelo menos uma entidade do sistema científico e tecnológico.'
      }
    ],
    relatedPrograms: ['step-inovacao-produtiva-energia', 'step-id-empresarial-digital']
  },
  {
    id: 'inovacao-produtiva-baixa-densidade',
    slug: 'inovacao-produtiva-baixa-densidade',
    name: 'Inovação Produtiva - Baixa Densidade',
    tagline: 'Projetos inovadores de PME em territórios de baixa densidade',
    status: 'open',
    minInvestment: 0,
    maxInvestment: null,
    fundingRate: 50,
    fundingRateMax: 60,
    territory: 'Territórios de Baixa Densidade',
    deadline: 'Até 31/03/2026',
    description: [
      'Apoio a projetos inovadores de PME localizadas em territórios de baixa densidade.',
      'Investimento total de 117M€ disponível com taxas majoradas para zonas de baixa densidade.',
      'Programa específico para dinamizar o tecido empresarial em territórios menos favorecidos.'
    ],
    eligibility: [
      { type: 'required', text: 'PME' },
      { type: 'required', text: 'Localização em baixa densidade' },
      { type: 'required', text: 'Projeto inovador' },
      { type: 'required', text: 'Situação fiscal regularizada' },
      { type: 'excluded', text: 'Empresas em situação de dificuldade' },
      { type: 'excluded', text: 'Empresas fora de baixa densidade' },
    ],
    benefits: [
      'Taxa de 50% a 60% a fundo perdido',
      'Dotação de 117M€',
      'Específico para baixa densidade',
      'Majoração territorial',
      'Prazo até 31/03/2026'
    ],
    restrictions: [
      'Candidaturas até 31/03/2026',
      'Apenas territórios de baixa densidade',
      'Apenas PME',
      'Despesas antes da submissão não elegíveis'
    ],
    sectors: [
      {
        name: 'Inovação Local',
        icon: '',
        rangeMin: 100000,
        rangeMax: 1000000,
        examples: [
          'Modernização produtiva',
          'Novos produtos e serviços',
          'Processos inovadores',
          'Digitalização empresarial'
        ]
      }
    ],
    timeline: [
      {
        number: 1,
        title: 'Verificação de Elegibilidade',
        description: 'Validação da localização em território de baixa densidade.',
      },
      {
        number: 2,
        title: 'Preparação da Candidatura',
        description: 'Desenvolvimento do projeto inovador.',
      },
      {
        number: 3,
        title: 'Submissão',
        description: 'Candidatura submetida até 31/03/2026.',
      },
      {
        number: 4,
        title: 'Análise',
        description: 'Avaliação técnica e financeira.',
      },
      {
        number: 5,
        title: 'Implementação',
        description: 'Execução do projeto.',
      },
      {
        number: 6,
        title: 'Reembolso',
        description: 'Submissão de comprovativos e processamento.',
      }
    ],
    faq: [
      {
        question: 'O que são territórios de baixa densidade?',
        answer: 'Territórios definidos pela legislação como de baixa densidade populacional, geralmente zonas do interior do país.'
      },
      {
        question: 'Qual a taxa de financiamento?',
        answer: 'Entre 50% e 60%, dependendo da dimensão da empresa e localização específica.'
      }
    ],
    relatedPrograms: ['inovacao-produtiva', 'base-territorial']
  },
  {
    id: 'internacionalizacao-pme-2026',
    slug: 'internacionalizacao-pme-2026',
    name: 'Internacionalização das PME',
    tagline: 'Apoio à expansão internacional - feiras, marketing, certificações',
    status: 'open',
    minInvestment: 0,
    maxInvestment: null,
    fundingRate: 40,
    fundingRateMax: 50,
    territory: 'Portugal Continental',
    deadline: 'Até 31/03/2026',
    description: [
      'Apoio à expansão internacional de PME através de ações de marketing, participação em feiras e certificações.',
      'Investimento total de 57M€ disponível para promover a presença das empresas portuguesas em mercados internacionais.',
      'Programa orientado para o reforço da capacidade exportadora e diversificação de mercados.'
    ],
    eligibility: [
      { type: 'required', text: 'PME' },
      { type: 'required', text: 'Potencial exportador' },
      { type: 'required', text: 'Plano de internacionalização' },
      { type: 'required', text: 'Situação fiscal regularizada' },
      { type: 'excluded', text: 'Empresas em situação de dificuldade' },
      { type: 'excluded', text: 'Projetos sem componente internacional' },
    ],
    benefits: [
      'Taxa de 40% a 50% a fundo perdido',
      'Dotação de 57M€',
      'Feiras internacionais',
      'Marketing e certificações',
      'Prazo até 31/03/2026'
    ],
    restrictions: [
      'Candidaturas até 31/03/2026',
      'Apenas ações de internacionalização',
      'Apenas PME',
      'Despesas antes da submissão não elegíveis'
    ],
    sectors: [
      {
        name: 'Exportação',
        icon: '',
        rangeMin: 50000,
        rangeMax: 500000,
        examples: [
          'Participação em feiras',
          'Marketing internacional',
          'Certificações para export',
          'Prospeção de mercados'
        ]
      }
    ],
    timeline: [
      {
        number: 1,
        title: 'Plano de Internacionalização',
        description: 'Desenvolvimento de estratégia de mercados externos.',
      },
      {
        number: 2,
        title: 'Preparação da Candidatura',
        description: 'Identificação de ações e orçamentação.',
      },
      {
        number: 3,
        title: 'Submissão',
        description: 'Candidatura submetida até 31/03/2026.',
      },
      {
        number: 4,
        title: 'Análise',
        description: 'Avaliação do plano de internacionalização.',
      },
      {
        number: 5,
        title: 'Execução',
        description: 'Implementação das ações internacionais.',
      },
      {
        number: 6,
        title: 'Reembolso',
        description: 'Submissão de comprovativos e processamento.',
      }
    ],
    faq: [
      {
        question: 'Que ações são elegíveis?',
        answer: 'Participação em feiras internacionais, missões empresariais, marketing digital internacional, certificações para exportação, entre outras.'
      },
      {
        question: 'Qual a taxa de financiamento?',
        answer: 'Entre 40% e 50%, dependendo da dimensão da empresa e tipo de ação.'
      }
    ],
    relatedPrograms: ['internacionalizacao-pme', 'qualificacao-pme']
  },
  {
    id: 'sibt-amp',
    slug: 'sibt-amp',
    name: 'Sistema de Incentivos de Base Territorial - AMP',
    tagline: 'Modernização e inovação para empresas da Área Metropolitana do Porto',
    status: 'planned',
    minInvestment: 0,
    maxInvestment: null,
    fundingRate: 40,
    fundingRateMax: 50,
    territory: 'Área Metropolitana do Porto',
    deadline: '01/03 a 30/04/2026',
    description: [
      'Apoio à modernização e inovação de empresas localizadas na Área Metropolitana do Porto.',
      'Investimento total de 1,23M€ disponível para projetos de base territorial.',
      'Programa específico para dinamizar o tecido empresarial da região do Porto.'
    ],
    eligibility: [
      { type: 'required', text: 'Empresa na Área Metropolitana do Porto' },
      { type: 'required', text: 'Projeto de modernização ou inovação' },
      { type: 'required', text: 'Situação fiscal regularizada' },
      { type: 'excluded', text: 'Empresas em situação de dificuldade' },
      { type: 'excluded', text: 'Empresas fora da AMP' },
    ],
    benefits: [
      'Taxa de 40% a 50% a fundo perdido',
      'Dotação de 1,23M€',
      'Específico para AMP',
      'Modernização e inovação',
      'Período: 01/03 a 30/04/2026'
    ],
    restrictions: [
      'Candidaturas de 01/03 a 30/04/2026',
      'Apenas Área Metropolitana do Porto',
      'Despesas antes da submissão não elegíveis'
    ],
    sectors: [
      {
        name: 'Base Territorial AMP',
        icon: '',
        rangeMin: 50000,
        rangeMax: 300000,
        examples: [
          'Modernização empresarial',
          'Inovação de processos',
          'Digitalização',
          'Qualificação'
        ]
      }
    ],
    timeline: [
      {
        number: 1,
        title: 'Verificação de Elegibilidade',
        description: 'Validação da localização na AMP.',
      },
      {
        number: 2,
        title: 'Preparação da Candidatura',
        description: 'Desenvolvimento do projeto.',
      },
      {
        number: 3,
        title: 'Submissão',
        description: 'Candidatura entre 01/03 e 30/04/2026.',
      },
      {
        number: 4,
        title: 'Análise',
        description: 'Avaliação técnica e financeira.',
      },
      {
        number: 5,
        title: 'Implementação',
        description: 'Execução do projeto.',
      },
      {
        number: 6,
        title: 'Reembolso',
        description: 'Submissão de comprovativos e processamento.',
      }
    ],
    faq: [
      {
        question: 'Quais municípios fazem parte da AMP?',
        answer: 'Porto, Matosinhos, Vila Nova de Gaia, Maia, Gondomar, Valongo, Póvoa de Varzim, Vila do Conde, Santo Tirso, Trofa, Paredes, Arouca, Espinho, Oliveira de Azeméis, Santa Maria da Feira, São João da Madeira e Vila Nova de Famalicão.'
      },
      {
        question: 'Qual a taxa de financiamento?',
        answer: 'Entre 40% e 50%, dependendo da dimensão da empresa e tipo de projeto.'
      }
    ],
    relatedPrograms: ['base-territorial', 'qualificacao-pme']
  },
  {
    id: 'sifide',
    slug: 'sifide',
    name: 'SIFIDE II+',
    tagline: 'Dedução até 82,5% dos gastos em I&D e Inovação',
    status: 'continuous',
    minInvestment: 0,
    maxInvestment: null,
    fundingRate: 82.5,
    fundingRateMax: 82.5,
    territory: 'Portugal Continental e Regiões Autónomas',
    deadline: null,
    description: [
      'Sistema de Incentivos Fiscais em Investigação e Desenvolvimento Empresarial. Não é um apoio direto, mas uma dedução à coleta de IRC.',
      'Permite deduzir até 82,5% dos gastos elegíveis em I&D e Inovação diretamente no IRC a pagar. Sem necessidade de candidatura prévia.',
      'Sempre disponível: aplica-se automaticamente na declaração de IRC. Ideal para empresas com projetos de I&D contínuos e IRC a pagar.'
    ],
    eligibility: [
      { type: 'required', text: 'Empresa com IRC a pagar' },
      { type: 'required', text: 'Atividades de I&D qualificadas' },
      { type: 'required', text: 'Contabilidade organizada' },
      { type: 'required', text: 'Situação fiscal regularizada' },
      { type: 'excluded', text: 'Empresas sem IRC' },
      { type: 'excluded', text: 'Atividades não qualificadas como I&D' },
    ],
    benefits: [
      'Dedução de 32,5% base + 50% incremental',
      'Total até 82,5% dos gastos I&D',
      'Sem candidatura prévia',
      'Aplica-se automaticamente no IRC',
      'Válido para 10 anos (report de benefício)'
    ],
    restrictions: [
      'Apenas para empresas com IRC a pagar',
      'Atividades devem qualificar como I&D',
      'Requer relatório técnico-científico',
      'Não cumulável com outros apoios diretos na mesma despesa',
      'Limite de €1.5M de dedução em microempresas'
    ],
    sectors: [
      {
        name: 'Software & IT',
        icon: '',
        rangeMin: 50000,
        rangeMax: 500000,
        examples: [
          'Desenvolvimento de algoritmos novos',
          'I&D em IA/ML',
          'Inovação em arquiteturas',
          'Protótipos de software'
        ]
      },
      {
        name: 'Indústria',
        icon: '',
        rangeMin: 100000,
        rangeMax: 1000000,
        examples: [
          'Novos processos de fabrico',
          'Materiais inovadores',
          'Protótipos industriais',
          'Testes e ensaios'
        ]
      },
      {
        name: 'Biotecnologia',
        icon: '',
        rangeMin: 80000,
        rangeMax: 800000,
        examples: [
          'Investigação aplicada',
          'Desenvolvimento de fórmulas',
          'Ensaios clínicos',
          'Novos compostos'
        ]
      },
      {
        name: 'Engenharia',
        icon: '',
        rangeMin: 75000,
        rangeMax: 600000,
        examples: [
          'Design de novos produtos',
          'Simulações e testes',
          'Prototipagem avançada',
          'Engenharia reversa'
        ]
      }
    ],
    timeline: [
      {
        number: 1,
        title: 'Identificação de I&D',
        description: 'Identificamos atividades que qualificam como I&D segundo Manual de Frascati.',
      },
      {
        number: 2,
        title: 'Execução de I&D',
        description: 'Empresa realiza atividades de I&D ao longo do ano fiscal.',
      },
      {
        number: 3,
        title: 'Relatório Técnico-Científico',
        description: 'Preparamos relatório detalhado descrevendo as atividades de I&D realizadas.',
      },
      {
        number: 4,
        title: 'Declaração de IRC',
        description: 'Incluímos dedução SIFIDE na declaração modelo 22 (IRC).',
      },
      {
        number: 5,
        title: 'Dedução Aplicada',
        description: 'Dedução é aplicada diretamente no IRC a pagar.',
      },
      {
        number: 6,
        title: 'Report de Benefício',
        description: 'Se dedução exceder IRC, pode reportar para anos seguintes (até 10 anos).',
      }
    ],
    faq: [
      {
        question: 'O que qualifica como I&D?',
        answer: 'Atividades sistemáticas para adquirir novos conhecimentos ou criar aplicações inovadoras. Desenvolvimento de algoritmos novos, processos inovadores, protótipos com incerteza tecnológica. Mera programação ou adaptação não qualifica.'
      },
      {
        question: 'Preciso candidatar previamente?',
        answer: 'Não. SIFIDE é aplicado automaticamente na declaração de IRC. Não há candidatura prévia nem aprovação necessária. Fiscalização pode verificar posteriormente.'
      },
      {
        question: 'Como é calculado o benefício?',
        answer: 'Taxa base de 32,5% dos gastos I&D + taxa incremental de 50% sobre aumento vs média dos 2 anos anteriores. Pode chegar a 82,5% total (32,5% + 50%).'
      },
      {
        question: 'É cumulável com outros apoios?',
        answer: 'Não na mesma despesa. Se recebeu apoio direto (ex: Inovação Produtiva) para um investimento, não pode aplicar SIFIDE sobre o mesmo. Mas pode usar SIFIDE em outros projetos I&D não apoiados.'
      },
      {
        question: 'E se não tiver IRC suficiente?',
        answer: 'O benefício não utilizado pode ser reportado para os 10 anos fiscais seguintes. Vai deduzindo à medida que tiver IRC a pagar.'
      }
    ],
    relatedPrograms: ['inovacao-produtiva', 'ia-nas-pme']
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

export function getProgramsByStatus(status: 'open' | 'continuous' | 'closed'): Program[] {
  return programs.filter(p => p.status === status)
}

export function searchPrograms(query: string): Program[] {
  const lowerQuery = query.toLowerCase()
  return programs.filter(p =>
    p.name.toLowerCase().includes(lowerQuery) ||
    p.tagline.toLowerCase().includes(lowerQuery) ||
    p.description.some(d => d.toLowerCase().includes(lowerQuery))
  )
}
