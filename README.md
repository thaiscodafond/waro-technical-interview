# Interview technique avec Waro

## Etape 1: Analyse du sujet

### Besoin utilisateur

Je suis une employée qui veut suivre les produits de la prochaine saison. Je regarde tous nos produits. Je veux pouvoir repérer directement les produits,
comprendre d'un coup d'oeil l'état de ceux-ci. Je veux identifier rapidement les status. Je veux pouvoir comparer les produits, et naviguer efficacement. Je veux aussi repérer les produits sans données. Je veux savoir facilement comment accéder aux détails.

Repérer directement les produits -> Nom et photo
Etat -> Impact, statut
Rapidement -> Code couleur clair
Naviguer efficacement -> Faire en sorte d'avoir un code efficqce, sans bottleneck
Comparer facilement -> Template très répétitif, code couleur clair, filtrage possible (mais pas demandé).
Savoir facilement comment accéder aux détails -> Preuve visuelle de la fonction "clic".

### Informations disponibles

Types d'informations disponible: nom, photo, catégorie, variant, impact CO2, tags, statut.

Plateforme environnement donc évidemment mettre en première place l'impact CO2, peut-être même un code couleur en fonction de la valeur.

| Élément                  | Priorité visuelle | Mise en place                           |
| ------------------------ | ----------------- | --------------------------------------- |
| **Image du produit**     | Haute             | Grand ou moyen format                   |
| **Nom du produit**       | Haute             | Texte principal, highlight avec du gras |
| **Statut**               | Moyenne/Haute     | Badge coloré en bas                     |
| **Catégorie + variants** | Moyenne           | Ligne secondaire sous le titre          |
| **Impact CO2**           | Moyenne           | Mise en place à droite en haut          |
| **Tags**                 | Basse à moyenne   | Petits badges                           |

### Composant

Equivalent à une "Block link card"
Le composant doit être "cliquable" -> élément visuel (hover, focus) OU logo.
Affichage dynamiques de tags.
Statut code couleur clair: non commencé rouge ou gris, en cours orange, terminé vert.
Photo manquante avoir un fall back

### Waro

Code couleur bleu vert.

## Le composant (Design, développement)

### Figma

[Figma](https://www.figma.com/design/qaDJGENKb1X1TaskDZcpdl/Waro-interview?node-id=0-1&m=dev&t=ipRL7Wx4qzrcoFeG-1)

### Choix techniques

Routing, aria, hover, .. components assez simples et réutilisables.

## Sources

[UC Berkeley](https://dap.berkeley.edu/web-a11y-basics/accessible-card-ui-component-patterns)
[WCAG exchange on card](https://ux.stackexchange.com/questions/118719/wcag-aa-compliance-and-card-patterns)
[WCAG](https://design-system.w3.org/components/cards.html)
[Sussex academy color palettes](https://www.sussex.ac.uk/tel/resource/tel_website/accessiblecontrast/?q=FFFFFF~003b49~1d4289~94a596~e56db1~d3273e~00bfb2~d6d2c4~ffc845~dc582a~41b6e6~1b365d~be84a3~5d3754~7da1c4~f2c75c~d0d3d4~007a78~000000)
[Waro](https://www.waro.io)
