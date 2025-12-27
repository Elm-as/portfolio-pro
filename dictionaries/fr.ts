export default {
  nav: {
    home: "Accueil",
    about: "À propos",
    services: "Services",
    projects: "Projets",
    training: "Formations",
    contact: "Contact",
  },
  home: {
    hero: {
      title: "Elmas Oulobo",
      role: "Data Scientist & Analyste IA",
      tagline: "Transformez vos données en décisions stratégiques.",
      cta1: "Voir mes projets",
      cta2: "Me contacter",
    },
    about: {
      title: "À propos",
      description: "Étudiant en Master Data Science en Côte d'Ivoire, passionné par l'intelligence artificielle et l'analyse de données. Je développe des solutions concrètes pour automatiser, analyser et visualiser vos données.",
      values: [
        "Rigueur et précision",
        "Autonomie et initiative",
        "Éthique dans l'IA",
      ],
    },
    services: {
      title: "Services",
      subtitle: "Des solutions data adaptées à vos besoins",
      cta: "Voir tous les services",
    },
    projects: {
      title: "Projets en vedette",
      subtitle: "Découvrez mes réalisations récentes",
      cta: "Voir tous les projets",
    },
    method: {
      title: "Ma méthode de travail",
      steps: [
        {
          title: "Compréhension du besoin",
          description: "Analyse approfondie de vos objectifs et contraintes",
        },
        {
          title: "Préparation des données",
          description: "Nettoyage et structuration pour garantir la qualité",
        },
        {
          title: "Analyse & Modélisation",
          description: "Application des techniques d'IA et automatisation",
        },
        {
          title: "Usage intelligent de l'IA",
          description: "Adaptation et validation, pas simple génération",
        },
        {
          title: "Validation client",
          description: "Itérations jusqu'à satisfaction complète",
        },
      ],
    },
    finalCta: {
      title: "Prêt à démarrer votre projet ?",
      description: "Discutons de vos besoins et trouvons ensemble la meilleure solution data pour votre entreprise.",
      cta: "Lancer un projet",
    },
  },
  about: {
    hero: {
      title: "À propos de moi",
      subtitle: "Passionné par la data science et l'intelligence artificielle",
    },
    background: {
      title: "Parcours",
      education: "Master Data Science",
      location: "Côte d'Ivoire",
      description: "Étudiant en Master Data Science, je me spécialise dans l'analyse de données, l'automatisation et le développement d'outils intelligents. Mon objectif est de transformer des données complexes en insights actionnables.",
    },
    vision: {
      title: "Vision & Valeurs",
      items: [
        {
          title: "Rigueur",
          description: "Une approche méthodique et précise dans chaque projet",
        },
        {
          title: "Autonomie",
          description: "Capacité à prendre des initiatives et à résoudre les problèmes",
        },
        {
          title: "Éthique IA",
          description: "Utilisation responsable et transparente de l'intelligence artificielle",
        },
      ],
    },
    timeline: {
      title: "Progression",
      events: [
        {
          year: "2024",
          title: "Master Data Science",
          description: "Spécialisation en analyse de données et IA",
        },
        {
          year: "2023",
          title: "Projets d'automatisation",
          description: "Développement d'outils et scripts Python",
        },
        {
          year: "2022",
          title: "Formation intensive",
          description: "Power BI, Python, bases de données",
        },
      ],
    },
    cta: {
      downloadCv: "Télécharger mon CV",
    },
  },
  services: {
    hero: {
      title: "Services",
      subtitle: "Solutions data professionnelles adaptées à vos besoins",
    },
    list: {
      automation: {
        title: "Création d'outils & scripts data",
        desc: "Développement de scripts Python personnalisés pour automatiser vos tâches répétitives et gagner du temps.",
        benefits: [
          "Gain de temps considérable",
          "Réduction des erreurs manuelles",
          "Scripts réutilisables et maintenables",
        ],
      },
      dashboards: {
        title: "Tableaux de bord",
        desc: "Création de dashboards interactifs avec Power BI ou Excel avancé pour visualiser vos KPIs en temps réel.",
        benefits: [
          "Visualisation claire et intuitive",
          "Suivi en temps réel",
          "Prise de décision facilitée",
        ],
      },
      analysis: {
        title: "Analyses et études de données",
        desc: "Analyses statistiques approfondies pour découvrir des insights cachés dans vos données.",
        benefits: [
          "Découverte de tendances",
          "Recommandations actionnables",
          "Rapports détaillés",
        ],
      },
      reporting: {
        title: "Automatisation de reporting",
        desc: "Automatisation complète de vos rapports périodiques pour gagner du temps et assurer la cohérence.",
        benefits: [
          "Rapports automatiques",
          "Cohérence garantie",
          "Libération de temps précieux",
        ],
      },
      database: {
        title: "Conception de bases de données",
        desc: "Création et structuration de bases de données simples et efficaces pour organiser vos informations.",
        benefits: [
          "Structure organisée",
          "Accès rapide aux données",
          "Évolutivité assurée",
        ],
      },
    },
    cta: "Discuter de mon projet",
  },
  projects: {
    hero: {
      title: "Projets",
      subtitle: "Découvrez mes réalisations en data science et automatisation",
    },
    list: [
      {
        title: "Dashboard analytique Power BI",
        context: "Entreprise souhaitant suivre ses KPIs en temps réel",
        problem: "Données dispersées dans plusieurs fichiers Excel, rapports manuels chronophages",
        solution: "Création d'un dashboard Power BI connecté aux sources de données avec actualisation automatique",
        tools: ["Power BI", "Excel", "DAX"],
        method: "Collecte des besoins → Nettoyage des données → Modélisation → Création des visuels → Formation",
        result: "70% de temps gagné sur le reporting, visibilité en temps réel des indicateurs clés",
      },
      {
        title: "Script d'automatisation Python",
        context: "Automatisation de tâches répétitives de traitement de données",
        problem: "Processus manuel de nettoyage et transformation de données prenant plusieurs heures",
        solution: "Développement d'un script Python automatisant le workflow complet",
        tools: ["Python", "Pandas", "Openpyxl"],
        method: "Analyse du processus → Développement itératif → Tests → Documentation → Déploiement",
        result: "Réduction de 5h à 10min du temps de traitement, élimination des erreurs manuelles",
      },
      {
        title: "Analyse prédictive de données",
        context: "Analyse de données historiques pour anticiper les tendances",
        problem: "Difficulté à prévoir les évolutions et prendre des décisions éclairées",
        solution: "Modèle d'analyse prédictive basé sur l'historique avec visualisations",
        tools: ["Python", "Scikit-learn", "Matplotlib"],
        method: "Exploration des données → Feature engineering → Modélisation → Validation → Interprétation",
        result: "Prédictions fiables à 85%, meilleure planification stratégique",
      },
    ],
  },
  training: {
    hero: {
      title: "Formations & Ressources",
      subtitle: "Ressources pratiques pour maîtriser la data science",
    },
    description: "Découvrez mes guides et tutoriels orientés pratique pour apprendre Python, l'automatisation et l'analyse de données.",
    resources: [
      {
        title: "Introduction à Python pour la Data",
        description: "Guide pratique pour débuter en Python appliqué à l'analyse de données",
        type: "PDF",
        level: "Débutant",
      },
      {
        title: "Automatisation avec Python",
        description: "Techniques et exemples concrets pour automatiser vos tâches",
        type: "PDF",
        level: "Intermédiaire",
      },
      {
        title: "Power BI : Les fondamentaux",
        description: "Créez vos premiers dashboards professionnels",
        type: "PDF",
        level: "Débutant",
      },
      {
        title: "Nettoyage de données avec Pandas",
        description: "Maîtrisez le nettoyage et la transformation de données",
        type: "PDF",
        level: "Intermédiaire",
      },
    ],
    cta: "Télécharger",
  },
  contact: {
    hero: {
      title: "Contact",
      subtitle: "Discutons de votre projet",
    },
    info: {
      title: "Restons en contact",
      description: "N'hésitez pas à me contacter pour discuter de vos besoins en data science et automatisation.",
      emails: {
        project: "projet@elmas-oulobo.com",
        job: "job@elmas-oulobo.com",
      },
    },
    form: {
      title: "Envoyez-moi un message",
      name: "Nom complet",
      email: "Email",
      subject: "Objet",
      message: "Message",
      send: "Envoyer",
      sending: "Envoi en cours...",
      success: "Message envoyé avec succès !",
      error: "Une erreur s'est produite. Veuillez réessayer.",
    },
  },
  footer: {
    rights: "Tous droits réservés",
    madeWith: "Conçu avec passion",
  },
}
