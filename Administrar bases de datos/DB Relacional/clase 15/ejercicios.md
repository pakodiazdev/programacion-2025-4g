🏠 [← README](../../../README.md) · ⬅️ [← Clase 14](../clase%2014/ejercicios.md) · 📘 [Resumen](resumen.md)

---

# 📘 Prácticas — Clase 15 (Relacional / PHP CLI)

## 🎯 Objetivo

Reforzar el uso de:

- Arreglos con datos fijos y acceso por índice
- La función `count()` para recorrer arreglos con `for`
- El operador `$arr[]` para agregar elementos dinámicamente
- Arreglos con `for` + `readline` para capturar listas de datos
- Comandos MySQL `INSERT INTO` y `SELECT`

---

## 📌 Lineamiento general (programación)

- En el **Bloque A** los valores del arreglo se declaran directamente en el código (datos fijos).
- En el **Bloque B** los datos se leen desde teclado con `readline` y se acumulan con `$arr[] = valor`.

### Plantilla base — Bloque A (arreglo con datos fijos)

```php
<?php
$numeros = [10, 25, 7, 42, 13];

for ($i = 0; $i < count($numeros); $i++) {
	echo $numeros[$i] . "\n";
}
```

### Plantilla base — Bloque B (arreglo + readline + push)

```php
<?php
echo "¿Cuántos datos vas a ingresar?\n";
$n = (int) readline();

$datos = [];

for ($i = 0; $i < $n; $i++) {
	echo "Dato " . ($i + 1) . ": ";
	$datos[] = readline();
}

for ($i = 0; $i < count($datos); $i++) {
	echo $datos[$i] . "\n";
}
```

---

# 🧪 Bloque A — Arreglos con datos fijos

---

## Práctica 297 — Lista de frutas
**Archivo:** `p297-lista-frutas.php`
**Alumno:** ALCANTAR

Declarar un arreglo con 5 frutas y mostrarlas numeradas (1. manzana, 2. pera, etc.).

---

## Práctica 298 — Promedio de calificaciones
**Archivo:** `p298-promedio-calificaciones.php`
**Alumno:** BALANDRAN

Declarar un arreglo de 5 calificaciones. Mostrarlas todas y calcular su promedio.

---

## Práctica 299 — El mayor de 5 números
**Archivo:** `p299-mayor-cinco-numeros.php`
**Alumno:** BARAJAS

Declarar un arreglo de 5 números. Recorrerlo con `for` y mostrar el mayor.

---

## Práctica 300 — El menor de 5 números
**Archivo:** `p300-menor-cinco-numeros.php`
**Alumno:** BLANCARTE

Declarar un arreglo de 5 números. Recorrerlo con `for` y mostrar el menor.

---

## Práctica 301 — Total de precios
**Archivo:** `p301-total-precios.php`
**Alumno:** CORRALEJO

Declarar un arreglo de 5 precios. Usar `for` para calcular y mostrar el total.

---

## Práctica 302 — Días de la semana
**Archivo:** `p302-dias-de-la-semana.php`
**Alumno:** DOMINGUEZ

Declarar un arreglo con los 7 días de la semana y mostrarlos numerados del 1 al 7.

---

## Práctica 303 — Temperaturas altas
**Archivo:** `p303-temperaturas-altas.php`
**Alumno:** FERNANDEZ

Declarar un arreglo de 5 temperaturas. Usar `for` para mostrar solo las que superan 25°C.

---

## Práctica 304 — Alumnos aprobados
**Archivo:** `p304-alumnos-aprobados.php`
**Alumno:** GALICIA

Declarar un arreglo de 5 calificaciones. Usar `for` para contar y mostrar cuántos aprobaron (≥ 6).

---

## Práctica 305 — Mayores de edad
**Archivo:** `p305-mayores-de-edad.php`
**Alumno:** GALINDO

Declarar un arreglo de 5 edades. Usar `for` para mostrar cuántos son mayores de edad (≥ 18).

---

## Práctica 306 — Suma y promedio
**Archivo:** `p306-suma-y-promedio.php`
**Alumno:** HERNANDEZ

Declarar un arreglo de 6 números. Calcular y mostrar la suma total y el promedio.

---

## Práctica 307 — Arreglo en reversa
**Archivo:** `p307-arreglo-en-reversa.php`
**Alumno:** IBARRA

Declarar un arreglo de 5 palabras. Usar `for` con decremento para mostrarlas del último al primero.

---

## Práctica 308 — Mayor venta y total
**Archivo:** `p308-mayor-venta-total.php`
**Alumno:** JASSO

Declarar un arreglo de 5 montos de venta. Mostrar el monto más alto y el total acumulado.

---

## Práctica 309 — Números pares del arreglo
**Archivo:** `p309-pares-del-arreglo.php`
**Alumno:** JUAREZ

Declarar un arreglo de 5 números. Usar `for` para mostrar cuántos son pares.

---

## Práctica 310 — Precios con descuento
**Archivo:** `p310-precios-con-descuento.php`
**Alumno:** MONTES

Declarar un arreglo de 5 precios. Usar `for` para mostrar cada precio con un 15% de descuento aplicado.

---

## Práctica 311 — Metros a centímetros
**Archivo:** `p311-metros-a-cm.php`
**Alumno:** MONTIEL

Declarar un arreglo de 5 longitudes en metros. Usar `for` para mostrarlas convertidas a centímetros (× 100).

---

## Práctica 312 — Salarios altos
**Archivo:** `p312-salarios-altos.php`
**Alumno:** MORALES

Declarar un arreglo de 5 salarios. Mostrar los que superan $300.

---

## Práctica 313 — Aprobados y promedio grupal
**Archivo:** `p313-aprobados-promedio-grupal.php`
**Alumno:** RODRIGUEZ ARRELLANO

Declarar un arreglo de 5 calificaciones. Calcular el promedio y mostrar si el grupo "aprobó" (promedio ≥ 6) o "reprobó".

---

## Práctica 314 — Perímetro de figura
**Archivo:** `p314-perimetro-figura.php`
**Alumno:** RODRIGUEZ DIAZ

Declarar un arreglo de 4 lados de una figura. Usar `for` para sumarlos y mostrar el perímetro.

---

## Práctica 315 — Doble de cada número
**Archivo:** `p315-doble-de-numeros.php`
**Alumno:** ROMERO

Declarar un arreglo de 5 números. Usar `for` para mostrar el doble de cada uno.

---

## Práctica 316 — Suma de los pares del arreglo
**Archivo:** `p316-suma-pares-arreglo.php`
**Alumno:** SANCHEZ

Declarar un arreglo de 5 números. Usar `for` para sumar solo los pares y mostrar el resultado.

---

## Práctica 317 — Clasificar calificaciones
**Archivo:** `p317-clasificar-calificaciones.php`
**Alumno:** VELASCO

Declarar un arreglo de 5 calificaciones. Usar `for` para mostrar cada una con su categoría:

- A: calificación ≥ 9
- B: calificación ≥ 7
- C: calificación ≥ 6
- D: calificación < 6 (reprobado)

---

## Práctica 318 — Menores de edad
**Archivo:** `p318-menores-de-edad.php`
**Alumno:** VELZASCO

Declarar un arreglo de 5 edades. Usar `for` para contar y mostrar cuántos son menores de 18.

---

## Práctica 319 — Encima del promedio
**Archivo:** `p319-encima-del-promedio.php`
**Alumno:** VILLANUEVA

Declarar un arreglo de 5 números. Calcular el promedio. Luego mostrar cuántos valores están por encima de ese promedio.

---

# 🧪 Bloque B — Arreglos con `readline`

---

## Práctica 320 — Guardar y mostrar nombres
**Archivo:** `p320-guardar-mostrar-nombres.php`
**Alumno:** ALCANTAR

Leer cuántos nombres se ingresarán (N). Usar `for` y `$arr[]` para guardarlos. Al final mostrarlos todos numerados.

---

## Práctica 321 — Promedio de N calificaciones
**Archivo:** `p321-promedio-n-calificaciones.php`
**Alumno:** BALANDRAN

Leer N calificaciones, guardarlas en un arreglo y mostrar el promedio al final.

---

## Práctica 322 — Mayor de N números
**Archivo:** `p322-mayor-n-numeros.php`
**Alumno:** BARAJAS

Leer N números, guardarlos en un arreglo y mostrar el mayor.

---

## Práctica 323 — Menor de N números
**Archivo:** `p323-menor-n-numeros.php`
**Alumno:** BLANCARTE

Leer N números, guardarlos en un arreglo y mostrar el menor.

---

## Práctica 324 — Total de N precios
**Archivo:** `p324-total-n-precios.php`
**Alumno:** CORRALEJO

Leer N precios, guardarlos en un arreglo y calcular el total. Mostrar todos los precios y el total al final.

---

## Práctica 325 — Nombres largos
**Archivo:** `p325-nombres-largos.php`
**Alumno:** DOMINGUEZ

Leer N nombres. Guardarlos en un arreglo y mostrar cuántos tienen más de 5 letras.

> Usar `strlen($nombre)` para obtener la longitud del texto.

---

## Práctica 326 — Temperaturas sobre 30°C
**Archivo:** `p326-temperaturas-sobre-30.php`
**Alumno:** FERNANDEZ

Leer N temperaturas, guardarlas en un arreglo y mostrar cuántas superan los 30°C.

---

## Práctica 327 — Aprobados y reprobados
**Archivo:** `p327-aprobados-reprobados.php`
**Alumno:** GALICIA

Leer N calificaciones y guardarlas en un arreglo. Al final mostrar cuántos aprobaron (≥ 6) y cuántos reprobaron.

---

## Práctica 328 — Encima del promedio
**Archivo:** `p328-encima-del-promedio.php`
**Alumno:** GALINDO

Leer N números y guardarlos en un arreglo. Calcular el promedio. Mostrar cuántos valores están por encima de él.

---

## Práctica 329 — Edad mayor y menor
**Archivo:** `p329-edad-mayor-menor.php`
**Alumno:** HERNANDEZ

Leer N edades y guardarlas en un arreglo. Mostrar la mayor y la menor edad ingresada.

---

## Práctica 330 — Venta más alta y total
**Archivo:** `p330-venta-alta-total.php`
**Alumno:** IBARRA

Leer N montos de venta, guardarlos en un arreglo, y mostrar al final el total acumulado y la venta más alta.

---

## Práctica 331 — Precios con 10% de descuento
**Archivo:** `p331-precios-descuento-10.php`
**Alumno:** JASSO

Leer N precios y guardarlos en un arreglo. Al mostrarlos, aplicar un 10% de descuento a cada uno.

---

## Práctica 332 — Salarios sobre el promedio
**Archivo:** `p332-salarios-sobre-promedio.php`
**Alumno:** JUAREZ

Leer N salarios y guardarlos en un arreglo. Calcular el promedio. Mostrar cuántos salarios superan el promedio del grupo.

---

## Práctica 333 — Promedio, mayor y menor
**Archivo:** `p333-promedio-mayor-menor.php`
**Alumno:** MONTES

Leer N calificaciones y guardarlas en un arreglo. Mostrar el promedio, la calificación más alta y la más baja.

---

## Práctica 334 — Solo positivos
**Archivo:** `p334-solo-positivos.php`
**Alumno:** MONTIEL

Leer N números y guardarlos en un arreglo. Mostrar solo los que son positivos (> 0).

---

## Práctica 335 — Pares e impares
**Archivo:** `p335-pares-e-impares.php`
**Alumno:** MORALES

Leer N números y guardarlos en un arreglo. Mostrar los pares y contar cuántos impares hay.

---

## Práctica 336 — Distancia total y promedio
**Archivo:** `p336-distancia-total-promedio.php`
**Alumno:** RODRIGUEZ ARRELLANO

Leer N distancias en kilómetros y guardarlas en un arreglo. Mostrar el total recorrido y el promedio por trayecto.

---

## Práctica 337 — Calificaciones excelentes
**Archivo:** `p337-calificaciones-excelentes.php`
**Alumno:** RODRIGUEZ DIAZ

Leer N calificaciones y guardarlas en un arreglo. Mostrar cuántas son ≥ 9 (excelentes).

---

## Práctica 338 — Precio más alto y más bajo
**Archivo:** `p338-precio-alto-bajo.php`
**Alumno:** ROMERO

Leer N precios y guardarlos en un arreglo. Mostrar el precio más alto y el más bajo.

---

## Práctica 339 — Suma de posiciones pares
**Archivo:** `p339-suma-posiciones-pares.php`
**Alumno:** SANCHEZ

Leer N números y guardarlos en un arreglo. Sumar y mostrar solo los elementos que están en índices pares (0, 2, 4…).

---

## Práctica 340 — Encima y debajo del promedio
**Archivo:** `p340-encima-debajo-promedio.php`
**Alumno:** VELASCO

Leer N calificaciones y guardarlas en un arreglo. Calcular el promedio. Mostrar cuántos están por encima y cuántos por debajo.

---

## Práctica 341 — Mayores y menores de edad
**Archivo:** `p341-mayores-menores-edad.php`
**Alumno:** VELZASCO

Leer N edades y guardarlas en un arreglo. Mostrar cuántos son mayores de 18 y cuántos son menores.

---

## Práctica 342 — ¿Aprobó el grupo?
**Archivo:** `p342-aprobo-el-grupo.php`
**Alumno:** VILLANUEVA

Leer N calificaciones y guardarlas en un arreglo. Calcular el promedio y mostrar si el grupo "Aprobó" (promedio ≥ 6) o "Reprobó".

---

# 🗄️ Bloque C — Prácticas de base de datos (INSERT + SELECT)

## Práctica 343 — Insertar 5 registros propios

Usando la tabla creada en la práctica 295, insertar al menos **5 registros** con datos inventados.

1. Conectarse a MySQL y seleccionar tu base de datos:

```sql
mysql -h localhost -u root
USE nombre_alumno;
```

2. Insertar los 5 registros (adaptar los campos al tema de tu tabla):

```sql
INSERT INTO mi_tabla (campo1, campo2, campo3)
VALUES ('valor1a', 'valor2a', 'valor3a');

INSERT INTO mi_tabla (campo1, campo2, campo3)
VALUES ('valor1b', 'valor2b', 'valor3b');

INSERT INTO mi_tabla (campo1, campo2, campo3)
VALUES ('valor1c', 'valor2c', 'valor3c');

INSERT INTO mi_tabla (campo1, campo2, campo3)
VALUES ('valor1d', 'valor2d', 'valor3d');

INSERT INTO mi_tabla (campo1, campo2, campo3)
VALUES ('valor1e', 'valor2e', 'valor3e');
```

3. Verificar con `SELECT *`:

```sql
SELECT * FROM mi_tabla;
```

Evidencia esperada: la tabla muestra los 5 registros con sus `id` asignados automáticamente.

---

## Práctica 344 — SELECT completo y SELECT específico

Usando la tabla con los registros de la práctica anterior:

1. Consultar **todos los campos**:

```sql
SELECT * FROM mi_tabla;
```

2. Consultar **solo dos campos de tu elección** (por ejemplo nombre y precio):

```sql
SELECT campo1, campo2 FROM mi_tabla;
```

3. Anotar la diferencia en la salida: el primer `SELECT` muestra todas las columnas; el segundo solo las indicadas.

Evidencia esperada: captura o salida de ambas consultas mostrando la diferencia.

---

🏠 [← README](../../../README.md) · ⬅️ [← Clase 14](../clase%2014/ejercicios.md) · 📘 [Resumen](resumen.md)
