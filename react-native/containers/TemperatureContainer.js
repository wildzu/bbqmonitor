import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Temperature from '../components/Temperature';

import {textClick} from '../actions/';

const mapStateToProps = state => ({
  temperature: {
    smoker:state.temperature.smoker,
    meat : state.temperature.meat
  },
  clickState: state.text_highlight
})

const mapDispatchToProps = (dispatch) => ({
    textClick: () => {dispatch(textClick())}
})

export default connect(mapStateToProps, mapDispatchToProps)(Temperature)