'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const BodegaLandingPage = (): null => {
  const router = useRouter()

  useEffect(() => {
    router.replace('bodega/productos')
  }, [router])

  return null
}

export default BodegaLandingPage
