import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import Launches from './components/Launches';
import Launch from './components/Launch';

import './App.css';
import logo from './logo.jpg';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="container">
            <img
              src={logo}
              alt="SpaceX"
              style={{ width: 300, display: 'block', margin: 'auto' }}
            />
            <Route exact path="/" component={Launches} />
            <Route exact path="/launch/:flightNumber" component={Launch} />
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
