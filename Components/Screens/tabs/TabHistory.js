/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

class TabHistory extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Im the Tab tabHistory component</Text>
      </View>
    );
  }
}

export default TabHistory

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
