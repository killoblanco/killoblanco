import { Button } from "@/ui/elements/button";
import Thumbnail from "../components/thumbnail";

const LandingHero = () => (
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
          <a href="https://github.com/killoblanco" target="_social">
            <span className="icon-[tabler--brand-github] size-5 mr-2" />
            Github
          </a>
        </Button>
        <Button asChild>
          <a href="https://linkedin.com/in/killoblanco" target="_social">
            <span className="icon-[tabler--brand-linkedin] size-5 mr-2" />
            LinkedIn
          </a>
        </Button>
      </div>
    </div>
    <Thumbnail />
  </section>
)

export default LandingHero;
