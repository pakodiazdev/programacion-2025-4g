🏠 [← README](../../../README.md) · ⬅️ [← Clase 27](../clase%2027/resumen.md) · Clase 28 · [Clase 29 →](../clase%2029/resumen.md) ➡️ · 🧪 [Ejercicios](ejercicios.md)

---

# Clase 28 — SELECT desde PHP

**Fecha:** 21 de mayo de 2026  
**Materia:** Bases de datos relacionales  
**Tipo:** 🧪 Laboratorio

---

# 🎯 Objetivo de la sesión

Aprender a **leer datos de la BD** desde PHP usando `SELECT`, y mostrarlos en la consola o en la pantalla.

Al terminar, tendrás:
- Consultas `SELECT` ejecutadas desde PHP
- Funciones para listar registros
- Entendimiento de cómo recorrer resultados con `while`

---

# 📚 Conceptos clave

## Pasos para hacer un SELECT desde PHP

### Paso 1 — Escribir la consulta SQL como string

```php
$sql = "SELECT * FROM productos";
```

### Paso 2 — Ejecutar la consulta con `$conn->query()`

```php
$result = $conn->query($sql);
```

Este método devuelve un **objeto de resultado** que contiene todas las filas que devolvió la consulta.

### Paso 3 — Recorrer los resultados con un loop

```php
while ($row = $result->fetch_assoc()) {
    // $row es un array asociativo con una fila de datos
    echo $row['id'] . " - " . $row['nombre'] . "\n";
}
```

**`fetch_assoc()`** trae una fila a la vez como un array asociativo:
```php
// Fila 1: ['id' => 1, 'nombre' => 'Audífonos', 'precio' => 350]
// Fila 2: ['id' => 2, 'nombre' => 'Mouse', 'precio' => 150]
// ...
// Cuando no hay más filas: null
```

---

# 💾 Ejemplo completo: Listar todos los productos

```php
<?php
require_once 'conexion.php';

// 1. Escribir la consulta
$sql = "SELECT id, nombre, precio, stock FROM productos ORDER BY nombre";

// 2. Ejecutar la consulta
$result = $conn->query($sql);

// 3. Verificar si la consulta tuvo éxito
if (!$result) {
    die("❌ Error en la consulta: " . $conn->error);
}

// 4. Recorrer cada fila del resultado
while ($row = $result->fetch_assoc()) {
    echo "ID: " . $row['id'] . "\n";
    echo "Nombre: " . $row['nombre'] . "\n";
    echo "Precio: $" . $row['precio'] . "\n";
    echo "Stock: " . $row['stock'] . " unidades\n";
    echo "---\n";
}

// 5. Cerrar la conexión
$conn->close();
?>
```

**Salida esperada:**
```
ID: 3
Nombre: Audífonos
Precio: $350
Stock: 20 unidades
---
ID: 1
Nombre: Computadora
Precio: $1200
Stock: 5 unidades
---
```

---

# 🔢 Propiedades útiles del resultado

## `$result->num_rows`

Devuelve la **cantidad de filas** que devolvió la consulta.

```php
$result = $conn->query("SELECT * FROM productos");
echo "Total de productos: " . $result->num_rows;  // 15
```

## `$result->field_count`

Devuelve la **cantidad de columnas** en el resultado.

```php
echo "Columnas: " . $result->field_count;  // 4 (id, nombre, precio, stock)
```

---

# 🏗️ Función `listar()` en `funciones.php`

Es buena práctica crear una función que centralice la lógica de lectura. Así reutilizas el código en diferentes scripts.

**archivo: `funciones.php`**
```php
<?php
/**
 * Listar todos los registros de una tabla
 *
 * @param mysqli $conn      La conexión a la BD
 * @param string $tabla     Nombre de la tabla a listar
 * @return void
 */
function listar($conn, $tabla) {
    $sql = "SELECT * FROM " . $tabla . " ORDER BY id";
    $result = $conn->query($sql);

    if (!$result) {
        echo "❌ Error al listar: " . $conn->error . "\n";
        return;
    }

    if ($result->num_rows == 0) {
        echo "⚠️  La tabla " . $tabla . " está vacía.\n";
        return;
    }

    // Mostrar encabezado
    echo "\n═══════════════════════════════════════\n";
    echo "📋 Listado de " . $tabla . " (" . $result->num_rows . " registros)\n";
    echo "═══════════════════════════════════════\n\n";

    // Recorrer y mostrar cada fila
    while ($row = $result->fetch_assoc()) {
        $columnas = array_keys($row);
        for ($i = 0; $i < count($columnas); $i++) {
            $columna = $columnas[$i];
            $valor = $row[$columna];
            echo $columna . ": " . $valor . "\n";
        }
        echo "---\n";
    }
}
?>
```

---

# 🖥️ Cómo usar `listar()` desde `index.php`

**archivo: `index.php`**
```php
<?php
require_once 'conexion.php';
require_once 'funciones.php';

// Listar todos los productos
listar($conn, 'productos');

$conn->close();
?>
```

**Ejecución:**
```bash
php index.php
```

**Resultado:**
```
═══════════════════════════════════════
📋 Listado de productos (15 registros)
═══════════════════════════════════════

id: 1
nombre: Audífonos
precio: 350
stock: 20
---
id: 2
nombre: Mouse
precio: 150
stock: 45
---
...
```

---

# 🎨 Mejora: Mostrar los datos de forma más visual

Si quieres hacer las tablas más legibles, puedes formatear la salida:

```php
<?php
require_once 'conexion.php';

$sql = "SELECT id, nombre, precio, stock FROM productos ORDER BY nombre";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "┌─────┬──────────────┬────────┬────────┐\n";
    echo "│ ID  │ Nombre       │ Precio │ Stock  │\n";
    echo "├─────┼──────────────┼────────┼────────┤\n";

    while ($row = $result->fetch_assoc()) {
        printf("│ %-3d │ %-12s │ %6.2f │ %6d │\n",
            $row['id'],
            substr($row['nombre'], 0, 12),
            $row['precio'],
            $row['stock']
        );
    }
    echo "└─────┴──────────────┴────────┴────────┘\n";
}

$conn->close();
?>
```

**Resultado:**
```
┌─────┬──────────────┬────────┬────────┐
│ ID  │ Nombre       │ Precio │ Stock  │
├─────┼──────────────┼────────┼────────┤
│ 1   │ Audífonos    │ 350.00 │     20 │
│ 2   │ Mouse        │ 150.00 │     45 │
│ 3   │ Teclado      │ 280.00 │     12 │
└─────┴──────────────┴────────┴────────┘
```

---

# ⚠️ Manejo de errores

## Si la consulta falla:

```php
$result = $conn->query($sql);

if (!$result) {
    echo "❌ Error en la consulta: " . $conn->error;
    // $conn->error contiene el mensaje de error de MySQL
}
```

## Si no hay resultados:

```php
if ($result->num_rows == 0) {
    echo "⚠️  No hay datos para mostrar";
}
```

---

# 🧪 Práctica en parejas

## Actividad 1 — Crear `funciones.php`

1. Crea un archivo `funciones.php`
2. Copia la función `listar()` del resumen
3. Adapta la función a tu proyecto

## Actividad 2 — Crear `index.php`

1. Crea un archivo `index.php`
2. Incluye `conexion.php` y `funciones.php`
3. Llama a `listar($conn, 'nombre_de_tu_tabla')`

## Actividad 3 — Ejecutar y verificar

```bash
php index.php
```

Deberías ver todos los registros de tu tabla listados en consola.

## Actividad 4 — Agregar encabezados más claros

Mejora la salida visual de `listar()` usando formato de tabla (como en el ejemplo de `printf`).

---

# 📌 Resumen

- **`$conn->query($sql)`** ejecuta una consulta SELECT
- **`$result->fetch_assoc()`** trae una fila como array asociativo
- **`while`** recorre todas las filas del resultado
- **`$result->num_rows`** devuelve la cantidad de filas
- **`listar()`** es una función reutilizable para mostrar datos
- **Siempre verifica errores** con `if ($result)` y `if ($result->num_rows > 0)`

En la siguiente clase, aprenderás a **modificar datos** (INSERT, UPDATE, DELETE).

---

🏠 [← README](../../../README.md) · ⬅️ [← Clase 27](../clase%2027/resumen.md) · Clase 28 · [Clase 29 →](../clase%2029/resumen.md) ➡️ · 🧪 [Ejercicios](ejercicios.md)
