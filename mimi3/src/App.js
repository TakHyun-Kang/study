import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import Header from './components/Header';
import Main from './components/Main';

injectGlobal`
  body{
    padding: 0;
    margin: 0;
    font-family: sans-serif;
  }
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
