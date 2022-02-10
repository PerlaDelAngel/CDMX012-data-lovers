import { describe, it } from 'eslint/lib/rule-tester/rule-tester';
import { movieCards, sortByAZMovies, sortByHR } from '../src/data.js';

describe('movieCards', () => {
  it('is a function', () => {
    expect(typeof movieCards).toBe('function');
  });

  it('returns ` movie poster, title and rating `', () => {
    const films={
      "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
      "title": "Castle in the Sky",
      "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
      "director": "Hayao Miyazaki",
      "producer": "Isao Takahata",
      "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Castle_in_the_Sky.jpg",
      "release_date": "1986",
      "rt_score": "95"
    }
    expect(movieCards(films)).toEqual(["https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Castle_in_the_Sky.jpg", "Castle in the Sky", "95"]);
  });
});

describe('sortByAZMovies', () => {
  it('is a function', () => {
    expect(typeof sortByAZMovies).toBe('function');
  });

  it('returns ` sorted array by alphabetical order`', () => {
    const array1 = [["ABC", "Eli"], ["1", "Perla"], ["TH", "Isabela"]];
    expect(sortByAZMovies(array1)).toEqual([["ABC", "Eli"], ["TH", "Isabela"], ["1", "Perla"]]);
  });
});

describe('sortByHR', () => {
  it('is a function', () => {
    expect(typeof sortByHR).toBe('function');
  });

  it('returns ` sorted array by rating order`', () =>{
    const array1 = [["ABC", "Eli", "100"], ["1", "Perla", "120"], ["TH", "Isabela", "110"]];
    expect(sortByHR(array1)).toEqual([["1", "Perla", "120"], ["TH", "Isabela", "110"], ["ABC", "Eli", "100"]]);
  });
});
