import React from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import '../App.css';


class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      
      componentDidMount(){
        console.log(M);
        M.AutoInit();
    }

    handleMultiple(e) {
      var options = e.target.options;
      var value = [];
      for (var i = 0, l = options.length; i < l; i++) {
        if (options[i].selected) {
          value.push(options[i].value);
        }
      }
      alert(value);
    }
    
      handleChange(event) {

        let value = event.target.value
        const name = event.target.name

        this.setState({value: event.target.value});

        this.setState({
          [name]:value
        })
      }

    
    
      handleSubmit(event) {

        const answer = {
          bio : this.state.bio,
          occupation: this.state.occupation,
          hobbies: this.state.hobbies
        }
        alert(answer.bio + " " + answer.occupation + " " + answer.hobbies);
        this.setState({
          bio: "",
          occupation: ""
        })
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
          <div class="row">
      <div class="row">
        <div class="input-field">
          <i class="material-icons prefix">mode_edit</i>
          <textarea type="submit" name="bio" value={this.state.bio} onChange={this.handleChange} id="icon_prefix2" class="materialize-textarea" data-length="120"></textarea>
          <label for="icon_prefix2">Tell your future friend about yourself</label>
        </div>
        <div class="row">
        <div class="input-field">
          <i class="material-icons prefix">work</i>
          <input type="text" value={this.state.occupation} onChange={this.handleChange} id="icon_prefix2"  name="occupation" />
          <label for="icon_prefix2">What's your occupation?</label>
        </div>
        </div>
        <div class="row">
        <div class="input-field col s12">
    <select value={this.state.hobbies} onChange={this.handleMultiple} name="hobbies" ref="dropdown" multiple>
      <option value="Listening to Podcasts" name="Listening to Podcasts">Listening to Podcasts</option>
      <option value="Reading" name="Reading">Reading</option>
      <option value="Going to the Gym">Going to the gym</option>
      <option value="Watching Shows">Watching shows</option>
      <option value="Clubbing">Clubbing</option>
      <option value="Shopping">Shopping</option>
      <option value="Eating Out">Eating Out</option>
      <option value="Outdoors/Hiking/Camping">Outdoors/Hiking/Camping</option>
    </select>
    <label>Hobbies</label>
  </div>
  </div>
      </div>
  </div>
      </div>
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