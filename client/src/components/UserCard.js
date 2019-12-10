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


this.props.updateUser(this.props.thisUser)
}

getFriends = () => {
this.props.updateFriendRequests(this.props.thisUser)
}

componentDidMount() {
  this.updateCurrentUser()
  this.getFriends()
}

selfFriend = () => {
  alert("sorry, you are REALLY cool and everything, but you can't be your own friend!")
}

    
      
 
    // static defaultProps = {
    //   name: 'John Doe',
    //   email: 'JohnDoe@example.com',
    //   pic: 'picture.jpg'
    // }
  
    // static propTypes = {
    //   name: PropTypes.string,
    //   email: PropTypes.string,
    //   pic: PropTypes.string
    // }
  
    render() {
      // const {name, email, pic, username} = this.props;
      return (
        <div className='UserCard'>
          <div className='UserCardTop'>
            <img src={this.props.data.profile_picture} />
          </div>
          <div className='UserCardBottom'>
          <p>{this.props.data.username}</p>
            <p>{this.props.data.occupation}</p>
            <p>{this.props.data.bio}</p>
            <p>{this.props.data.location}</p>
            <p>{this.props.data.bio}</p>
            {this.props.data.userId !== this.props.thisUser ? <button className="cardBtn" value={this.props.data.userId} onClick={
               
                        // e => alert(e.target.value)
                        e => {
          
                      
                          let tempFriendsArray = []
                          let tempFriends;
                         let friendId = e.target.value
                         
                         //  var ref = database.ref('users/' + e.target.value + "/friendRequests");
                          
                         database.ref('users/' + friendId + "/friendRequests/" + this.props.thisUser).set({
                           "accepted": false
                           });
         
                         //  ref.on('value', snapshot => {
                         //      tempFriends = snapshot.val();
                         //      if (tempFriends !== null)  {
                         //      // tempFriends.push(this.props.thisUser)      
                         //      tempFriendsArray = tempFriends
                         //    }
                         //  });
                          
                      
                         //  tempFriendsArray.push(this.props.thisUser)
                         //  database.ref('users/' + e.target.value + '/friendRequests').set(tempFriendsArray
                         //    );
                        
                      }
                        } className="btn blue ligthen-1">
                      <i className="material-icons right">email</i>
                        Add
                        </button> : <button className="cardBtn" onClick={this.selfFriend} className="btn blue ligthen-1">
                      <i className="material-icons right">email</i>Add</button>}
          </div>
        </div>
      );
    }
  }
    
    


 
export default UserCard
