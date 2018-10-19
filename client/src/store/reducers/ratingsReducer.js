const initState = {
  seen: [],
//   like: [],
//   dislike: []
};

const rateReducer = (state = initState, action) => {
    switch (action.type) {
        
        case "GET_RATINGS":
            return { 
                seen: action.ratings
            };
        
        case 'ADD_LIKE':
            return { 
                ...state,
                seen: [...state.seen, {movieId: action.movieId, like: true}]
            };
            
        case "ADD_DISLIKE":
            return {
                ...state,
                seen: [...state.seen, {movieId: action.movieId, like: false}]
            };
        
        case "DELETE_RATING":
            return {
                seen: state.seen.filter(item => item.movieId !== action.id),
            }
        default: 
        return state;
    }
};

export default rateReducer;