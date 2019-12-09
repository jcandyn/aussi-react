import React from 'react'
import * as firebase from 'firebase';
import firebaseConfig from '../firebaseConfig'
import Firebase from "../Firebase"
import UserCard from "./UserCard"
import FriendRequest from "./FriendRequest"

var database = Firebase.database();

class Users extends React.Component {
    state = {
        childData: "",
        userId: "",
        user: null,
        FriendRequests: ""
    }

    updateFriendRequests = (userId) => {
        let FriendRequestData;
        var ref = database.ref('users/' + userId + '/friendRequests');
        ref.on('value', snapshot => {
         FriendRequestData = snapshot.val();
            this.setState({
                FriendRequests: FriendRequestData
            })
        });
    }

   
    updateUser = (userId) => {
        this.setState({
            userId: userId
        })
    }

   retrieve = () => {
       let childData;
       var leadsRef = database.ref('users');
       leadsRef.on('value', snapshot => {
           childData = snapshot.val();
           this.setState({
               childData: childData
           })
       });

      
    }

    componentDidMount() {
     
        const { handle } = this.props.match.params

             this.setState({userId:handle})

          this.retrieve()
    }


    render() {
        let data = []

        Object.values(this.state.childData).forEach(value=>{
          
            data.push(value)
         });

         let friendData = []

         if (this.state.FriendRequests) {
       
         Object.keys(this.state.FriendRequests).forEach(key=>{
            friendData.push(key)
          
         });
        }
        // friendData.push(this.state.FriendRequests)

     
        return(
            <div>
                 <div className="container">
            <div className="row">
            <h3>These are all the users in the app</h3>
            {data.map(item => <UserCard updateFriendRequests ={this. updateFriendRequests} updateUser = {this.updateUser} thisUser={this.state.userId} data={item}/>)}
            </div>
            </div>
            <div class="row">
            <h4>These are your <strong>FRIENDS</strong></h4>
            </div>
            <div class="row">
            <h4>These are your friend requests</h4>
       
            <div class="container">
                <div class="row">
            {(friendData !== null && friendData.length) ? friendData.map(item => <FriendRequest thisUser={this.state.userId} data={item}/>) : console.log("nada")}
            </div>
            </div>
            </div>
            </div>
           
           
        )
    }
}

export default Users