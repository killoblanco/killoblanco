import { Button } from "@/ui/elements/button";
import { Card } from "@/ui/elements/card";

const ProductMediaSelectorField = () => {
  return (
    <Card className="p-4 grid grid-cols-2 grid-rows-[1fr_auto] gap-4">
      <div className="aspect-square bg-muted rounded-lg col-start-1 col-end-2 row-span-1" />
      <div className="col-start-2 col-end-3 row-start-1 row-end-3 h-[415px] overflow-y-auto overflow-x-hidden grid auto-rows-min grid-cols-3 gap-4">
        <div className="aspect-square bg-muted rounded-lg" />
        <div className="aspect-square bg-muted rounded-lg" />
        <div className="aspect-square bg-muted rounded-lg" />
        <div className="aspect-square bg-muted rounded-lg" />
        <div className="aspect-square bg-muted rounded-lg" />
        <div className="aspect-square bg-muted rounded-lg" />
        <div className="aspect-square bg-muted rounded-lg" />
        <div className="aspect-square bg-muted rounded-lg" />
        <div className="aspect-square bg-muted rounded-lg" />
        <div className="aspect-square bg-muted rounded-lg" />
        <div className="aspect-square bg-muted rounded-lg" />
        <div className="aspect-square bg-muted rounded-lg" />
        <div className="aspect-square bg-muted rounded-lg" />
      </div>
      <Button variant="secondary" size="lg" className="w-full col-start-2 col-end-3 row-start-2 row-end-3 self-center">
        Subir Fotos o Videos
        <span className="icon-[tabler--photo-video] size-6 ml-4" />
      </Button>
      <p className="text-xs text-muted-foreground col-start-1 col-end-2 row-start-2 row-end-3">
        Para obtener mejores resultados sube imagenes JPG o PNG que sean
        de 1024 x 1024 píxeles o más, y videos MP4 con calidad minima 720p
        y hasta un minuto de duración.
      </p>
    </Card>
  )
}

export default ProductMediaSelectorField;
