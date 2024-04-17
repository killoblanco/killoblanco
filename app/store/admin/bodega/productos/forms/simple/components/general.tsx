import { Badge } from "@/ui/elements/badge";
import { Button } from "@/ui/elements/button";
import { Input } from '@/ui/elements/input';
import { Label } from '@/ui/elements/label';
import { Separator } from "@/ui/elements/separator";
import { Switch } from "@/ui/elements/switch";
import { Textarea } from "@/ui/elements/textarea";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/ui/elements/tooltip";
import { CollapsibleCard } from "../../../../../../../../ui/components/collapsible-card";

export const ProductGeneralInfoGroup = () => {
  return (
    <CollapsibleCard
      open={true}
      title={(
        <div className="flex items-center gap-4 w-full cursor-pointer">
          <span className="icon-[tabler--layout-grid] size-6" />
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight flex-1">
            General
          </h4>
          <Badge variant="secondary" className="inline-flex gap-1">
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="icon-[tabler--star] size-5" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Permite valoraciones</p>
              </TooltipContent>
            </Tooltip>
          </Badge>
        </div>
      )}
    >
      <div className="grid w-full items-center gap-2">
        <Label>Nombre del producto</Label>
        <Input />
      </div>
      <div className="grid w-full items-center gap-2">
        <Label>Categorias</Label>
        <Input />
      </div>
      <div className="grid w-full items-center gap-2">
        <Label>Descripción corta</Label>
        <Textarea cols={5} />
        <p className="text-sm text-muted-foreground">
          0 / 280
        </p>
      </div>
      <div className="grid w-full items-center gap-2">
        <Label>Etiquetas</Label>
        <Input />
      </div>
      <div className="grid grid-cols-[1fr_auto] w-full items-center gap-2 p-4 border border-border rounded-md">
        <div className="grid w-full items-center gap-1.5">
          <Label className="inline-flex text-base items-center gap-2">
            <span className="size-6 icon-[tabler--cloud]" />
            Producto Digital
          </Label>
          <p className="text-sm text-muted-foreground">
            Los productos digitales son intangibles y no requieren envío físico
          </p>
        </div>
        <Switch checked />
      </div>
      <div className="grid grid-cols-[1fr_auto] w-full items-center gap-2 p-4 border border-border rounded-md">
        <div className="grid w-full items-center gap-1.5">
          <Label className="inline-flex text-base items-center gap-2">
            <span className="size-6 icon-[tabler--cloud-download]" />
            Producto Descargable
          </Label>
          <p className="text-sm text-muted-foreground">
            Los productos descargables dan accesso a un archivo despues de la compra
          </p>
        </div>
        <Switch checked />
      </div>
      <div className="grid grid-cols-[1fr_auto] w-full items-center gap-2 p-4 border border-border rounded-md">
        <div className="grid w-full items-center gap-1.5">
          <Label className="inline-flex text-base items-center gap-2">
            <span className="size-6 icon-[tabler--star]" />
            Valoraciones
          </Label>
          <p className="text-sm text-muted-foreground">
            Permite a los clientes calificar y comentar el producto
          </p>
        </div>
        <Switch checked />
      </div>
      <Separator />
      <div className="grid grid-cols-3 gap-2">
        <Button variant="ghost">
          Copiar
          <span className="icon-[tabler--clipboard-copy] size-5 ml-2" />
        </Button>
        <Button variant="outline">
          Guardar
          <span className="icon-[tabler--eraser] size-5 ml-2" />
        </Button>
        <Button>
          Publicar
          <span className="icon-[tabler--speakerphone] size-5 ml-2" />
        </Button>
      </div>
    </CollapsibleCard>
  );
}
