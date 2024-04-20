'use client'

import { IconBackBtn } from '@/ui/components/back-btn'
import { Button } from '@/ui/elements/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/ui/elements/card'
import Link from 'next/link'

const NewProductPage = (): JSX.Element => {
  return (
    <>
      <div className="inline-flex gap-4 items-center">
        <IconBackBtn />
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Nuevo Producto
        </h3>
      </div>
      <section className="grid grid-cols-7 gap-8">
        <div className="grid grid-cols-2 gap-4 col-span-5 col-start-2">
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold tracking-tight inline-flex items-center">
                <span className="icon-[tabler--package] size-8 mr-4" />
                Producto Simple
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="leading-7">
                Cubre la inmensa mayoría de los productos que puedes vender.
                Los productos simples se envian y no tienen opciones. Por
                ejemplo, un libro.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href="nuevo/simple">
                  Crear Producto Simple
                </Link>
              </Button>
            </CardFooter>
          </Card>
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold tracking-tight inline-flex items-center">
                <span className="icon-[tabler--layout-grid-add] size-8 mr-4" />
                Producto Variable
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="leading-7">
                Un producto con variaciones, cada una de las cuales puede tener
                distinto SKU, precio, opciones de inventario, etc. Por ejemplo,
                una camiseta disponible en varios colores y tallas.
              </p>
            </CardContent>
            <CardFooter>
              <Button>Crear Producto Variable</Button>
            </CardFooter>
          </Card>
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold tracking-tight inline-flex items-center">
                <span className="icon-[tabler--packages] size-8 mr-4" />
                Paquete de Productos
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="leading-7">
                Una colección de productos relacionados que se pueden comprar
                individualmente y que solo consiste en productos simples. Por
                ejemplo, un conjunto de seis vasos.
              </p>
            </CardContent>
            <CardFooter>
              <Button>Crear Paquete de Productos</Button>
            </CardFooter>
          </Card>
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold tracking-tight inline-flex items-center">
                <span className="icon-[tabler--package-export] size-8 mr-4" />
                Producto Externo o de Afiliado
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="leading-7">
                Se muestra y describe en la tienda pero se vende en otra parte.
              </p>
            </CardContent>
            <CardFooter>
              <Button>Crear Producto Externo o de Afiliado</Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </>
  )
}

export default NewProductPage
