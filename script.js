document.addEventListener('DOMContentLoaded', () => {
    const infoButton = document.getElementById('info-button-interaction');
    const aboutMe = document.getElementById('aboutme');
  
    // Mostrar/ocultar al hacer clic en el botón
    infoButton.addEventListener('click', (e) => {
      e.stopPropagation(); // evita que el clic se propague al documento
      aboutMe.classList.toggle('aboutme-show');
      aboutMe.classList.toggle('aboutme-hide');
    });
  
    // Ocultar si se hace clic fuera del contenedor
    document.addEventListener('click', (e) => {
      if (
        aboutMe.classList.contains('aboutme-show') &&
        !aboutMe.contains(e.target) &&
        !infoButton.contains(e.target)
      ) {
        aboutMe.classList.remove('aboutme-show');
        aboutMe.classList.add('aboutme-hide');
      }
    });


    const skillsButton = document.getElementById('skills-button-interaction');
    const skills = document.getElementById('skills');
  
    // Mostrar/ocultar al hacer clic en el botón
    skillsButton.addEventListener('click', (e) => {
      e.stopPropagation(); // evita que el clic se propague al documento
      skills.classList.toggle('skills-show');
      skills.classList.toggle('skills-hide');
    });
  
    // Ocultar si se hace clic fuera del contenedor
    document.addEventListener('click', (e) => {
      if (
        skills.classList.contains('skills-show') &&
        !skills.contains(e.target) &&
        !skillsButton.contains(e.target)
      ) {
        skills.classList.remove('skills-show');
        skills.classList.add('skills-hide');
      }
    });
  });
  