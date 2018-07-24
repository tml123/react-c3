import React, { Component } from 'react';
import ReactC3 from './ReactC3/ReactC3';
// import c3.css file for styles
import 'c3/c3.css';

const VOLTAGE = {
  data: {
    columns: [
      ['Voltage', 1000, 999, 998, 1000, 1000, 1000, 1000, 1000, 999, 997, 995, 1000, 999, 999, 998, 998, 998, 1000],
    ],
  },
  axis: {
    x: {
      label: 'Time',
      position: 'outer-center',
    },
    y: {
      label: 'Voltage',
      position: 'outer-center',
    },
  },
  size: {
    height: 300,
  },
}

class App extends Component {

  flowFunction = (c) => {
    this.voltageChart = c;
    this.voltageFlow = setInterval(() => this.randomizeBatteryVoltage(this.voltageChart), 5000);
  }

  randomizeBatteryVoltage = (chart) => {
    const voltage = [
      'Voltage',
      Math.floor(1000 - Math.floor((Math.random() * 10))),
    ];
    const flowData = {
      columns: [voltage],
    };
    chart.flow(flowData);
    return voltage;
  }

  unflowFunction = () => {
    clearInterval(this.flowFunction)
  }

  render() {
    return (
      <div className="App">
        <ReactC3 data={
          {
            data: {
              columns: [
                  ['Some Data 1', 10],
                  ['Some Data 2', 5],
                  ['Some Data 3', 25]
              ],
              type : 'donut'
            },
            donut: {
              title: "Some Data"
            },
            tooltip: {
                show: true
            }
            }
          }/>
          <ReactC3 data={VOLTAGE} returnChart={this.flowFunction} unflow={this.unflowFunction}/>
      </div>
    );
  }
}

export default App;
