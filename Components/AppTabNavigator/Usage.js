/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import {Container, Content, Thumbnail, Header,Left, Right,Body} from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome'

class Usage extends Component {

  static navigationOptions = {
    tabBarIcon : ({tintColor}) => (
      <Icon name='mobile' size={24} style={{color: tintColor}} />
    )
  }

  render() {
    return (
      <Container>
        <Header style = {styles.header}>
          <Body><Text style = {styles.heading}>Usage</Text></Body>
        </Header>
      </Container>
    );
  }
}

export default Usage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    backgroundColor: '#FBE54D',
  },
  heading:{
    fontSize: 18,
    fontWeight:'bold',
    color:'#346A72',
    textTransform: 'uppercase'
  },

});
