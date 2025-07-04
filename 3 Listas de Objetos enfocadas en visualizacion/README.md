# 🚀 Proyectos de Listas de Objetos - Visualización

Este repositorio contiene tres proyectos HTML/CSS/JS que demuestran diferentes técnicas de manipulación de arrays de objetos con enfoque en visualización.

## 📁 Estructura del Proyecto

```
challenge arrays/
├── proyecto1-contactos/
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── proyecto2-libros/
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── proyecto3-tareas/
│   ├── index.html
│   ├── styles.css
│   └── script.js
└── README.md
```

## 🎯 Proyectos

### 1. 📇 Tarjetas de Contacto (`proyecto1-contactos/`)

**Objetivo:** Recorrer un array de usuarios (con nombre y correo) y crear un array de etiquetas `<div>` que incluyan esa información formateada como tarjeta de contacto.

**Características:**
- Array de objetos con `nombre` y `correo`
- Generación dinámica de tarjetas de contacto
- Diseño responsive con efectos hover
- Funcionalidad para agregar nuevos contactos
- Animaciones suaves

**Funcionalidades:**
- ✅ Visualización de contactos en formato de tarjeta
- ✅ Agregar contactos aleatorios
- ✅ Limpiar toda la lista
- ✅ Enlaces de correo funcionales

### 2. 📚 Biblioteca Virtual (`proyecto2-libros/`)

**Objetivo:** Dado un array de libros con título, autor y año, transforma cada uno en una cadena de texto con formato: "Título (Año) - Autor". Luego imagina que cada una irá dentro de un `<li>`.

**Características:**
- Array de objetos con `titulo`, `autor` y `año`
- Transformación de formato: "Título (Año) - Autor"
- Generación de elementos `<li>` dinámicos
- Sistema de ordenamiento
- Estadísticas de la biblioteca

**Funcionalidades:**
- ✅ Transformación de formato de libros
- ✅ Lista ordenable por año y autor
- ✅ Agregar libros aleatorios
- ✅ Estadísticas de la biblioteca
- ✅ Vista previa del formato

### 3. ✅ Gestor de Tareas (`proyecto3-tareas/`)

**Objetivo:** Tienes una lista de tareas (con descripción y completada). Crea una función que genere una estructura HTML diferente si la tarea está completa o pendiente. Por ejemplo: mostrar un ✅ o ❌ antes del texto.

**Características:**
- Array de objetos con `descripcion` y `completada`
- Estructuras HTML diferentes según el estado
- Visualización separada de tareas completadas y pendientes
- Interactividad completa

**Funcionalidades:**
- ✅ Estructuras HTML diferenciadas por estado
- ✅ Cambio de estado de tareas
- ✅ Eliminación de tareas
- ✅ Estadísticas en tiempo real
- ✅ Animaciones de transición

## 🛠️ Cómo Usar

### Para cada proyecto:

1. **Navega a la carpeta del proyecto:**
   ```bash
   cd proyecto1-contactos/
   # o
   cd proyecto2-libros/
   # o
   cd proyecto3-tareas/
   ```

2. **Abre el archivo HTML en tu navegador:**
   - Doble clic en `index.html`
   - O arrastra el archivo al navegador
   - O usa un servidor local

3. **Interactúa con la aplicación:**
   - Usa los botones para agregar elementos
   - Experimenta con las diferentes funcionalidades
   - Revisa la consola del navegador para ver logs

## 💻 Tecnologías Utilizadas

- **HTML5:** Estructura semántica
- **CSS3:** 
  - Flexbox y Grid para layouts
  - Gradientes y efectos visuales
  - Animaciones y transiciones
  - Diseño responsive
- **JavaScript ES6+:** 
  - Manipulación de arrays
  - Métodos de array (map, filter, forEach)
  - Manipulación del DOM
  - Event listeners

## 🎨 Características de Diseño

- **Diseño Moderno:** Gradientes, sombras y efectos visuales
- **Responsive:** Adaptable a diferentes tamaños de pantalla
- **Interactivo:** Efectos hover y animaciones
- **Accesible:** Colores contrastantes y navegación clara

## 📊 Conceptos Aplicados

### Arrays de Objetos
- Manipulación de arrays con objetos
- Métodos de array (map, filter, forEach, sort)
- Transformación de datos

### DOM Manipulation
- Creación dinámica de elementos
- Modificación de clases CSS
- Event handling

### Visualización de Datos
- Diferentes estructuras HTML según el estado
- Formateo de información
- Presentación visual atractiva

## 🔧 Funciones Principales

### Proyecto 1 - Contactos
- `crearTarjetaContacto(usuario)`: Crea una tarjeta de contacto
- `generarTarjetasContacto()`: Genera todas las tarjetas
- `agregarContacto()`: Agrega un nuevo contacto

### Proyecto 2 - Libros
- `formatearLibro(libro)`: Transforma el formato del libro
- `crearElementoLibro(libro)`: Crea elemento `<li>`
- `generarListaLibros()`: Genera la lista completa

### Proyecto 3 - Tareas
- `crearEstructuraTarea(tarea, index)`: Crea estructura HTML según estado
- `cambiarEstadoTarea(index)`: Cambia el estado de una tarea
- `generarTareas()`: Genera todas las tareas

## 🚀 Próximos Pasos

- Agregar persistencia local (localStorage)
- Implementar filtros avanzados
- Agregar funcionalidad de búsqueda
- Mejorar la accesibilidad
- Agregar tests unitarios

---

**Desarrollado con ❤️ para demostrar técnicas de manipulación de arrays de objetos con enfoque en visualización.** 