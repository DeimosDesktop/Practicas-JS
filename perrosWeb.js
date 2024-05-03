//Función anónima para cargar Perros.
onload = cargaPerrosAleatorios;
let perros = new XMLHttpRequest(); //Instancia de XHR
const URLPerrosAleatorios = "https://dog.ceo/api/breeds/image/random"
function cargaPerrosAleatorios(){
    perros.onreadystatechange=()=>{
        if (perros.readyState==perros.DONE){
            console.log("El servidor ha enviado su respuesta!");
            if (perros.status==200){
                console.log("La comunicación ha finalizado con exito!");
                console.log(perros.responseText);
                let respuestaVista = JSON.parse(perros.responseText);
                console.log(`ESTADO: ${respuestaVista.status}`);
                console.log(`IMAGEN: ${respuestaVista.message}`);
                let imagen = document.getElementById('perro_visor');
                imagen.src=respuestaVista.message;
                
            }
        }
        else{
            console.log(`Estado de respuesta: ${perros.readyState}`);
        }
    };
    perros.open("GET",URLPerrosAleatorios,true)
    perros.send(null);
}