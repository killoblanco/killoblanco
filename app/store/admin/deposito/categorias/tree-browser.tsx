import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/ui/elements/accordion"
import { Badge } from "@/ui/elements/badge"
import { Button, buttonVariants } from "@/ui/elements/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/ui/elements/card"
import { Input } from "@/ui/elements/input"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/ui/elements/pagination"
import { cn } from "@/ui/utils"

export const CategoriesTreeBrowser = () => {
  return (
    <Card className="h-full">
      <CardHeader className="p-4">
        <CardTitle className="inline-flex items-center gap-4">
          <Input placeholder="Buscar Categoría" />
          <span className="icon-[tabler--search] size-5" />
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0 space-y-4 border-b border-t h-full max-h-[592px] overflow-y-auto">
        <Accordion type="multiple" className="w-full">
          <AccordionItem value="item-1-1" role="button" className={cn(
            buttonVariants({ variant: 'ghost', size: 'lg' }),
            'hover:no-underline whitespace-normal hover:bg-inherit',
            'p-4 pl-8 text-base w-full flex flex-col gap-2 h-auto'
          )}>
            <span className="flex flex-row gap-4 justify-between w-full">
              <span className="flex-1 text-left">Sin categorizar</span>
              <Badge variant="secondary">99</Badge>
            </span>
            <p className="text-muted-foreground text-sm">
              Esta es la categoía por defecto y no puede ser borrada. Se
              asignará automáticamente a los productos sin categoría.
            </p>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger
              className={cn(
                buttonVariants({ variant: 'ghost', size: 'lg' }),
                'hover:no-underline justify-start',
                'p-4 text-base'
              )}
            >
              <span className="flex-1 text-left">Celulares</span>
              <Badge variant="secondary">99</Badge>
            </AccordionTrigger>
            <AccordionContent className="p-0 ">
              <AccordionItem value="item-1-1" role="button" className={cn(
                buttonVariants({ variant: 'ghost', size: 'lg' }),
                'hover:no-underline whitespace-normal',
                'p-4 pl-8 text-base w-full flex flex-col gap-2 h-auto last:bg-emerald-500'
              )}>
                <span className="flex flex-row gap-4 justify-between w-full">
                  <span className="flex-1 text-left">Celulares</span>
                  <Badge variant="secondary">99</Badge>
                </span>
                <p className="text-muted-foreground text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis eos dolore ut nostrum quae dicta pariatur necessitatibus earum vero ea sed, fugiat atque, suscipit dolor unde ad facere praesentium dolores. Corporis eos dolore ut nostrum quae dicta pariatur necessitatibus earum.
                </p>
              </AccordionItem>
              <AccordionItem value="item-1-2 last:bg-emerald-500">
                <AccordionTrigger
                  className={cn(
                    buttonVariants({ variant: 'ghost', size: 'lg' }),
                    'hover:no-underline justify-start',
                    'p-4 text-base pl-8'
                  )}
                >
                  <span className="flex-1 text-left ">Celulares</span>
                  <Badge variant="secondary">99</Badge>
                </AccordionTrigger>
                <AccordionContent className="p-0 pl-4">
                  <AccordionItem value="item-1-2-1" className={cn(
                    buttonVariants({ variant: 'ghost', size: 'lg' }),
                    'hover:no-underline justify-start',
                    'p-4 text-base w-full'
                  )}>
                    <span className="flex-1 text-left">Celulares</span>
                    <Badge variant="secondary">99</Badge>
                    <AccordionContent className="p-0">
                    </AccordionContent>
                  </AccordionItem>
                </AccordionContent>
              </AccordionItem>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
      <CardFooter className="p-4">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </CardFooter>
    </Card>
  )
}
