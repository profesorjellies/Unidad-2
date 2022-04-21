$(document).ready(
    function(){
        $("#error").hide();

        $("#formulario-ingreso").submit(
            function(){
                let nombre = $("#nombre").val();
                let email = $("#email").val();
                let validacion = $("#validacion").val();
                let rut_passaporte = $("#pasaporte").val();
                let ciudad = $("#ciudad").val();

                let mensaje_error = '<h3>Ingrese los siguientes Datos</h3>';
                mensaje_error += "<ul>";

                if (nombre.trim() == '') {
                    mensaje_error += "<li>Ingrese Nombre </li>";
                }
                if (email.trim() == '') {
                    mensaje_error += "<li>Ingrese Email </li>";
                }
                if(validacion == ''){
                    mensaje_error += "<li>Seleccione Tipo de Pasaporte </li>";
                }
                if (rut_passaporte == '') {
                    mensaje_error += "<li>Ingrese Rut o Pasaporte </li>";
                }else{
                    if (validacion == 'rut') {
                        if(rut_passaporte.trim().length < 10){
                            mensaje_error += "<li>Rut Debe tener minimo 10 Caracteres con sus puntos y guion</li>"
                        }
                    }
                }

                if (ciudad == '') {
                    mensaje_error += "<li>Seleccione Ciudad</li>"
                }

                mensaje_error += "</ul>";

                $("#error").html(mensaje_error);
                $("#error").show();

                event.preventDefault();
            }
        )
    }
);