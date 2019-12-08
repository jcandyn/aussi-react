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
        //  Object.values(this.state.FriendRequests).forEach(value=>{
           
        //     friendData.push(value)
        //     console.log(data);
        //  });
        friendData.push(this.state.FriendRequests)

     
        return(
            <div>
            <h3>These are all the users in the app</h3>
            {data.map(item => <UserCard updateFriendRequests ={this. updateFriendRequests} updateUser = {this.updateUser} thisUser={this.state.userId} data={item}/>)}
            <h4>These are your friend requests</h4>
            {console.log('this is what is being sent', friendData)}
            <div class="container">
                <div class="row">
            {(friendData[0].length > 1) ? friendData[0].map(item => <FriendRequest thisUser={this.state.userId} data={item}/>) : console.log("nada")}
            </div>
            </div>
            </div>
           
        )
    }
}

export default Users