import React, { Fragment, Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
// COMPONENTS
import Header from './components/Header';
import Home from './components/Home';
import Products from './components/Products';
import ProductPage from './components/ProductPage';
// CSS
import './App.css';
import { Navigation, NavItem } from './components/Styled';
// UTILS
import { key, removeWhiteSpace } from './components/utils';
import api from './components/utils/api';

class App extends Component {
  state = {
    navLoaded: false,
    navItems: null,
  };

  componentDidMount = () => {
    this.fetchNav();
  };

  fetchNav = async () => {
    try {
      const { nav } = await api.fetchNavLinks();
      this.setState({ navLoaded: true, navItems: nav[0].navGroups[0].navItems });
    } catch (error) {
      console.log(error);
    }
  };

  buildNav = () => {
    const { navItems } = this.state;
    const output = navItems.map(n => (
      <NavItem key={key()}>
        <Link to={`/${removeWhiteSpace(n.label)}`}>{n.label}</Link>
      </NavItem>
    ));

    return <Navigation>{output}</Navigation>;
  };

  render() {
    const { navLoaded } = this.state;
    return (
      <Fragment>
        <Header />
        {navLoaded ? this.buildNav() : 'Loading nav..'}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:gender" render={props => <Products {...props} />} />
          <Route exact path="/:gender/:productCode" render={props => <ProductPage {...props} />} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
