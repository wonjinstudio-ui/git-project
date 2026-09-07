const options = {
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
};

const NOW_PLAYING_URL =
  "https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&page=1";

const form = document.querySelector("#search-form");
const input = document.querySelector("#search-input");
const container = document.querySelector("#movie-list");
const keywordList = document.querySelector("#keyword-list");
const clearButton = document.querySelector("#clear-keywords");
const savedKeywords = localStorage.getItem("keywords");

// TODO 03. 저장된 최근 검색어 배열 가져오기
let keywords;

function renderKeywords() {
  keywordList.textContent = "";

  keywords.forEach((keyword) => {
    const item = document.createElement("li");

    const keywordButton = document.createElement("button");

    keywordButton.className = "keyword-button";

    keywordButton.textContent = keyword;

    // TODO 심화 01. 최근 검색어를 클릭하여 다시 검색하기

    const removeButton = document.createElement("button");

    removeButton.className = "remove-button";

    removeButton.textContent = "X";

    removeButton.addEventListener("click", () => {
      // TODO 09. 최근 검색어 삭제하기
    });

    item.append(keywordButton, removeButton);

    keywordList.append(item);
  });
}

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
  container.textContent = "";

  movies.forEach((movie) => {
    container.append(createMovieCard(movie));
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const keyword = input.value.trim();

  if (!keyword) {
    return;
  }

  input.value = ""; // 검색창 비우기

  searchMovies(keyword);
});

async function searchMovies(keyword) {
  try {
    const encodedKeyword = encodeURIComponent(keyword);
    const url = `https://api.themoviedb.org/3/search/movie?query=${encodedKeyword}&language=ko-KR&page=1`;
    const response = await fetch(url, options);

    if (!response.ok) {
      container.textContent = "영화 정보를 불러오지 못했습니다.";

      return;
    }

    const data = await response.json();

    // TODO 04. 같은 검색어가 있다면 기존 위치에서 제거하기

    // TODO 05. 최신 검색어를 배열 맨 앞에 추가하기

    // TODO 06. 최근 검색어 배열 localStorage에 저장하기

    // TODO 07. 최근 검색어 목록 다시 그리기

    renderMovies(data.results);
  } catch (error) {
    container.textContent = "영화 정보를 불러오지 못했습니다.";

    console.error(error);
  }
}

async function getNowPlayingMovies() {
  try {
    const response = await fetch(NOW_PLAYING_URL, options);

    if (!response.ok) {
      container.textContent = "영화 정보를 불러오지 못했습니다.";

      return;
    }

    const data = await response.json();

    renderMovies(data.results);
  } catch (error) {
    container.textContent = "영화 정보를 불러오지 못했습니다.";

    console.error(error);
  }
}

// TODO 08. 새로고침 후에도 최근 검색어 표시하기

// TODO 심화 02. 최근 검색어 전체 삭제하기

getNowPlayingMovies();
