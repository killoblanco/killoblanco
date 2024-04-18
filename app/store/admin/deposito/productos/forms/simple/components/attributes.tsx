import { CollapsibleCard } from "@/ui/components/collapsible-card";

export const ProductAttributesInfoGroup = () => {
  return (
    <CollapsibleCard
      title={(
        <div className="flex items-center gap-4 w-full cursor-pointer">
          <span className="icon-[tabler--grid-dots] size-6" />
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight flex-1">
            Atributos
          </h4>
        </div>
      )}
    >
      <p className="leading-5 text-muted-foreground">
        Añade información descriptiva que los clientes puedan utilizar para buscar este producto en tu tienda, como «Material» o «Marca».
      </p>
    </CollapsibleCard>
  )
}
