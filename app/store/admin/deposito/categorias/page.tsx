import { CategoryForm } from "./form"
import { CategoriesTreeBrowser } from "./tree-browser"

const ProductCategoriesPage = () => {
  return (
    <>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight col-span-5 col-start-2">
        Categorías de productos
      </h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-1 space-y-4">
          <CategoryForm />
        </div>
        <div className="grid-cols-1">
          <CategoriesTreeBrowser />
        </div>
      </div>
    </>
  )
}

export default ProductCategoriesPage
