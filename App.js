import React from 'react';
import { connect } from 'react-redux';
import {addMovie, getMovies} from './actions';
import MoviesList from './MoviesList';
import InputMovie from './InputMovie';
import get from 'lodash/get';

class App extends React.Component {
    constructor() {
        super();
        this.storeMovie = this.storeMovie.bind(this);
    }

    componentWillMount() {
        this.props.getMovies();
    }

    storeMovie(movieDetails) {
        this.props.addMovie(movieDetails);
    }

    render() {
        return (
            <div>
                <p>Welcome to Cinemas</p>
                <InputMovie storeMovie={this.storeMovie}/>
                <MoviesList movies={this.props.movies}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    movies: get(state,'movies.movies',undefined)
});

const mapDispatchToProps  = {
   addMovie,
   getMovies
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
