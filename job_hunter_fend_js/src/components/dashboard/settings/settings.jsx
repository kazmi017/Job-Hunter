import React, { Component,useEffect,useState, } from 'react';
import "./settings.scss";
import ChnU from './change username/changeusername';
import ChnPh from './changephone/changephone';
import ChnP from './change password/changepass';

function Settings() {
    const [sett,SetSett]=useState(<ChnPh/>)
  

    useEffect(() => {
            },[])
  
   
   return (
        <div className="m">
            <div className="selection">
            <div className="total" onClick={() => SetSett(<ChnU/>)} >
                CHANGE USERNAME
            </div>
            <div className="total" onClick={() => SetSett(<ChnP/>)}>
                CHANGE PASSWORD
            </div>
            <div className="total" onClick={() => SetSett(<ChnPh/>)}>
                CHANGE PHONE NUMBER
            </div>
            </div>
            <div className="grnd">
                {sett}
            </div>
            
        </div>
   );
    
  }

  
export default Settings;