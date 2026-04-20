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

<a id="bloque-b"></a>
# 👥 Práctica por equipo (repaso de estructuras + funciones)

> Este es el **bloque oficial por equipos para clase 17**.  
> Referencia directa de equipos: [README](../../../README.md#bdr-clase-17-22-abr-2026--nuevos-equipos-sin-repetir-compañero)

## Reglas del bloque

- Equipos en pareja (sin repetir compañero de clases anteriores)
- Cada ejercicio debe tener **mínimo 2 funciones**
- Las funciones deben **recibir parámetros** y **retornar valor**
- En el programa principal deben usar al menos una estructura: `if`, `if/else`, `while`, `for`, `switch/case`

## Equipos y práctica asignada

| Equipo | Integrantes | Práctica |
|--------|-------------|----------|
| 1 | ALCANTAR · VELZASCO | [p701](#p701) |
| 2 | BALANDRAN · VELASCO | [p702](#p702) |
| 3 | BARAJAS · DOMINGUEZ | [p703](#p703) |
| 4 | BLANCARTE · CORRALEJO | [p704](#p704) |
| 5 | FERNANDEZ · HERNANDEZ | [p705](#p705) |
| 6 | GALICIA · GALINDO | [p706](#p706) |
| 7 | IBARRA · MONTES | [p707](#p707) |
| 8 | JASSO · JUAREZ | [p708](#p708) |
| 9 | MONTIEL · SANCHEZ | [p709](#p709) |
| 10 | MORALES · RODRIGUEZ ARRELLANO | [p710](#p710) |
| 11 | RODRIGUEZ DIAZ · ROMERO | [p711](#p711) |
| — | VILLANUEVA | Apoyo: pruebas/casos de validación de cualquier equipo |

---

<a id="p701"></a>
## Práctica p701 — Menú de operaciones básicas (`switch/case`) · Equipo 1
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
## Práctica p702 — Evaluación de calificación (`if/elseif/else`) · Equipo 2
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
## Práctica p703 — Suma de pares en rango (`for`) · Equipo 3
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
## Práctica p704 — Acumulado hasta tope (`while`) · Equipo 4
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
## Práctica p705 — Costo de envío por zona y peso (`if/else`) · Equipo 5
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
## Práctica p706 — Conversor de unidades (`switch/case`) · Equipo 6
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
## Práctica p707 — Tabla de multiplicar personalizada (`for`) · Equipo 7
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
## Práctica p708 — Cajero con intentos (`while` + `if/else`) · Equipo 8
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
## Práctica p709 — Descuento por tipo de cliente (`if/elseif`) · Equipo 9
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
## Práctica p710 — Serie y suma de Fibonacci (`for`) · Equipo 10
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
## Práctica p711 — Menú de área geométrica (`switch/case` + funciones) · Equipo 11
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
