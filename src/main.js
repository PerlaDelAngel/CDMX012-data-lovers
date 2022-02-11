import { movieCards, directors, producers, directorTitles, producerTitles, sortByAZMovies, sortByHR } from './data.js';

import data from './data/ghibli/ghibli.js';

// DESPLEGAR SECCIONES
const sectionMovies = document.getElementById("movies-content");
const sectionStaff = document.getElementById("staff-content");

function displaySections(hideSection, showSection){
    hideSection.style.display = "none";
    showSection.style.display = "block";
}

let btnMovies = document.getElementById("btnMovies"); 
btnMovies.addEventListener("click", function(){ displaySections(sectionStaff, sectionMovies)});

let btnStaff = document.getElementById("btnStaff");
btnStaff.addEventListener("click", function(){ displaySections(sectionMovies, sectionStaff)});

// MOSTRAR PELICULAS
let allMovies = []; 

for(let i = 0; i < data.films.length; i++){ 
    allMovies.push(movieCards(data.films[i]));
}

function printMovieCards(allMovies){
    document.getElementById("movieList").innerHTML = "";
    for(let j = 0; j < allMovies.length; j++){
        let elementArticle = document.createElement("article");

        let imgMovie = document.createElement("img");
        imgMovie.setAttribute("src", allMovies[j][0]);
    
        let elementP = document.createElement("p");
        let stars = "";
        if(Number(allMovies[j][2]) < 21){
            stars = " ★ ";
        } if(Number(allMovies[j][2]) >= 21 && Number(allMovies[j][2]) <= 40){
            stars = " ★★ ";
        } if(Number(allMovies[j][2]) >= 41 && Number(allMovies[j][2]) <= 60){
            stars = " ★★★ ";
        }if(Number(allMovies[j][2]) >= 61 && Number(allMovies[j][2]) <= 80){
            stars = " ★★★★ ";
        }if(Number(allMovies[j][2]) >= 81){
            stars = " ★★★★★ ";
        }

        elementP.innerHTML = "<strong>" + allMovies[j][1] + "</strong>" + "<br>" + "<span style='color:#FDCD00; font-size:150%';>" + stars + "</span> <br> Rating: " + allMovies[j][2] + "%";

        elementArticle.appendChild(imgMovie);
        elementArticle.appendChild(elementP);

        document.getElementById("movieList").appendChild(elementArticle);
    }
}

printMovieCards(allMovies);
//FUNCIONALIDAD DEL FILTRO DE SORT BY EN LA SECCIÓN DE MOVIES
//Llama al elemento select de la sección de Movies y lo guarda en una variable
const selectSortMovies = document.querySelector("#selectSortMovies");

//Es la función de lo que se va a hacer según el elemento que se selccione en el Select
const selectedSort = () => {
    const selectedOption = selectSortMovies.selectedIndex; 
    if (selectedOption === 1){ //Para la primera opción
        let allMoviesAZ = sortByAZMovies(allMovies);
        printMovieCards(allMoviesAZ);
    } if (selectedOption === 2){
        let allMoviesZA = sortByAZMovies(allMovies).reverse();
        printMovieCards(allMoviesZA);
    } if (selectedOption === 3){
        let allMoviesHR = sortByHR(allMovies);
        printMovieCards(allMoviesHR);
    } if (selectedOption === 4) {
        let allMoviesLR = sortByHR(allMovies).reverse();
        printMovieCards(allMoviesLR);
    }
}

//Agrega el evento a ejecutar cuando haya un cambio en el select
selectSortMovies.addEventListener("change", selectedSort);

// MOSTRAR DIRECTORES Y PRODUCTORES
//Obtener una lista con los nombres de todos los directores y productores
let people = [];

for(let i = 0; i < data.films.length; i++){ 
    people.push(directors(data.films[i]));
    people.push(producers(data.films[i]));
}

//Filtrar la lista para quitar los repetidos, da una lista de 9 nombres
let nameList = people.filter((item,index) => {
    return people.indexOf(item) === index;
});

// Saca un array con los titulos de las peliculas donde participó cada director
let directorTitlesArray = [];

for(let i = 0; i < nameList.length; i++){
    directorTitlesArray.push(directorTitles(data.films, nameList[i]));
}

//Imprimir las tarjetas para cada nombre de DIRECTOR
for(let j = 0; j < directorTitlesArray.length; j++){
    let elementArticle = document.createElement("article");
    elementArticle.innerHTML = "<h3>" + directorTitlesArray[j][0] + "</h3>" + "<p> As director of: </p>";

    let elementOl = document.createElement("ol");

    for(let i = 1; i < directorTitlesArray[j].length; i++){
        if(directorTitlesArray[j][i].length > 0){
            let elementLi = document.createElement("li");
            elementLi.innerHTML =  directorTitlesArray[j][i];
            elementOl.appendChild(elementLi);
        } 
        elementArticle.appendChild(elementOl);

        document.getElementById("staffList").appendChild(elementArticle);
    }
}

//Saca un array con los titulos de las peliculas donde participó cada productor
let producerTitlesArray = [];

for(let i = 0; i < nameList.length; i++){
    producerTitlesArray.push(producerTitles(data.films, nameList[i]));
}

//Imprimir las tarjetas para cada nombre de PRODUCTOR
for(let j = 0; j < producerTitlesArray.length; j++){
    let elementArticle = document.createElement("article");
    elementArticle.innerHTML = "<h3>" + producerTitlesArray[j][0] + "</h3>" + "<p> As producer of: </p>";

    let elementOl = document.createElement("ol");

    for(let i = 1; i < producerTitlesArray[j].length; i++){
        if(producerTitlesArray[j][i].length > 0){
            let elementLi = document.createElement("li");
            elementLi.innerHTML =  producerTitlesArray[j][i];
            elementOl.appendChild(elementLi);
        } 
        elementArticle.appendChild(elementOl);

        document.getElementById("staffList").appendChild(elementArticle);
    }
}

const selectSortStaff = document.querySelector("#selectSortStaff");
selectSortStaff.addEventListener("change", selectedSort);