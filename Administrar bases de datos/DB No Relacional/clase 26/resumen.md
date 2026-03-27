🏠 [← README](../../../README.md) · ⬅️ [← Clase 25](../clase%2025/resumen.md) · Clase 26 · [Clase 27 →](../clase%2027/resumen.md) ➡️

---

# Clase 26 — Laboratorio de construcción del proyecto

**Fecha:** 3 de junio de 2026  
**Materia:** Bases de datos no relacionales  
**Tipo:** 🧪 Laboratorio de proyecto en equipo

---

# 🎯 Objetivo de la sesión

Implementar las funciones reales del proyecto. Cada integrante completa sus archivos y el equipo integra y prueba la app completa.

---

# 🔨 Flujo de trabajo de la sesión

```
Inicio
  │
  ├── 1. Pull del repositorio (todos)
  ├── 2. Cada integrante implementa sus funciones (40 min)
  ├── 3. Integración y prueba en una sola máquina (20 min)
  └── 4. Push final + demo rápida al maestro
```

---

# 💻 Implementación por integrante

## Integrante A — `config.js` + `conexion.js`

Ya debería estar listo. Verifica que:

```bash
node -e "const {conectar}=require('./conexion'); conectar().then(({cliente,db})=>{console.log('OK'); cliente.close();})"
```

---

## Integrante B — `listar()` + `agregar()`

### `listar(db)` — find con toArray

```js
async function listar(db) {
    const col = db.collection(COL_NAME);
    const docs = await col.find().toArray();

    if (docs.length === 0) {
        console.log('No hay registros.');
        return;
    }

    console.log('\n--- Registros ---');
    docs.forEach(doc => {
        // Adapta los campos a tu colección
        console.log(`  [${doc._id}] ${doc.nombre} - $${doc.precio}`);
    });
}
```

**Ejemplo para Proyecto 2 — Tienda:**
```js
async function listar(db) {
    const col = db.collection(COL_NAME);
    const docs = await col.find().sort({ categoria: 1, nombre: 1 }).toArray();

    if (docs.length === 0) { console.log('No hay productos.'); return; }

    console.log('\n--- Productos ---');
    docs.forEach(doc => {
        const tallas = doc.tallas ? doc.tallas.map(t => `${t.talla}:${t.stock}`).join(' ') : '-';
        console.log(`  [${doc._id}]\n  ${doc.nombre} | ${doc.categoria} | $${doc.precio}\n  Tallas: ${tallas}`);
    });
}
```

### `agregar(db, datos)`

```js
async function agregar(db, datos) {
    const col = db.collection(COL_NAME);
    const result = await col.insertOne(datos);
    console.log(`✅ Registro agregado (ID: ${result.insertedId})`);
}
```

---

## Integrante C — `editar()` + `eliminar()`

### `editar(db, id, cambios)`

```js
async function editar(db, id, cambios) {
    const { ObjectId } = require('mongodb');
    const col = db.collection(COL_NAME);
    const result = await col.updateOne(
        { _id: new ObjectId(id) },
        { $set: cambios }
    );

    if (result.modifiedCount > 0) {
        console.log('✅ Registro actualizado.');
    } else {
        console.log('⚠️  No se encontró el registro o sin cambios.');
    }
}
```

### `eliminar(db, id)`

```js
async function eliminar(db, id) {
    const { ObjectId } = require('mongodb');
    const col = db.collection(COL_NAME);
    const result = await col.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount > 0) {
        console.log('✅ Registro eliminado.');
    } else {
        console.log('⚠️  No se encontró el registro.');
    }
}
```

---

## Integrante D — `index.js`: reemplazar los `TODO`

```js
case '2':
    // Pedir los campos según tu colección
    const nombre = await preguntar('Nombre: ');
    const precio = parseFloat(await preguntar('Precio: '));
    await agregar(db, { nombre, precio });
    break;

case '3':
    await listar(db);
    const idE = await preguntar('ID a editar: ');
    const nuevoPrecio = parseFloat(await preguntar('Nuevo precio: '));
    await editar(db, idE, { precio: nuevoPrecio });
    break;

case '4':
    await listar(db);
    const idD = await preguntar('ID a eliminar: ');
    await eliminar(db, idD);
    break;
```

---

# 🐛 Errores frecuentes en integración

| Error | Causa | Solución |
|-------|-------|----------|
| `Cannot find module './conexion'` | Archivo en ruta incorrecta | Verificar que estés en la carpeta del proyecto |
| `BSONError: hex string must be 24 characters` | El ID copiado está incompleto | Copiar el ID completo desde `listar()` |
| `MongoServerError: connect ECONNREFUSED` | MongoDB no está corriendo | Iniciar el servicio de MongoDB |
| `TypeError: listar is not a function` | No se exportó en `module.exports` | Agregar la función al objeto exportado |

---

# ✅ Checklist de cierre

- [ ] `listar()` muestra datos reales de MongoDB
- [ ] `agregar()` inserta y confirma con `insertedId`
- [ ] `editar()` actualiza y confirma con `modifiedCount`
- [ ] `eliminar()` borra y confirma con `deletedCount`
- [ ] El menú completo funciona sin errores
- [ ] `node index.js` corre de inicio a fin limpiamente
- [ ] Push final al repositorio

---

# 📌 Conclusión

La aplicación está funcional. En la siguiente sesión demostrarán el CRUD completo en vivo al maestro para la calificación final.

---

🏠 [← README](../../../README.md) · ⬅️ [← Clase 25](../clase%2025/resumen.md) · Clase 26 · [Clase 27 →](../clase%2027/resumen.md) ➡️
