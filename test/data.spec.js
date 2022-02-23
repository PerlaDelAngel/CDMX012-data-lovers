import { describe, it } from 'eslint/lib/rule-tester/rule-tester';

import { movieCards, movieCharacters, sortByAZMovies, sortByHR, directors, producers, directorTitles, producerTitles, sortByAZStaff, sortByHRStaff, sortByAZCharacters, sortByAgeNumber, sortByAgeString } from '../src/data.js';

describe('movieCards', () => {
  it('is a function', () => {
    expect(typeof movieCards).toBe('function');
  });

  it('returns ` movie poster, title, rating and id`', () => {
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
    expect(movieCards(films)).toEqual(["https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Castle_in_the_Sky.jpg", "Castle in the Sky", "95", "2baf70d1-42bb-4437-b551-e5fed5a87abe"]);
  });
});

describe('movieCharacters', () => {
  it('is a function', () => {
    expect(typeof movieCharacters).toBe('function');
  });

  it('returns an array of each characters name and image', () => {
    const film={
      "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
      "title": "Castle in the Sky",
      "people": [
        {
          "id": "fe93adf2-2f3a-4ec4-9f68-5422f1b87c01",
          "name": "Pazu",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8b/Pazu.jpg",
          "gender": "Male",
          "age": "13",
          "specie": "Human"
        },
        {
          "id": "598f7048-74ff-41e0-92ef-87dc1ad980a9",
          "name": "Lusheeta Toel Ul Laputa",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c3/Sheeta.jpg",
          "gender": "Female",
          "age": "13",
          "specie": "Human"
        },
        {
          "id": "3bc0b41e-3569-4d20-ae73-2da329bf0786",
          "name": "Dola",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/b3/Dola.png",
          "gender": "Female",
          "age": "60",
          "specie": "Human"
        },
      ]
    }
    expect(movieCharacters(film)).toEqual([["Pazu", "https://static.wikia.nocookie.net/studio-ghibli/images/8/8b/Pazu.jpg", "Male", "13", "Human"], ["Lusheeta Toel Ul Laputa", "https://static.wikia.nocookie.net/studio-ghibli/images/c/c3/Sheeta.jpg", "Female", "13", "Human"], ["Dola", "https://static.wikia.nocookie.net/studio-ghibli/images/b/b3/Dola.png", "Female", "60", "Human"]]);
  });
});

describe('sortByAZMovies', () => {
  it('is a function', () => {
    expect(typeof sortByAZMovies).toBe('function');

  });
  it('returns ` sorted array by alphabetical order`', () => {
    const array1 = [["ABC", "Eli"], ["1", "Perla"], ["TH", "Isabela"], ["Yes", "Perla"]];
    expect(sortByAZMovies(array1)).toEqual([["ABC", "Eli"], ["TH", "Isabela"], ["1", "Perla"], ["Yes", "Perla"]]);
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

describe('sortByAZCharacters', () => {
  it('is a function', () => {
    expect(typeof sortByAZCharacters).toBe('function');
  });

  it('returns ` sorted array of characters in alphabetical order`', () =>{
    const array1 = [['Pazu', 'https://static.wikia.nocookie.net/studio-ghibli/images/8/8b/Pazu.jpg', 'Male', '13', 'Human'], ['Lusheeta Toel Ul Laputa', 'https://static.wikia.nocookie.net/studio-ghibli/images/c/c3/Sheeta.jpg', 'Female', '13', 'Human'], ['Dola', 'https://static.wikia.nocookie.net/studio-ghibli/images/b/b3/Dola.png', 'Female', '60', 'Human'], ['Louis', 'https://static.wikia.nocookie.net/studio-ghibli/images/2/28/Charlies.jpg', 'Male', '30', 'Human']];
    expect(sortByAZCharacters(array1)).toEqual([['Dola', 'https://static.wikia.nocookie.net/studio-ghibli/images/b/b3/Dola.png', 'Female', '60', 'Human'], ['Louis', 'https://static.wikia.nocookie.net/studio-ghibli/images/2/28/Charlies.jpg', 'Male', '30', 'Human'], ['Lusheeta Toel Ul Laputa', 'https://static.wikia.nocookie.net/studio-ghibli/images/c/c3/Sheeta.jpg', 'Female', '13', 'Human'], ['Pazu', 'https://static.wikia.nocookie.net/studio-ghibli/images/8/8b/Pazu.jpg', 'Male', '13', 'Human']]);
  });
});

 describe('sortByAgeNumber', () => {
  it('is a function', () => {
    expect(typeof sortByAgeNumber).toBe('function');
  });

  it('returns ` sorted array by rating order`', () =>{
    const array1 = [["ABC", "Eli", "Hola", "100"], ["1", "Perla", "Adios", "120"], ["TH", "Isabela", "Hola", "110"], ["T", "234", "Si", "NA"]];
    expect(sortByAgeNumber(array1)).toEqual([["ABC", "Eli", "Hola", "100"], ["TH", "Isabela", "Hola", "110"], ["1", "Perla", "Adios", "120"]]);
  });
});

describe('sortByAgeString', () => {
  it('is a function', () => {
    expect(typeof sortByAgeString).toBe('function');
  });

  it('returns ` sorted array by rating order`', () =>{
    const array1 = [['Boh', 'https://static.wikia.nocookie.net/studio-ghibli/images/7/7e/Boh_winks.jpg', 'Male', 'Child', 'unknown'], ['Uncle Pom', 'https://static.wikia.nocookie.net/studio-ghibli/images/d/de/Uncle_Pom.png', 'Male', 'Unspecified/Elderly', 'Human'], ['General Muoro', 'https://static.wikia.nocookie.net/studio-ghibli/images/1/12/Muoro.jpg', 'Male', 'Unspecified/Adult', 'Human'], ['Catbus', 'https://static.wikia.nocookie.net/studio-ghibli/images/3/30/Catbus.jpg', 'Male', 'NA', 'Cat'], ['Mr. Okajima', 'https://static.wikia.nocookie.net/studio-ghibli/images/5/58/Mr._Okajima.png', 'Male', 'Middle age', 'Human'], ['Sugimura', 'https://static.wikia.nocookie.net/studio-ghibli/images/b/b7/Sugimura.jpg', 'Male', 'Young', 'Human'], ['Capo', 'https://static.wikia.nocookie.net/studio-ghibli/images/9/98/Aiuto_Gang_boss.jpg', 'Male', 'Teenager', 'Human']];
    expect(sortByAgeString(array1)).toEqual([['Boh', 'https://static.wikia.nocookie.net/studio-ghibli/images/7/7e/Boh_winks.jpg', 'Male', 'Child', 'unknown', 1], ['Capo', 'https://static.wikia.nocookie.net/studio-ghibli/images/9/98/Aiuto_Gang_boss.jpg', 'Male', 'Teenager', 'Human', 2], ['Sugimura', 'https://static.wikia.nocookie.net/studio-ghibli/images/b/b7/Sugimura.jpg', 'Male', 'Young', 'Human', 3], ['General Muoro', 'https://static.wikia.nocookie.net/studio-ghibli/images/1/12/Muoro.jpg', 'Male', 'Unspecified/Adult', 'Human', 4], ['Mr. Okajima', 'https://static.wikia.nocookie.net/studio-ghibli/images/5/58/Mr._Okajima.png', 'Male', 'Middle age', 'Human', 5], ['Uncle Pom', 'https://static.wikia.nocookie.net/studio-ghibli/images/d/de/Uncle_Pom.png', 'Male', 'Unspecified/Elderly', 'Human', 6], ['Catbus', 'https://static.wikia.nocookie.net/studio-ghibli/images/3/30/Catbus.jpg', 'Male', 'NA', 'Cat', 7]]);
  });
});

describe('directors', () => {
  it('is a function', () => {
    expect(typeof directors).toBe('function');
  });

  it('returns ` directors names `', () =>{
    const names = {
     "director": "Orlando",
     "producer": "Jaime",
     "photographer": "Maria"
    };
    expect(directors(names)).toBe("Orlando");
  });
});

describe('producers', () => {
  it('is a function', () => {
    expect(typeof producers).toBe('function');
  });

  it('returns ` producers names `', () =>{
    const names = {
     "director": "Orlando",
     "producer": "Jaime",
     "photographer": "Maria"
    };
    expect(producers(names)).toBe("Jaime");
  });
});

describe('directorTitles', () => {
  it('is a function', () => {
    expect(typeof directorTitles).toBe('function');
  });

  it('returns ` array with director name, "as director of:", movie titles, and average rating `', () =>{
    let name = "Orlando";
    const movies = [{
     "director": "Orlando",
     "producer": "Jaime",
     "photographer": "Maria",
     "title": "Titanic",
     "rt_score": 90
    },
    {
      "director": "Juan",
      "producer": "Jaime",
      "photographer": "Maria",
      "title": "Titanic 2",
      "rt_score": 98
    },
    {
      "director": "Orlando",
      "producer": "Jaime",
      "photographer": "Maria",
      "title": "Jurassic Park",
      "rt_score": 85
    }];
    expect(directorTitles(movies, name)).toEqual(["Orlando", "as director of:", "Titanic", "Jurassic Park", 87]);
  });
});

describe('producerTitles', () => {
  it('is a function', () => {
    expect(typeof producerTitles).toBe('function');
  });

  it('returns ` array with producer name, "as producer of:", movie titles, and average rating `', () =>{
    const name = "Jaime";
    const movies = [{
     "director": "Orlando",
     "producer": "Jaime",
     "photographer": "Maria",
     "title": "Titanic",
     "rt_score": 60
    },
    {
      "director": "Juan",
      "producer": "Jaime",
      "photographer": "Maria",
      "title": "Titanic 2",
      "rt_score": 96
    },
    {
      "director": "Orlando",
      "producer": "Jaime",
      "photographer": "Maria",
      "title": "Jurassic Park",
      "rt_score": 75
    }];
    expect(producerTitles(movies, name)).toEqual(["Jaime", "as producer of:", "Titanic", "Titanic 2", "Jurassic Park", 77]);
  });
});

describe('sortByAZStaff', () => {
  it('is a function', () => {
    expect(typeof sortByAZStaff).toBe('function');
  });

  it('returns ` sorted array by alphabetical order `', () =>{
    const array1 = [["Orlando", "as director of:", "Titanic", "Totoro"], ["Jaime", "as producer of:", "Titanic", "Titanic 2", "Jurassic Park"], ["Maria", "as director of:", "Jurassic Park", "Nemo"], ["Maria", "as producer of:", "Encanto", "Luca"]]
    expect(sortByAZStaff(array1)).toEqual([["Jaime", "as producer of:", "Titanic", "Titanic 2", "Jurassic Park"], ["Maria", "as director of:", "Jurassic Park", "Nemo"], ["Maria", "as producer of:", "Encanto", "Luca"], ["Orlando", "as director of:", "Titanic", "Totoro"]]);
  });
});

describe('sortByHRStaff', () => {
  it('is a function', () => {
    expect(typeof sortByHRStaff).toBe('function');
  });

  it('returns a sorted array by highest rating', () =>{
    const array2 = [["Orlando", "as director of:", "Titanic", "Totoro", 98], ["Jaime", "as producer of:", "Titanic", "Titanic 2", "Jurassic Park", 78], ["Maria", "as director of:"], ["Maria", "as producer of:", "Encanto", "Luca", 100]]
    expect(sortByHRStaff(array2)).toEqual([["Maria", "as producer of:", "Encanto", "Luca", 100], ["Orlando", "as director of:", "Titanic", "Totoro", 98], ["Jaime", "as producer of:", "Titanic", "Titanic 2", "Jurassic Park", 78]]);
  });
});