import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Target, Users, CheckCircle, ExternalLink } from "lucide-react"
import Image from "next/image"

const objectives = [
  "Comprender el alcance y los requisitos de la Directiva NIS2",
  "Identificar las obligaciones específicas para su organización",
  "Desarrollar estrategias de cumplimiento efectivas",
  "Implementar medidas de ciberseguridad adecuadas",
]

const formats = [
  { title: "Presencial", description: "Formación in-situ en sus instalaciones" },
  { title: "Online", description: "Sesiones en directo con interacción completa" },
  { title: "In-company", description: "Programas adaptados a su organización" },
]

export function NIS2() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary py-16 sm:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <Shield className="h-12 w-12 text-primary-foreground" />
            <h1 className="text-4xl font-bold text-primary-foreground sm:text-5xl">
              NIS2
            </h1>
          </div>
          <p className="max-w-2xl text-xl text-primary-foreground/90 leading-relaxed">
            Formación especializada para directivos sobre la Directiva NIS2, 
            diseñada para comprender y cumplir con las nuevas exigencias europeas en ciberseguridad.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Main Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Formación para Directivos
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  La Directiva NIS2 representa un cambio significativo en las obligaciones de 
                  ciberseguridad para las organizaciones europeas. Como formador especializado, 
                  imparto programas diseñados específicamente para que los equipos directivos 
                  comprendan sus responsabilidades y puedan liderar la transformación necesaria 
                  en sus organizaciones.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Objetivos de la formación
                </h3>
                <ul className="space-y-3">
                  {objectives.map((objective, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Público objetivo
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Esta formación está dirigida a directivos, responsables de seguridad, 
                  CISOs, y miembros de comités de dirección que necesitan comprender las 
                  implicaciones estratégicas de la Directiva NIS2 para sus organizaciones.
                </p>
              </div>

              {/* Reference Link */}
              <div className="p-6 bg-muted rounded-lg border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Referencia y metodología AEC
                </h3>
                <p className="text-muted-foreground mb-4">
                  La formación sigue la metodología y estándares de la Asociación Española 
                  para la Calidad (AEC), garantizando contenidos actualizados y de máxima calidad.
                </p>
                <a
                  href="https://www.aec.es/formacion/catalogo-cursos/directiva-nis2-ciberseguridad-claves-cumplimiento-en-directo/#metodologia-profesorado"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                >
                  Ver metodología y profesorado en AEC
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="w-full flex justify-center items-center py-10 bg-primary">
  <Image
    src="/imagennis2.png"
    alt="Imagen NIS2"
    width={800}
    height={400}
    className="rounded-lg object-cover"
  />
</div>

              <div className="bg-card rounded-lg border border-border p-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-6">
                  Formatos disponibles
                </h3>
                <div className="space-y-4">
                  {formats.map((format, index) => (
                    <div key={index} className="p-4 bg-muted rounded-lg">
                      <h4 className="font-medium text-foreground">{format.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        {format.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card rounded-lg border border-border p-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-4">
                  Resultados esperados
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    Visión clara de las obligaciones NIS2
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    Plan de acción para el cumplimiento
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    Capacidad de liderazgo en ciberseguridad
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    Reducción del riesgo organizacional
                  </li>
                </ul>
              </div>

              <div className="bg-primary rounded-lg p-6 text-primary-foreground">
                <h3 className="text-xl font-semibold mb-4">
                  ¿Interesado en la formación NIS2?
                </h3>
                <p className="text-primary-foreground/90 mb-6">
                  Contacta conmigo para obtener más información sobre programas, 
                  fechas y opciones de formación personalizada.
                </p>
                <Button variant="secondary" size="lg" asChild className="w-full">
                  <a
                    href="https://es.linkedin.com/in/jorgemorras"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Solicitar información sobre NIS2
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
