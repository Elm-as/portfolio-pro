'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Briefcase, Send, MapPin, Phone } from 'lucide-react'

interface ContactClientProps {
  dict: any
  lang: string
}

export default function ContactClient({ dict, lang }: ContactClientProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setStatus('success')
    setFormData({ name: '', email: '', subject: '', message: '' })
    
    setTimeout(() => setStatus('idle'), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
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
              {dict.contact.hero.title}
            </h1>
            <p className="text-xl text-muted-foreground">
              {dict.contact.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-display font-bold mb-6">
                {dict.contact.info.title}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {dict.contact.info.description}
              </p>

              <div className="space-y-6">
                {/* Phone */}
                {dict.contact.info.phone && (
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">
                        {lang === 'fr' ? 'Téléphone' : 'Phone'}
                      </h3>
                      <a 
                        href={`tel:${dict.contact.info.phone}`}
                        className="text-primary hover:underline"
                      >
                        {dict.contact.info.phone}
                      </a>
                    </div>
                  </div>
                )}

                {/* Email */}
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">
                      {lang === 'fr' ? 'Email' : 'Email'}
                    </h3>
                    <a 
                      href={`mailto:${dict.contact.info.email || dict.contact.info.emails.project}`}
                      className="text-primary hover:underline"
                    >
                      {dict.contact.info.email || dict.contact.info.emails.project}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">
                      {lang === 'fr' ? 'Localisation' : 'Location'}
                    </h3>
                    <p className="text-muted-foreground">
                      {dict.contact.info.location || (lang === 'fr' ? 'Côte d\'Ivoire' : 'Ivory Coast')}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="p-8 rounded-2xl border bg-card shadow-lg">
                <h2 className="text-2xl font-display font-bold mb-6">
                  {dict.contact.form.title}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      {dict.contact.form.name}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      {dict.contact.form.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      {dict.contact.form.subject}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      {dict.contact.form.message}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full inline-flex items-center justify-center rounded-lg bg-primary px-6 py-4 text-base font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? (
                      <>
                        <span className="animate-spin mr-2">⏳</span>
                        {dict.contact.form.sending}
                      </>
                    ) : (
                      <>
                        <Send size={20} className="mr-2" />
                        {dict.contact.form.send}
                      </>
                    )}
                  </button>

                  {/* Status Messages */}
                  {status === 'success' && (
                    <div className="p-4 rounded-lg bg-green-50 text-green-800 border border-green-200">
                      {dict.contact.form.success}
                    </div>
                  )}
                  {status === 'error' && (
                    <div className="p-4 rounded-lg bg-red-50 text-red-800 border border-red-200">
                      {dict.contact.form.error}
                    </div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
