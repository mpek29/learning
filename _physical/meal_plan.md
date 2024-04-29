---
layout: page
title: Réaliser votre plan repas !
category: Alimentation
importance: 1
---

Bienvenue, sur cette page où tu vas pouvoir apprendre comment et pourquoi réaliser un plan repas.

## Macronutriments et calories
On peux aisément simplifier l'alimentation d'un individu autour de 2 notions clés:

- Macronutriments: Ils sont les composants nutritif d'une alimentation. Il existe 3 types de macronutriment: les protéines, les glucides (sucre) et les lipides(gras).

- Calories: Unité de mesure du potentiel énergétique. On peut faire le lien avec les macronutriments en notant que 1g de protéine vaut 4calories, 1g de glucides vaut 4calories et 1g de lipides vaut 9calories.

Ici les macronutriments seront gages de la **qualité** de votre alimentation et les calories de la **quantité d'énergétique** dans votre alimentation.

Il sera donc question de maintenir une bonne répartition dans ces macronutriments et de faire varier la quantité de calorie en fonction de si l'on souhaite faire une prise de masse ou une perte de poids.

En effet, l’épidémie d’obésité résulte d’un d’apport energétique total quotidien (AETQ) excessif par rapport aux dépenses chez l’enfant comme chez l’adulte. La première recommandation majeure est donc, au sein de toutes les classes d’âge, de limiter les apports énergétiques (les calories) quelle que soit leur forme et d’augmenter la dépense énergétique (à savoir l'activitée physique).

### Précision glucides
Il est aussi à noter que les glucides existent sous 3 formes: glucides complexes, glucides simples et glucides ajoutés.
Les glucides simples et glucides ajoutés sont assimilés très rapidement par le corps comparé aux glucides complexes. Cela peut provoquer des pics de glucides non-souhaitables dans l'organisme. Une recommandation courante est donc de favoriser la consommation de glucides complexes.

## Répartition des macronutriments
### Apport Protéines
Chez l’adulte en bonne santé, l'apport conseillé est de 0.83 g/kg/jour et le maximum 2.2 g/kg/jour (soit  de 10 à 27 % de l’Apport Énergétique Total Quotidien (AETQ)).

Chez le sportif d'endurance (1-2 h/jour durant 4-5 jours par semaine), l'apport conseillé est entre 1.2 et 1.4 g/kg/jour.

Chez l'athlète confirmé dans les disciplines de force, l'apport conseillé est entre 1.3 et 1.5 g/kg/jour

Si on souhaite réaliser une prise de masse musclaire, on peut aller jusque 2.5g/kg/jour maximum mais pas durant plus de 6mois

### Apport Glucides
Pour la population générale, il faut que les glucides représentent 50% de l’Apport Énergétique Total Quotidien (AETQ).

Pour les sportifs, l'apport conseillé se situe entre 4-5 g/kg/jour et 10-12 g/kg/jour (soit entre 50% et 70% de l’Apport Énergétique Total Quotidien (AETQ)).

### Apport lipides
Pour la population générale (et de même pour les sportifs), l'apport conseillé se situe entre 35% à 40% de l’Apport Énergétique Total Quotidien (AETQ) avec un grand minimum à 30% de l’Apport Énergétique Total Quotidien (AETQ).

### Dans le temps
Il est à noter que les apports en glucides et protéines après l’effort sont déterminants pour éviter toute catalyse (destruction du muscle en vu de fournir des nutriments aux corps).

## Recommandation sur le mode de consommation des aliments
Un ensemble de recommandation sur la manière de repartir sa consommation de nourriture à été établi au sein des documents servant de base à cette page.

Les voicis en 2 points:
- La consommation de nourriture doit se faire au sein de repas structurés (petit-déjeuner et goûter inclus) plutôt qu’en dehors des repas.

- La consommation des glucides doit se faire plutôt sous forme solide que liquide. En effet l’eau est la seule boisson indispensable, en particulier chez les jeunes enfants.

- Les repas principal (déjeuner et dîner) doivent comporter quatres composantes (un source de légumes, de produits céréaliers, de protéine et un fruit).

- Le petit-déjeuner et le goûter doivent comporter un produit céréalier, un produit laitier, un fruit et une boisson.

## Exemple de plan repas
Afin de mettre en application l'ensemble des recommandations citée plus hauts, il va être question de réaliser un plan repas. Pour faciliter les explications, je vous propose de passer par un exemple concret.
Attention, cela peut paraitre très contraignant de suivre un plan repas mais en réalité rien ne vous empêche de ne pas en tenir compte lors d'un repas par semaine (un restaurant entre ami par exemple), cela ne réprésenterai que 4 repas sur les 56 contenues dans un mois.

### Détermination de l'apport Énergétique Total Quotidien (AETQ)
La première étape consiste à évaluer la quantité d'énergie dont vous avez besoin chaque jour.

1 - On calcule son métabolisme de base (nombre de calorie consommé pour assurer nos fonctions vitales)
Pour cela, on utilisera l’équation de Mifflin St Jeor:  

```python
MB_femmes =  (10 * poids_kg) + (6.25 * taille_cm) - (5 * age_annees) - 161
MB_hommes =  (10 * poids_kg) + (6.25 * taille_cm) - (5 * age_annees) + 5
```

Pour un homme de 21 ans, mesurant 1,83 m et pesant 80 kilos, cela donne :
```python
MB_hommes =  (10 * 80) + (6.25 * 183) - (5 * 21) + 5 = 1843.75
```

Soit un métabolisme de base de **1844 calories environ**.

2 - On calcul ensuite sa dépense énergétique journalière (cette fois si on inclus l'activités physique)

```python
DEJ = MB x NAP
```

Avec :
- NAP = 1.2 si vous êtes sédentaire (moins de 30 minutes d’activité physique par jour)
- NAP = 1.4 si vous êtes actif (1 heure d’activité physique par jour)
- NAP = 1.6 si vous êtes très actif (2 heures d’activité physique par jour)
- NAP = 1.8 si vous êtes extrêmement actif (métier physique et activité sportive en même temps, ou sportif en compétition)

Ici notre homme de 21ans est actif et a un MB de 1844 calories comme déterminé précédemment.

```python
DEJ = MB * NAP = 1844 * 1.4 = 2581.6
```

Soit une dépense énergétique journalière de **2582 calories environ**.

3 - On calcul l'apport énergétique total quotidien

- Pour perdre du gras : AETQ < DEJ  (coef entre 5% à 10% de diminution de l’AETQ initial)
- Pour maintenir votre composition corporel :  AETQ = DEJ (coef = 1)
- Pour prendre de la masse musculaire : AETQ > DEJ (coef entre 5% à 10% d’augmentation de l’AETQ initial)

Ici notre homme de 21ans souhaite perdre du gras (et a souvent du mal à y arriver donc on va faire une diminution de 20%).
```python
AETQ = DEJ * coeff =  2582 * (1-0.2) = 2065.6
```

À noter : Si jamais l'effet sur le corps n'est pas celui souhaité (après analyse de son poids), vous pouvez réduire ou augmenter de 200calories votre AETQ.

Conclusion : On a donc désormais une idée précise du nombre de calorie que l'on doit ingérer chaque jour pour atteindre notre objectif.

### Détermination du nombre de gramme de chaque macronutriment chaque jour
Ici on calcul les macronutriments pour un sportif, vous pouvez extraire les valeurs plus hautes si vous avez un mode de vie plus sédentaire.

Voici la répartition : 
```python
proteines = taux_prot * poids_kg
glucides = (AETQ*pourcentage_glu)/4
lipides = (AETQ*pourcentage_lip)/9
calories = proteines *4 + glucides * 4 + lipides * 9
```

Pour notre homme de 21ans de 80kg et plutôt sportif cela donne  :
```python
proteines = 1.5 * 80 = 120
glucides = (2065*0.5)/4 = 258
lipides = (2065*0.3)/9 = 69
calories = 120 *4 + 258 * 4 + 69 * 9 = 2133
```
On pourrait avoir fini mais on remarque que le nombre de calorie obtenu est différent de l'AETQ.
En effet, les glucides et les lipides sont calculés à partir de l'AETQ tandis que la protéine l'est à partir du poids en kg de l'individu.
On va donc appliqué un léger coeff sur pourcentage_glu et pourcentage_lip afin d'avoir AETQ = calories.

```python
proteines = taux_prot * poids_kg
glucides = (AETQ*pourcentage_glu*coeff_redu_lip_glu)/4
lipides = (AETQ*pourcentage_lip*coeff_redu_lip_glu)/9
```

Ce qui donne pour notre exemple:
```python
proteines = 1.5 * 80 = 120
glucides = (2065*0.5*0.97)/4 = 250
lipides = (2065*0.3*0.97)/9 = 67
calories = 120 *4 + 250 * 4 + 67 * 9 = 2083
```

Soit **120g de protéines**, **250g de glucides** et **67g de lipides** pour un total de **2083 calories environ**.

### Le plan repas
Maintenant, il est question de réaliser le plan repas en lui même.

L'important est d'avoir un petit-déjeuner et goûter composés de 4éléments (un produit céréalier, un produit laitier, un fruit et une boisson).
Ainsi qu'un déjeuner et un dîner composés de 4éléments (légumes, produits céréaliers, protéines et un fruit).

Une fois votre plan repas constitué de tout ces éléments: retrouver le nombre de calories qu'ils contiennent grâce à [les-calories.com](https://www.les-calories.com/), via l'étiquette inscrite sur ceux-ci ou le site du drive de votre supermarché.

Il ne vous reste plus cas calculer la quantité de macronutriment et de calories de l'ensemble et à adapter les portions (un écart de 50 calories étant tolérables).

## Source
- Agence française de sécurité sanitaire des aliments (Afssa), *Apport en protéines : consommation, qualité, besoins et recommandations*, 2007 ([lire en ligne](https://www.anses.fr/fr/system/files/NUT-Ra-Proteines.pdf)).

- Agence française de sécurité sanitaire des aliments (Afssa), *Glucides et santé : Etat des lieux, évaluation et recommandations*, Octobre 2004 ([lire en ligne](https://www.anses.fr/fr/system/files/NUT-Ra-Glucides.pdf)).

- Agence nationale de sécurité sanitaire de l’alimentation, de l’environnement et du travail (Anses), *Actualisation des apports nutritionnels conseillés pour les acides gras*, Mai 2011 ([lire en ligne](https://www.anses.fr/fr/system/files/NUT2006sa0359Ra.pdf)).

- DECATHLON Blog, *Les méthodes de calcul du métabolisme de base* ([lire en ligne](https://conseilsport.decathlon.fr/les-methodes-de-calcul-du-metabolisme-de-base)).

