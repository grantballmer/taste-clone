const headerObj = {
  trending: "Trending Movies",
  newest: "Newest Movies",
  "highest-rated": "Best Movies of All Time",
  genre: "Trending",
  time: "Time",
  "best-picture": 'Best Picture Winners',
  "highest-grossing": "Top Grossing Movies of All Time",
  disney: "Disney Movies",
  marvel: 'Marvel Comics Movies',
  dc: "DC Comics Movies",
  ascending: "Movies From A to Z",
  descending: "Movies From Z to A"
};

module.exports.headerDetails = function(params) {
  const paramKey = Object.keys(params)[0];
  const pageObj = {};

  if (paramKey === "page") {
    pageObj.heading = headerObj[params.page];
    pageObj.desc = `Here's a list of the ${pageObj.heading.toLowerCase()}. Save movies to the
    watchlist to track them or rate the ones you’ve seen to build your
    profile.`;
  }
  else if (paramKey === "genre") {
    pageObj.heading = `Trending ${params.genre}`;
    pageObj.desc = `Here's a list of trending 
    ${
      params.genre
    } movies. Save movies to the watchlist and rate the ones you've see to build your profile.`;
  }
  else if (paramKey === "time") {
    let includeThe = params.time.includes("s");
    pageObj.heading = `Best Movies from ${includeThe ? "the " : ""}${
      params.time
    }`;
    pageObj.desc = `Here's a list of the best movies from ${
      includeThe ? "the " : ""
    }${
      params.time
    }. Save movies to the watchlist and rate the ones you've see to build your profile.`;
  }

  return pageObj;
};
