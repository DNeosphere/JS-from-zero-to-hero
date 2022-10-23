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


// 6 - Crear los pokemons. Haz varias pruebas a las API para examinar bien qué devuelve, esa data
// será necesaria para popular nuestros elementos HTML
// - Haz una llamada a la API de pokemon con el ID aleatorio de cada pokemon
// - Toma los elementos HTML que seleccionamos más arriba y utiliza su propiendad innerHTML para añadir la info que necesitamos de la API

const createPokemons = async (poke1ID, poke2ID) => {

    const pokemon1 = await getPokemon(poke1ID)

    poke1ImgElement.src = pokemon1.sprites.other['official-artwork']['front_default']
    poke1NameElement.innerHTML += pokemon1.name
    poke1AttackElement.innerHTML += pokemon1.stats[1]['base_stat']
    poke1DefenseElement.innerHTML += pokemon1.stats[2]['base_stat']
    poke1TypeElement.innerHTML += pokemon1.types[0].type.name

    const pokemon2 = await getPokemon(poke2ID)

    poke2ImgElement.src = pokemon2.sprites.other['official-artwork']['front_default']
    poke2NameElement.innerHTML += pokemon2.name
    poke2AttackElement.innerHTML += pokemon2.stats[1]['base_stat']
    poke2DefenseElement.innerHTML += pokemon2.stats[2]['base_stat']
    poke2TypeElement.innerHTML += pokemon2.types[0].type.name

    console.log(pokemon1);
}

// 7 - Vamos a practicar eventos en JS, de esta manera vamos a poder controlar cuándo traer pokemons desde la interfaz
// Nuestra función fetch va a traer pokemons cada que el código es ejecutado, es decir cuando la página se recarga
// Vamos a añadir un botón que recargue la página en cada click, así podemos obtener nuevos pokemons random cada vez.
// - Seleccionar el elmento HTML del botón
// - Llamar a la función createPokemons solo cuando se dé click a ese botón (lee sobre eventListeners https://www.w3schools.com/js/js_htmldom_eventlistener.asp )

const catchButton = document.querySelector('.button__catch')

createPokemons(poke1ID, poke2ID)

catchButton.addEventListener('click', () => {
    window.location.reload()
})





