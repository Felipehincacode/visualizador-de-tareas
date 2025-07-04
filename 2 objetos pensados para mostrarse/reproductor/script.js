let songInfo = document.querySelector('.song-info');
let songTitle = document.querySelector('.song-title');
let artist = document.querySelector('.artist');
let album = document.querySelector('.album');
let duration = document.querySelector('.duration');
// Buttons
const nextBtn = document.querySelector('.next-btn');

// Control del índice de la canción actual
let currentSongIndex = 0;

let canciones =[
    {title: "creep", 
        artist: "radiohead", 
        album: "ok computer", 
        duration: "2:20"},
    {title: "Paint in black",
        artist: "black sabbath",
        album: "paranoid",
        duration: "4:20"},
    {title: "let down",
        artist: "radiohead",
        album: "ok computer",
        duration: "2:30"},
    {title: "killing in the name",
        artist: "rage against the machine",
        album: "rage against the machine",
        duration: "3:20"},
    {title: "Iron man",
        artist: "black sabbath",
        album: "paranoid",
        duration: "4:20"},
]

function playSong(song){
    songTitle.textContent = song.title;
    artist.textContent = song.artist;
    album.textContent = song.album;
    duration.textContent = song.duration;
}

// Función para reproducir la siguiente canción
function nextSong() {
    currentSongIndex++;
    // Si llegamos al final de la lista, volvemos al principio
    if (currentSongIndex >= canciones.length) {
        currentSongIndex = 0;
    }
    playSong(canciones[currentSongIndex]);
}

// Event listener para el botón next
nextBtn.addEventListener('click', nextSong);

// Iniciar con la primera canción
playSong(canciones[currentSongIndex]);


    