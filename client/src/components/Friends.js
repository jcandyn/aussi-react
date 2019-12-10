import React from "react";
import '../App.css';
import firebaseConfig from '../firebaseConfig';
import Firebase from "../Firebase"
import { Card, ImageHeader, CardBody, CardFooter } from 'react-simple-card';

var database = Firebase.database()
class Friends extends React.Component {
  
   constructor(props) {
    super(props);
    this.acceptRequest = this.acceptRequest.bind(this);
    this.declineRequest = this.declineRequest.bind(this);
    this.state = {
        FriendRequestsData: []
};
}

   acceptRequest = (friendId,userId,e) => {
    e.preventDefault()
       alert('accepting request')
       alert(userId)
       alert(friendId)
       database.ref('users/' + userId + "/friendRequests/" + friendId).set({
      "accepted": true
      });


      let tempArray = []
      let childData;
      var leadsRef = database.ref('users/' + userId + "/acceptedFriends");

      leadsRef.on('value', snapshot => {
          childData = snapshot.val();
         console.log("tempArray",childData)
        if (childData) {
            tempArray = childData.friendId
        }
        
      });
        if (!tempArray.includes(friendId)){
            tempArray.push(friendId)
        }
        
    
    
    //   for now this method will make a node for friends accepted
    database.ref('users/' + userId +"/acceptedFriends/").set({
        "friendId": tempArray
        });

this.props.getFriends()
   }

   declineRequest (friendId,userId,e) {
e.preventDefault()
    alert('declining request')  
    alert(userId)
    alert(friendId)
    database.ref('users/' + userId + "/friendRequests/" + friendId).update({
        accepted: null
        });
   }

    componentDidMount = () => {
        // var friendRequests = this.props.data;
        // this.setState({
        //     FriendRequestsIds: friendRequests
        // })
        // this.friendRequests()

    }

    friendRequests = () => {
  
        let data = this.props.data
        if(data === 0)
            return null 
         else {
       
            let childData;
            let friendsRequests = this.state.FriendRequestsData
            var leadsRef = database.ref('users/' + data);
            leadsRef.on('value', snapshot => {
                childData = snapshot.val();
                friendsRequests.push(childData)
     
         })
 
         this.setState({
            FriendRequestsData: friendsRequests
        })
    }
}

render() {
    

    
    return(
        <div>
            {console.log('rendering friend',this.props.friends.username)}
        
        {this.props.friends ?
      
            <Card style={{ width: '16rem'}}>
           <ImageHeader imageSrc={this.props.friends.profile_picture}/>
          <CardBody>
            <h5><em>{this.props.friends.username }</em></h5>
            <p>{this.props.friends.bio}</p>
            <p>{this.props.friends.location}</p>
            {this.props.friends.hobbies.map(item => <p>Hobbies: {item}</p>)} 
        <p>{this.props.friends.hobbies}</p>
            <p><strong>{this.props.friends.occupation}</strong></p>
          </CardBody>
          <CardFooter>
              <div class="row">
                  <div class="col">
              <button  onClick={e => {this.acceptRequest(this.state.FriendRequestsData[0].userId,this.props.thisUser,e)}}className="btn">Message</button>
              </div>
              <div class="col">
             
              </div>
              </div>
          </CardFooter>
              </Card>
        
              : 
        console.log('nada')}
        </div>
      
   
    )
}

}
export default Friends;
