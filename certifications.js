/* ============================================================
   CERTIFICATIONS — fichier de configuration
   ------------------------------------------------------------
   Pour ajouter un certificat :
   1. Déposez son aperçu (JPG/PNG optimisé) et/ou son PDF dans
      le dossier  assets/certifications/
   2. Ajoutez une entrée ci-dessous.
  
   Champs :
   title    : intitulé exact (ne pas modifier l'original)
   issuer   : organisme émetteur
   date     : date d'obtention (optionnel)
   expiry   : date d'expiration (optionnel)
   image    : nom du fichier d'aperçu dans assets/certifications/
   pdf      : nom du fichier PDF (ouvre dans un nouvel onglet)
   verify   : lien officiel de vérification (uniquement s'il existe)
   status   : "en-cours" pour les formations en cours
   preview  : true   →  image flue (image représentative, pas la vraie certif)
              false  →  image nette (vraie certif disponible)
   ============================================================ */

var CERTIFICATIONS = [
  {
    title: "Bloomberg Market Concepts (BMC)",
    issuer: "Bloomberg",
    date: "2026",
    image: "bloomberg-bmc.jpg",
    pdf: "",
    verify: "",
    preview: true
  },
  {
    title: "Introduction to Financial Accounting",
    issuer: "Université de Pennsylvanie",
    date: "2026",
    image: "upenn-accounting.jpg",
    pdf: "",
    verify: "",
    preview: true
  },
  {
    title: "Excel Fundamentals for Data Analysis",
    issuer: "Macquarie University",
    date: "",
    image: "placeholder-certification.svg",
    pdf: "",
    verify: "",
    preview: true
  },
  {
    title: "Corporate Finance Fundamentals",
    issuer: "Corporate Finance Institute (CFI) — Coursera",
    date: "",
    image: "placeholder-certification.svg",
    pdf: "",
    verify: "",
    status: "en-cours",
    preview: true
  }
];
