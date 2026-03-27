🏠 [← README](../../../README.md) · ⬅️ [← Clase 31](../clase%2031/resumen.md) · Clase 32 · [Clase 33 →](../clase%2033/resumen.md) ➡️

---

# Clase 32 — Laboratorio de construcción del proyecto

**Fecha:** 3 de junio de 2026  
**Materia:** Bases de datos relacionales  
**Tipo:** 🧪 Laboratorio de proyecto en equipo

---

# 🎯 Objetivo de la sesión

Implementar las funciones reales del proyecto. Cada integrante completa sus archivos asignados y el equipo hace la integración final.

---

# 🔨 Flujo de trabajo de la sesión

```
Inicio
  │
  ├── 1. Pull del repositorio (todos)
  ├── 2. Cada integrante implementa sus funciones (40 min)
  ├── 3. Integración y prueba en una sola máquina (20 min)
  └── 4. Push final del equipo + demo rápida al maestro
```

---

# 💻 Implementación por integrante

## Integrante A — `config.php` + `conexion.php`

Ya debería estar listo desde el kick-off. Verifica que:
- Las constantes tienen los valores correctos para tu entorno
- `conectar()` devuelve `$conn` sin errores
- Ejecuta `php conexion.php` y confirma que conecta

```bash
php -r "require_once 'conexion.php'; $c = conectar(); echo 'Conectado OK\n'; $c->close();"
```

---

## Integrante B — `funciones.php`: `listar()` + `agregar()`

### `listar($conn)` — SELECT con JOIN si aplica

Reemplaza el stub con la consulta real de tu proyecto.

**Ejemplo para Proyecto 2 — Tienda:**
```php
function listar($conn) {
    $sql = "SELECT p.id, p.nombre, c.nombre AS categoria, p.precio, p.stock
            FROM productos AS p
            INNER JOIN categorias AS c ON p.id_categoria = c.id
            ORDER BY c.nombre, p.nombre";

    $result = $conn->query($sql);

    if ($result->num_rows === 0) {
        echo "No hay productos registrados.\n";
        return;
    }

    echo "\n--- Productos ---\n";
    printf("%-4s %-25s %-12s %8s %6s\n", "ID", "Nombre", "Categoría", "Precio", "Stock");
    echo str_repeat("-", 60) . "\n";

    while ($row = $result->fetch_assoc()) {
        printf("%-4d %-25s %-12s %8.2f %6d\n",
            $row['id'], $row['nombre'], $row['categoria'],
            $row['precio'], $row['stock']);
    }
}
```

### `agregar($conn, ...)` — INSERT INTO

```php
function agregar($conn, $nombre, $id_categoria, $precio, $stock) {
    $nombre   = $conn->real_escape_string($nombre);
    $sql = "INSERT INTO productos (nombre, id_categoria, precio, stock)
            VALUES ('$nombre', $id_categoria, $precio, $stock)";

    $conn->query($sql);
    echo "✅ Producto '$nombre' agregado (ID: {$conn->insert_id})\n";
}
```

---

## Integrante C — `funciones.php`: `editar()` + `eliminar()`

### `editar($conn, $id, ...)` — UPDATE

```php
function editar($conn, $id, $nuevoPrecio) {
    $sql = "UPDATE productos SET precio = $nuevoPrecio WHERE id = $id";
    $conn->query($sql);

    if ($conn->affected_rows > 0) {
        echo "✅ Precio actualizado.\n";
    } else {
        echo "⚠️  No se encontró el producto con ID $id.\n";
    }
}
```

### `eliminar($conn, $id)` — DELETE

```php
function eliminar($conn, $id) {
    $sql = "DELETE FROM productos WHERE id = $id";
    $conn->query($sql);

    if ($conn->affected_rows > 0) {
        echo "✅ Producto eliminado.\n";
    } else {
        echo "⚠️  No se encontró el producto con ID $id.\n";
    }
}
```

---

## Integrante D — `index.php`: menú completo

Reemplaza los comentarios `// TODO` con el código real:

```php
case '2':
    listar($conn);   // Mostrar categorías primero
    echo "Nombre del producto: ";
    $nombre = trim(readline());
    echo "ID de categoría: ";
    $id_cat = trim(readline());
    echo "Precio: ";
    $precio = trim(readline());
    echo "Stock: ";
    $stock = trim(readline());
    agregar($conn, $nombre, $id_cat, $precio, $stock);
    break;

case '3':
    listar($conn);
    echo "ID del producto a editar: ";
    $id = trim(readline());
    echo "Nuevo precio: ";
    $precio = trim(readline());
    editar($conn, $id, $precio);
    break;

case '4':
    listar($conn);
    echo "ID del producto a eliminar: ";
    $id = trim(readline());
    eliminar($conn, $id);
    break;
```

---

# 🔗 Integración del equipo

Cuando todos terminaron sus archivos:

1. **Hacer push** cada quien: `Sync Changes` en VSCode
2. **Un integrante hace pull** para tener todo junto
3. **Probar ejecutando** `php index.php` en esa máquina
4. **Si hay errores**, el integrante responsable del archivo lo corrige y hace push nuevo
5. **Cuando funcione**, todos hacen pull del estado final

---

# 🐛 Errores frecuentes en integración

| Error | Causa probable | Solución |
|-------|---------------|----------|
| `Call to undefined function listar()` | No se hizo `require_once 'funciones.php'` | Agregar en `index.php` |
| `connect_error: Access denied` | Contraseña incorrecta en `config.php` | Corregir `DB_PASS` |
| `Table doesn't exist` | Nombre de tabla mal escrito | Verificar con `SHOW TABLES` |
| `Affected rows: 0` | El ID no existe en la BD | Usar `listar()` primero para ver los IDs reales |

---

# ✅ Checklist de cierre de esta sesión

- [ ] Cada integrante implementó sus funciones con consultas SQL reales
- [ ] `listar()` muestra datos reales de la BD del proyecto
- [ ] `agregar()` inserta un registro y confirma con `insert_id`
- [ ] `editar()` actualiza y verifica con `affected_rows`
- [ ] `eliminar()` borra y verifica con `affected_rows`
- [ ] `index.php` llama a las 4 funciones desde el menú
- [ ] La app corre completa con `php index.php` sin errores
- [ ] Push final del equipo al repositorio

---

# 📌 Conclusión

En esta sesión la aplicación tomó forma. Cada función está conectada a la base de datos real del proyecto. En la siguiente sesión harán la **demo final** donde el maestro calificará en vivo.

---

🏠 [← README](../../../README.md) · ⬅️ [← Clase 31](../clase%2031/resumen.md) · Clase 32 · [Clase 33 →](../clase%2033/resumen.md) ➡️
