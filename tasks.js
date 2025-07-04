export function initTasks() {
  const titulo       = document.getElementById('titulo');
  const descripcion  = document.getElementById('descripcion');
  const estatus      = document.getElementById('estatus');
  const link         = document.getElementById('link');
  const listaTareas  = document.getElementById('lista-tareas');
  if (!listaTareas) return;

  fetch('/tasks')
    .then(res => res.json())
    .then(data => {
      data.forEach(tarea => {
        const li = document.createElement('li');
        li.textContent = tarea.title;
        li.tabIndex = 0; // accesible por teclado

        const mostrarTarea = () => {
          titulo.textContent       = tarea.title;
          descripcion.textContent  = tarea.descripcion;
          estatus.textContent      = tarea.terminado ? '✅ Terminada' : '⏳ Pendiente';
          link.href                = tarea.link;
          link.textContent         = 'Ver tarea';
        };

        li.addEventListener('click', mostrarTarea);
        li.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            mostrarTarea();
          }
        });

        listaTareas.appendChild(li);
      });
    })
    .catch(err => console.error('Error cargando tareas:', err));
}