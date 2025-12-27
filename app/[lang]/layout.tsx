import { getDictionary } from '@/lib/dictionary'
import { Locale } from '@/lib/i18n-config'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  const dict = await getDictionary(params.lang)

  return (
    <>
      <Header dict={dict} lang={params.lang} />
      <main className="min-h-screen pt-16">
        {children}
      </main>
      <Footer dict={dict} lang={params.lang} />
    </>
  )
}
