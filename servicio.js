//CLIENTE (VOY PARA EL RESTAURANTE)
//RESTAURANTE= SERVIDOR DE SPOTIFY
let uri="https://api.spotify.com/v1/artists/0UWZUmn7sybxMCqrw9tGa7/top-tracks?market=US";

let token="Bearer BQC8ghLBJZ3b4KWDDzmjcJgJy2vf0G2VjBNOzvtoBsBUjymJS5gahg7ecJXRGqtlNXyDHPsvtLGUWhcGuoQ_vh3Ry4jPUouv3fSkrkz56nzPB_nRtW1skNA9HHomNwR1ZacHyW1Wf0qO5O4zpKYzakK5AzU54Qk"

let parametrosEnvio={
 method:"GET", 
 headers:{
    Authorization:token
 }  
}

fetch(uri,parametrosEnvio)
.then(function(respuesta){
    return(respuesta.json())
})
.then(function(respuesta){
    console.log(respuesta)
    pintarDatos(respuesta)
    /*console.log(respuesta.tracks)
    console.log(respuesta.tracks[0])
    console.log(respuesta.tracks[0].preview_url)
    console.log(respuesta.tracks[0].albun.images[0])
    console.log(respuesta.tracks[0].albun.images[0].url)*/
    

})
.catch(function(error){
    console.log(error)
})

function pintarDatos(datos){

    let fila=document.getElementById("fila")

        datos.tracks.forEach(function(cancion){
            console.log(cancion.name)
            console.log(cancion.preview_url)
            console.log(cancion.album.images[0].url)

            //crear un div con js
            let columna=document.createElement("div")
            columna.classList.add("col")

            //creo un div que sirve de tarjeta
            let tarjeta=document.createElement("div")
            tarjeta.classList.add("card")
            tarjeta.classList.add("h-100")

            //creo una img de targeta
            let imagen=document.createElement("img")
            imagen.classList.add("card-img-top")
            imagen.src=cancion.album.images[0].url

            //padres e hijos
            tarjeta.appendChild(imagen)
            columna.appendChild(tarjeta)
            fila.appendChild(columna)

        })
}