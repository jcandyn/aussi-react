import React from "react";
import '../App.css';
import firebaseConfig from '../firebaseConfig';
import Firebase from "../Firebase"
import { Card, ImageHeader, CardBody, CardFooter } from 'react-simple-card';

var database = Firebase.database();

class Friends extends React.Component {
    constructor(props) {
        super(props);
        this.acceptRequest = this.acceptRequest.bind(this);
        this.declineRequest = this.declineRequest.bind(this);
        this.state = {
            FriendRequestsData: []
        };
    }

    acceptRequest = (friendId, userId, e) => {
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
            console.log("tempArray", childData)
            if (childData) {
                tempArray = childData.friendId
            }

        });
        if (!tempArray.includes(friendId)) {
            tempArray.push(friendId)
        }

        //for now this method will make a node for friends accepted
        database.ref('users/' + userId + "/acceptedFriends/").set({
            "friendId": tempArray
        });
        this.props.getFriends()
    }

    declineRequest(friendId, userId, e) {
        e.preventDefault()
        alert('declining request')
        alert(userId)
        alert(friendId)
        database.ref('users/' + userId + "/friendRequests/" + friendId).update({
            accepted: null
        });
    }

    friendRequests = () => {

        let data = this.props.data
        if (data === 0)
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
        return (
            <div>
                {console.log(this.props.friends)}
                {this.props.friends ?

                    <div className='UserCard'>
                        <div className='UserCardTop'>
                            <img src={this.props.friends.profile_picture} />
                        </div>
                        <div className='UserCardBottom'>
                            <p>{this.props.friends.username}</p>
                            <p>{this.props.friends.occupation}</p>
                            <p>{this.props.friends.bio}</p>
                            <p>{this.props.friends.location}</p>
                            <p>{this.props.friends.bio}</p>
                            <button onClick={e => { this.acceptRequest(this.state.FriendRequestsData[0].userId, this.props.thisUser, e) }} className="btn">Message</button>
                        </div>
                    </div>

                    : console.log('nada')
                }
            </div>
        )
    }
}
export default Friends;
