import { Badge } from "@/ui/elements/badge";
import { Input } from "@/ui/elements/input";
import { Label } from "@/ui/elements/label";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/ui/elements/tooltip";
import { CollapsibleCard } from "@/ui/components/collapsible-card";

export const ProductPriceInfoGroup = () => {
  return (
    <CollapsibleCard
      title={(
        <div className="flex items-center gap-4 w-full cursor-pointer">
          <span className="icon-[tabler--receipt-2] size-6" />
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight flex-1">
            Precio
          </h4>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-muted-foreground">
            {new Intl.NumberFormat('es-CO', {
              style: 'currency',
              currency: 'COP',
              minimumFractionDigits: 0,
              maximumFractionDigits: 2,
              notation: 'compact',
              currencyDisplay: 'code',
              trailingZeroDisplay: 'stripIfInteger'
            }).format(89900)}
          </h4>
          <Badge variant="secondary" className="inline-flex gap-1">
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="icon-[tabler--rosette-discount] size-5" />
              </TooltipTrigger>
              <TooltipContent>
                <strong>Producto con descuento</strong>
                <p>
                  Precio regular&nbsp;
                  <strong>{new Intl.NumberFormat('es-CO', {
                    style: 'currency',
                    currency: 'COP',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 2,
                    notation: 'compact',
                    currencyDisplay: 'code',
                    trailingZeroDisplay: 'stripIfInteger'
                  }).format(123400)}</strong>
                </p>
              </TooltipContent>
            </Tooltip>
          </Badge>
        </div>
      )}
    >
      <div className="grid w-full items-center gap-2">
        <Label>Precio regular</Label>
        <Input type="number" />
      </div>
      <div className="grid w-full items-center gap-2">
        <Label>Precio con descuento</Label>
        <Input type="number" />
      </div>
    </CollapsibleCard>
  )
}
