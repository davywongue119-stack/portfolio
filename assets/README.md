# Dossier assets

Ce dossier est destiné à contenir les fichiers statiques du site :

- PDF du CV
- images du portfolio
- visuels de certifications
- portraits ou captures

Exemple de structure correcte :

```text
portfolio/
├── index.html
├── cv.html
├── certifications.js
├── assets/
│   ├── CV_Wongue_Davy_Cedric.pdf
│   ├── portrait.jpg
│   ├── cv-preview.jpg
│   └── certifications/
│       ├── cert-1.jpg
│       └── cert-2.jpg
└── README.md
```

Pour référencer un fichier dans le HTML, utilise un chemin relatif comme :

```html
<a href="assets/CV_Wongue_Davy_Cedric.pdf">Voir mon CV</a>
<img src="assets/portrait.jpg" alt="Portrait" />
```

Ne mets pas le dossier `assets` dans du JavaScript comme un « morceau de code » : c'est simplement un dossier de fichiers.
