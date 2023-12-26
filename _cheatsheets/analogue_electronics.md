---
layout: page
title: Electronique analogique
importance: 2
---

## Dipôles de Base

### Resistance
{% include figure.html path="assets/img/cheatsheets/analogue_electronics/resistor.svg" class="img-fluid" style="background-color: white; width: 180px;" %}

- Modèle : $$ u(t)=Ri(t) $$
- Impedance généralisée : $$ Z_R=R $$

### Condensateur
{% include figure.html path="assets/img/cheatsheets/analogue_electronics/capacitor.svg" class="img-fluid" style="background-color: white; width: 180px;" %}

- Modèle : $$ i(t)=C\frac{du(t)}{dt} $$
- Impedance généralisée : $$ Z_C=\frac{1}{jC\omega} $$

### Bobine
{% include figure.html path="assets/img/cheatsheets/analogue_electronics/inductor.svg" class="img-fluid" style="background-color: white;width: 180px;" %}
- Modèle : $$ u(t)=L\frac{di(t)}{dt} $$
- Impedance généralisée: $$ Z_L=jL\omega $$

## Associations de dipôles
### Mise en série
{% include figure.html path="assets/img/cheatsheets/analogue_electronics/serie.svg" class="img-fluid" style="background-color: white;width: 200px;" %}

- Impedance généralisée équivalente :
$$
Z_{eq}=Z_1+Z_2
$$

### Mise en parallèle
{% include figure.html path="assets/img/cheatsheets/analogue_electronics/parallel.svg" class="img-fluid" style="background-color: white; width: 200px;" %}

- Impedance généralisée équivalente :
$$
\frac{1}{Z_{eq}}= \frac{1}{Z_1} + \frac{1}{Z_2}
$$

### Pont diviseur
{% include figure.html path="assets/img/cheatsheets/analogue_electronics/voltage_divider.svg" class="img-fluid" style="background-color: white; width: 200px;"%}

- Mise en équation :
$$
\frac{V_2(j\omega)}{V_1(j\omega)} = \frac{Z_2}{Z_1+Z_2}
$$

### Potentiel des noeuds
{% include figure.html path="assets/img/cheatsheets/analogue_electronics/node.svg" class="img-fluid" style="background-color: white; width: 300px;"%}

- Mise en équation :
$$
\frac{V_1(j\omega)-V_A(j\omega)}{Z_1} + \frac{V_2(j\omega)-V_A(j\omega)}{Z_2} + \frac{V_3(j\omega)-V_A(j\omega)}{Z_3} = 0
$$

## Exemple
On considère le circuit suivant :
{% include figure.html path="assets/img/cheatsheets/analogue_electronics/RLC_LP.svg" class="img-fluid" style="background-color: white; width: 300px;"%}

### Réécriture du circuit

Pour faciliter l'analyse du cicuit, on va le réécrire :

1. On fait abstraction des composants spécifiques et considère juste un ensemble de dipôle
{% include figure.html path="assets/img/cheatsheets/analogue_electronics/RLC_LP_Z.svg" class="img-fluid" style="background-color: white; width: 300px;"%}

2. Dès que des dipôles sont en séries ou en parallèles et que cela n'entraine pas la disparition des tensions que l'on veut analyser, on crée une ou des résistances équivalentes là où cela est possible.
{% include figure.html path="assets/img/cheatsheets/analogue_electronics/RLC_LP_serie.svg" class="img-fluid" style="background-color: white; width: 300px;"%}

### Mise en équation du circuit
- Pour commencer, on calcul la ou les résistances équivalentes
$$
Z_{eq}=Z_1+Z_2
$$


- Ici, on constate que l'on a un pont diviseur, on peut donc récupérer l'équation plus haut
$$
\frac{V_2(j\omega)}{V_1(j\omega)} = \frac{Z_3}{Z_{eq}+Z_3}
$$

- On obtient notre fonction de transfert en remplaçant ce qui peut l'être
$$
\frac{V_2(j\omega)}{V_1(j\omega)} = \frac{jC\omega}{R+jL\omega+\frac{1}{jC\omega}}
$$

- Finalement, on peut chercher à obtenir la forme normalisée ("+1" au dénominateur)
$$
\frac{V_2(j\omega)}{V_1(j\omega)} = \frac{-C^2\omega^2}{jRC\omega - LC\omega^2 + 1}
$$

## Source
- <https://vincentchoqueuse.github.io/cheatsheet_elec/courses/rappels/circuits_analysis.html>
