let amigos = [];

function agregarAmigo(){
   let nombre = document.getElementById("amigo").value;
   if (nombre.trim() === ""){
    alert("Por favor, inserte un nombre.");
    return;
   } 
   amigos.push(nombre);
   document.getElementById("amigo").value = "";
   console.log(amigos);
   listaDeAmigos();
}

function listaDeAmigos(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for(let i = 0; i < amigos.length; i++){
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

function sortearAmigo() {
    if(amigos.length > 0){
        let resultado = document.getElementById("resultado");
        let numeroAleatorio = Math.floor(Math.random()*amigos.length);
        resultado.innerHTML = `<li>${amigos[numeroAleatorio]}</li>`;
    }else{
        alert("Necesitas tener al menos un amigo agregado");
        return;
    }
}

