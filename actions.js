import axios from 'axios';

export const addMovie = (movie) => {
    return (dispatch, getState) => {
        axios.post("http://localhost:8080/addmovie/",movie)
            .then(() => dispatch({type: 'CREATE_MOVIE', movie: movie}))
            .catch((error) => alert(error));

    }
};

export const getMovies = () => {
    return (dispatch, getState) => {
      axios.get("http://localhost:8080/movies/")
           .then((response) => dispatch({type: 'ADD_MOVIES', movies: response.data}))
           .catch((error) => alert(error));
    }
}