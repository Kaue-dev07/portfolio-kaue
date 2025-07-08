const abreHabilidades = document.getElementById('abreHabilidades');
const habilidadesContainer = document.querySelector('.habilidades-container');

abreHabilidades.onclick = () => {
    if
    (habilidadesContainer.style.display === 'block'){
    habilidadesContainer.style.display = 'none';
    abreHabilidades.textContent = 'SKILLS';
  } else {
    habilidadesContainer.style.display = 'block';
    abreHabilidades.textContent = 'SKILLS';
  }
};
