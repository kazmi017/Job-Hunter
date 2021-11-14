import React, { Component } from 'react';
import './Home.scss'
class Home extends Component {
    render() {
        return (
            <div className="main">
      <div className="bar">
          <div className="logo">logo</div>
          <div className="menus">menus</div>
          <div className="join">join</div>
        </div>
      <div className="head">
        <div className="grad">
          <div className="home_title">
            <h1>Find Your Career. You Deserve it.</h1>
            <p>Quisque at magna maximus, gravida velit a, suscipit diam. Aenean fringilla ante quis nisl volutpat, sit amet mollis ante bibendum. Cras placerat metus elit, euismod tincidunt nunc laoreet ut. Interdum et malesuada fames ac ante.</p>
            <div className="jbtn">
              <div className="join">
              <a  href="/" title="Join">Signup or Login</a>
              <a href="/" title="Post">Upload Your CV</a>
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
           </div>
        </div>
        <div className="upload">
          <div className="uimg">
            
          </div>
          <div className="utxt">
            <h4>Upload</h4>
            <p>Post your Curriculum Vitae (CV) To Tell Us About Your skills, preferences etc. We'll Quickly Match You With The Right gigs.</p>
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
      
      
    </div>
      
        );
    }
}

export default Home;