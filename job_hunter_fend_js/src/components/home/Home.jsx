import React, { Component } from 'react';
import './Home.scss'
import { Chart } from "react-google-charts";
import { ImUserPlus } from 'react-icons/im';
import { BsFillCloudUploadFill } from 'react-icons/bs';

class Home extends Component {
    render() {
        return (
          <div className="main">
      <div className="bar">
          <div className="logo">logo</div>
          <div className="menus">menus</div>
          <div className="join">
            <a  href="/" className="jj" title="Join"><ImUserPlus /></a>
            
            <a href="/" className="jp" title="Post"><BsFillCloudUploadFill /></a>
              
          </div>
        </div>
    <div className="head">
        <div className="grad">
          <div className="home_title">
            <h1>Find Your Career. You Deserve it.</h1>
            <p>Quisque at magna maximus, gravida velit a, suscipit diam. Aenean fringilla ante quis nisl volutpat, sit amet mollis ante bibendum. Cras placerat metus elit, euismod tincidunt nunc laoreet ut. Interdum et malesuada fames ac ante.</p>
            <div className="jbtn">
              <div className="join">
              <a  href="/" className="a" title="Join"><i><ImUserPlus /></i> Join</a>
              <a href="/" className="a" title="Post"><i ><BsFillCloudUploadFill /></i> Upload</a>
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

        <div className="dpie">
        <Chart className="pie1"
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={[
          ['Task', 'Hours per Day'],
          ['React', 11],
          ['Flutter', 2],
          ['Python', 2],
          ['SEO', 2],
          ['iOS', 7],
          ]}
        />
        <Chart className="pie2"
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={[
          ['Task', 'Hours per Day'],
          ['React', 11],
          ['Flutter', 2],
          ['Python', 2],
          ['SEO', 2],
          ['iOS', 7],
          ]}
        />
        <Chart className="pie3"
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={[
          ['Task', 'Hours per Day'],
          ['React', 11],
          ['Flutter', 2],
          ['Python', 2],
          ['SEO', 2],
          ['iOS', 7],
          ]}
        />
        </div>
        
      </div>
      
    <div className="footer">
      <div className="who">
        <h5>Who we are?</h5>
        <p>We are a team ....</p>
      </div>
      <div className="usr">For Users</div>
      <div className="info">Information</div>
    </div>
      
    </div>
      
        );
    }
}

export default Home;