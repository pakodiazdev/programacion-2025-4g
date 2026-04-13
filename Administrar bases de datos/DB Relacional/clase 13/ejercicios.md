🏠 [← README](../../../README.md) · ⬅️ [← Clase 12](../clase%2012/ejercicios.md) · 📘 [Resumen](resumen.md)

---

# 📘 Prácticas — Clase 13 (Relacional / PHP CLI)

## 🎯 Objetivo

Reforzar el uso de:

- Estructuras condicionales `if / elseif / else`
- Ciclo `while`
- Entrada de datos con `readline`
- Conexión local y remota a MySQL desde consola

---

## 📌 Lineamiento general (programación)

Para evitar datos hardcodeados y dar más dinamismo a las prácticas:

- En todos los ejercicios de **programación** (Bloque A y Bloque B) se debe capturar entrada con `readline`.
- No se permite resolver con valores fijos escritos directo en el código.

### Plantilla base sugerida (PHP CLI)

```php
<?php

echo "Ingresa el dato 1:\n";
$dato1 = readline();

echo "Ingresa el dato 2:\n";
$dato2 = readline();

// Convertir cuando aplique
$n1 = (int) $dato1;
$n2 = (float) $dato2;

// Resolver aquí el problema con if/elseif/else o while
```


---

# 🧪 Bloque A — Programación (if / elseif / else)

> Práctica en pareja. Cada equipo resuelve un enunciado distinto. Los mismos equipos aplican en ambas materias (BDR Clase 13 / BDNR Clase 07).

---

## Práctica 201 — Tarifa de transporte por zona  
**Archivo:** `p201-tarifa-transporte-zona.php`  
**Pareja:** ALCANTAR · BALANDRAN

Leer una zona (`A`, `B`, `C`, `D`).

- Si la zona es `A`, mostrar: `Tarifa $12`
- Si la zona es `B`, mostrar: `Tarifa $15`
- Si la zona es `C`, mostrar: `Tarifa $18`
- En cualquier otro caso, mostrar: `Zona no válida`

---

## Práctica 203 — Nivel de descuento por compra  
**Archivo:** `p203-nivel-descuento-compra.php`  
**Pareja:** BARAJAS · BLANCARTE

Leer el total de compra.

- Si el total es mayor o igual a 2000, mostrar: `Descuento 20%`
- Si el total es mayor o igual a 1000, mostrar: `Descuento 10%`
- Si el total es mayor o igual a 500, mostrar: `Descuento 5%`
- En caso contrario, mostrar: `Sin descuento`

---

## Práctica 205 — Tipo de acceso por horario  
**Archivo:** `p205-tipo-acceso-horario.php`  
**Pareja:** CORRALEJO · DOMINGUEZ

Leer una hora (0 a 23).

- Si la hora está entre 6 y 11, mostrar: `Turno matutino`
- Si la hora está entre 12 y 17, mostrar: `Turno vespertino`
- Si la hora está entre 18 y 22, mostrar: `Turno nocturno`
- En caso contrario, mostrar: `Horario fuera de servicio`

---

## Práctica 207 — Prioridad de ticket  
**Archivo:** `p207-prioridad-ticket.php`  
**Pareja:** FERNANDEZ · GALICIA

Leer el tiempo de espera en minutos.

- Si espera es mayor o igual a 60, mostrar: `Prioridad crítica`
- Si espera es mayor o igual a 30, mostrar: `Prioridad alta`
- Si espera es mayor o igual a 10, mostrar: `Prioridad media`
- En caso contrario, mostrar: `Prioridad normal`

---

## Práctica 209 — Estado de inventario  
**Archivo:** `p209-estado-inventario.php`  
**Pareja:** GALINDO · HERNANDEZ

Leer existencias de un producto.

- Si existencias es mayor o igual a 100, mostrar: `Inventario alto`
- Si existencias es mayor o igual a 50, mostrar: `Inventario medio`
- Si existencias es mayor o igual a 1, mostrar: `Inventario bajo`
- En caso contrario, mostrar: `Sin inventario`

---

## Práctica 211 — Estado del clima por temperatura  
**Archivo:** `p211-estado-clima-temperatura.php`  
**Pareja:** IBARRA · JASSO

Leer una temperatura en grados.

- Si temperatura es mayor o igual a 35, mostrar: `Muy caluroso`
- Si temperatura es mayor o igual a 25, mostrar: `Cálido`
- Si temperatura es mayor o igual a 15, mostrar: `Templado`
- En caso contrario, mostrar: `Frío`

---

## Práctica 213 — Nivel de envío por distancia  
**Archivo:** `p213-nivel-envio-distancia.php`  
**Pareja:** JUAREZ · MONTES

Leer la distancia de envío en km.

- Si distancia es mayor o igual a 1000, mostrar: `Envío nacional`
- Si distancia es mayor o igual a 300, mostrar: `Envío regional`
- Si distancia es mayor o igual a 1, mostrar: `Envío local`
- En caso contrario, mostrar: `Distancia inválida`

---

## Práctica 215 — Categoría de salario  
**Archivo:** `p215-categoria-salario.php`  
**Pareja:** MONTIEL · MORALES

Leer salario mensual.

- Si salario es mayor o igual a 20000, mostrar: `Salario alto`
- Si salario es mayor o igual a 12000, mostrar: `Salario medio`
- Si salario es mayor o igual a 8000, mostrar: `Salario base`
- En caso contrario, mostrar: `Salario por debajo del base`

---

## Práctica 217 — Tipo de suscripción  
**Archivo:** `p217-tipo-suscripcion.php`  
**Pareja:** RODRIGUEZ ARRELLANO · RODRIGUEZ DIAZ

Leer plan (`free`, `basic`, `pro`, `premium`).

- Si plan es `premium`, mostrar: `Acceso total`
- Si plan es `pro`, mostrar: `Acceso avanzado`
- Si plan es `basic`, mostrar: `Acceso estándar`
- En caso contrario, mostrar: `Acceso limitado`

---

## Práctica 219 — Diagnóstico de señal WiFi  
**Archivo:** `p219-diagnostico-senal-wifi.php`  
**Pareja:** ROMERO · SANCHEZ

Leer intensidad de señal en porcentaje.

- Si señal es mayor o igual a 80, mostrar: `Señal excelente`
- Si señal es mayor o igual a 60, mostrar: `Señal buena`
- Si señal es mayor o igual a 30, mostrar: `Señal inestable`
- En caso contrario, mostrar: `Sin señal útil`

---

## Práctica 221 — Nivel de consumo eléctrico  
**Archivo:** `p221-nivel-consumo-electrico.php`  
**Pareja:** VELASCO · VELZASCO · VILLANUEVA _(trío)_

Leer consumo mensual en kWh.

- Si consumo es mayor o igual a 500, mostrar: `Consumo muy alto`
- Si consumo es mayor o igual a 300, mostrar: `Consumo alto`
- Si consumo es mayor o igual a 150, mostrar: `Consumo medio`
- En caso contrario, mostrar: `Consumo bajo`

---

# 🧪 Bloque B — Programación (while)

> Práctica en pareja. Los mismos equipos del Bloque A.

---

## Práctica 224 — Suma de 5 ventas  
**Archivo:** `p224-suma-5-ventas.php`  
**Pareja:** ALCANTAR · BALANDRAN

Usar `while` para leer 5 montos de venta y mostrar la suma total.

> 💡 Pista: necesitas una variable que empiece en `0` y vaya acumulando cada monto leído.

---

## Práctica 226 — Conteo regresivo  
**Archivo:** `p226-conteo-regresivo.php`  
**Pareja:** BARAJAS · BLANCARTE

Leer un número inicial y usar `while` para mostrar el conteo regresivo hasta 0.

> 💡 Pista: la condición del `while` y la actualización de la variable deben hacer que el contador baje en cada vuelta.

---

## Práctica 228 — Suma de pares en rango  
**Archivo:** `p228-suma-pares-rango.php`  
**Pareja:** CORRALEJO · DOMINGUEZ

Leer un límite superior y usar `while` para sumar únicamente números pares desde 1 hasta ese límite.

> 💡 Pista: el operador `%` (módulo) te dice si un número es par cuando el residuo entre 2 es `0`.

---

## Práctica 230 — Captura hasta palabra de salida  
**Archivo:** `p230-captura-palabra-salida.php`  
**Pareja:** FERNANDEZ · GALICIA

Usar `while` para leer palabras hasta que el usuario escriba `salir`. Mostrar cuántas palabras capturó.

> 💡 Pista: un contador que sume `1` en cada vuelta (sin guardar las palabras) es suficiente para saber cuántas se capturaron.

---

## Práctica 232 — Menú repetitivo  
**Archivo:** `p232-menu-repetitivo.php`  
**Pareja:** GALINDO · HERNANDEZ

Construir un menú con `while` que se repita hasta que el usuario elija opción `4` (salir).

> 💡 Pista: la condición del `while` puede ser directamente que la opción leída sea distinta de `4`.

---

## Práctica 234 — Serie de cuadrados  
**Archivo:** `p234-serie-cuadrados.php`  
**Pareja:** IBARRA · JASSO

Leer un número N y mostrar con `while` los cuadrados de 1 hasta N.

> 💡 Pista: usa un contador `$i` que empiece en `1`; el cuadrado de cada vuelta es `$i * $i`.

---

## Práctica 236 — Suma de impares  
**Archivo:** `p236-suma-impares.php`  
**Pareja:** JUAREZ · MONTES

Leer un límite N y usar `while` para sumar únicamente impares desde 1 hasta N.

> 💡 Pista: un número es impar cuando `$n % 2` es diferente de `0`.

---

## Práctica 238 — Menor de una lista  
**Archivo:** `p238-menor-lista.php`  
**Pareja:** MONTIEL · MORALES

Leer 6 números con `while` y mostrar cuál fue el menor.

> 💡 Pista: guarda el primero en una variable `$menor`; en cada vuelta compara el nuevo número con esa variable y actualízala si el nuevo es menor.

---

## Práctica 240 — Conversión de temperaturas  
**Archivo:** `p240-conversion-temperaturas.php`  
**Pareja:** RODRIGUEZ ARRELLANO · RODRIGUEZ DIAZ

Leer 4 temperaturas en Celsius con `while` y mostrar su conversión a Fahrenheit.

> 💡 Pista: convierte y muestra el resultado dentro del ciclo en la misma vuelta que lees el dato. La fórmula es `F = C * 9/5 + 32`.

---

## Práctica 242 — Conteo de positivos y negativos  
**Archivo:** `p242-conteo-positivos-negativos.php`  
**Pareja:** ROMERO · SANCHEZ

Leer 10 números con `while` y mostrar cuántos son positivos y cuántos negativos.

> 💡 Pista: dos contadores `$positivos` y `$negativos` que inicias en `0` y aumentas según el número leído son suficientes.

---

## Práctica 245 — Serie Fibonacci básica  
**Archivo:** `p245-serie-fibonacci-basica.php`  
**Pareja:** VELASCO · VELZASCO · VILLANUEVA _(trío)_

Leer N y mostrar con `while` los primeros N términos de la serie Fibonacci.

> 💡 Pista: necesitas dos variables que guarden los dos términos anteriores (`$a = 0`, `$b = 1`); en cada vuelta muestra `$a`, luego calcula el siguiente con `$c = $a + $b` y actualiza las variables.

---

# 🗄️ Bloque C — Prácticas generales de base de datos (Relacional)

## Práctica 247 — Conexión local y base con nombre del alumno

1. Conectarse a MySQL en `localhost` (en laboratorio, sin password):

```bash
mysql -h localhost -u root
```

2. Crear una base con su nombre (ejemplo):

```sql
CREATE DATABASE juan_perez;
```

3. Seleccionar la base creada:

```sql
USE juan_perez;
```

4. Validar mostrando el resultado de:

```sql
SELECT DATABASE();
```

Evidencia esperada: captura o salida en pantalla donde se vea su base seleccionada en equipo local.

---

## Práctica 248 — Conexión remota y validación de existencia de base

1. Conectarse al servidor remoto (se proporcionará host el día de clase):

```bash
mysql -h HOST_REMOTO -P 3306 -u USUARIO -p
```

2. Crear una base de datos con su nombre.
3. Seleccionar la base de datos creada.
4. Ejecutar y mostrar estos dos comandos de validación:

```sql
SELECT DATABASE();
SHOW DATABASES;
```

Criterio de validación: en `SELECT DATABASE()` debe aparecer su base activa y en `SHOW DATABASES;` debe existir su base en el host remoto.
