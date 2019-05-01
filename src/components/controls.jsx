import React from 'react'
import PropTypes from 'prop-types'

class Control extends React.Component {
  PropTypes:{
    countdownStatus:React.propTypes.string.isReequired;
    onStatusChange:React.propTypes.func.isRequired;

  }
onStatusChange=(newStatus)=>{
  return()=>{
  this.props.onStatusChange(newStatus);
}}
  render () {
  var {countdownStatus}=this.props;
  var renderStartStopButton=()=>{
    if (countdownStatus=="started"){
      return <button className="button secondry"  onClick={this.onStatusChange('paused')}>Puse</button>
    }else  {
        return <button className="button primary"  onClick={this.onStatusChange('started')}>Start</button>
    }
  }
  return(
    <div className="controls" >
    {renderStartStopButton()}
    <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
    </div>
  )
  }
}

export default Control;
