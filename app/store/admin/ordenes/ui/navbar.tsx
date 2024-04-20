'use client'

import { Tabs, TabsList, TabsTrigger } from '@/ui/elements/tabs'
import { usePathname, useRouter } from 'next/navigation'

const OrdenesNavbar = (): JSX.Element => {
  const router = useRouter()
  const pathname = usePathname()

  const [value] = pathname.replace('/store/admin/ordenes', '').split('/').filter(Boolean)

  const onChange = (value: string): void => {
    router.push(`/store/admin/ordenes/${value === '/' ? '' : value}`)
  }

  return (
    <Tabs defaultValue={value ?? '/'} onValueChange={onChange}>
      <TabsList>
        <TabsTrigger value="/">Ordenes</TabsTrigger>
        <TabsTrigger value="devoluciones">Devoluciones</TabsTrigger>
      </TabsList>
    </Tabs>
  )
}

export default OrdenesNavbar
