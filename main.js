import { initLoader } from './loader.js';
import { initAudio } from './audio.js';
import { initTasks } from './tasks.js';
import { initCardEffects } from './card.js';

document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initAudio();
  initTasks();
  initCardEffects();
});