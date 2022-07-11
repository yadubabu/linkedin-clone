import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logIn } from '../actions';

const SignIn = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const [email,setEmail] =useState('');
  const [password,setPassword]=useState('');
  const [error,setError]=useState('');
  const handleSubmit=(e)=>{
    e.preventDefault();
    return dispatch(logIn(email,password)).then(()=>navigate('/'))
    .catch(err=>{
      setError(err);
    });
  }
  return (
   
    <div className='ui container'>

      <form className='ui form' onSubmit={handleSubmit}>
          {error && alert('error' + error)}
          <h2>{error}</h2>
          <label>Email:</label>
          <input 
          type='email' 
          name='email' 
          value={email}
          onChange={e=>setEmail(e.target.value)}
          />
          <label>Password:</label>
          <input 
          type='password' 
          name='password' 
          value={password}
          onChange={e=>setPassword(e.target.value)}
          />
          <br/>
          <button className='ui primary button'>Sign in</button>
      </form>
      
    </div>
  )} 

export default SignIn;