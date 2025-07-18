const abreHabilidades = document.getElementById('abreHabilidades');
const habilidadesContainer = document.querySelector('.habilidades-container');
const abreEstudos = document.getElementById('abreEstudos');
const estudosContainer = document.querySelector('.estudos-container');
const botaoHabilidades = document.querySelector('.btnHabilidades');
const botaoEstudos = document.querySelector('.btnEstudos');

abreHabilidades.onclick = () => {
    habilidadesContainer.style.display = 'block';
    estudosContainer.style.display = 'none'; 

    abreHabilidades.classList.add('ativo');
    abreEstudos.classList.remove('ativo');

    botaoHabilidades.classList.add('selecionado');
    botaoEstudos.classList.remove('selecionado');
};

abreEstudos.onclick = () => {
    estudosContainer.style.display = 'block';
    habilidadesContainer.style.display = 'none';

    abreEstudos.classList.add('ativo');
    abreHabilidades.classList.remove('ativo');

    botaoHabilidades.classList.remove('selecionado');
    botaoEstudos.classList.add('selecionado');
};

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
