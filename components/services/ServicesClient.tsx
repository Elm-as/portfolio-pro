'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Code2, BarChart3, Database, Zap, FolderKanban, Check, ArrowRight } from 'lucide-react'

interface ServicesClientProps {
  dict: any
  lang: string
}

export default function ServicesClient({ dict, lang }: ServicesClientProps) {
  const services = [
    {
      icon: Code2,
      title: dict.services.list.automation.title,
      desc: dict.services.list.automation.desc,
      benefits: dict.services.list.automation.benefits,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: BarChart3,
      title: dict.services.list.dashboards.title,
      desc: dict.services.list.dashboards.desc,
      benefits: dict.services.list.dashboards.benefits,
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Database,
      title: dict.services.list.analysis.title,
      desc: dict.services.list.analysis.desc,
      benefits: dict.services.list.analysis.benefits,
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: Zap,
      title: dict.services.list.reporting.title,
      desc: dict.services.list.reporting.desc,
      benefits: dict.services.list.reporting.benefits,
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: FolderKanban,
      title: dict.services.list.database.title,
      desc: dict.services.list.database.desc,
      benefits: dict.services.list.database.benefits,
      color: 'from-indigo-500 to-purple-500',
    },
  ]

  return (
    <>
      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="h-full p-8 rounded-2xl border bg-card hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 transition-transform`}>
                      <Icon size={32} />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6">
                      {service.desc}
                    </p>

                    {/* Benefits */}
                    <div className="space-y-2">
                      {service.benefits.map((benefit: string) => (
                        <div key={benefit} className="flex items-start">
                          <Check size={18} className="text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Un projet en tête ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Discutons de vos besoins et trouvons ensemble la meilleure solution pour votre projet data.
            </p>

            <Link
              href={`/${lang}/contact`}
              className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 transition-all hover:-translate-y-1"
            >
              {dict.services.cta}
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}