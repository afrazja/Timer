import React, { Component } from 'react';
import {Link,IndexLink,withRouter} from 'react-router-dom';

import $ from 'jquery';



 class Nav extends Component{

  render () {
    return (
      <div class="top-bar">
         <div class="top-bar-left">


          <ul className="menu  ">
             <li className="menu-text"> TIMER </li>
  <li><Link to="/timer"  >Timer</Link></li>
  <li>  <Link to="/Countdown"   >Countdown</Link></li>
  <div class="top-bar-right">
    <ul className="menu  ">
       <li className="menu-text"> Afraz Javanmardi </li>
       </ul>
  </div>


</ul>


</div>
      </div>

    );
  }
}

export default withRouter(Nav) ;
