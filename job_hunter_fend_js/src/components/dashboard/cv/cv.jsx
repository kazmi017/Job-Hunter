import React, { Component } from 'react';
import "./cv.scss"
class CV extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
    render() {
        return (
            <div className="row" >
                <form onSubmit={this.handleSubmit} className="mainCv">
                   <label className="labels">
                        Name: <br />
                        
                     <input className="labels border" type="text" value={this.state.value} onChange={this.handleChange} />
                   </label >
                   <label className="labels">
                     Email:<br />
                     
                     <input className="labels border" type="text" value={this.state.value} onChange={this.handleChange} />
                   </label>
                   <label className="labels">
                     Phone#:<br />
                     
                     <input className="labels border" type="text" value={this.state.value} onChange={this.handleChange} />
                   </label>
                   <label className="labels">
                     Address:<br/>
                     
                     <textarea className="labels border address" type="text" value={this.state.value} onChange={this.handleChange} />
                   </label>
                   <label className="labels">
                     Permanent Address:<br/>
                     
                     <textarea className="labels border address" type="text" value={this.state.value} onChange={this.handleChange} />
                   </label>
                   
                </form>
                <form onSubmit={this.handleSubmit} className="mainCv">
                   <label className="labels">
                        Career Objectives: <br />
                        
                     <input className="labels border" type="text" value={this.state.value} onChange={this.handleChange} />
                   </label >
                   <label className="labels">
                     Skills:<br />
                     
                     <input className="labels border" type="text" value={this.state.value} onChange={this.handleChange} />
                   </label>
                   <label className="labels">
                     City:<br />
                     
                     <input className="labels border" type="text" value={this.state.value} onChange={this.handleChange} />
                   </label>
                   <label className="labels">
                        Work Experience: <br />
                        
                     <input className="labels border" type="text" value={this.state.value} onChange={this.handleChange} />
                   </label >
                   <label className="labels">
                     Last Job:<br />
                     
                     <input className="labels border" type="text" value={this.state.value} onChange={this.handleChange} />
                   </label>
                   <input type="submit" value="Submit" className="btn" />
                </form>
            </div>
        );
    }
}

export default CV;