import React from 'react';
import './App.css';

class App extends React.Component{
  constructor() {
    super ();
    this.state = {
      name: '',
      breed: '',
      birthday: '',
      gender: '',
      spayedOrNeutered: '',
      weight: '',
    }
  }

  //es6 functions
handleFormSubmission = (event) =>{
  event.preventdefault();
  this.setState({
    formCompleted : true
  })

  console.log('Form submitted')
}

  render() {
    return (
      <div>
        <h1>YAY, we love dogs! Give us some basic info about your pup.</h1>
        <form className="dog-form">
          <label>Name</label>
          <input
            type="name"
            placeholder="Enter Pups Name"
            />
            <br /><br />
          <label>Breed</label>
          <input
            type="name"
            placeholder="Pup's breed"
            />
            <br /><br />
            <label>Birthday</label>
            <input
              type="date"
              placeholder="Pup's date of birth"
              />
              <br /><br />
            <label>Gender</label>
            <input
              type="radio"
              name= "gender"
              value="female"
              /> Female
            <input
              type="radio"
              name= "gender"
              value="male"
              /> Male
              <br /><br />
            <label>Spayed or Neutered</label>
            <input
              type="radio"
              value="yes"
              value='no'
              /> Yes
            <input
              type="radio"
              value="yes"
              value='no'
              /> No
              <br /><br />
            <button
              type="submit"
              onClick={this.handleFormSubmission}>
                Submit
              </button>
              {this.state.formCompleted === true ? (<h2>Thank you for completing this form!</h2>) : null}
        </form>
      </div>
    )
    }
  
  }
  
  
  
  
  
  
  export default App;


