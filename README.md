# Tema: Consumo de una API

Este proyecto se basa en coger datos de una api externa y de un json creado,
esta aplicacion solo muestra como se pude obtener datos a traves del fetch y una funcion asíncrona.
```javascript
fetch('plants.json')
    .then(res => res.json())
    .then(datosRecibidosJson => {allPlants = datosRecibidosJson.plants;
        // Imprimir todas las plantas
        printPlants(allPlants);
       
    })
    .catch(error => console.error("Error al obtener datos del servidor:", error));
```

Funcion asíncrona
```javascript
async function checkWeather(city) {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        let data = await response.json();
        console.log(data);
}
```

## Imagénes
 la imágenes son utilizadas de pinterest
 
### Tecnologías utilizadas:
<p align="left"> 
</a> <a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/>
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://www.figma.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40"/>
</a> <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> 
<a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> 
<a href="https://www.adobe.com/in/products/illustrator.html" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg" alt="illustrator" width="40" height="40"/> </a> 
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> 
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" style="max-width: 100%;"></a>

