🏠 [← README](../../../README.md) · ⬅️ [← Clase 23](../clase%2023/resumen.md) · Clase 24 · [Clase 25 →](../clase%2025/resumen.md) ➡️ · 🧪 [Ejercicios](ejercicios.md)

---

# Clase 24 — Menú completo index.js

**Fecha:** 28 de mayo de 2026  
**Materia:** Bases de datos NO relacionales  
**Tipo:** 🧪 LAB

---

# 🎯 Objetivo de la sesión

Crear la aplicación CRUD completa y funcional en `index.js` que integre todas las funciones de `funciones.js`. Al final tendrás una app Node.js + MongoDB completamente operativa lista para usar en tu proyecto de equipo.

---

# 📚 Recordatorio — Qué tenemos hasta aquí

### Clase 21: conexion.js
```js
// Conecta a MongoDB
const { conectar } = require('./conexion');
const client = await conectar();
```

### Clase 22: funciones.js con listar e insertar
```js
const { listar, insertar } = require('./funciones');
await listar(db, 'profesores');
await insertar(db, 'profesores', {nombre: 'Ana', ...});
```

### Clase 23: funciones.js extendida con editar y eliminar
```js
const { listar, insertar, editar, eliminar } = require('./funciones');
await editar(db, 'profesores', id, {nombre: 'Nuevo'});
await eliminar(db, 'profesores', id);
```

### Hoy: index.js FINAL con menú completo
```js
// Menú interactivo con 5 opciones (CRUD + Salir)
node index.js
```

---

# 💻 Parte 1: Código completo de index.js FINAL

```js
// index.js - VERSIÓN FINAL COMPLETA
const { conectar } = require('./conexion');
const { listar, insertar, editar, eliminar } = require('./funciones');
const readline = require('readline');

// Crear interfaz para leer entrada
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función helper: convertir callback a Promise
function preguntar(texto) {
    return new Promise((resolve) => {
        rl.question(texto, (respuesta) => {
            resolve(respuesta.trim());
        });
    });
}

// Función para mostrar menú
function mostrarMenu() {
    console.log('\n╔════════════════════════════════╗');
    console.log('║        MENÚ CRUD MONGODB       ║');
    console.log('╠════════════════════════════════╣');
    console.log('║ 1. Listar registros            ║');
    console.log('║ 2. Insertar registro           ║');
    console.log('║ 3. Editar registro            ║');
    console.log('║ 4. Eliminar registro          ║');
    console.log('║ 5. Salir                       ║');
    console.log('╚════════════════════════════════╝');
}

// Función principal
async function main() {
    // Conectar a MongoDB
    const client = await conectar();
    const db = client.db('escuela');  // CAMBIAR según proyecto
    const nombreColeccion = 'profesores';  // CAMBIAR según proyecto

    let continuarMenu = true;

    while (continuarMenu) {
        mostrarMenu();

        const opcion = await preguntar('\n¿Qué deseas hacer? (1-5): ');

        switch (opcion) {
            // ========== OPCIÓN 1: LISTAR ==========
            case '1':
                console.log('\n📚 Obteniendo registros...');
                await listar(db, nombreColeccion);
                break;

            // ========== OPCIÓN 2: INSERTAR ==========
            case '2':
                console.log('\n➕ Nuevo registro');
                const nombre = await preguntar('Nombre: ');
                const especialidad = await preguntar('Especialidad: ');
                const experiencia = await preguntar('Años de experiencia: ');

                if (!nombre || !especialidad) {
                    console.log('❌ Error: Los campos nombre y especialidad son obligatorios');
                    break;
                }

                await insertar(db, nombreColeccion, {
                    nombre,
                    especialidad,
                    años_experiencia: parseInt(experiencia) || 0
                });
                break;

            // ========== OPCIÓN 3: EDITAR ==========
            case '3':
                console.log('\n✏️  Editar registro');

                // Primero, listar para que vea los IDs
                await listar(db, nombreColeccion);

                const idEditar = await preguntar('\nID del registro a editar: ');

                if (!idEditar) {
                    console.log('❌ Error: Debes proporcionar un ID');
                    break;
                }

                console.log('\nDeja en blanco para no cambiar un campo.');
                const nuevoNombre = await preguntar('Nuevo nombre: ');
                const nuevaEspecialidad = await preguntar('Nueva especialidad: ');

                const datosActualizacion = {};
                if (nuevoNombre) datosActualizacion.nombre = nuevoNombre;
                if (nuevaEspecialidad) datosActualizacion.especialidad = nuevaEspecialidad;

                if (Object.keys(datosActualizacion).length === 0) {
                    console.log('⚠️  No se realizaron cambios');
                    break;
                }

                await editar(db, nombreColeccion, idEditar, datosActualizacion);
                break;

            // ========== OPCIÓN 4: ELIMINAR ==========
            case '4':
                console.log('\n🗑️  Eliminar registro');

                // Primero, listar para que vea los IDs
                await listar(db, nombreColeccion);

                const idEliminar = await preguntar('\nID del registro a eliminar: ');

                if (!idEliminar) {
                    console.log('❌ Error: Debes proporcionar un ID');
                    break;
                }

                const confirmar = await preguntar('⚠️  ¿Estás seguro de eliminar? (s/n): ');

                if (confirmar.toLowerCase() !== 's') {
                    console.log('❌ Eliminación cancelada');
                    break;
                }

                await eliminar(db, nombreColeccion, idEliminar);
                break;

            // ========== OPCIÓN 5: SALIR ==========
            case '5':
                console.log('\n👋 Saliendo del programa...');
                continuarMenu = false;
                break;

            // ========== OPCIÓN INVÁLIDA ==========
            default:
                console.log('❌ Opción no válida. Por favor, elige de 1 a 5.');
        }
    }

    // Cerrar recursos en orden correcto
    rl.close();
    await client.close();
    console.log('✅ Conexión cerrada. ¡Hasta pronto!');
    process.exit(0);  // Asegurar salida limpia
}

// Ejecutar la aplicación
main().catch((error) => {
    console.error('❌ Error no capturado:', error.message);
    process.exit(1);
});
```

---

# 📋 Parte 2: Explicar flujo de ejecución

## 1. Inicio

```js
const client = await conectar();
const db = client.db('escuela');
```

- Se conecta a MongoDB
- Se selecciona la BD `escuela`

## 2. Menú principal

```js
while (continuarMenu) {
    mostrarMenu();
    const opcion = await preguntar('¿Qué deseas hacer? ');

    switch (opcion) { ... }
}
```

- Muestra el menú
- Lee opción del usuario
- Ejecuta la acción correspondiente
- Repite hasta que el usuario elige "5. Salir"

## 3. Casos del switch

**Opción 1:** Llama a `listar()`
**Opción 2:** Pide datos y llama a `insertar()`
**Opción 3:** Pide ID y cambios, llama a `editar()`
**Opción 4:** Pide ID y confirmación, llama a `eliminar()`
**Opción 5:** Sale del loop

## 4. Cierre

```js
rl.close();                    // Cerrar readline
await client.close();          // Cerrar conexión MongoDB
console.log('✅ Programa finalizado');
process.exit(0);               // Salir del proceso
```

---

# 🔧 Parte 3: Adaptaciones al proyecto

Hay tres líneas que debes cambiar según tu proyecto:

```js
// Línea 52 (aprox): Cambiar BD
const db = client.db('escuela');  // Cambiar a tu BD

// Línea 53 (aprox): Cambiar colección
const nombreColeccion = 'profesores';  // Cambiar a tu colección

// Línea 72-76 (aprox): Cambiar campos
const nombre = await preguntar('Nombre: ');           // Tu campo 1
const especialidad = await preguntar('Especialidad: '); // Tu campo 2
const experiencia = await preguntar('Años de experiencia: '); // Tu campo 3
```

### Ejemplo: Proyecto HOSPITAL

```js
// Línea 52
const db = client.db('hospital');

// Línea 53
const nombreColeccion = 'medicos';

// Línea 72-76
const nombre = await preguntar('Nombre: ');
const especialidad = await preguntar('Especialidad: ');
const turno = await preguntar('Turno (mañana/tarde/noche): ');

// Línea 88-90 (en insertar)
await insertar(db, nombreColeccion, {
    nombre,
    especialidad,
    turno
});
```

---

# 💻 Parte 4: Paso a paso — Ejecutar

### 1. Verificar que existen los archivos

```bash
ls -la
# Debe mostrar:
# conexion.js
# funciones.js
# index.js
# package.json
```

### 2. Verificar que MongoDB está corriendo

```bash
# En otra terminal
mongod
```

### 3. Ejecutar

```bash
node index.js
```

**Salida esperada:**

```
✅ Conectado a MongoDB

╔════════════════════════════════╗
║        MENÚ CRUD MONGODB       ║
╠════════════════════════════════╣
║ 1. Listar registros            ║
║ 2. Insertar registro           ║
║ 3. Editar registro            ║
║ 4. Eliminar registro          ║
║ 5. Salir                       ║
╚════════════════════════════════╝

¿Qué deseas hacer? (1-5):
```

### 4. Probar todas las operaciones

```
¿Qué deseas hacer? (1-5): 2
➕ Nuevo registro
Nombre: Ana García
Especialidad: Matemáticas
Años de experiencia: 5
✅ Documento insertado en "profesores"
   ID: 507f1f77bcf86cd799439011

¿Qué deseas hacer? (1-5): 1
📚 Obteniendo registros...
📚 1 documentos encontrados:

[1] ID: 507f1f77bcf86cd799439011
    nombre: Ana García
    especialidad: Matemáticas
    años_experiencia: 5

¿Qué deseas hacer? (1-5): 3
✏️  Editar registro
[...lista de documentos...]
ID del registro a editar: 507f1f77bcf86cd799439011
Nuevo nombre: Ana García López
Nueva especialidad:
✅ Documento actualizado
   Modificados: 1

¿Qué deseas hacer? (1-5): 5
👋 Saliendo del programa...
✅ Conexión cerrada. ¡Hasta pronto!
```

---

# ⚠️ Parte 5: Errores comunes

### Error: "MongoDB no está corriendo"

```
Error: connect ECONNREFUSED 127.0.0.1:27017
```

**Solución:** Abre otra terminal y ejecuta `mongod`

### Error: "No se encuentra conexion.js"

```
Error: Cannot find module './conexion'
```

**Solución:** Verifica que `conexion.js` esté en la misma carpeta que `index.js`

### Error: "No se encuentra funciones.js"

```
Error: Cannot find module './funciones'
```

**Solución:** Verifica que `funciones.js` esté en la misma carpeta que `index.js`

### Error: "mongodb no está instalado"

```
Error: Cannot find module 'mongodb'
```

**Solución:** Ejecuta `npm install mongodb`

---

# 💪 Práctica final

**Objetivo:** App CRUD completamente funcional en tu proyecto.

### Pasos

1. **Copiar de Clase 23:**
   ```bash
   cp -r ../clase23/p901* .
   ```

2. **Actualizar `index.js`:**
   - Copiar el código de `Parte 1`
   - Cambiar BD en línea 52
   - Cambiar colección en línea 53
   - Cambiar campos en línea 72-76

3. **Verificar que funciona:**
   ```bash
   node index.js
   ```

4. **Pruebas:**
   - Insertar 3 registros
   - Listar y copiar IDs
   - Editar un registro
   - Eliminar un registro
   - Listar nuevamente
   - Salir

5. **Commit a GitHub:**
   ```bash
   git add index.js
   git commit -m "clase-24: app CRUD completa, menú interactivo funcional"
   git push
   ```

---

# 🎓 Conclusión: CRUD completo en 4 clases

| Clase | Componente | Lo que aprendiste |
|-------|-----------|-------------------|
| 21 | `conexion.js` | Conectar a MongoDB desde Node.js |
| 22 | `find()` + `insertOne()` | Leer e insertar documentos |
| 23 | `updateOne()` + `deleteOne()` | Editar y eliminar documentos |
| 24 | `index.js` completo | Integrar CRUD en app interactiva |

**Resultado:** Aplicación Node.js + MongoDB completamente funcional lista para tu proyecto de equipo.

---

# 📌 Checklist final

- [ ] `conexion.js` conecta sin errores
- [ ] `funciones.js` tiene 4 funciones exportadas
- [ ] `index.js` tiene menú con 5 opciones
- [ ] Puedo listar registros (opción 1)
- [ ] Puedo insertar registros (opción 2)
- [ ] Puedo editar registros (opción 3)
- [ ] Puedo eliminar registros (opción 4)
- [ ] Puedo salir sin errores (opción 5)
- [ ] Los campos están adaptados al proyecto
- [ ] Subí a GitHub con commit descriptivo

---

# ⏭️ Próximas pasos

Después de estas 4 clases, puedes:

1. **Integrar con Express** para crear una API REST
2. **Agregar validaciones** con Joi o Yup
3. **Implementar autenticación** con JWT
4. **Crear un frontend** que consuma tu API
5. **Desplegar en la nube** (Heroku, Vercel, Railway)

¡Tu base está lista! 🚀

---

🏠 [← README](../../../README.md) · ⬅️ [← Clase 23](../clase%2023/resumen.md) · Clase 24 · [Clase 25 →](../clase%2025/resumen.md) ➡️ · 🧪 [Ejercicios](ejercicios.md)
