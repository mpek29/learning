---
layout: page
title: ESP-IDF
category: R&D
importance: 1
---

## Introduction
Cette fiche résume l'ensemble des fonctions **ESP-IDF** disponibles pour gérer divers périphériques et fonctionnalités sur l'ESP32.

<br>

## GPIO – Entrées/Sorties

| **Fonctionnalité**          | **Fonctions ESP-IDF**            |
|-----------------------------|----------------------------------|
| Lecture d'entrée            | `gpio_get_level`                 |
| Écriture de sortie          | `gpio_set_level`                 |
| Inversion de sortie         | `gpio_set_direction`            |
| Configuration des broches   | `gpio_config`                    |
| Interruptions GPIO          | `gpio_install_isr_service`, `gpio_isr_handler_add` |

<br>

## UART

| **Fonctionnalité**          | **Fonctions ESP-IDF**            |
|-----------------------------|----------------------------------|
| Transmission synchrone      | `uart_write_bytes`               |
| Réception synchrone         | `uart_read_bytes`                |
| Transmission avec interrup. | `uart_write_bytes` (en interrupt)|
| Réception avec interrup.    | `uart_read_bytes` (en interrupt) |
| Configuration UART          | `uart_param_config`, `uart_driver_install` |
| Interruptions UART          | `uart_isr_register`             |

<br>

## SPI

| **Fonctionnalité**          | **Fonctions ESP-IDF**            |
|-----------------------------|----------------------------------|
| Transmission / Réception     | `spi_device_transmit`, `spi_device_queue_trans` |
| Configuration SPI            | `spi_bus_config`, `spi_device_interface_config` |
| Initialisation SPI           | `spi_bus_initialize`, `spi_bus_add_device` |

<br>

## I2C

| **Fonctionnalité**           | **Fonctions ESP-IDF**             |
|------------------------------|-----------------------------------|
| Transfert maître             | `i2c_master_write_to_device`, `i2c_master_read_from_device` |
| Transfert avec DMA           | `i2c_master_write_to_device_dma`, `i2c_master_read_from_device_dma` |
| Initialisation I2C           | `i2c_param_config`, `i2c_driver_install` |

<br>

## Timers (Timer 0 à Timer 3)

| **Fonctionnalité**           | **Fonctions ESP-IDF**             |
|-----------------------------|-----------------------------------|
| Déclenchement d'un timer    | `timer_start`, `timer_stop`        |
| Configuration du timer      | `timer_init`, `timer_set_alarm_value` |
| Interruption Timer          | `timer_group_isr_handler_add`     |

<br>

## ADC

| **Fonctionnalité**           | **Fonctions ESP-IDF**             |
|-----------------------------|-----------------------------------|
| Conversion ADC               | `adc1_get_raw`, `adc2_get_raw`    |
| Initialisation ADC           | `adc1_config_width`, `adc1_config_channel_atten` |
| Configuration ADC             | `adc2_config_channel_atten`       |

<br>

## DMA

| **Fonctionnalité**          | **Fonctions ESP-IDF**             |
|----------------------------|-----------------------------------|
| Gestion DMA                 | `esp_dma_alloc`                   |
| Initialisation DMA          | `esp_dma_start`                   |

<br>

## Wi-Fi

| **Fonctionnalité**           | **Fonctions ESP-IDF**             |
|-----------------------------|-----------------------------------|
| Initialisation Wi-Fi         | `esp_wifi_init`                   |
| Connexion Wi-Fi              | `esp_wifi_connect`                |
| Mode point d'accès           | `esp_wifi_set_mode`, `esp_wifi_start` |
| Gestion de l'IP              | `esp_netif_create_default_wifi_sta`_
