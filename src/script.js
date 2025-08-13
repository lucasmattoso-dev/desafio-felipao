// 1) Variáveis: nome e XP do herói
let nome = "Luffy"
let xp = 8640

// 2) Variável que vai guardar o nível do herói
let nivel = ""

// 3) Estrutura de decisão: define o nível conforme o XP
if (xp < 1000) {
    nivel = "Ferro"
} else if (xp >= 1001 && xp <= 2000) {
    nivel = "Bronze"
}  else if (xp >= 2001 && xp <= 5000) {
    nivel = "Patra"
} else if (xp >= 5001 && xp <= 7000) {
    nivel = "Ouro"
} else if (xp >= 7001 && xp <= 8000) {
    nivel = "Platina"
} else if (xp >= 8001 && xp <= 9000) {
    nivel = "Ascendente"
} else if (xp >= 9001 && xp <= 10000) {
    nivel = "Imortal"
} else {
  nivel = "Radiante";
} 

// 4) Saída final 
console.log (`O Herói de nome ${nome} está no nível de ${nivel}`)