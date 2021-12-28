import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";
import { useNavigate } from "react-router-dom";
import validator from 'validator';

export function Login(props) {
  const [Header,Setheader]=useState('Login')
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    Email:'',
    Password: '',
    Username:''
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

   const click=()=>{
     if(Header==='Login')
    Setheader('Recover')
    else
    Setheader('Login')

   }
  const handleSubmit=(e)=>{
    const body = JSON.stringify(formData);
    e.preventDefault();
    console.log('my data::: ',formData)
    if(Header==='Login')
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
else
fetch("https://ammarkazmi5124.pythonanywhere.com/forget/", {
  method: 'POST',
  body: body
}).then(res => res.json())
.then((result)=>{
if (result!=="Authentication Failed"){
  setError("Check your Email!")
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
        <div className="header">{Header}</div>
        
        <form onSubmit={(e) => handleSubmit(e)}> 
        <div className="content">
          <div className="form">
            <div className="form-group">
              <label htmlFor="Email">Email</label>
              <input type="text" name="Email" placeholder="Email like abc@pluto.com" 
              onChange={(e) => validateEmail(e)}
              />
            </div>
            {Header==='Login'?<div className="form-group">
              <label htmlFor="Password">Password</label>
              <input type="password" name="Password" placeholder="password"
              onChange={e => onChange(e)} />
            </div>
            :<div className="form-group">
              <label htmlFor="Username">Username</label>
              <input type="text" name="Username" placeholder="Username"
              onChange={e => onChange(e)} />
            </div>
}
            <span style={{
              fontWeight: 'bold',
              color: 'red',
              }}>{error}</span>
              <div className="forget" onClick={()=>{click()}}>
              <span style={{
              fontWeight: 'bold',
              color: 'blue',
              }}>Forgot Password?</span>
              </div>
          </div>
        </div>
        <div className="footer">
          <button type="submit" className="btn">
            {Header}
          </button>
        </div>
        </form>
      </div>
    );
  }

