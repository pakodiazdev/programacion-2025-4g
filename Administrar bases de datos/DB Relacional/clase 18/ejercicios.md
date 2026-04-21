🏠 [← README](../../../README.md) · ⬅️ [← Clase 17 ejercicios](../clase%2017/ejercicios.md) · 📘 [Resumen](resumen.md)

---

# 📘 Prácticas — Clase 18 (Relacional / PHP & JS)

## 🎯 Objetivo

Codificar un **array de arrays asociativos** (en PHP) / **array de objetos** (en JS) y recorrerlo para mostrar la información de cada elemento en pantalla. La temática cambia por equipo; la estructura del programa es la misma para todos.

## 📌 Lineamiento general

- Declarar el array con **mínimo 5 elementos**
- Cada elemento debe tener **al menos 4 campos** con claves descriptivas
- Recorrer con `foreach` en PHP y con `for` o `forEach` en JavaScript
- Mostrar en pantalla el contenido de cada elemento de forma clara (etiqueta + valor)
- Entrega **doble:** un archivo `.php` y un archivo `.js` (Node.js)
- Commit sugerido: `clase-18: pXXX array-asociativo [entidad]`
- Carpeta de entrega: `dbr/clase-18/`

## 👥 Equipos y práctica asignada

| Equipo | Integrantes | Entidad | Práctica |
|--------|-------------|---------|----------|
| 1  | ALCANTAR · ROMERO | Libros | [p801](#p801) |
| 2  | BALANDRAN · JASSO | Películas | [p802](#p802) |
| 3  | BARAJAS · VELASCO | Videojuegos | [p803](#p803) |
| 4  | BLANCARTE · MONTES | Superhéroes | [p804](#p804) |
| 5  | CORRALEJO · IBARRA | Países | [p805](#p805) |
| 6  | DOMINGUEZ · VELZASCO | Animales | [p806](#p806) |
| 7  | FERNANDEZ · RODRIGUEZ ARRELLANO | Planetas | [p807](#p807) |
| 8  | GALICIA · MORALES | Recetas | [p808](#p808) |
| 9  | HERNANDEZ · JUAREZ | Canciones | [p809](#p809) |
| 10 | MONTIEL · RODRIGUEZ DIAZ | Autos | [p810](#p810) |
| 11 | GALINDO · SANCHEZ · VILLANUEVA _(trío)_ | Deportistas | [p811](#p811) |

---

<a id="p801"></a>
## Práctica p801 — Array de libros · Equipo 1
**Equipo:** ALCANTAR · ROMERO  
**Archivos sugeridos:** `p801-libros.php` / `p801-libros.js`

**Objetivo:** Declarar un array con al menos 5 libros y mostrar los datos de cada uno.

**Campos requeridos por libro:** `titulo`, `autor`, `anio`, `genero`, `paginas`

**Datos de ejemplo:**

| titulo | autor | anio | genero | paginas |
|--------|-------|------|--------|---------|
| Cien años de soledad | Gabriel García Márquez | 1967 | Realismo mágico | 471 |
| El principito | Antoine de Saint-Exupéry | 1943 | Fábula | 96 |
| 1984 | George Orwell | 1949 | Distopía | 328 |
| Don Quijote | Miguel de Cervantes | 1605 | Novela | 863 |
| Harry Potter I | J.K. Rowling | 1997 | Fantasía | 309 |

**Salida esperada (por elemento):**
```
Título:  Cien años de soledad
Autor:   Gabriel García Márquez
Año:     1967
Género:  Realismo mágico
Páginas: 471
---
```

---

<a id="p802"></a>
## Práctica p802 — Array de películas · Equipo 2
**Equipo:** BALANDRAN · JASSO  
**Archivos sugeridos:** `p802-peliculas.php` / `p802-peliculas.js`

**Objetivo:** Declarar un array con al menos 5 películas y mostrar los datos de cada una.

**Campos requeridos por película:** `titulo`, `director`, `anio`, `genero`, `duracion_min`

**Datos de ejemplo:**

| titulo | director | anio | genero | duracion_min |
|--------|----------|------|--------|--------------|
| El padrino | Francis Ford Coppola | 1972 | Drama | 175 |
| Interestelar | Christopher Nolan | 2014 | Sci-Fi | 169 |
| Titanic | James Cameron | 1997 | Romance | 194 |
| El rey león | Roger Allers | 1994 | Animación | 88 |
| Avengers: Endgame | Anthony y Joe Russo | 2019 | Acción | 181 |

**Salida esperada (por elemento):**
```
Título:   El padrino
Director: Francis Ford Coppola
Año:      1972
Género:   Drama
Duración: 175 min
---
```

---

<a id="p803"></a>
## Práctica p803 — Array de videojuegos · Equipo 3
**Equipo:** BARAJAS · VELASCO  
**Archivos sugeridos:** `p803-videojuegos.php` / `p803-videojuegos.js`

**Objetivo:** Declarar un array con al menos 5 videojuegos y mostrar los datos de cada uno.

**Campos requeridos por videojuego:** `titulo`, `desarrollador`, `anio`, `plataforma`, `genero`

**Datos de ejemplo:**

| titulo | desarrollador | anio | plataforma | genero |
|--------|--------------|------|------------|--------|
| The Legend of Zelda: BotW | Nintendo | 2017 | Switch | Aventura |
| Minecraft | Mojang | 2011 | PC/Consolas | Sandbox |
| Grand Theft Auto V | Rockstar Games | 2013 | PS4/Xbox | Acción |
| FIFA 24 | EA Sports | 2023 | PS5 | Deportes |
| Among Us | InnerSloth | 2018 | PC/Móvil | Social |

**Salida esperada (por elemento):**
```
Título:        The Legend of Zelda: BotW
Desarrollador: Nintendo
Año:           2017
Plataforma:    Switch
Género:        Aventura
---
```

---

<a id="p804"></a>
## Práctica p804 — Array de superhéroes · Equipo 4
**Equipo:** BLANCARTE · MONTES  
**Archivos sugeridos:** `p804-superheroes.php` / `p804-superheroes.js`

**Objetivo:** Declarar un array con al menos 5 superhéroes y mostrar los datos de cada uno.

**Campos requeridos por superhéroe:** `nombre`, `universo`, `poder`, `anio_creacion`, `alter_ego`

**Datos de ejemplo:**

| nombre | universo | poder | anio_creacion | alter_ego |
|--------|----------|-------|---------------|-----------|
| Spider-Man | Marvel | Sentido arácnido y trepar muros | 1962 | Peter Parker |
| Batman | DC | Inteligencia y artes marciales | 1939 | Bruce Wayne |
| Wonder Woman | DC | Superfuerza y lazo de la verdad | 1941 | Diana Prince |
| Iron Man | Marvel | Armadura tecnológica avanzada | 1963 | Tony Stark |
| Flash | DC | Velocidad sobrehumana | 1940 | Barry Allen |

**Salida esperada (por elemento):**
```
Nombre:          Spider-Man
Universo:        Marvel
Poder:           Sentido arácnido y trepar muros
Año de creación: 1962
Alter ego:       Peter Parker
---
```

---

<a id="p805"></a>
## Práctica p805 — Array de países · Equipo 5
**Equipo:** CORRALEJO · IBARRA  
**Archivos sugeridos:** `p805-paises.php` / `p805-paises.js`

**Objetivo:** Declarar un array con al menos 5 países y mostrar los datos de cada uno.

**Campos requeridos por país:** `nombre`, `capital`, `continente`, `idioma`, `poblacion_millones`

**Datos de ejemplo:**

| nombre | capital | continente | idioma | poblacion_millones |
|--------|---------|------------|--------|-------------------|
| México | Ciudad de México | América | Español | 130 |
| Brasil | Brasilia | América | Portugués | 215 |
| Japón | Tokio | Asia | Japonés | 125 |
| Alemania | Berlín | Europa | Alemán | 84 |
| Kenia | Nairobi | África | Swahili | 56 |

**Salida esperada (por elemento):**
```
País:       México
Capital:    Ciudad de México
Continente: América
Idioma:     Español
Población:  130 millones
---
```

---

<a id="p806"></a>
## Práctica p806 — Array de animales · Equipo 6
**Equipo:** DOMINGUEZ · VELZASCO  
**Archivos sugeridos:** `p806-animales.php` / `p806-animales.js`

**Objetivo:** Declarar un array con al menos 5 animales y mostrar los datos de cada uno.

**Campos requeridos por animal:** `nombre`, `tipo`, `habitat`, `alimentacion`, `patas`

**Datos de ejemplo:**

| nombre | tipo | habitat | alimentacion | patas |
|--------|------|---------|-------------|-------|
| León | Mamífero | Sabana | Carnívoro | 4 |
| Águila | Ave | Montaña | Carnívoro | 2 |
| Rana | Anfibio | Pantano | Insectívoro | 4 |
| Tiburón | Pez | Océano | Carnívoro | 0 |
| Elefante | Mamífero | Selva | Herbívoro | 4 |

**Salida esperada (por elemento):**
```
Nombre:       León
Tipo:         Mamífero
Hábitat:      Sabana
Alimentación: Carnívoro
Patas:        4
---
```

---

<a id="p807"></a>
## Práctica p807 — Array de planetas · Equipo 7
**Equipo:** FERNANDEZ · RODRIGUEZ ARRELLANO  
**Archivos sugeridos:** `p807-planetas.php` / `p807-planetas.js`

**Objetivo:** Declarar un array con al menos 5 planetas y mostrar los datos de cada uno.

**Campos requeridos por planeta:** `nombre`, `tipo`, `lunas`, `diametro_km`, `distancia_sol_ua`

**Datos de ejemplo:**

| nombre | tipo | lunas | diametro_km | distancia_sol_ua |
|--------|------|-------|-------------|------------------|
| Mercurio | Rocoso | 0 | 4 879 | 0.39 |
| Tierra | Rocoso | 1 | 12 742 | 1.00 |
| Marte | Rocoso | 2 | 6 779 | 1.52 |
| Júpiter | Gaseoso | 95 | 139 820 | 5.20 |
| Saturno | Gaseoso | 146 | 116 460 | 9.58 |

**Salida esperada (por elemento):**
```
Nombre:           Mercurio
Tipo:             Rocoso
Lunas:            0
Diámetro:         4879 km
Distancia al sol: 0.39 UA
---
```

---

<a id="p808"></a>
## Práctica p808 — Array de recetas · Equipo 8
**Equipo:** GALICIA · MORALES  
**Archivos sugeridos:** `p808-recetas.php` / `p808-recetas.js`

**Objetivo:** Declarar un array con al menos 5 recetas de cocina y mostrar los datos de cada una.

**Campos requeridos por receta:** `nombre`, `tipo`, `tiempo_min`, `dificultad`, `ingrediente_principal`

**Datos de ejemplo:**

| nombre | tipo | tiempo_min | dificultad | ingrediente_principal |
|--------|------|-----------|------------|----------------------|
| Tacos de pastor | Platillo | 30 | Media | Cerdo adobado |
| Guacamole | Salsa | 10 | Fácil | Aguacate |
| Chiles en nogada | Platillo | 90 | Difícil | Chile poblano |
| Arroz con leche | Postre | 40 | Fácil | Arroz |
| Sopa de lima | Sopa | 45 | Media | Pollo |

**Salida esperada (por elemento):**
```
Receta:      Tacos de pastor
Tipo:        Platillo
Tiempo:      30 min
Dificultad:  Media
Ingrediente: Cerdo adobado
---
```

---

<a id="p809"></a>
## Práctica p809 — Array de canciones · Equipo 9
**Equipo:** HERNANDEZ · JUAREZ  
**Archivos sugeridos:** `p809-canciones.php` / `p809-canciones.js`

**Objetivo:** Declarar un array con al menos 5 canciones y mostrar los datos de cada una.

**Campos requeridos por canción:** `titulo`, `artista`, `anio`, `genero`, `duracion_seg`

**Datos de ejemplo:**

| titulo | artista | anio | genero | duracion_seg |
|--------|---------|------|--------|--------------|
| Bohemian Rhapsody | Queen | 1975 | Rock | 354 |
| Despacito | Luis Fonsi | 2017 | Reggaeton | 229 |
| Shape of You | Ed Sheeran | 2017 | Pop | 234 |
| Thriller | Michael Jackson | 1982 | Pop | 358 |
| La bicicleta | Carlos Vives | 2016 | Vallenato | 213 |

**Salida esperada (por elemento):**
```
Título:   Bohemian Rhapsody
Artista:  Queen
Año:      1975
Género:   Rock
Duración: 354 seg
---
```

---

<a id="p810"></a>
## Práctica p810 — Array de autos · Equipo 10
**Equipo:** MONTIEL · RODRIGUEZ DIAZ  
**Archivos sugeridos:** `p810-autos.php` / `p810-autos.js`

**Objetivo:** Declarar un array con al menos 5 autos y mostrar los datos de cada uno.

**Campos requeridos por auto:** `marca`, `modelo`, `anio`, `color`, `puertas`

**Datos de ejemplo:**

| marca | modelo | anio | color | puertas |
|-------|--------|------|-------|---------|
| Toyota | Corolla | 2022 | Blanco | 4 |
| Nissan | Tsuru | 2017 | Gris | 4 |
| Volkswagen | Beetle | 2019 | Azul | 2 |
| Ford | Mustang | 2021 | Rojo | 2 |
| Chevrolet | Spark | 2020 | Negro | 4 |

**Salida esperada (por elemento):**
```
Marca:   Toyota
Modelo:  Corolla
Año:     2022
Color:   Blanco
Puertas: 4
---
```

---

<a id="p811"></a>
## Práctica p811 — Array de deportistas · Equipo 11 _(trío)_
**Equipo:** GALINDO · SANCHEZ · VILLANUEVA  
**Archivos sugeridos:** `p811-deportistas.php` / `p811-deportistas.js`

**Objetivo:** Declarar un array con al menos 5 deportistas y mostrar los datos de cada uno.

**Campos requeridos por deportista:** `nombre`, `deporte`, `pais`, `titulos`, `edad`

**Datos de ejemplo:**

| nombre | deporte | pais | titulos | edad |
|--------|---------|------|---------|------|
| Lionel Messi | Fútbol | Argentina | 8 | 37 |
| Serena Williams | Tenis | EE.UU. | 23 | 42 |
| Usain Bolt | Atletismo | Jamaica | 11 | 38 |
| Michael Phelps | Natación | EE.UU. | 28 | 39 |
| Simone Biles | Gimnasia | EE.UU. | 37 | 27 |

**Salida esperada (por elemento):**
```
Nombre:  Lionel Messi
Deporte: Fútbol
País:    Argentina
Títulos: 8
Edad:    37 años
---
```
