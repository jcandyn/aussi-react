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

componentDidMount() {
  this.updateCurrentUser()
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
                database.ref('users/' + e.target.value).update({
                  "friendRequests":this.props.thisUser
                });
              }
              
              }className="btn blue ligthen-1">
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
