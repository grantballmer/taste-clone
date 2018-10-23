export const getMovie = (data) => {
    // return (dispatch, getState, {getFirebase, getFirestore}) => {
    return (dispatch, getState) => {
        //make async call to database
        // const firestore = getFirestore();
        dispatch({type: "GET_MOVIE", data: data});
    };
};

export const getNewMovieImg = (img) => {
    return (dispatch, getState) => {
        dispatch({type: "GET_MOVIEIMG", img: img});
    };
};