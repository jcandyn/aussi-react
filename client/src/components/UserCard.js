import React from 'react'
import '../App.css';
import { Card, ImageHeader, CardBody, CardFooter } from 'react-simple-card';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';

class UserCard extends React.Component {
    render() {
        return(
          <div className="container">
            <div className="row">
          <Card style={{ width: '20rem'}}>
           <ImageHeader imageSrc={this.props.data.profile_picture}/>
          <CardBody>
            <h4><em>{this.props.data.username}</em></h4>
            <p>{this.props.data.bio}</p>
            <p>{this.props.data.location}</p>
            <p><strong>{this.props.data.occupation}</strong></p>
          </CardBody>
          <CardFooter>
            <button className="btn blue ligthen-1">
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
