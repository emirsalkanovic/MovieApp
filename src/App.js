import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import MovieDetails from './components/movie_details';
import TvShowDetails from './components/tv_details';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <div className="main">
      <div className="bg" />
        <BrowserRouter>
          <div>
            <Route exact={true} path="/" component={Main} />
            <Route exact path="/:id/details" component={TvShowDetails} />
            <Route exact path="/movies/:id/details" component={MovieDetails} />
          </div>
        </BrowserRouter>
      </div>
              );
  }
}

export default App;
