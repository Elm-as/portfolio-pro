import { getDictionary } from '@/lib/dictionary'
import { Locale } from '@/lib/i18n-config'
import TrainingClient from '@/components/training/TrainingClient'

export default async function TrainingPage({
  params,
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(params.lang)

  return <TrainingClient dict={dict} lang={params.lang} />
}
