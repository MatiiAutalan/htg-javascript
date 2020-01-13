
const comentarios = document.querySelectorAll ('.comment--text');

comentarios[0].style.backgroundColor = 'green';
comentarios[0].style.color = 'black';
comentarios[0].style.fontSize = '20px';

const separadores = document.querySelectorAll('hr');
for (let i = 0 ; i < separadores.length ; i++) {
    separadores[i].classList.add('estilos-separadores');

}