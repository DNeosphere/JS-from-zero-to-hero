// Ahora que tenemos nuestro HTML y CSS, es hora de darle vida con JavaScript <3

// 1. Seleccionar los elementos HTML que vamos a utilizar: 
// - Imagen de los pokemon
// - Stats de cada uno

// Pokemon 1
const poke1Img = document.querySelector(".pokemon-1__img")
const poke1Name = document.querySelector(".pokemon-1__name")
const poke1Power = document.querySelector(".pokemon-1__power")
const poke1Type = document.querySelector(".pokemon-1__type")

// Pokemon 2
const poke2Img = document.querySelector(".pokemon-2__img")
const poke2Name = document.querySelector(".pokemon-2__name")
const poke2Power = document.querySelector(".pokemon-2__power")
const poke2Type = document.querySelector(".pokemon-2__type")

// 2 - Analizar la API de Pokemon :)
// - Haz un llamado a la URL https://pokeapi.co/api/v2/pokemon/ y analiza cómo devuelve su respuesta
// Al API retorna un pokemon https://pokeapi.co/api/v2/pokemon/{ID} si se provee un ID al final. 
// Para enfrentar 2 pokemones aleatores, necesitamos hacer 2 llamados a la API con 2 n´¨úmeros aleatorios entre el 1 y el 900


// 3 - Crear una función que genere un número random entre 1 y 900.

const getRandomNumber = (numMin, numMax) => {
    return Math.floor(Math.random() * (numMax - numMin + 1) + numMin)
}

// 4 - Asignar un número random al ID de los que serán nuestros pokemons

const poke1ID = getRandomNumber(1, 900)
const poke2ID = getRandomNumber(1,900)

// 5 - Crear una función para traer (fetch) data de la API
// Dale una mirada a la función fetch -> https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

const getPokemon = async (pokeID) => {
    const response = await fetch(` https://pokeapi.co/api/v2/pokemon/${pokeID}`)
    const data = await response.json()
    return data
}

const createPokemon = async (pokeID) => {
    const poke1 = await getPokemon(poke1ID)
    console.log(poke1);
}

createPokemon(poke1ID)

