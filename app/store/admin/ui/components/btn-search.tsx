import { Button } from '@/ui/elements/button'

export const AdminBtnSearch = (): JSX.Element => (
  <Button variant="outline" className="w-60 gap-4 justify-between">
    <span>Buscar en la tienda...</span>
    <span className="icon-[tabler--search] size-4" />
  </Button>
)
