import React from "react";
import '../App.css';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebaseConfig';
import Banner from './Banner'
import Search from './Search'
import Book from './Book'

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

class Home extends React.Component {
  
    savingUsers = (userData) => {
      alert(userData.email).then(() => {
        console.log("success")
      })
    }
  
    realSignIn = () => {
      this.props.signInWithGoogle().then((res) => {
        console.log(res)
        const email = res.additionalUserInfo.profile.email
        const userData = {
          email: email
        }
        console.log(userData)
  
        if (res.additionalUserInfo.isNewUser === true) {
          this.savingUsers(userData)
        }
      })
    }
    render() {
      const {
        user,
        signOut,
      } = this.props;
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
              <button onClick={signOut} className="sign-out blue-grey darken-4 waves-effect waves-light btn btn-small"><i class="material-icons left">power_settings_new</i>Sign Out</button>
            <Search/>
            {/* <Book name={user.displayName}/> */}
            
              </div>
            : <button className="btn light-blue darken-3 waves-effect waves-light" onClick={this.realSignIn}><i className="material-icons right">perm_identity</i>Sign in with Google</button>
        }
      </header>
    </div>
    )
      }
  }
  
  export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
  })(Home);