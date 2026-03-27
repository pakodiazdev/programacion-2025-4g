🏠 [← README](../../../README.md) · ⬅️ [← Clase 23](../clase%2023/resumen.md) · Clase 24 · [Clase 25 →](../clase%2025/resumen.md) ➡️ · 🧪 [Ejercicios](ejercicios.md)

---

# Clase 24 — JOINs: unir tablas en consultas SQL

**Fecha:** 12 de mayo de 2026  
**Materia:** Bases de datos relacionales  
**Tipo:** 📚 Teoría + 🧪 Laboratorio

---

# 🎯 Objetivo de la sesión

Aprender a consultar datos que están **distribuidos en varias tablas** usando `JOIN`. Hasta ahora consultábamos una sola tabla; hoy empezamos a combinar la información de dos o más tablas en una sola consulta.

---

# 🧠 ¿Por qué necesitamos JOINs?

En una BD bien diseñada, los datos están **normalizados**: divididos en tablas separadas para evitar redundancia. Eso significa que la información de un alumno, sus materias y sus calificaciones viven en tablas distintas.

Sin JOIN tendríamos que hacer tres consultas separadas y unir los datos manualmente en el programa.
Con JOIN hacemos **una sola consulta** que ya devuelve todo combinado.

**Ejemplo — sin JOIN (problemático):**
```sql
SELECT * FROM alumnos;
SELECT * FROM materias;
-- Luego en el programa hay que cruzar los datos manualmente...
```

**Con JOIN:**
```sql
SELECT alumnos.nombre, materias.nombre
FROM alumnos
JOIN inscripcion ON alumnos.id = inscripcion.alumno_id
JOIN materias ON inscripcion.materia_id = materias.id;
-- Un solo resultado con todo combinado ✅
```

---

# 🔑 Concepto clave: la llave foránea (FK) es el puente

El JOIN funciona porque existe una **llave foránea** que conecta las tablas. Sin FK no hay forma de saber qué alumno corresponde a qué materia.

```
tabla: alumnos          tabla: inscripcion          tabla: materias
┌────┬────────┐         ┌────┬───────────┬──────────┐  ┌────┬──────────┐
│ id │ nombre │         │ id │ alumno_id │materia_id│  │ id │  nombre  │
├────┼────────┤         ├────┼───────────┼──────────┤  ├────┼──────────┤
│  1 │ Ana    │ ──FK──► │  1 │     1     │    10    │◄─│ 10 │ Matemát. │
│  2 │ Luis   │         │  2 │     1     │    11    │◄─│ 11 │ Historia │
│  3 │ Marta  │         │  3 │     2     │    10    │  └────┴──────────┘
└────┴────────┘         └────┴───────────┴──────────┘
```

La columna `alumno_id` de `inscripcion` apunta a la columna `id` de `alumnos`.
La columna `materia_id` de `inscripcion` apunta a la columna `id` de `materias`.

---

# 📌 Tipos de JOIN

## INNER JOIN — Solo los que coinciden en ambas tablas

Devuelve **únicamente** los registros que tienen un par en ambas tablas.
Si un alumno no está inscrito en ninguna materia, **no aparece** en el resultado.

```
tabla A       tabla B          RESULTADO INNER JOIN
┌───┬─────┐  ┌───┬────────┐   ┌───┬─────┬────────┐
│ 1 │ Ana │  │ 1 │ Mat.   │   │ 1 │ Ana │ Mat.   │
│ 2 │ Leo │  │ 1 │ Hist.  │   │ 1 │ Ana │ Hist.  │
│ 3 │ Kim │  │ 2 │ Física │   │ 2 │ Leo │ Física │
└───┴─────┘  └───┴────────┘   └───┴─────┴────────┘
                               Kim NO aparece (sin inscripción)
```

**Sintaxis:**
```sql
SELECT columnas
FROM tabla_a
INNER JOIN tabla_b ON tabla_a.columna_fk = tabla_b.columna_pk;
```

**Ejemplo concreto:**
```sql
-- Mostrar todos los alumnos con sus materias inscritas
SELECT
    alumnos.nombre AS alumno,
    materias.nombre AS materia
FROM alumnos
INNER JOIN inscripcion ON alumnos.id = inscripcion.alumno_id
INNER JOIN materias ON inscripcion.materia_id = materias.id;
```

Resultado:
```
+--------+--------------+
| alumno | materia      |
+--------+--------------+
| Ana    | Matemáticas  |
| Ana    | Historia     |
| Luis   | Matemáticas  |
+--------+--------------+
```

---

## LEFT JOIN — Todos los de la tabla izquierda, aunque no tengan par

Devuelve **todos** los registros de la tabla izquierda (la que está antes del JOIN), y si no tienen par en la tabla derecha, aparece `NULL`.

```
tabla A       tabla B          RESULTADO LEFT JOIN
┌───┬─────┐  ┌───┬────────┐   ┌───┬─────┬────────┐
│ 1 │ Ana │  │ 1 │ Mat.   │   │ 1 │ Ana │ Mat.   │
│ 2 │ Leo │  │ 1 │ Hist.  │   │ 1 │ Ana │ Hist.  │
│ 3 │ Kim │  │ 2 │ Física │   │ 2 │ Leo │ Física │
└───┴─────┘  └───┴────────┘   │ 3 │ Kim │  NULL  │
                               └───┴─────┴────────┘
                               Kim SÍ aparece con NULL
```

**Sintaxis:**
```sql
SELECT columnas
FROM tabla_a
LEFT JOIN tabla_b ON tabla_a.columna_fk = tabla_b.columna_pk;
```

**Ejemplo concreto:**
```sql
-- Mostrar TODOS los alumnos, incluso los que no están inscritos en ninguna materia
SELECT
    alumnos.nombre AS alumno,
    materias.nombre AS materia
FROM alumnos
LEFT JOIN inscripcion ON alumnos.id = inscripcion.alumno_id
LEFT JOIN materias ON inscripcion.materia_id = materias.id;
```

Resultado:
```
+--------+--------------+
| alumno | materia      |
+--------+--------------+
| Ana    | Matemáticas  |
| Ana    | Historia     |
| Luis   | Matemáticas  |
| Marta  | NULL         |
+--------+--------------+
```

---

## ¿Cuándo usar INNER JOIN vs LEFT JOIN?

| Situación | Usa |
|-----------|-----|
| "Dame todos los pedidos con sus productos" | `INNER JOIN` — solo pedidos que tengan productos |
| "Dame todos los clientes, aunque no hayan comprado" | `LEFT JOIN` — clientes sin compras aparecen con NULL |
| "Dame todos los alumnos, aunque no tengan calificaciones" | `LEFT JOIN` |
| "Dame las ventas de hoy con el nombre del vendedor" | `INNER JOIN` — toda venta debe tener vendedor |

---

# 🔧 Alias: hacer las consultas más legibles

Cuando tienes nombres de tabla largos, los **alias** (`AS`) hacen el código más corto y limpio.

```sql
-- Sin alias (largo)
SELECT alumnos.nombre, materias.nombre, inscripcion.calificacion
FROM alumnos
INNER JOIN inscripcion ON alumnos.id = inscripcion.alumno_id
INNER JOIN materias ON inscripcion.materia_id = materias.id;

-- Con alias (más limpio)
SELECT a.nombre, m.nombre, i.calificacion
FROM alumnos AS a
INNER JOIN inscripcion AS i ON a.id = i.alumno_id
INNER JOIN materias AS m ON i.materia_id = m.id;
```

---

# 🛠️ Setup de la clase: Base de datos `escuela`

Antes de las consultas, crea y pobla la BD de ejemplo:

```sql
CREATE DATABASE IF NOT EXISTS escuela;
USE escuela;

CREATE TABLE IF NOT EXISTS alumnos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS materias (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    creditos INT DEFAULT 3
);

CREATE TABLE IF NOT EXISTS profesores (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS inscripcion (
    id INT PRIMARY KEY AUTO_INCREMENT,
    alumno_id INT NOT NULL,
    materia_id INT NOT NULL,
    calificacion DECIMAL(4,2) DEFAULT NULL,
    FOREIGN KEY (alumno_id) REFERENCES alumnos(id),
    FOREIGN KEY (materia_id) REFERENCES materias(id)
);

-- Datos de prueba
INSERT INTO alumnos (nombre, email) VALUES
    ('Ana García', 'ana@escuela.mx'),
    ('Luis López', 'luis@escuela.mx'),
    ('Marta Ruiz', 'marta@escuela.mx');

INSERT INTO materias (nombre, creditos) VALUES
    ('Matemáticas', 4),
    ('Historia', 3),
    ('Física', 4),
    ('Inglés', 3);

INSERT INTO inscripcion (alumno_id, materia_id, calificacion) VALUES
    (1, 1, 9.5),  -- Ana en Matemáticas
    (1, 2, 8.0),  -- Ana en Historia
    (2, 1, 7.5),  -- Luis en Matemáticas
    (2, 3, 8.8);  -- Luis en Física
    -- Marta no está inscrita (para demostrar LEFT JOIN)
```

---

# 💻 Consultas de práctica en clase

### Consulta 1 — Alumno con su materia y calificación (INNER JOIN)
```sql
SELECT
    a.nombre AS alumno,
    m.nombre AS materia,
    i.calificacion
FROM inscripcion AS i
INNER JOIN alumnos AS a ON i.alumno_id = a.id
INNER JOIN materias AS m ON i.materia_id = m.id
ORDER BY a.nombre, m.nombre;
```

### Consulta 2 — Todos los alumnos, inscritos o no (LEFT JOIN)
```sql
SELECT
    a.nombre AS alumno,
    m.nombre AS materia,
    i.calificacion
FROM alumnos AS a
LEFT JOIN inscripcion AS i ON a.id = i.alumno_id
LEFT JOIN materias AS m ON i.materia_id = m.id
ORDER BY a.nombre;
```

### Consulta 3 — Alumnos sin ninguna materia inscrita
```sql
SELECT a.nombre AS alumno
FROM alumnos AS a
LEFT JOIN inscripcion AS i ON a.id = i.alumno_id
WHERE i.id IS NULL;
```

> **Truco:** Cuando en el LEFT JOIN la columna del lado derecho es `NULL`, significa que no hubo coincidencia: el alumno no tiene inscripciones.

### Consulta 4 — Promedio de calificaciones por alumno
```sql
SELECT
    a.nombre AS alumno,
    ROUND(AVG(i.calificacion), 2) AS promedio
FROM alumnos AS a
INNER JOIN inscripcion AS i ON a.id = i.alumno_id
GROUP BY a.id, a.nombre
ORDER BY promedio DESC;
```

### Consulta 5 — Cuántos alumnos hay en cada materia
```sql
SELECT
    m.nombre AS materia,
    COUNT(i.alumno_id) AS total_alumnos
FROM materias AS m
LEFT JOIN inscripcion AS i ON m.id = i.materia_id
GROUP BY m.id, m.nombre
ORDER BY total_alumnos DESC;
```

---

# 🧪 Práctica en parejas

**Objetivo:** Construir una consulta que una tres tablas y muestre información útil del proyecto de tu equipo.

**Instrucciones:**
1. Usa la BD de tu proyecto (creada en la clase 23).
2. Identifica dos o tres tablas que tengan relación por FK.
3. Escribe una consulta con `INNER JOIN` que muestre datos de las tres tablas.
4. Escribe una segunda consulta con `LEFT JOIN` que muestre también los registros sin par.
5. Agrega al menos un `ORDER BY` y un `GROUP BY` con `COUNT` o `AVG`.

**Ejemplo para el Proyecto 2 — Tienda de ropa:**
```sql
-- ¿Cuáles son los productos de cada categoría con su precio?
SELECT
    c.nombre AS categoria,
    p.nombre AS producto,
    p.precio,
    p.stock
FROM categorias AS c
INNER JOIN productos AS p ON c.id = p.id_categoria
ORDER BY c.nombre, p.precio DESC;
```

---

# 📌 Conclusión

Los JOINs son la operación más importante de SQL en aplicaciones reales:

- **`INNER JOIN`** devuelve solo los registros que tienen correspondencia en ambas tablas. Úsalo cuando sabes que siempre hay relación.
- **`LEFT JOIN`** incluye todos los registros de la tabla izquierda aunque no haya par. Úsalo cuando quieres ver "todos, incluso los sin datos relacionados".
- El JOIN funciona gracias a las **llaves foráneas**: sin ellas, no hay puente entre tablas.
- Los **alias** (`AS`) hacen las consultas más cortas y legibles.

En la próxima clase aplicarás los JOINs en la BD completa de tu proyecto para preparar el código PHP que leerá datos de varias tablas.

---

🏠 [← README](../../../README.md) · ⬅️ [← Clase 23](../clase%2023/resumen.md) · Clase 24 · [Clase 25 →](../clase%2025/resumen.md) ➡️ · 🧪 [Ejercicios](ejercicios.md)
