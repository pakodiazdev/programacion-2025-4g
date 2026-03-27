🏠 [← README](../../../README.md) · ⬅️ [← Clase 17](../clase%2017/resumen.md) · Clase 18 · [Clase 19 →](../clase%2019/resumen.md) ➡️ · 🧪 [Ejercicios](ejercicios.md)

---

# Clase 18 — Arrays asociativos y JSON en PHP

**Fecha:** 23-abril-2026
**Materia:** Bases de datos relacionales

---

# 🎯 Objetivo de la sesión

Aprender a trabajar con datos estructurados en PHP usando arrays asociativos (que tienen claves descriptivas en lugar de índices numéricos) y JSON (formato de intercambio de datos). Estos conceptos son fundamentales para conectar a MySQL, donde cada fila se representa como array asociativo.

---

# 🧠 Parte 1: Arrays asociativos en PHP

## De array indexado a asociativo

Ya conoces arrays indexados (con números):

```php
<?php

$frutas = ['manzana', 'pera', 'uva'];
echo $frutas[0];  // manzana
```

Un **array asociativo** usa **claves descriptivas** en lugar de números:

```php
<?php

$alumno = ['nombre' => 'Ana', 'edad' => 17, 'promedio' => 9.5];
echo $alumno['nombre'];   // Ana
echo $alumno['edad'];     // 17
echo $alumno['promedio']; // 9.5
```

## Declarar, acceder y modificar

```php
<?php

$producto = [
    'nombre'     => 'Laptop',
    'precio'     => 15000,
    'stock'      => 5,
    'disponible' => true,
];

// Acceder
echo $producto['nombre'] . "\n";       // Laptop
echo $producto['precio'] . "\n";       // 15000

// Modificar
$producto['precio'] = 14500;
$producto['stock'] = $producto['stock'] - 1;

// Agregar campo nuevo
$producto['descuento'] = 10;
```

## Recorrer con foreach

```php
<?php

$producto = [
    'nombre'     => 'Laptop',
    'precio'     => 15000,
    'stock'      => 5,
    'disponible' => true,
];

foreach ($producto as $clave => $valor) {
    echo $clave . ": " . $valor . "\n";
}

// Salida:
// nombre: Laptop
// precio: 15000
// stock: 5
// disponible: 1
```

Note que `disponible` (boolean true) se imprime como `1` porque `true` en string es "1".

## Array de arrays asociativos (tabla de datos)

Cuando tienes múltiples registros:

```php
<?php

$alumnos = [
    ['nombre' => 'Ana',  'promedio' => 9.5],
    ['nombre' => 'Luis', 'promedio' => 7.2],
    ['nombre' => 'María','promedio' => 8.8],
];

for ($i = 0; $i < count($alumnos); $i++) {
    echo $alumnos[$i]['nombre'] . ": " . $alumnos[$i]['promedio'] . "\n";
}

// O con foreach (más elegante):
foreach ($alumnos as $alumno) {
    echo $alumno['nombre'] . ": " . $alumno['promedio'] . "\n";
}

// Salida:
// Ana: 9.5
// Luis: 7.2
// María: 8.8
```

## 🔗 Conexión con MySQL (recuadro destacado)

> **Dato importante:** Cuando uses `mysqli_fetch_assoc()` en próximas clases para leer datos de MySQL, vas a recibir exactamente esto: un array asociativo donde las claves son los nombres de las columnas de tu tabla.
>
> Por ejemplo, si tu tabla tiene columnas `nombre`, `edad`, `promedio`, obtendrás:
> ```php
> ['nombre' => 'Ana', 'edad' => 17, 'promedio' => 9.5]
> ```
>
> **Lo que aprendes hoy ES el formato en el que PHP habla con MySQL.** No hay conversión mágica; MySQL devuelve datos exactamente como arrays asociativos.

---

# 🧠 Parte 2: JSON en PHP

## ¿Qué es JSON?

**JSON** = JavaScript Object Notation. Es un formato de texto estándar para representar datos estructurados. Es legible para humanos y máquinas, y es el formato universal para intercambiar datos entre sistemas.

Ejemplo:
```json
{
    "nombre": "Ana",
    "edad": 17,
    "promedio": 9.5
}
```

## json_encode: Array → JSON

Convierte un array PHP en una cadena de texto JSON:

```php
<?php

$alumno = ['nombre' => 'Ana', 'edad' => 17, 'promedio' => 9.5];

$json = json_encode($alumno);
echo $json . "\n";
// {"nombre":"Ana","edad":17,"promedio":9.5}
```

Con formato legible (pretty print):

```php
<?php

$alumno = ['nombre' => 'Ana', 'edad' => 17, 'promedio' => 9.5];

echo json_encode($alumno, JSON_PRETTY_PRINT) . "\n";
// {
//     "nombre": "Ana",
//     "edad": 17,
//     "promedio": 9.5
// }
```

## json_decode: JSON → Array

Convierte una cadena JSON de vuelta a array asociativo:

```php
<?php

$json = '{"nombre":"Ana","edad":17,"promedio":9.5}';

// ⚠️ CRÍTICO: El segundo parámetro true convierte a array
$array = json_decode($json, true);  // true = array asociativo
echo $array['nombre'] . "\n";       // Ana
echo $array['edad'] . "\n";         // 17
```

**Importante:** Sin el segundo parámetro `true`, devuelve un **objeto**, no un array:

```php
<?php

$json = '{"nombre":"Ana","edad":17,"promedio":9.5}';

// Sin true = devuelve objeto stdClass
$objeto = json_decode($json);
echo $objeto->nombre . "\n";  // Ana (usa flecha ->, no corchetes [])
```

En la mayoría de casos quieres el `true` para obtener arrays:

```php
$array = json_decode($json, true);  // ✅ Esto
```

## JSON anidado (array de objetos)

```php
<?php

$alumnos = [
    ['nombre' => 'Ana', 'promedio' => 9.5],
    ['nombre' => 'Luis', 'promedio' => 7.2],
];

$json = json_encode($alumnos, JSON_PRETTY_PRINT);
echo $json;

// [
//     {
//         "nombre": "Ana",
//         "promedio": 9.5
//     },
//     {
//         "nombre": "Luis",
//         "promedio": 7.2
//     }
// ]
```

## 🔗 Conexión con MongoDB (recuadro destacado)

> **Dato importante:** Un documento de MongoDB es exactamente un objeto JSON con un campo `_id` añadido automáticamente.
>
> Cuando en próximas clases hagan consultas a MongoDB desde Node.js, van a recibir exactamente este formato JSON. **No hay conversión de formatos:** MongoDB habla JSON de forma nativa.
>
> Lo que aprendes de JSON hoy es el formato universal en el que MongoDB comunica sus datos. Es el puente entre MySQL (arrays asociativos en PHP) y MongoDB (objetos JSON en JavaScript).

---

# 🎯 Diagrama de equivalencia: Datos en diferentes sistemas

```mermaid
graph LR
    A["Array asociativo PHP\n['nombre'=>'Ana','edad'=>17]"]
    B["JSON\n{\"nombre\":\"Ana\",\"edad\":17}"]
    C["Fila de tabla MySQL\nnombre='Ana', edad=17"]
    D["Documento MongoDB\n{_id:..., nombre:'Ana', edad:17}"]

    A <-->|json_encode / json_decode| B
    A <-->|mysqli_fetch_assoc| C
    B <-->|mismo formato| D
```

- **A (PHP array asociativo):** lo que mantienes en memoria en PHP
- **C (MySQL):** cómo se almacenan los datos en la base de datos
- **B (JSON):** cómo se intercambian los datos por la red o entre sistemas
- **D (MongoDB):** cómo MongoDB almacena datos (idéntico a JSON)

Todas estos formatos representan lo **mismo**, solo con diferentes "ropajes".

---

# 📌 Conclusión

- **Array asociativo** es como una tabla con columnas: `['columna' => valor]`
- **JSON** es el formato estándar de intercambio de datos: `{"columna":"valor"}`
- `json_encode()` convierte array a JSON; `json_decode($json, true)` convierte JSON a array
- Cuando conectes a **MySQL**, recibirás datos como arrays asociativos
- Cuando uses **MongoDB**, intercambiarás datos como JSON
- Estos tres conceptos (array asoc, JSON, datos MySQL) son **el mismo objeto visto desde ángulos diferentes**

Hoy aprendes el lenguaje universal de los datos. A partir de próximas clases, todo lo que leas de la base de datos vendrá en estos formatos.
