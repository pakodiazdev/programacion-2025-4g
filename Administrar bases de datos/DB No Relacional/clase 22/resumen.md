🏠 [← README](../../../README.md) · ⬅️ [← Clase 21](../clase%2021/resumen.md) · Clase 22 · [Clase 23 →](../clase%2023/resumen.md) ➡️ · 🧪 [Ejercicios](ejercicios.md)

---

# Clase 22 — `find` e `insertOne` desde Node.js

**Fecha:** 21 de mayo de 2026  
**Materia:** Bases de datos NO relacionales  
**Tipo:** 🧪 LAB

---

# 🎯 Objetivo de la sesión

Aprender a recuperar e insertar documentos desde Node.js. Escribirás dos funciones reutilizables (`listar()` e `insertar()`) en un archivo `funciones.js` y las conectarás a un menú interactivo en `index.js`.

---

# 📚 Parte 1: Recordatorio — conexion.js

En la clase anterior creaste `conexion.js`:

```js
const { MongoClient } = require('mongodb');
const URI = 'mongodb://localhost:27017';

async function conectar() {
    const client = new MongoClient(URI);
    try {
        await client.connect();
        console.log('✅ Conectado a MongoDB');
        return client;
    } catch (error) {
        console.error('❌ Error al conectar:', error.message);
        process.exit(1);
    }
}

module.exports = { conectar };
```

Hoy lo usarás de base.

---

# 🔍 Parte 2: Obtener una colección y usar find()

## Sintaxis básica

```js
const collection = db.collection('nombre_coleccion');
const documentos = await collection.find().toArray();
```

### Explicación

- `db.collection('nombre')` retorna un objeto `Collection`
- `.find()` crea un cursor (objeto que apunta a los documentos)
- `.toArray()` extrae todos los documentos en un array
- `await` espera a que MongoDB responda

## Ejemplo completo

```js
const { conectar } = require('./conexion');

async function main() {
    const client = await conectar();
    const db = client.db('escuela');
    const collection = db.collection('profesores');

    // Traer todos los documentos
    const documentos = await collection.find().toArray();
    console.log('Profesores encontrados:', documentos.length);
    console.log(documentos);

    await client.close();
}

main();
```

---

# 🔎 Parte 3: findOne() — Un solo documento

```js
const documento = await collection.findOne();
```

Retorna el **primer documento** que coincida con el filtro (o `null` si no hay).

### Ejemplo

```js
// Traer el primer profesor
const primerProfesor = await collection.findOne();
console.log(primerProfesor);
// Output: { _id: ObjectId(...), nombre: "Ana García", especialidad: "Matemáticas", ... }

// Traer un profesor específico por nombre
const profesorAna = await collection.findOne({ nombre: 'Ana García' });
console.log(profesorAna);
```

---

# ➕ Parte 4: insertOne() — Insertar un documento

```js
const resultado = await collection.insertOne({ campo1: valor1, campo2: valor2 });
```

## Retorno

```js
{
  acknowledged: true,
  insertedId: ObjectId("...")  // ID generado automáticamente
}
```

## Ejemplo

```js
const { conectar } = require('./conexion');

async function main() {
    const client = await conectar();
    const db = client.db('escuela');
    const collection = db.collection('profesores');

    // Insertar un documento
    const resultado = await collection.insertOne({
        nombre: 'Carlos López',
        especialidad: 'Física',
        años_experiencia: 8
    });

    console.log('✅ Profesor insertado');
    console.log('ID generado:', resultado.insertedId);

    await client.close();
}

main();
```

---

# 📦 Parte 5: Crear funciones.js

Crea un archivo `funciones.js` que exporte funciones reutilizables:

```js
// funciones.js
const { conectar } = require('./conexion');

// Función para listar todos los documentos de una colección
async function listar(db, nombreColeccion) {
    try {
        const collection = db.collection(nombreColeccion);
        const documentos = await collection.find().toArray();

        if (documentos.length === 0) {
            console.log(`⚠️  No hay documentos en "${nombreColeccion}"`);
            return [];
        }

        console.log(`📚 ${documentos.length} documentos encontrados:`);
        documentos.forEach((doc, index) => {
            console.log(`\n[${index + 1}] ID: ${doc._id}`);
            Object.entries(doc).forEach(([clave, valor]) => {
                if (clave !== '_id') {
                    console.log(`    ${clave}: ${valor}`);
                }
            });
        });

        return documentos;
    } catch (error) {
        console.error('❌ Error al listar:', error.message);
        return [];
    }
}

// Función para insertar un documento
async function insertar(db, nombreColeccion, datosDocumento) {
    try {
        const collection = db.collection(nombreColeccion);
        const resultado = await collection.insertOne(datosDocumento);

        console.log(`✅ Documento insertado en "${nombreColeccion}"`);
        console.log(`   ID: ${resultado.insertedId}`);

        return resultado;
    } catch (error) {
        console.error('❌ Error al insertar:', error.message);
        return null;
    }
}

// Exportar las funciones
module.exports = { listar, insertar };
```

---

# 💬 Parte 6: Crear index.js con menú interactivo

```js
// index.js
const { conectar } = require('./conexion');
const { listar, insertar } = require('./funciones');
const readline = require('readline');

// Crear interfaz de lectura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función helper para hacer preguntas
function preguntar(texto) {
    return new Promise((resolve) => {
        rl.question(texto, (respuesta) => {
            resolve(respuesta.trim());
        });
    });
}

async function main() {
    const client = await conectar();
    const db = client.db('escuela');

    let continuarMenu = true;

    while (continuarMenu) {
        console.log('\n========== MENÚ ==========');
        console.log('1. Listar profesores');
        console.log('2. Insertar profesor');
        console.log('3. Salir');
        console.log('=========================');

        const opcion = await preguntar('Elige una opción (1-3): ');

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
                continuarMenu = false;
                break;

            default:
                console.log('❌ Opción no válida. Intenta de nuevo.');
        }
    }

    // Cerrar recursos
    rl.close();
    await client.close();
    console.log('✅ Programa finalizado');
}

main();
```

---

# 🔑 Parte 7: Explicar readline

`readline` es un módulo nativo de Node.js para leer entrada del usuario:

```js
const readline = require('readline');

// Crear interfaz
const rl = readline.createInterface({
    input: process.stdin,   // Entrada del teclado
    output: process.stdout  // Salida a la terminal
});

// Hacer una pregunta
rl.question('¿Cuál es tu nombre? ', (respuesta) => {
    console.log('Hola, ' + respuesta);
    rl.close();
});
```

### Convertir a Promise (para usar con async/await)

```js
function preguntar(texto) {
    return new Promise((resolve) => {
        rl.question(texto, (respuesta) => {
            resolve(respuesta.trim());  // trim() elimina espacios
        });
    });
}

// Usar:
const nombre = await preguntar('¿Tu nombre? ');
console.log('Hola, ' + nombre);
```

---

# 💻 Parte 8: Paso a paso — Ejecutar el ejemplo

### 1. Verificar que tienes los archivos

```bash
ls
# Debe mostrar:
# conexion.js
# funciones.js
# index.js
# package.json
```

### 2. Ejecutar el menú

```bash
node index.js
```

**Salida esperada:**

```
✅ Conectado a MongoDB

========== MENÚ ==========
1. Listar profesores
2. Insertar profesor
3. Salir
=========================
Elige una opción (1-3):
```

### 3. Probar opción 1 (Listar)

```
Elige una opción (1-3): 1
📚 3 documentos encontrados:

[1] ID: ObjectId(...)
    nombre: Ana García
    especialidad: Matemáticas
    años_experiencia: 5

[2] ID: ObjectId(...)
    nombre: Carlos López
    especialidad: Física
    años_experiencia: 8
```

### 4. Probar opción 2 (Insertar)

```
Elige una opción (1-3): 2
Nombre: María González
Especialidad: Química
Años de experiencia: 6
✅ Documento insertado en "profesores"
   ID: ObjectId(...)
```

### 5. Salir

```
Elige una opción (1-3): 3
✅ Programa finalizado
```

---

# 📝 Parte 9: Filtros avanzados en find()

Además de `.find()` sin filtro, puedes filtrar documentos:

```js
// Traer profesores con experiencia > 5 años
const profesoresExperimentados = await collection.find({
    años_experiencia: { $gt: 5 }
}).toArray();

// Traer por igualdad
const profesoresMatematicas = await collection.find({
    especialidad: 'Matemáticas'
}).toArray();

// Múltiples filtros (AND implícito)
const resultado = await collection.find({
    especialidad: 'Matemáticas',
    años_experiencia: { $gte: 5 }
}).toArray();
```

**Operadores útiles:**
- `$gt`: mayor que
- `$gte`: mayor o igual
- `$lt`: menor que
- `$lte`: menor o igual
- `$eq`: igual a
- `$ne`: no igual a
- `$in`: en una lista

---

# 💪 Práctica en parejas

**Objetivo:** Adaptar `funciones.js` e `index.js` a tu proyecto.

### Pasos

1. **Copiar archivos de la clase anterior:**
   ```bash
   cp conexion.js ../clase22/
   cd ../clase22
   ```

2. **Crear `funciones.js`** (sin copiar, escribir):
   - Función `listar(db, nombreColeccion)`
   - Función `insertar(db, nombreColeccion, datosDocumento)`
   - Exportar ambas

3. **Crear `index.js`** con menú:
   - Importar `readline`
   - Función `preguntar(texto)` con Promise
   - `async function main()` con `while` y `switch`
   - 3 opciones: Listar, Insertar, Salir

4. **Adaptar al proyecto:**
   - Cambiar nombre de BD (ej: `hospital`, `biblioteca`)
   - Cambiar nombre de colección (ej: `medicos`, `libros`)
   - Adaptar campos del documento (ej: nombre, especialidad)

5. **Ejecutar y verificar:**
   ```bash
   node index.js
   ```

6. **Commit a GitHub:**
   ```bash
   git add funciones.js index.js
   git commit -m "clase-22: funciones listar e insertar, menú interactivo"
   git push
   ```

---

# 📌 Checklist de la clase

- [ ] Entiendo `db.collection(nombre)`
- [ ] Puedo usar `find().toArray()` para traer todos los documentos
- [ ] Puedo usar `findOne()` para traer un solo documento
- [ ] Puedo usar `insertOne()` para agregar documentos
- [ ] Escribí `funciones.js` sin copiar
- [ ] Escribí `index.js` con menú funcional
- [ ] El menú lista, inserta y sale sin errores
- [ ] Los campos se adaptan a mi proyecto
- [ ] Subí a GitHub con commit descriptivo

---

# 📊 Resumen de funciones

| Operación | Código | Retorna |
|-----------|--------|---------|
| Obtener colección | `db.collection(nombre)` | `Collection` |
| Listar todos | `await col.find().toArray()` | `Array` de documentos |
| Un solo documento | `await col.findOne()` | Documento o `null` |
| Con filtro | `await col.find({filtro}).toArray()` | `Array` filtrado |
| Insertar uno | `await col.insertOne(doc)` | `{insertedId: ...}` |

---

# ⏭️ Próxima clase

En Clase 23 aprenderás a:
- Usar `updateOne()` para modificar documentos
- Usar `deleteOne()` para eliminar documentos
- Buscar por `ObjectId` con `new ObjectId(idString)`
- Verificar resultados con `modifiedCount` y `deletedCount`

---

🏠 [← README](../../../README.md) · ⬅️ [← Clase 21](../clase%2021/resumen.md) · Clase 22 · [Clase 23 →](../clase%2023/resumen.md) ➡️ · 🧪 [Ejercicios](ejercicios.md)
