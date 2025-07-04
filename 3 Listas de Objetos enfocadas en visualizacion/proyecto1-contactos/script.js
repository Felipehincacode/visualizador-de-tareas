// Array de usuarios con nombre y correo
let usuarios = [
    { nombre: "Ana García", correo: "ana.garcia@email.com" },
    { nombre: "Carlos López", correo: "carlos.lopez@email.com" },
    { nombre: "María Rodríguez", correo: "maria.rodriguez@email.com" },
    { nombre: "Juan Pérez", correo: "juan.perez@email.com" },
    { nombre: "Laura Martínez", correo: "laura.martinez@email.com" }
];

// Función para crear una tarjeta de contacto
function crearTarjetaContacto(usuario) {
    const tarjeta = document.createElement('div');
    tarjeta.className = 'contact-card';
    
    tarjeta.innerHTML = `
        <h3>${usuario.nombre}</h3>
        <p>📧 <a href="mailto:${usuario.correo}" class="email">${usuario.correo}</a></p>
    `;
    
    return tarjeta;
}

// Función para generar todas las tarjetas de contacto
function generarTarjetasContacto() {
    const contenedor = document.getElementById('contactCards');
    contenedor.innerHTML = ''; // Limpiar contenedor
    
    // Recorrer el array de usuarios y crear tarjetas
    usuarios.forEach(usuario => {
        const tarjeta = crearTarjetaContacto(usuario);
        contenedor.appendChild(tarjeta);
    });
}

// Función para agregar un nuevo contacto
function agregarContacto() {
    const nombres = ["Sofía", "Diego", "Valentina", "Andrés", "Camila", "Miguel", "Isabella", "Daniel"];
    const apellidos = ["Hernández", "González", "Torres", "Silva", "Vargas", "Castro", "Morales", "Reyes"];
    const dominios = ["gmail.com", "hotmail.com", "yahoo.com", "outlook.com"];
    
    const nombre = `${nombres[Math.floor(Math.random() * nombres.length)]} ${apellidos[Math.floor(Math.random() * apellidos.length)]}`;
    const correo = `${nombre.toLowerCase().replace(' ', '.')}@${dominios[Math.floor(Math.random() * dominios.length)]}`;
    
    const nuevoUsuario = { nombre, correo };
    usuarios.push(nuevoUsuario);
    
    // Crear y agregar la nueva tarjeta
    const tarjeta = crearTarjetaContacto(nuevoUsuario);
    document.getElementById('contactCards').appendChild(tarjeta);
    
    // Efecto de animación para la nueva tarjeta
    tarjeta.style.opacity = '0';
    tarjeta.style.transform = 'translateY(20px)';
    setTimeout(() => {
        tarjeta.style.transition = 'all 0.5s ease';
        tarjeta.style.opacity = '1';
        tarjeta.style.transform = 'translateY(0)';
    }, 100);
}

// Función para limpiar todas las tarjetas
function limpiarTodo() {
    usuarios = [];
    document.getElementById('contactCards').innerHTML = '';
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Generar tarjetas iniciales
    generarTarjetasContacto();
    
    // Event listener para agregar contacto
    document.getElementById('addContact').addEventListener('click', agregarContacto);
    
    // Event listener para limpiar todo
    document.getElementById('clearAll').addEventListener('click', limpiarTodo);
    
    // Mostrar información en consola
    console.log('Array de usuarios:', usuarios);
    console.log('Tarjetas generadas:', document.querySelectorAll('.contact-card').length);
});

// Función adicional para mostrar estadísticas
function mostrarEstadisticas() {
    console.log(`Total de contactos: ${usuarios.length}`);
    console.log('Usuarios:', usuarios);
} 