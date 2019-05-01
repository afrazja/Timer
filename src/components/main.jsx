import React, { Component } from 'react'
import Nav from'./nav'
import Countdown from'./countdown'




  var Main =(props)=> {



    return (
      <div>
<Nav>
  
<div className="grid-x grid-padding-x align-center ">
<div className="cell small-4">
{props.children}
</div>
</div>
</Nav>
        </div>
    );
  }


export default Main;
