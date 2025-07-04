// Obtener referencias a los elementos del DOM que vamos a modificar
let nombre = document.getElementById("name");
let edad = document.getElementById("age");
let ocupacion = document.getElementById("Ocupacion");
let foto = document.getElementById("foto");

// Array de objetos que contiene la información de todos los perfiles
let members = [
    {
        name: "Juan",
        age: 20,
        ocupacion: "Desarrollador",
        img: "assets/img/1.jpeg"
    },
    {
        name: "Pedro",
        age: 25,
        ocupacion: "Ingeniero",
        img: "assets/img/2.jpeg"
    },
    {
        name: "Maria",
        age: 30,
        ocupacion: "Diseñadora",
        img: "assets/img/3.jpeg"
    },
    {
        name: "Ana",
        age: 22,
        ocupacion: "Diseñadora",
        img: "assets/img/4.jpeg"
    }
];

// Función que se ejecuta cuando el usuario selecciona un perfil en el select
function selectProfile(index) {
    // Si no hay selección (opción por defecto), no hacer nada
    if (index === "") return;
    parseInt(index);
    // Convertir el índice a número y obtener el perfil seleccionado
    const member = members[index];
    // Actualizar el contenido de la tarjeta con la información del perfil
    nombre.textContent = member.name;
    edad.textContent = member.age;
    ocupacion.textContent = member.ocupacion;
    foto.src = member.img;
}

let profile_img = [
    {
        img: "assets/img/1.jpeg"
    },
    {
        img: "assets/img/2.jpeg"
    },
    
]

