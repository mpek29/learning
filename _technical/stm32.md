---
layout: page
title: STM32 avec HAL
category: Informatique
importance: 11
---

## GPIO
- HAL_GPIO_ReadPin()
- HAL_GPIO_WritePin()
- HAL_GPIO_TogglePin()
- HAL_GPIO_EXT_Callback()

### ADC (Entrées Analogiques)
- HAL_ADC_Start()
- HAL_ADC_Stop()
- HAL_ADC_Start_IT()
- HAL_ADC_Stop_IT()
- HAL_ADC_PollForConversion()
- HAL_ADC_GetValue()
- HAL_ADC_ConvHalfCpltCallback()
- HAL_ADC_ConvCpltCallback()

### I²C
- HAL_I2C_Master_Transmit()
- HAL_I2C_Master_Receive()
- HAL_I2C_Mem_Write()
- HAL_I2C_Mem_Read()
- HAL_I2C_IsDeviceReady()
- HAL_I2C_MasterTxCpltCallback()
- HAL_I2C_MasterRxCpltCallback()

### UART(Communication Série)
- HAL_UART_Transmit()
- HAL_UART_Receive()
- HAL_UART_Transmit_IT()
- HAL_UART_Receive_IT()
- HAL_UART_ReceiveTolde()
- HAL_UART_ReceiveTolde_IT()
- HAL_UART_TxCpltCallback()
- HAL_UART_RxCpltCallback()
- HAL_UART_TxHalfCpltCallback()
- HAL_UART_RxHalfCpltCallback()

### TIMER
- HAL_TIM_PWM_Base_Start()
- HAL_TIM_PWM_Base_Stop()
- HAL_TIM_PWM_Base_Start_IT()
- HAL_TIM_PWM_Base_Stop_IT()
- HAL_TIM_PWM_Start(&htim2, TIM_CHANNEL_1);
- HAL_TIM_PWM_Stop()
- \__HAL_TIM_SET_COMPARE(&htim2, TIM_CHANNEL_1, 750); // 75% du cycle de la période
- \__HL_TIM_GET_COMPARE()
- HAL_TIM_PeriodElapsedHalfCpltCallback()
- HAL_TIM_PeriodElapsedCallback()

## Source
- <https://cheatography.com/carmamo/cheat-sheets/stm32/>
