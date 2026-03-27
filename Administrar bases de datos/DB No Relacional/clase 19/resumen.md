🏠 [← README](../../../README.md) · ⬅️ [← Clase 18](../clase%2018/resumen.md) · Clase 19 · [Clase 20 →](../clase%2020/resumen.md) ➡️ · 🧪 [Ejercicios](ejercicios.md)

---

# Clase 19 — Práctica integradora MongoDB: colecciones completas del proyecto

**Fecha:** 13 de mayo de 2026  
**Materia:** Bases de datos no relacionales  
**Tipo:** 🧪 Laboratorio

---

# 🎯 Objetivo de la sesión

Aplicar **todo lo aprendido de MongoDB** en una sola sesión de laboratorio: diseño de documentos, inserción, consultas con filtros, actualizaciones y operadores de array. Usando las colecciones reales del proyecto de tu equipo.

Al terminar, tu equipo debe tener:
- Las colecciones del proyecto creadas y pobladas
- Al menos 15 documentos en total
- 5 consultas distintas con filtros combinados

---

# 🗺️ Mapa de lo que ya sabes

| Operación | Comando en mongosh |
|-----------|-------------------|
| Crear/seleccionar BD | `use nombre_bd` |
| Insertar uno | `db.col.insertOne({...})` |
| Insertar varios | `db.col.insertMany([...])` |
| Ver todos | `db.col.find()` |
| Ver uno | `db.col.findOne({filtro})` |
| Filtrar exacto | `db.col.find({ campo: valor })` |
| Filtro mayor/menor | `{ campo: { $gt, $lt, $gte, $lte } }` |
| Filtro en lista | `{ campo: { $in: [v1, v2] } }` |
| Actualizar campo | `updateOne({filtro}, { $set: {campo: nuevoValor} })` |
| Incrementar número | `updateOne({filtro}, { $inc: {campo: cantidad} })` |
| Agregar al array | `updateOne({filtro}, { $push: {array: {objeto}} })` |
| Eliminar del array | `updateOne({filtro}, { $pull: {array: {campo: val}} })` |
| Eliminar un documento | `deleteOne({filtro})` |
| Buscar en array de obj. | `{ "array.campo": valor }` |

---

# 🏗️ Estructura de la sesión

## Parte 1 — Diseñar y crear las colecciones (20 min)

Decide la estructura final de tu documento principal y créala en mongosh.

**Preguntas clave antes de escribir código:**
1. ¿Cuál es la colección principal de tu proyecto?
2. ¿Qué campos siempre se leen junto con el documento? → Embeberlos
3. ¿Qué datos van en un array de subdocumentos? (historial, items, etc.)
4. ¿Necesitas referencias (`_id` de otro documento)?

**Comando para empezar:**
```js
use nombre_mi_proyecto
```

---

## Parte 2 — Poblar las colecciones (20 min)

Inserta datos coherentes y reales. Mínimo **15 documentos** en total.

```js
// Usa insertMany para insertar varios a la vez
db.miColeccion.insertMany([
    { /* documento 1 */ },
    { /* documento 2 */ },
    // ...
])
```

**Consejos:**
- Usa nombres reales (no "test1", "aaa")
- Incluye variedad en los datos para que los filtros funcionen
- Si tienes arrays de subdocumentos, algunos documentos deben tener 0 items, otros 1, otros 3+ para probar casos distintos

---

## Parte 3 — 5 consultas con filtros combinados (20 min)

Escribe y ejecuta las 5 consultas requeridas.

### Consultas obligatorias para todos los proyectos:

**Consulta A — Todos los documentos de la colección principal**
```js
db.miColeccion.find()
```

**Consulta B — Filtro por campo específico**
Una consulta que filtre por un campo clave (estado, tipo, disponibilidad, etc.)

**Consulta C — Filtro numérico con operadores de comparación**
Usa `$gt`, `$lt`, `$gte` o `$lte` en un campo numérico.

**Consulta D — Buscar dentro de un array de subdocumentos**
Usa la notación de punto (`"array.campo": valor`)

**Consulta E — Actualización real del sistema**
Una operación `updateOne` o `updateMany` que tenga sentido en tu proyecto (marcar como disponible/no disponible, actualizar precio, agregar un nuevo item al historial, etc.)

---

# 📋 Consultas por proyecto

---

## Proyecto 1 — Biblioteca

```js
use biblioteca

// Estructura del documento
db.libros.insertOne({
    titulo: "Cien años de soledad",
    autor: { nombre: "Gabriel", apellido: "García Márquez" },
    isbn: "978-84-270-0608-6",
    año: 1967,
    disponible: true,
    prestamos: []
})

// Consulta A: Ver todos los libros disponibles
db.libros.find({ disponible: true })

// Consulta B: Buscar por autor
db.libros.find({ "autor.apellido": "García Márquez" })

// Consulta C: Libros publicados después de 2000
db.libros.find({ año: { $gt: 2000 } })

// Consulta D: Ver libros que tienen préstamos activos (sin fecha de devolución)
db.libros.find({ "prestamos.fecha_devolucion": null })

// Consulta E: Registrar un préstamo (agregar al historial)
db.libros.updateOne(
    { titulo: "Cien años de soledad" },
    {
        $set: { disponible: false },
        $push: { prestamos: { socio: "Ana López", fecha_prestamo: "2026-05-20", fecha_devolucion: null } }
    }
)
```

---

## Proyecto 2 — Tienda de ropa

```js
use tienda

// Consulta A: Listar todos los productos
db.productos.find()

// Consulta B: Productos de una categoría específica
db.productos.find({ categoria: "Casual" })

// Consulta C: Productos con precio menor a 200
db.productos.find({ precio: { $lt: 200 } })

// Consulta D: Productos con talla M disponible (stock > 0)
db.productos.find({ "tallas.talla": "M", "tallas.stock": { $gt: 0 } })

// Consulta E: Registrar una venta (push + decrementar stock)
db.productos.updateOne(
    { nombre: "Playera básica", "tallas.talla": "M" },
    {
        $inc: { "tallas.$.stock": -2 },
        $push: { ventas: { fecha: "2026-05-20", cantidad: 2, talla: "M" } }
    }
)
```

---

## Proyecto 3 — Clínica veterinaria

```js
use veterinaria

// Consulta A: Ver todas las mascotas
db.mascotas.find()

// Consulta B: Ver solo perros
db.mascotas.find({ especie: "Perro" })

// Consulta C: Mascotas con más de 3 años de edad
db.mascotas.find({ edad: { $gt: 3 } })

// Consulta D: Ver mascotas con consultas de costo mayor a 300
db.mascotas.find({ "consultas.costo": { $gt: 300 } })

// Consulta E: Agregar una nueva consulta a una mascota
db.mascotas.updateOne(
    { nombre: "Luna" },
    { $push: { consultas: { fecha: "2026-05-20", diagnostico: "Revisión anual", costo: 200 } } }
)
```

---

## Proyecto 4 — Videoteca

```js
use videoteca

// Consulta A: Ver todo el catálogo
db.peliculas.find()

// Consulta B: Ver solo las películas disponibles
db.peliculas.find({ disponible: true })

// Consulta C: Películas de más de 2 horas (> 120 min)
db.peliculas.find({ duracion: { $gt: 120 } })

// Consulta D: Buscar películas de un género específico
db.peliculas.find({ generos: { $in: ["Drama"] } })

// Consulta E: Registrar un préstamo
db.peliculas.updateOne(
    { titulo: "El Laberinto del Fauno" },
    {
        $set: { disponible: false },
        $push: { prestamos: { cliente: "María Ruiz", fecha: "2026-05-20" } }
    }
)
```

---

## Proyecto 5 — Cafetería

```js
use cafeteria

// Consulta A: Ver todos los pedidos
db.pedidos.find()

// Consulta B: Pedidos del día de hoy
db.pedidos.find({ fecha: "2026-05-20" })

// Consulta C: Pedidos con total mayor a 100
db.pedidos.find({ total: { $gt: 100 } })

// Consulta D: Ver pedidos que incluyen "Café"
db.pedidos.find({ "items.producto": { $regex: /Café/i } })

// Consulta E: Marcar pedido como pagado
db.pedidos.updateOne(
    { _id: ObjectId("...") },
    { $set: { pagado: true } }
)
```

---

# 🧪 Checklist de entrega

Antes de terminar la clase, verifica:

- [ ] BD creada con `use nombre_bd`
- [ ] Al menos 15 documentos insertados con datos reales
- [ ] Documentos con arrays de subdocumentos (no todos vacíos)
- [ ] Consulta A: `find()` de toda la colección
- [ ] Consulta B: `find()` con filtro de un campo
- [ ] Consulta C: `find()` con operador numérico (`$gt`, `$lt`, etc.)
- [ ] Consulta D: `find()` buscando dentro de un subdocumento o array (`"array.campo"`)
- [ ] Consulta E: `updateOne` o `updateMany` con `$set`, `$push`, `$inc` o similar
- [ ] Todo guardado en un archivo `bdnr/clase-19/consultas.js` en el repositorio

---

# 📌 Conclusión

Hoy aplicaste el ciclo completo de trabajo con MongoDB:

1. **Modelado** — decidiste qué embeber y qué referenciar
2. **Inserción** — `insertMany` con documentos complejos
3. **Consulta** — `find()` con filtros simples, comparaciones y búsqueda en subdocumentos
4. **Actualización** — `updateOne` con `$set`, `$push`, `$inc`

Esta colección es la base del proyecto final. En las próximas clases, aprenderás a conectarla desde Node.js para que el programa pueda hacer el CRUD completo con código.

---

🏠 [← README](../../../README.md) · ⬅️ [← Clase 18](../clase%2018/resumen.md) · Clase 19 · [Clase 20 →](../clase%2020/resumen.md) ➡️ · 🧪 [Ejercicios](ejercicios.md)
