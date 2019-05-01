import React, { Component } from 'react';
import $ from 'jquery';

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Timer from './components/timer'
import Countdown from './components/countdown'
import Main from './components/main'

class App extends Component {

  render() {
    return (
      <div>
      <Router >
       <div >
            <Main></Main>


         <Route  exact path="/" component={Main} >
<Route  path="/timer" component={Timer} />
           <Route  path="/countdown" component={Countdown} />
</Route>
        </div>
      </Router>


      </div>
    );
  }
}

export default App;
