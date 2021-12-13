import React, { Component,useEffect,useState, } from 'react';
import "./jobs.scss"
import {store} from "../../../store/store"

function Jobs() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [itemsk, setSk] = useState([]);
    const [skill,setSkill]=useState("");
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
     var data={"Email":store.getState()["user"]["email"]}
  

    useEffect(() => {

      fetch("http://127.0.0.1:9000/skill/",{
        method: 'POST',
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(
          (result) => {
            setSk(result)
            // setSkill(result[0])
            console.log(skill)
            
          }
        )



      fetch("http://127.0.0.1:9000/job/",{
        method: 'POST',
        body: JSON.stringify(skill)
    })
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
            // console.log(result)
            setAllValues(
              {
                JobID: result["JobID"],
                JobTitle: result["JobTitle"],
                JobDescription: result["JobDescription"],
                Salary: result["Salary"],
                URL: result["URL"],
                Province: result["Province"],
                City: result["City"],

            }
            )
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )

        
      
      
    }, [skill])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="m">
          <div className="skills">{skill}</div>
          {itemsk.map(itemskill => (
            <div className="jobtiles" onClick={()=> {setSkill(itemskill);}}>
                {itemskill} <br />
            </div>
          ))}
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

  
export default Jobs;