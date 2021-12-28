import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";
import { useNavigate } from "react-router-dom";
import validator from 'validator';

export function Login(props) {
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    Email:'',
    Password: '',
  });

  let nav = useNavigate();

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const validateEmail = (e) => {
    var email = e.target.value
  
    if (validator.isEmail(email)) {
      setError('Valid Email :)')
      setFormData({ ...formData, [e.target.name]: e.target.value });
    } else {
      setError('Enter valid Email!')
    }
  }
   const dispatch=useDispatch();

   const URL='http://ammarkazmi5124.pythonanywhere.com/login/'


  const handleSubmit=(e)=>{
    const body = JSON.stringify(formData);
    e.preventDefault();
    console.log('my data::: ',formData)
    fetch(URL, {
      method: 'POST',
      body: body
  }).then(res => res.json())
  .then((result)=>{
    if (result!=="Authentication Failed"){
      setError(result["Username"]+" Authenticated Successfully")
    dispatch(login({
    email:formData['Email'],
    isloggedIn:true,
    username:result["Username"],
  }))
  nav("/dashboard");
}
else{
  setError(result)
}
}
)
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    });

   };



    return (
      <div className="mainL" ref={props.containerRef}>
        <div className="header">Login</div>
        
        <form onSubmit={(e) => handleSubmit(e)}> 
        <div className="content">
          <div className="form">
            <div className="form-group">
              <label htmlFor="Email">Email</label>
              <input type="text" name="Email" placeholder="Email like abc@pluto.com" 
              onChange={(e) => validateEmail(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Password">Password</label>
              <input type="password" name="Password" placeholder="password"
              onChange={e => onChange(e)} />
              
            </div>
            <span style={{
              fontWeight: 'bold',
              color: 'red',
              }}>{error}</span>
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

