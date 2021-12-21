import React, { Component,useEffect,useState, } from 'react';
import "./jobs.scss"
import {store} from "../../../store/store"

function JobsS(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    var [description,setD] = useState(["Here the description of jobs will be shown."]);
    const [allValues, setAllValues] = useState({
        JobID: '',
        JobTitle: '',
        JobDescription: '',
        Salary: '',
        URL: '',
        Province: '',
        City: '',
        Date:'',
     });
  

    useEffect(() => {



      fetch("http://127.0.0.1:8000/jobt/",{
        method: 'POST',
        body: JSON.stringify(props.data)
    })
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
            try{
            console.log("hello ",result)
            setAllValues(
              {
                JobID: result[0]["id"],
                JobTitle: result[0]["JobTitle"],
                JobDescription: result[0]["JobDescription"],
                Salary: result[0]["Salary"],
                URL: result[0]["URL"],
                Province: result[0]["Province"],
                City: result[0]["City"],

            }
            )
          }
            catch(e){
              // console.log(e)
            }
            
            console.log(allValues)
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )

        
      
      
    },[props])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="m">
          <div className="job">
            <div className="r1">
          {items.map(item => (
            <div className="jobtiles" onClick={() => setAllValues({
                JobID: item.JobID,
                JobTitle: item.JobTitle,
                JobDescription: item.JobDescription,
                Salary: item.Salary,
                URL: item.URL,
                Province: item.Province,
                City: item.City,

            }) }>
                {item.Skill} <br />
                {item.JobTitle} <br />
                {item.City} <br />
                {item.Salary} <br />
                {item.DatePosted} <br />
            </div>
          ))}
          </div>
          <hr style={{padding:10+'px'}} />
          <div className="r2">
              <i>Discription</i>
              <div className="disc">
                <span> Title:</span>  {allValues.JobTitle}<br /> 
                <span> Description:</span> {allValues.JobDescription}<br /> 
                <span>Salary:</span>  {allValues.Salary}<br />
                <span>Province:</span>  {allValues.Province}<br /> 
                <span>City:</span>  {allValues.City}<br /> 

              </div>
          </div>
        </div>
        </div>
      );
    }
    
  }

  
export default JobsS;