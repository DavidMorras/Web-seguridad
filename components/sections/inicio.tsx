import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, BookOpen, ClipboardCheck, Users, GraduationCap } from "lucide-react"

interface InicioProps {
  setActiveTab: (tab: string) => void
}

const services = [
  {
    id: "nis2",
    title: "NIS2",
    description: "Formación para directivos sobre la directiva NIS2",
    icon: Shield,
  },
  {
    id: "auditor",
    title: "Auditor",
    description: "Servicios de auditoría y GAP-Normativas",
    icon: ClipboardCheck,
  },
  {
    id: "formacion",
    title: "Formación",
    description: "Programas formativos ISO 27001, 31000 y 27701",
    icon: BookOpen,
  },
  {
    id: "concienciacion",
    title: "Concienciación",
    description: "Cursos de gestión de riesgos para mandos intermedios",
    icon: Users,
  },
  {
    id: "tutorizacion",
    title: "Tutorización",
    description: "Mentoría personalizada y orientación profesional",
    icon: GraduationCap,
  },
]

export function Inicio({ setActiveTab }: InicioProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary py-24 sm:py-32">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="text-primary-foreground">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
                Profesional en Ciberseguridad, Cumplimiento Normativo 
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/90">
                Un punto de encuentro para quienes quieren iniciarse o avanzar en el ámbito de la ciberseguridad a través de formación clara y orientada a resultados. 
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  variant="secondary"
                  size="lg"
                  asChild
                >
                  <a
                    href="https://es.linkedin.com/in/jorgemorras"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contactar
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
            <div className="hidden lg:flex lg:justify-center">
              <div className="relative">
                <div className="absolute -inset-4 rounded-full bg-primary-foreground/10 blur-3xl" />
                <Shield className="relative h-64 w-64 text-primary-foreground/20" strokeWidth={0.5} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Sobre mí
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                Mi labor se centra en la ciberseguridad y el cumplimiento normativo, ofreciendo 
                formación y contenidos adaptados a las necesidades actuales del sector. 
              </p>
              <a
  href="https://www.linkedin.com/in/jorge-morr%C3%A1s-4b1a8a1b7/"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition"
>
  Ver perfil en LinkedIn
</a>

            
            </div>
          </div>
        </div>    
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-24 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Servicios principales
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Soluciones integrales para tu organización en ciberseguridad y cumplimiento
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className="group flex flex-col items-center p-6 bg-card rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all text-center"
              >
                <service.icon className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-card-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
                <ArrowRight className="mt-4 h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial / Value Statement */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <blockquote className="relative">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-8xl text-muted-foreground/20 font-serif">
                {'"'}
              </div>
              <p className="relative text-2xl font-medium text-foreground italic leading-relaxed">
                La ciberseguridad no es solo una cuestión técnica, es una responsabilidad 
                estratégica que define el éxito y la confianza de las organizaciones en la era digital.
              </p>
            </blockquote>
            <div className="mt-12">
              <Button size="lg" asChild>
                <a
                  href="https://es.linkedin.com/in/jorgemorras"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Solicitar información
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
