🏠 [← README](../../../README.md) · ⬅️ [← Clase 22](../clase%2022/resumen.md) · Clase 23 · [Clase 24 →](../clase%2024/resumen.md) ➡️ · 🧪 [Ejercicios](ejercicios.md)

---

# Clase 23 — `updateOne` y `deleteOne` desde Node.js

**Fecha:** 26 de mayo de 2026  
**Materia:** Bases de datos NO relacionales  
**Tipo:** 📚 Teoría + 🧪 LAB

---

# 🎯 Objetivo de la sesión

Aprender a modificar y eliminar documentos desde Node.js. Escribirás dos funciones (`editar()` y `eliminar()`) que complementan `listar()` e `insertar()` para tener un CRUD completo.

---

# 📚 Parte 1: Recordatorio — find e insertOne

En Clase 22 aprendiste:

```js
// Listar todos
const docs = await collection.find().toArray();

// Insertar uno
await collection.insertOne({ nombre: 'Ana', especialidad: 'Mate' });
```

Hoy agregaremos **Actualización** y **Eliminación** para completar el CRUD.

---

# ✏️ Parte 2: updateOne() — Modificar un documento

```js
const resultado = await collection.updateOne(
    { filtro },           // Busca el documento que cumple esto
    { $set: { cambios } } // Modifica estos campos
);
```

## Explicación

- **Primer parámetro:** Filtro (qué documento actualizar)
- **Segundo parámetro:** Operador `$set` (qué campos cambiar)
- Retorna: `{ modifiedCount: 1, matchedCount: 1, ... }`

## Ejemplo 1: Modificar por nombre

```js
const resultado = await collection.updateOne(
    { nombre: 'Ana García' },                    // Buscar este profesor
    { $set: { años_experiencia: 10 } }          // Cambiar este campo
);

console.log('Documentos coincidentes:', resultado.matchedCount);
console.log('Documentos modificados:', resultado.modifiedCount);
```

**Output esperado:**
```
Documentos coincidentes: 1
Documentos modificados: 1
```

## Ejemplo 2: Modificar múltiples campos

```js
await collection.updateOne(
    { nombre: 'Ana García' },
    {
        $set: {
            años_experiencia: 10,
            especialidad: 'Física',
            email: 'ana.new@escuela.edu'
        }
    }
);
```

---

# 🔑 Parte 3: Usar ObjectId para buscar por _id

Cada documento tiene un `_id` único de tipo `ObjectId`. Para buscar por `_id`:

```js
const { ObjectId } = require('mongodb');

const idString = '507f1f77bcf86cd799439011';  // String del _id
const objectId = new ObjectId(idString);      // Convertir a ObjectId

await collection.updateOne(
    { _id: objectId },
    { $set: { nombre: 'Nuevo nombre' } }
);
```

## Completo: Función editar()

```js
async function editar(db, nombreColeccion, idString, datosActualizacion) {
    try {
        const { ObjectId } = require('mongodb');

        const collection = db.collection(nombreColeccion);
        const objectId = new ObjectId(idString);

        const resultado = await collection.updateOne(
            { _id: objectId },
            { $set: datosActualizacion }
        );

        if (resultado.matchedCount === 0) {
            console.log('❌ No se encontró el documento');
            return null;
        }

        if (resultado.modifiedCount === 0) {
            console.log('⚠️  No se realizaron cambios');
            return resultado;
        }

        console.log(`✅ Documento actualizado`);
        console.log(`   Documentos encontrados: ${resultado.matchedCount}`);
        console.log(`   Documentos modificados: ${resultado.modifiedCount}`);

        return resultado;
    } catch (error) {
        console.error('❌ Error al actualizar:', error.message);
        return null;
    }
}
```

---

# 🗑️ Parte 4: deleteOne() — Eliminar un documento

```js
const resultado = await collection.deleteOne({ filtro });
```

## Explicación

- Parámetro: Filtro (qué documento eliminar)
- Retorna: `{ deletedCount: 1, ... }`

## Ejemplo 1: Eliminar por nombre

```js
const resultado = await collection.deleteOne({
    nombre: 'Ana García'
});

console.log('Documentos eliminados:', resultado.deletedCount);
```

## Ejemplo 2: Eliminar por ObjectId

```js
const { ObjectId } = require('mongodb');

const resultado = await collection.deleteOne({
    _id: new ObjectId('507f1f77bcf86cd799439011')
});

console.log('Documentos eliminados:', resultado.deletedCount);
```

## Completo: Función eliminar()

```js
async function eliminar(db, nombreColeccion, idString) {
    try {
        const { ObjectId } = require('mongodb');

        const collection = db.collection(nombreColeccion);
        const objectId = new ObjectId(idString);

        const resultado = await collection.deleteOne({
            _id: objectId
        });

        if (resultado.deletedCount === 0) {
            console.log('❌ No se encontró el documento para eliminar');
            return null;
        }

        console.log(`✅ Documento eliminado`);
        console.log(`   Documentos eliminados: ${resultado.deletedCount}`);

        return resultado;
    } catch (error) {
        console.error('❌ Error al eliminar:', error.message);
        return null;
    }
}
```

---

# 📦 Parte 5: Actualizar funciones.js con editar() y eliminar()

Edita el archivo `funciones.js` de Clase 22 e importa `ObjectId`:

```js
// funciones.js (ACTUALIZADO)
const { conectar } = require('./conexion');
const { ObjectId } = require('mongodb');

// ... funciones listar() e insertar() de Clase 22 ...

async function editar(db, nombreColeccion, idString, datosActualizacion) {
    try {
        const collection = db.collection(nombreColeccion);
        const objectId = new ObjectId(idString);

        const resultado = await collection.updateOne(
            { _id: objectId },
            { $set: datosActualizacion }
        );

        if (resultado.matchedCount === 0) {
            console.log('❌ No se encontró el documento');
            return null;
        }

        console.log(`✅ Documento actualizado`);
        console.log(`   Modificados: ${resultado.modifiedCount}`);

        return resultado;
    } catch (error) {
        console.error('❌ Error al actualizar:', error.message);
        return null;
    }
}

async function eliminar(db, nombreColeccion, idString) {
    try {
        const collection = db.collection(nombreColeccion);
        const objectId = new ObjectId(idString);

        const resultado = await collection.deleteOne({
            _id: objectId
        });

        if (resultado.deletedCount === 0) {
            console.log('❌ No se encontró el documento');
            return null;
        }

        console.log(`✅ Documento eliminado`);
        console.log(`   Eliminados: ${resultado.deletedCount}`);

        return resultado;
    } catch (error) {
        console.error('❌ Error al eliminar:', error.message);
        return null;
    }
}

module.exports = { listar, insertar, editar, eliminar };
```

---

# 💬 Parte 6: Actualizar index.js para editar y eliminar

```js
// index.js (ACTUALIZADO CON 5 OPCIONES)
const { conectar } = require('./conexion');
const { listar, insertar, editar, eliminar } = require('./funciones');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function preguntar(texto) {
    return new Promise((resolve) => {
        rl.question(texto, (respuesta) => {
            resolve(respuesta.trim());
        });
    });
}

async function main() {
    const client = await conectar();
    const db = client.db('escuela');  // Cambiar según proyecto

    let continuarMenu = true;

    while (continuarMenu) {
        console.log('\n========== MENÚ CRUD ==========');
        console.log('1. Listar profesores');
        console.log('2. Insertar profesor');
        console.log('3. Editar profesor');
        console.log('4. Eliminar profesor');
        console.log('5. Salir');
        console.log('===============================');

        const opcion = await preguntar('Elige una opción (1-5): ');

        switch (opcion) {
            case '1':
                await listar(db, 'profesores');
                break;

            case '2':
                const nombre = await preguntar('Nombre: ');
                const especialidad = await preguntar('Especialidad: ');
                const experiencia = await preguntar('Años de experiencia: ');

                await insertar(db, 'profesores', {
                    nombre,
                    especialidad,
                    años_experiencia: parseInt(experiencia)
                });
                break;

            case '3':
                const idEditar = await preguntar('ID del documento a editar: ');
                const nuevoNombre = await preguntar('Nuevo nombre (o Enter para omitir): ');
                const nuevaEspecialidad = await preguntar('Nueva especialidad (o Enter para omitir): ');

                const datosActualizacion = {};
                if (nuevoNombre) datosActualizacion.nombre = nuevoNombre;
                if (nuevaEspecialidad) datosActualizacion.especialidad = nuevaEspecialidad;

                if (Object.keys(datosActualizacion).length > 0) {
                    await editar(db, 'profesores', idEditar, datosActualizacion);
                } else {
                    console.log('⚠️  No ingresaste cambios');
                }
                break;

            case '4':
                const idEliminar = await preguntar('ID del documento a eliminar: ');
                const confirmar = await preguntar('¿Estás seguro? (s/n): ');

                if (confirmar.toLowerCase() === 's') {
                    await eliminar(db, 'profesores', idEliminar);
                } else {
                    console.log('❌ Eliminación cancelada');
                }
                break;

            case '5':
                continuarMenu = false;
                break;

            default:
                console.log('❌ Opción no válida. Intenta de nuevo.');
        }
    }

    rl.close();
    await client.close();
    console.log('✅ Programa finalizado');
}

main();
```

---

# 💻 Parte 7: Paso a paso — Ejecutar el ejemplo

### 1. Copiar de Clase 22

```bash
cp -r ../clase22/. .
```

### 2. Actualizar funciones.js

Agregar las funciones `editar()` y `eliminar()`.

### 3. Actualizar index.js

Cambiar el menú a 5 opciones e importar las nuevas funciones.

### 4. Ejecutar

```bash
node index.js
```

### 5. Prueba: Editar

```
========== MENÚ CRUD ==========
1. Listar profesores
2. Insertar profesor
3. Editar profesor
4. Eliminar profesor
5. Salir
===============================
Elige una opción (1-5): 1

📚 1 documentos encontrados:

[1] ID: 507f1f77bcf86cd799439011
    nombre: Ana García
    especialidad: Matemáticas
    años_experiencia: 5

Elige una opción (1-5): 3
ID del documento a editar: 507f1f77bcf86cd799439011
Nuevo nombre (o Enter para omitir): Ana García López
Nueva especialidad (o Enter para omitir):
✅ Documento actualizado
   Modificados: 1
```

### 6. Prueba: Eliminar

```
Elige una opción (1-5): 4
ID del documento a eliminar: 507f1f77bcf86cd799439011
¿Estás seguro? (s/n): s
✅ Documento eliminado
   Eliminados: 1
```

---

# ⚠️ Parte 8: Errores comunes

### Error: "Cast to ObjectId failed"

```
Cast to ObjectId failed for value "abc123" (type string)
```

**Causa:** El ID no es válido.
**Solución:** Verifica que copias el ID correcto de `Listar`.

### Error: "No se encontró el documento"

```
❌ No se encontró el documento
```

**Causa:** El ID no existe o está mal.
**Solución:** Copia el ID exacto de la opción 1 (Listar).

### Error: "ECONNREFUSED"

```
Error: connect ECONNREFUSED 127.0.0.1:27017
```

**Causa:** MongoDB no está corriendo.
**Solución:** Ejecuta `mongod` en otra terminal.

---

# 💪 Práctica en parejas

**Objetivo:** Agregar `editar()` y `eliminar()` al proyecto.

### Pasos

1. **Copiar de Clase 22:**
   ```bash
   cp ../clase22/p901* .
   ```

2. **Actualizar `funciones.js`:**
   - Importar `ObjectId` de `mongodb`
   - Agregar función `editar(db, colección, id, datos)`
   - Agregar función `eliminar(db, colección, id)`
   - Exportar ambas

3. **Actualizar `index.js`:**
   - Cambiar menú a 5 opciones
   - Opción 3: Llamar a `editar()`
   - Opción 4: Llamar a `eliminar()`
   - Solicitar confirmación antes de eliminar

4. **Ejecutar y verificar:**
   ```bash
   node index.js
   ```

   Prueba todas las operaciones CRUD.

5. **Commit a GitHub:**
   ```bash
   git add funciones.js index.js
   git commit -m "clase-23: editar y eliminar, CRUD completo"
   git push
   ```

---

# 📌 Checklist de la clase

- [ ] Entiendo `$set` en `updateOne()`
- [ ] Puedo convertir string a `ObjectId`
- [ ] Entiendo `modifiedCount` y `deletedCount`
- [ ] Escribí `editar()` sin copiar
- [ ] Escribí `eliminar()` sin copiar
- [ ] El menú tiene 5 opciones funcionales
- [ ] Puedo editar documentos sin errores
- [ ] Puedo eliminar documentos (con confirmación)
- [ ] Subí a GitHub con commit descriptivo

---

# 📊 Resumen de CRUD completo

| Operación | Función | Operador |
|-----------|---------|----------|
| **C**reate | `insertOne(doc)` | — |
| **R**ead | `find().toArray()` | — |
| **U**pdate | `updateOne(filtro, {$set: {...}})` | `$set` |
| **D**elete | `deleteOne(filtro)` | — |

---

# ⏭️ Próxima clase

En Clase 24 completarás el menú `index.js` final:
- Menú con 5 opciones (CRUD + Salir)
- Funciones de `funciones.js` completamente integradas
- Cierre correcto de conexiones

---

🏠 [← README](../../../README.md) · ⬅️ [← Clase 22](../clase%2022/resumen.md) · Clase 23 · [Clase 24 →](../clase%2024/resumen.md) ➡️ · 🧪 [Ejercicios](ejercicios.md)
