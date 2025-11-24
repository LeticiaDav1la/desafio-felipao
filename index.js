let herois = [
  { nome: "Leticia", xp: 845 },
  { nome: "Arthur", xp: 1500 },
  { nome: "Marina", xp: 5280 },
  { nome: "Carlos", xp: 11000 }
];

for (let i = 0; i < herois.length; i++) {
  let nivel = "";
  let xp = herois[i].xp;

  if (xp <= 1000) {
    nivel = "Ferro";
  } else if (xp >= 1001 && xp <= 2000) {
    nivel = "Bronze";
  } else if (xp >= 2001 && xp <= 5000) {
    nivel = "Prata";
  } else if (xp >= 5001 && xp <= 7000) {
    nivel = "Ouro";
  } else if (xp >= 7001 && xp <= 8000) {
    nivel = "Platina";
  } else if (xp >= 8001 && xp <= 9000) {
    nivel = "Ascendente";
  } else if (xp >= 9001 && xp <= 10000) {
    nivel = "Imortal";
  } else {
    nivel = "Radiante";
  }
  console.log('O Herói do nome **' + herois[i].nome +'** está no nivel de **' + nivel +'**');
}
