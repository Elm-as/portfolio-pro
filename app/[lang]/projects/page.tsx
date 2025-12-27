import { getDictionary } from '@/lib/dictionary'
import { Locale } from '@/lib/i18n-config'
import ProjectsClient from '@/components/projects/ProjectsClient'

export default async function ProjectsPage({
  params,
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(params.lang)

  return <ProjectsClient dict={dict} lang={params.lang} />
}
