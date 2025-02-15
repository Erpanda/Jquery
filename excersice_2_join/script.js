$(function() {
    // Ocultar mensaje al inicio
    $("#respuesta").hide();

    // Manejo de placeholders en inputs y textarea
    $("input, textarea").each(function() {
        let placeholderOriginal = $(this).attr("placeholder");

        $(this).focus(function() {
            $(this).attr("placeholder", "");
        }).blur(function() {
            $(this).attr("placeholder", placeholderOriginal);
        });
    });

    // Deshabilitar el botón al iniciar la pagina, evitando enviar algo vacio
    $("button[type=submit]").prop("disabled", true);  // prop: establece una propiedad

    function validarFormulario() {
        let nombre = $("#nombre").val().trim();
        let email = $("#email").val().trim();
        let password = $("#password").val().trim();

        // Habilita o deshabilita el botón según los campos
        $("button[type=submit]").prop("disabled", !(nombre && email && password));
        // el disable se ejecutara como true solo en el caso que los 3 elemetos sean true (esten llenos), caso contrario, sera false
        // lo que dará como resultado que sea true. SI es true, dara false y se mostarra. y si es false, sera true y seguirá desabilitado xd
    }

    // Detectar cambios en los inputs
    $("input").on("input keyup change", validarFormulario);  // como se sabe el on detecta cualquier cambio del elementi, en este caso detecta un cambio por input, teclas y clciks. para luego ejcutar la funcion //

    // Evento al hacer clic en enviar
    $("form").submit(function(event) {
        event.preventDefault(); // Evita el envío real, osea, evitar recargar la pagina por el accioanr del submit

        $(".container").animate({ opacity: 0, height: "toggle" }, 1000, function() {
            // Limpiar los campos de entrada
            $(this).find("input, textarea").val("");
        
            // Mostrar respuesta con efecto
            // el .delay(n), es el tiempo de visibilidad del elemeto
            $("#respuesta").fadeIn(300).delay(2000).fadeOut(500).queue(function(next) {
                $(".container").animate({ opacity: 1, height: "toggle" }, 1000);
                next();
            });
        });
        

    });

});