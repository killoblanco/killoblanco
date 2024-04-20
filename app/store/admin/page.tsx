import { Button } from '@/ui/elements/button'
import { Card, CardContent, CardFooter } from '@/ui/elements/card'
import { Progress } from '@/ui/elements/progress'
import Link from 'next/link'

const AdminLandingPage = (): JSX.Element => (
  <>
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      Comencemos 🚀
    </h3>
    <p className="leading-7 text-muted-foreground">
      Sigue estos pasos para empezar a vender rápidamente (0 de 5 completados).
    </p>
    <Progress value={5} className="w-full max-w-screen-sm" />
    <Card className="max-w-screen-sm">
      <CardContent className="inline-flex items-center gap-4 pt-6">
        <div className="grid gap-4">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Añadir productos para vender
          </h3>
          <p className="leading-7">
            Añade lo que quieres vender y crea tu catálogo. Puedes añadir
            productos manualmente o importarlos desde otra tienda.
          </p>
        </div>
        <span className="icon-[fluent-emoji--package] size-32" />
      </CardContent>
      <CardFooter>
        <Button asChild>
          <Link href="admin/deposito/productos/nuevo">
            Añadir Productos
          </Link>
        </Button>
      </CardFooter>
    </Card>
  </>
)

export default AdminLandingPage
