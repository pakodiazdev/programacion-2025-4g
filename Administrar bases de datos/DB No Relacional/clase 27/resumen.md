🏠 [← README](../../../README.md) · ⬅️ [← Clase 26](../clase%2026/resumen.md) · Clase 27

---

# Clase 27 — Entrega y demo final del proyecto

**Fecha:** 9 de junio de 2026  
**Materia:** Bases de datos no relacionales  
**Tipo:** 🎯 Entrega final — calificación en vivo

---

# 🎯 Objetivo de la sesión

Demostrar que la aplicación CLI funciona de extremo a extremo: se conecta a MongoDB, ejecuta las 5 operaciones del CRUD y el equipo puede explicar su código.

---

# 📋 Criterios de evaluación

| Criterio | Puntos |
|----------|--------|
| La app conecta a MongoDB sin errores | 10 |
| `listar()` muestra todos los documentos con sus campos relevantes | 20 |
| `agregar()` inserta un documento real y aparece en el listado | 20 |
| `editar()` modifica un campo y el cambio es visible en `listar()` | 20 |
| `eliminar()` borra un documento y desaparece del listado | 20 |
| El código está organizado en los 4 archivos (`config`, `conexion`, `funciones`, `index`) | 5 |
| El repositorio está actualizado con el código final | 5 |
| **Total** | **100** |

---

# 🎬 Flujo de la demo (10 minutos por equipo)

1. `node index.js` → conecta sin errores, muestra el menú
2. **Opción listar** → mostrar todos los documentos actuales
3. **Opción agregar** → insertar un documento nuevo con datos reales
4. **Opción listar** → confirmar que el nuevo documento aparece
5. **Opción editar** → modificar un campo del documento recién agregado
6. **Opción listar** → confirmar que el cambio es visible
7. **Opción eliminar** → borrar el documento de prueba
8. **Opción listar** → confirmar que ya no aparece
9. **Opción salir** → cierre limpio (`cliente.close()` + `rl.close()`)

---

# ✅ Checklist previo a la demo

- [ ] `node index.js` inicia sin error de conexión
- [ ] La colección tiene al menos 10 documentos reales
- [ ] El menú muestra las 5 opciones claramente
- [ ] Cada opción funciona sin romper el programa
- [ ] El código final está en el repositorio
- [ ] Todos los integrantes conocen el código de su archivo

---

# 💬 Preguntas que puede hacer el maestro

- ¿Qué exporta `module.exports` en `funciones.js`?
- ¿Por qué todas las funciones son `async`?
- ¿Qué hace `await cliente.close()` al final?
- ¿Qué es un `ObjectId` y por qué hay que convertir el string antes de buscar por `_id`?
- ¿Qué operador usarías para modificar solo un campo sin borrar los demás?
- ¿Qué diferencia hay entre `updateOne` y `updateMany`?
- ¿Cómo elegiste qué datos embeber y cuáles separar en tu colección?

---

# 📌 Cierre del semestre

Esta es la última sesión de laboratorio. El **15 de junio** es el examen del tercer parcial — evaluación individual de los conceptos vistos durante el semestre.

El proyecto evidencia que puedes:
- Diseñar colecciones en MongoDB con documentos embebidos
- Hacer CRUD completo desde Node.js con el driver oficial
- Organizar el código en módulos con `require` / `module.exports`
- Usar `async/await` para operaciones de BD
- Trabajar en equipo con Git y GitHub

---

🏠 [← README](../../../README.md) · ⬅️ [← Clase 26](../clase%2026/resumen.md) · Clase 27
