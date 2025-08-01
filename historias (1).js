document.addEventListener('DOMContentLoaded', function() {
    const abanicoContainer = document.querySelector('.abanico-container');
    const tarjetas = document.querySelectorAll('.tarjeta-abierto');
    const secciones = document.querySelectorAll('.seccion-contenido');
    const btnsCerrar = document.querySelectorAll('.btn-cerrar');

    // Animación inicial del abanico
    setTimeout(() => {
        abanicoContainer.classList.add('animado');
    }, 500);

    // Mostrar sección al hacer clic en una tarjeta
    tarjetas.forEach(tarjeta => {
        tarjeta.addEventListener('click', function() {
            const seccionId = this.getAttribute('data-seccion');
            const seccion = document.getElementById(seccionId);
            
            // Activar estado de sección abierta
            document.body.classList.add('seccion-activa');
            
            // Mostrar la sección correspondiente
            secciones.forEach(s => s.classList.remove('mostrar'));
            seccion.classList.add('mostrar');
            
            // Desplazarse a la sección
            seccion.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Cerrar sección
    btnsCerrar.forEach(btn => {
        btn.addEventListener('click', function() {
            document.body.classList.remove('seccion-activa');
            secciones.forEach(s => s.classList.remove('mostrar'));
            
            // Regresar al inicio
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // Cerrar sección con ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            document.body.classList.remove('seccion-activa');
            secciones.forEach(s => s.classList.remove('mostrar'));
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
});