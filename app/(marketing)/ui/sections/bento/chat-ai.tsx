import { Card } from '@/ui/elements/card'

const ChatAi = (): JSX.Element => (
  <Card className="col-start-1 col-end-5 md:col-start-1 md:col-end-3 row-start-1 row-end-4 md:row-start-1 md:row-end-7 overflow-hidden relative p-0.5 border-none">
    <span className='absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#fff_0%,#22d3ee_25%,#fff_50%,#22d3ee_75%,#fff_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#09090b_0%,#0891b2_25%,#09090b_50%,#0891b2_75%,#09090b_100%)]' />
    <a
      href="//rag.kamilo.dev"
      className="relative grid grid-cols-[1fr_auto] grid-flow-col gap-4 items-center h-full bg-background p-4 rounded-lg"
    >
      <h3 className="scroll-m-20 text-3xl md:text-4xl font-semibold tracking-tight col-span-2">
        🪄 IA
        <br />
        <span className="bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent">
          Chat Bot
        </span>
      </h3>
      <span className="icon-[fluent-emoji--person-mage] size-24 justify-self-center" />
    </a>
  </Card>
)

export default ChatAi
