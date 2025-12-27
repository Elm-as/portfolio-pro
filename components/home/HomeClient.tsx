'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Check, Code2, BarChart3, Database, Download } from 'lucide-react'

interface HomeClientProps {
  dict: any
  lang: string
}

export default function HomeClient({ dict, lang }: HomeClientProps) {
  const services = [
    {
      icon: Code2,
      title: dict.services.list.automation.title,
      desc: dict.services.list.automation.desc,
    },
    {
      icon: BarChart3,
      title: dict.services.list.dashboards.title,
      desc: dict.services.list.dashboards.desc,
    },
    {
      icon: Database,
      title: dict.services.list.analysis.title,
      desc: dict.services.list.analysis.desc,
    },
  ]

  const projects = dict.projects.list.slice(0, 2)

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-background via-blue-50/30 to-background overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:40px_40px]" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-display font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent"
            >
              {dict.home.hero.title}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl text-primary font-semibold mb-4"
            >
              {dict.home.hero.role}
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              {dict.home.hero.tagline}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href={`/${lang}/projects`}
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 transition-all hover:-translate-y-1"
              >
                {dict.home.hero.cta1}
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                href={`/${lang}/contact`}
                className="inline-flex items-center justify-center rounded-lg border-2 border-primary px-8 py-4 text-base font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-all"
              >
                {dict.home.hero.cta2}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mini About Section */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-center">
              {dict.home.about.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              {dict.home.about.description}
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {dict.home.about.values.map((value: string, index: number) => (
                <motion.div
                  key={value}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-center p-4 rounded-lg bg-muted/50"
                >
                  <Check size={20} className="text-primary mr-2 flex-shrink-0" />
                  <span className="text-sm font-medium">{value}</span>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href={`/${lang}/about`}
                className="inline-flex items-center text-primary hover:underline font-medium"
              >
                {lang === 'fr' ? 'En savoir plus' : 'Learn more'}
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              {dict.home.services.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {dict.home.services.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl border bg-card hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.desc}
                  </p>
                </motion.div>
              )
            })}
          </div>

          <div className="text-center">
            <Link
              href={`/${lang}/services`}
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-all"
            >
              {dict.home.services.cta}
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              {dict.home.projects.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {dict.home.projects.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {projects.map((project: any, index: number) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-xl border bg-card hover:shadow-lg transition-all"
              >
                <h3 className="text-2xl font-display font-bold mb-4">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.solution}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool: string) => (
                    <span
                      key={tool}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <p className="text-sm font-semibold text-primary">
                  {project.result}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href={`/${lang}/projects`}
              className="inline-flex items-center text-primary hover:underline font-medium"
            >
              {dict.home.projects.cta}
              <ArrowRight className="ml-2" size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Work Method */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              {dict.home.method.title}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-6">
            {dict.home.method.steps.map((step: any, index: number) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="p-6 rounded-xl border bg-card text-center h-full">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-blue-600 text-primary-foreground">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              {dict.home.finalCta.title}
            </h2>
            <p className="text-lg mb-8 opacity-90">
              {dict.home.finalCta.description}
            </p>
            <Link
              href={`/${lang}/contact`}
              className="inline-flex items-center justify-center rounded-lg bg-white text-primary px-8 py-4 text-base font-semibold shadow-lg hover:bg-gray-100 transition-all hover:-translate-y-1"
            >
              {dict.home.finalCta.cta}
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
