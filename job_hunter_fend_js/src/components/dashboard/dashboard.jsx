import React, {  useState, useEffect } from 'react';
import "./dashboard.scss";
import Dboard from './dboard/dboard';
import Jobs from './jobs/jobs';
import { MdPieChart, MdSearch,MdInfo, MdCreate,MdPermIdentity,MdDesktopMac } from "react-icons/md";
import { IoMdPaper } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import CV from './cv/cv.jsx';
import {useSelector} from 'react-redux'
import { selectUser } from '../../features/userSlice';
import { Dropdown, Selection } from 'react-dropdown-now';
import 'react-dropdown-now/style.css';
import JobsS from './jobsS/jobsearch';


function Dashboard (){
    const [formData, setFormData] = useState({
        Title:'',
        City: '',
        Skills:''
      });
      const[ch,setCh]=useState(1);

    const [page,setP]=useState(<Dboard/>);
    const data =useSelector(selectUser);
    const [inputValue, setInputValue] = useState("");

    const onChange = e => {
        setInputValue(e.target.value);
        if(ch==1){
        setFormData({
        Title:"",
        City: "",
        Skills:e.target.value
    })
}

if(ch==2){
    setFormData({
    Title:e.target.value,
    City: "",
    Skills:""
})
}

if(ch==3){
    setFormData({
    Title:"",
    City: e.target.value,
    Skills:""
})
}


}

      const handleSubmit=(e)=>{
        e.preventDefault();
        console.log('my data::: ',formData);
        setP(<JobsS data={formData}/>)
       };


        return (
            <div className="mainD">
               <div className="appbar">
                   <a href="/">
                    <div className="logoholder">
                        <div className="logo"><IoMdPaper className="logoIC"/></div>
                        <b className="lname">JOB HUNTER</b>
                    </div>
                    </a>

                    <div className="search">
                        <form class="wrapper" onSubmit={(e) => handleSubmit(e)}>
                            
                        <MdSearch className="serchIC"/>
                            <input placeholder="Search by title, city and skills" type="search" class="search"
                            value={inputValue}
                             onChange={e => onChange(e)}
                                
                                />

                                <Dropdown
                                  placeholder="Filter"
                                  className="dropdown"
                                  options={['Skills', 'Title', 'City']}
                                  value="one"
                                  onSelect={(value) => {
                                    setInputValue("");
                                    if(value["label"]=="Skills"){
                                      setCh(1)
                                    }
                                    if(value["label"]=="Title"){
                                      setCh(2)
                                    }
                                    if(value["label"]=="City"){
                                      setCh(3)
                                    }
                                  }}
                                />  
                                
                        </form> 
                    </div>
                    <div className="right">
                    <div className="set"><IoSettingsOutline className="setIC"/></div>
                    <div className="user"><MdPermIdentity className="userIC"/></div>
                    </div>
                </div>

                <div className="playground">
                    <div className="navbar">
                        <div className="menu">
                            {/* <h4 className="heading">Dashboard</h4> */}
                            <div className="c space" onClick={() => setP(<Dboard/>)} > <MdPieChart className="icons"/> Dashboard</div>
                            {/* <br />
                            <h4 className="heading">Jobs</h4> */}
                            <div className="c space" onClick={() => setP(<Jobs/>)} > <MdDesktopMac className="icons"/> Jobs</div>
                            {/* <br />
                            <h4 className="heading">About</h4> */}
                            <div className="c space" onClick={() => setP(<CV/>)} > <MdInfo className="icons"/> About Us</div>
                            {/* <br />
                            <h4 className="heading">CV</h4> */}
                            <div className="c space" onClick={() => setP(<CV/>)} > <MdCreate className="icons"/> Create CV</div>
                        </div>
                    </div>
                    <div className="ground">{page}</div>
                </div>
               
            </div>
        );
}

export default Dashboard;