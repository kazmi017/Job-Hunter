import React,{ useState } from "react";
import { useDispatch } from "react-redux";
import BarWave from "react-cssfx-loading/lib/BarWave";
import { useNavigate } from "react-router-dom";
import { login } from "../../features/userSlice";
import validator from 'validator'

export function Register (props){

  const dispatch=useDispatch();

  const [error, setError] = useState('')


  let nav = useNavigate();
    const [formData, setFormData] = useState({
      Username:'',
      Email: '',
      Password: '',
      PhoneNumber:'',
      isCvCreated:0,
    });
    const[reg,setReg]=useState("Register")

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


   const change=()=>{
     setReg(
      <BarWave/>
     )
   }


const handleSubmit=(e)=>{

  e.preventDefault();
  const body = JSON.stringify(formData);
  console.log('my data::: ',body)
  change()
  fetch('http://ammarkazmi5124.pythonanywhere.com/signup/',{
    method: 'POST',
    body: body
  } )
        .then((response) => response.json())
        .then((result)=>{
          setError(result)
          // nav("/");
          setReg("Register")
      }
      )
        .catch((error) => {
          setError('ERROR: '+error)
        });



 };



  return (
      <div className="mainL" ref={props.containerRef}>
        <div className="header">Register</div>
        <form onSubmit={(e) => handleSubmit(e)}>
        <div className="content">
          
          <div className="form">
            <div className="form-group">
              <label htmlFor="Username">Username</label>
              <input type="text" name="Username" placeholder="username" 
                onChange={e => onChange(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Email">Email</label>
              <input type="text" name="Email" placeholder="email" 
             onChange={(e) => validateEmail(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Password">Password</label>
              <input type="text" name="Password" placeholder="password" minLength='8'required 
             onChange={e => onChange(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="PhoneNumber">Phone#</label>
              <input type="text" name="PhoneNumber" placeholder="Phone #" 
              onChange={e => onChange(e)}
              />
            </div>
            <span style={{
              fontWeight: 'bold',
              color: 'red',
              }}>{error}</span>
          </div>
        </div>
        <div className="footer">
        <a href="/dashboard">
          <button type="submit" className="btn">
            {reg}
          </button>
          </a>
        </div>
        </form>
      </div>
    );
}