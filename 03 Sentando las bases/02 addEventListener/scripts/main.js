'use strict';

const formulario = document.querySelector('#contacto');
const inputNombre = document.querySelector('#input-nombre');
const nombreMal = document.querySelector('.nombreIncorrecto')

function recibirNombre(event) {
  alert ('El Formulario se envio correctamente');
  event.preventDefault();
  console.log(event);
}

function interceptarNombre(event) {
  if (event.target.value.length <= 4 || event.target.value.length >= 50) {
    nombreMal.classList.remove ('nombreIncorrecto');
  } else {
    nombreMal.classList.add ('nombreIncorrecto');
  } 
  
  console.log(event.target.value.lenght);
}

formulario.addEventListener('submit', recibirNombre);
inputNombre.addEventListener('input', interceptarNombre);

function agregarNombre(){                
  const nombreComentario = document.createTextNode('holis');                                    
  document.getElementById("nombre").appendChild(nombreComentario); 
}

function agregarComentario(){
  const comentario = document.createTextNode('nose')
  document.getElementById("comentario").appendChild(comentario)
}