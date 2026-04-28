// 1. TU LÓGICA DE SHEETDB (Lo que ya tenías)
document.getElementById('weddingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Aquí van tus variables de nombre, asistencia, etc.
    const data = {
        "Nombre completo": document.getElementById('nombre').value,
        "Asistencia (Sí/No)": document.getElementById('asistencia').value,
        "Número de acompañantes": document.getElementById('invitados').value,
        "Restricciones alimenticias / Mensaje especial": document.getElementById('mensaje').value
    };

    // Tu fetch a SheetDB
    fetch('TU_URL_DE_SHEETDB', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: [data] })
    })
    .then(res => {
        alert("¡Gracias por confirmar! Nos vemos pronto.");
        document.getElementById('weddingForm').reset();
    })
    .catch(error => console.error('Error:', error));
});

// 2. LO NUEVO: EFECTO DE APARICIÓN (Scroll Reveal)
// Este código hace que los elementos aparezcan suavemente al bajar
window.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.detail-item, .story, .rsvp-container');
    
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        const revealPoint = 150; // Distancia para que se active la animación
        
        if (revealTop < windowHeight - revealPoint) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
});

// Inicializar los elementos ocultos para que puedan "aparecer"
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.detail-item, .story, .rsvp-container').forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.8s ease-out";
    });
});
