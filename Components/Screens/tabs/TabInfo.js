/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

class TabInfo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Im the Tab tab info component</Text>
      </View>
    );
  }
}

export default TabInfo

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
