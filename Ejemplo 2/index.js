//alert("hola mundo");
//console.log("hola mundo")

// var variable1 = "hola"; // numero - cadena de texto - booleano - array - json
// let variable2 = 1;
// const variable3 = "!!!!";

// variable2 += " hola";

// console.log(variable2);
// console.log(variable3);


// alert(variable1 + " " + variable2 + " " + variable3)


function prueba(identificador){
    let input = document.getElementById(identificador)
    console.log(input.value)
}

function validarFomulario(){
    let nombre = document.getElementById('nombre')
    let apellido = document.getElementById('apellido')
    let edad = document.getElementById('edad')
    let email = document.getElementById('email')

    let mensaje = '';

    if (nombre.value === '') {
        mensaje += 'Por Favor Ingrese Nombre \n'
    }

    if (apellido.value === '') {
        mensaje += 'Por Favor Ingrese Apellido \n'
    }

    if (edad.value === '') {
        mensaje += 'Por Favor Ingrese Edad \n'
    }

    if (email.value === '') {
        mensaje += 'Por Favor Ingrese Email'
    }

    alert(mensaje)
}

let button = document.getElementById('btn_enviar')

button.addEventListener("click", function(){
    let nombre = document.getElementById('nombre')
    let apellido = document.getElementById('apellido')
    let edad = document.getElementById('edad')
    let email = document.getElementById('email')

    let mensaje = '';

    if (nombre.value === '') {
        mensaje += 'Por Favor Ingrese Nombre \n'
    }

    if (apellido.value === '') {
        mensaje += 'Por Favor Ingrese Apellido \n'
    }

    if (edad.value === '') {
        mensaje += 'Por Favor Ingrese Edad \n'
    }else{
        if(isNaN(edad.value)){
            mensaje += 'Por Favor Ingrese Solo Numeros en el campo Edad \n'
        }
    }

    if (email.value === '') {
        mensaje += 'Por Favor Ingrese Email'
    }

    alert(mensaje)
});


// let inputnombre = document.getElementById('nombre')

// inputnombre.addEventListener("change", function(elemento){
//     console.log(elemento);
// })
