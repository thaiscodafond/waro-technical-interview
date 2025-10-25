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

## Sources

[UC Berkeley](https://dap.berkeley.edu/web-a11y-basics/accessible-card-ui-component-patterns)
[WCAG exchange on card](https://ux.stackexchange.com/questions/118719/wcag-aa-compliance-and-card-patterns)
[WCAG](https://design-system.w3.org/components/cards.html)
