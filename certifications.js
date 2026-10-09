/* ============================================================
   CERTIFICATIONS — fichier de configuration
   ------------------------------------------------------------
   Les images représentatives sont stockées dans :
   assets/certifications/

   Champs :
   title    : intitulé exact
   issuer   : organisme émetteur
   date     : date d'obtention (optionnel)
   expiry   : date d'expiration (optionnel)
   image    : nom du fichier dans assets/certifications/
   pdf      : PDF associé (optionnel)
   verify   : lien de vérification officiel (optionnel)
   status   : "en-cours" pour les formations en cours de validation
   preview  : true  => image représentative, floutée ou visuel stylisé
              false => image réelle nette
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
    image: "bloomberg-bmc.jpg",
    pdf: "",
    verify: "",
    status: "en-cours",
    preview: true
  },
  {
    title: "Corporate Finance Fundamentals",
    issuer: "Corporate Finance Institute (CFI) — Coursera",
    date: "",
    image: "upenn-accounting.jpg",
    pdf: "",
    verify: "",
    status: "en-cours",
    preview: true
  }
];
