'use client'

import { Tabs, TabsList, TabsTrigger } from "@/ui/elements/tabs"
import { usePathname, useRouter } from "next/navigation"

const BodegaNavbar = () => {
  const router = useRouter()
  const pathname = usePathname()

  const [value] = pathname.replace('/store/admin/bodega', '').split('/').filter(Boolean)

  const onChange = (value: string) => {
    router.push(`/store/admin/bodega/${value === 'productos' ? '' : value}`)
  }

  return (
    <Tabs defaultValue={value ?? 'productos'} onValueChange={onChange}>
      <TabsList>
        <TabsTrigger value="productos">Productos</TabsTrigger>
        <TabsTrigger value="categorias">Categorias</TabsTrigger>
        <TabsTrigger value="atributos">Atributos</TabsTrigger>
        <TabsTrigger value="inventario">Inventario</TabsTrigger>
        <TabsTrigger value="valoraciones">Valoraciones</TabsTrigger>
      </TabsList>
    </Tabs>
  )
}

export default BodegaNavbar
