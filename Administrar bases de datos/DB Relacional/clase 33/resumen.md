🏠 [← README](../../../README.md) · ⬅️ [← Clase 32](../clase%2032/resumen.md) · Clase 33

---

# Clase 33 — Entrega y demo final del proyecto

**Fecha:** 9 de junio de 2026  
**Materia:** Bases de datos relacionales  
**Tipo:** 🎯 Entrega final — calificación en vivo

---

# 🎯 Objetivo de la sesión

Demostrar que la aplicación CLI funciona de extremo a extremo: se conecta a MySQL, ejecuta las 5 operaciones del CRUD y el equipo puede explicar su código.

---

# 📋 Criterios de evaluación

| Criterio | Puntos |
|----------|--------|
| La app conecta a MySQL sin errores | 10 |
| `listar()` muestra todos los registros con JOIN (si aplica) | 20 |
| `agregar()` inserta un registro real y lo muestra en el listado | 20 |
| `editar()` modifica un campo y el cambio es visible en `listar()` | 20 |
| `eliminar()` borra un registro y desaparece del listado | 20 |
| El código está organizado en los 4 archivos (`config`, `conexion`, `funciones`, `index`) | 5 |
| El repositorio está actualizado con el código final | 5 |
| **Total** | **100** |

---

# 🎬 Flujo de la demo (10 minutos por equipo)

El maestro observa mientras el equipo ejecuta la aplicación en la terminal:

1. `php index.php` → debe aparecer el menú sin errores de conexión
2. **Opción listar** → mostrar todos los registros actuales de la BD
3. **Opción agregar** → insertar un registro nuevo con datos reales
4. **Opción listar** → confirmar que el nuevo registro aparece
5. **Opción editar** → modificar un campo del registro recién agregado
6. **Opción listar** → confirmar que el cambio es visible
7. **Opción eliminar** → borrar el registro de prueba
8. **Opción listar** → confirmar que ya no aparece
9. **Opción salir** → cierre limpio sin errores

---

# ✅ Checklist previo a la demo

Antes de que el maestro llegue a tu equipo, verifica:

- [ ] `php index.php` inicia sin error de conexión
- [ ] La BD tiene al menos 10 registros reales (no "test", "aaa", etc.)
- [ ] El menú muestra las 5 opciones claramente
- [ ] Cada opción funciona sin romper el programa
- [ ] El código final está en el repositorio (`Sync Changes` completado)
- [ ] Todos los integrantes conocen el código de su archivo

---

# 💬 Preguntas que puede hacer el maestro

El maestro puede preguntarle a cualquier integrante:

- ¿Qué hace `require_once`? ¿Por qué usamos `require_once` y no `include`?
- ¿Por qué `conectar()` devuelve `$conn`?
- ¿Qué pasa si no pones `WHERE` en un `UPDATE` o `DELETE`?
- ¿Cómo sabe PHP si el `UPDATE` modificó algo?
- ¿Qué tipo de dato usa la llave primaria de tu tabla?
- ¿Por qué usaste `INNER JOIN` (o `LEFT JOIN`) en `listar()`?

---

# 📌 Cierre del semestre

Esta es la última clase de laboratorio del semestre. El **15 de junio** es el examen del tercer parcial, que evalúa los conceptos de forma individual.

El proyecto evidencia que puedes:
- Diseñar y crear una BD relacional con múltiples tablas
- Escribir consultas SQL con JOINs
- Conectar PHP a MySQL con `mysqli`
- Organizar código en módulos reutilizables
- Trabajar colaborativamente en un repositorio Git

---

🏠 [← README](../../../README.md) · ⬅️ [← Clase 32](../clase%2032/resumen.md) · Clase 33
