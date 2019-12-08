import React from "react";
import '../App.css';
import firebaseConfig from '../firebaseConfig';
import Firebase from "../Firebase"

var database = Firebase.database()
class FriendRequest extends React.Component {
   state = {
       FriendRequestsData: []
   }


    componentDidMount = () => {
        // var friendRequests = this.props.data;
        // this.setState({
        //     FriendRequestsIds: friendRequests
        // })
        this.friendRequests()

    }

    friendRequests = () => {
        console.log("ids",this.props.data)
        let data = this.props.data
        if(data === 0)
            return null 
         else {
       
            let childData;
            let friendsRequests = this.state.FriendRequestsData
            var leadsRef = database.ref('users/' + data);
            leadsRef.on('value', snapshot => {
                childData = snapshot.val();
                console.log("do i get any data?", childData)
                console.log("this is state",this.state.FriendRequestsData)
               
                friendsRequests.push(childData)
                console.log("tada", this.state.FriendRequestsData)
         })
 
         this.setState({
            FriendRequestsData: friendsRequests
        })
    }
}

render() {
    return(
        <div>
    <p>{this.state.FriendRequestsData[0] ? this.state.FriendRequestsData[0].username : console.log("nothing")}</p>
     {console.log("info almost there",this.state.FriendRequestsData)}
   
        {/* {console.log("friend requests!",this.props.data)} */}
        </div>
    )
}

}
export default FriendRequest
