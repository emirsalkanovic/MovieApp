import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';
import TvShow from './components/TvShow';
import Movies from './components/Movies';
import MovieDetails from './components/movie_details';
import TvShowDetails from './components/tv_details';

class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact={true} path="/" component={TvShow} />
            <Route exact path="/movies" component={Movies} />
            <Route exact path="/:id/details" component={TvShowDetails} />
            <Route exact path="/movies/:id/details" component={MovieDetails} />
          </div>
        </BrowserRouter>
      </div>
              );
  }
}

export default App;
