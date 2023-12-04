


function printPlants(data) { //parametro datos // accedoa los datos
    for(let i in data) {
        let content = document.getElementById('plants')
        content.innerHTML += 
        `<div class="card m-4" style="width:280px;">
            <img src="${data[i].photo}" class="card-img-top" alt="plantas">
            <div class="card-body">
                <span class="card-text"><strong>${data[i].name}</strong></span>
                <p class="card-text">${data[i].price}€</p>
            </div>   
        </div>`
    }

}



fetch('plants.json')
.then(responseDeServidor => responseDeServidor.json())
.then(datosRecibidosJson => printPlants(datosRecibidosJson.plants)) //datos recibidosjson







