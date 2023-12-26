---
layout: page
title: Python 3
importance: 1
---

## Notion de variable
La notion de variable désigne un conteneur ayant pour but de stocker une **valeur** sous forme de donnée ayant une **adresse mémoire** propre.

## Les principaux types de données
Les **valeurs** énoncées dans la partie précédente sont d'un type précis, ici on décrit les principaux types de données.

| **Catégories de données**  | **Types de données**        |
|--------------------------  |---------------------------  |
| Type de texte              | `str`                       |
| Types numériques           | `int`, `float`, `complex`   |
| Types de séquence          | `list`, `tuple`, `range`    |
| Type de mappage            | `dict`                      |
| Type booléen               | `bool`                      |

<br>

## Opérateurs
Il est possible de faire interagir les variables entre elles à l'aide d'opérateurs afin de générer des valeurs de type `bool` (qui pourront être par la suite utilisées pour faire usage d'instruction conditionnelle ou d'instruction de boucle de la forme `while`).

| **Différents opérateurs**   | **Types de données**              |
|---------------------------  |---------------------------------- |
| Opérateurs de comparaison   | `==`, `!=`, `>`, `<`, `>=`, `<=`  |
| Opérateurs logiques         | `and`, `or`, `not`                |
| Opérateurs d'appartenance   | `in`, `not in`                    |

<br>

## `if` Instruction conditionnelle
Une instruction conditionnelle est une instruction (appel de fonction, affectation de variable, etc.) qui sera ignorée ou considérée en fonction de la valeur du booléen placé à la suite du mot "if". Si ce booléen vaut True, l'instruction sera considérée et si ce booléen vaut False, l'instruction sera ignorée.

``` python
if True :
  print('Ceci sera affiché')
else:
  print('Ceci ne sera pas affiché')
```

``` python
if False :
  print('Ceci ne sera pas affiché')
else:
  print('Ceci sera affiché')
```


## Instructions de boucle
### `while`
Une instruction de boucle de la forme `while` est très proche d'une instruction conditionnelle mise à part qu'au lieu de simplement ignorer ou considérer une instruction, on va répéter en boucle l'instruction temps que la valeur du booléen n'est pas False.

``` python
while True :
  print('Ceci sera répété en boucle')
```

``` python
while False :
  print('Ceci ne sera pas répété en boucle')
```


### `for`
Une instruction de boucle de la forme `for` permet essentiellement de parcourir une séquence (cela correspond à 3 types comme vu précédemment : `list`, `tuple` et `range`).

On peut parcourir ainsi une liste de façon on ne peut plus classique.
``` python
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
  print(fruit)
```

On peut incrémenter une valeur au fur et à mesure des répétitions d'un boucle grâce à range().
``` python
for x in range(2, 6):
  print(x)
```

Cela peut nous amener à une alternative de la première boucle permettant de garder en note l'indice de l'élément courant.
``` python
fruits = ["apple", "banana", "cherry"]
for i in range(len(fruits)):
  fruit = fruits[i]
  print(fruit)
```

## Fonctions

### Définition
Pour définir une fonction, on utilise le mot-clé `def`.
``` python
def my_function():
  print("Hello from a function") 
```

### Appel
Pour appeler une fonction, utilisez le nom de la fonction suivi de parenthèses.
``` python
my_function()
```

### Arguments
Il est possible de transmettre des valeurs qui changeront à chaque appel d'une fonction à l'aide d'arguments. Ces valeurs peuvent être contenues dans des variables dont on indiquera le nom ou alors on pourra directement donner les valeurs souhaitées. Les arguments sont spécifiés après le nom de la fonction, entre parenthèses. Il n'y a pas de limites dans le nombre d'arguments, il suffit juste de les séparer entre eux à l'aide d'une virgule.

``` python
def my_function(nickname):
  print(f"Son surnom est: {nickname}")

florian_nickname = "Palpek"
my_function(florian_nickname)
my_function("Alphonse") 
```
L'exemple ci-dessus présente une fonction avec un seul argument nommé "nickname". À chaque fois que nous réalisons un appel de la fonction, nous transmettons un prénom, qui est utilisé à l'intérieur de la fonction pour afficher dans le terminal le nom complet.

### Récursivité
Une fonction est dite récursive si elle s'appelle elle-même.
Il faut être très prudent avec la récursivité car il est très vite possible de tomber dans le cas d'une fonction qui ne se termine jamais ou qui a une consommation excessive de ressource.

Un très bon exemple afin de se faire une idée de ce qu'est une fonction récursive et de son éventuel intérêt est la fonction `puissance(y, n)` ci-dessous. Il est à noter que dans un cas réel, il suffit de faire `print(y**n)`.

``` python
def puissance(y, n):
    if n == 0:
        return 1
    else:
        return y*puissance(y, n-1)

print(puissance(2, 3))
```

## Source
- <https://www.w3schools.com/python/default.asp>
