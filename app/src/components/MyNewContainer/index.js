import ReactNative from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { selectMyNewReducer } from '../../state/myNewReducer/reducer';
import styles from './styles';
// XX: https://github.com/lelandrichardson/react-native-maps
import MapView from 'react-native-maps';

const mapStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
};

export class MyNewContainer extends Component {
  render() {
    const region = {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    };
    return (
      <MapView initialRegion={region} style={mapStyle} />
    );
  }
}

MyNewContainer.propTypes = {
  MyNewReducer: React.PropTypes.object.isRequired,
  dispatch: React.PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(
  createSelector(selectMyNewReducer, (MyNewReducer) => ({ MyNewReducer })),
  mapDispatchToProps
)(MyNewContainer);
