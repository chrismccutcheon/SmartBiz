import React, { Component } from 'react';
import './sendMailBox.less';
import {connect} from 'react-redux';
import {changeEmail, changeTitle, changeMessage, sentMessage, sendingMessage, verificationError} from '../actions/appActions';

// This is the main component file of the app

// Connects to redux and accesses the store grabbing props
@connect((store)=>{
  return {
    title: store.app.title,
    email: store.app.email,
    message: store.app.message,
    isEmail: store.app.isEmail,
    errorMessage: store.app.errorMessage,
    displayError: store.app.displayError,
    sent: store.app.sent
  };
})
class SendMailBox extends Component {
  constructor(){
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }

  // onSubmit is fired whenever the user presses the send btn
  // First it checks if the email is validated then sends the email to the webserver
  onSubmit(event){
    event.preventDefault();
    if(this.props.isEmail){
      this.props.dispatch(sendingMessage());
      fetch('http://localhost:3000/sendemail/',{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: this.props.title,
          email: this.props.email,
          message: this.props.message,
        })
      }).then((response)=>{
        if(response.ok){
          this.props.dispatch(sentMessage());
        }
      })
    } else {
      this.props.dispatch(verificationError("Please enter valid email"));
    }
  }
  render() {
    //***********************************************************
    // This section is here for the button animations
    // It is based around two divs in the background that grow and shrink based on the progress of the email
    // There are three states of progress: The title is not "", the email is verified, and the message is not ""
    // The only required field is the email field, it just wont animate the button the whole way if the other fields are left blank
    var progress = 0;
    var upperWidth = 0;
    var lowerWidth = 0;
    if(this.props.title !== ""){
      progress++;
    }
    if(this.props.isEmail){
      progress++;
    }
    if(this.props.message !== ""){
      progress++;
    }
    switch (progress) {
      case 1:
        lowerWidth = 66.7;
        break;
      case 2:
        lowerWidth = 100;
        upperWidth = 33.3;
        break;
      case 3:
        lowerWidth = 100;
        upperWidth = 100;
        break;
      default:
    }
    var buttonFillStyle = {
      backgroundSize: "100% 100%",
      color: "white"
    }
    var upperProgressStyle ={
      width: `${upperWidth}%`
    }
    var lowerProgressStyle ={
      width: `${lowerWidth}%`
    }
    var errorDisplayStyle = {
      display: (this.props.displayError ? "block" : "none")
    }
    var sentDisplayStyle = {
      display: (this.props.sent ? "block" : "none")
    }

    //********************************************************
    return (
      <div className="sendMailBox">
        <div className="formContainer">
          <span className="emailTitleText">We love mail <i className="em em-sparkles"></i></span>
          <form onSubmit={this.onSubmit}>
            <input className="inputBox" type="text" placeholder="Title" onChange={(e)=>this.props.dispatch(changeTitle(e.target.value))}/>
            <br/>
            <input className="inputBox" type="text" placeholder="Email" onChange={(e)=>this.props.dispatch(changeEmail(e.target.value))}/>
            <br/>
            <input className="inputBox" type="text" placeholder="Message" onChange={(e)=>this.props.dispatch(changeMessage(e.target.value))}/>
            <br/>
            <div className="progressSubmit">
              <input className="sendMailBtn" style={progress === 3? buttonFillStyle: {}} type="submit" value="SEND" />
              <div className="upperProgress" style={upperProgressStyle}></div>
              <div className="lowerProgress" style={lowerProgressStyle}></div>
            </div>
          </form>
        </div>
        <div className="errorDisplayBox" style={errorDisplayStyle}>
          {this.props.errorMessage}
        </div>
        <div className="successDisplayBox" style={sentDisplayStyle}>
          Email Sent!
        </div>
      </div>
    );
  }
}

export default SendMailBox;
