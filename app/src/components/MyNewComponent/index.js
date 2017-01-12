import ReactNative from 'react-native';
import React, { Component } from 'react';
import styles from './styles';

const { View, Text } = ReactNative;

class MyNewComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>MyNewComponent</Text>
      </View>
    );
  }
}

export default MyNewComponent;
