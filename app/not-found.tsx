import { Button } from '@/ui/elements/button'
import Link from 'next/link'
import PageFooter from './(marketing)/ui/components/page-footer'

export default function Home (): JSX.Element {
  return (
    <main className="container max-w-screen-xl">
      <section className="grid items-center justify-items-center min-h-dvh">
        <div className="flex flex-col gap-8">
          <div className="inline-flex items-center gap-8">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">404</h1>
            <hr className="border-r-2 border-r-border h-12" />
            <p>No se pudo encontrar esta página.</p>
          </div>
          <Button asChild size="lg" className="mx-auto">
            <Link href="/">
              <span className="icon-[tabler--home] size-5 mr-3" />
              Volver al inicio
            </Link>
          </Button>
        </div>
      </section>
      <PageFooter />
    </main>
  )
}
