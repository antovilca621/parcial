document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const formulario = document.getElementById('formularioRegistro');
    const botonPreguntas = document.getElementById('botonPreguntas');
    const contenedorRespuestas = document.getElementById('contenedorRespuestas');
    const respuestasUsuario = document.getElementById('respuestasUsuario');
    
    // Array para almacenar respuestas
    let respuestas = [];
    
    // Evento para el formulario
    formulario.addEventListener('submit', function(e) {
        e.preventDefault();
        if (validarFormulario()) {
            alert('¡Registro exitoso!');
            // formulario.submit(); // Descomentar para enviar realmente
        }
    });
    
    // Evento para el botón de preguntas
    botonPreguntas.addEventListener('click', hacerPreguntas);
    
    // Función para validar todo el formulario
    function validarFormulario() {
        let valido = true;
        
        // Validar cada campo
        if (!validarApellido()) valido = false;
        if (!validarNombre()) valido = false;
        if (!validarDni()) valido = false;
        if (!validarFechaNacimiento()) valido = false;
        if (!validarEmail()) valido = false;
        
        return valido;
    }
    
    // Funciones de validación individuales
    function validarApellido() {
        const apellido = document.getElementById('apellido').value.trim();
        const error = document.getElementById('errorApellido');
        
        if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(apellido)) {
            error.textContent = 'Solo se permiten letras y espacios';
            return false;
        }
        
        error.textContent = '';
        return true;
    }
    
    function validarNombre() {
        const nombre = document.getElementById('nombre').value.trim();
        const error = document.getElementById('errorNombre');
        
        if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre)) {
            error.textContent = 'Solo se permiten letras y espacios';
            return false;
        }
        
        error.textContent = '';
        return true;
    }
    
    function validarDni() {
        const dni = document.getElementById('dni').value.trim();
        const error = document.getElementById('errorDni');
        
        if (!/^\d{8}$/.test(dni)) {
            error.textContent = 'Debe tener exactamente 8 dígitos';
            return false;
        }
        
        error.textContent = '';
        return true;
    }
    
    function validarFechaNacimiento() {
        const fechaInput = document.getElementById('fechaNacimiento');
        const fecha = new Date(fechaInput.value);
        const error = document.getElementById('errorFecha');
        const añoMinimo = new Date('2006-01-01');
        
        if (isNaN(fecha.getTime())) {
            error.textContent = 'Ingrese una fecha válida';
            return false;
        }
        
        if (fecha >= añoMinimo) {
            error.textContent = 'Debe ser mayor de edad (nacido antes de 2006)';
            return false;
        }
        
        error.textContent = '';
        return true;
    }
    
    function validarEmail() {
        const email = document.getElementById('email').value.trim();
        const error = document.getElementById('errorEmail');
        
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            error.textContent = 'Ingrese un email válido';
            return false;
        }
        
        error.textContent = '';
        return true;
    }
    
    // Función para hacer las preguntas
    function hacerPreguntas() {
        respuestas = [];
        
        const pregunta1 = prompt('1. ¿Cuál es tu nacionalidad?') || 'No respondió';
        const pregunta2 = prompt('2. ¿Cuál es tu color favorito?') || 'No respondió';
        const pregunta3 = prompt('3. ¿Cómo se llama tu mascota? (Si no tienes, escribe "ninguna")') || 'No respondió';
        
        respuestas.push(pregunta1, pregunta2, pregunta3);
        mostrarRespuestas();
    }
    
    // Función para mostrar las respuestas
    function mostrarRespuestas() {
        respuestasUsuario.textContent = respuestas.join(' - ');
        contenedorRespuestas.style.display = 'block';
    }
    
    // Validación en tiempo real
    document.getElementById('apellido').addEventListener('input', validarApellido);
    document.getElementById('nombre').addEventListener('input', validarNombre);
    document.getElementById('dni').addEventListener('input', validarDni);
    document.getElementById('fechaNacimiento').addEventListener('change', validarFechaNacimiento);
    document.getElementById('email').addEventListener('input', validarEmail);
});