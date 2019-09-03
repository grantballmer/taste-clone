const { setDateParameters } = require("./setDateParameters");
const { getTimeParameter } = require("./getTimeParameter");
const { genreIDs } = require("./genreIDs");
const { listIDs } = require("./listIDs");
const apiKey = "d35fc236a158c3b822381b3271c75664";

const APICalls = {
  discoverBase: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US`,
  listsBase: `https://api.themoviedb.org/4/list`,
  home() {
    const dateRange = setDateParameters(14, 7);

    console.log(dateRange);

    return `https://api.themoviedb.org/3/movie/popular?api_key=d35fc236a158c3b822381b3271c75664&language=en-US&page=1`;

    // return `${
    //   APICalls.discoverBase
    // }&language=en-US&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&release_date.gte=${
    //   dateRange[0]
    // }&release_date.lte=${
    //   dateRange[1]
    // }&with_release_type=3%7C2&with_original_language=en`;
  },
  search(queryType, searchTerm, page) {
    return `https://api.themoviedb.org/3/search/${queryType}?api_key=${apiKey}&language=en-US&query=${searchTerm}&page=${page}&include_adult=false`;
  },
  trending(...args) {
    const page = args[0];

    return `https://api.themoviedb.org/3/movie/popular?api_key=d35fc236a158c3b822381b3271c75664&language=en-US&page=${page}`;
    // const dateRange = setDateParameters(75, 14);

    // return `${
    //   APICalls.discoverBase
    // }&region=US&sort_by=popularity.desc&vote_count.gte=3&include_adult=false&include_video=false&page=${page}&release_date.gte=${
    //   dateRange[0]
    // }&release_date.lte=${
    //   dateRange[1]
    // }&with_release_type=3%7C2&with_original_language=en`;
    // return `${
    //   APICalls.discoverBase
    // }&region=US&sort_by=popularity.desc&vote_count.gte=3&include_adult=false&include_video=false&page=${page}&&release_date.lte=21&with_release_type=3%7C2&with_original_language=en`;

    // return `https://api.themoviedb.org/3/discover/movie?api_key=d35fc236a158c3b822381b3271c75664&language=en-US&region=US&sort_by=popularity.desc&vote_count.gte=3&include_adult=false&include_video=false&page=${page}&release_date.lte=25&with_release_type=3%7C2&with_original_language=en`;
  },
  newest(...args) {
    const page = args[0];
    const dateRange = setDateParameters(30, 0);
    return `${
      APICalls.discoverBase
    }&sort_by=release_date.desc&primary_release_year=${dateRange[0].substring(
      0,
      4
    )}&include_adult=false&include_video=false&page=${page}&vote_count.gte=5&with_release_type=3%7C2`;
  },
  highestrated(...args) {
    return `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=${
      args[0]
    }&region=US`;
  },
  lowestrated() {
    return `${
      APICalls.discoverBase
    }&sort_by=vote_average.asc&include_adult=false&include_video=false&page=1&vote_count.gte=100`;
  },
  list(...args) {
    const page = args[0];
    const listName = args[1].replace("-", "");
    const listNumber = listIDs[listName];

    return `${
      APICalls.listsBase
    }/${listNumber}?page=${page}&api_key=${apiKey}&language=en-US`;
  },
  ascending(...args) {
    return `${
      APICalls.discoverBase
    }&region=US&sort_by=original_title.asc&include_adult=false&include_video=false&page=${
      args[0]
    }&vote_count.gte=10`;
  },
  descending(...args) {
    return `${
      APICalls.discoverBase
    }&region=US&sort_by=original_title.desc&include_adult=false&include_video=false&page=${
      args[0]
    }&vote_count.gte=10`;
  },
  movieFunc(movieid) {
    return `https://api.themoviedb.org/3/movie/${movieid}?api_key=${apiKey}&append_to_response=videos,credits,similar`;
  },
  genre(...args) {
    const page = args[0];
    let genreType = args[1] === "science-fiction" ? "scienceFiction" : args[1];
    const genreID = genreIDs[genreType];
    let dateRange = setDateParameters(120, 14);
    // Family, History, Western, Documentary, Music, and War genres all have few results so widen the search date parameters
    if (
      genreID === "10751" ||
      genreID === "36" ||
      genreID === "37" ||
      genreID === "99" ||
      genreID === "10402" ||
      genreID === "10752"
    ) {
      dateRange = setDateParameters(365, 14);
    }

    return `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&primary_release_date.gte=${
      dateRange[0]
    }&primary_release_date.lte=${
      dateRange[1]
    }&vote_count.gte=5&with_genres=${genreID}`;
  },
  time(...args) {
    const page = args[0];
    const timePeriod = args[1];
    const releaseDates = getTimeParameter(timePeriod);

    return `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&region=US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=${page}&vote_count.gte=100&${releaseDates}`;
  },
  person(id) {
    return `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${apiKey}&language=en-US`;
  }
};

export default APICalls;

// `https://api.themoviedb.org/3/discover/movie?api_key=d35fc236a158c3b822381b3271c75664&language=en-US&region=US&sort_by=popularity.desc&vote_count.gte=3&include_adult=false&include_video=false&page=1&release_date.lte=25&with_release_type=3%7C2&with_original_language=en`;
