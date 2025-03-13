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
        actualizarListaHTML() //llamaos la funcion para mostrar los nombres en la lista
    }
    else{
        alert("Por favor, ingrese un nombre");   //si el texto ingresado esta vacio no se ejecuta nada y no se guarda nada
    }
}

function limpiarCaja(){
    document.querySelector('#amigo').value = '';
}

//creamos una funcion para actualizar la lista de amigos en html
function actualizarListaHTML(){
    let listaAmigos = document.getElementById('listaAmigos'); //obteniendo el dato de 'listaAmigos' y guaradando en la variable
    listaAmigos.innerHTML = "";     // limpiando a lista en html
    for( let cont = 0; cont < amigos.length; cont++){  //creamos un ciclo para recorrer los datos de nuestro arreglo
        let element = amigos[cont];  //creamos un elemento en donde guardamos el dato del contador
        let listaHTML = document.createElement("li"); //creamos la lista 
        listaHTML.textContent = element;   // el elemento de la listahtml sera igual al elemente que es el nombre
        listaAmigos.appendChild(listaHTML) //agregamos el elemento de la lista a la lista de amigos
    }
}  
//creamos la funcion para sortear los nombres de los amigos
function sortearAmigo(){
    let amigoAleatorio = Math.floor(Math.random()*amigos.length); //definimos un lugar aleatorio dentro de nuestro arreglo
    let amigoElejido = amigos[amigoAleatorio]; //definimos el resultado elejido ahora con el valor de la posicion
    let resultadoU1 = document.getElementById("resultado"); //definimos que el resultado sera escrito en el id resultado
    resultadoU1.innerHTML = `<li> Tu amigo secreto es!! ${amigoElejido}<li>`  //colocamos el texto y lo agregamos
    if(amigos.length == 0){        //condicionamos que si la celda esta vacia no podamos ejecutar el sorteo.
        alert("No hay amigos para sortear. Agrega nombres!");
    }
    
}