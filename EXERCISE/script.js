$(function() {

    $("#nuevaTarea").data("placeholder", $("#nuevaTarea").attr("placeholder"))
    $("#nuevaTarea").focus(function() {
        $(this).attr("placeholder", ""); // Elimina el placeholder al hacer clic
    }).blur(function() {
        $(this).attr("placeholder", $("#nuevaTarea").data("placeholder")); // Regresa el str del input al su estado original
    })

    // funciond de agregado de lista
    function agregarTarea() {
        let tarea = $("#nuevaTarea").val().trim();
        if (tarea !== "") {
            $("h3").text("TAREAS:")
            $("#lista-tareas").append(`<li>
                ${tarea} 
                <button class="completar">✔</button>
                <button class="eliminar">❌</button>
            </li>`);
            $("#nuevaTarea").val(""); // Limpiar campo de entrada
        };
    };


    // Agregar tarea
    $("#agregarTarea").click(agregarTarea);
    // Agregar tarea con tecla Enter
    $("#nuevaTarea").keypress(function(event) {
        if (event.which === 13) { // Código 13 = Enter
        }
    });

    // completar y elimar tarea
    $(document).on("click", ".completar", function() {
        $(this).parent().toggleClass("completada"); // el toggleClass crea una clase para el li, pero tambien puede borrarlo
    });

    $(document).on("click", ".eliminar", function() {
        $(this).parent().remove();
        if ($("#lista-tareas").children().length === 0) {
            $("h3").text(""); // Oculta el título si no hay tareas
        }
    });
    
    $("#m-o").click(function() {
        $(".completada").toggle();
    });
    
});
