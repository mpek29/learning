---
layout: page
title: C++
importance: 4
---

## Points essentielle
Si vous avez commencez l'apprentissage de la programmation par le langage python, cas très courant de nos jours (un pense-bête y est dédié et détails plus les bases de l'algorithmie), voici quelques différences essentielles à retenir dans un premier temps :

- Pour pouvoir exécuter du C++ rendez vous [ici](https://code.visualstudio.com/docs/languages/cpp).
- Chaque instruction C++ se termine par un point-virgule `;`.
- Au début d'un mono-ligne commentaire, on placera deux barres obliques `//`.
- Les commentaires sur plusieurs lignes commencent par `/*` et se terminent par `*/`.
- L'instruction `break` peut être utilisée pour sortir d'une boucle ou d'une instruction switch.
- Le mot clé `continue` permet d'ignorer le reste de l'itération en cours de la boucle et de revenir au point de départ de la boucle.

## Déclarer une variable
Pour créer une variable, il faut en spécifier le type et lui attribuer une valeur :
*type variableName = value;*_

Pour déclarer plusieurs variables du **même type**, utilisez une liste séparée par des virgules :
``` cpp
int x = 5, y = 6, z = 50;
```

Il est possible de déclarer des variables constantes lorsque l'on souhaite pas que celle-ci puisse évolué au fil de l'exécution du code :
``` cpp
const int minutesPerHour = 60;
const float PI = 3.14; 
```

## Les principaux types de données
Voici les principaux types de données.

| **Types de données**       | **Exemple**                 |
|--------------------------  |---------------------------  |
| `int`                      | 123 ou -123                 |
| `double`                   | 19.99 ou -19.99             |
| `char`                     | 'a' ou 'B'                  |
| `string`                   | "Hello World"               |
| `bool`                     | True ou False               |

Pour utiliser les `string`, vous devez inclure un fichier d'en-tête supplémentaire dans le code source, la bibliothèque `<string>` :
``` cpp
// Include the string library
#include <string>
```
<br>

## Opérateurs
Il est possible de faire interagir les variables entre elles à l'aide d'opérateurs afin de générer des valeurs de type `bool` (qui pourront être par la suite utilisées pour faire usage d'instruction conditionnelle ou d'instruction de boucle de la forme `while` ou `for`).

| **Différents opérateurs**   | **Types de données**                                              |
|---------------------------  |------------------------------------------------------------------ |
| Opérateurs arithmétique     | `+`, `-`, `*`, `/`, `%`, `++`, `--`                               |
| Opérateurs d'assignement    | `=`, `+=`, `-=`, `*=`, `/=`, `%=`, `&=`, `|=`, `^=`, `>>=`, `<<=` |
| Opérateurs de comparaison   | `==`, `!=`, `>`, `<`, `>=`, `<=`                                  |
| Opérateurs logique          | `&& `, `|| `, `!`                                                 |

<br>

## Les tableaux
Les tableaux sont utilisés pour stocker plusieurs valeurs dans une seule variable, au lieu de déclarer des variables distinctes pour chaque valeur.
Pour déclarer un tableau, définissez le type de variable, indiquez le nom du tableau suivi de crochets et précisez le nombre d'éléments à stocker (on peut indiquer les élements qu'ils contiennent mais ce n'est pas obligatoire).
``` cpp
int tableauVide[4];
int tableauPlein[4] = {10, 20, 30, 40};
```

## Instruction conditionnelle
### `if` 
Une instruction conditionnelle est une instruction (appel de fonction, affectation de variable, etc.) qui sera ignorée ou considérée en fonction de la valeur du booléen placé à la suite du mot "if". Si ce booléen vaut True, l'instruction sera considérée et si ce booléen vaut False, l'instruction sera ignorée.

``` cpp
if(true) {
  std::cout << "Ceci sera affiché";
}else{
  std::cout << "Ceci ne sera pas affiché";
}
```

``` cpp
if(false) {
  std::cout << "Ceci ne sera pas affiché";
}else{
  std::cout << "Ceci sera affiché";
}
```

### Opérateur ternaire
Il s'agit de l'abréviation d'une instruction `if` .
``` cpp
variable = (condition) ? expressionTrue : expressionFalse;
```

### `switch`
L'instruction switch permet de sélectionner un bloc de code parmis un ensemble.
Il peut rendre la lecture et l'écriture de code plus simple que son équivalent composé de `if`.

``` cpp
int day = 4;
switch (day) {
  case 1:
    std::cout << "Monday";
    break;
  case 2:
    std::cout << "Tuesday";
    break;
  case 3:
    std::cout << "Wednesday";
    break;
  case 4:
    std::cout << "Thursday";
    break;
  case 5:
    std::cout << "Friday";
    break;
  case 6:
    std::cout << "Saturday";
    break;
  case 7:
    std::cout << "Sunday";
    break;
}
// Outputs "Thursday" (day 4) 
```

## Instructions de boucle
### `while`
Une instruction de boucle de la forme `while` est très proche d'une instruction conditionnelle mise à part qu'au lieu de simplement ignorer ou considérer une instruction, on va répéter en boucle l'instruction temps que la valeur du booléen n'est pas False.

``` cpp
while (true) {
  std::cout <<"Ceci sera répété en boucle.\n";
}
```

``` cpp
while (false) {
  std::cout <<"Ceci ne sera pas répété en boucle.\n";
}
```

### `do/while`
La boucle `do/while` est une variante de la boucle `while`. Cette boucle exécute le bloc de code une fois, avant de vérifier si la condition est vraie, puis elle répète la boucle tant que la condition est vraie.
``` cpp
do {
  // code block to be executed
}
while (condition);
```

### `for`
Lorsque vous savez exactement combien de fois vous voulez exécuter bloc de code, utilisez la boucle for au lieu de la boucle while :

``` cpp
for (int i = 0; i < 5; i++) {
  std::cout << i << "\n"";
}
```

On peut également imbriquer deux boucles for (très utile lorsque l'on a une liste de liste).
``` cpp
// Outer loop
for (int i = 1; i <= 2; ++i) {
  std::cout << "Outer: " << i << "\n"; // Executes 2 times

  // Inner loop
  for (int j = 1; j <= 3; ++j) {
    std::cout << " Inner: " << j << "\n"; // Executes 6 times (2 * 3)
  }
}
```
## References
La référence est un alias pour une variable déjà existante. Une fois qu'elle est initialisée à une variable, elle ne peut plus être modifiée pour faire référence à une autre variable. Il s'agit donc d'un pointeur constant.
``` cpp
string var1 = "Value1"; // var1 variable
string &var2 = var1; // reference to var1
```

## Pointers
Le pointeur est une variable qui contient l'adresse mémoire d'une autre variable.
``` cpp
int variable = 2;
int *var_name; 

var_name = &variable;
```

## Fonctions

### Définition
Pour définir une fonction, on utilise le mot-clé `void` si celle-ci ne retourne aucune valeur.
Sinon, il faudra précisé le type de la donnée.
``` cpp
void myFunction() {
  std::cout << "Hello from a function";
}
```

### Appel
Pour appeler une fonction, utilisez le nom de la fonction suivi de parenthèses.
```cpp
myFunction();
```

### Arguments
Il est possible de transmettre des valeurs qui changeront à chaque appel d'une fonction à l'aide d'arguments. Ces valeurs peuvent être contenues dans des variables dont on indiquera le nom ou alors on pourra directement donner les valeurs souhaitées. Les arguments sont spécifiés après le nom de la fonction, entre parenthèses. Il n'y a pas de limites dans le nombre d'arguments, il suffit juste de les séparer entre eux à l'aide d'une virgule.

``` cpp
void my_function(const std::string &nickname) {
    std::cout << "Son surnom est: " << nickname << "\n";
}

int main() {
    std::string florian_nickname = "Palpek";
    my_function(florian_nickname);
    my_function("Alphonse");

    return 0;
}
```
L'exemple ci-dessus présente une fonction avec un seul argument nommé "nickname". À chaque fois que nous réalisons un appel de la fonction, nous transmettons un prénom, qui est utilisé à l'intérieur de la fonction pour afficher dans le terminal le nom complet.

## Les headers
En C++, à la suite de la création d'un module, il est nécessaire de réaliser un fichier header afin d'inclure les fonctions que celui-ci implémente.

Voici un exemple:
``` cpp
//myModule.cpp
void my_function(const std::string &nickname) {
    std::cout << "Son surnom est: " << nickname << "\n";
}
```
``` cpp
//myModule.hpp
void my_function(const std::string &nickname);
```

``` cpp
//main.cpp
#include "myModule.hpp"

int main() {
    my_function("Alphonse");
    return 0;
}
```

## Source
- <https://www.w3schools.com/python/python_reference.asp>
