import { Badge } from "@/ui/elements/badge"
import { Button } from "@/ui/elements/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/ui/elements/card"
import { Input } from "@/ui/elements/input"
import { Label } from "@/ui/elements/label"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/ui/elements/select"
import { Textarea } from "@/ui/elements/textarea"

export const CategoryForm = () => {
  return (
    <Card>
      <CardHeader className="p-4">
        <CardTitle>
          <div className="flex items-center gap-4 w-full">
            <span className="icon-[tabler--category-plus] size-6" />
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight flex-1">
              Nueva Categoría
            </h4>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0 space-y-4">
        <Card role="button" className="p-4 border-2 border-border border-dashed shadow-none flex items-center justify-center">
          <div className="grid grid-cols-[auto] grid-flow-col items-center gap-4  w-2/3">
            <span className="icon-[tabler--photo-plus] size-12" />
            <div className="space-y-1">
              <p className="text-lg font-semibold">
                Cargar portada
              </p>
              <p className="text-xs text-muted-foreground">
                Haga clic para cargar una imagen de portada para esta categoría.
              </p>
            </div>
          </div>
        </Card>
        <div className="grid w-full items-center gap-2">
          <Label>Nombre</Label>
          <Input />
          <p className="text-sm text-muted-foreground">
            El nombre de la categoría tal como aparecerá en tu sitio.
          </p>
        </div>
        <div className="grid w-full items-center gap-2">
          <Label>Slug</Label>
          <Input disabled />
          <p className="text-sm text-muted-foreground">
            El <Badge variant="outline" className="p-1">slug</Badge> es
            la versión amigable de la URL para el nombre. Suele ser usado
            para que sea fácil compartir y optimizar motores de búsqueda.
          </p>
        </div>
        <div className="grid w-full items-center gap-2">
          <Label>Categoría padre</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Categorías" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {Array.from({ length: 5 }).map((_, i) => (
                  <SelectItem key={i} value={`value-${i}`}>
                    Option {i}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <p className="text-sm text-muted-foreground">
            <span>
              Asigna un termino principal para crear jerarquías. Por
              ejemplo, el término&nbsp;
            </span>
            <Badge variant="outline" className="p-1">Smartphones</Badge>
            sería el principal de <Badge variant="outline" className="p-1">
              Cargadores
            </Badge> y <Badge variant="outline" className="p-1">Cases</Badge>.
          </p>
        </div>
        <div className="grid w-full items-center gap-2">
          <Label>Descripción corta</Label>
          <Textarea cols={5} />
          <p className="text-sm text-muted-foreground">
            0 / 280
          </p>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button>
          Añadir nueva categoría
        </Button>
      </CardFooter>
    </Card>
  )
}
