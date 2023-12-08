const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

function printPlants(data) {
    let content = document.getElementById('plants');
    content.innerHTML = ''; // Limpiar el contenido existente antes de agregar nuevos elementos

    for (let i in data) {
        content.innerHTML += 
        `<div class="card m-4" style="width:280px;">
            <a class="descripcion" href="description.html"><img src="${data[i].photo}" class="card-img-top" alt="plantas"></a>  
            <div class="card-body">
                <span class="card-text"><strong>${data[i].name}</strong></span>
                <p class="card-text"><strong>Precio:</strong> ${data[i].price}€</p>
                <p class="card-text"><strong>Temperatura:</strong> ${data[i].temperature}°C</p>
                <p class="card-text"><strong>Riego:</strong> ${data[i].riego}</p>
            </div>   
        </div>`;
    }
}

searchBtn.addEventListener("click", () => {
    // Realizar la búsqueda basada en el campo de búsqueda
    const searchTerm = searchBox.value.toLowerCase();
    
    // Filtrar las plantas que coinciden con el término de búsqueda
    const filteredPlants = datosRecibidosJson.plants.filter(plant =>
        plant.name.toLowerCase().includes(searchTerm)
    );

    // Llamar a la función con los resultados filtrados
    printPlants(filteredPlants);
});

fetch('plants.json')
    .then(res => res.json())
    .then(datosRecibidosJson => printPlants(datosRecibidosJson.plants))
    .catch(error => console.error("Error al obtener datos del servidor:", error));




