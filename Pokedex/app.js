const pokeContainer = document.getElementById("poke-container");
const pokeCount = 150;
const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};

const mainType = Object.keys(colors);
const fetchData = async () => {
  for (let i = 1; i < pokeCount; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  createPokemonCard(data);
};

fetchData();

const createPokemonCard = (poke) => {
  const name = poke.name[0].toUpperCase() + poke.name.slice(1);
  const id = poke.id.toString().padStart(3, "0");
  const pokeTypes = poke.types.map((type) => type.type.name);
  const type =  mainType.find(type => pokeTypes.indexOf(type) > -1)
  const color = colors[type]

  const pokemonEl = document.createElement("div");
  pokemonEl.classList.add("pokemon");
  pokemonEl.style.backgroundColor = color
  const pokemonInnerHtml = `
        <div class="img-container">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png"" alt="">
    </div>
    <div class="info">
            <span class="number">#${id}</span>
            <h3 class="name">${name}</h3>
            <small class="types"><span>${type}</span></small>
    </div>
    `;
  pokemonEl.innerHTML = pokemonInnerHtml;
  pokeContainer.appendChild(pokemonEl);
};
