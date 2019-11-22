import React from 'react';
import '../App.css';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'coconut'};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
      }
    render() {
        return (
            <div className="search">
  <div class="section no-pad-bot" id="index-banner">
    <div class="container">
      {/* <h1 class="header center pink-text text-lighten-3">Hey!</h1> */}
      <div class="row center">
        <h5 class="header col s12 light grey-text text-lighten-1">let's answer a few questions</h5>
      </div>
    </div>
  </div>
    <div class="container">
  <div class="row">
  
        <form onSubmit={this.handleSubmit}>
          {/* <i class="material-icons prefix">search</i> */}
          <div class="row">
        <div class="input-field col s12">
          <input id="password" type="password" class="validate"/>
          <label for="password">Password</label>
        </div>
      </div>
          {/* <input type="submit" value="Submit" value={this.state.value} onChange={this.handleChange} type="text" id="autocomplete-input" class="autocomplete"/>
          <label for="autocomplete-input">In one word, how do you feel?</label> */}
          </form>
        </div>
      </div>
  

  
  <button onClick={this.handleSubmit} className="btn waves-effect waves-light">
      <i class="material-icons left">thumb_up</i>
      Find Friend  
  </button>
            </div>

        )
    }
}

export default Search;