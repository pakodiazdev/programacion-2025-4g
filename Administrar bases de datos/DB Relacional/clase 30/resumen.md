🏠 [← README](../../../README.md) · ⬅️ [← Clase 29](../clase%2029/resumen.md) · Clase 30 · [Clase 31 →](../clase%2031/resumen.md) ➡️ · 🧪 [Ejercicios](ejercicios.md)

---

# Clase 30 — Menú completo `index.php` (CRUD)

**Fecha:** 28 de mayo de 2026  
**Materia:** Bases de datos relacionales  
**Tipo:** 🧪 Laboratorio

---

# 🎯 Objetivo de la sesión

Integrar todas las funciones de CRUD (**Create, Read, Update, Delete**) en un **menú interactivo** que permite al usuario gestionar datos desde la consola.

Al terminar, tendrás:
- Una aplicación funcional de gestión de datos
- Menú con 5 opciones (Listar, Agregar, Editar, Eliminar, Salir)
- Entrada de datos desde consola con `readline()`
- Ciclo completo de operaciones CRUD

---

# 📚 Conceptos clave

## `readline()` — Leer entrada del usuario

En PHP CLI (consola), usamos `readline()` para pedir datos al usuario:

```php
$nombre = readline("¿Cuál es tu nombre? ");
echo "Hola, " . $nombre . "\n";
```

**Entrada:**
```
¿Cuál es tu nombre? Juan
```

**Salida:**
```
Hola, Juan
```

---

# 🎮 Estructura del menú

El menú se organiza así:

```
┌──────────────────────────────┐
│  SISTEMA DE GESTIÓN          │
├──────────────────────────────┤
│ 1. Listar productos          │
│ 2. Agregar producto          │
│ 3. Editar producto           │
│ 4. Eliminar producto         │
│ 5. Salir                     │
└──────────────────────────────┘

Selecciona una opción: _
```

## Uso de `switch` para manejar opciones

```php
$opcion = readline("Selecciona una opción: ");

switch ($opcion) {
    case '1':
        // Listar
        break;
    case '2':
        // Agregar
        break;
    case '3':
        // Editar
        break;
    case '4':
        // Eliminar
        break;
    case '5':
        echo "Hasta luego\n";
        break;
    default:
        echo "❌ Opción inválida\n";
}
```

---

# 🖥️ Código completo: `index.php`

```php
<?php
require_once 'conexion.php';
require_once 'funciones.php';

// Variable para controlar el flujo del menú
$salir = false;

while (!$salir) {
    // Mostrar menú
    echo "\n";
    echo "╔════════════════════════════════════════╗\n";
    echo "║   SISTEMA DE GESTIÓN DE PRODUCTOS    ║\n";
    echo "╠════════════════════════════════════════╣\n";
    echo "║ 1. Listar todos los productos        ║\n";
    echo "║ 2. Agregar nuevo producto           ║\n";
    echo "║ 3. Editar un producto               ║\n";
    echo "║ 4. Eliminar un producto             ║\n";
    echo "║ 5. Salir                            ║\n";
    echo "╚════════════════════════════════════════╝\n";

    // Pedir opción
    $opcion = readline("\n✓ Selecciona una opción [1-5]: ");

    // Procesar opción
    switch ($opcion) {
        // =============== OPCIÓN 1: LISTAR ===============
        case '1':
            echo "\n--- LISTADO DE PRODUCTOS ---\n";
            listar($conn, 'productos');
            break;

        // =============== OPCIÓN 2: AGREGAR ===============
        case '2':
            echo "\n--- AGREGAR NUEVO PRODUCTO ---\n";
            $nombre = readline("Nombre del producto: ");
            $precio = readline("Precio: ");
            $stock = readline("Stock: ");

            // Validar que no esté vacío
            if (empty($nombre) || empty($precio) || empty($stock)) {
                echo "❌ Error: Todos los campos son obligatorios\n";
                break;
            }

            // Validar que precio y stock sean números
            if (!is_numeric($precio) || !is_numeric($stock)) {
                echo "❌ Error: Precio y stock deben ser números\n";
                break;
            }

            // Preparar datos y agregar
            $datos = [
                'nombre' => $nombre,
                'precio' => $precio,
                'stock' => $stock
            ];

            if (agregar($conn, $datos, 'productos')) {
                echo "✓ Producto agregado exitosamente\n";
            }
            break;

        // =============== OPCIÓN 3: EDITAR ===============
        case '3':
            echo "\n--- EDITAR PRODUCTO ---\n";
            $id = readline("ID del producto a editar: ");

            // Validar ID
            if (!is_numeric($id) || $id <= 0) {
                echo "❌ Error: ID inválido\n";
                break;
            }

            // Mostrar el producto actual
            $producto = obtener_por_id($conn, $id, 'productos');
            if (!$producto) {
                echo "❌ Producto no encontrado\n";
                break;
            }

            echo "\nProducto actual:\n";
            echo "- Nombre: " . $producto['nombre'] . "\n";
            echo "- Precio: $" . $producto['precio'] . "\n";
            echo "- Stock: " . $producto['stock'] . "\n";

            // Pedir nuevos valores (vacío = no cambiar)
            $nuevo_nombre = readline("\nNuevo nombre (Enter para no cambiar): ");
            $nuevo_precio = readline("Nuevo precio (Enter para no cambiar): ");
            $nuevo_stock = readline("Nuevo stock (Enter para no cambiar): ");

            // Construir array de cambios
            $cambios = [];
            if (!empty($nuevo_nombre)) $cambios['nombre'] = $nuevo_nombre;
            if (!empty($nuevo_precio)) {
                if (!is_numeric($nuevo_precio)) {
                    echo "❌ Error: Precio debe ser un número\n";
                    break;
                }
                $cambios['precio'] = $nuevo_precio;
            }
            if (!empty($nuevo_stock)) {
                if (!is_numeric($nuevo_stock)) {
                    echo "❌ Error: Stock debe ser un número\n";
                    break;
                }
                $cambios['stock'] = $nuevo_stock;
            }

            // Si no hay cambios
            if (empty($cambios)) {
                echo "⚠️  No se realizaron cambios\n";
                break;
            }

            // Editar
            if (editar($conn, $id, $cambios, 'productos')) {
                echo "✓ Producto actualizado\n";
            }
            break;

        // =============== OPCIÓN 4: ELIMINAR ===============
        case '4':
            echo "\n--- ELIMINAR PRODUCTO ---\n";
            $id = readline("ID del producto a eliminar: ");

            // Validar ID
            if (!is_numeric($id) || $id <= 0) {
                echo "❌ Error: ID inválido\n";
                break;
            }

            // Mostrar el producto
            $producto = obtener_por_id($conn, $id, 'productos');
            if (!$producto) {
                echo "❌ Producto no encontrado\n";
                break;
            }

            echo "\nProducto a eliminar:\n";
            echo "- Nombre: " . $producto['nombre'] . "\n";
            echo "- Precio: $" . $producto['precio'] . "\n";

            // Pedir confirmación
            $confirmar = readline("\n¿Estás seguro de que deseas eliminar este producto? (s/n): ");
            if (strtolower($confirmar) !== 's') {
                echo "Operación cancelada\n";
                break;
            }

            // Eliminar
            if (eliminar($conn, $id, 'productos')) {
                echo "✓ Producto eliminado\n";
            }
            break;

        // =============== OPCIÓN 5: SALIR ===============
        case '5':
            echo "\n✓ Hasta luego!\n\n";
            $salir = true;
            break;

        // =============== OPCIÓN INVÁLIDA ===============
        default:
            echo "❌ Opción inválida. Por favor, selecciona entre 1 y 5\n";
    }
}

// Cerrar conexión
$conn->close();
?>
```

---

# 🔄 Flujo completo del programa

```
┌─────────────────────┐
│   Iniciar programa  │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  Mostrar menú       │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  Pedir opción [1-5] │
└──────────┬──────────┘
           │
      ┌────┴────┬────────┬────────┬────────┐
      │          │        │        │        │
      ▼1         ▼2       ▼3       ▼4       ▼5
   LISTAR     AGREGAR  EDITAR  ELIMINAR  SALIR
      │          │        │        │        │
      └──────────┴────────┴────────┴────────┘
           │
           ▼
    ¿Salir = true?
      │      │
      NO    SÍ
      │      │
      └──────┘ ──→ Cerrar conexión y terminar
      │
      └──→ Volver a mostrar menú
```

---

# 🧪 Pasos para usar el programa

### 1. Asegúrate de tener todos los archivos:
- `config.php` — constantes de conexión
- `conexion.php` — establece la conexión
- `funciones.php` — funciones listar(), agregar(), editar(), eliminar(), obtener_por_id()
- `index.php` — menú principal

### 2. Ejecuta el programa:
```bash
php index.php
```

### 3. Prueba cada opción:
```
Selecciona una opción [1-5]: 1
(mostrará los productos)

Selecciona una opción [1-5]: 2
(pedirá datos para un nuevo producto)

Selecciona una opción [1-5]: 3
(pedirá ID y nuevos datos)

Selecciona una opción [1-5]: 4
(pedirá ID y confirmación para eliminar)

Selecciona una opción [1-5]: 5
(saldrá del programa)
```

---

# 🎨 Mejoras opcionales

### Mensaje de bienvenida
```php
echo "╔══════════════════════════════════╗\n";
echo "║  Bienvenido al Sistema de Gestión║\n";
echo "║  Base de Datos: " . DB_NAME . "           ║\n";
echo "╚══════════════════════════════════╝\n";
```

### Pausa entre operaciones
```php
echo "\nPresiona Enter para continuar...";
readline();
```

### Mostrar cantidad total de registros
```php
$result = $conn->query("SELECT COUNT(*) AS total FROM productos");
$row = $result->fetch_assoc();
echo "Total de productos: " . $row['total'] . "\n";
```

---

# 📌 Resumen

Hoy completaste el **ciclo CRUD** (Create, Read, Update, Delete):

- **CREATE** — Agregar nuevos registros con `agregar()`
- **READ** — Listar registros con `listar()` y obtener por ID
- **UPDATE** — Modificar registros con `editar()`
- **DELETE** — Eliminar registros con `eliminar()`

El menú integrado en `index.php` permite al usuario hacer todas estas operaciones de forma interactiva desde la consola.

## Próximos pasos

En la siguiente fase, este CRUD será la **base de tu proyecto final de equipo**, donde:
- Integrarás más tablas y relaciones
- Agregarás validaciones más complejas
- Posiblemente migarás a una interfaz web

---

🏠 [← README](../../../README.md) · ⬅️ [← Clase 29](../clase%2029/resumen.md) · Clase 30 · [Clase 31 →](../clase%2031/resumen.md) ➡️ · 🧪 [Ejercicios](ejercicios.md)
