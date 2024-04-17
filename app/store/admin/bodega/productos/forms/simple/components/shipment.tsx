import { Badge } from "@/ui/elements/badge";
import { Input } from "@/ui/elements/input";
import { Label } from "@/ui/elements/label";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/ui/elements/tooltip";
import { CollapsibleCard } from "../../../../../../../../ui/components/collapsible-card";

export const ProductShipmentInfoGroup = () => {
  return (
    <CollapsibleCard
      title={(
        <div className="flex items-center gap-4 w-full cursor-pointer">
          <span className="icon-[tabler--truck-delivery] size-6" />
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight flex-1">
            Envios
          </h4>
          <Badge variant="secondary" className="inline-flex gap-1">
            <Tooltip>
              <TooltipTrigger>
                15 x 15 x 15 cm
              </TooltipTrigger>
              <TooltipContent>
                <p>Dimensiones</p>
              </TooltipContent>
            </Tooltip>
          </Badge>
          <Badge variant="secondary" className="inline-flex gap-1">
            <Tooltip>
              <TooltipTrigger>
                2.4 kg
              </TooltipTrigger>
              <TooltipContent>
                <p>Peso</p>
              </TooltipContent>
            </Tooltip>
          </Badge>
        </div>
      )}
    >
      <div className="grid w-full items-center gap-2">
        <Label className="inline-flex items-center">
          <span className="flex-1">Dimensiones</span>
          <Badge variant="secondary">cm</Badge>
        </Label>
        <div className="grid grid-cols-3 gap-4">
          <Input type="number" placeholder="Largo" />
          <Input type="number" placeholder="Ancho" />
          <Input type="number" placeholder="Alto" />
        </div>
      </div>
      <div className="grid w-full grid-cols-2 gap-2">
        <Label className="inline-flex items-center">
          <span className="flex-1">Peso</span>
          <Badge variant="secondary">kg</Badge>
        </Label>
        <Input type="number" />
      </div>
    </CollapsibleCard>
  )
}
