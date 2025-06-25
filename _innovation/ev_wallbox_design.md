---
layout: page
title: EV Wallbox Design
category: R&D
importance: 5
---

# Introduction

Ce document synthétise les principaux blocs fonctionnels, contraintes d’ingénierie, et interfaces critiques à maîtriser pour concevoir un chargeur mural AC pour véhicules électriques. Il s’adresse aux développeurs impliqués dans la conception électronique, firmware embarqué, intégration réseau, ou certification.

<br>

## Alimentation secteur et conversion

| Fonction               | Objectif                                      |
|-----------------------|-----------------------------------------------|
| Sélection de tension  | Adapter le chargeur à une source mono ou tri  |
| Limitation de courant | Conformité aux protections installées          |
| Isolation galvanique  | Sécurité utilisateur et compatibilité normes   |
| Filtrage EMI          | Réduction interférences secteur                 |
| Détection perte de neutre | Sécurité en alimentation triphasée          |

<br>

## Pilotage de la charge

| Fonction              | Objectif                                      |
|-----------------------|-----------------------------------------------|
| Commande contacteur   | Autoriser ou non la mise sous tension EV       |
| Détection de présence | Identifier connexion véhicule                   |
| Pilotage courant de charge | Adapter la puissance selon disponibilité  |
| Contrôle relais sécurité | Prévenir collage ou arc électrique            |

<br>

## Mesures et surveillance

| Mesure               | Utilité                                        |
|----------------------|------------------------------------------------|
| Courant consommé     | Supervision charge / facturation                |
| Tension secteur      | Protection surtension / absence phase           |
| Température interne  | Arrêt sécurité ou limitation thermique          |
| Énergie délivrée     | Calcul kWh pour bilan ou facturation             |

<br>

## Communication avec l'utilisateur

| Interface            | Utilisation                                    |
|----------------------|------------------------------------------------|
| Signalisation lumineuse | État du chargeur (attente, charge, erreur...)|
| Afficheur / écran    | Informations détaillées (puissance, tarif...)   |
| Commandes locales    | Interrupteur, boutons, déclencheur manuel       |
| App mobile / interface | Démarrage, historique, configuration            |

<br>

## Authentification et accès

| Technologie          | Usage                                          |
|----------------------|------------------------------------------------|
| Lecture badge RFID   | Accès restreint à certains usagers              |
| Vérification backend | Validation distante par serveur                  |
| App smartphone       | Déverrouillage via Bluetooth ou Wi‑Fi           |

<br>

## Connectivité réseau

| Média                | Objectif                                      |
|----------------------|------------------------------------------------|
| Wi‑Fi ou Ethernet    | Communication avec serveur ou supervision       |
| Réseau mobile (LTE)  | Accès distant si site isolé                      |
| Bluetooth local      | Pairing initial ou configuration rapide         |
| Protocole de supervision | Dialogue avec plateforme centrale (OCPP, etc.)|

<br>

## Normes & conformité

| Norme ou exigence    | Sujet couvert                                 |
|----------------------|------------------------------------------------|
| Compatibilité électromagnétique | Immunité CEM / EMI / filtrage            |
| Sécurité électrique  | Protection utilisateurs, relais, défauts       |
| Protection différentielle | Détection courant de fuite AC + DC           |
| Certification produit | CE, MID, IP, etc. selon usage final             |

<br>

## Mise en œuvre mécanique

| Paramètre            | Considérations                                |
|----------------------|------------------------------------------------|
| Indice de protection | Installation extérieure (IP54 ou supérieur)    |
| Dissipation thermique| Besoin de ventilation passive ou active        |
| Accès câblage        | Bornier / presse-étoupes sécurisés              |
| Encombrement         | Conformité aux normes d’installation            |

<br>

## Sécurité fonctionnelle

| Composant critique   | Fonction de sécurité                          |
|----------------------|------------------------------------------------|
| Surveillance relais  | Détection d’anomalies de contact                |
| Capteurs redondants  | Mesures critiques (température, courant...)     |
| Auto-test au démarrage | Vérification des fonctions avant activation   |
| Protection logicielle| Timeout, watchdog, gestion erreurs critiques     |

<br>

## Scénarios de fonctionnement typiques

| Scénario             | Comportement attendu                          |
|----------------------|------------------------------------------------|
| Véhicule branché     | Détection et vérification de conformité        |
| Authentification échouée | Refus de charge, signalisation erreur         |
| Surtempérature       | Réduction puissance ou arrêt                    |
| Panne réseau         | Mode dégradé ou arrêt sécurisé                   |

<br>

## Ressources recommandées

- Normes internationales (IEC 61851, ISO 15118)  
- Guides de mise en conformité CE  
- Spécifications OCPP  
- Documentation fabricants de relais, capteurs, MCU, etc.  

---

## EV Wallbox Design Cheatsheet

## Architecture Fonctionnelle

### 1. Alimentation Secteur
- Disjoncteur de protection
- Filtrage EMI/RFI
- Redresseur AC/DC
- Alimentation à découpage (SMPS) pour alimenter l’électronique

### 2. Microcontrôleur Principal (MCU)
- Interfaces : GPIO, UART, SPI, I2C, PWM, ADC, CAN, RTC, Watchdog
- Gestion du signal pilote (IEC 61851 Mode 3)
- Contrôle relais et contacteurs
- Lecture capteurs (température, courant, tension)
- Communication (OCPP, Bluetooth, Wi-Fi)

### 3. Mesures & Sécurité Électrique
- Capteurs de courant (shunt, effet Hall)
- Capteurs de tension
- Protection différentiel (RCD)
- Surveillance température

### 4. Interface Utilisateur
- LEDs de statut
- Écran LCD / OLED
- Boutons physiques

### 5. Interface de Communication
- Modules Wi-Fi, LTE, Bluetooth LE, RFID
- Protocoles UART, SPI, USB, I2C

### 6. Pilotage Puissance vers Véhicule
- Relais et contacteurs de puissance
- Connecteur Type 2 (ou autre standard)
- Gestion du signal pilote PWM (contrôle du courant de charge)

---

## Set Block Diagram – EV Wallbox AC Typique

```
 ┌────────────────────────────────────────────────────────────────────────────┐
 │                                Alimentation secteur                        │
 │ ┌─────────────┐     ┌──────────────┐     ┌──────────────┐                 │
 │ │ Disjoncteur │───▶│ Filtrage EMI │───▶│ Redresseur AC/DC │              │
 │ └─────────────┘     └──────────────┘     └──────────────┘                 │
 │                                          │                                │
 │                                ┌────────▼─────────┐                       │
 │                                │  Alim. à découpage│                      │
 │                                └────────▲─────────┘                       │
 └─────────────────────────────────────────┴─────────────────────────────────┘

 ┌────────────────────────────────────────────────────────────────────────────┐
 │                           Microcontrôleur principal (MCU)                 │
 │ ┌───────────────────────────────────────────────────────────────────────┐ │
 │ │ Interfaces : UART / I2C / SPI / GPIO / PWM / ADC / CAN / RTC / WDG    │ │
 │ │ - Contrôle relais puissance                                           │ │
 │ │ - Lecture capteurs (T°, courant, tension)                            │ │
 │ │ - Traitement du signal pilote (PWM type IEC 61851)                   │ │
 │ │ - Gestion RFID / Bluetooth / TCP/IP                                  │ │
 │ │ - Dialogue OCPP ou backend Cloud via module de com                   │ │
 │ └───────────────────────────────────────────────────────────────────────┘ │
 └────────────────────────────────────────────────────────────────────────────┘

 ┌────────────────────────────────────────────────────────────────────────────┐
 │                           Mesures & Sécurité électrique                   │
 │ ┌────────────────┐   ┌────────────────┐  ┌─────────────────────────────┐  │
 │ │ Capteur courant│   │ Capteur tension│  │ Détection défaut différentiel│  │
 │ └────────────────┘   └────────────────┘  └─────────────────────────────┘  │
 │      │                     │                          │                   │
 │      └───────────────┬─────┴──────────────┬───────────┘                   │
 │                      ▼                    ▼                               │
 │                  Entrées ADC          Entrée interruption sécurité        │
 └────────────────────────────────────────────────────────────────────────────┘

 ┌────────────────────────────────────────────────────────────────────────────┐
 │                              Interface utilisateur                        │
 │ ┌────────────────────────┐   ┌────────────────────┐   ┌─────────────────┐ │
 │ │ LED / Signalisation    │   │ Écran LCD / OLED    │   │ Boutons locaux  │ │
 │ └────────────────────────┘   └────────────────────┘   └─────────────────┘ │
 │        │                             │                        │            │
 │        └──────────────┬─────────────┴────────────┬────────────┘            │
 │                       ▼                          ▼                         │
 │                 Pilotage via GPIO           Lecture via Entrée             │
 └────────────────────────────────────────────────────────────────────────────┘

 ┌────────────────────────────────────────────────────────────────────────────┐
 │                              Interface de communication                    │
 │ ┌───────────────┐  ┌────────────┐  ┌────────────────────┐  ┌────────────┐ │
 │ │ Module Wi‑Fi  │  │ Module LTE │  │ Module Bluetooth LE│  │ Module RFID│ │
 │ └───────────────┘  └────────────┘  └────────────────────┘  └────────────┘ │
 │         │               │                    │                   │         │
 │         └───────┬───────┴────────────┬───────┴────────────┬──────┘         │
 │                 ▼                    ▼                    ▼                │
 │         UART / SPI / GPIO      UART / USB             UART / I2C          │
 └────────────────────────────────────────────────────────────────────────────┘

 ┌────────────────────────────────────────────────────────────────────────────┐
 │                              Pilotage puissance vers VE                   │
 │ ┌────────────────────┐     ┌──────────────────────┐   ┌────────────────┐ │
 │ │ Relais de puissance│────▶│ Connecteur Type 2     │◀──│ Signal pilote │ │
 │ └────────────────────┘     └──────────────────────┘   └────────────────┘ │
 │       ▲                                                           ▲       │
 │       │                                                           │       │
 │    Retour état contacteur                          PWM Control (MCU GPIO) │
 └────────────────────────────────────────────────────────────────────────────┘
```
