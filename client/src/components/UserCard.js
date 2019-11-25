import React from 'react'
import '../App.css';

class UserCard extends React.Component {
    render() {
        return(
            <div>
            <p>{this.props.data.name}</p>
            <img src={this.props.data.profile_picture} className="profile-image"/>
            </div>
        )
    }

}

export default UserCard