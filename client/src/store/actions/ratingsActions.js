export const likeMovie = (id) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //make async call to database
        // const firestore = getFirestore();
        dispatch({type: "ADD_LIKE", id: id});
    };
};

export const dislikeMovie = (id) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //make async call to database
        // const firestore = getFirestore();
        dispatch({type: "ADD_DISLIKE", id: id});
    };
};
    
    