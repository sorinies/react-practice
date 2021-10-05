import React, { Component } from 'react'

export default class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClickCapture = (e) => {
    console.dir(e);
    console.log("handleClickCapture - 1");
  }
  handleClickCapture2 = () => {
    console.log("handleClickCapture2 - 2");
  }
  handleClickBubble = () => {
    console.log("handleClickBubble - 4");
  }
  handleButtonClick = () => {
    console.log("handleButtonClick - 3");
  }

  render() {
    // 이벤트 캡처링에 사용하고 싶은 경우에는 Capture를 붙여 사용한다.
    return (
      <div onClickCapture={this.handleClickCapture}> 
        <div onClickCapture={this.handleClickCapture2} onClick={this.handleClickBubble}>
          <button onClick={this.handleButtonClick}>button</button>
        </div>
      </div>
    )
  }
}
