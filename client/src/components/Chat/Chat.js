import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import { withRouter } from 'react-router-dom';

import { myFirestore, myStorage } from '../../Firebase';
import images from '../Themes/Images';

import Firebase from "../../Firebase";
// import withFirebaseAuth from 'react-with-firebase-auth';
// import * as firebase from 'firebase';
// import 'firebase/auth';
// import firebaseConfig from '../firebaseConfig';
import { Card, ImageHeader, CardBody, CardFooter } from 'react-simple-card';
import ChatBoard from './../ChatBoard/ChatBoard';
import { AppString } from './../Const';
import './Chat.css';

var database = Firebase.database();

class Chat extends Component {
    constructor(props) {
        super(props)
        this.state = {
            childData: "",
            userId: "",
            user: null,
            currentPeerUser: null
        }
        this.currentUserId = localStorage.getItem(AppString.ID)
        this.currentUserAvatar = localStorage.getItem(AppString.PHOTO_URL)
        // this.currentUserNickname = localStorage.getItem(AppString.NICKNAME)
        // this.listUser = []
    }

    getListUser = async () => {
        const result = await myFirestore.collection(AppString.NODE_USERS).get()
        if (result.docs.length > 0) {
            this.listUser = [...result.docs]
        }

        let childData;
        var leadsRef = database.ref('users');
        leadsRef.on('value', snapshot => {
            childData = snapshot.val();
            this.setState({
                childData: childData
            })
        });
    }

    componentDidMount() {
        const { handle } = this.props.match.params
        this.setState({ userId: handle })
        this.getListUser();
    }

    onProfileClick = () => {
        this.props.history.push('/profile')
    }

    renderListUser = () => {
        if (this.listUser.length > 0) {
            let viewListUser = []
            this.listUser.forEach((item, index) => {
                if (item.data().id !== this.currentUserId) {
                    viewListUser.push(
                        <button
                            key={index}
                            className={
                                this.state.currentPeerUser &&
                                    this.state.currentPeerUser.id === item.data().id
                                    ? 'viewWrapItemFocused'
                                    : 'viewWrapItem'
                            }
                            onClick={() => {
                                this.setState({ currentPeerUser: item.data() })
                            }}
                        >
                            <img
                                className="viewAvatarItem"
                                src={item.data().photoUrl}
                                alt="icon avatar"
                            />
                            <div className="viewWrapContentItem">
                                {/* <span className="textItem">{`Nickname: ${
                                    item.data().nickname
                                    }`}</span>
                                <span className="textItem">{`About me: ${
                                    item.data().aboutMe ? item.data().aboutMe : 'Not available'
                                    }`}</span> */}
                            </div>
                        </button>
                    )
                }
            })
            return viewListUser
        }
    }

    render() {
        let data = []
        Object.values(this.state.childData).forEach(value => {
            data.push(value)
            console.log(data);
        });

        let friendData = [];

        return (

            <div className="container">
                <div className="viewBoard">
                    {this.state.currentPeerUser}
                    <Card>
                        <ChatBoard
                            currentPeerUser={this.state.currentPeerUser}
                            showToast={this.props.showToast}
                        />
                    </Card>
                </div>
            </div>
        )
    }
}

export default withRouter(Chat);