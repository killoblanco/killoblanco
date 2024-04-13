import Thumbnail from "./thumbnail";

const AboutInfo = () => (
  <section className="space-y-6" id="sobreMi">
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight inline-flex items-center">
      <span className="icon-[tabler--fingerprint-scan] size-9 mr-2" />
      Sobre Mí
    </h3>
    <div className="grid md:grid-cols-2 gap-8 items-center justify-items-center">
      <Thumbnail />
      <div>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Desarrollador de software apasionado con más de una década de
          experiencia desde 2010. Mi objetivo es crear soluciones tecnológicas
          innovadoras que tengan un impacto positivo en la vida de las personas.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          A lo largo de mi carrera, he colaborado con equipos internacionales en
          proyectos de gran envergadura, desempeñando roles clave en el
          desarrollo web. Mi versatilidad no se limita solo al ámbito web, sino
          que también abarca aplicaciones móviles y de escritorio. Mi enfoque
          autodidacta me impulsa constantemente a explorar nuevas tecnologías,
          y estoy particularmente entusiasmado con el mundo de la Inteligencia
          Artificial.
        </p>
      </div>
    </div>
  </section>
)

export default AboutInfo;
