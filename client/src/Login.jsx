import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'

function Login(){
    
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/login',{email,password})
        .then(result => {
            console.log(result);
            navigate('/home');
        })
        .catch(err => console.log(err));
    }
    return(
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
                <div className="bg-white p-3 rounded w-25">
    
                <form onSubmit={handleSubmit}> 
                    <div className="mb-3">
                    <label htmlFor="email">Email:</label><br/>
                    <input type="email" name="email" id="email" placeholder="Enter Email or Username" className="form-control rounded-0" onChange={(e)=>setEmail(e.target.value)} autoComplete="off" required/><br/>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="password">Password:</label><br/>
                    <input type="password" name="password" id="password" placeholder="Enter Password" className="form-control rounded-0" onChange={(e)=>setPassword(e.target.value)} autoComplete="off" required/><br/>
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">LOGIN</button>
                </form>
                <p>Doesn't have an Account, <Link to='/register'>Click here</Link></p>
                </div>
                
                
        </div>
    )
}

export default Login;