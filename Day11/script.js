const options = {
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
};

const POPULAR_URL =
  "https://api.themoviedb.org/3/tv/popular?language=ko-KR&page=1";

const form = document.querySelector("#search-form");

const input = document.querySelector("#search-input");

const container = document.querySelector("#tv-list");

const resultInfo = document.querySelector("#result-info");

function createTVCard(tv) {
  const { name, vote_average, poster_path } = tv;

  const card = document.createElement("div");

  card.className = "tv-card";

  const poster = document.createElement("img");

  poster.src = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : "https://placehold.co/500x750?text=No+Image";

  poster.alt = `${name} 포스터`;

  const titleEl = document.createElement("h3");

  titleEl.textContent = name;

  const rating = document.createElement("p");

  rating.textContent = `평점 ${vote_average}`;

  card.append(poster, titleEl, rating);

  return card;
}

function renderTVShows(tvShows) {
  tvShows.forEach((tv) => {
    const card = createTVCard(tv);

    container.append(card);
  });
}

async function getPopularTVShows() {
  container.textContent = "인기 TV 프로그램을 불러오는 중...";

  try {
    const response = await fetch(POPULAR_URL, options);

    if (!response.ok) {
      container.textContent = "정보를 불러오지 못했습니다.";

      return;
    }

    const data = await response.json();

    container.textContent = "";

    renderTVShows(data.results);
  } catch (error) {
    container.textContent = "정보를 불러오지 못했습니다.";

    console.error(error);
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const keyword = input.value.trim();

  // TODO 1.

  // TODO 심화 02.
  searchTVShows(keyword);
});

async function searchTVShows(keyword) {
  resultInfo.textContent = "";

  try {
    // TODO 2.

    const response = await fetch(url, options);

    if (!response.ok) {
      container.textContent = "TV 프로그램 정보를 불러오지 못했습니다.";

      return;
    }

    // TODO 3.
    // TODO 4.
    // TODO 5.

    // TODO 심화 01.

    // TODO 6.
  } catch (error) {
    container.textContent = "TV 프로그램 정보를 불러오지 못했습니다.";

    console.error(error);
  }
}

getPopularTVShows();
