const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

console.log("Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70")
let responseArray1 = [];
entrepreneurs.forEach(entrepreneur => {
  if (entrepreneur['year'].toString().slice(0,3) == "197") {
    responseArray1.push(entrepreneur['first']);
  }
})
console.log(responseArray1);

console.log("Sors une array qui contient le prénom et le nom des entrepreneurs")
let responseArray2 = [];
entrepreneurs.forEach(entrepreneur => {
  responseArray2.push(entrepreneur['first']+" "+entrepreneur['last']);
})
console.log(responseArray2);

console.log("Quel âge aurait chaque inventeur aujourd'hui ?")
let age = 0;
let now = new Date().getFullYear();
entrepreneurs.forEach(entrepreneur => {
  age = now - entrepreneur['year'];
  console.log(entrepreneur['first'] + " " + entrepreneur['last'] + " a maintenant " + age+ " ans");
})
console.log("Trie les entrepreneurs par ordre alphabétique du nom de famille")

let names =[];
entrepreneurs.forEach(entrepreneur => {
  names.push(entrepreneur['last']);
})
console.log(names.sort());
