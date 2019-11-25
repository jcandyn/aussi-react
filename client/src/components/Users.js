import React from 'react'
import * as firebase from 'firebase';
import firebaseConfig from '../firebaseConfig'
import Firebase from "../Firebase"
import UserCard from "./UserCard"

var database = Firebase.database();

class Users extends React.Component {
    state = {
        childData: ""
    }

   retrieve = () => {
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
        this.retrieve()
    }



    render() {
        let data = []
        Object.values(this.state.childData).forEach(value=>{
           
            data.push(value)
            console.log(data);
         });
        return(
            <div>
            <h3>These are all the users in the app</h3>
            {/* {console.log(this.state.childData)} */}
            {data.map(item => <UserCard data={item}/>)}
            </div>
        )
    }
}





export default Users