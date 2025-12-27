'use client'

import { motion } from 'framer-motion'
import { Award, Target, Shield, Download, Calendar } from 'lucide-react'

interface AboutClientProps {
  dict: any
  lang: string
}

export default function AboutClient({ dict, lang }: AboutClientProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-blue-50/30 to-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              {dict.about.hero.title}
            </h1>
            <p className="text-xl text-muted-foreground">
              {dict.about.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Background Section */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                {dict.about.background.title}
              </h2>
              <div className="mb-6">
                <p className="text-lg font-semibold text-primary mb-2">
                  {dict.about.background.education}
                </p>
                <p className="text-muted-foreground">
                  {dict.about.background.location}
                </p>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {dict.about.background.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <Award size={64} className="mx-auto mb-4" />
                  <p className="text-xl font-semibold">Data Science</p>
                  <p className="text-lg opacity-90">Master Student</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Values */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              {dict.about.vision.title}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {dict.about.vision.items.map((item: any, index: number) => {
              const icons = [Award, Target, Shield]
              const Icon = icons[index]
              
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-xl border bg-card hover:shadow-lg transition-all"
                >
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-4">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              {dict.about.timeline.title}
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {dict.about.timeline.events.map((event: any, index: number) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      <Calendar size={24} />
                    </div>
                  </div>
                  <div className="flex-1 pb-8 border-l-2 border-muted pl-6 -ml-8">
                    <p className="text-sm font-bold text-primary mb-2">{event.year}</p>
                    <h3 className="text-xl font-display font-semibold mb-2">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {event.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-blue-600 text-primary-foreground">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
              {lang === 'fr' ? 'Téléchargez mon CV' : 'Download my CV'}
            </h2>
            <button className="inline-flex items-center justify-center rounded-lg bg-white text-primary px-8 py-4 text-base font-semibold shadow-lg hover:bg-gray-100 transition-all hover:-translate-y-1">
              <Download className="mr-2" size={20} />
              {dict.about.cta.downloadCv}
            </button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
