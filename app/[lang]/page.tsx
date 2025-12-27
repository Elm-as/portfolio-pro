import { getDictionary } from '@/lib/dictionary'
import { Locale } from '@/lib/i18n-config'
import HomeClient from '@/components/home/HomeClient'

export default async function HomePage({
  params,
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(params.lang)

  return <HomeClient dict={dict} lang={params.lang} />
}
