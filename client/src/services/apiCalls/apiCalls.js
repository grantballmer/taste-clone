const { setDateParameters } = require("./setDateParameters");
const apiKey = "d35fc236a158c3b822381b3271c75664";

const APICalls = {
  discoverBase: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US`,
  trending() {
    const dateRange = setDateParameters(75, 14);
    return `${
      APICalls.discoverBase
    }&region=US&sort_by=popularity.desc&vote_count.gte=3&include_adult=false&include_video=false&page=1&release_date.gte=${
      dateRange[0]
    }&release_date.lte=${
      dateRange[1]
    }&with_release_type=3%7C2&with_original_language=en`;
  },
  newest() {
    const dateRange = setDateParameters(30, 0);
    return `${
      APICalls.discoverBase
    }&sort_by=release_date.desc&primary_release_year=${dateRange[0].substring(
      0,
      4
    )}&include_adult=false&include_video=false&page=1&vote_count.gte=5&with_release_type=3%7C2`;
  },
  highestRated() {
    return `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1&region=US`;
  },
  lowestRated() {
    return `${
      APICalls.discoverBase
    }&sort_by=vote_average.asc&include_adult=false&include_video=false&page=1&vote_count.gte=100`;
  },
  movieFunc(movieid) {
    return `https://api.themoviedb.org/3/movie/${movieid}?api_key=${apiKey}&append_to_response=videos,credits,similar`;
  }
};

export default APICalls;
