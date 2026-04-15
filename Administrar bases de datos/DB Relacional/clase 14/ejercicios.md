🏠 [← README](../../../README.md) · ⬅️ [← Clase 13](../clase%2013/ejercicios.md) · 📘 [Resumen](resumen.md)

---

# 📘 Prácticas — Clase 14 (Relacional / MySQL)

## 🎯 Objetivo

Reforzar el uso de:

- Conexión remota a MySQL desde consola
- Creación de bases de datos en equipo con `CREATE DATABASE`
- Creación de tablas con `CREATE TABLE`
- Inserción y consulta de registros con `INSERT` y `SELECT`

---

# 🗄️ Bloque C — Práctica colaborativa en servidor remoto

> Práctica en equipo. Cada equipo trabaja directamente en el servidor remoto usando las credenciales proporcionadas.

---

## 🔐 Datos de conexión al servidor remoto

| Campo    | Valor              |
|----------|--------------------|
| Host     | `18.215.180.117`   |
| Puerto   | `3306`             |
| Usuario  | `alumno2`          |
| Password | `Cetis123!`        |

Comando de conexión:

```bash
mysql -h 18.215.180.117 -P 3306 -u alumno2 -p
```

Cuando pida la contraseña, escribir: `Cetis123!`

---

## 👥 Equipos — Ronda 2

> Las parejas de esta ronda no repiten las combinaciones de la Ronda 1 (Clase 13).
> El nombre de la base de datos se forma con los apellidos unidos por `_`.

| Equipo | Integrantes | Nombre de base de datos |
|--------|-------------|-------------------------|
| 1  | ALCANTAR · VELASCO | `alcantar_velasco` |
| 2  | BALANDRAN · VELZASCO | `balandran_velzasco` |
| 3  | BARAJAS · CORRALEJO · VILLANUEVA | `barajas_corralejo_villanueva` |
| 4  | BLANCARTE · DOMINGUEZ | `blancarte_dominguez` |
| 5  | FERNANDEZ · GALINDO | `fernandez_galindo` |
| 6  | GALICIA · HERNANDEZ | `galicia_hernandez` |
| 7  | IBARRA · JUAREZ | `ibarra_juarez` |
| 8  | JASSO · MONTES | `jasso_montes` |
| 9  | MONTIEL · RODRIGUEZ ARRELLANO | `montiel_rodriguez_arrellano` |
| 10 | MORALES · ROMERO | `morales_romero` |
| 11 | RODRIGUEZ DIAZ · SANCHEZ | `rodriguez_diaz_sanchez` |

---

## Práctica 293 — Ingresar datos personales en la base de datos del servidor remoto

> **Primera práctica del día.** Cada integrante del equipo ingresa sus datos reales en la tabla `alumno` de la base de datos compartida `4g`.

1. Conectarse al servidor remoto con las mismas credenciales del equipo:

```bash
mysql -h 18.215.180.117 -P 3306 -u alumno2 -p
```

Ingresar la contraseña cuando la solicite: `Cetis123!`

2. Seleccionar la base de datos `4g`:

```sql
USE 4g;
```

3. Verificar que la tabla `alumno` existe y revisar su estructura:

```sql
SHOW TABLES;
DESCRIBE alumno;
```

4. Cada integrante del equipo inserta su **nombre y correo electrónico reales**:

```sql
INSERT INTO alumno (nombre, correo)
VALUES ('Tu Nombre Completo', 'tu.correo@ejemplo.com');
```

5. Verificar que el registro fue insertado correctamente:

```sql
SELECT * FROM alumno;
```

Criterio de validación: en `SELECT * FROM alumno` deben aparecer los registros de todos los integrantes del equipo con nombre y correo reales.

---

## Práctica 247 — Conexión al servidor remoto y creación de base de datos del equipo

> _(Práctica pendiente de Clase 13 — se realiza en Clase 14)_

1. Conectarse al servidor remoto:

```bash
mysql -h 18.215.180.117 -P 3306 -u alumno2 -p
```

Ingresar la contraseña cuando la solicite: `Cetis123!`

2. Crear la base de datos del equipo con el nombre asignado (ejemplo para equipo 6):

```sql
CREATE DATABASE galicia_hernandez;
```

3. Seleccionar la base creada:

```sql
USE galicia_hernandez;
```

4. Ejecutar los dos comandos de validación:

```sql
SELECT DATABASE();
SHOW DATABASES;
```

Criterio de validación: en `SELECT DATABASE()` debe aparecer el nombre de su base activa y en `SHOW DATABASES` debe verse listada en el servidor remoto.

---

## Práctica 295 — Crear tabla en la base de datos del equipo

Usando la base creada en la práctica anterior:

1. Seleccionar la base del equipo (si ya no está activa):

```sql
USE apellido1_apellido2;
```

2. Crear una tabla de 4 campos (elegir tema libre: productos, alumnos, libros, películas, etc.):

```sql
CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    precio FLOAT,
    existencias INT
);
```

3. Verificar que la tabla fue creada:

```sql
SHOW TABLES;
```

4. Ver la estructura de la tabla:

```sql
DESCRIBE productos;
```

Evidencia esperada: captura o salida mostrando `SHOW TABLES` con la tabla y `DESCRIBE` con los campos.

---

## Práctica 296 — Insertar y consultar registros

Usando la tabla creada en la práctica anterior:

1. Insertar al menos 3 registros:

```sql
INSERT INTO productos (nombre, precio, existencias)
VALUES ('Cuaderno', 25.50, 100);

INSERT INTO productos (nombre, precio, existencias)
VALUES ('Pluma', 8.00, 250);

INSERT INTO productos (nombre, precio, existencias)
VALUES ('Mochila', 180.00, 30);
```

2. Consultar todos los registros:

```sql
SELECT * FROM productos;
```

Criterio de validación: la tabla debe mostrar los 3 registros insertados con su `id` asignado automáticamente por `AUTO_INCREMENT`.

---

# 🧪 Bloque D — Programación (ciclo `for`)

> Práctica individual o en pareja. Solo PHP CLI: `readline`, variables y ciclo `for`. Sin bases de datos, sin arreglos.

### Plantilla base

```php
<?php
echo "Ingresa el dato:\n";
$dato = readline();
$n = (int) $dato;

for ($i = 1; $i <= $n; $i++) {
    // lógica aquí
}
```

---

## Práctica 297 — Números divisibles  
**Archivo:** `p297-numeros-divisibles.php`  
**Equipo:** ALCANTAR · VELASCO

Leer un número `n` y un divisor `d`. Mostrar todos los números del 1 al `n` que sean divisibles entre `d`.

Ejemplo con `n=20` y `d=4`:
```
4, 8, 12, 16, 20
```

---

## Práctica 298 — Suma acumulada  
**Archivo:** `p298-suma-acumulada.php`  
**Equipo:** BALANDRAN · VELZASCO

Leer un número `n`. Sumar todos los números del 1 al `n` y mostrar el resultado al final.

Ejemplo con entrada `5`:
```
Sumando: 1 + 2 + 3 + 4 + 5
Total: 15
```

---

## Práctica 299 — Conteo regresivo con paso  
**Archivo:** `p299-conteo-regresivo-paso.php`  
**Equipo:** BARAJAS · CORRALEJO · VILLANUEVA _(trío)_

Leer un número de inicio y un paso. Contar hacia atrás desde el inicio hasta 0 restando el paso en cada iteración.

Ejemplo con inicio `20` y paso `4`:
```
20, 16, 12, 8, 4, 0
```

---

## Práctica 300 — Números pares en rango  
**Archivo:** `p300-pares-en-rango.php`  
**Equipo:** BLANCARTE · DOMINGUEZ

Leer dos números (inicio y fin). Mostrar solo los números pares dentro del rango.

Ejemplo con `3` y `12`:
```
4, 6, 8, 10, 12
```

---

## Práctica 301 — Serie de potencias  
**Archivo:** `p301-serie-potencias.php`  
**Equipo:** FERNANDEZ · GALINDO

Leer una base y un exponente máximo. Mostrar la base elevada a cada potencia del 1 al exponente máximo.

Ejemplo con base `2` y exponente `5`:
```
2^1 = 2
2^2 = 4
2^3 = 8
2^4 = 16
2^5 = 32
```

---

## Práctica 302 — Factorial  
**Archivo:** `p302-factorial.php`  
**Equipo:** GALICIA · HERNANDEZ

Leer un número `n`. Calcular y mostrar su factorial usando un ciclo `for`.

Ejemplo con entrada `5`:
```
5! = 120
```

---

## Práctica 303 — Números impares  
**Archivo:** `p303-numeros-impares.php`  
**Equipo:** IBARRA · JUAREZ

Leer un número `n`. Mostrar todos los números impares del 1 hasta `n`.

Ejemplo con entrada `10`:
```
1, 3, 5, 7, 9
```

---

## Práctica 304 — Promedio de calificaciones  
**Archivo:** `p304-promedio-calificaciones.php`  
**Equipo:** JASSO · MONTES

Leer cuántas calificaciones se van a capturar. Luego leer cada calificación una por una con `readline` dentro del `for`. Al final mostrar el promedio.

Ejemplo con `3` calificaciones (8, 9, 7):
```
Calificación 1: 8
Calificación 2: 9
Calificación 3: 7
Promedio: 8.0
```

---

## Práctica 305 — Contador de dígitos  
**Archivo:** `p305-contador-digitos.php`  
**Equipo:** MONTIEL · RODRIGUEZ ARRELLANO

Leer un número `n`. Mostrar en pantalla los números del 1 al `n` junto con cuántos dígitos tiene cada uno.

Ejemplo con entrada `15`:
```
1 tiene 1 dígito(s)
...
10 tiene 2 dígito(s)
...
15 tiene 2 dígito(s)
```

_(Sugerencia: usar `strlen((string)$i)`)_

---

## Práctica 306 — Suma de múltiplos  
**Archivo:** `p306-suma-multiplos.php`  
**Equipo:** MORALES · ROMERO

Leer un número `n` y un divisor `d`. Mostrar todos los múltiplos de `d` que sean menores o iguales a `n`, y al final mostrar su suma.

Ejemplo con `n=20` y `d=3`:
```
3, 6, 9, 12, 15, 18
Suma: 63
```

---

## Práctica 307 — Pirámide de números  
**Archivo:** `p307-piramide-numeros.php`  
**Equipo:** RODRIGUEZ DIAZ · SANCHEZ

Leer un número `n`. Imprimir una pirámide de números donde en cada fila `i` se repite el número `i` exactamente `i` veces.

Ejemplo con entrada `4`:
```
1
2 2
3 3 3
4 4 4 4
```

---

🏠 [← README](../../../README.md) · ⬅️ [← Clase 13](../clase%2013/ejercicios.md) · 📘 [Resumen](resumen.md)
