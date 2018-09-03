import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';

class TemperatureView extends Component {
  render() {
    return (
      <div>
        {this.props.temperatures.map((sensor, index) => {
          return (
            <div key={index}>
              <div>{sensor[sensor.length - 1]}</div>
              <Chart data={sensor} color="#red" limits={0}/>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { temperatures: state.temperatures };
};

export default connect(mapStateToProps)(TemperatureView);
