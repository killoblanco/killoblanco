import { Badge } from "@/ui/elements/badge";
import { Input } from "@/ui/elements/input";
import { Label } from "@/ui/elements/label";
import { Switch } from "@/ui/elements/switch";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/ui/elements/tooltip";
import { CollapsibleCard } from "../../../../../../../../ui/components/collapsible-card";

export const SimpleProductInventoryInfoGroup = () => {
  return (
    <CollapsibleCard
      title={(
        <div className="flex items-center gap-4 w-full cursor-pointer">
          <span className="icon-[tabler--building-warehouse] size-6" />
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight flex-1">
            Inventario
          </h4>
          <Badge variant="secondary" className="inline-flex gap-1">
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="icon-[tabler--qrcode] size-5" />
              </TooltipTrigger>
              <TooltipContent>
                <p>SKU: 123456</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="icon-[tabler--package] text-emerald-500 size-5" />
              </TooltipTrigger>
              <TooltipContent>
                <p>123 und.</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="icon-[tabler--package] text-amber-500 size-5" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Pocas unidades</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="icon-[tabler--package-off] text-destructive size-5" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Sin unidades</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="icon-[tabler--clock-pause] size-5" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Permite reservas</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="icon-[tabler--circle-number-1] size-5" />
              </TooltipTrigger>
              <TooltipContent>
                <p>1 unidad por pedido</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="icon-[tabler--ghost-2] size-5" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Se muestra sin existencias</p>
              </TooltipContent>
            </Tooltip>
          </Badge>
        </div>
      )}
    >
      <div className="grid w-full items-center gap-2">
        <Label>SKU</Label>
        <Input />
      </div>
      <div className="grid w-full items-center gap-2">
        <Label>Unidades en stock</Label>
        <Input type="number" />
      </div>
      <div className="grid w-full items-center gap-2">
        <Label>Umbral de bajas unidades</Label>
        <Input type="number" />
      </div>
      <p className="text-lg text-muted-foreground inline-flex items-center gap-4">
        <span className="icon-[tabler--forbid] size-6" />
        Restricciones
      </p>
      <div className="grid grid-cols-[1fr_auto] w-full items-center gap-2 p-4 border border-border rounded-md">
        <div className="grid w-full items-center gap-1.5">
          <Label className="inline-flex text-base items-center gap-2">
            <span className="size-6 icon-[tabler--clock-pause]" />
            Reservas
          </Label>
          <p className="text-sm text-muted-foreground">
            Permite reservar unidades
          </p>
        </div>
        <Switch />
      </div>
      <div className="grid grid-cols-[1fr_auto] w-full items-center gap-2 p-4 border border-border rounded-md">
        <div className="grid w-full items-center gap-1.5">
          <Label className="inline-flex text-base items-center gap-2">
            <span className="size-6 icon-[tabler--circle-number-1]" />
            1 unidad por pedido
          </Label>
          <p className="text-sm text-muted-foreground">
            Limita la cantidad de unidades por pedido
          </p>
        </div>
        <Switch />
      </div>
      <div className="grid grid-cols-[1fr_auto] w-full items-center gap-2 p-4 border border-border rounded-md">
        <div className="grid w-full items-center gap-1.5">
          <Label className="inline-flex text-base items-center gap-2">
            <span className="size-6 icon-[tabler--ghost-2]" />
            Incluir sin existencias
          </Label>
          <p className="text-sm text-muted-foreground">
            Incluye el producto en la tienda aunque no tenga existencias
          </p>
        </div>
        <Switch />
      </div>
    </CollapsibleCard>
  )
}
