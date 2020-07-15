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
      formCompleted: false
    }
  }

  //es6 functions
onNameChange = (e) => {
  this.setState({
    name: e.target.value
  })
}

onBreedChange = (e) => {
  this.setState({
    name: e.target.value
  })
}

onBirthdayChange = (e) => {
  this.setState({
    name: e.target.value
  })
}


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
            value={this.state.name}
            onChange={this.onNameChange}
            />
            <br /><br />

          <label>Breed</label>
          <input
            type="name"
            placeholder="Pup's breed"
            value={this.state.breed}
            onChange={this.onBreedChange}
            />
            <br /><br />

            <label>Birthday</label>
            <input
              type="date"
              placeholder="Pup's date of birth"
              value={this.state.birthday}
              onChange={this.onBirthdayChange}
              />
              <br /><br />

            <label >Gender</label><br/><br />
            <input
              type="checkbox"
              id = "toggle"
              class="checkbox"
              /> 
              <input for="toggle" class="switch"></input>Female
            <input
              type="radio"
              name= "gender"
              value="male"
              /> Male
              <br /><br />

            <label>Spayed or Neutered</label>
            <input
              type="radio"
              /> Yes
            <input
              type="radio"
              /> No
              <br /><br />

              <label>Weight</label>
              <input
                type="radio"
              /> 0 - 25 lbs
              <input
                type="radio"
              /> 25 - 50 lbs
              <input
                type="radio"
              /> 50 - 100 lbs
              <input
                type="radio"
              /> 100+ lbs
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


