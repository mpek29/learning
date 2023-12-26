---
layout: page
title: Réaliser une application Android de toute sorte
importance: 1
---
Si vous souhaitez réaliser une application android de toute sorte, vous pouvez utiliser le langage Kotlin et le logiciel Android Studio. Sur cette page, je vais vous décrire comment faire de façon optimale (à mes yeux) pour réaliser une application Android.

## Méthode
Pour créer une application Android,

1. Réaliser une maquette sur figma (pour aller plus vite je vous conseille de dupliquer la mienne : <https://www.figma.com/community/file/1209553718708408305>

2. Créer un projet sur Android Studio en choisissant le template "Empty Activity"

3. Modifier le projet de façon à ajouter les ressources que vous avez identifiées avec Figma (font, colors, icons, logo, style, etc). Vous pourrez trouver l'essentiel de ces informations dans le dossier "values" de la hiérarchie et vous devrez créer un dossier prévu pour contenir vos différentes polices d'écritures.

4. Modifier l'activité principale enfin de permettre de passer d'une activité à une autre. Pour cela une navigation view est très pratique, mais vous pouvez également faire usage d'un `when()`.

5. Réaliser un système de base de données (je vous conseille SQlite3 qui est open-source, mais il existe firebase aussi.)
Attention, Sqlite3 crée une bdd en local alors que Firebase en crée une en ligne.

6. Créer une interface pour ajouter ou modifier quelque chose dans une base de données
