    // Obtener el checkbox y el audio
    const musicToggle = document.getElementById('musicToggle');
    const music = document.getElementById('music');

    // Establecer el volumen al 20%
    music.volume = 0.15;

    // Escuchar el cambio del checkbox
    musicToggle.addEventListener('change', () => {
        if (musicToggle.checked) {
            // Si está marcado, reproducir la música
            music.play();
        } else {
            // Si no está marcado, pausar la música
            music.pause();
        }
    });

    music.addEventListener('ended', () => {
      music.currentTime = 0;  // Volver al inicio
      music.play();  // Reproducir de nuevo
  });