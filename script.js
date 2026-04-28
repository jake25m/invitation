// 1. Integración con SheetDB (Recuerda cambiar la URL)
document.getElementById('weddingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const data = {
        "Nombre completo": document.getElementById('nombre').value,
        "Asistencia (Sí/No)": document.getElementById('asistencia').value,
        "Número de acompañantes": document.getElementById('invitados').value,
        "Restricciones alimenticias / Mensaje especial": document.getElementById('mensaje').value
    };

    fetch('TU_URL_DE_SHEETDB_AQUI', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: [data] })
    })
    .then(res => {
        alert("¡Confirmación enviada con éxito!");
        document.getElementById('weddingForm').reset();
    })
    .catch(error => alert("Error al enviar. Inténtalo de nuevo."));
});

// 2. Efecto de aparición al bajar (Scroll Reveal)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.animate').forEach(el => observer.observe(el));
