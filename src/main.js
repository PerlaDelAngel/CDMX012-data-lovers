import { movieCards, movieCharacters, directors, producers, directorTitles, producerTitles, sortByAZMovies, sortByHR, sortByAZStaff, sortByHRStaff } from './data.js';

import data from './data/ghibli/ghibli.js';

// DESPLEGAR SECCIONES
const sectionMovies = document.getElementById("movies-content");
const sectionOneMovie = document.getElementById("individual-movies");
const sectionStaff = document.getElementById("staff-content");

function displaySections(hideSection, secHideSection, showSection){
    hideSection.style.display = "none";
    secHideSection.style.display = "none";
    showSection.style.display = "block";
}

document.getElementById("btnMovies").addEventListener("click", ()=>{displaySections(sectionStaff, sectionOneMovie, sectionMovies)});

document.getElementById("btnStaff").addEventListener("click", ()=>{ displaySections(sectionMovies, sectionOneMovie, sectionStaff)});

// SECCIÓN DE PELÍCULAS -----------------------------------------------------------------------
//Array bidimensional donde se van a guardar las películas con su poster, título, rating y id.
let allMovies = []; 

// Le agrega al array anterior los datos obtenidos de data.films.
for(let i = 0; i < data.films.length; i++){ 
    allMovies.push(movieCards(data.films[i]));
}

// Crea e imprime tarjetas (artículos) en la sección movieList del HTML.
function printMovieCards(){
    document.getElementById("movieList").innerHTML = "";
    for(let j = 0; j < allMovies.length; j++){
        let elementArticle = document.createElement("article");
        elementArticle.setAttribute("id", allMovies[j][3]);

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

printMovieCards(); // Imprime películas

//FUNCIONALIDAD DEL FILTRO DE SORT BY EN LA SECCIÓN DE MOVIES
//Llama al elemento select de la sección de Movies y lo guarda en una variable
const selectSortMovies = document.querySelector("#selectSortMovies");

//Es la función de lo que se va a hacer según el elemento que se selccione en el Select
const selectedSort = () => {
    const selectedOption = selectSortMovies.selectedIndex; 
    
    if (selectedOption === 1){ //Para la primera opción
        printMovieCards(sortByHR(allMovies));
    } if (selectedOption === 2){
        printMovieCards(sortByHR(allMovies).reverse());
    } if (selectedOption === 3){
        printMovieCards(sortByAZMovies(allMovies));
    } if (selectedOption === 4) {
        printMovieCards(sortByAZMovies(allMovies).reverse());
    }
}

//Agrega el evento a ejecutar cuando haya un cambio en el select
selectSortMovies.addEventListener("change", selectedSort);

//SECCIÓN PARA IMPRIMIR INFORMACIÓN DE CADA PELÍCULA
// 1. Escucha cuando el usuario le pique a una tarjeta (addEventListener y id de la tarjeta).
// 2. Obten la info de esa tarjeta (data). => busca el id en data.films y jala la informacion.
// 3. Corre una funcion que imprima la info de la tarjeta (main).
let movieList = document.getElementById("movieList");
let moviesArticles = movieList.getElementsByTagName("ARTICLE");

for(let i = 0; i < moviesArticles.length; i++){
   moviesArticles[i].addEventListener("click", () => {
    let movieId = moviesArticles[i].getAttribute("id");
    document.getElementById("individual-movies").innerHTML = "";
    for(let j = 0; j < data.films.length; j++){
        if(movieId === data.films[j].id){
            displaySections(sectionMovies, sectionStaff, sectionOneMovie);

            let elementSection = document.createElement("section");

            let elementH2 = document.createElement("h2");
            elementH2.innerHTML = data.films[j].title;

            let elementPR  = document.createElement("aside");

            let poster = document.createElement("img");
            poster.setAttribute("src", data.films[j].poster);

            let elementP = document.createElement("p");
            elementP.setAttribute("class", "description");
            elementP.innerHTML = "<strong>Release date: </strong>" + data.films[j].release_date + "<br><strong> Director: </strong>" + data.films[j].director + "<br><strong> Producer: </strong>" + data.films[j].producer + "<br><strong> Description: </strong>" + data.films[j].description;

            let elementRating = document.createElement("p");
            elementRating.setAttribute("class", "rating");
            elementRating.innerHTML = "<strong><span style='color:#FDCD00; font-size:150%';> ★ </span>" + data.films[j].rt_score + "% </strong>";

            elementPR.append(poster, elementRating);
            elementSection.append(elementPR, elementP);

            // Seccion de los personajes (:

            console.log(movieCharacters(data.films[j]));

            document.getElementById("individual-movies").append(elementH2, elementSection);
        }
    }
});
}

// SECCIÓN DE DIRECTORES Y PRODUCTORES -------------------------------------------------------------
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
const directorTitlesArray = [];
const directorTitlesArrayModif = [];

for(let i = 0; i < nameList.length; i++){
    directorTitlesArray.push(directorTitles(data.films, nameList[i]));
    directorTitlesArrayModif.push(directorTitles(data.films, nameList[i]));
}

//Saca un array con los titulos de las peliculas donde participó cada productor
const producerTitlesArray = [];
const producerTitlesArrayModif = [];

for(let i = 0; i < nameList.length; i++){
    producerTitlesArray.push(producerTitles(data.films, nameList[i]));
    producerTitlesArrayModif.push(producerTitles(data.films, nameList[i]));
}

const staff = directorTitlesArray.concat(producerTitlesArray);
const staffModif = directorTitlesArray.concat(producerTitlesArray);

function printStaff(staff){
    document.getElementById("staffList").innerHTML = "";
    for(let j = 0; j < staff.length; j++){
        if (staff[j].length > 3){ // Para que no impra arrays sin películas
            let elementArticle = document.createElement("article");
            elementArticle.innerHTML = "<h3>" + staff[j][0] + "</h3> <span style='font-size:90%;'>" + staff[j][1] + "</span>";

            let elementOl = document.createElement("ol");

            for(let i = 2; i < staff[j].length; i++){ 
                if(staff[j][i].length > 0){ // Para que no se impra el rating como parte de la lista
                    let elementLi = document.createElement("li");
                    elementLi.innerHTML =  staff[j][i];
                    elementOl.appendChild(elementLi);
                } 
            elementArticle.appendChild(elementOl);
            }

            let elementP = document.createElement("p"); // Para pegarlo después de la lista
            elementP.innerHTML = "<strong><span style='color:#FDCD00; font-size:150%';> ★ </span>Average Rating: " + staff[j][(staff[j].length)-1] + "%</strong>";
            elementArticle.appendChild(elementP);
            
            document.getElementById("staffList").appendChild(elementArticle);
        }
    }
}

printStaff(staff);

const btnAll = document.querySelector("#allRadio");
btnAll.addEventListener("click", filter);

const btnDirectors = document.querySelector("#directorRadio");
btnDirectors.addEventListener("click", filter);

const btnProducers = document.querySelector("#producerRadio");
btnProducers.addEventListener("click", filter);

const selectSortStaff = document.querySelector("#selectSortStaff");

let c = 1;
function filter() {
    if(btnAll.checked){
        c = 1;
        selectSortStaff.selectedIndex = 0;
        printStaff(staff);
    }
    if(btnDirectors.checked){
        c = 2;
        selectSortStaff.selectedIndex = 0;
        printStaff(directorTitlesArray);
    }
    if(btnProducers.checked){
        c = 3;
        selectSortStaff.selectedIndex = 0;
        printStaff(producerTitlesArray);
    }
}

function sort(){
    const selectedOption = selectSortStaff.selectedIndex;
    if (c === 1){
        if (selectedOption === 1){
            let staffHR = sortByHRStaff(staffModif);
            printStaff(staffHR);
        } if (selectedOption === 2){
            let staffLR = sortByHRStaff(staffModif).reverse();
            printStaff(staffLR);
        } if (selectedOption === 3){
            let staffAZ = sortByAZStaff(staffModif);
            printStaff(staffAZ);
        } if (selectedOption === 4){
            let staffZA = sortByAZStaff(staffModif).reverse();
            printStaff(staffZA);
        }
    }
    if (c === 2){
        if (selectedOption === 1){
            let staffHR = sortByHRStaff(directorTitlesArrayModif);
            printStaff(staffHR);
        } if (selectedOption === 2){
            let staffLR = sortByHRStaff(directorTitlesArrayModif).reverse();
            printStaff(staffLR);
        } if (selectedOption === 3){
            let staffAZ = sortByAZStaff(directorTitlesArrayModif);
            printStaff(staffAZ);
        } if (selectedOption === 4){
            let staffZA = sortByAZStaff(directorTitlesArrayModif).reverse();
            printStaff(staffZA);
        }
    }
    if (c === 3){
        if (selectedOption === 1){
            let staffHR = sortByHRStaff(producerTitlesArrayModif);
            printStaff(staffHR);
        } if (selectedOption === 2){
            let staffLR = sortByHRStaff(producerTitlesArrayModif).reverse();
            printStaff(staffLR);
        } if (selectedOption === 3){
            let staffAZ = sortByAZStaff(producerTitlesArrayModif);
            printStaff(staffAZ);
        } if (selectedOption === 4){
            let staffZA = sortByAZStaff(producerTitlesArrayModif).reverse();
            printStaff(staffZA);
        }
    }
}

selectSortStaff.addEventListener("change", sort);

//Botón para subir hasta el principio de la página 
document.getElementById("button-up").addEventListener("click", () => {
    window.scrollTo(0,0);
})