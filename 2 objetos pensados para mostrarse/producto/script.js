// Objeto simple
const producto = {
    nombre: "Laptop",
    precio: 500,
    stock: 10
};

// Obtener el elemento ul e inyectar el HTML
const lista = document.getElementById('propertyList');
lista.innerHTML = `
    <li>nombre: ${producto.nombre}</li>
    <li>precio: ${producto.precio}</li>
    <li>stock: ${producto.stock}</li>
`; 