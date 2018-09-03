import React, { Component } from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import Slider from '@material-ui/lab/Slider';

export default class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showItemsSliderValue: 100,
      chartLimit: 0
    };
  }

  handleSliderChange = (event, value) => {
    let limit =
      this.props.data.length - (this.props.data.length / 100) * (100 - value);

    if (limit > 0 && limit <= 1) {
      limit = 1.1;
    }
    this.setState({ showItemsSliderValue: value, chartLimit: limit });
  };

  render() {
    return (
      <div>
        <Sparklines
          data={this.props.data}
          color={this.props.color}
          limit={this.state.chartLimit}
        >
          <SparklinesLine />
        </Sparklines>
        <Slider
          value={this.state.showItemsSliderValue}
          onChange={this.handleSliderChange}
        />
      </div>
    );
  }
}
