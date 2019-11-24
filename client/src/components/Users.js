import React from 'react'
import * as firebase from 'firebase';
import firebaseConfig from '../firebaseConfig'
import Firebase from "../Firebase"

var database = Firebase.database();

class Users extends React.Component {
   
   retrieve() {
    var leadsRef = database.ref('users');
        leadsRef.on('value', function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
              var childData = childSnapshot.val();
              console.log("I got the data", childData)
            });
        });

   }

    render() {
        this.retrieve()
        return(
            <div>
            <h3>These are all the users in the app</h3>
            </div>
        )
    }
}

export default Users