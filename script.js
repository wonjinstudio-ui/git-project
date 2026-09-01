// 실습 3) 진짜 응답의 구조 탐색하기
const options = {
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
};

const URL = "https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1";

async function getPopularMovies() {
  const response = await fetch(URL, options);
  const data = await response.json();
  const firstMovie = data.results[0];
  const { title, vote_average } = firstMovie;

  console.log(`제목: ${title}`);
  console.log(`평점: ${vote_average}`);
}

getPopularMovies();
