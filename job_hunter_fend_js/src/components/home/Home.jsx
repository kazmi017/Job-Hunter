import React, { Component } from 'react';
import './Home.scss'
import { Chart } from "react-google-charts";
import { ImUserPlus } from 'react-icons/im';
import { BsFillCloudUploadFill } from 'react-icons/bs';
import { IoMdPaper } from "react-icons/io";

class Home extends Component {
    render() {
        return (
          <div className="main">
      <div className="bar">
      <a href="/">
                    <div className="logoholder">
                        <div className="logo"><IoMdPaper className="logoIC"/></div>
                        <b className="lname">JOB HUNTER</b>
                    </div>
                    </a>
          <div className="join">
            <a  href="/join" className="jj" title="Join"><ImUserPlus /></a>
            
            <a href="/" className="jp" title="Post"><BsFillCloudUploadFill /></a>
              
          </div>
        </div>
    <div className="head">
        <div className="grad">
          <div className="home_title">
            <h1>Find Your Career. You Deserve it.</h1>
            <p>Job Hunter will help you to find a Job that</p>
            <div className="jbtn">
              <div className="join">
              <a  href="/join" className="a" title="Join"><i><ImUserPlus /></i> Join</a>
              <a href="/" className="a" title="Post"><i ><BsFillCloudUploadFill /></i> Create CV</a>
              </div >
            </div>
          </div>
          
        </div> 
      </div>

    <div className="body">
        <div className="btitle">
        <h3>How It <span>Works?</span></h3>
        <p>Description- Unknown yet</p>
        <p></p>
        </div>

        
        
        <div className="bdoc">
        <div className="signup">
          <div className="simg">
            
          </div>
          <div className="stxt">
            <h4>Signup</h4>
            <p>First You signup to aquire all the features of this website, if you already have an account.</p>
            <p></p>
           </div> latest LTS version

        </div>
        <div className="upload">
          <div className="uimg">
            
          </div>
          <div className="utxt">
            <h4>Create CV</h4>
            <p>Create your Curriculum Vitae (CV) To Tell Us About Your skills, preferences etc. We'll Quickly Match You With The Right gigs.</p>
          </div>
        </div>
        <div className="search">
          <div className="srimg">
            
          </div>
          <div className="srtxt">
            <h4>Search</h4>
            <p>Search from the results and choose the right one for you.</p>
          </div>
        </div>
        </div>

        
      </div>
      <div className="footer">
        
        <div className="usr">Conact Us</div>
        <hr />
        <div className="info">UseFul Links</div>
      </div>
      
    </div>
      
        );
    }
}

export default Home;