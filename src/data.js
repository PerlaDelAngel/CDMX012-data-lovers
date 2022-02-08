export const movieCards = (movies) => {
  let movie = [movies.poster, movies.title, movies.release_date];
  return movie;
};

export const directors = (staff) => {
  let director = [staff.director, staff.title];
  return director;
};

export const producers = (staff) => {
  let producer = [staff.producer, staff.title];
  return producer;
};

export const staffArray = (movies) => {
  let info = [movies.title, movies.director, movies.producer];
  return info;
};


// Encuentra director1.
// Busca todas las películas que tengan "director : director1".
// Devuelve director 1 y todas las películas.
