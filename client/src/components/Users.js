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

   

   retrieve = () => {
       let childData;
       var leadsRef = database.ref('users');
       leadsRef.on('value', snapshot => {
           childData = snapshot.val();
           this.setState({
               childData: childData
           })
       });

       let FriendRequestData;
       var leadsRef = database.ref('users/' + this.state.userId + '/friendRequests');
       leadsRef.on('value', snapshot => {
        FriendRequestData = snapshot.val();
           this.setState({
               FriendRequests: FriendRequestData
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
            console.log(data);
         });

        //  let friendData = []
        //  Object.values(this.state.FriendRequests).forEach(value=>{
           
        //     friendData.push(value)
        //     console.log(data);
        //  });
        return(
            <div>
            <h3>These are all the users in the app</h3>
            {/* {console.log(this.state.childData)} */}
            {alert("working second alert!" + this.state.userId)}
            {data.map(item => <UserCard thisUser={this.state.userId} data={item}/>)}
            <h4>These are your friend requests</h4>
            {/* {friendData.map(item => <FriendRequest thisUser={this.state.userId} data={item}/>)} */}
            {console.log(this.state.FriendRequests)}
            </div>
           
        )
    }
}

export default Users