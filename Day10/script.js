const options = {
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
};

const URL = "https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1";

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
    container.append(createMovieCard(movie));
  });
}

async function getPopularMovies() {
  // TODO 1. Loading 상태를 표시하세요.

  // TODO 2. try / catch 구조를 작성하세요.
  try {
    // TODO 3. fetch()와 await를 사용해 Response를 받으세요.
    // TODO 4. response.ok가 false라면 오류 안내 문구를 표시하고 return으로 함수를 종료하세요.
    // TODO 5. response.json()으로 데이터를 변환하세요.
    // TODO 6. Loading 문구를 지우세요.
    // TODO 7. data.results를 renderMovies()에 전달하세요.
  } catch (error) {
    // TODO 8. 사용자에게 오류 안내 문구를 표시하세요.
    // TODO 9. console.error(error)로 실제 오류를 출력하세요.
  }
}

getPopularMovies();
