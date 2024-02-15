import { useTranslation } from '@/i18n'

export const Loading = () => {
  const { t } = useTranslation(new URL(window.location.href))

  return (
    <>
      <span className="loading loading-infinity loading-lg text-primary" />
      <h4 className="text-xl text-bold">
        {t('ai.ocr.loading') as unknown as string}
      </h4>
    </>
  )
}
