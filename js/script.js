const nombre = document.querySelector('#inputNombre');
const apellido = document.querySelector('#inputApellido');
const correo = document.querySelector('#inputCorreo');
const cantidad = document.querySelector('#inputCantidad');
const categoria = document.querySelector('#inputCategoria');
const parrafo = document.querySelector('#totalAPagar');
const btnBorrar = document.querySelector('#btnBorrar');
const btnResumen = document.querySelector('#btnResumen');
const valorEntrada = 200;

let categoriaSelec = categoria.value;


btnBorrar.addEventListener("click", () => {
  nombre.value = "";
  apellido.value = "";
  correo.value = "";
  cantidad.value = "";
  categoriaSelec = "Estudiante";
  parrafo.innerHTML = "Total a pagar: $"
});

function calcularTotalaPagar(descuento,cantidad){
    return (valorEntrada*descuento*cantidad);
}

btnResumen.addEventListener("click",()=>{
       
    // let valido=true;         
    // if (nombre.value===""){
    //     validNombre.textContent="Debe escribir un nombre";
    //     valido=false;
    // }
    // if (apellido.value===""){
    //     validApellido.textContent="Debe escribir un apellido";
    //     valido=false;
    // }

    // if (!expresionRemail.test(email.value)){
    //     validEmail.textContent="Debe escribir una dirección de correo válida";
    //     valido=false;
    // }

    // if (isNaN(cantidad.value)){
    //     validCantidad.textContent="Debe escribir un número entero";
    //     valido=false;
    // }
    let totalPago;
    //if (valido==true){

        switch (categoria.value){
            case "Estudiante":
                totalPago=calcularTotalaPagar(0.80,parseInt(cantidad.value));
                break;
            case "Trainee":
                totalPago=calcularTotalaPagar(0.50,parseInt(cantidad.value));
                break;
            case "Junior":
                totalPago=calcularTotalaPagar(0.15,parseInt(cantidad.value));
                break;
            default:
                totalPago=calcularTotalaPagar(1,parseInt(cantidad.value));
                break;

        }
    //}
    parrafo.innerHTML="Total a pagar: $" + totalPago;
    Event.preventDefault(); 
})

