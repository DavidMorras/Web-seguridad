import { Shield, Linkedin } from "lucide-react"

interface FooterProps {
  setActiveTab: (tab: string) => void
}

const footerLinks = [
  { id: "inicio", label: "Inicio" },
  { id: "nis2", label: "NIS2" },
  { id: "auditor", label: "Auditor" },
  { id: "formacion", label: "Formación" },
  { id: "concienciacion", label: "Concienciación" },
  { id: "tutorizacion", label: "Tutorización" },
]

export function Footer({ setActiveTab }: FooterProps) {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-8 w-8" />
              <span className="text-xl font-semibold">Jorge Morrás</span>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Consultor especializado en ciberseguridad, formación y auditoría. 
              Ayudo a organizaciones a cumplir normativas y proteger sus activos digitales.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Navegación
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      setActiveTab(link.id)
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + WebMaster */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Contacto
            </h3>

            <div className="space-y-3 mb-8">
              <a
                href="https://es.linkedin.com/in/jorgemorras"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>
              <p className="text-sm text-primary-foreground/80">
                La Almunia de Doña Godina, Zaragoza, España
              </p>
            </div>

            {/* Web-Master */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
                Web‑Master
              </h3>

              <div className="space-y-2 text-sm text-primary-foreground/80">
                <p>David Morrás</p>
                <p>Email: <a href="mailto:davidmorras2@gmail.com" className="hover:text-primary-foreground transition-colors">davidmorras2@gmail.com</a></p>
                <a
                  href="https://landing-david.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-primary-foreground transition-colors"
                >
                  landingspro.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20">
          <p className="text-center text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Jorge Morrás. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
