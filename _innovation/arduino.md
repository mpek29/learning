---
layout: page
title: Arduino
category: R&D
importance: 2
---

## Introduction

Cette fiche résume les fonctions **Arduino** mappées aux **périphériques internes** du microcontrôleur **ATmega328P**.

> ⚠️ L’**Arduino Uno** est basé sur le **ATmega328P**, ce document s’applique donc directement à cette carte.

Elle permet d’identifier les appels de haut niveau associés à chaque module matériel.

<br>

## GPIO – Entrées/Sorties numériques

| **Fonctionnalité**  | **Fonctions Arduino**                      |
| ------------------- | ------------------------------------------ |
| Définir une broche  | `pinMode(pin, mode)`                       |
| Lire un niveau      | `digitalRead(pin)`                         |
| Écrire un niveau    | `digitalWrite(pin, value)`                 |

<br>

## PWM / Timers

| **Fonctionnalité**       | **Fonctions Arduino**               |
| ------------------------ | ----------------------------------- |
| PWM matériel             | `analogWrite(pin, value)`           |
| Attente millisecondes    | `delay(ms)`                          |
| Attente microsecondes    | `delayMicroseconds(us)`             |
| Temps écoulé (ms)        | `millis()`                          |
| Temps écoulé (µs)        | `micros()`                          |

> **Timers utilisés** :  
> Timer0 → `millis`, `micros`, `delay`, PWM sur broches 5, 6  
> Timer1 → PWM sur broches 9, 10  
> Timer2 → PWM sur broches 3, 11  

<br>

## UART / Série (USART)

| **Fonctionnalité**        | **Fonctions Arduino**                        |
| ------------------------- | -------------------------------------------- |
| Initialisation             | `Serial.begin(baudrate)`                    |
| Envoi de données          | `Serial.print()`, `Serial.write()`          |
| Réception de données      | `Serial.read()`, `Serial.available()`       |

> Utilise l'USART matériel de l’ATmega328P (broches 0, 1).

<br>

## SPI

| **Fonctionnalité**    | **Fonctions Arduino**                                |
| --------------------- | ---------------------------------------------------- |
| Initialisation        | `SPI.begin()`                                        |
| Transfert de données  | `SPI.transfer(data)`                                 |

> Nécessite `#include <SPI.h>`  
> Broches SPI : 10 (SS), 11 (MOSI), 12 (MISO), 13 (SCK)

<br>

## I2C / TWI

| **Fonctionnalité**   | **Fonctions Arduino**                                           |
| -------------------- | --------------------------------------------------------------- |
| Initialisation       | `Wire.begin()`                                                  |
| Transmission         | `Wire.beginTransmission(address)`, `Wire.write(data)`           |
| Réception            | `Wire.requestFrom(address, quantity)`, `Wire.read()`            |

> Nécessite `#include <Wire.h>`  
> Broches I2C : A4 (SDA), A5 (SCL)

<br>

## ADC – Convertisseur Analogique / Numérique

| **Fonctionnalité** | **Fonctions Arduino**             |
| ------------------ | --------------------------------- |
| Lecture analogique | `analogRead(pin)`                 |
| Référence ADC      | `analogReference(type)`           |

> Entrées analogiques : A0 à A7  
> Résolution : 10 bits (valeurs 0 à 1023)

<br>

## EEPROM

| **Fonctionnalité**     | **Fonctions Arduino**                         |
| ---------------------- | --------------------------------------------- |
| Lecture                | `EEPROM.read(address)`                        |
| Écriture               | `EEPROM.write(address, value)`                |
| Écriture conditionnelle| `EEPROM.update(address, value)`               |

> Nécessite `#include <EEPROM.h>`  
> Capacité : 1 Ko

<br>

## Interruptions externes

| **Fonctionnalité**     | **Fonctions Arduino**                                          |
| ---------------------- | -------------------------------------------------------------- |
| Attacher une ISR       | `attachInterrupt(digitalPinToInterrupt(pin), ISR, mode)`       |
| Détacher l’ISR         | `detachInterrupt(digitalPinToInterrupt(pin))`                  |

> Broches supportées :  
> `INT0` (D2), `INT1` (D3)

<br>

## Watchdog

| **Fonctionnalité**       | **Fonctions AVR (non Arduino)**              |
| ------------------------ | --------------------------------------------- |
| Activer le Watchdog      | `wdt_enable(timeout)`                         |
| Désactiver le Watchdog   | `wdt_disable()`                               |

> Nécessite `#include <avr/wdt.h>`

<br>

## Mémoire Flash (stockage programme)

| **Fonctionnalité**       | **Fonctions Arduino / AVR**                 |
| ------------------------ | ------------------------------------------- |
| Stockage constant en Flash | `const __flash` ou `PROGMEM`               |
| Accès depuis Flash        | `pgm_read_byte()`, `pgm_read_word()`       |

> Nécessite `#include <avr/pgmspace.h>`

<br>

## Comparateur analogique

| **Fonctionnalité**         | **Accès direct uniquement (pas Arduino)** |
| -------------------------- | ------------------------------------------ |
| Détection analogique rapide | Configuration par registre (ACSR)         |

<br>

## Oscillateurs & Horloge

| **Fonctionnalité**     | **Configuration**                            |
| ---------------------- | -------------------------------------------- |
| Horloge système        | Définie par les **fuse bits** (ex: 16 MHz)   |
| Oscillateur RTC (Timer2)| 32.768 kHz possible (asynchrone)             |

---

## Source

* [Arduino Reference](https://www.arduino.cc/reference/en/)
* [ATmega328P Datasheet](https://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-7810-Automotive-Microcontrollers-ATmega328P_Datasheet.pdf)
