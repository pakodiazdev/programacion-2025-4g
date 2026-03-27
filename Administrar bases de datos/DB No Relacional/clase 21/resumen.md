🏠 [← README](../../../README.md) · ⬅️ [← Clase 20](../clase%2020/resumen.md) · Clase 21 · [Clase 22 →](../clase%2022/resumen.md) ➡️ · 🧪 [Ejercicios](ejercicios.md)

---

# Clase 21 — Node.js + MongoDB: conexion.js

**Fecha:** 19 de mayo de 2026  
**Materia:** Bases de datos NO relacionales  
**Tipo:** 📚 Teoría + 🧪 LAB

---

# 🎯 Objetivo de la sesión

Aprender a conectar a MongoDB desde Node.js usando el driver oficial `mongodb`. Escribirás un módulo `conexion.js` reutilizable que exporta una función `conectar()` con `async/await`, y verificarás que la conexión funciona listando colecciones.

---

# 🧠 Parte 1: Recordatorio — async/await (Clase 20)

En la clase anterior aprendiste que:

```js
// Sin async/await (Callbacks - código viejo)
MongoClient.connect(uri, (err, client) => {
    if (err) throw err;
    console.log('Conectado');
    client.close();
});

// Con async/await (Moderno - limpio y legible)
async function conectar() {
    const client = new MongoClient(uri);
    await client.connect();
    console.log('Conectado');
    await client.close();
}
```

**¿Por qué async/await?**
- Código más legible (parece síncrono)
- Mejor manejo de errores con `try/catch`
- Más fácil de debuggear
- Estándar en Node.js moderno

---

# 🛠️ Parte 2: Instalar el driver MongoDB

En la terminal, en tu proyecto Node.js:

```bash
npm install mongodb
```

Esto descarga el driver oficial de MongoDB para Node.js. Verificar en `package.json`:

```json
{
  "dependencies": {
    "mongodb": "^6.0.0"  // (versión actual o similar)
  }
}
```

---

# 📦 Parte 3: Estructura del driver MongoDB

El driver proporciona:

```js
const { MongoClient } = require('mongodb');

// MongoClient: clase que gestiona la conexión
// Métodos principales:
// - new MongoClient(uri)
// - client.connect()
// - client.db(nombreBD)
// - client.close()
```

---

# 🔌 Parte 4: Crear conexion.js

Crea un archivo `conexion.js` en la raíz de tu proyecto Node.js:

```js
// conexion.js
const { MongoClient } = require('mongodb');

// URI de conexión (MongoDB local en puerto 27017)
const URI = 'mongodb://localhost:27017';

// Función que exportamos
async function conectar() {
    const client = new MongoClient(URI);

    try {
        // Conectarse al servidor MongoDB
        await client.connect();
        console.log('✅ Conectado a MongoDB');

        // Retornar el cliente para que el código externo lo use
        return client;
    } catch (error) {
        console.error('❌ Error al conectar:', error.message);
        process.exit(1);  // Terminar si falla la conexión
    }
}

// Exportar la función
module.exports = { conectar };
```

---

# 🔑 Parte 5: Entender cada línea

## Requerir el módulo

```js
const { MongoClient } = require('mongodb');
```

- `require('mongodb')` carga el paquete instalado con npm
- `{ MongoClient }` usa desestructuración para obtener solo la clase `MongoClient`

## URI de conexión

```js
const URI = 'mongodb://localhost:27017';
```

- `mongodb://` protocolo de MongoDB
- `localhost` servidor local (tu computadora)
- `:27017` puerto por defecto de MongoDB

**Nota:** Si MongoDB está en otro servidor o puerto, cambia el URI:

```js
// MongoDB en Atlas (nube)
const URI = 'mongodb+srv://usuario:contraseña@cluster0.mongodb.net/';

// MongoDB en servidor remoto
const URI = 'mongodb://192.168.1.100:27017';
```

## Crear cliente

```js
const client = new MongoClient(URI);
```

- Crea un objeto `client` sin conectarse aún
- La conexión ocurre en `await client.connect()`

## Conectarse (async/await)

```js
await client.connect();
```

- `await` pausa la función hasta que se complete la conexión
- Si falla, entra al bloque `catch`

## Manejo de errores

```js
try {
    await client.connect();
    return client;
} catch (error) {
    console.error('❌ Error al conectar:', error.message);
    process.exit(1);  // Detiene el proceso con código de error
}
```

- `try` intenta conectar
- `catch` captura errores (conexión rechazada, URI inválida, etc.)
- `process.exit(1)` termina el programa (código 1 = error)

## Exportar

```js
module.exports = { conectar };
```

- `module.exports` hace que la función esté disponible para otros archivos
- Otros archivos la importan con `const { conectar } = require('./conexion')`

---

# 💻 Parte 6: Usar conexion.js en index.js

Crea un archivo `index.js` para probar:

```js
// index.js
const { conectar } = require('./conexion');

async function main() {
    // Conectar a MongoDB
    const client = await conectar();

    // Obtener la base de datos 'escuela' (se crea si no existe)
    const db = client.db('escuela');

    // Listar todas las colecciones en la BD
    const colecciones = await db.listCollections().toArray();
    console.log('📚 Colecciones en "escuela":');
    colecciones.forEach(col => console.log(`  - ${col.name}`));

    // Cerrar la conexión
    await client.close();
    console.log('✅ Conexión cerrada');
}

// Ejecutar
main();
```

---

# 📋 Parte 7: Sintaxis de client.db() y listCollections()

## Obtener una BD

```js
const db = client.db('nombre_bd');
```

- Retorna un objeto `Db`
- La BD se crea automáticamente en MongoDB cuando haces el primer insert

## Listar colecciones

```js
const colecciones = await db.listCollections().toArray();
// Retorna: [{ name: 'col1' }, { name: 'col2' }, ...]
```

## Cerrar la conexión

```js
await client.close();
```

- **Importante:** Siempre cierra la conexión cuando termines
- Libera recursos del servidor
- En una API, esto ocurre cuando el servidor se detiene

---

# 🎬 Parte 8: Paso a paso — Ejecutar el ejemplo

### 1. Asegúrate que MongoDB está corriendo

```bash
# En una terminal, inicia mongod
mongod
# Debe decir: [initandlisten] Waiting for connections on port 27017
```

### 2. Crea tu proyecto Node.js

```bash
mkdir mi-proyecto-mongo
cd mi-proyecto-mongo
npm init -y
npm install mongodb
```

### 3. Crea conexion.js

Copia el código de la Parte 4 en un archivo llamado `conexion.js`

### 4. Crea index.js

Copia el código de la Parte 6 en un archivo llamado `index.js`

### 5. Ejecuta

```bash
node index.js
```

**Salida esperada:**

```
✅ Conectado a MongoDB
📚 Colecciones en "escuela":
(vacío al principio)
✅ Conexión cerrada
```

---

# 🔍 Parte 9: Debugging — Errores comunes

### Error: "connect ECONNREFUSED"

```
Error: connect ECONNREFUSED 127.0.0.1:27017
```

**Solución:** MongoDB no está corriendo. Ejecuta `mongod` en otra terminal.

### Error: "URI Error: Invalid uri string"

```
Error: Invalid uri string
```

**Solución:** El URI tiene formato incorrecto. Verifica:
- `mongodb://` (con las barras diagonales)
- `localhost:27017` (con dos puntos, no coma)

### Error: "ENOENT: no such file or directory, open 'conexion.js'"

```
Error: ENOENT: no such file or directory
```

**Solución:** El archivo `conexion.js` no existe o está en otra carpeta. Verifica con `ls` o `dir`.

---

# 💪 Práctica en parejas

**Objetivo:** Escribir `conexion.js` desde cero y verificar que conecta.

### Pasos

1. **Crear proyecto:**
   ```bash
   mkdir escuela-mongo
   cd escuela-mongo
   npm init -y
   npm install mongodb
   ```

2. **Crear `conexion.js`** (sin copiar, escribir):
   - `const { MongoClient } = require('mongodb')`
   - `const URI = 'mongodb://localhost:27017'`
   - `async function conectar() { ... }`
   - `module.exports = { conectar }`

3. **Crear `index.js`** para probar:
   - Importar `{ conectar }`
   - Llamar `await conectar()`
   - Obtener BD con `client.db('escuela')`
   - Listar colecciones con `db.listCollections().toArray()`
   - Cerrar con `await client.close()`

4. **Ejecutar y verificar:**
   ```bash
   node index.js
   ```

5. **Commit a GitHub:**
   ```bash
   git add conexion.js index.js
   git commit -m "clase-21: conexion.js funcional a MongoDB"
   git push
   ```

---

# 📌 Checklist de la clase

- [ ] Instalé `npm install mongodb`
- [ ] Entiendo qué es `MongoClient` y `URI`
- [ ] Puedo explicar por qué usamos `async/await`
- [ ] Escribí `conexion.js` sin copiar
- [ ] Mi `index.js` lista colecciones sin errores
- [ ] Cerré la conexión con `await client.close()`
- [ ] Subí a GitHub con commit descriptivo

---

# 📊 Resumen

| Concepto | Línea de código |
|----------|------------------|
| Importar driver | `const { MongoClient } = require('mongodb')` |
| URI local | `'mongodb://localhost:27017'` |
| Crear cliente | `new MongoClient(uri)` |
| Conectar | `await client.connect()` |
| Obtener BD | `client.db('nombre')` |
| Listar colecciones | `await db.listCollections().toArray()` |
| Cerrar conexión | `await client.close()` |

---

# ⏭️ Próxima clase

En Clase 22 aprenderás a:
- Usar `find()` para recuperar documentos
- Usar `findOne()` para obtener un solo documento
- Usar `insertOne()` para agregar documentos desde Node.js
- Crear funciones reutilizables en `funciones.js`

---

🏠 [← README](../../../README.md) · ⬅️ [← Clase 20](../clase%2020/resumen.md) · Clase 21 · [Clase 22 →](../clase%2022/resumen.md) ➡️ · 🧪 [Ejercicios](ejercicios.md)
