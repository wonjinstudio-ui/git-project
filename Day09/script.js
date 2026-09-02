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

  const poster = document.createElement("img");
  poster.src = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : "https://placehold.co/500x750?text=No+Image";
  poster.alt = `${title} 포스터`;

  const titleEl = document.createElement("h3");
  titleEl.textContent = title;

  const rating = document.createElement("p");
  rating.textContent = `평점 ${vote_average}`;

  card.append(poster, titleEl, rating);

  return card;
}

function renderMovies(movies) {
  movies.forEach((movie) => {
    const movieCard = createMovieCard(movie);
    container.append(movieCard);
  });
}

async function getTopRatedMovies() {
  container.textContent = "평점 높은 영화 목록을 불러오는 중...";

  const response = await fetch(URL, options);
  const data = await response.json();

  container.textContent = "";
}

getTopRatedMovies();
