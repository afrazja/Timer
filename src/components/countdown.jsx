
import React from 'react'
import PropTypes from 'prop-types'
import Clock from'./clock'
import CountdownForm from'./countdownForm'
import Controls from'./controls'

class Countdown extends React.Component {
  state={

      count:0,
      countdownStatus:'stopped'

  }
  componentDidUpdate(prevProps, prevState){
      if (this.state.countdownStatus !== prevState.countdownStatus){
switch (this.state.countdownStatus) {
  case 'started':
  this.startTimer();
  break;
  case 'stopped':
          this.setState({count: 0});
  case 'paused':
            clearInterval(this.timer)
            this.timer = undefined;
            break;

}
    }
  }
  componentWillUnmount () {
    clearInterval(this.timer);
    this.timer = undefined;
  }
  startTimer() {
    this.timer = setInterval(() => {
      var newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });

      if (newCount === 0) {
        this.setState({countdownStatus: 'stopped'});
      }
    }, 1000);
  }


    handleSetCountdown= (seconds)=> {
        this.setState({
          count: seconds,
          countdownStatus: 'started'
        });

  }
  handleStatusChange=(newStatus)=>{
    this.setState({countdownStatus:newStatus})


  };

  render () {
    var {count,countdownStatus}=this.state
    var doDynamic=()=>{
     if(countdownStatus!=="stopped"){
     return  <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange} />
     }else{
       return <CountdownForm onSetCountdown={this.handleSetCountdown}/>
     }
    }
    return(
      <div className="grid-x grid-padding-x align-center ">
      <div className="cell small-6 medium-4">


<Clock totalSeconds={count}/>

{doDynamic()}
    </div>
  </div>
    )

  }
}

export default Countdown;
