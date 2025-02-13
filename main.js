$(document).ready(function () { 
    $(".entrada").each(function () {
        $(this).data("placeholder", $(this).attr("placeholder")); // Guarda el placeholder original
    });

    $(".entrada").focus(function () {
        $(this).attr("placeholder", ""); // Elimina el placeholder al hacer clic
    });

    $(".entrada").blur(function () {
        $(this).attr("placeholder", $(this).data("placeholder")); // Restaura el placeholder original
    });

    $("#loginBtn").click(function () {
        let usuario = $("#usuario").val();
        let password = $("#password").val();

        if (usuario === "" || password === "") {
            $("#mensajeError").fadeIn().delay(2000).fadeOut(); // Muestra el error y lo oculta después de 2 seg
        } else {
            alert("Inicio de sesión exitoso ✅");
        }
    });
});