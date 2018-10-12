const initState = {
  seen: [],
//   like: [],
//   dislike: []
};

const rateReducer = (state = initState, action) => {
    switch (action.type) {
        
        case 'ADD_LIKE':
            console.log(state);
            return { 
                ...state,
                seen: [...state.seen, {id: action.id, like: true}]
                // like: [...state.like, action.id],
                // seen: [...state.seen, action.id]
                
            };
            
        case "ADD_DISLIKE":
            console.log(state);
            return {
                ...state,
                // dislike: [...state.dislike, action.id],
                // seen: [...state.seen, action.id]
                seen: [...state.seen, {id: action.id, like: false}]
            };
        default: 
        return state;
    }
};

export default rateReducer;