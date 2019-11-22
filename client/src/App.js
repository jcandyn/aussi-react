import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';
import Banner from './components/Banner'
import Search from './components/Search'
import Book from './components/Book';



const firebaseApp = firebase.initializeApp(firebaseConfig);


const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};



class App extends React.Component {
  render() {
    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;

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
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
 
      </div>
    );

function Home() {
  return (

    <div className="App">
    <header className="App-header">
  
      {
        user 
          ? 
          <div>
          <br/>
          <br/>
          <br/>
          <br/>
          <p className="pink-text text-lighten-3">Hey, {user.displayName} !</p>
          </div>
          : 
          <div>
          < Banner />
          <p>Please sign in.</p>
          </div>
      }
      {
        user
          ? 
          <div>
            <button onClick={signOut} class="sign-out blue-grey darken-4 waves-effect waves-light btn btn-small"><i class="material-icons left">power_settings_new</i>Sign Out</button>
          <Search/>
          {/* <Book name={user.displayName}/> */}
          
            </div>
          : <button className="btn light-blue darken-3 waves-effect waves-light" onClick={signInWithGoogle}><i class="material-icons right">perm_identity</i>Sign in with Google</button>
      }
    </header>
  </div>
  )

}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
  }
}
export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);

