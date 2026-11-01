const nome = "Arthas";
const xp = 7500;

let rank;

if (xp <= 1000) {
  rank = "Ferro";
} else if (xp <= 2000) {
  rank = "Bronze";
} else if (xp <= 3500) {
  rank = "Prata";
} else if (xp <= 5000) {
  rank = "Ouro";
} else if (xp <= 6500) {
  rank = "Platina";
} else if (xp <= 8000) {
  rank = "Diamante";
} else if (xp <= 9000) {
  rank = "Ascendente";
} else if (xp <= 10000) {
  rank = "Imortal";
} else {
  rank = "Radiante";
}

console.log(`O herói de nome ${nome} está no nível de ${rank}`);
