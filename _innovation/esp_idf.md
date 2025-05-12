---
layout: page
title: ESP-IDF
category: R&D
importance: 1
---

## Introduction
Cette fiche résume l’ensemble des fonctions **ESP-IDF** permettant de manipuler les **périphériques internes** de l’**ESP32-WROOM-32** via l'API native (non via Arduino).

<br>

## GPIO – Entrées/Sorties

| **Fonctionnalité**   | **Fonctions ESP-IDF** |
|----------------------|------------------------|
| Configuration         | `gpio_config` |
| Écriture              | `gpio_set_level` |
| Lecture               | `gpio_get_level` |
| Interruption          | `gpio_install_isr_service`, `gpio_isr_handler_add` |

<br>

## UART

| **Fonctionnalité**            | **Fonctions ESP-IDF** |
|------------------------------|------------------------|
| Initialisation               | `uart_driver_install`, `uart_param_config` |
| Transmission                 | `uart_write_bytes` |
| Réception                    | `uart_read_bytes` |

<br>

## SPI

| **Fonctionnalité**           | **Fonctions ESP-IDF** |
|-----------------------------|------------------------|
| Initialisation du bus       | `spi_bus_initialize` |
| Ajout périphérique          | `spi_bus_add_device` |
| Transfert de données        | `spi_device_transmit` |

<br>

## I2C

| **Fonctionnalité**           | **Fonctions ESP-IDF** |
|-----------------------------|------------------------|
| Configuration               | `i2c_param_config`, `i2c_driver_install` |
| Communication maître        | `i2c_master_write_read_device` |

<br>

## I2S

| **Fonctionnalité**           | **Fonctions ESP-IDF** |
|-----------------------------|------------------------|
| Initialisation               | `i2s_driver_install`, `i2s_set_pin` |
| Transmission / Réception    | `i2s_write`, `i2s_read` |

<br>

## PWM (LEDC)

| **Fonctionnalité**           | **Fonctions ESP-IDF** |
|-----------------------------|------------------------|
| Configuration timer & canal | `ledc_timer_config`, `ledc_channel_config` |
| Mise à jour du duty cycle   | `ledc_set_duty`, `ledc_update_duty` |

<br>

## ADC (12 bits)

| **Fonctionnalité**           | **Fonctions ESP-IDF** |
|-----------------------------|------------------------|
| Configuration               | `adc1_config_width`, `adc1_config_channel_atten` |
| Lecture brute               | `adc1_get_raw` |

<br>

## DAC (8 bits)

| **Fonctionnalité**           | **Fonctions ESP-IDF** |
|-----------------------------|------------------------|
| Activation / sortie         | `dac_output_enable`, `dac_output_voltage` |

<br>

## Touch Pad

| **Fonctionnalité**           | **Fonctions ESP-IDF** |
|-----------------------------|------------------------|
| Initialisation               | `touch_pad_init`, `touch_pad_config` |
| Lecture                     | `touch_pad_read` |

<br>

## CAN (TWAI)

| **Fonctionnalité**           | **Fonctions ESP-IDF** |
|-----------------------------|------------------------|
| Installation pilote         | `twai_driver_install` |
| Transmission                | `twai_transmit` |
| Réception                   | `twai_receive` |

<br>

## Timers matériels

| **Fonctionnalité**           | **Fonctions ESP-IDF** |
|-----------------------------|------------------------|
| Configuration & démarrage   | `timer_config`, `timer_init`, `timer_start` |
| Lecture du compteur         | `timer_get_counter_value` |

<br>

## RTC & Deep Sleep

| **Fonctionnalité**           | **Fonctions ESP-IDF** |
|-----------------------------|------------------------|
| Wakeup timer / GPIO         | `esp_sleep_enable_timer_wakeup`, `esp_sleep_enable_ext0_wakeup` |
| Entrer en deep sleep        | `esp_deep_sleep_start` |

<br>

## Watchdog

| **Fonctionnalité**           | **Fonctions ESP-IDF** |
|-----------------------------|------------------------|
| Configuration globale       | `esp_task_wdt_init` |
| Surveiller une tâche        | `esp_task_wdt_add`, `esp_task_wdt_reset` |

<br>

## Wi-Fi

| **Fonctionnalité**           | **Fonctions ESP-IDF** |
|-----------------------------|------------------------|
| Initialisation               | `esp_wifi_init`, `esp_wifi_set_mode`, `esp_wifi_start` |
| Connexion                   | `esp_wifi_set_config`, `esp_wifi_connect` |

<br>

## Bluetooth (Classic & BLE)

| **Fonctionnalité**           | **Fonctions ESP-IDF** |
|-----------------------------|------------------------|
| Init contrôleur             | `esp_bt_controller_init`, `esp_bt_controller_enable` |
| BLE GAP / GATT              | `esp_ble_gap_*`, `esp_ble_gatt_*` |

<br>

## Cryptographie & RNG

| **Fonctionnalité**           | **Fonctions ESP-IDF** |
|-----------------------------|------------------------|
| Générateur aléatoire        | `esp_random` |
| Chiffrement AES             | `esp_aes_encrypt`, `mbedtls_aes_*` |
| Hash SHA / RSA / ECC        | `mbedtls_sha256_*`, `esp_ecdsa_sign`, `mbedtls_rsa_*` |

<br>

## Secure Boot / Flash Encryption

| **Fonctionnalité**           | **Fonctions ESP-IDF** |
|-----------------------------|------------------------|
| Configuration via menuconfig| `CONFIG_SECURE_BOOT`, `CONFIG_FLASH_ENCRYPTION_ENABLED` |
| Fonctions internes / OTA    | `esp_secure_boot_*`, `esp_flash_encrypt_*` |

<br>

## Capteurs internes

| **Fonctionnalité**           | **Fonctions ESP-IDF** |
|-----------------------------|------------------------|
| Capteur Hall                | `hall_sensor_read` |
| Température                 | (via ADC, pas directement exposé) |

---

## Source
- [ESP-IDF Programming Guide](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/)

