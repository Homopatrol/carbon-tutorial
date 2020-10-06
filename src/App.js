import React, { Component } from 'react';
import logo from './logo.svg';
import { Button } from 'carbon-components-react';
import './app.scss';
import TutorialHeader from './components/TutorialHeader';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';


class App extends Component {
  render() {
    return (
      <>
        <Switch>
  <Route exact path="/" component={LandingPage} />
  <Route path="/repos" component={RepoPage} />
</Switch>
      </>
    )
  }
}


export default App;
