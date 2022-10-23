// Ahora que tenemos nuestro HTML y CSS, es hora de darle vida con JavaScript <3

// 1. Seleccionar los elementos HTML que vamos a utilizar: 
// - Imagen de los pokemon
// - Stats de cada uno

// Pokemon 1
let poke1ImgElement = document.querySelector(".pokemon-1__img")
let poke1NameElement = document.querySelector(".pokemon-1__name")
let poke1AttackElement = document.querySelector(".pokemon-1__attack")
let poke1DefenseElement = document.querySelector(".pokemon-1__defense")
let poke1TypeElement = document.querySelector(".pokemon-1__type")

// Pokemon 2
let poke2ImgElement = document.querySelector(".pokemon-2__img")
let poke2NameElement = document.querySelector(".pokemon-2__name")
let poke2AttackElement = document.querySelector(".pokemon-2__attack")
let poke2DefenseElement = document.querySelector(".pokemon-2__defense")
let poke2TypeElement = document.querySelector(".pokemon-2__type")

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

const createPokemon1 = async (pokeID) => {
    const pokemon1 = await getPokemon(poke1ID)
    const poke1Img = pokemon1.sprites.other['official-artwork']['front_default']

    poke1ImgElement.src = poke1Img
    poke1NameElement.innerHTML += pokemon1.name
    poke1AttackElement.innerHTML += pokemon1.stats[1]['base_stat']
    poke1DefenseElement.innerHTML += pokemon1.stats[2]['base_stat']
    poke1TypeElement.innerHTML += pokemon1.types[0].type.name

    console.log(pokemon1);
}

const createPokemon2 = async (pokeID) => {
    const pokemon2 = await getPokemon(poke2ID)
    const poke2Img = pokemon2.sprites.other['official-artwork']['front_default']

    poke2ImgElement.src = poke2Img
    poke2NameElement.innerHTML += pokemon2.name
    poke2AttackElement.innerHTML += pokemon2.stats[1]['base_stat']
    poke2DefenseElement.innerHTML += pokemon2.stats[2]['base_stat']
    poke2TypeElement.innerHTML += pokemon2.types[0].type.name

}





createPokemon1(poke1ID)
createPokemon2(poke2ID)

