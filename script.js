document.getElementById('whatsappButton').addEventListener('click', function() {
    // Número de teléfono al que se enviará el mensaje (con código de país)
    var phoneNumber = '+525572785113';
  
    // Mensaje que se enviará
    var message = 'Hola mi nombre es ______________ confirmo mi asistencia al evento';
  
    // Construir la URL de WhatsApp
    var whatsappURL = 'https://wa.me/' + 5572785113 + '?text=' + encodeURIComponent(message);
  
    // Abrir la ventana de WhatsApp
    window.open(whatsappURL, '_blank');
  });
  