let usuario = document.getElementById("user")
let clave = document.getElementById("pass")
let boton = document.getElementById("datos");



boton.onclick = function() {

    let user = usuario.value;
    let pass = clave.value;


  

 

    if(user === "admin" && pass === "admin"){

        window.location.assign("html/agenda.html")
      
        agendarCita(ingreso = true);
        
        
    }


    else {
        Swal.fire({
            icon: "error",
            title: "Contraseña",
            text: "la contraseña o el usuario no es correcto",
           
          });
    }

}

login();



