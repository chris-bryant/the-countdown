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
    const csDays = [
      moment('03-23-2019'),
      moment('03-30-2019'),
      moment('04-02-2019'),
      moment('04-03-2019'),
      moment('04-04-2019'),
      moment('04-05-2019'),
      moment('04-06-2019'),
      moment('04-13-2019'),
      moment('04-20-2019'),
      moment('04-27-2019'),
      moment('04-30-2019'),
      moment('05-01-2019'),
      moment('05-02-2019'),
      moment('05-03-2019'),
      moment('05-04-2019')
    ];

    const isAfterMap = csDays.map(day => today.isAfter(day.startOf('day')));
    const csDaysDone = isAfterMap.filter(after => !!after).length;

    return (
      <div className="App">
        <div>
          <p>
            <h5>Removal - {percentDone}%</h5>
            <Progress striped color="success" value={percentDone} />
          </p>
          <p>
            <h5>Community - {((csDaysDone / 15) * 100).toFixed(2)}%</h5>
            <Progress striped color="info" value={csDaysDone} max={15} />
          </p>
        </div>
      </div>
    );
  }
}

export default App;
