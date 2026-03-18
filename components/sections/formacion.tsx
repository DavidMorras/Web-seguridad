import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Shield, AlertTriangle, Lock, ExternalLink, CheckCircle } from "lucide-react"
import Image from "next/image"

const courses = [
  {
    id: "iso27001",
    title: "ISO/IEC 27001",
    subtitle: "Gestión de la Seguridad de la Información",
    icon: Shield,
    description:
      "Norma internacional que especifica los requisitos para establecer, implementar, mantener y mejorar continuamente un sistema de gestión de seguridad de la información (SGSI).",
    objective:
      "Capacitar a los participantes para implementar y gestionar un SGSI conforme a los requisitos de la norma, preparándolos para liderar proyectos de certificación.",
    audience:
      "Responsables de seguridad, directores de TI, consultores y profesionales que buscan certificación o implementación de SGSI.",
    benefits: [
      "Comprensión completa de los requisitos de la norma",
      "Capacidad para realizar análisis de riesgos",
      "Preparación para auditorías de certificación",
    ],
  },
  {
    id: "iso31000",
    title: "ISO/IEC 31000",
    subtitle: "Gestión del Riesgo",
    icon: AlertTriangle,
    description:
      "Marco de referencia internacional para la gestión del riesgo que proporciona principios, un marco y un proceso para gestionar el riesgo de forma efectiva.",
    objective:
      "Dotar a los participantes de las herramientas y conocimientos necesarios para implementar un proceso de gestión del riesgo integrado en la toma de decisiones organizacional.",
    audience:
      "Directivos, gestores de riesgo, responsables de cumplimiento y profesionales que necesitan integrar la gestión del riesgo en sus procesos.",
    benefits: [
      "Enfoque práctico y aplicable",
      "Integración con otros sistemas de gestión",
      "Mejora en la toma de decisiones basada en riesgo",
    ],
  },
  {
    id: "iso27701",
    title: "ISO/IEC 27701",
    subtitle: "Extensión de Privacidad",
    icon: Lock,
    description:
      "Extensión de ISO 27001 e ISO 27002 que especifica los requisitos y proporciona orientación para establecer, implementar y mejorar un Sistema de Gestión de Información de Privacidad (SGIP).",
    objective:
      "Preparar a los profesionales para extender su SGSI existente incorporando controles específicos de privacidad, alineándose con regulaciones como el RGPD.",
    audience:
      "DPOs, responsables de privacidad, profesionales con conocimiento previo de ISO 27001 que buscan especialización en privacidad.",
    benefits: [
      "Alineación con RGPD y otras regulaciones",
      "Integración con sistemas ISO 27001 existentes",
      "Demostración de compromiso con la privacidad",
    ],
  },
]

const formats = [
  { title: "In-company", description: "Formación personalizada en las instalaciones del cliente" },
  { title: "Online", description: "Sesiones en directo con material digital completo" },
]

export function Formacion() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary py-16 sm:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <BookOpen className="h-12 w-12 text-primary-foreground" />
            <h1 className="text-4xl font-bold text-primary-foreground sm:text-5xl">
              Formación
            </h1>
          </div>
          <p className="max-w-2xl text-xl text-primary-foreground/90 leading-relaxed">
            Los contenidos se adaptan al nivel de responsabilidad de cada perfil, 
            ofreciendo una visión clara y práctica de los riesgos, las buenas prácticas
             y los controles necesarios para mejorar la postura de seguridad de la organización. 
          </p>
        </div>
      </section>

      {/* School Reference */}
      <section className="py-8 bg-muted border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <h2 className="text-xl font-semibold text-foreground">
              Formación Escuela de Negocios
            </h2>
            <a
              href="https://eiposgrados.com/experto/jorge-morras/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-10 text-primary hover:underline font-medium shrink-0"
            >
              Ver perfil en EI Posgrados
              <ExternalLink className="h-4 w-4" />
            </a>
              <Image
    src="/eiplogopng.png"
    alt="Logo EIP"
    width={200}
    height={200}
    className="object-contain"
  />
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-card rounded-lg border border-border overflow-hidden"
              >
                <div className="p-6 sm:p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-primary rounded-lg">
                      <course.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-card-foreground">
                        {course.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {course.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {course.description}
                  </p>

                  <div className="grid gap-6 md:grid-cols-3">
                    <div>
                      <h4 className="font-semibold text-card-foreground mb-2">
                        Objetivo
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {course.objective}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground mb-2">
                        Público objetivo
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {course.audience}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground mb-2">
                        Beneficios
                      </h4>
                      <ul className="space-y-1">
                        {course.benefits.map((benefit, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Formats */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
              Formatos disponibles
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {formats.map((format, index) => (
                <div
                  key={index}
                  className="bg-muted rounded-lg p-6 text-center border border-border"
                >
                  <h3 className="font-semibold text-foreground mb-2">
                    {format.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {format.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 bg-primary rounded-lg p-8 text-primary-foreground text-center">
            <h3 className="text-2xl font-bold mb-4">
              ¿Interesado en nuestros programas formativos?
            </h3>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              Contacta conmigo para obtener más información sobre contenidos, 
              fechas y opciones de formación adaptadas a tu organización.
            </p>
            <Button variant="secondary" size="lg" asChild>
              <a
                href="https://es.linkedin.com/in/jorgemorras"
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar programa formativo
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
