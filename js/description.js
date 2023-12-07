
    function printDatos(data) {
        for (let i in data){
            const planta = data[i];
    
        let description = document.getElementById('description');
        description.innerHTML =
            `<div class="card mb-3">
                <img class="card-img-top" src="${planta.photo}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${planta.id}</h5>
                    <p class="card-text">${planta.name}</p>
                    <p class="card-text">${planta.description}</p>
                    <p class="card-text">${planta.price}</p>
                </div>
            </div>`;
        }
    }

    
    
    
    fetch('plants.json')
        .then(responseDeServidor => responseDeServidor.json())
        .then(datosRecibidosJson => printDatos(datosRecibidosJson.plants));
    
    