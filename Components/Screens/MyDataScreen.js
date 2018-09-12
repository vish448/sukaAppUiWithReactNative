/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

 class MyDataScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Im the MyDataScreen component</Text>
      </View>
    );
  }
}

export default MyDataScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
