export function initAudio() {
  const audio = document.getElementById('bg-music');
  if (!audio) return;

  audio.loop = true;
  audio.volume = 0.5;

  const audioToggle  = document.getElementById('audioToggle');
  const volumeSlider = document.getElementById('volumeSlider');
  let isPlaying = false;

  function toggleAudio() {
    if (isPlaying) {
      audio.pause();
      audioToggle.textContent = '🔈';
      audioToggle.setAttribute('aria-pressed', 'false');
    } else {
      audio.play();
      audioToggle.textContent = '🔊';
      audioToggle.setAttribute('aria-pressed', 'true');
    }
    isPlaying = !isPlaying;
  }

  audioToggle.addEventListener('click', toggleAudio);
  audioToggle.addEventListener('keydown', (e) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      toggleAudio();
    }
  });

  volumeSlider.addEventListener('input', (e) => {
    audio.volume = e.target.value;
  });

  function initAudioStart() {
    audio.play().then(() => {
      isPlaying = true;
      audioToggle.textContent = '🔊';
      audioToggle.setAttribute('aria-pressed', 'true');
    }).catch(() => {/* autoplay blocked */});
    document.removeEventListener('click', initAudioStart);
  }
  document.addEventListener('click', initAudioStart);
}