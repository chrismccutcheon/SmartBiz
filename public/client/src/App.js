import React, { Component } from 'react';
import SendMailBox from './components/sendMailBox';
import './App.less';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="sendMailBoxContainer">
          <SendMailBox />
        </div>
      </div>
    );
  }
}

export default App;
