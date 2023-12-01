const marvelHeros = ["Thor", "Ironman", "Spiderman"]
const dcHeros = ["Superman", "Batman", "Flash"]

//marvelHeros.push(dcHeros)
//console.log(marvelHeros);
//console.log(marvelHeros[3][1]);

//const allHeros = marvelHeros.concat(dcHeros)
//console.log(allHeros);

//const all_New_heros = [...marvelHeros, ...dcHeros]
//console.log(all_New_heros);

const another_arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 0]]] 
const real_another_arr = another_arr.flat(Infinity)
//console.log(real_another_arr);

//console.log(Array.isArray("Arpita"));
//console.log(Array.isArray(["Arpita", "Ankita", "Amisha"]));
//console.log(Array.from("Arpita"));
//console.log(Array.from({name:"Arpita"}));//interesting 

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));