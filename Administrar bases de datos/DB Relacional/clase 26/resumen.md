🏠 [← README](../../../README.md) · ⬅️ [← Clase 25](../clase%2025/resumen.md) · Clase 26 · [Clase 27 →](../clase%2027/resumen.md) ➡️ · 🧪 [Ejercicios](ejercicios.md)

---

# Clase 26 — Módulos en PHP: `require_once` y estructura del proyecto

**Fecha:** 25–29 de mayo de 2026 (aprox.)
**Materia:** Bases de datos relacionales
**Tipo:** 📚 Teoría + 🧪 Laboratorio

---

# 🎯 Objetivo de la sesión

Aprender a organizar el código PHP en **múltiples archivos** usando `require_once`. Esta es la base de cómo estará organizado el proyecto final: cada archivo tendrá una responsabilidad clara y todos colaboran entre sí.

---

# 🧠 ¿Por qué dividir el código en archivos?

Hasta ahora todo el código PHP vivía en un solo archivo. Eso funciona para programas pequeños, pero cuando el proyecto crece, se vuelve:

- **Difícil de leer** — todo mezclado en un archivo gigante
- **Difícil de mantener** — cualquier cambio afecta el archivo completo
- **Imposible de trabajar en equipo** — dos personas no pueden editar el mismo archivo al mismo tiempo

La solución es **modularizar**: dividir el código en archivos según su responsabilidad.

---

# 📁 La estructura de archivos del proyecto

El proyecto final tendrá esta organización:

```
mi-proyecto/
├── config.php        ← Constantes: host, usuario, contraseña, nombre de BD
├── conexion.php      ← Función conectar() que devuelve el objeto de conexión
├── funciones.php     ← Todas las funciones CRUD (listar, agregar, editar, eliminar)
└── index.php         ← Menú principal (switch), llama a las funciones
```

Cada archivo tiene **una sola responsabilidad**. Si hay un error de conexión, sabes que está en `conexion.php`. Si una función de búsqueda falla, sabes que está en `funciones.php`.

---

# 🔧 `require_once` — La instrucción que une los archivos

`require_once` le dice a PHP: *"carga este otro archivo como si su código estuviera aquí"*.

**Características:**
- **`require`** — carga el archivo. Si no existe, el programa **se detiene con error fatal**.
- **`require_once`** — igual, pero garantiza que el archivo **se carga solo una vez**, aunque se llame varias veces. Evita errores de "función ya declarada".
- **`include`** — carga el archivo, pero si no existe, solo muestra una advertencia y el programa continúa.
- **`include_once`** — igual que `include` pero solo una vez.

**Regla práctica:** Para el proyecto, usa siempre `require_once`. Los archivos del proyecto son esenciales; si falta uno, el programa no debe continuar.

```php
<?php
require_once 'config.php';     // Carga las constantes
require_once 'conexion.php';   // Carga la función conectar()
require_once 'funciones.php';  // Carga todas las funciones CRUD
```

---

# 📄 Los cuatro archivos del proyecto

## `config.php` — Las constantes de configuración

Este archivo **no hace nada visible**: solo define las constantes que otros archivos usarán.

```php
<?php
// config.php
// Datos de conexión a la base de datos

define('DB_HOST',   'localhost');
define('DB_USER',   'root');
define('DB_PASS',   '');
define('DB_NAME',   'mi_proyecto');
```

**¿Por qué `define()` y no variables?**
Las **constantes** (`define`) son más seguras que las variables: no pueden ser modificadas accidentalmente durante la ejecución. Además, son accesibles desde cualquier función sin necesidad de `global`.

> Si algún día cambias la contraseña de MySQL, solo tienes que editar **este archivo**. El resto del código no cambia.

---

## `conexion.php` — La función que conecta a la BD

```php
<?php
// conexion.php
// Función que crea y devuelve la conexión a MySQL

require_once 'config.php';  // Necesita las constantes

function conectar() {
    $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

    if ($conn->connect_error) {
        die("❌ Error de conexión: " . $conn->connect_error);
    }

    return $conn;
}
```

**¿Qué hace `new mysqli(...)`?**
Crea un objeto de conexión. Por ahora no necesitas saber qué es un objeto en profundidad — solo recuerda que es "la forma de PHP de conectarse a MySQL". La línea `new mysqli(...)` **siempre se escribe así**.

**¿Qué hace `die()`?**
Termina el programa e imprime el mensaje. Si no hay conexión, no tiene sentido continuar ejecutando el programa.

**¿Por qué devolvemos `$conn`?**
Porque cada función CRUD necesita la conexión para hacer sus consultas. La función `conectar()` la crea y la devuelve; las funciones CRUD la reciben como parámetro.

---

## `funciones.php` — Todas las operaciones CRUD

```php
<?php
// funciones.php
// Funciones para operar sobre la base de datos

function listar($conn) {
    $resultado = $conn->query("SELECT * FROM productos ORDER BY nombre");

    if ($resultado->num_rows === 0) {
        echo "No hay productos registrados.\n";
        return;
    }

    echo "\n--- Lista de productos ---\n";
    while ($fila = $resultado->fetch_assoc()) {
        echo "  [{$fila['id']}] {$fila['nombre']} - \${$fila['precio']} (stock: {$fila['stock']})\n";
    }
}

function agregar($conn, $nombre, $precio, $stock) {
    $sql = "INSERT INTO productos (nombre, precio, stock) VALUES ('$nombre', $precio, $stock)";
    $conn->query($sql);
    echo "✅ Producto '$nombre' agregado correctamente.\n";
}

function editar($conn, $id, $nuevoPrecio) {
    $sql = "UPDATE productos SET precio = $nuevoPrecio WHERE id = $id";
    $conn->query($sql);
    echo "✅ Precio actualizado.\n";
}

function eliminar($conn, $id) {
    $sql = "DELETE FROM productos WHERE id = $id";
    $conn->query($sql);
    echo "✅ Producto eliminado.\n";
}
```

> En próximas clases estas funciones se completarán con las consultas reales de tu proyecto. Por ahora el objetivo es entender **cómo se separa el código** y cómo `$conn` pasa de un archivo a otro.

---

## `index.php` — El menú principal

```php
<?php
// index.php
// Punto de entrada del programa: muestra el menú y llama a las funciones

require_once 'conexion.php';
require_once 'funciones.php';

$conn = conectar();   // Obtener la conexión

do {
    echo "\n=== Mi Proyecto ===\n";
    echo "1. Ver productos\n";
    echo "2. Agregar producto\n";
    echo "3. Editar precio\n";
    echo "4. Eliminar producto\n";
    echo "0. Salir\n";
    echo "Elige una opción: ";

    $opcion = trim(readline());

    switch ($opcion) {
        case '1':
            listar($conn);
            break;

        case '2':
            echo "Nombre: ";
            $nombre = trim(readline());
            echo "Precio: ";
            $precio = trim(readline());
            echo "Stock: ";
            $stock = trim(readline());
            agregar($conn, $nombre, $precio, $stock);
            break;

        case '3':
            echo "ID del producto: ";
            $id = trim(readline());
            echo "Nuevo precio: ";
            $precio = trim(readline());
            editar($conn, $id, $precio);
            break;

        case '4':
            echo "ID del producto a eliminar: ";
            $id = trim(readline());
            eliminar($conn, $id);
            break;

        case '0':
            echo "¡Hasta luego!\n";
            break;

        default:
            echo "Opción no válida.\n";
    }

} while ($opcion !== '0');

$conn->close();
```

---

# 🔗 ¿Cómo fluye el programa?

```
php index.php
    │
    ├── require_once 'conexion.php'
    │       └── require_once 'config.php'  (lee DB_HOST, DB_USER, DB_PASS, DB_NAME)
    │
    ├── require_once 'funciones.php'  (carga listar, agregar, editar, eliminar)
    │
    ├── $conn = conectar()            (crea la conexión)
    │
    └── switch ($opcion)
            ├── case '1' → listar($conn)
            ├── case '2' → agregar($conn, ...)
            ├── case '3' → editar($conn, ...)
            └── case '4' → eliminar($conn, ...)
```

El archivo `index.php` es el **director de orquesta**: no hace nada por sí solo, pero coordina todos los demás archivos.

---

# 🧩 Brevísima intro a objetos: `new mysqli()`

Ves esta línea en `conexion.php`:
```php
$conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
```

La palabra `new` **crea un objeto**. Un objeto es una variable especial que tiene tanto datos como funciones internas (llamadas métodos).

En este caso, `$conn` es un objeto de tipo `mysqli` que representa la conexión. Por eso luego puedes escribir:
```php
$conn->query("SELECT ...");   // Llamar al método query del objeto
$conn->close();               // Llamar al método close del objeto
```

El `->` significa "accede al método o propiedad del objeto". Es como llamar una función, pero que "vive dentro" de la variable.

> **Eso es todo lo que necesitas saber sobre objetos en este semestre.** No escribirás tus propias clases ni usarás herencia. Solo usas el objeto `$conn` que `mysqli` ya creó por ti.

---

# 🧪 Práctica en parejas

**Objetivo:** Crear la estructura de archivos del proyecto.

**Instrucciones:**
1. Crea una carpeta `mi-proyecto/` dentro de `dbr/clase-26/` de tu repositorio.
2. Crea los cuatro archivos: `config.php`, `conexion.php`, `funciones.php`, `index.php`.
3. En `config.php` pon los datos reales de tu BD del proyecto (creada en clase 25).
4. En `conexion.php` escribe la función `conectar()` como se mostró.
5. En `funciones.php` escribe al menos la función `listar()` adaptada a la tabla principal de tu proyecto.
6. En `index.php` crea el menú con las 4 opciones (aunque por ahora solo la opción 1 funcione completamente).
7. Ejecuta con `php index.php` y verifica que conecta y muestra el menú.

**Criterio de éxito:** El programa inicia, muestra el menú, la opción 1 lista los registros de la BD y la opción 0 sale limpiamente.

---

# 📌 Conclusión

La estructura modular de cuatro archivos es la arquitectura estándar para proyectos pequeños en PHP:

- **`config.php`** → Constantes de configuración. Se edita solo cuando cambian los datos de la BD.
- **`conexion.php`** → Una sola función que crea y devuelve la conexión. Se llama una vez desde `index.php`.
- **`funciones.php`** → Todo el CRUD. Cada operación es una función independiente y reutilizable.
- **`index.php`** → El menú. No tiene lógica de negocio, solo llama a las funciones correctas.

En las siguientes clases completarás las funciones CRUD con las consultas reales de tu proyecto y conectarás todo para tener la aplicación funcionando.

---

🏠 [← README](../../../README.md) · ⬅️ [← Clase 25](../clase%2025/resumen.md) · Clase 26 · [Clase 27 →](../clase%2027/resumen.md) ➡️ · 🧪 [Ejercicios](ejercicios.md)
