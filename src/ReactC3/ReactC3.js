import React from 'react';
//declare c3
let c3;

export default class ReactC3 extends React.Component {

  componentDidMount() {
    // require on mount
    // this should take care of server-side rendering too
    // use this with nextjs as well
    c3 = require('c3');
    const {data, returnChart} = this.props;

    // generate the chart
    data.bindto = this.container;
    this.chart = c3.generate(data);

    // if returnChart
    // pass the chart to the return chart function
    // used when user wants to attach flow functions
    // see c3js docs for flow / unflow usage
    if (returnChart) {
      returnChart(this.chart);
    }
  }

  componentWillUnmount() {
    const {unflow} = this.props;
    if (unflow) {
      unflow()
    }
    this.chart.destroy();
  }

  render() {
    return (
      <div ref={el => this.container = el}></div>
    );
  }
}
