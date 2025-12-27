# Portfolio Pro - Elmas Oulobo

Portfolio professionnel moderne pour Data Science & IA

![Next.js](https://img.shields.io/badge/Next.js-14.x-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38bdf8)
![License](https://img.shields.io/badge/license-MIT-green)

## 🎯 À propos

Site web portfolio professionnel pour **Elmas Oulobo**, étudiant en Master Data Science en Côte d'Ivoire. Le site met en avant l'expertise en analyse de données, automatisation, et intelligence artificielle.

## ✨ Fonctionnalités

- 🌍 **Multilingue** - Support français et anglais avec i18n routing
- 📱 **Responsive** - Design desktop-first, optimisé mobile
- ⚡ **Performance** - Next.js 14 avec App Router
- 🎨 **Moderne** - Animations Framer Motion, design professionnel
- 🔍 **SEO** - Optimisé pour les moteurs de recherche
- 📧 **Contact** - Formulaire avec emails métiers spécialisés

## 📄 Pages

1. **Accueil** - Hero, présentation, services, projets, méthode de travail
2. **À propos** - Parcours, études, valeurs, timeline
3. **Services** - 5 services data avec bénéfices détaillés
4. **Projets** - Portfolio de réalisations avec détails techniques
5. **Formations** - Ressources pédagogiques téléchargeables
6. **Contact** - Formulaire et informations de contact

## 🚀 Installation

```bash
# Cloner le projet
git clone https://github.com/Elm-as/portfolio-pro.git
cd portfolio-pro

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 🛠️ Stack Technique

- **Framework**: Next.js 14 (App Router)
- **Langage**: TypeScript
- **Styling**: Tailwind CSS + CSS Custom Properties
- **Animations**: Framer Motion
- **Icônes**: Lucide React
- **Utilitaires**: clsx, tailwind-merge

## 📁 Structure

```
portfolio-pro/
├── app/
│   ├── [lang]/              # Routes internationalisées
│   │   ├── about/
│   │   ├── contact/
│   │   ├── projects/
│   │   ├── services/
│   │   └── training/
│   ├── globals.css
│   └── layout.tsx
├── components/              # Composants React
│   ├── about/
│   ├── contact/
│   ├── home/
│   ├── projects/
│   ├── services/
│   ├── training/
│   ├── Header.tsx
│   └── Footer.tsx
├── dictionaries/           # Traductions
│   ├── fr.ts
│   └── en.ts
├── lib/                   # Utilitaires
│   ├── dictionary.ts
│   ├── i18n-config.ts
│   └── utils.ts
└── middleware.ts          # Détection locale
```

## 🌐 Internationalisation

Le site utilise un système d'i18n avec routing par préfixe:
- Français (défaut): `/fr/*`
- Anglais: `/en/*`

Changer de langue se fait via le bouton dans la navigation.

## 🎨 Personnalisation

### Couleurs

Modifiez les couleurs dans `app/globals.css`:

```css
:root {
  --primary: 217 91% 60%;  /* Bleu principal */
  --background: 0 0% 100%; /* Fond blanc */
  /* ... */
}
```

### Contenu

Les textes sont dans `dictionaries/fr.ts` et `dictionaries/en.ts`.

## 📦 Scripts

```bash
# Développement
npm run dev

# Build production
npm run build

# Démarrer en production
npm start

# Linter
npm run lint
```

## 🚢 Déploiement

Le site peut être déployé sur:
- **Vercel** (recommandé)
- **Netlify**
- **AWS Amplify**
- Tout serveur Node.js

### Vercel

```bash
npm install -g vercel
vercel
```

## 📧 Contact

- **Projets**: projet@elmas-oulobo.com
- **Opportunités**: job@elmas-oulobo.com
- **LinkedIn**: [Elmas Oulobo](https://linkedin.com)
- **GitHub**: [Elm-as](https://github.com/Elm-as)

## 📝 License

Ce projet est sous licence MIT.

---

**Conçu avec passion** ❤️ par Elmas Oulobo
