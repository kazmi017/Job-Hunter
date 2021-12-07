import React, { Component,useEffect,useState, } from 'react';
import "./jobs.scss"

function Jobs() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    var [description,setD] = useState(["Here the description of jobs will be shown."]);
    const [allValues, setAllValues] = useState({
        JobID: '',
        JobTitle: '',
        JobDescription: 'Here the description of jobs will be shown.',
        Salary: '',
        URL: '',
        Province: '',
        City: '',
     });
    var [i,setI]=useState([1]);
    const style = {
        color: 'white',
        fontSize: 200
      };
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
      fetch("http://127.0.0.1:8000/jobs/")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="job">
            <div className="r1">
                <i>Jobs</i>
          {items.map(item => (
            <div className="jwidg" onClick={() => setAllValues({
                JobID: item.JobID,
                JobTitle: item.JobTitle,
                JobDescription: item.JobDescription,
                Salary: item.Salary,
                URL: item.URL,
                Province: item.Province,
                City: item.City,

            }) }>
                {item.JobTitle} <br />
                {item.City} <br />
                {item.Salary} <br />
            </div>
          ))}
          </div>
          <div className="r2">
              <i>Discription</i>
              <div className="disc">
                Title:  {allValues.JobTitle}<br /> 
                Description:  {allValues.JobDescription}<br /> 
                Salary:  {allValues.Salary}<br />
                Province:  {allValues.Province}<br /> 
                City:  {allValues.City}<br /> 

              </div>
          </div>
        </div>
      );
    }
  }

  
export default Jobs;