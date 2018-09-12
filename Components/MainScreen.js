/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import {Icon} from 'native-base';

import {TabNavigator, StackNavigator} from 'react-navigation';
import Usage from './AppTabNavigator/Usage.js';
import Billing from './AppTabNavigator/Billing.js';
import Messages from './AppTabNavigator/Messages.js';
import Support from './AppTabNavigator/Support.js';
import More from './AppTabNavigator/More.js';
import MyDataScreen from './Screens/MyDataScreen.js'


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

export const MoreStack = StackNavigator({
  More: {
    screen: More,
    navigationOptions: ({navigation}) =>({
      title:'MORE'
    })
   },
  MyDataScreen:{
    screen: MyDataScreen,
    navigationOptions: ({navigation}) =>({
      title:'MyDataScreen'
    })
  }
});

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
    screen:MoreStack,
    navigationOptions: () => ({
				title: "More",
				tabBarIcon: ({ tintColor }) =>
          <Icon name='ios-more' size={24} style={{color: tintColor}} />
			})
  },
},{
  animationEnabled:true,
  swipeEnabled:true,
  tabBarPositions:'Bottom',
  tabBarOptions: {
      activeTintColor: '#FBE54D',
      inactiveTintColor: '#346A72',
      activeBackgroundColor:'#346A72',
      showIcon: true,
    },
})


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
