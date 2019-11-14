let row_total = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

for (let row = 1; row <= row_total; row++) {
  let print_space = row_total - row;
  let print_star = row;
  console.log(" ".repeat(print_space)+"#".repeat(print_star));
}