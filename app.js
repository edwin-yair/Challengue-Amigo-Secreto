// Aqui colocaremos el codigo de javascript para el Challengue

//creamos una lista para almacenar los nombres
let amigos = [];

//creamos una funcion para agregar amigos a la lista
function agregarAmigo(){
    if (document.getElementById('amigo').value != ''){ //condicionamos que el texto no este vacio
        amigos.push(document.getElementById('amigo').value); //agregamos nombres de amigos a la lista
        //alert(document.getElementById('amigo').value);
        console.log(amigos); //mostramos la lista en la consola
        limpiarCaja();
    }
    else{
        alert("Por favor, ingrese un nombre");   //si el texto ingresado esta vacio no se ejecuta nada y no se guarda nada
    }
}

function limpiarCaja(){
    document.querySelector('#amigo').value = '';
}
