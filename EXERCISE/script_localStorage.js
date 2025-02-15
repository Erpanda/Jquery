$(function() {
    cargarTareas();

    // Placeholder dinámico
    $("#nuevaTarea").data("placeholder", $("#nuevaTarea").attr("placeholder"));
    $("#nuevaTarea").focus(function() {
        $(this).attr("placeholder", "");
    }).blur(function() {
        $(this).attr("placeholder", $("#nuevaTarea").data("placeholder"));
    });

    // Agregar tarea
    function agregarTarea() {
        let tarea = $("#nuevaTarea").val().trim();
        if (tarea !== "") {
            $("h3").text("TAREAS:");
            $("#lista-tareas").append(`<li>
                ${tarea} 
                <button class="completar">✔</button>
                <button class="eliminar">❌</button>
            </li>`);
            $("#nuevaTarea").val(""); // Limpiar campo de entrada
        }
        guardarTareas();
    }

    function guardarTareas() {
        let tareaS = [];
        $("#lista-tareas li").each(function() {
            let textoLimpio = $(this).clone().children().remove().end().text().trim();
            tareaS.push({ 
                texto: textoLimpio,
                completado: $(this).hasClass("completado"),
                codigo: $(this).html()
            });
        });
        localStorage.setItem("tareas", JSON.stringify(tareaS));
    }

    function cargarTareas() {
        let tareasGuardadas = localStorage.getItem("tareas");
        if (tareasGuardadas) {
            let tareas = JSON.parse(tareasGuardadas);
            tareas.forEach(tarea => {
                let tareaHTML = `<li class="${tarea.completado ? 'completado' : ''}">
                    ${tarea.codigo} 
                </li>`;
                $("#lista-tareas").append(tareaHTML);
            });
        }
    }

    // Eventos
    $("#agregarTarea").click(agregarTarea);

    // Agregar tarea con tecla Enter
    $("#nuevaTarea").keypress(function(event) {
        if (event.which === 13) { // Código 13 = Enter
            agregarTarea();
        }
    });

    // Completar tarea
    $(document).on("click", ".completar", function() {
        $(this).parent().toggleClass("completado");
        guardarTareas();
    });

    // Eliminar tarea
    $(document).on("click", ".eliminar", function() {
        $(this).parent().remove();
        guardarTareas();
        if ($("#lista-tareas").children().length === 0) {
            $("h3").text(""); // Oculta el título si no hay tareas
        }
    });

    // Mostrar/Ocultar completados
    $("#m-o").click(function() {
        $(".completado").toggle();
    });
});