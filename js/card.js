const searchBox = document.querySelector(".buscador input");
const searchBtn = document.querySelector(".buscador button");
const plantContainer = document.getElementById('plants');
let allPlants = [];  // Almacenar todas las plantas originales

// Función para imprimir las plantas en el contenedor
function printPlants(data) {
    plantContainer.innerHTML = ''; // Limpiar el contenido existente antes de agregar nuevos elementos

    for (let i in data) {
        plantContainer.innerHTML += 
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

// Evento de clic en el botón de búsqueda
searchBtn.addEventListener("click", () => {
    // Obtener el término de búsqueda y convertirlo a minúsculas
    const searchTerm = searchBox.value.toLowerCase();

    // Filtrar las plantas que coinciden con el término de búsqueda
    const filteredPlants = allPlants.filter(plant =>
        plant.name.toLowerCase().includes(searchTerm)
    );

    // Imprimir las plantas filtradas
    printPlants(filteredPlants);
});

// Realizar la solicitud fetch para obtener todos los datos
fetch('plants.json')
    .then(res => res.json())
    .then(datosRecibidosJson => {
        // Almacenar todas las plantas originales
        allPlants = datosRecibidosJson.plants;
        // Imprimir todas las plantas
        printPlants(allPlants);
    })
    .catch(error => console.error("Error al obtener datos del servidor:", error));

