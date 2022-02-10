// Nos devuelve un array con poster, titulo y rating de una pelicula.
export const movieCards = (movies) => {
  let movie = [movies.poster, movies.title, movies.rt_score];
  return movie;
};

// Nos devuelve un array ordenado de A a Z, para los titulos de las peliculas.
export const sortByAZMovies = (movieTitles) => {
  let moviesAZ = movieTitles.sort();
  return moviesAZ;
};

// Nos devuelve un array ordenado de Z a A, para los titulos de las peliculas.
export const sortByZAMovies = (movieTitles) => {
  let moviesZA = movieTitles.sort();
  moviesZA.reverse();
  return moviesZA;
}

// Nos devuelve un array ordenado de mayor a menor, para los ratings de las peliculas.
export const sortByHR = (movieRating) => {
  let movieHR = movieRating.sort(function(a, b){
    return b - a;
  });
  return movieHR;
}

// Nos devuelve un array ordenado de menor a mayor, para los ratings de las peliculas.
export const sortByLR = (movieRating) => {
  let movieLH = movieRating.sort(function(a, b){
    return a - b;
  });
  return movieLH;
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
  let directorMovieTitles = [name];

  for(let j = 0; j < movies.length; j++){
      if(movies[j].director == name){
        directorMovieTitles.push(movies[j].title);
      }
  }

  return directorMovieTitles;
};

// Nos devuelve el nombre del productor y todas las peliculas en las que ha participado.
export const producerTitles = (movies, name) => {
  let producerMovieTitles = [name];

  for(let j = 0; j < movies.length; j++){
      if(movies[j].producer == name){
        producerMovieTitles.push(movies[j].title);
      }
  }

  return producerMovieTitles;
};

// Nos devuelve un array ordenado de A a Z, para los titulos de las peliculas.
export const sortByAZStaff = (staffNames) => {
  let moviesAZ = staffNames.sort();
  return moviesAZ;
};

// Nos devuelve un array ordenado de Z a A, para los titulos de las peliculas.
export const sortByZAStaff = (staffNames) => {
  let moviesZA = staffNames.sort();
  moviesZA.reverse();
  return moviesZA;
}