import React from 'react'
import '../App.css';
import { Card, ImageHeader, CardBody, CardFooter } from 'react-simple-card';
import Firebase from "../Firebase"
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
var database = Firebase.database();
class UserCard extends React.Component {
  state = {
    userId: ""
}



updateCurrentUser = () => {
this.setState({
  userId: this.props.thisUser
})
}

getFriends = () => {

}

componentDidMount() {
  this.updateCurrentUser()
  this.getFriends()
}

    render() {
        return(
          <div className="container">
            <div className="row">
          <Card style={{ width: '22rem'}}>
           <ImageHeader imageSrc={this.props.data.profile_picture}/>
          <CardBody>
            <h5><em>{this.props.data.username}</em></h5>
            <p>{this.props.data.bio}</p>
            <p>{this.props.data.location}</p>
            {/* {this.props.data.hobbies.map(item => <p>Hobbies: {item}</p>)} */}
        <p>{this.props.data.hobbies}</p>
            <p><strong>{this.props.data.occupation}</strong></p>
          </CardBody>
          <CardFooter>
            <button value={this.props.data.userId} onClick={
               
              // e => alert(e.target.value)
              e => {

              
                let tempFriendsArray = []
                let tempFriends;
               
                var ref = database.ref('users/' + e.target.value + "/friendRequests");
                
                ref.on('value', snapshot => {
                    tempFriends = snapshot.val();
                    if (tempFriends !== null) {
                    // tempFriends.push(this.props.thisUser)
                    console.log("what is this?",tempFriends)
                    
                    tempFriendsArray = tempFriends
                    tempFriendsArray.push(this.props.thisUser)
                 
                  }
                });
                
            
                tempFriendsArray.push(this.props.thisUser)
                database.ref('users/' + e.target.value + '/friendRequests').set(tempFriendsArray
                  );
              
            }
              } className="btn blue ligthen-1">
            <i className="material-icons right">email</i>
              Friend Request
              </button>
          </CardFooter>
      </Card>
      </div>
      </div>
        )
    }

}
 
export default UserCard
