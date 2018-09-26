const apiKey = "d35fc236a158c3b822381b3271c75664";

const APICalls = {
  discoverBase: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US`,
  trending() {
    return `${
      APICalls.discoverBase
    }&region=US&sort_by=popularity.desc&vote_count.gte=3&include_adult=false&include_video=false&page=1&release_date.gte=2018-07-30&release_date.lte=2018-10-20&with_release_type=3%7C2&with_original_language=en`;
  },
  newest() {
    return `${
      APICalls.discoverBase
    }&sort_by=release_date.desc&primary_release_year=2018&include_adult=false&include_video=false&page=1&vote_count.gte=5&with_release_type=3%7C2`;
  },
  highestRated() {
    return `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1&region=US`;
  }
};

export default APICalls;
