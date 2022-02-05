import { movieCards } from './data.js';

import data from './data/ghibli/ghibli.js';

//
function displayMovies(){
    document.getElementById("staff-content").style.display = "none";
    document.getElementById("movies-content").style.display = "block";
}

let btnMovies = document.getElementById("btnMovies"); 
btnMovies.addEventListener("click", displayMovies);

//
function displayStaff(){
    document.getElementById("movies-content").style.display = "none";
    document.getElementById("staff-content").style.display = "block";
}

let btnStaff = document.getElementById("btnStaff");
btnStaff.addEventListener("click", displayStaff);

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