🏠 [← README](../../../README.md) · ⬅️ [← Clase 16](../clase%2016/resumen.md) · Clase 17 · [Clase 18 →](../clase%2018/resumen.md) ➡️ · 🧪 [Ejercicios](ejercicios.md)

---

# Clase 17 — Update y Delete en MongoDB

**Fecha:** 7-mayo-2026 (aprox.)  
**Materia:** Bases de datos NO relacionales  
**Tipo:** 📚 Teoría + 🧪 LAB

---

# 🎯 Objetivo de la sesión

Aprender a modificar y eliminar documentos en MongoDB usando `updateOne()`, `updateMany()`, `deleteOne()` y `deleteMany()`. También exploraremos operadores de actualización como `$set`, `$inc`, `$push` y `$pull`.

---

# 🧠 Parte 1: updateOne() — Actualizar un documento

## Sintaxis

```js
db.coleccion.updateOne(
    {filtro},
    {$set: {campo: nuevo_valor}}
)
```

## Ejemplos básicos

```js
// Cambiar nombre de una persona específica
db.personas.updateOne(
    {nombre: 'Ana'},
    {$set: {nombre: 'Ana García'}}
)

// Cambiar múltiples campos
db.personas.updateOne(
    {_id: ObjectId("...")},
    {$set: {
        email: 'newemail@mail.com',
        edad: 26
    }}
)

// Cambiar en el primer documento que coincida
db.personas.updateOne(
    {edad: {$gt: 25}},  // Primer documento con edad > 25
    {$set: {activo: true}}
)
```

---

# 🧠 Parte 2: updateMany() — Actualizar múltiples documentos

```js
// Cambiar todos los documentos que coincidan
db.personas.updateMany(
    {ciudad: 'México'},  // Filtro: todos en México
    {$set: {pais: 'México'}}  // Acción: actualizar pais
)

// Cambiar el estado de todos los activos a inactivos
db.empleados.updateMany(
    {activo: true},
    {$set: {activo: false}}
)

// Actualizar muchos campos a la vez
db.productos.updateMany(
    {stock: {$lt: 5}},  // Stock bajo
    {$set: {
        urgente: true,
        notificacion_enviada: new Date()
    }}
)
```

---

# 🧠 Parte 3: Operadores de actualización

### `$set` — Asignar valor

```js
db.personas.updateOne(
    {_id: 1},
    {$set: {email: 'ana@mail.com'}}
)
```

### `$inc` — Incrementar/decrementar

```js
// Sumar 1 al stock
db.productos.updateOne(
    {_id: 1},
    {$inc: {stock: 1}}
)

// Restar 5 del stock
db.productos.updateOne(
    {_id: 1},
    {$inc: {stock: -5}}
)

// Incrementar el contador de visitas
db.articulos.updateMany(
    {},
    {$inc: {visitas: 1}}
)
```

### `$push` — Agregar a un array

```js
// Agregar una etiqueta a un documento
db.usuarios.updateOne(
    {_id: 1},
    {$push: {etiquetas: 'premium'}}
)

// Agregar múltiples elementos (requiere $each)
db.usuarios.updateOne(
    {_id: 1},
    {$push: {
        etiquetas: {$each: ['admin', 'moderador']}
    }}
)

// Agregar un comentario a un artículo
db.articulos.updateOne(
    {_id: 1},
    {$push: {
        comentarios: {
            usuario: 'Ana',
            texto: 'Excelente artículo',
            fecha: new Date()
        }
    }}
)
```

### `$pull` — Remover de un array

```js
// Remover una etiqueta específica
db.usuarios.updateOne(
    {_id: 1},
    {$pull: {etiquetas: 'spam'}}
)

// Remover todos los comentarios de un usuario
db.articulos.updateOne(
    {_id: 1},
    {$pull: {
        comentarios: {usuario: 'Troll'}
    }}
)
```

---

# 🗑️ Parte 4: deleteOne() — Eliminar un documento

## Sintaxis

```js
db.coleccion.deleteOne({filtro})
```

## Ejemplos

```js
// Eliminar una persona específica
db.personas.deleteOne({_id: ObjectId("...")})

// Eliminar el primer documento que coincida
db.personas.deleteOne({nombre: 'Ana'})

// Eliminar el primer empleado inactivo
db.empleados.deleteOne({activo: false})
```

---

# 🗑️ Parte 5: deleteMany() — Eliminar múltiples documentos

```js
// Eliminar todos los documentos de una ciudad
db.personas.deleteMany({ciudad: 'OtrasCiudad'})

// Eliminar todos los productos agotados
db.productos.deleteMany({stock: 0})

// Eliminar todos los comentarios spam
db.articulos.deleteMany({tipo: 'spam'})

// ⚠️ PELIGRO: Eliminar TODOS los documentos
db.personas.deleteMany({})  // Borra la colección entera
```

---

# ⚠️ Advertencia crítica: deleteMany({})

```js
// ❌ PELIGROSO: Elimina TODOS los documentos
db.usuarios.deleteMany({})

// ✅ SEGURO: Elimina solo usuarios inactivos
db.usuarios.deleteMany({activo: false})

// ✅ SEGURO: Primero verifica
db.usuarios.find({activo: false})  // Mira cuántos hay
// Si el resultado es lo que esperas:
db.usuarios.deleteMany({activo: false})
```

---

# 📊 Tabla comparativa: SQL vs MongoDB para UPDATE/DELETE

| Operación | SQL | MongoDB |
|-----------|-----|---------|
| **Actualizar uno** | `UPDATE tabla SET campo=val WHERE id=1` | `updateOne({_id: 1}, {$set: {campo: val}})` |
| **Actualizar muchos** | `UPDATE tabla SET campo=val WHERE edad > 25` | `updateMany({edad: {$gt: 25}}, {$set: {campo: val}})` |
| **Incrementar** | `UPDATE tabla SET contador = contador + 1` | `updateOne({}, {$inc: {contador: 1}})` |
| **Eliminar uno** | `DELETE FROM tabla WHERE id=1` | `deleteOne({_id: 1})` |
| **Eliminar muchos** | `DELETE FROM tabla WHERE edad > 50` | `deleteMany({edad: {$gt: 50}})` |
| **Agregar a array** | No existe | `updateOne({}, {$push: {etiquetas: 'new'}})` |

---

# 💻 Ejemplo completo: Operaciones en una colección

```js
use("tienda")

// 1. Insertar productos
db.productos.insertMany([
    {_id: 1, nombre: 'Laptop', precio: 15000, stock: 5},
    {_id: 2, nombre: 'Mouse', precio: 350, stock: 0},
    {_id: 3, nombre: 'Teclado', precio: 2000, stock: 8}
])

// 2. Actualizar precio de Laptop
db.productos.updateOne(
    {_id: 1},
    {$set: {precio: 14500}}
)

// 3. Incrementar stock de productos con stock bajo
db.productos.updateMany(
    {stock: {$lt: 5}},
    {$inc: {stock: 10}}
)

// 4. Marcar productos agotados
db.productos.updateMany(
    {stock: 0},
    {$set: {disponible: false}}
)

// 5. Eliminar el producto Mouse
db.productos.deleteOne({_id: 2})

// 6. Verificar estado final
db.productos.find()
```

---

# 🎯 Diagrama del riesgo: DELETE sin filtro

```mermaid
graph TD
    A["deleteMany()"] --> B{¿Hay filtro?}
    B -->|{filter: ...}| C["Elimina solo<br/>documentos que coinciden"]
    B -->|{}| D["PELIGRO: Elimina<br/>TODA la colección"]
    C --> E["✅ Seguro"]
    D --> F["❌ Pérdida de datos"]
```

---

# 📌 Conclusión

CRUD completo en MongoDB:

- **CREATE:** `insertOne()`, `insertMany()`
- **READ:** `find()`, `findOne()`
- **UPDATE:** `updateOne()`, `updateMany()`
- **DELETE:** `deleteOne()`, `deleteMany()`

**Operadores útiles:**
- `$set` → reemplazar un campo
- `$inc` → incrementar
- `$push` → agregar a array
- `$pull` → remover de array

En próximas clases escribirás funciones en Node.js que hagan estas operaciones desde tu app, creando APIs RESTful que interactúen con MongoDB.

---

🏠 [← README](../../../README.md) · ⬅️ [← Clase 16](../clase%2016/resumen.md) · Clase 17 · [Clase 18 →](../clase%2018/resumen.md) ➡️ · 🧪 [Ejercicios](ejercicios.md)
