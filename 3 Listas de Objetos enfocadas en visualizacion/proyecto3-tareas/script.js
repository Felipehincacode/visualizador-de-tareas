// Array de tareas con descripción y estado de completado
let tareas = [
    { descripcion: "Completar proyecto de JavaScript", completada: false },
    { descripcion: "Revisar documentación de React", completada: true },
    { descripcion: "Preparar presentación para el equipo", completada: false },
    { descripcion: "Hacer ejercicio por 30 minutos", completada: true },
    { descripcion: "Leer capítulo 5 del libro", completada: false },
    { descripcion: "Organizar archivos del escritorio", completada: false }
];

// Función para crear estructura HTML diferente según el estado de la tarea
function crearEstructuraTarea(tarea, index) {
    const tareaDiv = document.createElement('div');
    tareaDiv.className = `task-item ${tarea.completada ? 'completed' : 'pending'}`;
    tareaDiv.dataset.index = index;
    
    if (tarea.completada) {
        // Estructura HTML para tarea completada
        tareaDiv.innerHTML = `
            <div class="task-header">
                <span class="task-status">✅</span>
                <span class="task-id">#${index + 1}</span>
            </div>
            <div class="task-description">${tarea.descripcion}</div>
            <div class="task-actions">
                <button class="toggle-btn" onclick="cambiarEstadoTarea(${index})">🔄 Marcar Pendiente</button>
                <button class="delete-btn" onclick="eliminarTarea(${index})">🗑️ Eliminar</button>
            </div>
        `;
    } else {
        // Estructura HTML para tarea pendiente
        tareaDiv.innerHTML = `
            <div class="task-header">
                <span class="task-status">❌</span>
                <span class="task-id">#${index + 1}</span>
            </div>
            <div class="task-description">${tarea.descripcion}</div>
            <div class="task-actions">
                <button class="toggle-btn" onclick="cambiarEstadoTarea(${index})">✅ Marcar Completada</button>
                <button class="delete-btn" onclick="eliminarTarea(${index})">🗑️ Eliminar</button>
            </div>
        `;
    }
    
    return tareaDiv;
}

// Función para generar todas las tareas
function generarTareas() {
    const contenedorPrincipal = document.getElementById('tasksList');
    const contenedorCompletadas = document.getElementById('completedTasksList');
    const contenedorPendientes = document.getElementById('pendingTasksList');
    
    // Limpiar contenedores
    contenedorPrincipal.innerHTML = '';
    contenedorCompletadas.innerHTML = '';
    contenedorPendientes.innerHTML = '';
    
    // Recorrer el array de tareas y crear estructuras HTML
    tareas.forEach((tarea, index) => {
        const elementoTarea = crearEstructuraTarea(tarea, index);
        
        // Agregar a la lista principal
        contenedorPrincipal.appendChild(elementoTarea.cloneNode(true));
        
        // Agregar a la lista correspondiente según su estado
        if (tarea.completada) {
            contenedorCompletadas.appendChild(elementoTarea);
        } else {
            contenedorPendientes.appendChild(elementoTarea);
        }
    });
    
    actualizarEstadisticas();
}

// Función para cambiar el estado de una tarea
function cambiarEstadoTarea(index) {
    tareas[index].completada = !tareas[index].completada;
    generarTareas();
    
    // Efecto visual
    const tareaElement = document.querySelector(`[data-index="${index}"]`);
    if (tareaElement) {
        tareaElement.style.transform = 'scale(1.05)';
        setTimeout(() => {
            tareaElement.style.transform = 'scale(1)';
        }, 200);
    }
}

// Función para eliminar una tarea
function eliminarTarea(index) {
    const tareaElement = document.querySelector(`[data-index="${index}"]`);
    if (tareaElement) {
        tareaElement.style.transform = 'translateX(100px)';
        tareaElement.style.opacity = '0';
        setTimeout(() => {
            tareas.splice(index, 1);
            generarTareas();
        }, 300);
    }
}

// Función para agregar una nueva tarea
function agregarTarea() {
    const descripciones = [
        "Revisar emails pendientes",
        "Actualizar perfil de LinkedIn",
        "Preparar agenda para mañana",
        "Hacer backup de archivos importantes",
        "Investigar nuevas tecnologías",
        "Escribir notas de la reunión",
        "Planificar vacaciones",
        "Organizar espacio de trabajo"
    ];
    
    const descripcion = descripciones[Math.floor(Math.random() * descripciones.length)];
    const nuevaTarea = { descripcion, completada: false };
    tareas.push(nuevaTarea);
    
    generarTareas();
    
    // Efecto de animación para la nueva tarea
    const nuevaTareaElement = document.querySelector(`[data-index="${tareas.length - 1}"]`);
    if (nuevaTareaElement) {
        nuevaTareaElement.style.opacity = '0';
        nuevaTareaElement.style.transform = 'translateY(20px)';
        setTimeout(() => {
            nuevaTareaElement.style.transition = 'all 0.5s ease';
            nuevaTareaElement.style.opacity = '1';
            nuevaTareaElement.style.transform = 'translateY(0)';
        }, 100);
    }
}

// Función para cambiar el estado de todas las tareas
function cambiarEstadoTodas() {
    const todasCompletadas = tareas.every(tarea => tarea.completada);
    tareas.forEach(tarea => {
        tarea.completada = !todasCompletadas;
    });
    generarTareas();
}

// Función para limpiar tareas completadas
function limpiarCompletadas() {
    tareas = tareas.filter(tarea => !tarea.completada);
    generarTareas();
}

// Función para limpiar todas las tareas
function limpiarTodas() {
    tareas = [];
    generarTareas();
}

// Función para actualizar estadísticas
function actualizarEstadisticas() {
    const total = tareas.length;
    const completadas = tareas.filter(tarea => tarea.completada).length;
    const pendientes = total - completadas;
    
    document.getElementById('totalTasks').textContent = `Total: ${total} tareas`;
    document.getElementById('completedTasks').textContent = `Completadas: ${completadas}`;
    document.getElementById('pendingTasks').textContent = `Pendientes: ${pendientes}`;
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Generar tareas iniciales
    generarTareas();
    
    // Event listeners para botones
    document.getElementById('addTask').addEventListener('click', agregarTarea);
    document.getElementById('toggleAll').addEventListener('click', cambiarEstadoTodas);
    document.getElementById('clearCompleted').addEventListener('click', limpiarCompletadas);
    document.getElementById('clearAll').addEventListener('click', limpiarTodas);
    
    // Mostrar información en consola
    console.log('Array de tareas:', tareas);
    console.log('Tareas completadas:', tareas.filter(tarea => tarea.completada));
    console.log('Tareas pendientes:', tareas.filter(tarea => !tarea.completada));
});

// Función adicional para exportar estadísticas
function exportarEstadisticas() {
    const estadisticas = {
        total: tareas.length,
        completadas: tareas.filter(tarea => tarea.completada).length,
        pendientes: tareas.filter(tarea => !tarea.completada).length,
        tareas: tareas
    };
    console.log('Estadísticas:', estadisticas);
    return estadisticas;
} 