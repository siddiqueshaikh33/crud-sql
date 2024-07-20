import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';

function App() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email);
        axios.post('http://localhost:5000/add', {
         name,
         email
        }).then((res) => {
            console.log(res);
            navigate('/')
        }).catch((error) => {
            console.log(error);
        })
    }
  return (
    <div className="d-flex justify-content-center align-items-center vw-100 vh-100">
      <div className="card w-200 bg-info p-4">
        <form action="submit">
          <div className="form-group mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" name="name" id="name" placeholder="Enter your name" onChange={(e)=>setName(e.target.value)}
         />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" name="email" id="email" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
