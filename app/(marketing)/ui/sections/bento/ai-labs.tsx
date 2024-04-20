import { Card } from '@/ui/elements/card'

const IALabsCard = (): JSX.Element => (
  <Card className="bg-gradient-to-tl from-zinc-900 to-zinc-600 text-white p-4 col-start-1 col-end-3 row-start-1 row-end-3 grid grid-cols-3 gap-4 items-center ">
    <h3 className="scroll-m-20 text-3xl font-semibold tracking-tight col-span-2">
      Proyectos de
      <br />
      <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
        Inteligencia Artificial
      </span>
    </h3>
    <span className="icon-[fluent-emoji--magic-wand] size-24 justify-self-center"/>
  </Card>
)

export default IALabsCard
