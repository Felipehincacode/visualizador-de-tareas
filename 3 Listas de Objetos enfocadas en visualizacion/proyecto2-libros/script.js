// Array de libros con título, autor y año
let libros = [
    { titulo: "Don Quijote", autor: "Miguel de Cervantes", año: 1605 },
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", año: 1967 },
    { titulo: "El señor de los anillos", autor: "J.R.R. Tolkien", año: 1954 },
    { titulo: "1984", autor: "George Orwell", año: 1949 },
    { titulo: "Orgullo y prejuicio", autor: "Jane Austen", año: 1813 },
    { titulo: "El principito", autor: "Antoine de Saint-Exupéry", año: 1943 }
];

// Función para transformar un libro en formato de texto
function formatearLibro(libro) {
    return `${libro.titulo} (${libro.año}) - ${libro.autor}`;
}

// Función para crear un elemento <li> con el libro formateado
function crearElementoLibro(libro) {
    const li = document.createElement('li');
    li.className = 'book-item';
    
    const textoFormateado = formatearLibro(libro);
    li.innerHTML = `
        <div class="book-info">${textoFormateado}</div>
        <span class="book-year">${libro.año}</span>
    `;
    
    return li;
}

// Función para generar la lista de libros
function generarListaLibros() {
    const lista = document.getElementById('booksList');
    lista.innerHTML = ''; // Limpiar lista
    
    // Transformar cada libro y crear elementos <li>
    libros.forEach(libro => {
        const elementoLibro = crearElementoLibro(libro);
        lista.appendChild(elementoLibro);
    });
    
    actualizarEstadisticas();
    actualizarVistaPrevia();
}

// Función para actualizar estadísticas
function actualizarEstadisticas() {
    const total = libros.length;
    document.getElementById('totalBooks').textContent = `Total: ${total} libros`;
    
    if (total > 0) {
        const años = libros.map(libro => libro.año);
        const masAntiguo = Math.min(...años);
        const masReciente = Math.max(...años);
        
        document.getElementById('oldestBook').textContent = `Más antiguo: ${masAntiguo}`;
        document.getElementById('newestBook').textContent = `Más reciente: ${masReciente}`;
    } else {
        document.getElementById('oldestBook').textContent = 'Más antiguo: -';
        document.getElementById('newestBook').textContent = 'Más reciente: -';
    }
}

// Función para actualizar vista previa del formato
function actualizarVistaPrevia() {
    const preview = document.getElementById('formatPreview');
    
    if (libros.length === 0) {
        preview.innerHTML = 'No hay libros para mostrar';
        preview.className = 'format-preview';
        return;
    }
    
    // Mostrar algunos ejemplos del formato
    const ejemplos = libros.slice(0, 3).map(libro => formatearLibro(libro));
    preview.innerHTML = ejemplos.join('<br>');
    preview.className = 'format-preview has-content';
}

// Función para agregar un libro aleatorio
function agregarLibro() {
    const titulos = [
        "El Aleph", "Rayuela", "Pedro Páramo", "Los miserables", 
        "Crimen y castigo", "Madame Bovary", "Ulises", "Moby Dick"
    ];
    const autores = [
        "Jorge Luis Borges", "Julio Cortázar", "Juan Rulfo", "Victor Hugo",
        "Fiódor Dostoyevski", "Gustave Flaubert", "James Joyce", "Herman Melville"
    ];
    
    const titulo = titulos[Math.floor(Math.random() * titulos.length)];
    const autor = autores[Math.floor(Math.random() * autores.length)];
    const año = Math.floor(Math.random() * (2024 - 1800) + 1800);
    
    const nuevoLibro = { titulo, autor, año };
    libros.push(nuevoLibro);
    
    // Agregar el nuevo elemento a la lista
    const elementoLibro = crearElementoLibro(nuevoLibro);
    document.getElementById('booksList').appendChild(elementoLibro);
    
    // Efecto de animación
    elementoLibro.style.opacity = '0';
    elementoLibro.style.transform = 'translateX(-20px)';
    setTimeout(() => {
        elementoLibro.style.transition = 'all 0.5s ease';
        elementoLibro.style.opacity = '1';
        elementoLibro.style.transform = 'translateX(0)';
    }, 100);
    
    actualizarEstadisticas();
    actualizarVistaPrevia();
}

// Función para ordenar por año
function ordenarPorAño() {
    libros.sort((a, b) => a.año - b.año);
    generarListaLibros();
}

// Función para ordenar por autor
function ordenarPorAutor() {
    libros.sort((a, b) => a.autor.localeCompare(b.autor));
    generarListaLibros();
}

// Función para limpiar la lista
function limpiarLibros() {
    libros = [];
    generarListaLibros();
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Generar lista inicial
    generarListaLibros();
    
    // Event listeners para botones
    document.getElementById('addBook').addEventListener('click', agregarLibro);
    document.getElementById('sortByYear').addEventListener('click', ordenarPorAño);
    document.getElementById('sortByAuthor').addEventListener('click', ordenarPorAutor);
    document.getElementById('clearBooks').addEventListener('click', limpiarLibros);
    
    // Mostrar información en consola
    console.log('Array de libros:', libros);
    console.log('Libros formateados:', libros.map(libro => formatearLibro(libro)));
});

// Función adicional para exportar la lista formateada
function exportarListaFormateada() {
    const listaFormateada = libros.map(libro => formatearLibro(libro));
    console.log('Lista para exportar:', listaFormateada);
    return listaFormateada;
} 