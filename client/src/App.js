import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import 'firebase/auth';
import Users from '../src/components/Users';
import Home from '../src/components/Home';
import Main from "../src/components/Main/Main";

import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import initialState from './initial-state';

import { startListeningForMessages } from './actions/messages';

const middleware = [thunk];
const enhancers = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancers(
    applyMiddleware(...middleware),
    ...enhancers
  )
);

store.dispatch(startListeningForMessages());

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thisIsUser: ""
    };
  }

  whoIsThisUser = (data) => {
    this.setState({ thisIsUser: data });
  };

  render() {
    return (
      <div>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to={`/${this.state.thisIsUser}`}>Users</Link>
                </li>
                <li>
                  <Link to="/chat">Chat</Link>
                </li>
              </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/about">
                <About />
              </Route>

              {/* <Route path="/chat">
                <Chat />
              </Route> */}

              <Route
                exact
                path="/main"
                render={props => <Main showToast={this.showToast} {...props} />}
              />

              <Route path='/:handle' component={Users}>
                {/* <Users thisUser={this.state.thisIsUser}/> */}
              </Route>
              <Route path="/">
                <Home thisUser={this.state.thisIsUser} whoIsThisUser={this.whoIsThisUser} />
              </Route>

            </Switch>
          </div>
        </Router>

      </div>
    );
    
    function About() {
      return <h2>About</h2>;
    }

  }
}

export default App



