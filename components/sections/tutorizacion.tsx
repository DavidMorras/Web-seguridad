import { Button } from "@/components/ui/button"
import { ArrowRight, GraduationCap, Award, Compass, CheckCircle, FileText, Target, Users } from "lucide-react"

const cismBenefits = [
  "Reconocimiento internacional de competencias en gestión de seguridad",
  "Mejora de oportunidades profesionales y salariales",
  "Validación de experiencia y conocimientos ante empleadores",
  "Acceso a una comunidad global de profesionales certificados",
]

const cismPreparation = [
  {
    title: "Mentoría personalizada",
    description: "Sesiones individuales para resolver dudas y profundizar en conceptos clave.",
  },
  {
    title: "Plan de estudio estructurado",
    description: "Cronograma adaptado a tu disponibilidad y ritmo de aprendizaje.",
  },
  {
    title: "Simulacros de examen",
    description: "Práctica con preguntas similares a las del examen oficial.",
  },
  {
    title: "Material complementario",
    description: "Recursos adicionales para reforzar áreas de mejora.",
  },
]

const careerServices = [
  {
    title: "Mentoring profesional",
    description: "Orientación estratégica para tu desarrollo de carrera en ciberseguridad.",
    icon: Compass,
  },
  {
    title: "Revisión de CV",
    description: "Optimización de tu currículum para destacar en procesos de selección.",
    icon: FileText,
  },
  {
    title: "Preparación de entrevistas",
    description: "Simulación de entrevistas técnicas y conductuales del sector.",
    icon: Users,
  },
  {
    title: "Planificación de carrera",
    description: "Definición de objetivos y roadmap profesional personalizado.",
    icon: Target,
  },
]

export function Tutorizacion() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary py-16 sm:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear_gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <GraduationCap className="h-12 w-12 text-primary-foreground" />
            <h1 className="text-4xl font-bold text-primary-foreground sm:text-5xl">
              Tutorización
            </h1>
          </div>
          <p className="max-w-2xl text-xl text-primary-foreground/90 leading-relaxed">
            Acompañamiento continuo para garantizar que los participantes aplican 
            los conocimientos adquiridos, consolidan hábitos seguros y avanzan de 
            forma guiada en la mejora de la seguridad operativa.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* ISACA-CISM */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-primary rounded-lg">
                <Award className="h-8 w-8 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground">
                  ISACA-CISM
                </h2>
                <p className="text-muted-foreground">
                  Certified Information Security Manager
                </p>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  ¿Qué es la certificación CISM?
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  CISM es una certificación de ISACA reconocida mundialmente que valida 
                  las competencias en gestión de seguridad de la información. Está diseñada 
                  para profesionales que gestionan, diseñan, supervisan y evalúan la 
                  seguridad de la información de una organización.
                </p>
                <h4 className="font-semibold text-foreground mb-3">
                  Beneficios de la certificación
                </h4>
                <ul className="space-y-2">
                  {cismBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-muted rounded-lg p-6 border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Cómo preparo al alumno
                </h3>
                <div className="space-y-4">
                  {cismPreparation.map((item, index) => (
                    <div key={index} className="bg-card rounded-lg p-4 border border-border">
                      <h4 className="font-medium text-card-foreground mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Career Orientation */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-primary rounded-lg">
                <Compass className="h-8 w-8 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground">
                  Orientación a carrera profesional
                </h2>
                <p className="text-muted-foreground">
                  Impulsa tu carrera en ciberseguridad
                </p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-3xl">
              Ofrezco servicios de mentoring y orientación profesional para ayudarte 
              a definir y alcanzar tus objetivos de carrera en el ámbito de la 
              ciberseguridad y la gestión del riesgo.
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              {careerServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg border border-border p-6 hover:border-primary transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-2">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary rounded-lg p-8 text-primary-foreground text-center">
            <h3 className="text-2xl font-bold mb-4">
              ¿Listo para dar el siguiente paso en tu carrera?
            </h3>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              Contacta conmigo para conocer cómo puedo ayudarte a alcanzar tus 
              objetivos profesionales en ciberseguridad.
            </p>
            <Button variant="secondary" size="lg" asChild>
              <a
                href="https://es.linkedin.com/in/jorgemorras"
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar tutorización
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
