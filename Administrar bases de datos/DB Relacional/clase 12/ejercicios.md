🏠 [← README](../../../README.md) · ⬅️ [← Clase 10](../clase%2010/resumen.md) · 📘 [Resumen](resumen.md)

---

# 📘 Prácticas — Clase 11 (PHP-CLI, if/else, funcion readline y operadores `||` y `!`)

## 🎯 Objetivo

Reforzar el uso de:

- Entrada de datos desde teclado (`readline`)

- Estructuras condicionales `if / else`

- Condiciones con operador lógico `||`

- Negación de condiciones con operador `!`

- Pensamiento lógico (Input → Process → Output)


---

## 🧪 Prácticas individuales

---

## Práctica 110 — Descuento por cliente VIP o cupón  

**Archivo:** `p110-descuento-vip-cupon.php`  

**Alumno:** ALCANTAR  


Leer si el cliente es VIP (`si/no`) y si tiene cupón (`si/no`).
Si el cliente es VIP es `si` **o** tiene cupón es `si` mostrar:

Descuento aplicado  

En caso contrario:

No aplica descuento

---

## Práctica 111 — Producto no disponible  

**Archivo:** `p111-producto-agotado.php`  

**Alumno:** ALCANTAR  


Leer la cantidad en inventario.
Si **no** hay inventario, es decir, la cantidad es igual a 0, mostrar:

Producto agotado  

En caso contrario:

Producto disponible

---

## Práctica 112 — Acceso con credencial o pase temporal  

**Archivo:** `p112-acceso-con-credencial-o-pase.php`  

**Alumno:** BALANDRAN  


Leer si una persona trae credencial (`si/no`) y si trae pase temporal (`si/no`).
Si trae credencial es `si` **o** trae pase temporal es `si` mostrar:

Acceso permitido  

En caso contrario:

Acceso denegado

---

## Práctica 113 — Alumno no aprobado  

**Archivo:** `p113-no-aprobado.php`  

**Alumno:** BALANDRAN  


Leer la calificación final de un alumno.
Si la calificación **no** es aprobatoria, es decir, es menor a 6, mostrar:

Alumno no aprobado  

En caso contrario:

Alumno aprobado

---

## Práctica 114 — Promoción por mayoreo o membresía  

**Archivo:** `p114-promocion-por-mayoreo-o-membresia.php`  

**Alumno:** BARAJAS  


Leer la cantidad comprada y si tiene membresía (`si/no`).
Si la cantidad es mayor o igual a 12 **o** tiene membresía es `si` mostrar:

Promoción disponible  

En caso contrario:

Promoción no disponible

---

## Práctica 115 — Acceso no autorizado por contraseña  

**Archivo:** `p115-no-autorizado-por-contrasena.php`  

**Alumno:** BARAJAS  


Leer una contraseña.
Si la contraseña **no** es igual a `php123` mostrar:

Contraseña incorrecta  

En caso contrario:

Contraseña correcta

---

## Práctica 116 — Aprobación por examen o proyecto  

**Archivo:** `p116-aprobacion-por-examen-o-proyecto.php`  

**Alumno:** BLANCARTE  


Leer la calificación del examen y la calificación del proyecto.
Si el examen es mayor o igual a 8 **o** el proyecto es mayor o igual a 8 mostrar:

Criterio cumplido  

En caso contrario:

Criterio no cumplido

---

## Práctica 117 — Empleado no puntual  

**Archivo:** `p117-no-puntual.php`  

**Alumno:** BLANCARTE  


Leer la hora de llegada de un empleado.
Si la hora **no** es menor o igual a 8, mostrar:

Llegó tarde  

En caso contrario:

Llegó a tiempo

---

## Práctica 118 — Envío gratis por monto o cliente premium  

**Archivo:** `p118-envio-gratis-por-monto-o-premium.php`  

**Alumno:** CORRALEJO  


Leer el monto de compra y el tipo de cliente (`normal/premium`).
Si el monto es mayor o igual a 900 **o** el tipo de cliente es `premium` mostrar:

Envío gratis  

En caso contrario:

Envío con costo

---

## Práctica 119 — Paquete no cerrado correctamente  

**Archivo:** `p119-no-cerrado-correctamente.php`  

**Alumno:** CORRALEJO  


Leer si un paquete está sellado (`si/no`).
Si el paquete **no** está sellado, es decir, si el valor es diferente de `si`, mostrar:

Paquete incorrecto  

En caso contrario:

Paquete correcto

---

## Práctica 120 — Acceso por usuario o correo registrado  

**Archivo:** `p120-acceso-por-usuario-o-correo.php`  

**Alumno:** DOMINGUEZ  


Leer un usuario y un correo.
Si el usuario es igual a `admin` **o** el correo es igual a `admin@escuela.mx` mostrar:

Acceso reconocido  

En caso contrario:

Acceso no reconocido

---

## Práctica 121 — Usuario no registrado  

**Archivo:** `p121-no-registrado.php`  

**Alumno:** DOMINGUEZ  


Leer un nombre de usuario.
Si el usuario **no** es igual a `alumno1` mostrar:

Usuario no registrado  

En caso contrario:

Usuario registrado

---

## Práctica 122 — Beca por promedio o deporte  

**Archivo:** `p122-beca-por-promedio-o-deporte.php`  

**Alumno:** FERNANDEZ  


Leer el promedio de un alumno y si pertenece al equipo deportivo (`si/no`).
Si el promedio es mayor o igual a 9 **o** pertenece al equipo deportivo es `si` mostrar:

Puede solicitar beca  

En caso contrario:

No puede solicitar beca

---

## Práctica 123 — Aspirante sin documentos completos  

**Archivo:** `p123-no-entrego-documentos.php`  

**Alumno:** FERNANDEZ  


Leer si entregó documentos (`si/no`).
Si **no** entregó documentos, es decir, si el valor es diferente de `si`, mostrar:

Documentación incompleta  

En caso contrario:

Documentación completa

---

## Práctica 124 — Ingreso por cita o ficha  

**Archivo:** `p124-ingreso-por-cita-o-ficha.php`  

**Alumno:** GALICIA  


Leer si una persona tiene cita (`si/no`) y si tiene ficha (`si/no`).
Si tiene cita es `si` **o** tiene ficha es `si` mostrar:

Puede ingresar  

En caso contrario:

No puede ingresar

---

## Práctica 125 — Equipo sin conexión a red  

**Archivo:** `p125-no-conectado-a-red.php`  

**Alumno:** GALICIA  


Leer si el equipo tiene internet (`si/no`).
Si el equipo **no** tiene internet, es decir, si el valor es diferente de `si`, mostrar:

Sin conexión  

En caso contrario:

Con conexión

---

## Práctica 126 — Promoción por edad o día especial  

**Archivo:** `p126-promocion-por-edad-o-dia.php`  

**Alumno:** GALINDO  


Leer la edad de una persona y el día de la semana.
Si la edad es mayor o igual a 60 **o** el día es `martes` mostrar:

Promoción activa  

En caso contrario:

Promoción inactiva

---

## Práctica 127 — Curso sin espacios  

**Archivo:** `p127-no-hay-espacios.php`  

**Alumno:** GALINDO  


Leer el número de lugares disponibles.
Si **no** hay lugares, es decir, si disponibles es igual a 0, mostrar:

Sin espacios  

En caso contrario:

Espacios disponibles

---

## Práctica 128 — Entrega por ruta A o ruta B  

**Archivo:** `p128-entrega-por-ruta-a-o-ruta-b.php`  

**Alumno:** HERNANDEZ  


Leer la ruta asignada (`A/B/C`) y si el paquete es urgente (`si/no`).
Si la ruta es `A` **o** el paquete urgente es `si` mostrar:

Salida autorizada  

En caso contrario:

Salida no autorizada

---

## Práctica 129 — No cumple edad mínima  

**Archivo:** `p129-no-cumple-edad.php`  

**Alumno:** HERNANDEZ  


Leer la edad de una persona.
Si la edad **no** es mayor o igual a 18, mostrar:

No cumple requisito  

En caso contrario:

Cumple requisito

---

## Práctica 130 — Recuperación por tarea o examen  

**Archivo:** `p130-recuperacion-por-tarea-o-examen.php`  

**Alumno:** IBARRA  


Leer la calificación de tarea y la calificación de examen.
Si la tarea es mayor o igual a 10 **o** el examen es mayor o igual a 6 mostrar:

Recupera materia  

En caso contrario:

No recupera materia

---

## Práctica 131 — No es día hábil  

**Archivo:** `p131-no-es-dia-habil.php`  

**Alumno:** IBARRA  


Leer el día de la semana.
Si el día **no** es igual a `lunes`, mostrar:

No es día de atención  

En caso contrario:

Día de atención

---

## Práctica 132 — Pago por efectivo o transferencia  

**Archivo:** `p132-pago-por-efectivo-o-transferencia.php`  

**Alumno:** JASSO  


Leer el método de pago y el monto pagado.
Si el método es `efectivo` **o** el método es `transferencia` mostrar:

Pago aceptado  

En caso contrario:

Pago no aceptado

---

## Práctica 133 — Pago incompleto  

**Archivo:** `p133-no-pago-completo.php`  

**Alumno:** JASSO  


Leer el monto requerido y el monto entregado.
Si el monto entregado **no** es mayor o igual al requerido, mostrar:

Pago incompleto  

En caso contrario:

Pago completo

---

## Práctica 134 — Acceso por turno o permiso  

**Archivo:** `p134-acceso-por-turno-o-permiso.php`  

**Alumno:** JUAREZ  


Leer el turno (`matutino/vespertino`) y si tiene permiso (`si/no`).
Si el turno es `matutino` **o** tiene permiso es `si` mostrar:

Entrada autorizada  

En caso contrario:

Entrada no autorizada

---

## Práctica 135 — Alumno sin uniforme  

**Archivo:** `p135-no-porta-uniforme.php`  

**Alumno:** JUAREZ  


Leer si el alumno porta uniforme (`si/no`).
Si el alumno **no** porta uniforme, es decir, si el valor es diferente de `si`, mostrar:

No cumple uniforme  

En caso contrario:

Cumple uniforme

---

## Práctica 136 — Promoción por cupón o puntos  

**Archivo:** `p136-promocion-por-cupon-o-puntos.php`  

**Alumno:** MONTES  


Leer si tiene cupón (`si/no`) y la cantidad de puntos acumulados.
Si tiene cupón es `si` **o** los puntos son mayor o igual a 100 mostrar:

Beneficio disponible  

En caso contrario:

Beneficio no disponible

---

## Práctica 137 — Cuenta no activa  

**Archivo:** `p137-no-cuenta-activa.php`  

**Alumno:** MONTES  


Leer si una cuenta está activa (`si/no`).
Si la cuenta **no** está activa, es decir, si el valor es diferente de `si`, mostrar:

Cuenta inactiva  

En caso contrario:

Cuenta activa

---

## Práctica 138 — Salida por fin de turno o relevo  

**Archivo:** `p138-salida-por-fin-de-turno-o-relevo.php`  

**Alumno:** MONTIEL  


Leer si terminó turno (`si/no`) y si llegó relevo (`si/no`).
Si terminó turno es `si` **o** llegó relevo es `si` mostrar:

Puede retirarse  

En caso contrario:

Debe permanecer

---

## Práctica 139 — Tarea no entregada  

**Archivo:** `p139-no-entrego-tarea.php`  

**Alumno:** MONTIEL  


Leer si el alumno entregó tarea (`si/no`).
Si el alumno **no** entregó tarea, es decir, si el valor es diferente de `si`, mostrar:

Tarea pendiente  

En caso contrario:

Tarea entregada

---

## Práctica 140 — Entrada con boleto o invitación  

**Archivo:** `p140-entrada-con-boleto-o-invitacion.php`  

**Alumno:** MORALES  


Leer si trae boleto (`si/no`) y si trae invitación (`si/no`).
Si trae boleto es `si` **o** trae invitación es `si` mostrar:

Entrada permitida  

En caso contrario:

Entrada rechazada

---

## Práctica 141 — Paquete fuera de peso permitido  

**Archivo:** `p141-no-cumple-peso.php`  

**Alumno:** MORALES  


Leer el peso de un paquete.
Si el peso **no** es menor o igual a 25, mostrar:

Peso excedido  

En caso contrario:

Peso permitido

---

## Práctica 142 — Pedido válido por clave o nombre  

**Archivo:** `p142-pedido-valido-por-clave-o-nombre.php`  

**Alumno:** RODRIGUEZ ARRELLANO  


Leer una clave de producto y un nombre de producto.
Si la clave es igual a `A123` **o** el nombre es igual a `lapiz` mostrar:

Producto identificado  

En caso contrario:

Producto no identificado

---

## Práctica 143 — Cliente no frecuente  

**Archivo:** `p143-no-es-cliente-frecuente.php`  

**Alumno:** RODRIGUEZ ARRELLANO  


Leer el número de compras realizadas.
Si el número de compras **no** es mayor o igual a 5, mostrar:

Cliente no frecuente  

En caso contrario:

Cliente frecuente

---

## Práctica 144 — Acceso por PIN o huella  

**Archivo:** `p144-acceso-por-pin-o-huella.php`  

**Alumno:** RODRIGUEZ DIAZ  


Leer un PIN y si la huella fue reconocida (`si/no`).
Si el PIN es igual a `2026` **o** la huella fue reconocida es `si` mostrar:

Acceso correcto  

En caso contrario:

Acceso incorrecto

---

## Práctica 145 — Saldo insuficiente  

**Archivo:** `p145-no-hay-fondos.php`  

**Alumno:** RODRIGUEZ DIAZ  


Leer el saldo de una cuenta y el monto a pagar.
Si el saldo **no** es mayor o igual al monto a pagar, mostrar:

Fondos insuficientes  

En caso contrario:

Fondos suficientes

---

## Práctica 146 — Alerta por temperatura o humo  

**Archivo:** `p146-alerta-por-temperatura-o-humo.php`  

**Alumno:** ROMERO  


Leer una temperatura y si se detectó humo (`si/no`).
Si la temperatura es mayor o igual a 50 **o** se detectó humo es `si` mostrar:

Alerta activada  

En caso contrario:

Alerta desactivada

---

## Práctica 147 — Caja no apta por altura  

**Archivo:** `p147-no-cumple-altura.php`  

**Alumno:** ROMERO  


Leer la altura de una caja.
Si la altura **no** es menor o igual a 40, mostrar:

Caja no apta  

En caso contrario:

Caja apta

---

## Práctica 148 — Habitación disponible por reserva o cancelación  

**Archivo:** `p148-habitacion-disponible-por-reserva-o-cancelacion.php`  

**Alumno:** SANCHEZ  


Leer si hay reserva (`si/no`) y si hubo cancelación (`si/no`).
Si hay reserva es `si` **o** hubo cancelación es `si` mostrar:

Movimiento registrado  

En caso contrario:

Sin movimiento

---

## Práctica 149 — Reservación no encontrada  

**Archivo:** `p149-no-hay-reservacion.php`  

**Alumno:** SANCHEZ  


Leer un nombre.
Si el nombre **no** es igual a `Luis`, mostrar:

Reservación no encontrada  

En caso contrario:

Reservación encontrada

---

## Práctica 150 — Compra aprobada por saldo o crédito  

**Archivo:** `p150-compra-aprobada-por-saldo-o-credito.php`  

**Alumno:** VELASCO  


Leer el saldo disponible y si tiene crédito activo (`si/no`).
Si el saldo es mayor o igual a 500 **o** tiene crédito activo es `si` mostrar:

Compra aprobada  

En caso contrario:

Compra no aprobada

---

## Práctica 151 — Equipo sin batería suficiente  

**Archivo:** `p151-no-cuenta-con-bateria.php`  

**Alumno:** VELASCO  


Leer el porcentaje de batería de un dispositivo.
Si la batería **no** es mayor o igual a 20, mostrar:

Batería insuficiente  

En caso contrario:

Batería suficiente

---

## Práctica 152 — Acceso por llave o código  

**Archivo:** `p152-acceso-por-llave-o-codigo.php`  

**Alumno:** VILLANUEVA  


Leer si trae llave (`si/no`) y un código.
Si trae llave es `si` **o** el código es igual a `7788` mostrar:

Puerta abierta  

En caso contrario:

Puerta cerrada

---

## Práctica 153 — Código no válido  

**Archivo:** `p153-no-es-codigo-valido.php`  

**Alumno:** VILLANUEVA  


Leer un código.
Si el código **no** es igual a `OK2026` mostrar:

Código inválido  

En caso contrario:

Código válido

---
