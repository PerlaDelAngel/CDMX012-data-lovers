export const movieCards = (movies) => {
  let movie = [movies.poster, movies.title, movies.release_date];
  return movie;
};

export const directors = (staff) => {
  let director = staff.director;
  return director;
};

export const producers = (staff) => {
  let producer = staff.producer;
  return producer;
};

export const directorTitles = (movies, name) => {
  let directorMovieTitles = [name];

  for(let j = 0; j < movies.length; j++){
      if(movies[j].director == name){
        directorMovieTitles.push(movies[j].title);
      }
  }

  return directorMovieTitles;
};

export const producerTitles = (movies, name) => {
  let producerMovieTitles = [];

  for(let j = 0; j < movies.length; j++){
      if(movies[j].producer == name){
        producerMovieTitles.push(movies[j].title);
      }
  }

  return producerMovieTitles;
};