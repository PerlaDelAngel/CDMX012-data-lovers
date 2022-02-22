// Nos devuelve un array con poster, titulo y rating de una pelicula.
export const movieCards = (movies) => {
  let movie = [movies.poster, movies.title, movies.rt_score, movies.id];
  return movie;
};

// Nos devuelve un array ordenado de A a Z, para los titulos de las peliculas.
// Si a = b, regresa 0: a, b
// Si a < b, regresa -1: a, b
// Si b < a, regresa 1: b, a

export const sortByAZMovies = (movies) => {
  let moviesAZ = movies.sort(function(a,b){
    if(a[1] === b[1]){
      return 0;
    } if(a[1] < b[1]){
      return -1;
    }});
  return moviesAZ;
};

// Nos devuelve un array ordenado de mayor a menor, para los ratings de las peliculas.
export const sortByHR = (movieRating) => {
  let movieHR = movieRating.sort(function(a, b){
    return b[2] - a[2];
  });
  return movieHR;
}

//PERSONAJES
//TEST Devuelve un array bidimensional por película, en donde cada personaje tiene 5 elementos
export const movieCharacters = (movie) => {
  let characters = [];

  movie.people.forEach(character => {
    let oneCharacter = [character.name, character.img, character.gender, character.age, character.specie];
    characters.push(oneCharacter);
  });

  return characters;
}
//TEST Ordena un array de personajes en orden alfabético
export const sortByAZCharacters = (movieCharacters) => {
  let charactersAZ = movieCharacters.sort(function(a,b){
    if(a[0] === b[0]){
      return 0;
    } if(a[0] < b[0]){
      return -1;
    }});
  return charactersAZ;
};

//TEST Ordena un array de personajes por edad si tienen la edad como un número
export const sortByAgeNumber = (movieCharacters) => {
  let ageInNumber = movieCharacters.filter(character => character[3].length < 5 && character[3]!="NA" && character[3]!="");

  let charactersAge = ageInNumber.sort(function(a, b){
    return parseInt(a[3]) - parseInt(b[3]);
  });

  return charactersAge; 
}

//TEST Ordena un array de personajes por edad si tienen la edad en una string
export const sortByAgeString = (movieCharacters) => {
  let ageInString = movieCharacters.filter(character => character[3].length > 4 || character[3]==="NA" || character[3]==="");

   ageInString.forEach(character => {
    if(character[3].includes("Child")){
      character.push(1);
    } else if(character[3].includes("Teenager") || character[3].includes("12")){
      character.push(2);
    } else if(character[3].includes("Young") || character[3].includes("14")){
      character.push(3);
    } else if(character[3].includes("Adult") || character[3].includes("23") || character[3].includes("20")){
      character.push(4);
    } else if(character[3].includes("Middle age") || character[3].includes("40")){
      character.push(5);
    } else if(character[3].includes("50") || character[3].includes("Elder")){
      character.push(6);
    } else {
      character.push(7);
    }
  }) 

  let ageStringSorted = ageInString.sort(function(a,b){
    return a[5] - b[5];
  });

  return ageStringSorted;
}

// Nos devuelve los nombres de los directores.
export const directors = (staff) => {
  let director = staff.director;
  return director;
};

// Nos devuelve los nombres de los productores.
export const producers = (staff) => {
  let producer = staff.producer;
  return producer;
};

// Nos devuelve el nombre del director y todas las peliculas en las que ha participado.
export const directorTitles = (movies, name) => {
  let directorMovieTitles = [name, "as director of:"];
  let directorMovieRatings = [0];

  for(let j = 0; j < movies.length; j++){
      if(movies[j].director == name){
        directorMovieTitles.push(movies[j].title);
        directorMovieRatings.push(Number(movies[j].rt_score));
      }
  }

  let numMovies = directorMovieRatings.length-1;
  let averageRatings = parseInt((directorMovieRatings.reduce((a,b) => {
    return a + b;
  }))/numMovies);

  directorMovieTitles.push(averageRatings)
  return directorMovieTitles;
};


// Nos devuelve el nombre del productor y todas las peliculas en las que ha participado.
export const producerTitles = (movies, name) => {
  let producerMovieTitles = [name, "as producer of:"];
  let producerMovieRatings = [0];

  for(let j = 0; j < movies.length; j++){
      if(movies[j].producer == name){
        producerMovieTitles.push(movies[j].title);
        producerMovieRatings.push(Number(movies[j].rt_score));
      }
  }

  let numMovies = producerMovieRatings.length-1;
  let averageRatings = parseInt((producerMovieRatings.reduce((a,b) => {
    return a + b;
  }))/numMovies);

  producerMovieTitles.push(averageRatings)

  return producerMovieTitles;
};

// Nos devuelve un array ordenado de A a Z, para los directores y productores.
export const sortByAZStaff = (staffNames) => {
  let staffAZ = staffNames.sort(function(a,b){
    if(a[0] === b[0]){
      return 0;
    } if(a[0] < b[0]){
      return -1;
    }});
  return staffAZ;
};

//TEST
// Nos devuelve un array ordenado de mayor a menor, para lxs directorxs y productorxs.
export const sortByHRStaff = (staff) => {
  let clearStaff = staff.filter((arrayStaff) => arrayStaff.length > 3)

  let staffHR = clearStaff.sort(function(a, b){
      return b[(b.length)-1] - a[(a.length)-1];
    });
  return staffHR;
}
