const initState = {
    seen: [],
    recommendations: [],
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
                seen: [...state.seen, { movieId: action.movieId, like: true }]
            };

        case "ADD_DISLIKE":
            return {
                ...state,
                seen: [...state.seen, { movieId: action.movieId, like: false }]
            };

        case "DELETE_RATING":
            return {
                seen: state.seen.filter(item => item.movieId !== action.id),
            };

        case "UPDATE_RECOMMENDATIONS":
            let recObj = action.recs;
            let newRecs = [];

            for (let property in recObj) {
                newRecs.push(recObj[property]);
            }

            // newRecs.sort((a, b) => b.count - a.count);

            return {
                ...state,
                recommendations: newRecs
            };

        case "SIGNOUT_SUCCESS":
            return {
                seen: [],
            };

        default:
            return state;
    }
};

export default rateReducer;
