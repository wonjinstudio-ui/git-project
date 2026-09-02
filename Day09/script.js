const options = {
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
};

const URL =
  "https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=1";

const container = document.querySelector("#movie-list");

function createMovieCard(movie) {
  const { title, vote_average, poster_path } = movie;

  const card = document.createElement("div");
  card.className = "movie-card";
}

function renderMovies(movies) {}

async function getTopRatedMovies() {
  const response = await fetch(URL, options);
  const data = await response.json();
}

getTopRatedMovies();
