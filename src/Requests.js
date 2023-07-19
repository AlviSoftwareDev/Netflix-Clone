const apiKey = '409c0cda6dd460461f461b4e1ac71e51';
const baseUrl = 'https://api.themoviedb.org/3';

const requests = {
  requestBanner: `https://image.tmdb.org/t/p/original`,
  requestImage: `https://image.tmdb.org/t/p/w500`,
  requestNowPlaying: `${baseUrl}/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`,
  requestPopular: `${baseUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=2`,
  requestTopRated: `${baseUrl}/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`,
  requestUpcoming: `${baseUrl}/movie/upcoming?api_key=${apiKey}&language=en-US&page=2`,
};

export default requests;
