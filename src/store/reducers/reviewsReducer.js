const initState = {
  reactions: []
};

const reviewsReducer = (state = initState, action) => {

  switch (action.type) {

    case 'GET_MOVIE':
      return {
        reactions: action.data.reactions
      };

    case "ADD_REVIEW":
      return {
        ...state,
        reactions: [...state.reactions, action.data]
      };

    case "ADD_RATE_REVIEW":
      const { reaction } = action;

      console.log([...state.reactions.slice(0, action.reaction.index), reaction, ...state.reactions.slice(action.reaction.index + 1)]);

      return {
        ...state,
        reactions: [...state.reactions.slice(0, action.reaction.index), reaction, ...state.reactions.slice(action.reaction.index + 1)]
      };

    case "UNDO_RATE_REVIEW":
      console.log(action);
      return {
        reactions: action.reactions
      };

    default:
      return state;
  }
};

export default reviewsReducer;
