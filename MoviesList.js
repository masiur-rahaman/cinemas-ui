import React from 'react';
import {MOVIE_NAME} from './constants';
import {MOVIE_TYPE} from './constants';

class MoviesList extends React.Component {
    constructor() {
        super();
    }

    getMovieList() {
      return this.props.movies.map(m => <tr key={m}><td>{m[MOVIE_NAME]}</td><td>{m[MOVIE_TYPE]}</td></tr>)
    }

    render() {
        if(this.props.movies) {
            return (
                <table border="1">
                    <tbody>
                    {this.getMovieList()}
                    </tbody>
                </table>
            );
        } else {
            return null;
        }
    }
}

export default MoviesList;