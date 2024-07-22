import { Card } from '@/ui/elements/card'

const Games = (): JSX.Element => (
  <Card className="col-start-1 col-end-5 md:col-start-3 md:col-end-5 row-start-4 row-end-7 md:row-start-1 md:row-end-7 overflow-hidden relative p-0.5 border-none bg-gradient-to-br from-fuchsia-600 to-fuchsia-800">
    <a
      href="//games.kamilo.dev"
      className="grid grid-cols-[1fr_auto] grid-flow-col gap-4 items-center h-full p-4 rounded-lg"
    >
      <h3 className="scroll-m-20 text-3xl md:text-4xl font-semibold tracking-tight col-span-2">
        Juegos
      </h3>
      <span className="icon-[fluent-emoji--joystick] size-24 justify-self-center" />
    </a>
  </Card>
)

export default Games
