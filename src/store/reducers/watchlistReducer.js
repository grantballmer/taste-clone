const initState = {
  //   moviesData: [],
  watchlist: []
};

const watchlistReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_WATCHLIST":
      console.log(action);
      return {
        watchlist: action.watchlist
      };

    case "ADD_TO_WATCHLIST":
      console.log("added");
      return {
        ...state,
        // moviesData: [...state.moviesData, {movie: action.movie}],
        watchlist: [...state.watchlist, action.movie]
      };

    case "REMOVE_FROM_WATCHLIST":
      console.log("removed watchlist");
      return {
        // moviesData: state.moviesData.filter(item => item.movie.id !== action.movie.id),
        watchlist: state.watchlist.filter(item => item.id !== action.movie.id)
      };

    case "SIGNOUT_SUCCESS":
      return {
        seen: []
      };

    default:
      return state;
  }
};

export default watchlistReducer;
