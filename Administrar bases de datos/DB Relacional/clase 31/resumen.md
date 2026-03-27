🏠 [← README](../../../README.md) · ⬅️ [← Clase 30](../clase%2030/resumen.md) · Clase 31 · [Clase 32 →](../clase%2032/resumen.md) ➡️

---

# Clase 31 — Kick-off del proyecto integrador

**Fecha:** 1 de junio de 2026  
**Materia:** Bases de datos relacionales  
**Tipo:** 🚀 Kick-off de proyecto en equipo

---

# 🎯 Objetivo de la sesión

Arrancar oficialmente el proyecto integrador de equipo. Al terminar esta sesión, cada integrante debe tener su archivo asignado con las funciones vacías (stubs) y el repositorio compartido configurado.

---

# 🧭 El proyecto en contexto

Durante el semestre construiste todas las piezas por separado:

| Clase | Lo que aprendiste |
|-------|-------------------|
| 16–18 | `switch`, funciones, arrays asociativos |
| 19 | Mini-app sin BD (lógica del menú) |
| 20–23 | Modelo E-R, DDL, DML, normalización |
| 24–25 | JOINs, BD completa del proyecto |
| 26 | Estructura modular: `config`, `conexion`, `funciones`, `index` |
| 27–30 | CRUD completo desde PHP conectado a MySQL |

Hoy juntas todas esas piezas en **una sola aplicación de equipo**.

---

# 👥 Formación de equipos y asignación de proyectos

Los equipos son de **3 a 4 personas** asignados por el maestro. Cada equipo recibe uno de los cinco dominios:

| Proyecto | Dominio |
|----------|---------|
| 1 | Biblioteca (préstamo de libros) |
| 2 | Tienda de ropa (inventario y ventas) |
| 3 | Clínica veterinaria (mascotas y consultas) |
| 4 | Videoteca (catálogo y préstamos) |
| 5 | Cafetería (menú y pedidos) |

---

# 🗂️ Reparto de responsabilidades

Cada integrante del equipo se hace responsable de uno o dos archivos:

| Integrante | Archivo(s) | Responsabilidad |
|------------|-----------|-----------------|
| A | `config.php` + `conexion.php` | Constantes de conexión + función `conectar()` |
| B | `funciones.php` (CREATE + READ) | `agregar()` + `listar()` |
| C | `funciones.php` (UPDATE + DELETE) | `editar()` + `eliminar()` |
| D (si aplica) | `index.php` | Menú `switch` completo |

> En equipos de 3: el integrante A también toma `index.php`, y B y C se reparten todas las funciones entre sí.

---

# 🏗️ Actividad: crear los stubs del proyecto

Cada integrante crea **su archivo** con las funciones vacías pero correctamente declaradas. Esto permite que el equipo pueda unir los archivos sin conflictos desde el primer día.

## Estructura del repositorio del proyecto

```
proyecto-[nombre-equipo]/
  README.md          ← Nombre del equipo, integrantes, dominio
  config.php
  conexion.php
  funciones.php
  index.php
```

---

## `config.php` — Integrante A

```php
<?php
// config.php
// Equipo: [nombre del equipo]
// Proyecto: [dominio]

define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_NAME', 'proyecto_[nombre]');   // ← Nombre real de la BD
```

---

## `conexion.php` — Integrante A

```php
<?php
// conexion.php
require_once 'config.php';

function conectar() {
    $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
    if ($conn->connect_error) {
        die("❌ Error de conexión: " . $conn->connect_error);
    }
    return $conn;
}
```

---

## `funciones.php` — Integrantes B y C

```php
<?php
// funciones.php
// Proyecto: [dominio]

// --- READ ---
function listar($conn) {
    // TODO: SELECT * FROM tabla_principal ORDER BY nombre
    echo "[ listar() pendiente ]\n";
}

// --- CREATE ---
function agregar($conn, /* parámetros según tu tabla */) {
    // TODO: INSERT INTO tabla_principal (campos) VALUES (valores)
    echo "[ agregar() pendiente ]\n";
}

// --- UPDATE ---
function editar($conn, $id, /* parámetros a editar */) {
    // TODO: UPDATE tabla_principal SET campo = valor WHERE id = ?
    echo "[ editar() pendiente ]\n";
}

// --- DELETE ---
function eliminar($conn, $id) {
    // TODO: DELETE FROM tabla_principal WHERE id = ?
    echo "[ eliminar() pendiente ]\n";
}
```

---

## `index.php` — Integrante D (o A en equipos de 3)

```php
<?php
// index.php
require_once 'conexion.php';
require_once 'funciones.php';

$conn = conectar();

do {
    echo "\n=== [Nombre del proyecto] ===\n";
    echo "1. Ver registros\n";
    echo "2. Agregar registro\n";
    echo "3. Editar registro\n";
    echo "4. Eliminar registro\n";
    echo "0. Salir\n";
    echo "Opción: ";

    $op = trim(readline());

    switch ($op) {
        case '1': listar($conn); break;
        case '2':
            // TODO: pedir datos y llamar a agregar($conn, ...)
            break;
        case '3':
            // TODO: pedir id y datos, llamar a editar($conn, ...)
            break;
        case '4':
            // TODO: pedir id, llamar a eliminar($conn, $id)
            break;
        case '0':
            echo "¡Hasta luego!\n";
            break;
        default:
            echo "Opción no válida.\n";
    }

} while ($op !== '0');

$conn->close();
```

---

# ✅ Checklist de cierre de esta sesión

Antes de irse, el equipo debe tener:

- [ ] Repositorio del proyecto creado en GitHub bajo la cuenta de un integrante
- [ ] Todos los integrantes con acceso al repositorio (fork o colaborador)
- [ ] Los 4 archivos creados con los stubs correctos
- [ ] `config.php` con el nombre real de la BD del proyecto
- [ ] Primer commit subido: `"kickoff: estructura inicial del proyecto"`
- [ ] Cada integrante sabe exactamente cuál es su archivo y qué funciones debe implementar

---

# 📌 Conclusión

El proyecto integrador es la culminación del semestre. Cada función que implementarás en los próximos días ya la has practicado antes — solo que ahora será parte de una app de equipo sobre un dominio real.

En la siguiente sesión arrancan la construcción: cada integrante implementa sus funciones reales con las consultas SQL de la BD de su proyecto.

---

🏠 [← README](../../../README.md) · ⬅️ [← Clase 30](../clase%2030/resumen.md) · Clase 31 · [Clase 32 →](../clase%2032/resumen.md) ➡️
