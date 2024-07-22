import ExperienceHighlight from './highlight'
import ExperienceHistory from './history'

const Experience = (): JSX.Element => (
  <section className="space-y-6" id="experiencia">
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight inline-flex items-center">
      <span className="icon-[tabler--briefcase] size-9 mr-2" />
      Experiencia
    </h3>
    <div className="grid md:grid-cols-2 gap-8">
      <ExperienceHighlight
        companyName="Globant"
        from="Agosto 2018"
        position="Desarrollador Frontend"
        to="Actualidad"
        thumbnail="/assets/globant_logo.jpg"
        type="globant"
      />
      <ExperienceHighlight
        companyName="Disney"
        from="Julio 2022"
        position="Desarrollador Frontend"
        to="Actualidad"
        thumbnail="/assets/disney_logo.jpg"
        type="disney"
      />
    </div>
    <ExperienceHistory />
  </section>
)

export default Experience
