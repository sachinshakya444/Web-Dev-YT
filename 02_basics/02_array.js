const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)
console.log(marvel_heros);
console.log(allHeros)

// concat return new array while push changes in existing array

const all_new_heros = [...marvel_heros,...dc_heros]

console.log(all_new_heros);

// spread operator all can do this we rarely use concat most of the time we see spread operator in industries codes

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// here as we dont like this syntax we want to write in a single array just like we doing with concat
// so here we use flat which takes number which tells how much depth you want to go in
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

// sometimes we select data from webpage then it  comes in forme of json stirng 
//but we want in array
console.log(Array.isArray("Sachin")); 
// here we can check wheather it is array or not

console.log(Array.from("Sachin"));
//here we with from we can make it array of values we are given

console.log(Array.from({name: "Hitesh"}))
//it give empty array when it is unable to form an array


let score1 = 100;
let score2 = 200;
let score3 = 300;

// arrayof returns a new array from set of elements
console.log(Array.of(score1,score2,score3))

