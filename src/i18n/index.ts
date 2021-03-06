import * as landing from './landing'
import * as common from './common'
import * as ai from './ai'

export const languages = {
  'es-CO': 'Español',
  'en-US': 'English',
}

export const defaultLang = 'es-CO'

const i18n = {
  'es-CO': {
    common: common.es,
    landing: landing.es,
    ai: ai.es
  },
  'en-US': {
    common: common.en,
    landing: landing.en,
    ai: ai.en
  }
}

function getLangFromUrl (url: URL) {
  const [, lang] = url.pathname.split('/')
  if (lang && lang in i18n) return lang as keyof typeof i18n
  return defaultLang
}

export function useTranslation (url: URL) {
  const lang = getLangFromUrl(url)

  const t = (key: string) => {
    const paths = key.split('.')

    let translation: { [key: string]: any } = i18n[lang]

    for (const path of paths) {
      if (path in translation) translation = translation[path]
    }

    return translation
  }

  return { t, lang }
}
