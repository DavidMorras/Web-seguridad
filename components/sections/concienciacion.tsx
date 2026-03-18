import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Shield, FileCheck, Building, Lock, CheckCircle, Target, BookOpen } from "lucide-react"

const standards = [
  {
    title: "ISO/IEC 27001",
    description: "Sistema de Gestión de Seguridad de la Información",
    icon: Shield,
  },
  {
    title: "ISO/IEC 22301",
    description: "Sistema de Gestión de Continuidad de Negocio",
    icon: Building,
  },
  {
    title: "ENS",
    description: "Esquema Nacional de Seguridad",
    icon: FileCheck,
  },
  {
    title: "ISO/IEC 27701",
    description: "Sistema de Gestión de Información de Privacidad",
    icon: Lock,
  },
]

const pedagogicalApproach = [
  {
    title: "Enfoque práctico",
    description: "Ejercicios basados en situaciones reales que los participantes pueden encontrar en su día a día.",
  },
  {
    title: "Casos reales",
    description: "Análisis de incidentes y situaciones que han ocurrido en organizaciones similares.",
  },
  {
    title: "Ejercicios interactivos",
    description: "Actividades grupales que fomentan la discusión y el aprendizaje colaborativo.",
  },
  {
    title: "Toma de decisiones",
    description: "Simulaciones que permiten practicar la toma de decisiones en escenarios de riesgo.",
  },
]

export function Concienciacion() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary py-16 sm:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <Users className="h-12 w-12 text-primary-foreground" />
            <h1 className="text-4xl font-bold text-primary-foreground sm:text-5xl">
              Concienciación
            </h1>
          </div>
          <p className="max-w-2xl text-xl text-primary-foreground/90 leading-relaxed">
            La formación aborda los riesgos más habituales, las técnicas de ataque más utilizadas 
            y las buenas prácticas que deben aplicarse para minimizar incidentes. El objetivo es dotar 
            a los participantes de criterios claros y aplicables que mejoren la seguridad global de la organización. 
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Formación para mandos intermedios
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Formación diseñada para mandos internos que necesitan comprender los 
              riesgos reales de la organización y aplicar prácticas seguras en su actividad 
              diaria. Un enfoque claro y práctico para reforzar la seguridad desde dentro. 
            </p>
          </div>

          {/* Standards */}
          <div className="mb-16">
            <div className="flex items-center gap-3 justify-center mb-8">
              <Target className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">
                Normativas cubiertas
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {standards.map((standard, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg border border-border p-6 text-center hover:border-primary transition-colors"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    <standard.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-card-foreground mb-2">
                    {standard.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {standard.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Pedagogical Approach */}
          <div className="mb-16">
            <div className="flex items-center gap-3 justify-center mb-8">
              <BookOpen className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">
                Enfoque pedagógico
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {pedagogicalApproach.map((approach, index) => (
                <div
                  key={index}
                  className="bg-muted rounded-lg p-6 border border-border"
                >
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {approach.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {approach.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-card rounded-lg border border-border p-8 mb-16">
            <h3 className="text-2xl font-bold text-card-foreground mb-6 text-center">
              Beneficios de la concienciación
            </h3>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">↑</div>
                <h4 className="font-semibold text-card-foreground mb-1">
                  Mayor compromiso
                </h4>
                <p className="text-sm text-muted-foreground">
                  Equipos más comprometidos con la seguridad
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">↓</div>
                <h4 className="font-semibold text-card-foreground mb-1">
                  Menos incidentes
                </h4>
                <p className="text-sm text-muted-foreground">
                  Reducción de errores humanos y brechas
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">✓</div>
                <h4 className="font-semibold text-card-foreground mb-1">
                  Cumplimiento efectivo
                </h4>
                <p className="text-sm text-muted-foreground">
                  Implementación real de las políticas
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary rounded-lg p-8 text-primary-foreground text-center">
            <h3 className="text-2xl font-bold mb-4">
              ¿Necesitas formar a tus mandos intermedios?
            </h3>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              Contacta conmigo para diseñar un programa de concienciación adaptado 
              a las necesidades específicas de tu organización.
            </p>
            <Button variant="secondary" size="lg" asChild>
              <a
                href="https://es.linkedin.com/in/jorgemorras"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contactar para cursos de concienciación
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
