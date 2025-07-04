// ===============================
// Frases inspiradoras de programación
// ===============================
const coderQuotes = [
  "El código es poesía escrita con lógica. — Anónimo",
  "Los programadores de hoy son los magos del mañana. — Gabe Newell",
  "Primero resuelve el problema. Después, escribe el código. — John Johnson",
  "La programación no trata sobre lo que sabes; es sobre lo que puedes descubrir. — Chris Pine",
  "El mejor código es el que nunca se escribe. — Jeff Atwood",
  "El código limpio siempre parece escrito por alguien que se preocupa. — Robert C. Martin",
  "El software es como la entropía: difícil de atrapar, pero no dejes de intentarlo. — Norman Augustine",
  "Cualquier código tuyo que no hayas mirado en seis meses o más, es como si lo hubiera escrito otra persona. — Eagleson",
  "La simplicidad es la sofisticación definitiva. — Leonardo da Vinci",
  "Programar es el arte de decirle a otra persona lo que quieres que la computadora haga. — Donald Knuth",
  "Los detalles importan. Vale la pena esperar para hacerlo bien. — Steve Jobs",
  "En un mundo bien ordenado, si creas un producto bueno y trabajas duro, puedes tener éxito. — Rand Fishkin",
  "Escribe código como si tuvieras que mantenerlo por el resto de tu vida. — Anónimo",
  "El código es como el humor. Cuando tienes que explicarlo, es malo. — Cory House"
];

// ===============================
// Variables de estado y timers
// ===============================
let quoteInterval;
let quoteIndex = Math.floor(Math.random() * coderQuotes.length);
let arrowTimeout, arrowTextTimeout;

// Referencia global para poder limpiar el listener de parallax
let parallaxMouseMove;

// ===============================
// Estado del loader para interacciones reversibles

// -------- Animaciones de introducción y parallax --------
function introAnimations() {
  // Manejar la animación de entrada
  setTimeout(() => {
    document.querySelector('.white-flash').style.opacity = 0;
    // Iniciar la animación de texto tipado después del destello
    setTimeout(() => typeText('task\'s'), 500);
  }, 1500);

  // Función para escribir el texto carácter por carácter
  function typeText(text) {
    const typingContainer = document.getElementById('typing-container');
    if (!typingContainer) return;

    let index = 0;
    const chars = text.split('');

    // Limpiar contenedor
    typingContainer.innerHTML = '';

    // Función para añadir cada carácter con retraso
    function addChar() {
      if (index < chars.length) {
        const charSpan = document.createElement('span');
        charSpan.className = 'typed-char';
        charSpan.style.animationDelay = `${index * 0.05}s`;
        charSpan.textContent = chars[index];
        typingContainer.appendChild(charSpan);
        index++;
        setTimeout(addChar, 150);
      } else {
        // Añadir cursor al final
        const cursor = document.createElement('span');
        cursor.className = 'cursor';
        typingContainer.appendChild(cursor);

        // Iniciar efecto parallax después de completar la escritura
        setTimeout(initParallaxEffect, 500);

        // Mostrar la primera cita
        setTimeout(() => {
          const quoteBox = document.getElementById('nolan-quotes');
          if (quoteBox) {
            // Iniciar la secuencia de citas
            startQuotes();
          }
        }, 1000);
      }
    }

    // Iniciar proceso de tipado
    addChar();
  }

  // Efecto de parallax para el texto
  function initParallaxEffect() {
    const speedText = document.getElementById('speed-text');
    const typingContainer = document.getElementById('typing-container');

    if (speedText && typingContainer) {
      // Convertir el contenedor de texto en parallax
      typingContainer.classList.add('parallax-text');

      // Añadir efecto de resplandor
      const glowEffect = document.createElement('div');
      glowEffect.className = 'glow-effect';
      speedText.appendChild(glowEffect);

      // Efecto al mover el mouse sobre el texto
      parallaxMouseMove = function(e) {
        // Cálculos para parallax basado en posición del mouse
        const moveX = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
        const moveY = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);

        // Parallax para el texto principal
        typingContainer.style.setProperty('--rotate-y', `${moveX * 15}deg`);
        typingContainer.style.setProperty('--rotate-x', `${moveY * -10}deg`);
        typingContainer.style.setProperty('--translate-z', `${Math.abs(moveX * moveY) * 30}px`);

        // Resplandor más intenso con movimiento
        const intensity = Math.sqrt(moveX * moveX + moveY * moveY);
        glowEffect.style.setProperty('--glow-opacity', 0.2 + intensity * 0.3);
      };
      document.addEventListener('mousemove', parallaxMouseMove);

      // Efectos al hacer clic
      speedText.addEventListener('click', function() {
        // Efecto de pulsación
        typingContainer.style.transform = 'scale(0.95) translateZ(30px)';
        glowEffect.style.setProperty('--glow-opacity', '0.8');

        // Restablecer después de 500ms
        setTimeout(() => {
          typingContainer.style.removeProperty('transform');
          glowEffect.style.removeProperty('--glow-opacity');
        }, 500);
      });
    }
  }
}

let loaderHidden = false; // <- NUEVO: indica si el loader está oculto

// ===============================
// Esperar a que el DOM cargue
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById('loader');
  const padre = document.querySelector('.padre');
  const quoteBox = document.getElementById('nolan-quotes');
  const arrow = document.querySelector('.loader-arrow-glow');

  // Llamamos a la animación de introducción (ahora función independiente)
  introAnimations();

  // ===============================
  // Audio Setup
  // ===============================
  const audio = document.getElementById('bg-music');
  audio.loop = true;
  audio.volume = 0.5; // Volumen al 50%
  let isPlaying = false;

  // Controles de audio
  const audioToggle = document.getElementById('audioToggle');
  const volumeSlider = document.getElementById('volumeSlider');

  audioToggle.addEventListener('click', () => {
    if (isPlaying) {
      audio.pause();
      audioToggle.textContent = '🔈';
    } else {
      audio.play();
      audioToggle.textContent = '🔊';
    }
    isPlaying = !isPlaying;
  });

  volumeSlider.addEventListener('input', (e) => {
    audio.volume = e.target.value;
  });

  // Función para iniciar música con interacción del usuario
  function initAudio() {
    audio.play().then(() => {
      isPlaying = true;
      audioToggle.textContent = '🔊';
    }).catch(err => console.log('Audio autoplay prevented'));
    document.removeEventListener('click', initAudio);
  }
  document.addEventListener('click', initAudio);

  // ===============================
  // Funciones: Citas y flecha
  // ===============================
  function showQuote(idx) {
    if (quoteBox) {
      // Ocultar texto actual
      quoteBox.style.opacity = 0;

      setTimeout(() => {
        // Preparar para efecto de tipeo
        quoteBox.innerHTML = '';
        const quote = coderQuotes[idx];

        // Mostrar el contenedor
        quoteBox.style.opacity = 1;

        // Efecto de tipeo letra por letra más rápido
        let charIndex = 0;
        const typeInterval = setInterval(() => {
          if (charIndex < quote.length) {
            quoteBox.textContent += quote.charAt(charIndex);
            charIndex++;
          } else {
            clearInterval(typeInterval);
          }
        }, 15); // Velocidad de tipeo más rápida
      }, 200);
    }
    quoteInterval = null;
  }

  function startQuotes() {
    if (!quoteBox) return;
    showQuote(quoteIndex);
    quoteInterval = setInterval(() => {
      quoteIndex = (quoteIndex + 1) % coderQuotes.length;
      showQuote(quoteIndex);
    }, 8000); // Más tiempo para leer cada frase
  }

  // Detiene la rotación de citas y limpia el intervalo para evitar fugas de memoria
  function stopQuotes() {
    if (quoteInterval) {
      clearInterval(quoteInterval);
      quoteInterval = null;
    }
  }

  function setupArrowTimers() {
    if (!arrow) return;
    // Rebote a los 10 s
    arrowTimeout = setTimeout(() => {
      arrow.classList.add('arrow-bounce');
    }, 10000);
    // Reemplazar flecha por texto a los 20 s
    arrowTextTimeout = setTimeout(() => {
      arrow.style.display = 'none';
      const txt = document.createElement('div');
      txt.id = 'arrow-text';
      txt.textContent = 'haz scroll cuando desees';
      txt.className = 'arrow-text-minimal';
      loader.appendChild(txt);
    }, 20000);
  }

  // ===============================
  // Funciones para mostrar / ocultar el loader (robustas y reversibles)
  // ===============================
  function hideLoader() {
    if (loaderHidden) return;
    loader.classList.add('inactive');
    padre.classList.remove('hidden-on-load');
    padre.classList.add('visible-on-load');
    loaderHidden = true;
    stopQuotes();
  }

  function showLoader() {
    if (!loaderHidden) return;
    loader.classList.remove('inactive');
    padre.classList.remove('visible-on-load');
    padre.classList.add('hidden-on-load');
    loaderHidden = false;
    startQuotes();
    // Reiniciar flecha y texto tras re-aparecer
    if (arrow) {
      arrow.style.display = '';
      arrow.classList.remove('arrow-bounce');
    }
    const arrowText = document.getElementById('arrow-text');
    if (arrowText) arrowText.remove();
    clearTimeout(arrowTimeout);
    clearTimeout(arrowTextTimeout);
    setupArrowTimers();
  }

  // ===============================
  // Listeners de interacción (scroll + teclado) con reversibilidad
  // ===============================
  function handleScroll() {
    const y = window.scrollY;
    if (!loaderHidden && y > 10) {
      hideLoader();
    } else if (loaderHidden && y === 0) {
      showLoader();
    }
  }

  function handleKey(e) {
    const key = e.key;
    if (!loaderHidden && (key === ' ' || key === 'ArrowDown')) {
      hideLoader();
    } else if (loaderHidden && key === 'ArrowUp') {
      showLoader();
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('keydown', handleKey);

  // ===============================
  // INICIALIZACIÓN
  // ===============================
  startQuotes();   // Iniciar rotación de citas
  setupArrowTimers(); // Configurar flecha / texto

  // ===============================
  // Resto de la lógica de la aplicación
  // ===============================
  const card = document.querySelector('.tarjeta');
  const cardInner = document.querySelector('.tarjeta-inner');
  const titulo = document.getElementById('titulo');
  const descripcion = document.getElementById('descripcion');
  const estatus = document.getElementById('estatus');
  const link = document.getElementById('link');
  const listaTareas = document.getElementById('lista-tareas');

  // Efecto Glow dinámico con el cursor
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);
  });

  // Obtener tareas desde json-server
  fetch('/tasks')
    .then(res => res.json())
    .then(data => {
      data.forEach(tarea => {
        const li = document.createElement('li');
        li.textContent = tarea.title;
        li.addEventListener('click', () => {
          titulo.textContent = tarea.title;
          descripcion.textContent = tarea.descripcion;
          estatus.textContent = tarea.terminado ? '✅ Terminada' : '⏳ Pendiente';
          link.href = tarea.link;
          link.textContent = 'Ver tarea';
        });
        listaTareas.appendChild(li);
      });
    })
    .catch(err => console.error('Error cargando tareas:', err));

  // Tilt 3D en la tarjeta
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * -10;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0deg) rotateY(0deg)';
  });

  // Blur durante la transición (si alguna)
  cardInner.addEventListener('transitionstart', () => {
    cardInner.style.setProperty('--blur', '6px');
  });
  cardInner.addEventListener('transitionend', () => {
    cardInner.style.setProperty('--blur', '0px');
  });

  // ===============================
  // LIMPIEZA de listeners para evitar fugas cuando se abandone la página
  // ===============================
  window.addEventListener('beforeunload', () => {
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('keydown', handleKey);
    if (parallaxMouseMove) {
      document.removeEventListener('mousemove', parallaxMouseMove);
    }
  });
});
