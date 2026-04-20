🏠 [← README](../../../README.md) · ⬅️ [← Clase 16 ejercicios](../clase%2016/ejercicios.md) · 📘 [Resumen](resumen.md)

---

# 📘 Prácticas — Clase 17 (Relacional / PHP CLI)

## 🎯 Objetivo

Crear funciones que reciben parámetros, usan `return` para devolver resultados, y se llaman desde el programa principal. Cada función soluciona un problema específico (cálculos, conversiones, validaciones).

## 📌 Lineamiento general

- Cada función debe tener **parámetros**
- Cada función debe usar **return** (no solo echo)
- Desde el programa principal, **llamar la función** y guardar el resultado
- Mostrar el resultado con `echo`

**Plantilla base:**

```php
<?php

function miFuncion($parametro1, $parametro2) {
    // Hacer operación
    $resultado = $parametro1 + $parametro2;
    return $resultado;
}

// Programa principal
echo "Ingresa el primer valor:\n";
$valor1 = (float) readline();

echo "Ingresa el segundo valor:\n";
$valor2 = (float) readline();

// Llamar función
$resultado = miFuncion($valor1, $valor2);

// Mostrar resultado
echo "Resultado: " . $resultado . "\n";
```

> 🐙 **Entrega en GitHub:** sube a `dbr/clase-17/`. Commit: `clase-17: p6XX funcion [tema]`.
> 💪 **Práctica en pareja:** resuelven juntos, cada quien sube a su propio repo.

---

# 🧪 Bloque A — Funciones (p601-p623)

## Práctica p601 — Área de rectángulo
**Alumno:** ALCANTAR
**Archivo:** `p601-area-rectangulo.php`

Función `calcularAreaRectangulo($base, $altura)` que retorna el área (base × altura).
- Leer base y altura con readline
- Llamar función y mostrar resultado

---

## Práctica p602 — Calcular IVA
**Alumno:** BALANDRAN
**Archivo:** `p602-calcular-iva.php`

Función `calcularIVA($precio)` que retorna el IVA al 16%.
- Fórmula: IVA = precio × 0.16
- Leer precio
- Mostrar IVA y precio total (precio + IVA)

---

## Práctica p603 — Promedio de calificaciones
**Alumno:** BARAJAS
**Archivo:** `p603-promedio-calificaciones.php`

Función `calcularPromedio($n1, $n2, $n3)` que retorna el promedio de 3 calificaciones.
- Leer las 3 notas
- Mostrar promedio
- Indicar si aprobó (>= 6) o reprobó (< 6)

---

## Práctica p604 — Celsius a Fahrenheit
**Alumno:** BLANCARTE
**Archivo:** `p604-celsius-fahrenheit.php`

Función `convertirCelsiusAFahrenheit($celsius)` que retorna °F.
- Fórmula: F = C × 9/5 + 32
- Leer temperatura en Celsius
- Mostrar resultado

---

## Práctica p605 — Perímetro de círculo
**Alumno:** CORRALEJO
**Archivo:** `p605-perimetro-circulo.php`

Función `calcularPerimetroCirculo($radio)` que retorna el perímetro.
- Fórmula: P = 2 × π × r
- Usar PI = 3.1416
- Leer radio

---

## Práctica p606 — Precio con descuento
**Alumno:** DOMINGUEZ
**Archivo:** `p606-precio-con-descuento.php`

Función `calcularPrecioConDescuento($precio, $porciento)` que retorna el precio final después de aplicar descuento.
- Leer precio y porcentaje de descuento
- Mostrar monto ahorrado y precio final

---

## Práctica p607 — Es número par
**Alumno:** FERNANDEZ
**Archivo:** `p607-numero-par.php`

Función `esNumeroPar($numero)` que retorna `true` o `false`.
- Leer número
- Si es par, mostrar "es par"; si es impar, mostrar "es impar"

---

## Práctica p608 — Potencia
**Alumno:** GALICIA
**Archivo:** `p608-potencia.php`

Función `calcularPotencia($base, $exponente)` que retorna el resultado SIN usar `pow()`.
- Usar un ciclo `for` para multiplicar $base $exponente veces
- Ejemplo: 2^3 = 2 × 2 × 2 = 8

---

## Práctica p609 — Área de triángulo
**Alumno:** GALINDO
**Archivo:** `p609-area-triangulo.php`

Función `calcularAreaTriangulo($base, $altura)` que retorna el área.
- Fórmula: A = (base × altura) / 2
- Leer base y altura

---

## Práctica p610 — Horas a minutos
**Alumno:** HERNANDEZ
**Archivo:** `p610-horas-a-minutos.php`

Función `convertirHorasAMinutos($horas)` que retorna minutos totales.
- Ejemplo: 2.5 horas = 150 minutos
- Leer horas (puede ser decimal)

---

## Práctica p611 — Costo de envío
**Alumno:** IBARRA
**Archivo:** `p611-costo-envio.php`

Función `calcularCostoEnvio($pesoKg)` que retorna el costo basado en peso.
- Hasta 1 kg: $30
- Hasta 5 kg: $60
- Más de 5 kg: $100
- Usar `if` dentro de la función

---

## Práctica p612 — Categoría por edad
**Alumno:** JASSO
**Archivo:** `p612-categoria-edad.php`

Función `obtenerCategoria($edad)` que retorna string:
- "niño" si edad < 12
- "adolescente" si 12 <= edad <= 17
- "adulto" si 18 <= edad <= 59
- "adulto mayor" si edad >= 60

---

## Práctica p613 — Calcular vuelto
**Alumno:** JUAREZ
**Archivo:** `p613-calcular-vuelto.php`

Función `calcularVuelto($pago, $precio)` que retorna el vuelto.
- Si $pago < $precio, retornar -1 y mostrar "Pago insuficiente"
- Si es suficiente, retornar el vuelto (pago - precio)

---

## Práctica p614 — Salario neto
**Alumno:** MONTES
**Archivo:** `p614-salario-neto.php`

Función `calcularSalarioNeto($salarioBase, $descuentoPct)` que retorna el salario después de aplicar descuento porcentual.
- Leer salario base y porcentaje de descuento
- Mostrar descuento y salario neto

---

## Práctica p615 — Es múltiplo
**Alumno:** MONTIEL
**Archivo:** `p615-es-multiplo.php`

Función `esMultiplo($numero, $divisor)` que retorna `true` si número es múltiplo de divisor.
- Ejemplo: 15 es múltiplo de 3 (15 % 3 == 0)
- Probar con al menos 3 casos desde el programa principal

---

## Práctica p616 — Interés simple
**Alumno:** MORALES
**Archivo:** `p616-interes-simple.php`

Función `calcularInteresSimple($capital, $tasaPct, $tiempoAnios)` que retorna el interés.
- Fórmula: I = (C × r × t) / 100
- Leer capital, tasa de interés y años

---

## Práctica p617 — Velocidad media
**Alumno:** RODRIGUEZ ARRELLANO
**Archivo:** `p617-velocidad-media.php`

Función `calcularVelocidadMedia($distanciaKm, $tiempoHoras)` que retorna km/h.
- Velocidad = distancia / tiempo
- Leer distancia en km y tiempo en horas

---

## Práctica p618 — Calcular IMC
**Alumno:** RODRIGUEZ DIAZ
**Archivo:** `p618-calcular-imc.php`

Función `calcularIMC($pesoKg, $alturaM)` que retorna el IMC.
- Fórmula: IMC = peso / altura²
- Mostrar el valor
- Mostrar categoría: bajo (< 18.5), normal (18.5-24.9), sobrepeso (25-29.9), obesidad (>= 30)

---

## Práctica p619 — Total con propina
**Alumno:** ROMERO
**Archivo:** `p619-total-con-propina.php`

Función `calcularTotalConPropina($subtotal, $porcentajePropina)` que retorna el total.
- Leer subtotal y porcentaje de propina
- Mostrar monto de propina y total

---

## Práctica p620 — Edad en días
**Alumno:** SANCHEZ
**Archivo:** `p620-edad-en-dias.php`

Función `calcularEdadEnDias($anos)` que retorna años multiplicado por 365.
- Leer edad en años (como número)
- Mostrar "Tienes X días de vida"

---

## Práctica p621 — Área de círculo
**Alumno:** VELASCO
**Archivo:** `p621-area-circulo.php`

Función `calcularAreaCirculo($radio)` que retorna el área.
- Fórmula: A = π × r²
- Usar PI = 3.1416
- Leer radio

---

## Práctica p622 — Km a millas
**Alumno:** VELZASCO
**Archivo:** `p622-km-a-millas.php`

Función `convertirKmAMillas($km)` que retorna millas.
- Conversión: 1 km = 0.621371 millas
- Leer distancia en km

---

## Práctica p623 — Calcular fuerza
**Alumno:** VILLANUEVA
**Archivo:** `p623-calcular-fuerza.php`

Función `calcularFuerza($masaKg, $aceleracion)` que retorna fuerza en Newtons.
- Fórmula: F = m × a
- Leer masa (kg) y aceleración (m/s²)

---

<a id="bloque-b"></a>
# 👥 Bloque B — Práctica por equipo (repaso de estructuras + funciones)

## Reglas del bloque

- Equipos en pareja (sin repetir compañero de clases anteriores)
- Cada ejercicio debe tener **mínimo 2 funciones**
- Las funciones deben **recibir parámetros** y **retornar valor**
- En el programa principal deben usar al menos una estructura: `if`, `if/else`, `while`, `for`, `switch/case`

## Equipos y práctica asignada

| Equipo | Integrantes | Práctica |
|--------|-------------|----------|
| 1 | ALCANTAR · VELZASCO | p701 |
| 2 | BALANDRAN · VELASCO | p702 |
| 3 | BARAJAS · DOMINGUEZ | p703 |
| 4 | BLANCARTE · CORRALEJO | p704 |
| 5 | FERNANDEZ · HERNANDEZ | p705 |
| 6 | GALICIA · GALINDO | p706 |
| 7 | IBARRA · MONTES | p707 |
| 8 | JASSO · JUAREZ | p708 |
| 9 | MONTIEL · SANCHEZ | p709 |
| 10 | MORALES · RODRIGUEZ ARRELLANO | p710 |
| 11 | RODRIGUEZ DIAZ · ROMERO | p711 |
| — | VILLANUEVA | Apoyo: pruebas/casos de validación de cualquier equipo |

---

<a id="p701"></a>
## Práctica p701 — Menú de operaciones básicas (`switch/case`)
**Equipo:** ALCANTAR · VELZASCO  
**Archivo sugerido:** `p701-menu-operaciones.php`

**Objetivo del programa**  
Construir una mini calculadora CLI para reforzar cómo un `switch/case` decide qué función ejecutar según la opción del usuario.

**Cómo separarlo en funciones (tip)**
- `sumar($a, $b)`, `restar($a, $b)`, `multiplicar($a, $b)`, `dividir($a, $b)`
- `dividir` debe validar `$b == 0` y retornar mensaje de error
- En el programa principal: leer datos, aplicar `switch`, guardar resultado y mostrarlo

**Ejemplo de corrida**
```txt
--- Calculadora ---
Numero 1: 24
Numero 2: 6
Operacion (1 sumar, 2 restar, 3 multiplicar, 4 dividir): 4
Resultado: 4
```

<a id="p702"></a>
## Práctica p702 — Evaluación de calificación (`if/elseif/else`)
**Equipo:** BALANDRAN · VELASCO  
**Archivo sugerido:** `p702-estatus-calificacion.php`

**Objetivo del programa**  
Calcular promedio de 3 calificaciones y clasificar el desempeño del alumno usando condiciones encadenadas.

**Cómo separarlo en funciones (tip)**
- `calcularPromedio($c1, $c2, $c3)` retorna número decimal
- `obtenerEstatus($promedio)` retorna texto: reprobado, regular, bueno, excelente
- Principal: captura datos, llama funciones y muestra promedio + estatus

**Ejemplo de corrida**
```txt
Calificacion 1: 8
Calificacion 2: 9
Calificacion 3: 7
Promedio: 8
Estatus: bueno
```

<a id="p703"></a>
## Práctica p703 — Suma de pares en rango (`for`)
**Equipo:** BARAJAS · DOMINGUEZ  
**Archivo sugerido:** `p703-suma-pares-rango.php`

**Objetivo del programa**  
Recorrer un rango de números con `for`, identificar pares y acumular su suma total.

**Cómo separarlo en funciones (tip)**
- `esPar($n)` retorna `true/false`
- `sumarParesRango($inicio, $fin)` retorna suma de pares
- Si `inicio > fin`, corregir orden antes de recorrer

**Ejemplo de corrida**
```txt
Inicio del rango: 3
Fin del rango: 12
Pares encontrados: 4, 6, 8, 10, 12
Suma total de pares: 40
```

<a id="p704"></a>
## Práctica p704 — Acumulado hasta tope (`while`)
**Equipo:** BLANCARTE · CORRALEJO  
**Archivo sugerido:** `p704-acumulado-tope.php`

**Objetivo del programa**  
Practicar `while` para construir acumuladores y calcular estadísticas básicas (suma y promedio).

**Cómo separarlo en funciones (tip)**
- `sumarHasta($tope)` suma 1..tope y retorna total
- `promedioHasta($tope)` usa la suma y retorna promedio
- Validar `tope >= 1` para evitar divisiones inválidas

**Ejemplo de corrida**
```txt
Ingresa tope: 5
Suma de 1 a 5: 15
Promedio de 1 a 5: 3
```

<a id="p705"></a>
## Práctica p705 — Costo de envío por zona y peso (`if/else`)
**Equipo:** FERNANDEZ · HERNANDEZ  
**Archivo sugerido:** `p705-costo-envio-zona.php`

**Objetivo del programa**  
Simular cálculo real de paquetería: primero costo por peso y después ajuste por zona.

**Cómo separarlo en funciones (tip)**
- `calcularCostoBase($pesoKg)` retorna costo según tramos de peso
- `aplicarRecargoZona($costo, $zona)` retorna costo final
- Si zona es inválida, retornar `-1` para manejar error en principal

**Ejemplo de corrida**
```txt
Peso (kg): 3.5
Zona (A/B/C): B
Costo base: 60
Costo final con zona B: 66
```

<a id="p706"></a>
## Práctica p706 — Conversor de unidades (`switch/case`)
**Equipo:** GALICIA · GALINDO  
**Archivo sugerido:** `p706-conversor-unidades.php`

**Objetivo del programa**  
Crear un menú de conversiones para practicar selección de opción con `switch` y cálculo encapsulado en funciones.

**Cómo separarlo en funciones (tip)**
- `kmMillas($km)`, `celsiusFahrenheit($c)`, `kgLibras($kg)`
- `mostrarMenu()` opcional para limpiar el principal
- Cada `case` solo pide la entrada necesaria y llama su función

**Ejemplo de corrida**
```txt
1) Km a millas
2) Celsius a Fahrenheit
3) Kg a libras
Elige opcion: 1
Kilometros: 10
Resultado: 6.21371 millas
```

<a id="p707"></a>
## Práctica p707 — Tabla de multiplicar personalizada (`for`)
**Equipo:** IBARRA · MONTES  
**Archivo sugerido:** `p707-tabla-personalizada.php`

**Objetivo del programa**  
Generar una salida formateada con `for` para comprender cómo construir texto por bloques desde una función.

**Cómo separarlo en funciones (tip)**
- `generarTabla($numero, $limite)` retorna string con todas las líneas
- Opcional: `formatearLinea($n, $i)` para una sola línea
- Principal: recibe número y límite, imprime resultado final

**Ejemplo de corrida**
```txt
Numero base: 7
Limite: 5
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
7 x 4 = 28
7 x 5 = 35
```

<a id="p708"></a>
## Práctica p708 — Cajero con intentos (`while` + `if/else`)
**Equipo:** JASSO · JUAREZ  
**Archivo sugerido:** `p708-cajero-intentos.php`

**Objetivo del programa**  
Modelar un flujo de seguridad simple: validar acceso con intentos limitados y realizar retiro con validación de saldo.

**Cómo separarlo en funciones (tip)**
- `validarNip($nipIngresado, $nipCorrecto)` retorna booleano
- `retirar($saldo, $monto)` retorna nuevo saldo o `-1`
- Principal: `while` de intentos, después ejecutar retiro si autenticación fue correcta

**Ejemplo de corrida**
```txt
Ingresa NIP: 1234
NIP incorrecto. Intentos restantes: 2
Ingresa NIP: 4321
NIP correcto
Saldo actual: 1500
Monto a retirar: 400
Retiro exitoso. Nuevo saldo: 1100
```

<a id="p709"></a>
## Práctica p709 — Descuento por tipo de cliente (`if/elseif`)
**Equipo:** MONTIEL · SANCHEZ  
**Archivo sugerido:** `p709-descuento-cliente.php`

**Objetivo del programa**  
Aplicar reglas de negocio por categoría de cliente y calcular el total final de compra.

**Cómo separarlo en funciones (tip)**
- `obtenerDescuento($tipoCliente)` retorna porcentaje numérico
- `calcularTotal($subtotal, $descuentoPct)` retorna total a pagar
- Usar `strtolower()` para evitar errores por mayúsculas/minúsculas

**Ejemplo de corrida**
```txt
Subtotal: 850
Tipo de cliente (nuevo/frecuente/vip): vip
Descuento aplicado: 15%
Total a pagar: 722.5
```

<a id="p710"></a>
## Práctica p710 — Serie y suma de Fibonacci (`for`)
**Equipo:** MORALES · RODRIGUEZ ARRELLANO  
**Archivo sugerido:** `p710-fibonacci-suma.php`

**Objetivo del programa**  
Generar la serie de Fibonacci y sumar sus términos para practicar manejo de arreglos, ciclos y funciones.

**¿Qué es Fibonacci?**  
Es una serie donde cada término se obtiene sumando los dos anteriores.  
Inicia así: `0, 1, 1, 2, 3, 5, 8, 13, ...`

**Cómo separarlo en funciones (tip)**
- `generarFibonacci($n)` retorna arreglo con `n` términos
- `sumarArreglo($arr)` retorna suma de los elementos
- Validar `n > 0`; para `n = 1` devolver `[0]`, para `n = 2` devolver `[0,1]`

**Ejemplo de corrida**
```txt
Cantidad de terminos: 8
Serie Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13
Suma de la serie: 33
```

<a id="p711"></a>
## Práctica p711 — Menú de área geométrica (`switch/case` + funciones)
**Equipo:** RODRIGUEZ DIAZ · ROMERO  
**Archivo sugerido:** `p711-areas-menu.php`

**Objetivo del programa**  
Crear un menú de figuras para practicar el patrón: leer datos -> llamar función -> mostrar resultado.

**Cómo separarlo en funciones (tip)**
- `areaRectangulo($b, $h)`, `areaTriangulo($b, $h)`, `areaCirculo($r)`
- `mostrarMenuFiguras()` opcional para ordenar interfaz
- `switch` solo decide la figura; el cálculo vive en funciones

**Ejemplo de corrida**
```txt
1) Rectangulo
2) Triangulo
3) Circulo
Elige figura: 3
Radio: 2.5
Area del circulo: 19.635
```

---

**Nota final:** Recuerda: `return` para devolver valores, `echo` solo para mostrar. Cada función soluciona un problema pequeño; el programa principal las orquesta.
