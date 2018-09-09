/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import {Icon} from 'native-base';

import {TabNavigator} from 'react-navigation';
import Usage from './AppTabNavigator/Usage.js';
import Billing from './AppTabNavigator/Billing.js';
import Messages from './AppTabNavigator/Messages.js';
import Support from './AppTabNavigator/Support.js';
import More from './AppTabNavigator/More.js';


class MainScreen extends Component {

  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <AppStackNavigatior />
    );
  }
}

export default MainScreen;

const AppStackNavigatior = TabNavigator({
  Usage:{
    screen:Usage
  },
  Billing:{
    screen:Billing
  },
  Messages:{
    screen:Messages
  },
  Support:{
    screen:Support
  },
  More:{
    screen:More
  }
},{
  animationEnabled:true,
  swipeEnabled:true,
  tabBarPositions:'Bottom',
  tabBarOptions: {
      activeTintColor: '#FBE54D',
      inactiveTintColor: '#346A72',
      activeBackgroundColor:'#346A72'
    },
})


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
