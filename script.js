const campo_texto = document.querySelector("#area-encriptar");
cambiarEstilo(campo_texto);
const campo_mensaje = document.querySelector("#area-mensaje");
cambiarEstilo(campo_mensaje);

function cambiarEstilo(campo_texto){
    campo_texto.style.color = "blue";
    campo_texto.style.fontSize = "1.5rem";
}


function cambiarEstilo(campo_mensaje){
    campo_mensaje.style.color = "blue";
    campo_mensaje.style.fontSize = "20px";
}

console.log(campo_mensaje);

const matriz_code = [
    ["e","enter"], //indice 0
    ["i","imes"], //indice 1
    ["a","ai"], //indice 2
    ["o", "ober"], //indice 3
    ["u","ufat"],  //indice 4
];

function btnEncriptar(){
    const texto = encriptar(campo_texto.value) //value es para que capture el resultado y se vea
    campo_mensaje.value = texto;
}

function encriptar(fraseEncriptada){
    for(let i = 0; i < matriz_code.length; i ++){ //length mide el tamaño del arrays
        if(fraseEncriptada.includes(matriz_code[i][0])){
            fraseEncriptada = fraseEncriptada.replaceAll(
                matriz_code[i][0],
                matriz_code[i][1]
            )
        }
    }
    
    return fraseEncriptada;
    limpiarCaja1();
}

function limpiarCaja1() {
    document.querySelector('#area-encriptar').value = '';
}

function btnDesencriptar(){
    const texto = desencriptar(campo_mensaje.value) //value es para que capture el resultado y se vea
    campo_mensaje.value = texto;
}

function desencriptar(fraseDesencriptada){
    for(let i = 0; i < matriz_code.length; i ++){ //length mide el tamaño del arrays
        if(fraseDesencriptada.includes(matriz_code[i][1])){
            fraseDesencriptada = fraseDesencriptada.replaceAll(
                matriz_code[i][1],
                matriz_code[i][0]
                
            )
        }
    }
    limpiarCaja2();
    return fraseDesencriptada;
}

function limpiarCaja2() {
    document.querySelector(' #area-mensaje').value = '';
}





