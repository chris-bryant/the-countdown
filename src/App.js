import React, { Component } from 'react';
import './App.css';
import { Progress } from 'reactstrap';
import moment from 'moment';

class App extends Component {
  render() {
    const today = moment().startOf('day');
    const end = moment('11-14-2019').startOf('day');
    const daysLeft = end.diff(today, 'days');
    const percentDone = Math.floor((1 - (daysLeft / 365)) * 100);
    const csDaysDone = 1 / 15;

    return (
      <div className="App">
        <div>
          <p>
            <h5>Removal - {percentDone}%</h5>
            <Progress striped color="success" value={percentDone} />
          </p>
          <p>
            <h5>Community</h5>
            <Progress striped color="success" value={csDaysDone} />
          </p>
        </div>
      </div>
    );
  }
}

export default App;
