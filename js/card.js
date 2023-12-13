const searchBox = document.querySelector(".buscador input");
const searchBtn = document.querySelector(".buscador button");
let allPlants = [];  // Almacenar todas las plantas originales

function loadData(x) {
    // fetch('https://cristinamaser.com/api/invitations/'+parseInt(x)+1)
    // .then(response => response.json())
    // .then(responseJson => printModal(responseJson))
    // x = parseInt(x) + 1;
    fetch('plants.json')
    .then(response => response.json())
    .then(responseJson => printModal(responseJson.plants[x]))
  }

function printModal(x) { 
    console.log(x)
    let miModal = new bootstrap.Modal(document.getElementById('infoModal'));
    miModal.show();
    let modalTitleElement = miModal._element.querySelector('.modal-title');
    let modalBodyElement = miModal._element.querySelector('.modal-body');
    modalTitleElement.innerHTML = x.name
    modalBodyElement.innerHTML = 
    `<div>
    <img src="${x.photo}" class="card-img-top" alt="plantas">
    <p>${x.description}</p>
    </div>`
    document.getElementById('closeModalButton').addEventListener('click', function(){
        miModal.hide();
      });
}




function printPlants(data){
    let plantContainer = document.getElementById('plants');
    plantContainer.innerHTML = ''; // Limpiar el contenido existente antes de agregar nuevos elementos
    for (let i in data) {
        plantContainer.innerHTML +=
            `<div class="card m-4" style="width:280px;">
            <a class="modal-dialog" href=""><img src="${data[i].photo}" class="card-img-top" alt="plantas"></a>  
            <div class="card-body">
                <span class="card-text"><strong>${data[i].name}</strong></span>
                <p class="card-text"><strong>Precio:</strong> ${data[i].price}€</p>
                <p class="card-text"><strong>Temperatura:</strong> ${data[i].temperature}°C</p>
                <p class="card-text"><strong>Riego:</strong> ${data[i].riego}</p>
            </div>

            <a data-value="${i}" class="btn btn-primary activeModal" href="#">Ver</a>
        </div>`;
    }
    let linkModales = document.getElementsByClassName('activeModal');
    for(let i in linkModales){
        linkModales[i].addEventListener('click', function(e){
            e.preventDefault();
            loadData(e.target.dataset.value)
        })
    }
}
fetch('plants.json')
    .then(res => res.json())
    .then(datosRecibidosJson => printPlants(datosRecibidosJson.data))






searchBtn.addEventListener("click", () => {
    const searchTerm = searchBox.value.toLowerCase();

    const filteredPlants = allPlants.filter(plant =>
        plant.name.toLowerCase().includes(searchTerm)
    );
    printPlants(filteredPlants);   // Imprimir las plantas filtradas

});
// Realizar la solicitud fetch para obtener todos los datos
fetch('plants.json')
    .then(res => res.json())
    .then(datosRecibidosJson => {
        allPlants = datosRecibidosJson.plants;
        printPlants(allPlants);
    }) 


