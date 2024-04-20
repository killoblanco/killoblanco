import { Tabs, TabsList, TabsTrigger } from '@/ui/elements/tabs'
import { ModeToggle } from '@/ui/mode-toggle'
import Link from 'next/link'

const PageHeader = (): JSX.Element => (
  <header className="flex items-center justify-between sticky top-8 z-50 p-2 bg-zinc-100/40 dark:bg-zinc-900/40 backdrop-blur-sm rounded-lg">
    <Tabs defaultValue="top">
      <TabsList>
        <TabsTrigger value="top" asChild>
          <Link href="/">Spotlight</Link>
        </TabsTrigger>
        <TabsTrigger value="experiencia" asChild>
          <Link href="#experiencia">Experiencia</Link>
        </TabsTrigger>
        <TabsTrigger value="sobreMi" asChild>
          <Link href="#sobreMi">Sobre Mí</Link>
        </TabsTrigger>
      </TabsList>
    </Tabs>
    <ModeToggle />
  </header>
)

export default PageHeader
