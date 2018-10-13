import React, { Fragment, Component } from 'react';
import { v1 } from 'uuid';
import { Switch, Route } from 'react-router-dom';
// COMPONENTS
import Header from './components/Header';
import Home from './components/Home';
// CSS
import './App.css';
import { Navigation, NavItem } from './components/Styled';

class App extends Component {
  state = {
    navLoaded: false,
    navItems: null,
  };

  componentDidMount = () => {
    this.fetchNav();
  };

  fetchNav = async () => {
    const PROXY = 'https://cors-anywhere.herokuapp.com/';
    const ENDPOINT = 'https://www.jcrew.com/data/v1/US/navigation';
    try {
      const request = await fetch(PROXY + ENDPOINT, {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'GET',
      });
      const { nav } = await request.json();
      this.setStateAsync({ navLoaded: true, navItems: nav.map(n => n.label) });
    } catch (error) {
      console.log(error);
    }
  };

  buildNav = () => {
    const { navItems } = this.state;
    const output = navItems.map(n => <NavItem key={v1()}>{n}</NavItem>);

    return <Navigation>{output}</Navigation>;
  };

  setStateAsync = state =>
    new Promise(resolve => {
      this.setState(state, resolve);
    });

  render() {
    const { navLoaded } = this.state;
    return (
      <Fragment>
        <Header />
        {navLoaded ? this.buildNav() : 'Loading nav..'}
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
