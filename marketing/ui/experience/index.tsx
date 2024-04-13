import ExperienceHighlight from "./highlight";
import ExperienceHistory from "./history";

const Experience = () => (
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
        thumbnail="https://media.licdn.com/dms/image/D560BAQHWB0kBTxn0kA/company-logo_200_200/0/1688411226388/globant_logo?e=1721260800&v=beta&t=_owkCp8S4QK_BU6K1KoKz1ThubeFIbVCFq8NDClriTo"
        type="globant"
      />
      <ExperienceHighlight
        companyName="Disney"
        from="Julio 2022"
        position="Desarrollador Frontend"
        to="Actualidad"
        thumbnail="https://media.licdn.com/dms/image/D4E0BAQF1XyWBdCLifg/company-logo_200_200/0/1712695413859/the_walt_disney_company_logo?e=1721260800&v=beta&t=LL1WOy_rrFeXQKJlPruBiWipCmiTTBs9S65Uo0x7PG0"
        type="disney"
      />
    </div>
    <ExperienceHistory />
  </section>
)

export default Experience;
