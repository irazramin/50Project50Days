const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5959f7d62a9624ad763a475015f93dae&page=1";

const IMAGE_PATH = "https://image.tmdb.org/t/p/w1280";

const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=5959f7d62a9624ad763a475015f93dae&query="';

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

getMovies(API_URL);
async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  getMovieData(data.results);
}

function getMovieData(movies) {
  main.innerHTML = "";

  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;

    const movieEl = document.createElement("div");
    movieEl.classList.add('movie');
    movieEl.innerHTML = `
          <img
          src="${IMAGE_PATH + poster_path}"
          alt="${title}"
        />
        <div class="movie-info">
          <h3>${title}</h3>
          <span class="${voteAvg(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
          <h3>Overview</h3>
          <p>
            ${overview}
          </p>
        </div>
          
          `;

    main.appendChild(movieEl);
  });
}
function voteAvg(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchValue = search.value;

  if (searchValue && searchValue !== "") {
    getMovies(SEARCH_API + searchValue);
    search.value = "";
  } else {
    window.location.reload();
  }
});
