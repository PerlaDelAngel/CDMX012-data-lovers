import { example } from './data.js';

import data from './data/ghibli/ghibli.js';

let allMovies = [];

for(let i = 0; i < data.films.length; i++){
    allMovies.push(example(data.films[i]));
}

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