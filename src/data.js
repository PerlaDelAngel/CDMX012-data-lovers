// Nos devuelve un array con poster, titulo y rating de una pelicula.
export const movieCards = (movies) => {
  let movie = [movies.poster, movies.title, movies.rt_score];
  return movie;
};

// Nos devuelve un array ordenado de A a Z, para los titulos de las peliculas.
// Si a = b, regresa 0: a, b
// Si a < b, regresa -1: a, b
// Si b < a, regresa 1: b, a

export const sortByAZMovies = (movieTitles) => {
  let moviesAZ = movieTitles.sort(function(a,b){
    if(a[1] === b[1]){
      return 0;
    } if(a[1] < b[1]){
      return -1;
    } if(a[1] > b[1]) {
      return 1;
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

  for(let j = 0; j < movies.length; j++){
      if(movies[j].director == name){
        directorMovieTitles.push(movies[j].title);
      }
  }

  return directorMovieTitles;
};

// Nos devuelve el nombre del productor y todas las peliculas en las que ha participado.
export const producerTitles = (movies, name) => {
  let producerMovieTitles = [name, "as producer of:"];

  for(let j = 0; j < movies.length; j++){
      if(movies[j].producer == name){
        producerMovieTitles.push(movies[j].title);
      }
  }

  return producerMovieTitles;
};

// Nos devuelve un array ordenado de A a Z, para los directores y productores.
export const sortByAZStaff = (staffNames) => {
  let staffAZ = staffNames.sort(function(a,b){
    if(a[0] === b[0]){
      return 0;
    } if(a[0] < b[0]){
      return -1;
    } if(a[0] > b[0]) {
      return 1;
    }});
  return staffAZ;
};