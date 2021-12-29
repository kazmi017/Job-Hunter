import React, { useState,useEffect } from "react";
import "./cv.scss"
import {store} from "../../../store/store"

function CV(){
  
  const [button,setBtn]=useState("Submit")

  const [formData1, setFormData1] = useState({
    'Email' :store.getState()["user"]["email"],
    'isCvCreated':1
  });


  const [formData, setFormData] = useState({
    'Email' :store.getState()["user"]["email"],
    'Name':'',
    'PhoneNumber':'',
    'Address':'',
    'Objective':'',
    'SchoolSubject':'',
    'SchoolAttended':'',
    'SchoolMarks':'',
    'ClgSubject':'',
    'ClgAttended':'',
    'ClgMarks':'',
    'UniSubject':'',
    'UniAttended':'',
    'UniMarks':'',
    'DOB':'',
    'Interest':'',
    'Skills':'',
    'Experience':'',
  });
  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

    
  const handleSubmit=(e)=>{
        console.log(formData)
        e.preventDefault();

        if(button=="Submit"){ 
        console.log("Submit")
        fetch("http://ammarkazmi5124.pythonanywhere.com/cv/",{
        method: 'POST',
        body: JSON.stringify(formData)
    })
        .then(res => res.json())
        .then(
          (result) => {
            console.log(result)
            fetch("http://ammarkazmi5124.pythonanywhere.com/cvstat/",{
        method: 'POST',
        body: JSON.stringify(formData1)
    })
        .then(res => res.json())
        .then(
          (result) => {
            console.log('cv updated',result)
            
          }
        )
          }
        )
  }
        if(button=="Update"){
          console.log("Update")
        fetch("http://ammarkazmi5124.pythonanywhere.com/cvupdate/",{
        method: 'POST',
        body: JSON.stringify(formData)
    })
        .then(res => res.json())
        .then(
          (result) => {
            console.log(result)
            
          }
        )
        }


      }


      useEffect(() => {

        fetch("http://ammarkazmi5124.pythonanywhere.com/cvstatcheck/",{
          method: 'POST',
          body: JSON.stringify(formData)
      })
          .then(res => res.json())
          .then(
            (result) => {
              console.log(result)
              if(result===1){
                setBtn("Update")
              console.log(result)
              fetch("http://ammarkazmi5124.pythonanywhere.com/cvdet/",{
          method: 'POST',
          body: JSON.stringify(formData)
      })
          .then(res => res.json())
          .then(
            (result) => {
             setFormData(result)
              console.log(result)
              
            }
          )

            
            }
              
            }
          )
  
  
  
        
  
          
        
        
      }, [])
        return (
            <div className="row" >
                <form onSubmit={(e) => handleSubmit(e)} className="mainCv">
                  <div className="s1" >
                  <label htmlFor="Name">Name</label>
                  <input className="search" type="text" value={formData["Name"]} name="Name" placeholder="Name"
                  onChange={e => onChange(e)} />

                  <label  htmlFor="Email">Email</label>
                  <input className="search" type="text" value={formData["Email"]} name="Email" placeholder="Email"
                  onChange={e => onChange(e)} />

                  <label  htmlFor="PhoneNumber">PhoneNumber</label>
                  <input className="search" type="text" value={formData["PhoneNumber"]} name="PhoneNumber" placeholder="PhoneNumber"
                  onChange={e => onChange(e)} />

                  <label  htmlFor="Address">Address</label>
                  <textarea className="search" type="text" value={formData["Address"]} name="Address" placeholder="Address"
                  onChange={e => onChange(e)} />

                  <label  htmlFor="SchoolSubject">School Subject</label>
                  <input className="search" type="text" value={formData["SchoolSubject"]} name="SchoolSubject" placeholder="SchoolSubject"
                  onChange={e => onChange(e)} />

                  <label  htmlFor="SchoolAttended">School Attended</label>
                  <input className="search" type="text" value={formData["SchoolAttended"]} name="SchoolAttended" placeholder="School Attended"
                  onChange={e => onChange(e)} />

                  <label  htmlFor="SchoolMarks">School Marks</label>
                  <input className="search" type="text" value={formData["SchoolMarks"]} name="SchoolMarks" placeholder="School Marks"
                  onChange={e => onChange(e)} />

                  <label  htmlFor="ClgSubject">College Subject</label>
                  <input className="search" type="text" value={formData["ClgSubject"]} name="ClgSubject" placeholder="College Subject"
                  onChange={e => onChange(e)} />
                  

                  <label  htmlFor="ClgAttended">College Attended</label>
                  <input className="search" type="text" value={formData["ClgAttended"]} name="ClgAttended" placeholder="College Subject"
                  onChange={e => onChange(e)} />

                  <label  htmlFor="ClgMarks">College Marks</label>
                  <input className="search" type="text" value={formData["ClgMarks"]} name="ClgMarks" placeholder="College Marks"
                  onChange={e => onChange(e)} />

                  </div>
                  <div className="s2">

                  

                  <label  htmlFor="UniSubject">University Subject</label>
                  <input className="search" type="text" value={formData["UniSubject"]} name="UniSubject" placeholder="University Subject"
                  onChange={e => onChange(e)} />
                  
                  

                  <label  htmlFor="UniAttended">University Attended</label>
                  <input className="search" type="text" value={formData["UniAttended"]} name="UniAttended" placeholder="University Attended"
                  onChange={e => onChange(e)} />

                  <label  htmlFor="UniMarks">University Marks</label>
                  <input className="search" type="text" value={formData["UniMarks"]} name="UniMarks" placeholder="University Marks"
                  onChange={e => onChange(e)} />

                  <label  htmlFor="DOB">Date of Birth</label>
                  <input className="search" type="text" value={formData["DOB"]} name="DOB" placeholder="15 Novemeber 1997"
                  onChange={e => onChange(e)} />

                  <label  htmlFor="Interest">Interests</label>
                  <input className="search" type="text" value={formData["Interest"]} name="Interest" placeholder="Interest i.e Android Developer, React Developer"
                  onChange={e => onChange(e)} />
                  

                  <label  htmlFor="Objective">Career Objectives</label>
                  <input className="search" type="text" value={formData["Objective"]} name="Objective" placeholder="Career Objectives"
                  onChange={e => onChange(e)} />
                   
                   <label  htmlFor="Skills">Skills</label>
                  <input className="search" type="text" value={formData["Skills"]} name="Skills" placeholder="Skills i.e Android Developer, React Developer "
                  onChange={e => onChange(e)} />
                  

                  <label  htmlFor="Experience">Work Experience</label>
                  <input className="search" type="text" value={formData["Experience"]} name="Experience" placeholder="Work Experience"
                  onChange={e => onChange(e)} /> 
                  
                   <input  type="submit" value={button} className="btn" />
                   </div>
                </form>
                
            </div>
        );
    }


export default CV;