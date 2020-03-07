const $pokemon = document.getElementById('pokemon')
const $name = document.getElementById('name')
const $type = document.getElementById('type')
const $abilitys = document.getElementById('abilitys')
const $form = document.getElementById('form')
const $random = document.getElementById('random')


function renderImage(img){
  $pokemon.setAttribute('src', img)
}

function renderInfo(name, type, ability){
  $name.textContent = name
  $type.textContent = type
  $abilitys.textContent = ability
}  

function searchPokemon(pokemon){
  const URL = `https://pokeapi.co/api/v2/pokemon/${pokemon}/`
  fetch(URL)
  .then(response => response.json())
  .then(data=>{
    renderImage(data.sprites.front_default)
    renderInfo(`NAME: ${data.name}`,
                `TYPE: ${data.types[0].type.name}`,
                `MAIN ABYLITY: ${data.abilities[0].ability.name}`)
  })
  .catch(
    renderImage("assets/img/404.png"),
    renderInfo('not found','not found','not found')
  )
}

searchPokemon('lucario')

$form.addEventListener("submit", (event)=>{
  event.preventDefault()
  const formData = new FormData(event.currentTarget)
  searchPokemon(formData.get('poke-name'))
})

function pokeRandom(number){
  const URL = `https://pokeapi.co/api/v2/pokemon/${number}/`
  fetch(URL)
  .then(response => response.json())
  .then(data=>{
    renderImage(data.sprites.front_default)
    renderInfo(`NAME: ${data.name}`,
                `TYPE: ${data.types[0].type.name}`,
                `MAIN ABYLITY: ${data.abilities[0].ability.name}`)
    
  })
}
function getRandomArbitrary(min, max) {
  return Math.floor( Math.random() * (max - min) + min);
}

$random.addEventListener('click', (event) => {
  pokeRandom(getRandomArbitrary(0, 802));
  
})