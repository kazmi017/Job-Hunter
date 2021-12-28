import React, { Component,useEffect,useState, } from 'react';
import "./changeusername.scss"
import {store} from "../../../../store/store"

import { useDispatch } from "react-redux";
import { login } from "../../../../features/userSlice";
function ChnU() {
    const dispatch=useDispatch();
    const [error, setError] = useState('Old UserName:'+store.getState()["user"]["username"])
    const [formData, setFormData] = useState({
        Email:store.getState()["user"]["email"],
        Password: '',
        Username:''
      });
      const validateUN = (e) => {
        var UN = e.target.value
      
        if (store.getState()["user"]["username"]!=UN) {
            setError('Old UserName:'+store.getState()["user"]["username"])
          setFormData({ ...formData, [e.target.name]: e.target.value });
        } else {
          setError('Old UserName Provided!')
          setFormData({ ...formData, [e.target.name]: "" });
        }
      }

      const URL='http://ammarkazmi5124.pythonanywhere.com/upusername/'
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
          if(result=="Changed"){
        setError(result)
        dispatch(login({
            email:formData['Email'],
            isloggedIn:true,
            username:formData['Username'],
        }))
    }
    else{
        setError(JSON.stringify(result))
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
                      <label htmlFor="Username">New Username</label>
                      <input type="text" name="Username" placeholder="Username"
                      onChange={e => validateUN(e)} />
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

  
export default ChnU;