🏠 [← README](../../../README.md) · ⬅️ [← Clase 26](../clase%2026/resumen.md) · Clase 27 · [Clase 28 →](../clase%2028/resumen.md) ➡️ · 🧪 [Ejercicios](ejercicios.md)

---

# Clase 27 — PHP + MySQL: Conectar con `conexion.php`

**Fecha:** 19 de mayo de 2026  
**Materia:** Bases de datos relacionales  
**Tipo:** 📚 Teoría + 🧪 Laboratorio

---

# 🎯 Objetivo de la sesión

Aprender a **conectar PHP a una base de datos MySQL** usando la clase `mysqli`.

Al terminar, tendrás:
- Un archivo `conexion.php` que establece la conexión a la BD
- Manejo de errores de conexión
- Un archivo separado y reutilizable para todas tus funciones

---

# 📚 Conceptos clave

## ¿Qué es `mysqli`?

`mysqli` es una **clase de PHP** que permite interactuar con bases de datos MySQL. Es como un "puente" entre tu código PHP y la BD.

Cuando escribes `new mysqli(...)`, estás **instanciando** (creando una instancia de) la clase `mysqli`. Ya vimos el concepto de clases e instancias en la clase 26 con `DateTime`.

```php
// Crear una instancia de DateTime
$fecha = new DateTime('2026-05-19');

// Crear una instancia de mysqli
$conn = new mysqli('localhost', 'root', '', 'mi_base_datos');
```

## Sintaxis básica

```php
$conn = new mysqli(HOST, USER, PASSWORD, DATABASE);
```

### Parámetros:
- **HOST**: nombre del servidor (casi siempre `'localhost'`)
- **USER**: usuario de MySQL (por defecto `'root'`)
- **PASSWORD**: contraseña (vacío `''` si no hay contraseña)
- **DATABASE**: nombre de la base de datos a usar

### Verificar si la conexión fue exitosa:

```php
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}
```

---

# 🛠️ Archivo: `conexion.php`

Este archivo se crea **una sola vez** y se reutiliza en todos los scripts que necesiten conectar a la BD.

### Paso 1 — Usar las constantes de `config.php`

Primero, necesitas tener un `config.php` con tus datos de conexión:

**archivo: `config.php`**
```php
<?php
// Constantes de conexión a BD
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASSWORD', '');
define('DB_NAME', 'mi_tienda');
?>
```

### Paso 2 — Crear `conexion.php`

**archivo: `conexion.php`**
```php
<?php
// Incluir las constantes de configuración
require_once 'config.php';

// Crear la conexión a la BD
$conn = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

// Verificar si hubo error
if ($conn->connect_error) {
    die("❌ Error de conexión a la BD: " . $conn->connect_error);
}

// Establecer el charset a UTF-8 (para caracteres especiales)
$conn->set_charset('utf8');

// Si llegamos aquí, la conexión fue exitosa
// echo "✓ Conectado a la BD correctamente";
?>
```

---

# 🔌 ¿Por qué un archivo separado?

Imagina que tienes 10 archivos PHP que necesitan conectar a la BD. Si pones el código de conexión en cada uno:

- **Problema:** Si cambias la contraseña o el nombre de la BD, tienes que editar 10 archivos.
- **Solución:** Un archivo `conexion.php` que incluyes con `require_once` en todos los demás.

```php
// En cualquier script que necesite la BD:
require_once 'conexion.php';

// Ahora tienes la variable $conn disponible
$result = $conn->query("SELECT * FROM productos");
```

---

# 📋 Repaso: ¿Qué es instanciar?

En la clase 26 vimos que `new` crea una **instancia** de una clase:

```php
// Clase: DateTime
// Instancia: un objeto DateTime específico
$fecha_hoy = new DateTime('2026-05-19');
$fecha_mañana = new DateTime('2026-05-20');

// Cada instancia es un objeto diferente con sus propios datos
```

Lo mismo ocurre con `mysqli`:

```php
// Clase: mysqli
// Instancia: una conexión específica a tu BD
$conn = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

// Este objeto tiene métodos y propiedades:
// - $conn->query()  → ejecutar una consulta
// - $conn->close()  → cerrar la conexión
// - $conn->connect_error → ver si hubo error
```

---

# ✋ Manejo de errores

## Error típico 1: Base de datos no existe

```
❌ Error de conexión a la BD: Unknown database 'mi_tienda'
```

**Solución:** Verifica que creaste la BD en MySQL:
```sql
CREATE DATABASE mi_tienda;
```

## Error típico 2: Contraseña incorrecta

```
❌ Error de conexión a la BD: Access denied for user 'root'@'localhost'
```

**Solución:** Verifica tu contraseña en `config.php`.

## Error típico 3: MySQL no está corriendo

```
❌ Error de conexión a la BD: php_network_getaddresses: getaddrinfo failed
```

**Solución:** Inicia el servicio de MySQL:
- **Windows (XAMPP):** Abre XAMPP y hace clic en "Start" al lado de MySQL
- **Mac (Homebrew):** `brew services start mysql`
- **Linux:** `sudo systemctl start mysql`

---

# 🔐 Cerrar la conexión

Al final de tu programa (o cuando ya no la necesites), cierra la conexión:

```php
$conn->close();
```

En muchos casos, PHP cierra automáticamente las conexiones al final del script, pero es buena práctica cerrarla explícitamente.

---

# 🧪 Práctica en parejas

## Actividad 1 — Crear `config.php`

1. Crea un archivo llamado `config.php` en tu carpeta del proyecto
2. Define las 4 constantes con tus datos (DB_HOST, DB_USER, DB_PASSWORD, DB_NAME)
3. Usa la BD que creaste en clases anteriores

## Actividad 2 — Crear `conexion.php`

1. Crea un archivo llamado `conexion.php`
2. Copia el código completo de arriba
3. Adapta los nombres según tu proyecto

## Actividad 3 — Probar la conexión

Crea un archivo `prueba.php`:

```php
<?php
require_once 'conexion.php';

if ($conn->connect_error) {
    echo "❌ No se pudo conectar";
} else {
    echo "✓ Conexión exitosa a la BD: " . DB_NAME;
}

$conn->close();
?>
```

Luego ejecuta:
```bash
php prueba.php
```

Deberías ver: `✓ Conexión exitosa a la BD: mi_tienda`

## Actividad 4 — Subir a repositorio

Sube ambos archivos a tu carpeta `dbr/clase-27/` del repositorio.

---

# 📌 Resumen

- **mysqli** es una clase que conecta PHP a MySQL
- **`new mysqli(...)`** crea una instancia de conexión
- **`$conn->connect_error`** verifica si hubo errores
- **`conexion.php`** es un archivo reutilizable que incluyes en otros scripts
- **`config.php`** guarda las constantes de conexión

En la siguiente clase, usarás esta conexión para hacer **SELECT** desde PHP.

---

🏠 [← README](../../../README.md) · ⬅️ [← Clase 26](../clase%2026/resumen.md) · Clase 27 · [Clase 28 →](../clase%2028/resumen.md) ➡️ · 🧪 [Ejercicios](ejercicios.md)
