import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const handleCreateUser = e =>{
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const email = form.get('email');

    const user ={name , email};

    console.log(user);

    fetch('http://localhost:5000/users',{
      method:'POST',
      headers:{
        'content-type':'application/json',
      },
      body: JSON.stringify(user),
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data);
      if(data.insertedId){
        alert(`New user added with ID : ${data.insertedId}`);
      }
    })
  }

  return (
    <>
      <div>
        <h1>CRUD user management system with MongoDB</h1>
        <h3>Create new user</h3>

        <form action="" onSubmit={handleCreateUser}>
          <input type="text" name="name" id="" /><br />
          <input type="email" name="email" id="" /><br />
          <input type="submit" value="Create User" />
        </form>
      </div>
    </>
  )
}

export default App
