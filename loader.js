// Loader / Intro related functionality
export function initLoader() {
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
  // Variables de estado
  // ===============================
  let quoteInterval;
  let quoteIndex = Math.floor(Math.random() * coderQuotes.length);
  let arrowTimeout, arrowTextTimeout;
  let loaderHidden = false;
  let parallaxMouseMove;

  // Elementos del DOM
  const loader   = document.getElementById('loader');
  const padre    = document.querySelector('.padre');
  const quoteBox = document.getElementById('nolan-quotes');
  const arrow    = document.querySelector('.loader-arrow-glow');

  if (!loader) return; // seguridad

  // ===============================
  // Animación de entrada + Parallax
  // ===============================
  function typeText(text) {
    const typingContainer = document.getElementById('typing-container');
    if (!typingContainer) return;

    typingContainer.innerHTML = '';
    let index = 0;
    const chars = text.split('');

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
        const cursor = document.createElement('span');
        cursor.className = 'cursor';
        typingContainer.appendChild(cursor);

        setTimeout(initParallaxEffect, 500);

        // iniciar la rotación de frases un poco después
        setTimeout(startQuotes, 1000);
      }
    }
    addChar();
  }

  function initParallaxEffect() {
    const speedText       = document.getElementById('speed-text');
    const typingContainer = document.getElementById('typing-container');
    if (!speedText || !typingContainer) return;

    typingContainer.classList.add('parallax-text');

    const glowEffect = document.createElement('div');
    glowEffect.className = 'glow-effect';
    speedText.appendChild(glowEffect);

    parallaxMouseMove = (e) => {
      const moveX = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
      const moveY = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
      typingContainer.style.setProperty('--rotate-y', `${moveX * 15}deg`);
      typingContainer.style.setProperty('--rotate-x', `${moveY * -10}deg`);
      typingContainer.style.setProperty('--translate-z', `${Math.abs(moveX * moveY) * 30}px`);
      const intensity = Math.sqrt(moveX * moveX + moveY * moveY);
      glowEffect.style.setProperty('--glow-opacity', 0.2 + intensity * 0.3);
    };
    document.addEventListener('mousemove', parallaxMouseMove);
  }

  function introAnimations() {
    setTimeout(() => {
      const flash = document.querySelector('.white-flash');
      if (flash) flash.style.opacity = 0;
      setTimeout(() => typeText("task's"), 500);
    }, 1500);
  }

  // ===============================
  // Frases
  // ===============================
  function showQuote(idx) {
    if (!quoteBox) return;
    quoteBox.style.opacity = 0;
    setTimeout(() => {
      quoteBox.innerHTML = '';
      const quote = coderQuotes[idx];
      quoteBox.style.opacity = 1;
      let ci = 0;
      const type = setInterval(() => {
        if (ci < quote.length) {
          quoteBox.textContent += quote.charAt(ci);
          ci++;
        } else {
          clearInterval(type);
        }
      }, 15);
    }, 200);
  }

  function startQuotes() {
    if (!quoteBox) return;
    showQuote(quoteIndex);
    quoteInterval = setInterval(() => {
      quoteIndex = (quoteIndex + 1) % coderQuotes.length;
      showQuote(quoteIndex);
    }, 8000);
  }

  function stopQuotes() {
    if (quoteInterval) {
      clearInterval(quoteInterval);
      quoteInterval = null;
    }
  }

  // ===============================
  // Flecha y timers
  // ===============================
  function setupArrowTimers() {
    if (!arrow) return;
    arrowTimeout = setTimeout(() => arrow.classList.add('arrow-bounce'), 10000);
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
  // Mostrar / ocultar loader
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
  // Listeners
  // ===============================
  function handleScroll() {
    const y = window.scrollY;
    if (!loaderHidden && y > 10) hideLoader();
    else if (loaderHidden && y === 0) showLoader();
  }

  function handleKey(e) {
    if (!loaderHidden && (e.key === ' ' || e.key === 'ArrowDown')) hideLoader();
    else if (loaderHidden && e.key === 'ArrowUp') showLoader();
  }

  // Iniciar
  introAnimations();
  setupArrowTimers();
  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('keydown', handleKey);

  // Limpieza en caso de recargar / salir
  window.addEventListener('beforeunload', () => {
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('keydown', handleKey);
    if (parallaxMouseMove) document.removeEventListener('mousemove', parallaxMouseMove);
  });
}