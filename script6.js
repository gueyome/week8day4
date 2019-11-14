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
    case "UCU": case "UCC": case "UCA": case "UCG": case "AGU": case "AGC":
      console.log(count);
      ARN[count] = "Sérine";
      count += 1;
      console.log(content);
      break;
    case "CCU": case "CCC": case "CCA": case "CCG":
      console.log(count);
      ARN[count] = "Proline";
      count += 1;
      console.log(content);
      break;
    case "UUA": case "UUG":
      console.log(count);
      ARN[count] = "Leucine";
      count += 1;
      console.log(content);
      break;
    case "UUU": case "UUC":
      console.log(count);
      ARN[count] = "Phénylalanine";
      count += 1;
      console.log(content);
      break;
    case "CGU": case "CGC": case "CGA": case "CGG": case "AGA": case "AGG":
      console.log(count);
      ARN[count] = "Arginine ";
      count += 1;
      console.log(content);
      break;
    case "UAU": case "UAC":
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
console.log(ARN[0] + "-" + ARN[1] + "-" + ARN[2] + "-" + ARN[3] + "-" + ARN[4] + "-" + ARN[5]);
