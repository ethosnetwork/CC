function updateLEDBanner() {
    const bannerText = document.querySelector('.led-text');
    // Aquí puedes agregar lógica para cambiar el texto dinámicamente
    bannerText.textContent = "Nuevo texto dinámico";
  }
  
  setInterval(updateLEDBanner, 10000); // Actualiza cada 10 segundos