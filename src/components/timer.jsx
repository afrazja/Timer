<<<<<<< HEAD
import React from 'react'
import PropTypes from 'prop-types'
import Clock from'./clock'
import Controls from'./controls'


class Timer extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
       count: 0,
       timerStatus:'stoped'
     };

  }
  componentDidUpdate(prevProps, prevState){
    if(this.state.timerStatus!==prevState.timerStatus){
switch (this.state.timerStatus) {
  case 'started':
  this.handleStart("started");
  break;
  case 'stopped':
this.setState({count: 0});
case 'paused':
clearInterval(this.timer);
        this.timer = undefined;

    break;

}
}
    }
    handleStart () {
    this.timer = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      });
    }, 1000);
  }
  onStatusChange=(newStatus)=>{
    this.setState({timerStatus:newStatus});
  };
  componentWillUnmount () {
    clearInterval(this.timer);
  }
  render () {
    var {count,timerStatus}=this.state;

    return(

        <div className="grid-x grid-padding-x align-center ">
        <div className="cell small-4">
          <Clock totalSeconds={count}/>
         <Controls countdownStatus={timerStatus} onStatusChange={this.onStatusChange} />
      </div>
    </div>
    )

  }
}

export default Timer;
=======
import React from 'react'
import PropTypes from 'prop-types'
import Clock from'./clock'
import Controls from'./controls'


class Timer extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
       count: 0,
       timerStatus:'stoped'
     };

  }
  componentDidUpdate(prevProps, prevState){
    if(this.state.timerStatus!==prevState.timerStatus){
switch (this.state.timerStatus) {
  case 'started':
  this.handleStart("started");
  break;
  case 'stopped':
this.setState({count: 0});
case 'paused':
clearInterval(this.timer);
        this.timer = undefined;

    break;

}
}
    }
    handleStart () {
    this.timer = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      });
    }, 1000);
  }
  onStatusChange=(newStatus)=>{
    this.setState({timerStatus:newStatus});
  };
  componentWillUnmount () {
    clearInterval(this.timer);
  }
  render () {
    var {count,timerStatus}=this.state;

    return(

        <div className="grid-x grid-padding-x align-center ">
        <div className="cell small-4">
          <Clock totalSeconds={count}/>
         <Controls countdownStatus={timerStatus} onStatusChange={this.onStatusChange} />
      </div>
    </div>
    )

  }
}

export default Timer;
>>>>>>> 4cb2a9d2c916de309e5ebeb1f4920bfcaf5c6d80
