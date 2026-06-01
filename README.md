# Site SJO2 — Église Saint Joseph (Le Rouret)

Site web du projet de construction de l'église Saint Joseph et du centre paroissial.
Destination : https://saint-joseph.saint-arnoux.fr/

## Structure du projet

```
index.html              → la page (structure HTML uniquement)
css/
  style.css             → toute la mise en forme (couleurs, polices, mise en page)
js/
  content.js            → ⭐ CONTENU ÉDITABLE (montant collecté, bios équipe, lien formulaire)
  app.js                → navigation, menu, fiches équipe (modale), animations
  clocher.js            → clocher + mur des bâtisseurs + frise de collecte
  budget.js             → animation du graphique budget
  fallback.js           → filet de sécurité d'affichage
assets/
  img/                  → toutes les images (photos équipe, rendus, QR, logos)
opengraph-image.jpg, sitemap.xml, robots.txt → fichiers pour la mise en ligne (à la racine)
```

## Modifier le contenu sans toucher au code  →  js/content.js

Tout ce qui change souvent est regroupé dans **js/content.js** :

- **Montant collecté** : changez `raised: 1400000` (en euros). Le clocher, les cm,
  les pierres, le %, le mur et le « reste à collecter » se recalculent seuls.
- **Lien du formulaire de contact** : collez l'URL de votre Google Form dans `contactFormUrl`.
- **Fiches équipe** (`membres`) : pour chaque personne, `role` (affiché sous le nom)
  et `bio` (texte de la fiche). Utilisez `\n` pour un saut de ligne.

Après modification, enregistrez le fichier et rechargez la page.

## Changer / ajouter une photo d'équipe

1. Déposez la photo dans `assets/img/` (format carré conseillé, ~460×460 px, .jpg).
2. Dans `index.html`, retrouvez la personne (cherchez son nom) et adaptez le `src`.
3. La clé `data-key` du portrait doit correspondre à la clé dans `js/content.js`.

## Travailler à plusieurs

Les fichiers sont en texte simple : ils s'éditent dans n'importe quel éditeur
(VS Code recommandé) et se versionnent très bien avec Git/GitHub.
Le plus souvent, seul **js/content.js** a besoin d'être modifié.

## Mettre en ligne

Copiez tout le contenu de ce dossier à la racine de l'hébergement
(`index.html` à la racine). Placez aussi `opengraph-image.jpg`, `sitemap.xml`
et `robots.txt` à la racine du domaine.
