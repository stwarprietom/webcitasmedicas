// variables globales para acceder a eventos

let selectCita = document.getElementById("disabledSelect"); 
let mGeneral = document.getElementById("mGeneral");
let odontologia = document.getElementById("odontologia");
let eMdicos = document.getElementById("eMdicos");

// evento para ocultar select que no se usaran al inicio 

mGeneral.style.display = "none";
odontologia.style.display = "none";
eMdicos.style.display = "none";
diaHora.style.display = "none";
btnEmedicos.style.display= "none";



//  evento que muestra div según el select


selectCita.addEventListener("change", function(){

    let tipoSeleccion =selectCita.value;


    if(tipoSeleccion === "medicina General"){
        mGeneral.style.display = "block";
    } else if (tipoSeleccion === "Odontología"){
        odontologia.style.display = "block";}
    else if(tipoSeleccion === "Examen Medico"){
           
            eMdicos.style.display = "block";
            btnEmedicos.style.display = "block";
            botonGeneral.style.display="none"
        
       
    }

});


// promesa

// Activa la promesa 

function examenesmedicos() {    
     eMedicoPrint()
    .then(tipoEmedico)
    .catch(error => console.error("Error:", error));
}

// devuelve una promesa

function eMedicoPrint() {
    return new Promise((resolve, reject) => {

        let tipoCita = document.getElementById("disabledSelect").value;
       
    
        resolve(tipoCita);

         
    });
}

// funcion envia datos a local storage

function tipoEmedico(tipoCita){    

    let especialista = document.getElementById("datoEmedicos").value;

    localStorage.setItem('tipocita', tipoCita);
    localStorage.setItem('especialista', especialista)

   
    citaDoctor.style.display = "none";
    horarios.style.display= "none";
    diaHora.style.display = "block";    

}

// funcion del horario y ejecuta la libreria

function horarioEmedicos(){
    
    let dia = document.getElementById("dia").value;
    let hora = document.getElementById("hora").value;

    localStorage.setItem('dia', dia);
    localStorage.setItem('hora', hora);

    
    diaHora.style.display = "none";   

// variables que traen informacion del localstorage 

let tipo = localStorage.getItem('tipocita');
let especialista = localStorage.getItem('especialista');
let dias = localStorage.getItem('dia');
let horas = localStorage.getItem('hora');
  

// libreria sweetalert2

let ConfirmacionHtml = ` 
<div>

<h6>Confirmación</h6>
 Su cita de ${tipo}, para ${especialista} el día ${dias} a las ${horas} fue confirmada
 
 </div>
`;

Swal.fire({      

   
    title: "<strong>Confirmación de su cita</strong>",
    icon: "info",
    html: ConfirmacionHtml ,
    showCloseButton: true,
    focusConfirm: false,
    confirmButtonText: `
      <i class="fa fa-thumbs-up"></i> Aceptar
    `,
    
  });

    citaDoctor.style.display = "block";   
    
}




// funcion para guardar en el local storage
function datoGeneral(){

    let tipoCita = document.getElementById("disabledSelect").value;
    let especialista = document.getElementById("datoDoc").value;

    localStorage.setItem('tipocita', tipoCita);
    localStorage.setItem('especialista', especialista)

    horariosEmedicos.style.display = "none"
    citaDoctor.style.display = "none";
    diaHora.style.display = "block";    
   

}



// funcion para capturar día y hora

function horario(){
    
    let dia = document.getElementById("dia").value;
    let hora = document.getElementById("hora").value;

    localStorage.setItem('dia', dia);
    localStorage.setItem('hora', hora);

    
    diaHora.style.display = "none";   

// variables que traen informacion del localstorage 

let tipo = localStorage.getItem('tipocita');
let especialista = localStorage.getItem('especialista');
let dias = localStorage.getItem('dia');
let horas = localStorage.getItem('hora');
  

// libreria de sweetalert2

let ConfirmacionHtml = ` 
<div>

<h6>Confirmación</h6>
 Su cita para ${tipo}, con el doctor ${especialista} el día ${dias} a las ${horas} fue confirmada
 
 </div>
`;

Swal.fire({      

   
    title: "<strong>Confirmación de su cita</strong>",
    icon: "info",
    html: ConfirmacionHtml ,
    showCloseButton: true,
    focusConfirm: false,
    confirmButtonText: `
      <i class="fa fa-thumbs-up"></i> Aceptar
    `,
    
  });

    citaDoctor.style.display = "block";   
    
}