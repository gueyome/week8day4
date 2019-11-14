// Un prompt s'affiche avec la question suivante
let number = prompt("De quel nombre veux-tu calculer la factorielle ?")
// Utilisateur rentre un nombre (par ex 4)
function factor(number) {
  let factor = 1;
  for(let count = 1; count <=number; count++){
    factor = factor * count;
  }
  return factor;
}
// Dans la console le résultat suivant est affiché
console.log(factor(number));

