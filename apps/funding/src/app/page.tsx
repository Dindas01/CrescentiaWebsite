'use client'

import { Button } from '@crescentia/ui'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@crescentia/ui'
import { motion } from 'framer-motion'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-dark-500 via-dark-400 to-dark-500">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 font-medium">
                <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
                Fundos Europeus para PMEs
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-white-100 mb-6 leading-tight">
              Financie o Crescimento
              <br />
              da Sua <span className="text-yellow-500">Empresa</span>
            </h1>

            <p className="text-xl md:text-2xl text-white-300 mb-12 max-w-3xl mx-auto">
              Especialistas em candidaturas a fundos europeus. Portugal 2030, PRR
              e incentivos para o seu negócio.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="primary">
                Marcar Reunião
              </Button>
              <Button size="lg" variant="outline" className="border-white-100 text-white-100 hover:bg-white-100/10">
                Saber Mais
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-700" />
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-500 mb-4">
            Porquê Escolher a Crescentia?
          </h2>
          <p className="text-xl text-dark-300 max-w-2xl mx-auto">
            Experiência comprovada em candidaturas a fundos europeus para PMEs portuguesas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Portugal 2030',
              description:
                'Acesso aos principais programas de financiamento do Portugal 2030 para a sua empresa.',
              icon: '🇵🇹',
            },
            {
              title: 'PRR - Plano de Recuperação',
              description:
                'Candidaturas ao PRR com foco em inovação, digitalização e sustentabilidade.',
              icon: '🚀',
            },
            {
              title: 'Taxa de Sucesso Elevada',
              description:
                'Acompanhamento completo desde a candidatura até à aprovação e execução do projeto.',
              icon: '✅',
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card variant="elevated" className="h-full hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-yellow-500 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-dark-500 mb-6">
              Pronto para Financiar o Seu Projeto?
            </h2>
            <p className="text-xl text-dark-400 mb-8">
              Agende uma reunião gratuita com os nossos especialistas.
            </p>
            <Button size="lg" variant="secondary">
              Marcar Reunião Gratuita
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-500 text-white-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-white-300">
              © 2024 Crescentia. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
