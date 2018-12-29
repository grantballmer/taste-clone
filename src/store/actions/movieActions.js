import history from "../../history";
import { getFormattedTitle } from "../../services/utilityFuncs/formatTitle";


export const getMovie = (data) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database
    const firestore = getFirestore();
    const movieId = String(data.id);
    const formatTitle = getFormattedTitle(data.title);
    const movieRef = firestore.collection('reviews').doc(movieId);

    movieRef.get()
      .then(doc => {
        // data.reactions = doc.data().reactions || [];
        data.reactions = doc.data() == null ? [] : doc.data().reactions;
        if (data.reactions.length === 0) { movieRef.set({ reactions: [] }) }
      })
      .then(() => dispatch({ type: "GET_MOVIE", data: data }))
      .then(() => history.push(`/movies/${formatTitle}-${movieId}`));

  };
};

export const updateOverlay = (data) => {
  return (dispatch, getState) => {
    dispatch({ type: "UPDATE_OVERLAY", data: data });
  };
};

export const removeOverlay = () => {
  return (dispatch, getState) => {
    dispatch({ type: "REMOVE_OVERLAY" });
  };
};

export const getNewMovieImg = (img) => {
  return (dispatch, getState) => {
    dispatch({ type: "GET_MOVIEIMG", img: img });
  };
};
