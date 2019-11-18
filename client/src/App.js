import React from 'react';
import logo from './logo.svg';
import './App.css';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';
import Banner from './components/Banner'
import Search from './components/Search'



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
      <div className="App">
        <header className="App-header">
      
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
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
                <button onClick={signOut} class="blue-grey darken-4 waves-effect waves-light btn btn-small"><i class="material-icons left">power_settings_new</i>Sign Out</button>
              <Search/>
              
                </div>
              : <button className="btn" onClick={signInWithGoogle}><i class="material-icons right">perm_identity</i>Sign in with Google</button>
          }
        </header>
      </div>
    );
  }
}


export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);

