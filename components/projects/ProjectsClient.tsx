'use client'

import { motion } from 'framer-motion'
import { Lightbulb, AlertCircle, Wrench, TrendingUp, CheckCircle, ExternalLink } from 'lucide-react'

interface Project {
  title: string
  context: string
  problem: string
  solution: string
  tools: string[]
  method: string
  result: string
  link?: string
  status?: string
  period?: string
}

interface ProjectsDict {
  hero: {
    title: string
    subtitle: string
  }
  list: Project[]
}

interface ProjectsClientProps {
  dict: {
    projects: ProjectsDict
  }
  lang: string
}

export default function ProjectsClient({ dict, lang }: ProjectsClientProps) {
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
              {dict.projects.hero.title}
            </h1>
            <p className="text-xl text-muted-foreground">
              {dict.projects.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="space-y-12">
            {dict.projects.list.map((project: Project, index: number) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl border bg-card hover:shadow-2xl transition-all"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-3xl font-display font-bold">
                      {project.title}
                    </h2>
                    {project.period && (
                      <p className="text-sm text-muted-foreground mt-1">
                        {project.period}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    {project.status && (
                      <span className="px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-700 whitespace-nowrap">
                        {project.status}
                      </span>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-1 text-sm font-medium rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors"
                      >
                        <span>{lang === 'fr' ? 'Voir' : 'View'}</span>
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  {/* Context */}
                  <div>
                    <div className="flex items-center mb-3">
                      <Lightbulb size={20} className="text-primary mr-2" />
                      <h3 className="font-semibold">
                        {lang === 'fr' ? 'Contexte' : 'Context'}
                      </h3>
                    </div>
                    <p className="text-muted-foreground">{project.context}</p>
                  </div>

                  {/* Problem */}
                  <div>
                    <div className="flex items-center mb-3">
                      <AlertCircle size={20} className="text-orange-500 mr-2" />
                      <h3 className="font-semibold">
                        {lang === 'fr' ? 'Problème' : 'Problem'}
                      </h3>
                    </div>
                    <p className="text-muted-foreground">{project.problem}</p>
                  </div>

                  {/* Solution */}
                  <div>
                    <div className="flex items-center mb-3">
                      <Wrench size={20} className="text-blue-500 mr-2" />
                      <h3 className="font-semibold">
                        {lang === 'fr' ? 'Solution' : 'Solution'}
                      </h3>
                    </div>
                    <p className="text-muted-foreground">{project.solution}</p>
                  </div>

                  {/* Method */}
                  <div>
                    <div className="flex items-center mb-3">
                      <CheckCircle size={20} className="text-green-500 mr-2" />
                      <h3 className="font-semibold">
                        {lang === 'fr' ? 'Méthode' : 'Method'}
                      </h3>
                    </div>
                    <p className="text-muted-foreground">{project.method}</p>
                  </div>
                </div>

                {/* Tools */}
                <div className="mb-6">
                  <h3 className="font-semibold mb-3">
                    {lang === 'fr' ? 'Outils utilisés' : 'Tools used'}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool: string) => (
                      <span
                        key={tool}
                        className="px-4 py-2 text-sm font-medium rounded-lg bg-primary/10 text-primary"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Result */}
                <div className="p-6 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200">
                  <div className="flex items-start">
                    <TrendingUp size={24} className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-green-900 mb-2">
                        {lang === 'fr' ? 'Résultat' : 'Result'}
                      </h3>
                      <p className="text-green-800">{project.result}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
