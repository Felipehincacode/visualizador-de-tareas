let contenedor = document.getElementById('container');

const colores = ["red", "blue", "gray", "yellow"];

colores.forEach(element => {
  contenedor.innerHTML += `<div class="box"> El color</span> favorito tuyo es <span style="color:${element}"> ${element}.</span> </div> <br>`;
});



let frasesdom = document.getElementById('frases')

const frases = ["La cosa más difícil es conocernos a nosotros mismos; la más fácil es hablar mal de los demás",
                "La peor lucha es la que no se hace", " No lastimes a los demás con lo que te causa dolor a ti mismo",
                "Exígete mucho a ti mismo y espera poco de los demás. Así te ahorrarás disgustos", "Nuestra vida siempre expresa el resultado de nuestros pensamientos dominantes"
];


frases.forEach(element => {

    frasesdom.innerHTML += `<div class="box">${element}</div>`
}
)



let numeros = [1,2,3,4,5,6,7,8,9]

let numerodom = document.getElementById('numeros')

numeros.forEach(element =>{
    numerodom.innerHTML += `<ul> <li> ${element} </li> </ul> `
})
