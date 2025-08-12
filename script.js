// Lista Pokémon
const pokemons = [
    {nome: "POOCHYENA", nível: 2, genero: "Macho", hpAtual: 13, hpMax: 13 },
    {nome: "ZIGZANGOON", nível: 2, genero: "Fêmea", hpAtual: 13, hpMax: 13 },
    {nome: "DRAGONITE", nível: 5, genero: "Macho", hpAtual: 25, hpMax: 25 },
    {nome: "DRAGONITE", nível: 5, genero: "Fêmea", hpAtual: 21, hpMax: 21 },
    {nome: "DRAGONITE", nível: 5, genero: "Fêmea", hpAtual: 21, hpMax: 21 },
    {nome: "POOCHYENA", nível: 8, genero: "Fêmea", hpAtual: 15, hpMax: 15 },
    {nome: "WURMPLE", nível: 2, genero: "Macho", hpAtual: 7, hpMax: 10 },
]

// Loop para exibir mensagem para cada Pokémon
pokemons.forEach(pokemons => {
    console.log(`${pokemons.nome} cadastro com sucesso!`) 
})