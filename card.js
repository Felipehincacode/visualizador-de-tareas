export function initCardEffects() {
  const card      = document.querySelector('.tarjeta');
  const cardInner = document.querySelector('.tarjeta-inner');
  if (!card || !cardInner) return;

  // Glow dinámico con el cursor
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);
  });

  // Tilt 3D
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

  // Blur durante transiciones internas
  cardInner.addEventListener('transitionstart', () => {
    cardInner.style.setProperty('--blur', '6px');
  });
  cardInner.addEventListener('transitionend', () => {
    cardInner.style.setProperty('--blur', '0px');
  });
}