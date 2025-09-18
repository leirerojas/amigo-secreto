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
        lista.appendChild(`<li> ${amigos[i]} </li>`);
    }
}

