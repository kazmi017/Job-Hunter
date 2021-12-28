import React, { Component,useEffect,useState, } from 'react';
import "./changephone.scss"
import {store} from "../../../../store/store"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../../../features/userSlice";
function ChnPh() {
    let nav = useNavigate();
    const dispatch=useDispatch();
    const [error, setError] = useState('')
    const [formData, setFormData] = useState({
        Email:store.getState()["user"]["email"],
        Password: '',
        PhoneNumber:''
      });

      const URL='http://ammarkazmi5124.pythonanywhere.com/upphone/'
      const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });


        const handleSubmit=(e)=>{
        const body = JSON.stringify(formData);
        e.preventDefault();
        console.log('my data::: ',formData)
        fetch(URL, {
          method: 'POST',
          body: body
      }).then(res => res.json())
      .then((result)=>{
        if(result!="Error")
          if(result=="Changed"){
                setError(result)
            }
          else{
            setError(JSON.stringify(result))
            }
        else{
            setError("Wrong Password, Please Login agian.")
            dispatch(login({
                email:"none",
                isloggedIn:false,
                username:""
              }))
              nav("/");
        }
      }
    
    )
        .catch(error => {
            setError('There has been a problem with your fetch operation');
        });
    
       };
       
  
   
   return (
        <div className="mmn">
             <form onSubmit={(e) => handleSubmit(e)}> 
                <div className="content">
                  <div className="form">
                    <div className="form-group">
                      <label htmlFor="Email">Email</label>
                      <input type="text" name="Email" defaultValue={formData["Email"]}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="Password">Password</label>
                      <input type="password" name="Password" placeholder="password"
                      onChange={e => onChange(e)} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="PhoneNumber">New Phone Number</label>
                      <input type="text" name="PhoneNumber" placeholder="PhoneNumber"
                      onChange={e => onChange(e)} />
                    </div>
                    <span style={{
                      fontWeight: 'bold',
                      color: 'red',
                      }}>{error}</span>
                  </div>
                </div>
                <div className="form footer">
                  <button type="submit" className="btn">
                    Update
                  </button>
                </div>
                </form>
            
        </div>
   );
    
  }

  
export default ChnPh;