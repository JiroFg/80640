function leer(){
    return document.getElementById("text").value
}

function agregar(){
    nodo = document.createElement("li")
    texto = document.createTextNode(leer())
    nodo.appendChild(texto)
    document.getElementById("lista").appendChild(nodo)
}

function buscar(){
    textoBuscar = document.getElementById("textBuscar").value
    listaTotal = document.getElementsByTagName("li")
    bandera = false
    for(const x in listaTotal){
        if(Object.hasOwnProperty.call(listaTotal,x)){
            let element = listaTotal[x]
            if(element.textContent == textoBuscar){
                alert("Si existe")
                bandera = true
            }
        }
    }
    if(!bandera){
        alert("No existe")
    }
}

function buscarOf(){
    textoBuscar = document.getElementById("textBuscar").value
    listaTotal = document.getElementsByTagName("li")
    bandera = false
    for(const tarea of listaTotal){
        if(textoBuscar == tarea.textContent){
            alert("Si existe")
            bandera = true
        }
    }
    if(!bandera){
        alert("No existe")
    }
}