import React from 'react';
import {MOVIE_NAME} from './constants';
import {MOVIE_TYPE} from './constants';

class InputMovie extends React.Component {
    constructor() {
        super();
        this.state = {};
        this.state[MOVIE_NAME] = '';
        this.state[MOVIE_TYPE] = '';
        this.onInputChange = this.onInputChange.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onInputChange(e) {
        e.preventDefault();
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onButtonClick(e) {
        e.preventDefault();
        const movieDetails = {};
        movieDetails[MOVIE_NAME] = this.state[MOVIE_NAME];
        movieDetails[MOVIE_TYPE] = this.state[MOVIE_TYPE];
        this.props.storeMovie(movieDetails);
    }

    render() {
        return (
            <form onSubmit={this.abcd} key='form'>
                <label htmlFor={MOVIE_NAME}>
                    Enter movie name
                </label>
                <input type='text'
                       name={MOVIE_NAME}
                       value={this.state.MOVIE_NAME}
                       onChange={this.onInputChange}
                />

                <label htmlFor={MOVIE_TYPE}>
                    Enter movie type
                </label>
                <input type='text'
                       name={MOVIE_TYPE}
                       value={this.state.MOVIE_TYPE}
                       onChange={this.onInputChange}
                />
                <button onClick={this.onButtonClick}>Submit</button>
            </form>
        );
    }
}

export default InputMovie;
