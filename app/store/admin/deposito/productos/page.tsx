import { Button } from "@/ui/elements/button"
import Link from "next/link"

const ProductsPage = () => {
  return (
    <div className="inline-flex gap-4 items-center">
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight col-span-5 col-start-2">
      Productos
    </h3>
    <Button asChild variant="outline" size="sm">
      <Link href="productos/nuevo">
        Nuevo Producto
      </Link>
    </Button>
    </div>
  )
}

export default ProductsPage
