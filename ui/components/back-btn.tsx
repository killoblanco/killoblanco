'use client'

import { useRouter } from 'next/navigation'
import { Button } from '../elements/button'

export const IconBackBtn = (): JSX.Element => {
  const router = useRouter()

  const goBack = (): void => {
    router.back()
  }

  return (
    <Button variant="ghost" size="icon" className="size-7" onClick={goBack}>
      <span className="icon-[tabler--chevron-left] size-5" />
    </Button>
  )
}
