let contador = 1;

setInterval(() => {
  const slide = document.getElementById('slide' + contador);
  if (slide) {
    slide.checked = true;
    contador++;
    if (contador > 3) {
      contador = 1;
    }
  }
}, 4000);
