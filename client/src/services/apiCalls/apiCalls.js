const { setDateParameters } = require("./setDateParameters");
const { genreIDs } = require("./genreIDs");
const apiKey = "d35fc236a158c3b822381b3271c75664";

const APICalls = {
  discoverBase: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US`,
  home() {
    const dateRange = setDateParameters(21, 7);
    return `${
      APICalls.discoverBase
    }&language=en-US&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&release_date.gte=${
      dateRange[0]
    }&release_date.lte=${
      dateRange[1]
    }&with_release_type=3%7C2&with_original_language=en`;
  },
  trending(page) {
    const dateRange = setDateParameters(75, 14);
    
    return `${
      APICalls.discoverBase
    }&region=US&sort_by=popularity.desc&vote_count.gte=3&include_adult=false&include_video=false&page=${page}&release_date.gte=${
      dateRange[0]
    }&release_date.lte=${
      dateRange[1]
    }&with_release_type=3%7C2&with_original_language=en`;
  },
  newest(page) {
    const dateRange = setDateParameters(30, 0);
    return `${
      APICalls.discoverBase
    }&sort_by=release_date.desc&primary_release_year=${dateRange[0].substring(
      0,
      4
    )}&include_adult=false&include_video=false&page=${page}&vote_count.gte=5&with_release_type=3%7C2`;
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
  },
  genres(genreType) {
    const genreID = genreIDs[genreType];
    let dateRange = setDateParameters(120, 14);
    // Family, History, Western, Documentary, Music, and War genres all have few results so widen the search date parameters
    if (
      genreID === "10751" ||
      genreID === "36" ||
      genreID === "37" ||
      genreID == "99" ||
      genreID === "10402" ||
      genreID === "10752"
    ) {
      dateRange = setDateParameters(365, 14);
    }
    return `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=${
      dateRange[0]
    }&primary_release_date.lte=${
      dateRange[1]
    }&vote_count.gte=5&with_genres=${genreID}`;
  }
};

export default APICalls;
