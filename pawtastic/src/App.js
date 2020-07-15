import React from 'react';
import './App.css';

class App extends React.Component{
  constructor() {
    super ();
    this.state = {
      name:'',
      breed:'',
      birthday: '',
      gender: '',
      spayedOrNeutered: '',
      weight: '',
      formCompleted: false
    }
  }

  //es6 functions
onNameChange = (e) => {
  e.preventDefault();
  this.setState({
    name: e.target.value
  })
}

onBreedChange = (event) => {
  event.preventDefault();
  this.setState({
    name: event.target.value
  })
}

onBirthdayChange = (event) => {
  event.preventDefault();
  this.setState({
    name: event.target.value
  })
}


handleFormSubmission = (event) =>{
   event.preventDefault();
  this.setState({
    formCompleted : true
  })

  console.log('Form submitted')
}

  render() {
    return (
      <div className="form">
        <h1 className="header">YAY, we love dogs! Give us some basic info about your pup.</h1>
        <form className="dogForm">
          <label>Name</label>
          &nbsp; &nbsp;
          <input
            type="text"
            placeholder="Enter Pups Name"
            value={this.state.name}
            onChange={this.onNameChange}
            />
            <br /><br />

          <label>Breed</label>
          &nbsp; &nbsp;
          <input
            type="text"
            placeholder="Pup's breed"
            />
            <br /><br />

            <label>Birthday</label>
            &nbsp; &nbsp;
            <input
              type="date"
              placeholder="Pup's date of birth"
              />
              <br /><br />

            <label >Gender:</label><br/>
            <input
              type="radio"
              /> 
              Female
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


