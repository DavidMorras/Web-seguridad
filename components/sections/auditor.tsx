import { Button } from "@/components/ui/button"
import { ArrowRight, ClipboardCheck, FileSearch, FileText, CheckCircle, ExternalLink, BarChart3 } from "lucide-react"

const preparationPhases = [
  {
    title: "Diagnóstico inicial",
    description: "Evaluación del estado actual de la organización respecto a la normativa objetivo.",
  },
  {
    title: "Revisión documental",
    description: "Análisis exhaustivo de políticas, procedimientos y registros existentes.",
  },
  {
    title: "Simulacros de auditoría",
    description: "Ejercicios prácticos que preparan al equipo para la auditoría real.",
  },
  {
    title: "Recopilación de evidencias",
    description: "Identificación y organización de las evidencias necesarias.",
  },
  {
    title: "Plan de acción",
    description: "Definición de acciones correctivas y preventivas priorizadas.",
  },
]

const deliverables = [
  "Informe de diagnóstico inicial",
  "Matriz de cumplimiento normativo",
  "Checklist de preparación para auditoría",
  "Plan de acciones correctivas priorizado",
  "Guía de evidencias requeridas",
  "Informe ejecutivo para dirección",
]

const gapServices = [
  {
    title: "Evaluación de brechas",
    description: "Identificación sistemática de las diferencias entre el estado actual y los requisitos normativos.",
  },
  {
    title: "Plan de remediación",
    description: "Desarrollo de un plan detallado para cerrar las brechas identificadas.",
  },
  {
    title: "Priorización",
    description: "Clasificación de acciones según impacto, urgencia y recursos disponibles.",
  },
  {
    title: "Seguimiento",
    description: "Monitorización continua del progreso y ajuste del plan según sea necesario.",
  },
]

export function Auditor() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary py-16 sm:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <ClipboardCheck className="h-12 w-12 text-primary-foreground" />
            <h1 className="text-4xl font-bold text-primary-foreground sm:text-5xl">
              Auditor
            </h1>
          </div>
          <p className="max-w-2xl text-xl text-primary-foreground/90 leading-relaxed">
            Servicios de auditoría y preparación para certificaciones, alineados con las 
            mejores prácticas del sector y metodologías reconocidas.
          </p>
        </div>
      </section>

      {/* Reference to Govertis */}
      <section className="py-8 bg-muted border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-muted-foreground">
              Servicios alineados con las prácticas de Govertis en continuidad, ciberresiliencia e infraestructuras críticas.
            </p>
            <div className="flex items-center gap-3">
  <div className="flex items-center gap-3">
  <div className="flex items-center gap-3">
  <a
    href="https://www.govertis.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-400 underline"
  >
    Más información sobre Govertis
  </a>

  <Image
    src="/govertislogo.png"
    alt="Logo Govertis"
    width={40}
    height={400}
    className="object-contain"
  />
</div>  
</div>

</div>

</div>

          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Preparation for Audits */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <FileSearch className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">
                Preparación y acompañamiento para auditorías
              </h2>
            </div>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
              Acompaño a las organizaciones en todo el proceso de preparación para auditorías 
              de certificación, garantizando que estén completamente preparadas y confiadas 
              para afrontar la evaluación.
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mb-8">
              {preparationPhases.map((phase, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg border border-border p-6 hover:border-primary transition-colors"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold mb-4">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold text-card-foreground mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {phase.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Deliverables */}
            <div className="bg-muted rounded-lg p-6 border border-border">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">
                  Entregables
                </h3>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {deliverables.map((deliverable, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{deliverable}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* GAP-Normativas */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <BarChart3 className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">
                GAP-Normativas
              </h2>
            </div>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
              El análisis GAP-Normativas permite identificar las diferencias entre el estado 
              actual de la organización y los requisitos de las normativas aplicables, 
              estableciendo un camino claro hacia el cumplimiento.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              {gapServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg border border-border p-6 hover:border-primary transition-colors"
                >
                  <h3 className="font-semibold text-card-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Methodology */}
          <div className="bg-card rounded-lg border border-border p-8 mb-12">
            <h3 className="text-2xl font-bold text-card-foreground mb-4">
              Metodología de trabajo
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Mi metodología se basa en un enfoque colaborativo con el cliente, combinando 
              experiencia técnica con una comprensión profunda de los procesos de negocio. 
              Trabajo de cerca con los equipos internos para transferir conocimiento y 
              construir capacidades que perduren más allá del proyecto.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                Reuniones periódicas de seguimiento y reporting
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                Documentación clara y práctica
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                Transferencia de conocimiento al equipo cliente
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="bg-primary rounded-lg p-8 text-primary-foreground text-center">
            <h3 className="text-2xl font-bold mb-4">
              ¿Necesitas prepararte para una auditoría?
            </h3>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              Contacta conmigo para analizar tu situación y diseñar un plan de 
              preparación adaptado a las necesidades específicas de tu organización.
            </p>
            <Button variant="secondary" size="lg" asChild>
              <a
                href="https://es.linkedin.com/in/jorgemorras"
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar preparación para auditoría
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
