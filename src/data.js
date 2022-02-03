// estas funciones son de ejemplo

export const example = (movies) => {
  let numberOfElements = movies.length;
  let i = 0;
  let aqui = "";
  let arrayAqui = [];
 while(numberOfElements > i){
    let title = movies[i].title;
    let year = movies[i].release_date;
    aqui = title + " " + year;
    arrayAqui.push(aqui);

    i++;
 }
    if(i === numberOfElements){
    return arrayAqui;
    } 

};

export const anotherExample = () => {
  return 'OMG';
};
