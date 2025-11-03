---
layout: page
title: Reverse engineering PCB
category: R&D
importance: 11
---

## Introduction

Cette fiche décrit la procédure pour **reproduire un circuit imprimé (PCB)** à partir d’une carte existante. Elle détaille les étapes pour **identifier les composants**, **reconstruire le schéma électronique**, et **reproduire le routage** sur un logiciel de conception tel que **KiCad**.

> ⚠️ Cette méthode s’applique à des fins de documentation et d’apprentissage. Le respect des droits intellectuels est nécessaire pour les circuits commerciaux.

<br>

## Nomenclature – Identification des composants

| **Étape** | **Action** |
| ---------- | ----------- |
| 1 | Prendre une photo du dessus et du dessous de la carte avec tous les composants. |
| 2 | Identifier et nommer tous les composants si ce n’est pas déjà fait sur le **layer mark**. |

<br>

## Schéma électronique – Reconstruction des connexions

| **Étape** | **Action** |
| ---------- | ----------- |
| 3 | Prendre une photo du dessus et du dessous de la carte une fois les composants retirés. |
| 4 | Imprimer la face avant et arrière du circuit. |
| 5 | Relier chaque composant conformément au circuit sur **KiCad** et repasser chaque piste avec un **stabilo noir** sur les feuilles imprimées. |
| 6 | Sauvegarder le projet, puis supprimer chaque piste une à une en la repassant au stylo noir après suppression sur les feuilles imprimées. |

<br>

## Routage – Reproduction sur logiciel

| **Étape** | **Action** |
| ---------- | ----------- |
| 7 | Imprimer la face avant et arrière du circuit électronique. |
| 8 | Tracer les pistes une à une sur **KiCad**, en les surlignant sur les feuilles imprimées à chaque étape. |
| 9 | Sauvegarder le projet. |
| 10 | Imprimer de nouveau la face avant et arrière du circuit. |
| 11 | Retirer les pistes une à une sur **KiCad**, en les surlignant sur les feuilles imprimées après chaque suppression. |

<br>

## Source

* Documentation interne R&D
* [KiCad Documentation](https://docs.kicad.org/)
