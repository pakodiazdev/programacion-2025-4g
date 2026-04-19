🏠 [← README](../../../README.md) · ⬅️ [← Clase 28](../clase%2028/resumen.md) · Clase 29 · [Clase 30 →](../clase%2030/resumen.md) ➡️ · 🧪 [Ejercicios](ejercicios.md)

---

# Clase 29 — INSERT, UPDATE, DELETE desde PHP

**Fecha:** 26 de mayo de 2026  
**Materia:** Bases de datos relacionales  
**Tipo:** 📚 Teoría + 🧪 Laboratorio

---

# 🎯 Objetivo de la sesión

Aprender a **modificar datos** en la BD desde PHP usando `INSERT`, `UPDATE` y `DELETE`.

Al terminar, tendrás:
- Funciones para agregar, editar y eliminar registros
- Manejo de errores en operaciones de escritura
- Validación básica de datos

---

# 📚 Conceptos clave

## Diferencia entre SELECT y DML (INSERT, UPDATE, DELETE)

- **SELECT** → devuelve un **resultado** con filas (usamos `fetch_assoc()`)
- **INSERT, UPDATE, DELETE** → **no devuelven filas**, solo modifican datos

```php
// SELECT: devuelve un objeto resultado
$result = $conn->query("SELECT * FROM productos");
$row = $result->fetch_assoc();  // ← Accedemos a los datos

// INSERT/UPDATE/DELETE: no necesitan fetch_assoc()
$conn->query("INSERT INTO productos (nombre, precio) VALUES ('Mouse', 150)");
$conn->query("UPDATE productos SET precio = 200 WHERE id = 1");
$conn->query("DELETE FROM productos WHERE id = 5");
```

---

# ➕ INSERT — Agregar registros

## Sintaxis básica

```php
$nombre = "Audífonos Bluetooth";
$precio = 450;
$stock = 15;

$sql = "INSERT INTO productos (nombre, precio, stock) VALUES ('" . $nombre . "', " . $precio . ", " . $stock . ")";

if ($conn->query($sql)) {
    echo "✓ Registro agregado exitosamente";
} else {
    echo "❌ Error al agregar: " . $conn->error;
}
```

## Función `agregar()`

```php
<?php
/**
 * Agregar un nuevo registro a la tabla
 *
 * @param mysqli $conn   La conexión a la BD
 * @param array  $datos  Array con columna => valor
 * @param string $tabla  Nombre de la tabla
 * @return bool          true si tuvo éxito, false si no
 */
function agregar($conn, $datos, $tabla) {
    // Validar que no esté vacío
    if (empty($datos)) {
        echo "❌ Error: No hay datos para insertar\n";
        return false;
    }

    // Construir la consulta
    $columnas = implode(", ", array_keys($datos));
    $valores = implode("', '", array_values($datos));

    $sql = "INSERT INTO " . $tabla . " (" . $columnas . ") VALUES ('" . $valores . "')";

    // Ejecutar
    if ($conn->query($sql)) {
        echo "✓ Registro agregado (ID: " . $conn->insert_id . ")\n";
        return true;
    } else {
        echo "❌ Error: " . $conn->error . "\n";
        return false;
    }
}
?>
```

### Uso:

```php
$datos = [
    'nombre' => 'Mouse Logitech',
    'precio' => 150,
    'stock' => 30
];

agregar($conn, $datos, 'productos');
// Salida: ✓ Registro agregado (ID: 8)
```

---

# ✏️ UPDATE — Editar registros

## Sintaxis básica

```php
$nuevo_precio = 200;
$id = 1;

$sql = "UPDATE productos SET precio = " . $nuevo_precio . " WHERE id = " . $id;

if ($conn->query($sql)) {
    echo "✓ Se actualizaron " . $conn->affected_rows . " registros";
} else {
    echo "❌ Error: " . $conn->error;
}
```

## Función `editar()`

```php
<?php
/**
 * Editar un registro existente
 *
 * @param mysqli $conn   La conexión a la BD
 * @param int    $id     ID del registro a editar
 * @param array  $datos  Array con columna => valor
 * @param string $tabla  Nombre de la tabla
 * @return bool          true si tuvo éxito
 */
function editar($conn, $id, $datos, $tabla) {
    // Validar que id sea un número
    if (!is_numeric($id)) {
        echo "❌ Error: ID inválido\n";
        return false;
    }

    // Construir SET columna = valor, columna = valor
    $sets = [];
    $columnas = array_keys($datos);
    for ($i = 0; $i < count($columnas); $i++) {
        $columna = $columnas[$i];
        $valor = $datos[$columna];
        $sets[] = $columna . " = '" . $valor . "'";
    }
    $set_clause = implode(", ", $sets);

    // Construir la consulta
    $sql = "UPDATE " . $tabla . " SET " . $set_clause . " WHERE id = " . $id;

    // Ejecutar
    if ($conn->query($sql)) {
        echo "✓ Se actualizaron " . $conn->affected_rows . " registros\n";
        return true;
    } else {
        echo "❌ Error: " . $conn->error . "\n";
        return false;
    }
}
?>
```

### Uso:

```php
$datos = [
    'nombre' => 'Mouse Pro',
    'precio' => 200,
    'stock' => 25
];

editar($conn, 1, $datos, 'productos');
// Salida: ✓ Se actualizaron 1 registros
```

---

# ❌ DELETE — Eliminar registros

## Sintaxis básica

```php
$id = 5;

$sql = "DELETE FROM productos WHERE id = " . $id;

if ($conn->query($sql)) {
    echo "✓ Se eliminaron " . $conn->affected_rows . " registros";
} else {
    echo "❌ Error: " . $conn->error;
}
```

## Función `eliminar()`

```php
<?php
/**
 * Eliminar un registro de la tabla
 *
 * @param mysqli $conn   La conexión a la BD
 * @param int    $id     ID del registro a eliminar
 * @param string $tabla  Nombre de la tabla
 * @return bool          true si tuvo éxito
 */
function eliminar($conn, $id, $tabla) {
    // Validar que id sea un número
    if (!is_numeric($id) || $id <= 0) {
        echo "❌ Error: ID inválido\n";
        return false;
    }

    // Pedir confirmación (opcional)
    // echo "¿Está seguro que desea eliminar el registro ID " . $id . "? (s/n): ";
    // $respuesta = trim(fgets(STDIN));
    // if ($respuesta !== 's') {
    //     echo "Operación cancelada\n";
    //     return false;
    // }

    // Construir la consulta
    $sql = "DELETE FROM " . $tabla . " WHERE id = " . $id;

    // Ejecutar
    if ($conn->query($sql)) {
        if ($conn->affected_rows > 0) {
            echo "✓ Se eliminó 1 registro\n";
            return true;
        } else {
            echo "⚠️  No se encontró un registro con ID " . $id . "\n";
            return false;
        }
    } else {
        echo "❌ Error: " . $conn->error . "\n";
        return false;
    }
}
?>
```

### Uso:

```php
eliminar($conn, 5, 'productos');
// Salida: ✓ Se eliminó 1 registro
```

---

# 🔐 ¿Por qué sanitizar inputs?

Las funciones anteriores **concatenan valores directamente en SQL**. Esto es inseguro si los valores vienen de un usuario.

### ❌ Riesgo: SQL Injection

```php
$nombre = "'; DROP TABLE productos; --";
$sql = "INSERT INTO productos (nombre) VALUES ('" . $nombre . "')";
// Se convierte en:
// INSERT INTO productos (nombre) VALUES (''; DROP TABLE productos; --')
// ¡La tabla será eliminada!
```

### ✓ Solución parcial: `mysqli_real_escape_string()`

```php
$nombre = mysqli_real_escape_string($conn, $nombre);
$sql = "INSERT INTO productos (nombre) VALUES ('" . $nombre . "')";
```

Escapa caracteres peligrosos, pero sigue siendo concatenación. Hay una solución mejor.

---

# 🛡️ Prepared Statements con `bind_param`

Los **prepared statements** (consultas preparadas) son la forma correcta de enviar valores a MySQL. En lugar de armar el SQL como un string, se envía la **estructura** separada de los **datos**.

```
Concatenación:   SQL + datos = string completo → riesgo
Prepared stmt:   SQL (estructura)  →  luego datos por separado → seguro
```

## ¿Cómo funciona?

El flujo tiene 4 pasos siempre:

```php
// 1. Preparar — estructura con ? como marcadores
$stmt = $conn->prepare("INSERT INTO productos (nombre, precio) VALUES (?, ?)");

// 2. Vincular — ligar variables a los marcadores
$stmt->bind_param("sd", $nombre, $precio);
//                 ^^
//                 tipos de dato (s = string, d = double)

// 3. Asignar valores y ejecutar
$nombre = "Teclado";
$precio = 350.00;
$stmt->execute();

// 4. Cerrar
$stmt->close();
```

> `?` es un **marcador de posición**. MySQL recibe la estructura y los datos por separado, así nunca puede confundir un valor con código SQL.

## Tipos de `bind_param`

| Letra | Tipo PHP | Ejemplo MySQL |
|-------|----------|---------------|
| `s` | string | `nombre VARCHAR` |
| `i` | integer | `stock INT` |
| `d` | double/float | `precio DECIMAL` |
| `b` | blob | datos binarios |

Para múltiples parámetros se concatenan en orden: `"sid"` = string, integer, double.

---

## INSERT con prepared statement

```php
function agregar($conn, $nombre, $precio, $stock) {
    $stmt = $conn->prepare(
        "INSERT INTO productos (nombre, precio, stock) VALUES (?, ?, ?)"
    );
    $stmt->bind_param("sdi", $nombre, $precio, $stock);
    $stmt->execute();
    $stmt->close();
}
```

## UPDATE con prepared statement

```php
function editar($conn, $id, $nuevo_precio) {
    $stmt = $conn->prepare(
        "UPDATE productos SET precio = ? WHERE id = ?"
    );
    $stmt->bind_param("di", $nuevo_precio, $id);
    $stmt->execute();
    $stmt->close();
}
```

## DELETE con prepared statement

```php
function eliminar($conn, $id) {
    $stmt = $conn->prepare(
        "DELETE FROM productos WHERE id = ?"
    );
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $stmt->close();
}
```

## SELECT con prepared statement

```php
function buscar($conn, $nombre) {
    $stmt = $conn->prepare(
        "SELECT * FROM productos WHERE nombre LIKE ?"
    );
    $busqueda = "%" . $nombre . "%";
    $stmt->bind_param("s", $busqueda);
    $stmt->execute();
    return $stmt->get_result();   // igual que $conn->query()
}
```

> En SELECT se usa `get_result()` al final para obtener el resultado igual que con `query()`.

---

## Concatenación vs. Prepared Statement

```php
// ❌ Concatenación — vulnerable y frágil
$sql = "INSERT INTO productos (nombre, precio) VALUES ('" . $nombre . "', " . $precio . ")";
$conn->query($sql);

// ✅ Prepared statement — seguro y correcto
$stmt = $conn->prepare("INSERT INTO productos (nombre, precio) VALUES (?, ?)");
$stmt->bind_param("sd", $nombre, $precio);
$stmt->execute();
$stmt->close();
```

| | Concatenación | Prepared Statement |
|---|---|---|
| SQL Injection | ❌ Vulnerable | ✅ Imposible |
| Legibilidad | Media | Alta |
| Errores de tipos | Frecuentes | Controlados por `bind_param` |
| Rendimiento (múltiples ejecuciones) | Normal | Más rápido (MySQL compila una sola vez) |

---

# 📊 Propiedades útiles de `$conn`

## `$conn->affected_rows`

Devuelve **cuántas filas** fueron afectadas por INSERT, UPDATE o DELETE.

```php
$conn->query("UPDATE productos SET precio = 500 WHERE stock > 100");
echo "Se actualizaron " . $conn->affected_rows . " productos";  // 3
```

## `$conn->insert_id`

Devuelve el **ID auto-incrementado** del último INSERT.

```php
$conn->query("INSERT INTO productos (nombre) VALUES ('Mouse')");
echo "ID del nuevo producto: " . $conn->insert_id;  // 15
```

## `$conn->error`

Devuelve el **mensaje de error** del último comando.

```php
if (!$conn->query($sql)) {
    echo "Error: " . $conn->error;
}
```

---

# 🧪 Práctica en parejas

## Actividad 1 — Crear `funciones.php` completo

1. Copia las 3 funciones: `agregar()`, `editar()`, `eliminar()`
2. Adapta al nombre real de tu tabla
3. Prueba cada función por separado

## Actividad 2 — Script de prueba `prueba_operaciones.php`

```php
<?php
require_once 'conexion.php';
require_once 'funciones.php';

// Agregar un nuevo producto
echo "=== AGREGAR ===\n";
$nuevos = [
    'nombre' => 'Teclado Mecánico',
    'precio' => 280,
    'stock' => 10
];
agregar($conn, $nuevos, 'productos');

// Editar el producto
echo "\n=== EDITAR ===\n";
$editar_datos = ['precio' => 300];
editar($conn, 1, $editar_datos, 'productos');

// Eliminar un producto
echo "\n=== ELIMINAR ===\n";
eliminar($conn, 5, 'productos');

$conn->close();
?>
```

Ejecuta:
```bash
php prueba_operaciones.php
```

---

# 📌 Resumen

- **INSERT** agrega nuevos registros con `agregar()`
- **UPDATE** modifica registros existentes con `editar()`
- **DELETE** elimina registros con `eliminar()`
- **`$conn->affected_rows`** devuelve cuántos registros fueron modificados
- **`$conn->insert_id`** devuelve el ID del último INSERT
- **Siempre valida inputs** para evitar SQL Injection

En la siguiente clase, integrarás estas funciones en un **menú completo** que permite hacer CRUD (Create, Read, Update, Delete) desde la consola.

---

🏠 [← README](../../../README.md) · ⬅️ [← Clase 28](../clase%2028/resumen.md) · Clase 29 · [Clase 30 →](../clase%2030/resumen.md) ➡️ · 🧪 [Ejercicios](ejercicios.md)
