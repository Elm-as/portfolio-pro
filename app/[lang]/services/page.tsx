import { getDictionary } from '@/lib/dictionary'
import { Locale } from '@/lib/i18n-config'
import ServicesClient from '@/components/services/ServicesClient'

export default async function ServicesPage({
  params,
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(params.lang)

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-blue-50/30 to-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              {dict.services.hero.title}
            </h1>
            <p className="text-xl text-muted-foreground">
              {dict.services.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      <ServicesClient dict={dict} lang={params.lang} />
    </>
  )
}
