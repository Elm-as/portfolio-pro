import { getDictionary } from '@/lib/dictionary'
import { Locale } from '@/lib/i18n-config'
import AboutClient from '@/components/about/AboutClient'

export default async function AboutPage({
  params,
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(params.lang)

  return <AboutClient dict={dict} lang={params.lang} />
}
