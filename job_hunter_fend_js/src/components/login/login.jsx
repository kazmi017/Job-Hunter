import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";
import loginImg from "../../login.svg";


export function Login(props) {

   const [email,setEmail]= useState("");
   const [password,setPassword]= useState("");

   const dispatch=useDispatch();

   const URL='https://jobhunter5758.000webhostapp.com/login.php'


  const handleSubmit=(e)=>{

    e.preventDefault();

    dispatch(login({
      isloggedIn:true,
    }));
   };



    return (
      <div className="base-container" ref={props.containerRef}>
        <div className="header">Login</div>
        
        <form onSubmit={(e) => handleSubmit(e)}> 
        <div className="content">
        
          <div className="image">
            <img src={loginImg} />
          </div>
          
          <div className="form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="Email" 
              onChange={(e)=> setEmail({email: e.target.value}) }/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password"
              onChange={(e)=> setPassword({password:e.target.value})} />
              
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="submit" className="btn">
            Login
          </button>
        </div>
        </form>
      </div>
    );
  }

