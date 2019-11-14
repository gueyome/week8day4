let code = "CCGUCGUUGCGCUACAGC";
let ARN = [];
let trio = "AEEAZE";
let index = 0;

// Boucle pour remplir le tableau d'ARNs
while (typeof code[2+index] !== "undefined") {
  trio = code.slice(index, 3+index);
  ARN.push(trio);
  index += 3;
}

console.log(ARN);

let count = 0;

ARN.forEach (content => {
  switch (content) {
    case "UCU", "UCC", "UCA", "UCG", "AGU", "AGC":
      console.log(count);
      ARN[count] = "Sérine";
      count += 1;
      console.log(content);
      break;
    case "CCU", "CCC", "CCA", "CCG":
      console.log(count);
      ARN[count] = "Proline";
      count += 1;
      console.log(content);
      break;
    case "UUA", "UUG":
      console.log(count);
      ARN[count] = "Leucine";
      count += 1;
      console.log(content);
      break;
    case "UUU", "UUC":
      console.log(count);
      ARN[count] = "Phénylalanine";
      count += 1;
      console.log(content);
      break;
    case "CGU", "CGC", "CGA", "CGG", "AGA", "AGG":
      console.log(count);
      ARN[count] = "Arginine ";
      count += 1;
      console.log(content);
      break;
    case "UAU", "UAC":
      console.log(count);
      ARN[count] = "Tyrosine";
      count += 1;
      console.log(content);
      break;

  
    default:
      console.log(count);
      console.log("Cette entrée n'est pas reconnue");
      count += 1;
      break;
  }
})

console.log(ARN);
