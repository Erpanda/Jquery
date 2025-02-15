$(function() {
    // Ocultar mensaje al inicio
    $("#respuesta").hide();

    // Manejo de placeholders en inputs y textarea
    $("input, textarea").each(function() {
        let placeholderOriginal = $(this).attr("placeholder");

        $(this).focus(function() {
            $(this).attr("placeholder", "");
        });
        $(this).blur(function() {
            $(this).attr("placeholder", placeholderOriginal);
        });
    });

    // Deshabilita el botón al inicio
    $("button[type=submit]").prop("disabled", true);

    function validarFormulario() {
        let nombre = $("#nombre").val().trim();
        let email = $("#email").val().trim();
        let password = $("#password").val().trim();

        // Habilita o deshabilita el botón según los campos
        $("button[type=submit]").prop("disabled", !(nombre && email && password));
    }

    // Detectar cambios en los inputs
    $("input").on("input keyup change", validarFormulario);  // como se sabe el on detecta cualquier cambio del elementi, en este caso detecta un cambio por input, teclas y clciks. para luego ejcutar la funcion //

    // Evento al hacer clic en enviar
    $("form").submit(function(event) {
        event.preventDefault(); // Evita el envío real

        $(".container").animate({ opacity: 0, height: "toggle" }, 1000, function() {
            $("input, textarea").each(function() {
                $(this).val("")
            });
                
            $("#respuesta").fadeIn(300);
            setTimeout(function() {
                $("#respuesta").fadeOut(500, function() {
                    $(".container").animate({ opacity: 1, height: "toggle" }, 1000);
                });
            }, 2000);
        });

    });

});