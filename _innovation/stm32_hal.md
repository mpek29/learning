---
layout: page
title: STM32 HAL
category: R&D
importance: 3
---

## Introduction
This sheet summarises all the **HAL** functions of the STM32F411 **that can be handled directly in the application** (i.e. **not generated automatically** by STM32CubeMX).

<br>

## GPIO - Inputs/Outputs

| **Functionality** | **HAL functions** |
|----------------------|-------------------|
| Output Writing | `HAL_GPIO_ReadPin` 
| Output Invert | `HAL_GPIO_WritePin` 
| Inversion de sortie | `HAL_GPIO_TogglePin` |
| Interrupt EXTI | `HAL_GPIO_EXTI_IRQHandler`, `HAL_GPIO_EXTI_Callback` 

<br>

### Example reading
```c
// Reads the logical level on a specific GPIO.
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

| **Functionality** | **HAL functions** |
|------------------------------|-------------------|
| Synchronous Transmission | `HAL_UART_Transmit` |
| Synchronous Reception | `HAL_UART_Receive` |
| Transmission IT / DMA | `HAL_UART_Transmit_IT`, `HAL_UART_Transmit_DMA` |
| Réception IT / DMA | `HAL_UART_Receive_IT`, `HAL_UART_Receive_DMA` |
| Interruptions et callbacks | `HAL_UART_IRQHandler`, `HAL_UART_TxCpltCallback`, `HAL_UART_RxCpltCallback` |

<br>

## SPI

| **HAL functionality** | **HAL functions** |
|-----------------------------|-------------------|
| Transmit / Receive | `HAL_SPI_Transmit`, `HAL_SPI_Receive`, `HAL_SPI_TransmitReceive` |
| IT / DMA Transfer | `HAL_SPI_Transmit_IT`, `HAL_SPI_Transmit_DMA`, `HAL_SPI_Receive_DMA` |
| IRQ & callbacks | `HAL_SPI_IRQHandler`, `HAL_SPI_TxCpltCallback`, `HAL_SPI_RxCpltCallback` |

<br>

## I2C

| **Functionality** | **HAL functions** |
|-----------------------------|-------------------|
| Master Tx / Rx | `HAL_I2C_Master_Transmit`, `HAL_I2C_Master_Receive` |
| I2C Memory | `HAL_I2C_Mem_Read`, `HAL_I2C_Mem_Write` |
| IT / DMA Transfer | `HAL_I2C_Master_Transmit_IT`, `HAL_I2C_Master_Transmit_DMA` |
| IRQ / callbacks | `HAL_I2C_EV_IRQHandler`, `HAL_I2C_ER_IRQHandler`, `HAL_I2C_MasterTxCpltCallback`, `HAL_I2C_MasterRxCpltCallback` |

<br>

## Timers (TIM1 à TIM11)

| **HAL functionality** | **HAL functions** |
|-----------------------------|-------------------|
| PWM | `HAL_TIM_PWM_Start`, `HAL_TIM_PWM_Stop`, `__HAL_TIM_SET_COMPARE` |
| Basic Timer | `HAL_TIM_Base_Start`, `HAL_TIM_Base_Start_IT`, `HAL_TIM_Base_Stop` |
| Output Compare | `HAL_TIM_OC_Start`, `HAL_TIM_OC_Stop` |
| Input Capture | `HAL_TIM_IC_Start`, `HAL_TIM_IC_Stop` |
| Encoder | `HAL_TIM_Encoder_Start`, `HAL_TIM_Encoder_Stop` |
| Callback | `HAL_TIM_PeriodElapsedCallback` |

<br>

### PWM example

```c
extern TIM_HandleTypeDef htim2;
extern TIM_HandleTypeDef htim3;

// Configures PWM with frequency (Hz) and duty cycle (%).
void set_pwm_device (TIM_HandleTypeDef *htim, uint32_t channel, uint32_t freq_hz, uint8_t duty_percent, PWM_SetMode mode){
  switch (mode){
    case PWM_SET_FREQ:
      if (freq_hz == 0)
        return;
      {
        uint32_t timer_clk = HAL_RCC_GetPCLK1Freq () * 2;
        uint32_t arr = (timer_clk / freq_hz) - 1;
        __HAL_TIM_SET_AUTORELOAD (htim, arr);
        htim->Init.Period = arr;

        // Duty fixed at 50
        uint32_t pulse = (arr + 1) / 2;
        __HAL_TIM_SET_COMPARE (htim, channel, pulse);
        HAL_TIM_PWM_Start (htim, channel);
      }
      break;

    case PWM_SET_DUTY:
      {
        uint32_t pulse = (100 - brightness) * (htim->Init.Period + 1) / 100;

        HAL_TIM_PWM_Start (htim, channel);

        switch (brightness){
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
// Example of a red LED setting
void red_led (int8_t brightness){
	set_pwm_device (&htim3, TIM_CHANNEL_1, 0, brightness, PWM_SET_DUTY);
}

// Example of a sound wave emitted by a loudspeaker
void speaker_tone(uint32_t frequency_hz) {
  set_pwm_device(&htim2, TIM_CHANNEL_3, frequency_hz, 0, PWM_SET_FREQ);
}

// To stop the sound
void speaker_off(void) {
  __HAL_TIM_SET_COMPARE(&htim2, TIM_CHANNEL_3, 0);
}
```

<br>

## ADC

| **Functionality** | **HAL functions** |
|----------------------------|-------------------------------------------------------------------------------------|
| Conversion | `HAL_ADC_Start`, `HAL_ADC_PollForConversion`, `HAL_ADC_GetValue`, `HAL_ADC_Stop` |
| IT / DMA Conversion | `HAL_ADC_Start_IT`, `HAL_ADC_Start_DMA`, `HAL_ADC_Stop_IT`, `HAL_ADC_Stop_DMA` |
| Channel selection | `HAL_ADC_ConfigChannel` |
| Callback conversion | `HAL_ADC_ConvCpltCallback` |
| Callback DMA / error | `HAL_ADC_ConvHalfCpltCallback`, `HAL_ADC_ErrorCallback` |


<br>

### ADC example

```c
extern ADC_HandleTypeDef hadc1;

// Reads the analogue value of a given ADC channel and stores the result in *value.
static void read_adc(uint32_t *value, uint32_t channel)
{
    ADC_ChannelConfTypeDef s_config = {0};

    s_config.Channel = channel;
    s_config.Rank = 1;
    s_config.SamplingTime = ADC_SAMPLETIME_3CYCLES; /* Défini par CubeMX */

    if (HAL_ADC_ConfigChannel(&hadc1, &s_config) != HAL_OK) {
        Error_Handler(); // Error handling if configuration fails
    }

    HAL_ADC_Start(&hadc1); // Starts ADC conversion
    if (HAL_ADC_PollForConversion(&hadc1, HAL_MAX_DELAY) == HAL_OK) {
        *value = HAL_ADC_GetValue(&hadc1); // Récupère la valeur convertie
    }
    HAL_ADC_Stop(&hadc1); // Stops ADC conversion
}

// Example: reading the value of a potentiometer connected to channel ADC_CHANNEL_0.
void pot_1(uint32_t *value_pot)
{
    read_adc(value_pot, ADC_CHANNEL_0);
}
```

## DMA

| **Functionality** | **HAL functions** |
|----------------------------|-------------------|
| IRQ transfer | `HAL_DMA_IRQHandler` |
| Callback transfer | `HAL_DMA_XferCpltCallback` |

<br>

## USB OTG FS

| **Functionality** | **HAL Functions** |
|---------------------------|-------------------|
| Start device | `HAL_PCD_Start` |
| USB interrupts | `HAL_PCD_IRQHandler` |
| Transfer Callbacks | `HAL_PCD_DataInStageCallback`, `HAL_PCD_DataOutStageCallback` |

<br>

## RTC

| **Functionality** | **HAL functions** |
|---------------------------|-------------------|
| Read time/date | `HAL_RTC_GetTime`, `HAL_RTC_GetDate` |
| Alarms / wakeup| `HAL_RTC_SetAlarm`, `HAL_RTC_SetWakeUpTimer` |

<br>

## Power Management

| **Functionality** | **HAL functions** |
|---------------------------|-------------------|
| Enter Standby mode | `HAL_PWR_EnterSLEEPMode`, `HAL_PWR_EnterSTOPMode`, `HAL_PWR_EnterSTANDBYMode` |
| Enable Backup access | `HAL_PWR_EnableBkUpAccess` |

<br>

## Flash intern

| **Functionality** | **HAL functions** |
|---------------------------|-------------------|
| Flash access              | `HAL_FLASH_Unlock`, `HAL_FLASH_Lock` |
| Programming / deleting    | `HAL_FLASH_Program`, `HAL_FLASH_Program_IT`, `HAL_FLASH_Erase` |

<br>

## CRC

| **Functionality** | **HAL functions** |
|---------------------------|-------------------|
| CRC calculation                | `HAL_CRC_Calculate`, `HAL_CRC_Accumulate` |

<br>

## RNG

| **Functionality** | **HAL functions** |
|---------------------------|-------------------|
| Random number          | `HAL_RNG_GenerateRandomNumber`, `HAL_RNG_IRQHandler` |

<br>

## Watchdogs

| **Functionality** | **HAL functions** |
|---------------------------|-------------------|
| IWDG                      | `HAL_IWDG_Start` |
| WWDG Refresh              | `HAL_WWDG_Refresh` |

<br>

## EXTI

| **Functionality** | **HAL functions** |
|---------------------------|-------------------|
| Line interruption        | `HAL_EXTI_IRQHandler`, `HAL_EXTI_GetPending`, `HAL_EXTI_ClearPending`, `HAL_EXTI_Callback` |

---

## Source
- [STMicroelectronics HAL Reference](https://www.st.com/en/embedded-software/stm32cubef4.html)
