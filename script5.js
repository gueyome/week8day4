const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");
if (books.find(x => x.rented === 0 )) {
  console.log("Non");
} else {
  console.log("Oui");
}
console.log("-------------");

console.log("Quel est livre le plus emprunté ?");
let BookMostRented = books[0];
books.forEach(book => {
  if (book.rented > BookMostRented.rented) {
    BookMostRented = book;
  }
})
console.log(BookMostRented);
console.log("-------------");

console.log("Quel est le livre le moins emprunté ?");
let BookLeastRented = books[0];
books.forEach(book => {
  if (book.rented < BookLeastRented.rented) {
    BookLeastRented = book;
  }
})
console.log(BookLeastRented);
console.log("-------------");

console.log("Trouve le livre avec l'ID: 873495");
console.log(books.find(x => x.id === 873495 ));
console.log("-------------");

console.log("Supprime le livre avec l'ID: 133712");
let index = books.findIndex(x => x.id === 133712 );
books.splice(index,1)
console.log("-------------");

console.log("Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).");
let titles  =[];
books.forEach(book => {
  titles.push(book['title']);
})
titles = titles.sort();
titles.forEach(title => {
  console.log(books.find(x => x.title === title ));
})



