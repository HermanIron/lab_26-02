
function cambiarMascota(){
  let mascotaUsuario = document.getElementById("tipoMascota").value;
  const miDiv = document.getElementById("divArrellenar");


  if(mascotaUsuario == "perro"){
    miDiv.style = "background-image: url(perro.jpg); background-size: contain";


  } else if (mascotaUsuario == "gato"){
 
    miDiv.style = "background-image: url(gato.jpg); background-size: contain";
  } else if(mascotaUsuario == "canario") {
   
    miDiv.style = "background-image: url(canario.jpg); background-size: contain";

  }else if (mascotaUsuario == "borrar"){
   
    miDiv.style.display = "background-image: url(error.jpg); background-size: contain";

  } else {
  alert(" Tienes que elegir entre perro, gato o canario.....no tenemos más mascotas....")
}
}
