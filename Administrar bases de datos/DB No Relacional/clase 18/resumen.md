🏠 [← README](../../../README.md) · ⬅️ [← Clase 17](../clase%2017/resumen.md) · Clase 18 · [Clase 19 →](../clase%2019/resumen.md) ➡️ · 🧪 [Ejercicios](ejercicios.md)

---

# Clase 18 — Modelado en MongoDB: documentos embebidos vs referencias

**Fecha:** 12 de mayo de 2026  
**Materia:** Bases de datos no relacionales  
**Tipo:** 📚 Teoría + 🧪 Laboratorio

---

# 🎯 Objetivo de la sesión

Aprender a diseñar documentos en MongoDB: cuándo **embeber** (anidar datos dentro del mismo documento) y cuándo **referenciar** (guardar solo el ID y buscar en otra colección). Esta decisión de diseño afecta directamente el rendimiento y la claridad de tu BD.

---

# 🧠 El dilema de MongoDB: ¿dónde pongo los datos?

En MySQL la respuesta siempre es: "en tablas separadas, conectadas por FK". En MongoDB tienes **dos opciones**:

```
Opción A — Embeber (anidar dentro del documento)
Opción B — Referenciar (guardar el _id de otro documento)
```

No hay una respuesta única: depende de cómo vas a leer los datos.

---

# 📦 Opción A — Documentos embebidos

Los datos relacionados se **guardan dentro del mismo documento**, como un objeto anidado o un array.

**Ejemplo — Pedido de tienda (con productos embebidos):**
```js
{
  _id: ObjectId("..."),
  cliente: "Laura Gil",
  fecha: "2026-05-15",
  items: [
    { producto: "Café americano", precio: 35, cantidad: 2 },
    { producto: "Croissant",      precio: 28, cantidad: 1 }
  ],
  total: 98,
  pagado: false
}
```

Los productos del pedido viven **dentro** del documento del pedido. No hay colección separada de "items".

**Ventajas:**
- **Una sola lectura** devuelve todo el documento completo — no hay JOINs
- Datos que siempre se leen juntos → conviene tenerlos juntos
- Consultas más simples y rápidas

**Desventajas:**
- Si un producto cambia de precio, **no se actualiza** automáticamente en pedidos anteriores (el precio está "congelado" en el momento del pedido)
- Si el array de items crece mucho, el documento se hace muy grande
- No puedes buscar eficientemente "todos los pedidos que tienen el producto X"

---

# 🔗 Opción B — Referencias

Los datos relacionados se guardan en **colecciones separadas**. En lugar de anidar el objeto completo, se guarda el `_id` del documento relacionado.

**Ejemplo — Mascota con referencia al dueño:**
```js
// Colección: dueños
{
  _id: ObjectId("abc123"),
  nombre: "Carlos Vega",
  telefono: "472-555-1234",
  email: "carlos@email.com"
}

// Colección: mascotas
{
  _id: ObjectId("def456"),
  nombre: "Luna",
  especie: "Perro",
  edad: 3,
  dueño_id: ObjectId("abc123")   // ← Referencia al documento del dueño
}
```

Para obtener la mascota con los datos del dueño, necesitas hacer **dos consultas**:
```js
const mascota = await db.collection('mascotas').findOne({ nombre: 'Luna' });
const dueño = await db.collection('dueños').findOne({ _id: mascota.dueño_id });
```

**Ventajas:**
- Si actualizas los datos del dueño, **todos sus registros se actualizan** de inmediato
- Los documentos son más compactos
- Puedes buscar dueños independientemente de sus mascotas

**Desventajas:**
- Necesitas dos consultas para obtener los datos completos (equivalente a un JOIN)
- Más complejo de programar

---

# ⚖️ ¿Cuándo embeber y cuándo referenciar?

| Situación | Decisión | Razón |
|-----------|----------|-------|
| Los datos se leen **siempre juntos** | ✅ Embeber | Una sola consulta devuelve todo |
| La relación es 1:pocas cosas | ✅ Embeber | El array no va a crecer demasiado |
| Los datos embebidos **no cambian** (ej: precio histórico de un pedido) | ✅ Embeber | El snapshot congelado es el comportamiento correcto |
| Los datos relacionados se acceden **independientemente** | 🔗 Referenciar | Necesitas consultar dueños sin pasar por mascotas |
| La relación es 1:N con N muy grande | 🔗 Referenciar | Un documento con array enorme es ineficiente |
| Los datos relacionados **cambian frecuentemente** | 🔗 Referenciar | Una sola actualización afecta a todos |

---

# 🏗️ Patrones de diseño comunes en MongoDB

## Patrón 1 — Datos del dueño embebidos como subdocumento

Útil cuando el dueño raramente cambia y siempre necesitas sus datos junto con la mascota.

```js
// mascotas — dueño embebido
{
  nombre: "Fido",
  especie: "Perro",
  dueño: {
    nombre: "María Torres",
    telefono: "472-100-2000"
  },
  consultas: [
    { fecha: "2026-04-15", diagnostico: "Vacuna rabia", costo: 200 }
  ]
}
```

## Patrón 2 — Array de subdocumentos

Útil para historiales, listas de items, tags.

```js
// peliculas — géneros como array simple, préstamos como array de objetos
{
  titulo: "El Laberinto del Fauno",
  año: 2006,
  generos: ["Fantasía", "Drama", "Terror"],
  prestamos: [
    { cliente: "Ana López", fecha: "2026-05-10" },
    { cliente: "Pedro Ruiz", fecha: "2026-04-02" }
  ]
}
```

## Patrón 3 — Referencia con _id

Útil cuando los datos del lado "muchos" son independientes.

```js
// alumnos referenciando a materias
{
  nombre: "Luis García",
  materias_ids: [
    ObjectId("mat001"),
    ObjectId("mat002")
  ]
}
```

---

# 🔧 Operadores avanzados con documentos embebidos

Cuando trabajas con arrays de subdocumentos, necesitas operadores especiales para buscar, actualizar o eliminar elementos dentro del array.

## Buscar dentro de un array — punto (`.`)

```js
// Buscar mascotas que tengan una consulta con costo mayor a 300
db.mascotas.find({ "consultas.costo": { $gt: 300 } })

// Buscar películas del género "Drama"
db.peliculas.find({ generos: "Drama" })
```

## Actualizar un subdocumento — `$set` con posición `$`

```js
// Marcar la primera consulta de Luna como pagada
db.mascotas.updateOne(
    { nombre: "Luna", "consultas.fecha": "2026-04-15" },
    { $set: { "consultas.$.pagado": true } }
)
```

## Agregar al array — `$push`

```js
// Agregar una nueva consulta a Luna
db.mascotas.updateOne(
    { nombre: "Luna" },
    { $push: {
        consultas: { fecha: "2026-05-20", diagnostico: "Revisión anual", costo: 250 }
    }}
)
```

## Eliminar un elemento del array — `$pull`

```js
// Eliminar la consulta del 15 de abril de Luna
db.mascotas.updateOne(
    { nombre: "Luna" },
    { $pull: { consultas: { fecha: "2026-04-15" } } }
)
```

---

# 💻 Práctica en clase

Crea la colección `mascotas` con el patrón embebido:

```js
// En mongosh:
use veterinaria

db.mascotas.insertMany([
    {
        nombre: "Luna",
        especie: "Perro",
        edad: 3,
        dueño: { nombre: "Carlos Vega", telefono: "472-555-1234" },
        consultas: [
            { fecha: "2026-04-20", diagnostico: "Vacuna anual", costo: 250 }
        ]
    },
    {
        nombre: "Michi",
        especie: "Gato",
        edad: 5,
        dueño: { nombre: "María Torres", telefono: "472-100-2000" },
        consultas: [
            { fecha: "2026-03-10", diagnostico: "Limpieza dental", costo: 400 },
            { fecha: "2026-05-05", diagnostico: "Revisión general", costo: 180 }
        ]
    },
    {
        nombre: "Rocky",
        especie: "Perro",
        edad: 2,
        dueño: { nombre: "Pedro Ruiz", telefono: "472-200-3000" },
        consultas: []
    }
])
```

Luego ejecuta:
```js
// 1. Ver todas las mascotas con sus consultas
db.mascotas.find()

// 2. Ver solo los perros
db.mascotas.find({ especie: "Perro" })

// 3. Ver mascotas con consultas que costaron más de 200
db.mascotas.find({ "consultas.costo": { $gt: 200 } })

// 4. Agregar una consulta nueva a Rocky
db.mascotas.updateOne(
    { nombre: "Rocky" },
    { $push: { consultas: { fecha: "2026-05-18", diagnostico: "Primera vacuna", costo: 300 } } }
)

// 5. Verificar que Rocky ya tiene la consulta
db.mascotas.findOne({ nombre: "Rocky" })
```

---

# 🧪 Práctica en parejas

**Objetivo:** Diseñar y crear la colección del proyecto con el patrón correcto de documentos embebidos.

**Instrucciones:**
1. Decide cuál será el documento principal de tu proyecto.
2. Identifica qué datos van embebidos y cuáles (si hay) necesitarían ser referenciados.
3. Crea la colección en mongosh con al menos 5 documentos con datos reales.
4. Ejecuta las 3 consultas que consideres más útiles para tu proyecto.
5. Agrega un subdocumento a uno de los registros existentes usando `$push`.

**Ejemplo para Proyecto 4 — Videoteca:**
```js
// El director está embebido en la película (siempre se muestra junto)
// Los géneros son un array simple
// Los préstamos son un array de subdocumentos
{
    titulo: "El Laberinto del Fauno",
    año: 2006,
    disponible: false,
    director: { nombre: "Guillermo del Toro", pais: "México" },
    generos: ["Fantasía", "Drama"],
    prestamos: [
        { cliente: "Ana López", fecha: "2026-05-10" }
    ]
}
```

---

# 📌 Conclusión

El modelado es la decisión más importante en MongoDB:

- **Embeber** cuando los datos siempre se leen juntos y el array no crece sin control.
- **Referenciar** cuando los datos se acceden independientemente o se actualizan frecuentemente.
- Los operadores `$push`, `$pull`, `$set` con el operador posicional `$` permiten modificar arrays dentro de los documentos.

Una buena decisión de modelado hace que las consultas sean simples y rápidas. Una mala decisión obliga a hacer múltiples consultas para obtener datos que deberían estar juntos.

---

🏠 [← README](../../../README.md) · ⬅️ [← Clase 17](../clase%2017/resumen.md) · Clase 18 · [Clase 19 →](../clase%2019/resumen.md) ➡️ · 🧪 [Ejercicios](ejercicios.md)
