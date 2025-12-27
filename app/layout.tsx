import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Elmas Oulobo - Data Scientist & AI Analyst',
  description: 'Portfolio professionnel moderne - Data Science & IA | Elmas Oulobo. Master Data Science en Côte d\'Ivoire. Spécialiste en automatisation, analyses de données et tableaux de bord.',
  keywords: ['Data Science', 'Intelligence Artificielle', 'Python', 'Power BI', 'Automatisation', 'Analyse de données'],
  authors: [{ name: 'Elmas Oulobo' }],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    alternateLocale: 'en_US',
    title: 'Elmas Oulobo - Data Scientist & AI Analyst',
    description: 'Portfolio professionnel moderne - Data Science & IA',
    siteName: 'Elmas Oulobo Portfolio',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
