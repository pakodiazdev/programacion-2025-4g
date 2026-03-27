🏠 [← README](../../../README.md) · ⬅️ [← Clase 24](../clase%2024/resumen.md) · Clase 25 · [Clase 26 →](../clase%2026/resumen.md) ➡️ · 🧪 [Ejercicios](ejercicios.md)

---

# Clase 25 — Práctica integradora SQL: BD completa del proyecto

**Fecha:** 19–22 de mayo de 2026 (aprox.)
**Materia:** Bases de datos relacionales
**Tipo:** 🧪 Laboratorio

---

# 🎯 Objetivo de la sesión

Aplicar **todo lo que has aprendido de SQL** en una sola sesión de laboratorio: diseño de tablas, DDL, DML y JOINs, usando la base de datos real de tu proyecto de equipo.

Al terminar, tu equipo debe tener:
- La BD del proyecto creada y con datos reales
- Al menos 15 registros distribuidos en las tablas
- 5 consultas distintas, al menos 2 con JOIN

---

# 🗺️ Mapa de lo que ya sabes

Antes de empezar, repasa mentalmente todo lo que usarás hoy:

| Categoría | Comandos |
|-----------|---------|
| **DDL** | `CREATE DATABASE`, `CREATE TABLE`, `DROP TABLE`, `DESCRIBE` |
| **Constraints** | `PRIMARY KEY`, `AUTO_INCREMENT`, `NOT NULL`, `UNIQUE`, `DEFAULT`, `FOREIGN KEY` |
| **DML** | `INSERT INTO`, `SELECT`, `UPDATE`, `DELETE` |
| **Filtros y orden** | `WHERE`, `ORDER BY`, `LIMIT`, `LIKE` |
| **Agregaciones** | `COUNT()`, `AVG()`, `SUM()`, `MAX()`, `MIN()`, `GROUP BY`, `HAVING` |
| **JOINs** | `INNER JOIN`, `LEFT JOIN` |

---

# 🏗️ Estructura de la sesión

## Parte 1 — Crear la BD del proyecto (20 min)

Si ya tienes las tablas de clases anteriores, revísalas. Si no, créalas ahora.

**Tu BD debe tener:**
- Al menos **3 tablas** relacionadas por FK
- Tipos de datos correctos para cada columna
- Constraints bien definidos (`NOT NULL`, `DEFAULT`, etc.)

**Flujo recomendado:**
```sql
-- 1. Crear la base de datos
CREATE DATABASE IF NOT EXISTS mi_proyecto;
USE mi_proyecto;

-- 2. Crear primero las tablas "padre" (las que no tienen FK)
-- 3. Luego las tablas "hijo" (las que tienen FK apuntando a las anteriores)
-- 4. Verificar con DESCRIBE tabla;
```

---

## Parte 2 — Poblar las tablas (20 min)

Inserta datos reales y coherentes. **No pongas datos sin sentido** (no "aaa", "test123").

**Objetivo mínimo por tabla:**
- Tabla principal: 8–10 registros
- Tablas secundarias: mínimo 5 registros cada una

**Estrategia:**
```sql
-- Primero insertar en tablas padre
INSERT INTO categorias (nombre) VALUES
    ('Electrónica'), ('Ropa'), ('Alimentos'), ('Juguetes'), ('Deportes');

-- Luego en tablas hijo (usando los IDs de las anteriores)
INSERT INTO productos (nombre, id_categoria, precio, stock) VALUES
    ('Audífonos', 1, 350.00, 20),
    ('Playera', 2, 120.00, 50),
    ('Chocolate', 3, 25.00, 100);
```

---

## Parte 3 — Consultas con JOIN (20 min)

Escribe y ejecuta las 5 consultas requeridas. **Al menos 2 deben usar JOIN.**

### Consultas obligatorias para todos los proyectos:

**Consulta A — Listado general con JOIN**
Une las dos tablas más importantes de tu proyecto.

```sql
-- Ejemplo para Proyecto 2 (Tienda):
SELECT
    c.nombre AS categoria,
    p.nombre AS producto,
    p.precio,
    p.stock
FROM productos AS p
INNER JOIN categorias AS c ON p.id_categoria = c.id
ORDER BY c.nombre, p.nombre;
```

**Consulta B — Registros "sin par" con LEFT JOIN**
Muestra registros de la tabla principal aunque no tengan relación con otra.

```sql
-- Ejemplo: categorías sin productos
SELECT c.nombre AS categoria, p.nombre AS producto
FROM categorias AS c
LEFT JOIN productos AS p ON c.id = p.id_categoria
ORDER BY c.nombre;
```

**Consulta C — Filtro con WHERE**
Un filtro útil para el sistema (ej: stock > 0, precio < 200, fecha de hoy).

**Consulta D — Agrupación con COUNT o SUM**
Un resumen estadístico de los datos.

```sql
-- Ejemplo: cuántos productos hay por categoría
SELECT c.nombre, COUNT(p.id) AS total_productos
FROM categorias AS c
LEFT JOIN productos AS p ON c.id = p.id_categoria
GROUP BY c.id, c.nombre
ORDER BY total_productos DESC;
```

**Consulta E — Consulta libre (la más útil para tu proyecto)**
La consulta que más usaría un usuario real de tu sistema.

---

# 📋 Consultas por proyecto

A continuación se muestra una consulta sugerida con JOIN para cada proyecto:

---

## Proyecto 1 — Biblioteca

```sql
-- Préstamos activos: libro + socio
SELECT
    l.titulo AS libro,
    l.isbn,
    s.nombre AS socio,
    p.fecha_prestamo,
    p.fecha_devolucion
FROM prestamos AS p
INNER JOIN libros AS l ON p.id_libro = l.id
INNER JOIN socios AS s ON p.id_socio = s.id
WHERE p.fecha_devolucion IS NULL
ORDER BY p.fecha_prestamo;
```

---

## Proyecto 2 — Tienda de ropa

```sql
-- Historial de ventas con nombre del producto
SELECT
    v.id AS venta,
    p.nombre AS producto,
    c.nombre AS categoria,
    v.cantidad,
    v.total,
    v.fecha
FROM ventas AS v
INNER JOIN productos AS p ON v.id_producto = p.id
INNER JOIN categorias AS c ON p.id_categoria = c.id
ORDER BY v.fecha DESC;
```

---

## Proyecto 3 — Clínica veterinaria

```sql
-- Historial de consultas por mascota con datos del dueño
SELECT
    m.nombre AS mascota,
    m.especie,
    d.nombre AS dueño,
    d.telefono,
    c.fecha,
    c.diagnostico,
    c.costo
FROM consultas AS c
INNER JOIN mascotas AS m ON c.id_mascota = m.id
INNER JOIN dueños AS d ON m.id_dueño = d.id
ORDER BY m.nombre, c.fecha DESC;
```

---

## Proyecto 4 — Videoteca

```sql
-- Catálogo con director y disponibilidad
SELECT
    p.titulo,
    p.año,
    p.duracion,
    d.nombre AS director,
    d.nacionalidad,
    IF(p.disponible, 'Disponible', 'Prestada') AS estado
FROM peliculas AS p
INNER JOIN directores AS d ON p.id_director = d.id
ORDER BY p.titulo;
```

---

## Proyecto 5 — Cafetería

```sql
-- Pedidos del día con sus productos
SELECT
    ped.id AS pedido,
    ped.cliente,
    pm.nombre AS producto,
    dp.cantidad,
    dp.subtotal,
    ped.fecha
FROM pedidos AS ped
INNER JOIN detalle_pedido AS dp ON ped.id = dp.id_pedido
INNER JOIN productos_menu AS pm ON dp.id_producto = pm.id
WHERE ped.fecha = CURDATE()
ORDER BY ped.id, pm.nombre;
```

---

# 🧪 Checklist de entrega

Antes de terminar la clase, verifica que tu equipo completó:

- [ ] BD creada con `CREATE DATABASE` y `USE`
- [ ] Al menos 3 tablas con FK correctamente definidas
- [ ] Al menos 15 registros en total entre todas las tablas
- [ ] Consulta A: INNER JOIN de 2 tablas (mínimo 3 columnas en resultado)
- [ ] Consulta B: LEFT JOIN mostrando registros sin par
- [ ] Consulta C: SELECT con WHERE útil
- [ ] Consulta D: GROUP BY con COUNT o SUM
- [ ] Consulta E: consulta libre relevante al proyecto
- [ ] Todo subido al repositorio en `dbr/clase-25/`

---

# 📌 Conclusión

Hoy aplicaste el ciclo completo de trabajo con SQL:

1. **Diseño** — modelo E-R con entidades y relaciones
2. **Creación** — DDL con tipos de datos y constraints
3. **Población** — DML con INSERT INTO
4. **Consulta** — SELECT con JOIN, filtros y agrupaciones

Esta BD es la base del proyecto final. En las próximas clases, aprenderás a conectarla desde PHP para que el programa pueda leer, insertar, actualizar y eliminar datos con código.

---

🏠 [← README](../../../README.md) · ⬅️ [← Clase 24](../clase%2024/resumen.md) · Clase 25 · [Clase 26 →](../clase%2026/resumen.md) ➡️ · 🧪 [Ejercicios](ejercicios.md)
