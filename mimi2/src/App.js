import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';

import Header from './components/Header';
import Upper from './components/Upper';
import Gallery from './components/Gallery';
import About from './components/About';
import AboutMore from './components/AboutMore';
import Movie from './components/Movie';
import Story from './components/Story';

injectGlobal`
  body{
    padding: 0;
    margin: 0;
  }
`;

class App extends Component {

  state = {
    appDisplay: 'block',
    appOpacity: '1',
    aboutMoreDisplay: '',
    aboutMoreDisplay2: 'none',
    aboutMoreTransform: '',
  }

  AboutClick = () => {
    this.AboutClickT();
    setTimeout(this.AboutClickRe, 250);
  };
  AboutClickRe = () => {
    if (this.state.aboutMoreDisplay === '') {
      this.setState({
        appDisplay: 'none',
        appOpacity: '0',
        aboutMoreDisplay: 'block',
        aboutMoreDisplay2: '',
        aboutMoreTransform: 'translateY(0)',
      });
    };
  };
  AboutClickT = () => {
    if (this.state.aboutMoreDisplay === '') {
      this.setState({
        appDisplay: 'none',
        appOpacity: '0',
        aboutMoreDisplay2: '',
      });
    };
  };

  MoreClose = () => {
    this.MoreCloseRe();
    setTimeout(this.MoreCloseT, 500);
  };
  MoreCloseRe = () => {
    if (this.state.aboutMoreDisplay === 'block') {
      this.setState({
        appDisplay: 'none',
        appOpacity: '0',
        aboutMoreDisplay: 'block',
        aboutMoreTransform: '',
      });
    };
  };
  MoreCloseT = () => {
    if (this.state.aboutMoreDisplay === 'block') {
      this.setState({
        appDisplay: 'block',
        appOpacity: '1',
        aboutMoreDisplay: '',
        aboutMoreDisplay2: 'none',
        aboutMoreTransform: '',
      });
    };
    window.scrollTo(0, 1950);
  };

  render() {
    const { appDisplay } = this.state;
    const { appOpacity } = this.state;
    const { aboutMoreDisplay } = this.state;
    const { aboutMoreDisplay2 } = this.state;
    const { aboutMoreTransform } = this.state;

    const style = {
      display: appDisplay,
      opacity: appOpacity,
    };

    return (
      <div className="App" >
        <AppContent style={style} appDisplay={appDisplay} appOpacity={appOpacity} >
          <Header />
          <Upper />
          <Gallery />
          <About openClick={this.AboutClick} />
          <Movie />
          <Story />
        </AppContent>
        <AboutMore
          closeClick={this.MoreClose}
          aboutMoreDisplay={aboutMoreDisplay}
          aboutMoreDisplay2={aboutMoreDisplay2}
          aboutMoreTransform={aboutMoreTransform}
        />
      </div>
    );
  }
}

const AppContent = styled.div`
  transition: .61s;
`;

export default App;
