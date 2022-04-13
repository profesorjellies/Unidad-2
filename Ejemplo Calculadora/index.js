function calculadora(numero){
    let resultado = document.getElementById('resultado')
    resultado.value += numero
}

function operador(operador){
    console.log(operador);
    let ope = document.getElementById(operador)
    let contenido = document.getElementById('operador')
    contenido.value = ope.value
}