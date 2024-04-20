'use client'

import { Tabs, TabsList, TabsTrigger } from '@/ui/elements/tabs'
import { usePathname, useRouter } from 'next/navigation'

const BodegaNavbar = (): JSX.Element => {
  const router = useRouter()
  const pathname = usePathname()

  const [value] = pathname.replace('/store/admin/deposito', '').split('/').filter(Boolean)

  const onChange = (value: string): void => {
    router.push(`/store/admin/deposito/${value === 'productos' ? '' : value}`)
  }

  return (
    <Tabs defaultValue={value ?? 'productos'} onValueChange={onChange}>
      <TabsList>
        <TabsTrigger value="productos">Productos</TabsTrigger>
        <TabsTrigger value="categorias">Categorías</TabsTrigger>
        <TabsTrigger value="atributos">Atributos</TabsTrigger>
        <TabsTrigger value="inventario">Inventario</TabsTrigger>
        <TabsTrigger value="valoraciones">Valoraciones</TabsTrigger>
      </TabsList>
    </Tabs>
  )
}

export default BodegaNavbar
