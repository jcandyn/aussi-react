import React, { Component } from 'react';
// import { database } from './firebase';
import Firebase from "../../Firebase"

var database = Firebase.database();
class Chat extends Component {
  constructor() {
    super();

    this.state = {
      messages: [],
    };

    this.onAddMessage = this.onAddMessage.bind(this);
  }

  componentWillMount() {
    const messagesRef = database.ref('messages')
      .orderByKey()
      .limitToLast(100);

    messagesRef.on('child_added', snapshot => {
      const message = { text: snapshot.val(), id: snapshot.key };

      this.setState(prevState => ({
        messages: [message, ...prevState.messages],
      }));
    });
  }

  onAddMessage(event) {
    event.preventDefault();
    database.ref('messages').push(this.input.value);
    this.input.value = '';
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onAddMessage}>
          <input type="text" ref={node => this.input = node} />
          <input className="btn" type="submit" />
          <ul>
            {this.state.messages.map(message =>
              <li className="displayedMessages" key={message.id}>{message.text}</li>
            )}
          </ul>
        </form>
      </div>
    );
  }
}

export default Chat;