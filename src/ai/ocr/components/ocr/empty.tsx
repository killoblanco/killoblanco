import { useTranslation } from '@/i18n'

export const Empty = () => {
  const { t } = useTranslation(new URL(window.location.href))

  return (
    <>
      <h1 className="inline-flex items-center gap-4 text-3xl font-bold">
        <iconify-icon icon="tabler:brand-netbeans" width={4 * 10} height={4 * 10}></iconify-icon>
        {t('ai.ocr.empty.title') as unknown as string}
      </h1>
      <section className="typo text-base-content">
        <p>
          {t('ai.ocr.empty.description') as unknown as string}
        </p>
        <section className="alert  bg-accent text-accent-content w-fit">
          <iconify-icon icon="tabler:brand-netbeans" width={4 * 8} height={4 * 8}></iconify-icon>
          <span>
            {t('ai.ocr.empty.alert') as unknown as string}
          </span>
        </section>
      </section>
      <section className="flex flex-col md:flex-row items-center gap-4">
        <a
          className="btn btn-outline"
          href="https://github.com/killoblanco/killoblanco"
          target="_github"
        >
          <iconify-icon icon="tabler:code" width={4 * 5} height={4 * 5}></iconify-icon>
          {t('ai.ocr.empty.codeBtn') as unknown as string}
        </a>
        <a
          className="btn btn-outline"
          href="https://github.com/naptha/tesseract.js"
          target="_github"
        >
          <iconify-icon icon="tabler:brand-github" width={4 * 5} height={4 * 5}></iconify-icon>
          Tesseract.js
        </a>
      </section>
    </>
  )
}
