import React from 'react';
import '../App.css';

class Banner extends React.Component {
  render() {
    return (
      <div>
        <div class="jumbotron">
          <h1 class="display-4">The Friendship Cure</h1>
          <p class="lead">This site was inspired by The Friendship Cure, a book written by the journalist, Kate Leaver.</p>
          <hr class="my-4" />
          {/* <div class="row justify-content-md-center">
      <div class="box box5">
        <a href="https://www.amazon.com/dp/1468316591/ref=cm_sw_em_r_mt_dp_U_BtR1Db0JCWMF8" target="_blank"><img className="book-photo" src="https://images-na.ssl-images-amazon.com/images/I/410fUWFCv5L._SX331_BO1,204,203,200_.jpg"/></a>
      </div>
    </div> */}
        </div>

  <div class="lined-paper"><div class="top-margin"></div><div class="left-margin"></div><p>Hello, there! If you try this app and still can't even get close to making one good, lasting friendship, then don't give up...but know your problems are bigger than you thought Lol jk, then send suggestions and invite me to a cup of coffee. <br />-Joscandy and Jasmin</p></div>
        <br />

        {/* <p className="intro-paragraph">You have not earned the right to complain you can't make friends until you have completed the objectives of this interactive app. If you do all of this and still haven't even gotten close to making one good, lasting friendship, then don't give up but know your problems are bigger than you thought 😂 jk then send suggestions and invite me to a cup of coffee ☕ </p> */}


      </div>
    )
  }
}

export default Banner;