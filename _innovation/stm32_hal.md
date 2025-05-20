---
layout: page
title: STM32 HAL
category: R&D
importance: 1
---

## Introduction
Cette fiche résume l’ensemble des fonctions **HAL** du STM32F411 **manipulables directement dans l’application** (c’est-à-dire **non générées automatiquement** par STM32CubeMX).

<br>

## GPIO – Entrées/Sorties

| **Fonctionnalité**   | **Fonctions HAL** |
|----------------------|-------------------|
| Lecture d'entrée     | `HAL_GPIO_ReadPin` |
| Écriture de sortie   | `HAL_GPIO_WritePin` |
| Inversion de sortie  | `HAL_GPIO_TogglePin` |
| Interruption EXTI    | `HAL_GPIO_EXTI_IRQHandler`, `HAL_GPIO_EXTI_Callback` |

<br>

### Exemple lecture

```c
// Lis le niveau logique sur une GPIO spécifique.
GPIO_PinState read_GPIO(GPIO_TypeDef* GPIOx, uint16_t GPIO_Pin){
  return HAL_GPIO_ReadPin(GPIOx, GPIO_Pin);
}

// Exemple de détection d’une commande haute sur un joystick
GPIO_PinState sw_up() {
  return read_GPIO(GPIOA, GPIO_PIN_4);
}
```

<br>

## UART / USART

| **Fonctionnalité**            | **Fonctions HAL** |
|------------------------------|-------------------|
| Transmission synchrone       | `HAL_UART_Transmit` |
| Réception synchrone          | `HAL_UART_Receive` |
| Transmission IT / DMA        | `HAL_UART_Transmit_IT`, `HAL_UART_Transmit_DMA` |
| Réception IT / DMA           | `HAL_UART_Receive_IT`, `HAL_UART_Receive_DMA` |
| Interruptions et callbacks   | `HAL_UART_IRQHandler`, `HAL_UART_TxCpltCallback`, `HAL_UART_RxCpltCallback` |

<br>

## SPI

| **Fonctionnalité**           | **Fonctions HAL** |
|-----------------------------|-------------------|
| Transmit / Receive           | `HAL_SPI_Transmit`, `HAL_SPI_Receive`, `HAL_SPI_TransmitReceive` |
| Transfert IT / DMA           | `HAL_SPI_Transmit_IT`, `HAL_SPI_Transmit_DMA`, `HAL_SPI_Receive_DMA` |
| IRQ & callbacks              | `HAL_SPI_IRQHandler`, `HAL_SPI_TxCpltCallback`, `HAL_SPI_RxCpltCallback` |

<br>

## I2C

| **Fonctionnalité**           | **Fonctions HAL** |
|-----------------------------|-------------------|
| Tx / Rx maître               | `HAL_I2C_Master_Transmit`, `HAL_I2C_Master_Receive` |
| Mémoire I2C                 | `HAL_I2C_Mem_Read`, `HAL_I2C_Mem_Write` |
| Transfert IT / DMA          | `HAL_I2C_Master_Transmit_IT`, `HAL_I2C_Master_Transmit_DMA` |
| IRQ / callbacks             | `HAL_I2C_EV_IRQHandler`, `HAL_I2C_ER_IRQHandler`, `HAL_I2C_MasterTxCpltCallback`, `HAL_I2C_MasterRxCpltCallback` |

<br>

## Timers (TIM1 à TIM11)

| **Fonctionnalité**           | **Fonctions HAL** |
|-----------------------------|-------------------|
| PWM                         | `HAL_TIM_PWM_Start`, `HAL_TIM_PWM_Stop`, `__HAL_TIM_SET_COMPARE` |
| Timer de base               | `HAL_TIM_Base_Start`, `HAL_TIM_Base_Start_IT`, `HAL_TIM_Base_Stop` |
| Output Compare              | `HAL_TIM_OC_Start`, `HAL_TIM_OC_Stop` |
| Input Capture               | `HAL_TIM_IC_Start`, `HAL_TIM_IC_Stop` |
| Encodeur                   | `HAL_TIM_Encoder_Start`, `HAL_TIM_Encoder_Stop` |
| Callback                    | `HAL_TIM_PeriodElapsedCallback` |

<br>

### Exemple PWM

```c
extern TIM_HandleTypeDef htim2;
extern TIM_HandleTypeDef htim3;

// Configure le PWM avec fréquence (Hz) et duty cycle (%).
void set_pwm_device (TIM_HandleTypeDef *htim, uint32_t channel,
                uint32_t freq_hz, uint8_t duty_percent, PWM_SetMode mode)
{
  switch (mode)
    {
    case PWM_SET_FREQ:
      if (freq_hz == 0)
        return;

      {
        uint32_t timer_clk = HAL_RCC_GetPCLK1Freq () * 2;
        uint32_t arr = (timer_clk / freq_hz) - 1;
        __HAL_TIM_SET_AUTORELOAD (htim, arr);
        htim->Init.Period = arr;

        // Duty fixe à 50 %
        uint32_t pulse = (arr + 1) / 2;
        __HAL_TIM_SET_COMPARE (htim, channel, pulse);
        HAL_TIM_PWM_Start (htim, channel);
      }
      break;

    case PWM_SET_DUTY:
      {
        int8_t brightness = clamp_brightness (duty_percent);
        uint32_t pulse = compute_pulse_from_brightness (htim, brightness);

        HAL_TIM_PWM_Start (htim, channel);

        switch (brightness)
          {
          case 0:
            __HAL_TIM_SET_COMPARE (htim, channel, htim->Init.Period);
            break;
          case 100:
            __HAL_TIM_SET_COMPARE (htim, channel, 0);
            break;
          default:
            __HAL_TIM_SET_COMPARE (htim, channel, pulse);
            break;
          }
      }
      break;
    }
}

// Exemple du réglage d'une LED rouge
void red_led (int8_t brightness)
{
	set_pwm_device (&htim3, TIM_CHANNEL_1, 0, brightness, PWM_SET_DUTY);
}

// Exemple d'émission d'une onde sonore sur un haut-parleur
void speaker_tone(uint32_t frequency_hz) {
  set_pwm_device(&htim2, TIM_CHANNEL_3, frequency_hz, 0, PWM_SET_FREQ);
}

// Pour arrêter le son
void speaker_off(void) {
  __HAL_TIM_SET_COMPARE(&htim2, TIM_CHANNEL_3, 0);
}
```

<br>

## ADC

| **Fonctionnalité**          | **Fonctions HAL**                                                                 |
|----------------------------|-------------------------------------------------------------------------------------|
| Conversion                 | `HAL_ADC_Start`, `HAL_ADC_PollForConversion`, `HAL_ADC_GetValue`, `HAL_ADC_Stop`   |
| Conversion IT / DMA        | `HAL_ADC_Start_IT`, `HAL_ADC_Start_DMA`, `HAL_ADC_Stop_IT`, `HAL_ADC_Stop_DMA`     |
| Sélection de canal         | `HAL_ADC_ConfigChannel`                                                            |
| Callback conversion        | `HAL_ADC_ConvCpltCallback`                                                         |
| Callback DMA / erreur      | `HAL_ADC_ConvHalfCpltCallback`, `HAL_ADC_ErrorCallback`                            |


<br>

### Exemple ADC

```c
extern ADC_HandleTypeDef hadc1;

// Lit la valeur analogique d'un canal ADC donné et stocke le résultat dans *value.
static void read_adc(uint32_t *value, uint32_t channel)
{
    ADC_ChannelConfTypeDef s_config = {0};

    s_config.Channel = channel;
    s_config.Rank = 1;
    s_config.SamplingTime = ADC_SAMPLETIME_3CYCLES; /* Défini par CubeMX */

    if (HAL_ADC_ConfigChannel(&hadc1, &s_config) != HAL_OK) {
        Error_Handler(); // Gestion d'erreur si la configuration échoue
    }

    HAL_ADC_Start(&hadc1); // Démarre la conversion ADC
    if (HAL_ADC_PollForConversion(&hadc1, HAL_MAX_DELAY) == HAL_OK) {
        *value = HAL_ADC_GetValue(&hadc1); // Récupère la valeur convertie
    }
    HAL_ADC_Stop(&hadc1); // Arrête la conversion ADC
}

// Exemple : lecture de la valeur d'un potentiomètre connecté au canal ADC_CHANNEL_0.
void pot_1(uint32_t *value_pot)
{
    read_adc(value_pot, ADC_CHANNEL_0);
}
```

## DMA

| **Fonctionnalité**          | **Fonctions HAL** |
|----------------------------|-------------------|
| IRQ transfert              | `HAL_DMA_IRQHandler` |
| Callback transfert         | `HAL_DMA_XferCpltCallback` |

<br>

## USB OTG FS

| **Fonctionnalité**         | **Fonctions HAL** |
|---------------------------|-------------------|
| Start périphérique        | `HAL_PCD_Start` |
| Interruptions USB         | `HAL_PCD_IRQHandler` |
| Callbacks transfert       | `HAL_PCD_DataInStageCallback`, `HAL_PCD_DataOutStageCallback` |

<br>

## RTC

| **Fonctionnalité**         | **Fonctions HAL** |
|---------------------------|-------------------|
| Lire l'heure/date         | `HAL_RTC_GetTime`, `HAL_RTC_GetDate` |
| Alarmes / wakeup          | `HAL_RTC_SetAlarm`, `HAL_RTC_SetWakeUpTimer` |

<br>

## Power Management

| **Fonctionnalité**         | **Fonctions HAL** |
|---------------------------|-------------------|
| Entrer en veille          | `HAL_PWR_EnterSLEEPMode`, `HAL_PWR_EnterSTOPMode`, `HAL_PWR_EnterSTANDBYMode` |
| Activer accès Backup      | `HAL_PWR_EnableBkUpAccess` |

<br>

## Flash interne

| **Fonctionnalité**         | **Fonctions HAL** |
|---------------------------|-------------------|
| Accès flash               | `HAL_FLASH_Unlock`, `HAL_FLASH_Lock` |
| Programmation / effacement| `HAL_FLASH_Program`, `HAL_FLASH_Program_IT`, `HAL_FLASH_Erase` |

<br>

## CRC

| **Fonctionnalité**         | **Fonctions HAL** |
|---------------------------|-------------------|
| Calcul CRC                | `HAL_CRC_Calculate`, `HAL_CRC_Accumulate` |

<br>

## RNG

| **Fonctionnalité**         | **Fonctions HAL** |
|---------------------------|-------------------|
| Nombre aléatoire          | `HAL_RNG_GenerateRandomNumber`, `HAL_RNG_IRQHandler` |

<br>

## Watchdogs

| **Fonctionnalité**         | **Fonctions HAL** |
|---------------------------|-------------------|
| IWDG                      | `HAL_IWDG_Start` |
| WWDG Refresh              | `HAL_WWDG_Refresh` |

<br>

## EXTI

| **Fonctionnalité**         | **Fonctions HAL** |
|---------------------------|-------------------|
| Interruption ligne        | `HAL_EXTI_IRQHandler`, `HAL_EXTI_GetPending`, `HAL_EXTI_ClearPending`, `HAL_EXTI_Callback` |

---

## Source
- [STMicroelectronics HAL Reference](https://www.st.com/en/embedded-software/stm32cubef4.html)
