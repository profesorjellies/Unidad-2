const contenedor_error = document.getElementById('error');
contenedor_error.classList.add('d-none');

const validarFormulario = document.getElementById('formulario-ingreso');
// console.log(validarFormulario);

validarFormulario.addEventListener('submit',
    function () {

        let mensaje_error = '<h3>Ingrese los siguientes Datos</h3>';
        mensaje_error += "<ul>";

        if (validarFormulario.nombre.value == '') {
            mensaje_error += "<li>Ingrese Nombre </li>";
        }
        if (validarFormulario.email.value == '') {
            mensaje_error += "<li>Ingrese Email </li>";
        }
        if (validarFormulario.validacion.value == '') {
            mensaje_error += "<li>Seleccione Tipo de Pasaporte </li>";
        }
        if (validarFormulario.pasaporte.value == '') {
            mensaje_error += "<li>Ingrese Rut o Pasaporte </li>";
        } else {
            if (validarFormulario.validacion.value == 'rut') {
                if (validarFormulario.pasaporte.value.trim().length < 10) {
                    mensaje_error += "<li>Rut Debe tener minimo 10 Caracteres con sus puntos y guion</li>"
                }
            }
        }

        if (validarFormulario.ciudad.value == '') {
            mensaje_error += "<li>Seleccione Ciudad</li>"
        }

        mensaje_error += "</ul>";

        console.log(mensaje_error.length);
        if (mensaje_error.length <= 46) {
            contenedor_error.classList.add('d-none')
            
        }else{
            contenedor_error.innerHTML = mensaje_error;
            contenedor_error.classList.remove('d-none')
        }        

        event.preventDefault();
    });
