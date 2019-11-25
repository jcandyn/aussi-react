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
          <Card style={{ width: '16rem'}}>
           <ImageHeader imageSrc={this.props.data.profile_picture}/>
          <CardBody><p>{this.props.data.username}</p></CardBody>
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
