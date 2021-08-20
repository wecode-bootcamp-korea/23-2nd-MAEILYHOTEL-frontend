import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Nav } from './component/Nav/Nav';
import { NavModal } from './component/Nav/NavModal';
import { Detail } from './pages/Detail/Detail';
import { List } from './pages/List/List';
import { Main } from './pages/Main/Main';
import { Redirect } from './pages/Redirect/Redirect';
import { Credit } from './pages/Credit/Credit';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/users/kakao" component={Redirect} />
          <Route exact path="/list" component={List} />
          <Route exact path="/stays/:id/rooms" component={Detail} />
          <Route exact path="/credit" component={Credit} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
