import { useTranslation } from '@/i18n'
import type { FC } from 'react'

interface Props {
  onRecognize: () => Promise<void>
  image: File
}
export const Preview: FC<Props> = ({ image, onRecognize }) => {
  const { t } = useTranslation(new URL(window.location.href))
  return (
    <>
      <figure className="flex flex-col gap-1 md:gap-3">
        <img
          className="rounded-lg w-full max-w-sm"
          src={URL.createObjectURL(image)}
          alt={image.name}
        />
        <figcaption>{image.name}</figcaption>
      </figure>
      <button className="btn btn-primary  self-center" onClick={onRecognize}>
        {t('ai.ocr.process') as unknown as string}
        <iconify-icon icon="tabler:sparkles" width={4 * 5} height={4 * 6}></iconify-icon>
      </button>
    </>
  )
}
