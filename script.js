// Compléter le code suivant pour rechercher le prix maximum dans la liste de prix. Quel est ce maximum ?
const prices = [1, 39, 25, 112, 111, 30, 211, 300, 5, 67];
let min = prices[0];

for (n of prices) {
  if (n < min) {
    min = n;
  }
}
// console.log(min);

// ----------------------------------------------------------

// Voici les dix derniers gagnants de la coupe départementale de Quidditch. Compléter le code suivant pour afficher les indices des valeurs de la liste égales à Broom broom. Combien de fois ont-ils gagné ?
const teams = [
  "Bois mort",
  "Broom broom",
  "Broom broom",
  "Snek",
  "Snek",
  "Merlin FTW",
  "Gandalf FTW",
  "Merlin FTW",
  "Broom broom",
  "Bois mort",
];
const val = "Broom broom"; // La valeur à trouver

for (let i = 0; i < teams.length; i++) {
  if (teams[i] === val) {
    // console.log(i);
  }
}

// ----------------------------------------------------------
// /** JavaScript : Recherche naïve dans une liste triée. */
const sortedTemperatures = [-3, 5, 12, 50, 50, 78, 94, 113, 129];
const valu = 50;
let i = 0;
while (i < sortedTemperatures.length && sortedTemperatures[i] <= valu) {
  if (sortedTemperatures[i] === valu) {
    // console.log(i);
  }
  i = i + 1;
}
// console.log("Fin");

/** JavaScript : Dichotomie. */
const temp = [-3, 5, 12, 50, 78, 94, 113, 129];
const values = 78;

let a = 0;
let b = temp.length - 1;

while (a <= b) {
  let m = Math.floor((a + b) / 2);
  if (temp[m] === values) {
    // console.log("trouvé", m);
    break;
  } else if (temp[m] < values) {
    a = m + 1;
  } else {
    b = m - 1;
  }
}

//le produit cartésien

const vehicles = ["Vélo", "Trottinette", "Roller"];
const colors = ["Rouge", "Bleu"];

for (a of vehicles) {
  for (b of colors) {
    // console.log(a, b);
  }
}

//suite de fibonacci
let twoBefore = 0;
// let oneBefore = 1;

// console.log(twoBefore);
// console.log(oneBefore);

// for (let i = 0; i < 10; i++) {
//   const current = twoBefore + oneBefore;
//   // console.log(current);
//   twoBefore = oneBefore;
//   oneBefore = current;
// }

// console.log(fibo)

// le tri à bulle
const numbers = [16, 10, 27, 11, 75, 94];
console.log(numbers.sort());

for (let i = 0; i < numbers.length; i++) {
  let min = numbers[i];
  let indexMin = i;
  for (let j = i + 1; j < numbers.length; j++) {
    if (numbers[j] < min) {
      min = numbers[j];
      indexMin = j;
    }
  }
  [numbers[i], numbers[indexMin]] = [numbers[indexMin], numbers[i]];
  console.log(min);
}
