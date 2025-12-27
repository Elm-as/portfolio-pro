import 'server-only'

const dictionaries = {
  fr: () => import('../dictionaries/fr').then((module) => module.default),
  en: () => import('../dictionaries/en').then((module) => module.default),
}

export const getDictionary = async (locale: 'fr' | 'en') => dictionaries[locale]()
