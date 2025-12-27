import { getDictionary } from '@/lib/dictionary'
import { Locale } from '@/lib/i18n-config'
import ContactClient from '@/components/contact/ContactClient'

export default async function ContactPage({
  params,
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(params.lang)

  return <ContactClient dict={dict} lang={params.lang} />
}
