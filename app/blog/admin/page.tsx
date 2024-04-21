import { CollapsibleCard } from '@/ui/components/collapsible-card'
import { Button } from '@/ui/elements/button'
import { CardContent, CardFooter } from '@/ui/elements/card'
import { Input } from '@/ui/elements/input'
import { Label } from '@/ui/elements/label'
import { Textarea } from '@/ui/elements/textarea'

const AdminLandingPage = (): JSX.Element => (
  <div className="grid grid-cols-3 gap-4">
    <section className="col-span-2 grid grid-cols-3 gap-4">
      <div className="col-span-2">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Hola de nuevo, Kamilo
        </h1>
      </div>
    </section>
    <aside className="col-span-1 space-y-4">
      <CollapsibleCard
        icon="icon-[tabler--sticker-2]"
        title="Borrador Rápido"
      >
        <CardContent className="space-y-4">
          <div className="grid w-full items-center gap-2">
            <Label>Titulo</Label>
            <Input />
          </div>
          <div className="grid w-full items-center gap-2">
            <Label>Contenido</Label>
            <Textarea rows={5} placeholder='¿En qué estás pensando?' />
          </div>
        </CardContent>
        <CardFooter>
          <Button>
            Guardar Borrador
            <span className="icon-[tabler--eraser] size-5 ml-2" />
          </Button>
        </CardFooter>
      </CollapsibleCard>
    </aside>
  </div>
)

export default AdminLandingPage
