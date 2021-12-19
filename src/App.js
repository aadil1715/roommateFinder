import logo from './logo.svg';
import './App.css';
import { useState,useReducer } from 'react';

const formReducer = (state,event) =>{
  return {
    ...state,
    [event.name] : event.value
  }
}
function App() {
  const [formData,setFormData] = useReducer(formReducer,{})
  const [submitting,setSubmitting] = useState(false);
  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false)
    }, 3000);
    
  }
  const handleChange = event => {
    setFormData({
      name:event.target.name,
      value:event.target.value,
    })
  }
  return (
    <div className="form">
      {submitting && 
      <div> Submitting the form .. </div>}
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Username : </p>
          </label>
          <input type="text" name="name" onChange={handleChange}></input>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
   </div>
  );
}

export default App;
