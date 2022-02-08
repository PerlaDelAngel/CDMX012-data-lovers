import { movieCards, directors, producers, staffArray } from './data.js';

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

// Mete en el array allMovies, los datos de todas las peliculas.
for(let i = 0; i < data.films.length; i++){ 
    allMovies.push(movieCards(data.films[i]));
}

// Imprime tarjetas con los elementos de allMovies (con el poster, titulo y año).
for(let j = 0; j < allMovies.length; j++){
    let elementArticle = document.createElement("article");

    let imgMovie = document.createElement("img");
    imgMovie.setAttribute("src", allMovies[j][0]);

    let elementP = document.createElement("p");
    elementP.innerHTML = "<strong>" + allMovies[j][1] + "</strong>" + "<br>" + allMovies[j][2];
    
    elementArticle.appendChild(imgMovie);
    elementArticle.appendChild(elementP);

    document.getElementById("movieList").appendChild(elementArticle);
}

/* MOSTRAR DIRECTORES Y PRODUCTORES
 Saber cuántos directores y productores son.
 Sacar una lista con cada uno, sin repetir.
 Buscar en cuáles películas han participado.
 Mostrar en su tarjeta esas películas y el tipo de participación.

 1. Muestra directores y productores.
 2. Elimina los que se repitan.
 3. Busca qué películas tienen el nombre de cada uno y crea una lista.
 4. Identifica si tienen el key director o producer. 
 5. Muéstralo en una tarjeta por cada persona.

*/

let people = [];

for(let i = 0; i < data.films.length; i++){ 
    people.push(directors(data.films[i]));
    people.push(producers(data.films[i]));
}

function onlyNames(value, index, self){
    return self.indexOf(value) === index;
}

let nameList = people.filter(onlyNames);
console.log(nameList);

/*let moviesAndStaff = [];
for(let i = 0; i < data.films.length; i++){
    moviesAndStaff.push(staffArray(data.films[i]));
}
console.log(moviesAndStaff);

/*for(let i = 0; i < moviesAndStaff.length; i++){
    for(let j = 0; j < nameList.length; j++){
       if(moviesAndStaff[i].includes(nameList[j])){
           console.log(moviesAndStaff[i] + " contiene a " + nameList[j]);
       }
    }
}

/* Recorrer la lista de nombres
let movieList = [];
for(let i = 0; i < data.films.length; i ++){
    for(let j = 0; j < nameList.length; j ++){
    movieList.push(search(nameList[j], data.films[i]));
    }
}
console.log(movieList);

// Toma un nombre de la lista.
// Ve a data.films, busca en qué elemento del array aparece el nombre. 
// Filtra ¿?
// Devuelve el key title de esos elementos. */