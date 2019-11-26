import React from "react";
import '../App.css';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase';
import 'firebase/auth';
import firebaseConfig from '../firebaseConfig';
import Firebase from "../Firebase"
import Banner from './Banner'
import Search from './Search'
import Profile from './Profile'
import Book from './Book'


const firebaseAppAuth = Firebase.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};
var database = firebase.database();

class Home extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      userId: ""
};
}
    
  
    savingUsers = (userData) => {

        database.ref('users/' + userData.userId).set({
            username: userData.name,
            email: userData.email,
            profile_picture : userData.imageUrl,
            userId: userData.userId
          });
      }
  
updateState(userData) {
    console.log('wtf')
    this.setState({
       userId: userData.userId
    })
}


    realSignIn = () => {
      this.props.signInWithGoogle().then((res) => {
        console.log(res)
       
        const userData = {
            userId : res.user.uid,
        name: res.additionalUserInfo.profile.name,
          email: res.additionalUserInfo.profile.email,
          imageUrl: res.additionalUserInfo.profile.picture
        }
        console.log(userData)
        this.updateState(userData)
       
        
  
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
            <img src={user.photoURL} className="profile-image"/>
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
            <Search userId={user.uid}/>
            {/* <Profile name={this.state.name}/> */}
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