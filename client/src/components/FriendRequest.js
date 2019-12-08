import React from "react";
import '../App.css';
import firebaseConfig from '../firebaseConfig';
import Firebase from "../Firebase"
import { Card, ImageHeader, CardBody, CardFooter } from 'react-simple-card';

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
        
        {this.state.FriendRequestsData[0] ?
      
            <Card style={{ width: '22rem'}}>
           <ImageHeader imageSrc={this.state.FriendRequestsData[0].profile_picture}/>
          <CardBody>
            <h5><em>{this.state.FriendRequestsData[0].username }</em></h5>
            <p>{this.state.FriendRequestsData[0].bio}</p>
            <p>{this.state.FriendRequestsData[0].location}</p>
            {/* {this.props.data.hobbies.map(item => <p>Hobbies: {item}</p>)} */}
        <p>{this.state.FriendRequestsData[0].hobbies}</p>
            <p><strong>{this.state.FriendRequestsData[0].occupation}</strong></p>
          </CardBody>
          <CardFooter>
          </CardFooter>
              </Card>
        
              :
        console.log('nada')}
        </div>
      
   
    )
}

}
export default FriendRequest
