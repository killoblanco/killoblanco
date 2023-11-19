import { useTranslation } from '@/i18n'
import { type FC, useCallback, useEffect, useRef, useState } from 'react'

interface Props {
  data: any
  onReset: () => void
}

export const Data: FC<Props> = ({ data, onReset }) => {
  const { t } = useTranslation(new URL(window.location.href))
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    if (showToast) {
      setTimeout(() => {
        setShowToast(false)
      }, 2000)
    }
  }, [showToast])

  const result = data.map((line: any) => line.text).join('')

  const handleCopyToClipboard = useCallback(() => {
    if (inputRef.current != null) {
      navigator.clipboard.writeText(inputRef.current.value)
      setShowToast(true)
    }
  }, [inputRef])

  return (
    <>
      <header className="inline-flex gap-4 card-title text-3xl items-center">
        <span className="text-success w-10 h-10">
          <iconify-icon icon="tabler:circle-check" width={4 * 10} height={4 * 10}></iconify-icon>
        </span>
        <h2>{t('ai.ocr.results.title') as unknown as string}</h2>
      </header>
      <pre className="bg-base-100 w-full p-4 whitespace-pre-line h-96 overflow-hidden overflow-y-auto rounded-xl">
        {result}
      </pre>
      <textarea ref={inputRef} className="hidden">{result}</textarea>
      <section className="flex flex-row flex-wrap gap-4">
        <button className="btn btn-primary" onClick={handleCopyToClipboard}>
          <iconify-icon icon="tabler:copy" width={4 * 5} height={4 * 5}></iconify-icon>
          {t('ai.ocr.results.copyBtn') as unknown as string}
        </button>
        <button className="btn btn-secondary" onClick={onReset}>
          <iconify-icon icon="tabler:rotate-2" width={4 * 5} height={4 * 5}></iconify-icon>
          {t('ai.ocr.results.reset') as unknown as string}
        </button>
      </section>
      {showToast && (
        <div className="toast toast-center">
          <div className="alert bg-secondary text-secondary-content w-fit inline-flex p-3">
            <iconify-icon icon="tabler:clipboard-check" width={4 * 6} height={4 * 6}></iconify-icon>
            <span>{t('ai.ocr.results.copyToast') as unknown as string}</span>
          </div>
        </div>
      )}
    </>
  )
}
