const initState = {
  activeMovie: {}
};

const rootReducer = (state = initState, action) => {
  if (action.type === "GET_MOVIE") {
    state.activeMovie = action.data;
  }
  return state;
};

export default rootReducer;
