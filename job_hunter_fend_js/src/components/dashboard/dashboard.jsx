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


function Dashboard (){
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       page: <Dboard/>
    //     };
    //     const data =useSelector(selectUser)
    //   }

    const [page,setP]=useState(<Dboard/>);
    const data =useSelector(selectUser);

    useEffect(() => {
        console.log('new dddd',data)
      });


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
                    <div className="srch"><MdSearch className="serchIC"/></div> 
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