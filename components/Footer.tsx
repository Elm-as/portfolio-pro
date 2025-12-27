import Link from 'next/link'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

interface FooterProps {
  dict: any
  lang: string
}

export default function Footer({ dict, lang }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-display font-bold mb-4">Elmas Oulobo</h3>
            <p className="text-sm text-muted-foreground">
              Data Scientist & AI Analyst
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4">{dict.nav.home}</h4>
            <ul className="space-y-2">
              <li>
                <Link href={`/${lang}/about`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {dict.nav.about}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/services`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {dict.nav.services}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/projects`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {dict.nav.projects}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/contact`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {dict.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Contact</h4>
            <div className="flex space-x-4">
              <a
                href="mailto:projet@elmas-oulobo.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Elmas Oulobo. {dict.footer.rights}.
            </p>
            <p className="text-sm text-muted-foreground flex items-center">
              {dict.footer.madeWith} <Heart size={14} className="mx-1 text-red-500" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
