const initState = {
    activeMovie: {},
    overlay: {},
};

const movieReducer = (state = initState, action) => {

    switch (action.type) {

        case 'GET_MOVIE':
            return {
                ...state,
                activeMovie: action.data,
            };

        case "UPDATE_OVERLAY":
            return {
                ...state,
                overlay: action.data
            };

        case "REMOVE_OVERLAY":
            return {
                ...state,
                overlay: {
                    ...state.overlay,
                    displayOverlay: false,
                    displayReactions: false
                }
            };

        default:
            return state;
    }
};

export default movieReducer;
