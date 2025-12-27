'use client'

import { motion } from 'framer-motion'
import { FileText, Download, BookOpen, TrendingUp } from 'lucide-react'

interface TrainingClientProps {
  dict: any
  lang: string
}

export default function TrainingClient({ dict, lang }: TrainingClientProps) {
  const getLevelColor = (level: string) => {
    const lowerLevel = level.toLowerCase()
    if (lowerLevel.includes('débutant') || lowerLevel.includes('beginner')) {
      return 'bg-green-100 text-green-800 border-green-200'
    }
    if (lowerLevel.includes('intermédiaire') || lowerLevel.includes('intermediate')) {
      return 'bg-blue-100 text-blue-800 border-blue-200'
    }
    return 'bg-purple-100 text-purple-800 border-purple-200'
  }

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
              {dict.training.hero.title}
            </h1>
            <p className="text-xl text-muted-foreground">
              {dict.training.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Description */}
      <section className="py-12 bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-lg text-muted-foreground">
              {dict.training.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-12 pb-20 bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {dict.training.resources.map((resource: any, index: number) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-2xl border bg-card hover:shadow-2xl transition-all hover:-translate-y-1"
              >
                {/* Icon and Type */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <FileText size={28} />
                  </div>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground">
                    {resource.type}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-primary transition-colors">
                  {resource.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-4">
                  {resource.description}
                </p>

                {/* Level Badge */}
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 text-xs font-medium rounded-lg border ${getLevelColor(resource.level)}`}>
                    {resource.level}
                  </span>
                  
                  {/* Download Button */}
                  <button className="flex items-center text-sm font-semibold text-primary hover:underline">
                    <Download size={16} className="mr-1" />
                    {dict.training.cta}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                <BookOpen size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {lang === 'fr' ? 'Contenu pratique' : 'Practical content'}
              </h3>
              <p className="text-muted-foreground">
                {lang === 'fr' 
                  ? 'Des guides orientés action avec des exemples concrets' 
                  : 'Action-oriented guides with concrete examples'}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                <TrendingUp size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {lang === 'fr' ? 'Progression adaptée' : 'Adapted progression'}
              </h3>
              <p className="text-muted-foreground">
                {lang === 'fr' 
                  ? 'Du niveau débutant à intermédiaire' 
                  : 'From beginner to intermediate level'}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                <Download size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {lang === 'fr' ? 'Gratuit et accessible' : 'Free and accessible'}
              </h3>
              <p className="text-muted-foreground">
                {lang === 'fr' 
                  ? 'Téléchargez et utilisez à votre rythme' 
                  : 'Download and use at your own pace'}
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
