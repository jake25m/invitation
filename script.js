document.getElementById('weddingForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const asistencia = document.getElementById('asistencia').value;
    const invitados = document.getElementById('invitados').value;
    const mensaje = document.getElementById('mensaje').value;

    // Opción: Enviar por WhatsApp
    const telefono = "573208944537"; // Tu número aquí
    const texto = `¡Hola! Confirmo mi asistencia:
Nombre: ${nombre}
Asistirá: ${asistencia}
Acompañantes: ${invitados}
Mensaje: ${mensaje}`;

    const url = `https://api.whatsapp.com/send?phone=${telefono}&text=${encodeURIComponent(texto)}`;
    
    window.open(url, '_blank');
    
    document.getElementById('status').innerText = "¡Gracias por confirmar!";
});
