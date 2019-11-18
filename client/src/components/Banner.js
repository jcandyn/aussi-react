import React from 'react';
import '../App.css';

class Banner extends React.Component {
    render() {
        return(
            <div>
            <div class="jumbotron">
  <h1 class="display-4">Hello, there!</h1>
  <p class="lead">If sometimes you can't find the right words to describe the way you feel, then you have come to the right place!</p>
  <hr class="my-4"/>
  <p>Aussi helps you find words to describe how you feel, and then you can share your experiences with others. You may find you are not the only one who has experienced it, whatever 'it' may be.</p>
</div>
</div>
        )
    }
}

export default Banner;