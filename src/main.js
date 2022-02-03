import { example } from './data.js';

import data from './data/ghibli/ghibli.js';

let allMovies = [];

for(let i = 0; i < data.films.length; i++){
    allMovies.push(example(data.films[i]));
}
 
for(let j = 0; j < allMovies.length; j++){
    let elementArticle = document.createElement("article");
    let text = document.createTextNode(allMovies[j][0] + " " + allMovies[j][1] + " " + allMovies[j][2]);
    elementArticle.appendChild(text);
    document.body.appendChild(elementArticle);
}