const initState = {
  activeMovie: {},
};

const movieReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_MOVIE': 
            return {
                ...state, 
                activeMovie: action.data
            };
        default: 
        return state;
    }
};

export default movieReducer;

// if (action.type === "GET_MOVIE") {
//         state.activeMovie = action.data;
//     }
//     return state;