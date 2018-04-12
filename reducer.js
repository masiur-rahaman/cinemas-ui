import get from 'lodash/get';

export default (state = {}, action) => {
    switch (action.type){
        case 'CREATE_MOVIE':
            var movies = JSON.parse(JSON.stringify(get(state,'movies',[])));
            movies.push(action.movie);
            return Object.assign({},state, {movies: movies});
        case 'ADD_MOVIES':
            debugger;
            var movies = JSON.parse(JSON.stringify(get(state,'movies',[])));
            movies = movies.concat(action.movies);
            return Object.assign({},state, {movies: movies});
        default:
            return state;
    }
};