document.addEventListener("DOMContentLoaded", function () {
    let entradas = document.querySelectorAll(".entrada");
  
    // Guarda el placeholder original de cada input
    entradas.forEach(input => {
        input.dataset.placeholder = input.placeholder;
  
        input.addEventListener("focus", function () {
            this.placeholder = ""; // Elimina el placeholder al hacer clic
        });
  
        input.addEventListener("blur", function () {
            this.placeholder = this.dataset.placeholder; // Restaura el placeholder original
        });
    });
  
    document.getElementById("loginBtn").addEventListener("click", function () {
        let usuario = document.getElementById("usuario").value.trim();
        let password = document.getElementById("password").value.trim();
        let mensajeError = document.getElementById("mensajeError");
  
        if (usuario === "" || password === "") {
            mensajeError.style.display = "block"; // Muestra el error
            setTimeout(() => mensajeError.style.display = "none", 2000); // Oculta después de 2 seg
        } else {
            alert("Inicio de sesión exitoso ✅");
        }
    });
  }); 
  
  
  
  
  
  
  
  
  
  
  
  
  