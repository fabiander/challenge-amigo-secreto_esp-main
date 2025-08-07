// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []

function limpiarCaja() {
    document.getElementById('amigo').value = '';  // limpiar cajas
    document.getElementById('amigo').focus();
}

function mostrarAmigos() {       
    let lista = document.getElementById('listaAmigos'); //  esto es el id de la lista
    lista.innerHTML = '';                               //limpiar la lista antes

    for (let i = 0; i < amigos.length; i++) {  // recorre el array amigos
        let li = document.createElement('li'); // crear un elemento li caja
        li.textContent = amigos[i];            // asignar el texto del amigo
        lista.appendChild(li);                  // agregar el li a la lista
    }   
}

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value; // recojo el nombre del input
    if (nombre === '') {                                 // condicional si no hay nombre
        alert('Por favor inserte un nombre');    
        return;
    }
    amigos.push(nombre);                          //  agrego el nombre a la lista
    limpiarCaja();                                // llamo  a la funcion limpiar caja y poner el cursor
    mostrarAmigos();
}


function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos para sortear');
        return;
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    let indiceAleatorio = Math.floor(Math.random() * amigos.length); // numero entero
    let amigoSeleccionado = amigos[indiceAleatorio]; // reviso el nombre en la lista
    resultado.innerHTML = 'El amigo secreto es: ' + amigoSeleccionado; // muestra el resultado en el html
}


