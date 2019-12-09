import React from 'react'
import '../App.css';
import Firebase from "../Firebase"
import 'bootstrap/dist/css/bootstrap.min.css';

var database = Firebase.database();
class List extends React.Component {
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
    return (
      <div className="container">
        <div className="row">
          <img imageSrc={this.props.data.profile_picture} />

          <a><em>{this.props.data.username}</em></a>
      
        </div>
      </div>
    )
  }

}

export default List;
