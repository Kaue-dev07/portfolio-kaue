const abreHabilidades = document.getElementById('abreHabilidades');
const habilidadesContainer = document.querySelector('.habilidades-container');
const abreEstudos = document.getElementById('abreEstudos');
const estudosContainer = document.querySelector('.estudos-container');

abreHabilidades.onclick = () => {
    habilidadesContainer.style.display = 'block';
    estudosContainer.style.display = 'none'; 

    abreHabilidades.classList.add('ativo');
    abreEstudos.classList.remove('ativo');
};

abreEstudos.onclick = () => {
    estudosContainer.style.display = 'block';
    habilidadesContainer.style.display = 'none';

    abreEstudos.classList.add('ativo');
    abreHabilidades.classList.remove('ativo');
};
