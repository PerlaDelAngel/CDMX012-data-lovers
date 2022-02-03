import { example } from './data.js';

import data from './data/ghibli/ghibli.js';

let numberElements = data.films.length;

let imprimir = document.getElementById("movies");
let escribimos = "";

for(let i = 0; numberElements > i; i++) {
    let experimento = (example(data.films))[i];
    let bonito = experimento + "  ";
    escribimos += bonito;
}
imprimir.innerHTML = escribimos; 
