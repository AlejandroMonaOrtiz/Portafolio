let uri="https://accounts.spotify.com/api/token";

let dato1="grant_type=client_credentials";
let dato2="client_id=189a2800006047329d93b50f84bc122c";
let dato3="client_secret=4f0c73432ae34289b9a1dde96a3461f7";

let parametrosPOST={
    method:"POST",
    headers:{
        "Content-Type":"application/x-www-form-urlencoded"
    },
    body:`${dato1}&${dato2}&${dato3}`
}
fetch(uri,parametrosPOST)
.then(function(respuesta){
    return(respuesta.json())
})
.then(function(respuesta){
    console.log(respuesta)
    obtenerToken(respuesta)
})
.catch(function(error){
    console.log(error)
})

function obtenerToken(respuesta){
    let token=respuesta.token_type+" "+respuesta.access_token
    obtenerCanciones(token);
}

function obtenerCanciones(token){
    let uri="https://api.spotify.com/v1/artists/0tmwSHipWxN12fsoLcFU3B/top-tracks?market=US";

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
        console.log(respuesta.tracks)
        console.log(respuesta.tracks[0])
        console.log(respuesta.tracks[0].preview_url)
        console.log(respuesta.tracks[0].albun.images[0])
        console.log(respuesta.tracks[0].albun.images[0].url)
        
        })
        .catch(function(error){
            console.log(error)
        })
        }
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

                    let audio=document.createElement("audio")
                    audio.classList.add("w-100")
                    audio.src=cancion.preview_url;
                    audio.setAttribute("controls", "controls")
        
                    //padres e hijos
                    tarjeta.appendChild(imagen)
                    tarjeta.appendChild(audio)
                    columna.appendChild(tarjeta)
                    fila.appendChild(columna)
                
        
                })
        }