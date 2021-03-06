import { type FC } from 'react'
import { SUPPORTED_LANGUAGES } from '../constants'
import { useTranslation } from '@/i18n'

interface Props {
  lang: string
  onLangChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export const SelectLanguage: FC<Props> = ({ lang, onLangChange }) => {
  const { t } = useTranslation(new URL(window.location.href))

  const options = Object.entries(SUPPORTED_LANGUAGES)
    .sort((a, b) => a[1].localeCompare(b[1]))
    .map(([value, label]) => ({ value, label }))

  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">🌎 {t('ai.ocr.selectLangLabel') as unknown as string}</span>
      </label>
      <select
        className="select select-primary w-full max-w-xs"
        value={lang}
        onChange={onLangChange}
      >
        {options.map(({ value, label }) => (
          <option key={window.crypto.randomUUID()} value={value}>{label}</option>
        ))}
      </select>
    </div>
  )
}
