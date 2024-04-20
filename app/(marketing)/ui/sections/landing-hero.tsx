import { Button } from '@/ui/elements/button'
import Link from 'next/link'
import Thumbnail from '../components/thumbnail'

const LandingHero = (): JSX.Element => (
  <section className="grid md:grid-cols-2 gap-8 items-center justify-items-center">
    <div className="space-y-4">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Kamilo Vasquez
      </h1>
      <p className="text-xl text-muted-foreground">
        <span className="font-bold text-primary">
          +{new Date().getFullYear() - 2010}
        </span>
        &nbsp;años de experiencia.&nbsp;
        <span className="font-bold text-primary">
          Ingeniero de software
        </span>
        &nbsp;de Barranquilla, Colombia. Especializado en desarrollo de páginas y aplicaciones web.
      </p>
      <div className="inline-flex gap-4">
        <Button asChild>
          <Link href="/gh">
            <span className="icon-[tabler--brand-github] size-5 mr-2" />
            Github
          </Link>
        </Button>
        <Button asChild>
          <Link href="/in">
            <span className="icon-[tabler--brand-linkedin] size-5 mr-2" />
            LinkedIn
          </Link>
        </Button>
      </div>
    </div>
    <Thumbnail />
  </section>
)

export default LandingHero
