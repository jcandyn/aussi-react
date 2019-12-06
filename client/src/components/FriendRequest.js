import React from "react";
import '../App.css';
import firebaseConfig from '../firebaseConfig';
import Firebase from "../Firebase"

class FriendRequest extends React.Component {
    componentDidMount = () => {
        this.friendRequests()
    
    }

    friendRequests = () => {
     
    }

render() {
    return(
        <div>
        <h1>Friend Requests Go Here</h1>
    <p>{this.props.data}</p>
        {console.log("friend requests",this.props.data)}
        </div>
    )
}
}

export default FriendRequest
