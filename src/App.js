import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [contact,setcontact]=useState({
    fName:"",
    lName:"",
    email:""
  })
  function handleChange(event){
    const{name,value}=event.target;
    setcontact((prevValue)=>({...prevValue,[name]:value}))
  } 
  return (
    <div className="container">
      <h1>Hello {contact.fName } {contact.lName }</h1>
      <br />
      <p>{contact.email}</p>
      <form>
      <input name='fName' 
      placeholder='First name' 
      onChange={handleChange} 
      value={contact.fName}>
      </input>
      <input  
      name='lName' 
      placeholder='second name' 
      onChange={handleChange} 
      value={contact.lName}>
      </input>
      <input  name='email' 
      placeholder='email' 
      onChange={handleChange} 
      value={contact.email}>

      </input>
      <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
