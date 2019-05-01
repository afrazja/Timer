import React from 'react'
import PropTypes from 'prop-types'

class CountdownForm extends React.Component {
  handleSubmit=(e)=>{
    e.preventDefault();
    var strSeconds=this.refs.seconds.value;

    if(strSeconds.match(/^[0-9]*$/)){
 this.refs.seconds.value='';
 this.props.onSetCountdown(parseInt(strSeconds,10))

    }
  }
  render () {
 return(
 <div>
<form onSubmit={this.handleSubmit} className="countdown-form" ref="form">
<input type="text" ref="seconds">

</input>
<button className="button expanded">
Start
</button>
</form>
 </div>
)
  }
}

export default CountdownForm;
