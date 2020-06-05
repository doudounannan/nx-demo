import * as React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Home } from '@nx-demo/home';
import { Gifs } from '@nx-demo/gifs';
import { environment } from '../environments/environment';

import './app.scss';

export default () => (
  <BrowserRouter>
    <div className="app">
      <nav className="app-nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/gifs">Search GIFs</Link>
          </li>
        </ul>
      </nav>
      <div className="app-content">
        <Route path="/" exact component={Home} />
        <Route
          path="/gifs"
          render={() => <Gifs apiKey={environment.giphy.apiKey} />}
        />
      </div>
    </div>
  </BrowserRouter>
);
