import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';
import SearchBar from './components/Search_Bar';
import TvShow from './components/TvShow';
import Movies from './components/Movies';
import MovieDetails from './components/movie_details';
import TvShowDetails from './components/tv_details';
import SearchBarTV from './components/tv_search';

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
            <Route exact path="/movies/search" component={SearchBar} />
            <Route exact path="/search" component={SearchBarTV} />
          </div>
        </BrowserRouter>
      </div>
              );
  }
}

export default App;
