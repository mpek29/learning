---
layout: page
title: Arduino
category: R&D
importance: 10
---

## Built-In

### Pin Input/Output
#### Digital I/O pins 0-13 Α0-A5
- pinMode(pin,
{INPUT | OUTPUT | INPUT_PULLUP})
- int digitalRead(pin)
- digitalWrite(pin, (HIGH LOW})

#### Analog In pins A0-A5
- int analogRead(pin)
- analogReference( {DEFAULT INTERNAL | EXTERNAL})

#### PWM Out - pins 3 5 6 9 10 11
- analogWrite(pin, value) // 0-255

### Advanced I/O
- tone(pin, freq_Hz, [duration_msec])
- noTone(pin)
- shiftOut(dataPin, clockPin, {MSBFIRST LSBFIRST), value)
- shiftIn(dataPin, clockPin, {MSBFIRST LSBFIRST))
- unsigned long pulseIn(pin, {HIGH LOW), [timeout_usec])

### Time
- unsigned long millis() // Overflows at 50 days
- unsigned long micros() // Overflows at 70 minutes
- delay(msec)
- delayMicroseconds(usec)

### External Interrupts
- attachInterrupt(interrupt, func, [LOW CHANGE | RISING | FALLING))
- detachInterrupt(interrupt)
- interrupts()
- noInterrupts()

## Libraries

### Serial comm. with PC or via RX/TX
- begin(long speed) // Up to 115200 end()
- int available() // #bytes available int read() // -1 if none available
- int peek() // Read w/o removing
- flush()
- print(data) println(data)
- write(byte) write(char - string)
- write(byte - data, size)
- SerialEvent() // Called if data rdy

### SoftwareSerial.h comm. on any pin
- SoftwareSerial (rxPin, txPin)
- begin(long speed) // Up to 115200 listen() // Only 1 can listen
- isListening() // at a time.
- read, peek, print, println, write
// Equivalent to Serial library

### EEPROM.h access non-volatile memory
- byte read(addr)
- write(addr, byte)
- EEPROM[index] // Access as array

### Servo.h control servo motors
- attach(pin, [min_usec, max_usec])
- write(angle) // 0 to 180 writeMicroseconds(us)
// 1000-2000; 1500 is midpoint
- int read() //0 to 180
- bool attached()
- detach()

### Wire.h I²C communication
- begin() // Join a master
- begin(addr) // Join a slave @ addr
- requestFrom(address, count)
- beginTransmission (addr) // Step 1
- send(byte) // Step 2
- send(char- string)
- send(byte data, size)
- endTransmission() // Step 3
- int available() // #bytes available
- byte receive() // Get next byte
- onReceive (handler)
- onRequest (handler)

## Source
- <https://raw.githubusercontent.com/liffiton/Arduino-Cheat-Sheet/master/Arduino%20Cheat%20Sheet.pdf>
- <https://www.arduino.cc/reference/en/>
