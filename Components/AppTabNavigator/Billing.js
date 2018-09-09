/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import {Container, Content, Icon, Thumbnail, Header,Left, Right,Body} from 'native-base';

class Billing extends Component {
  render() {
    return (
      <Container>
        <Header style = {styles.header}>
          <Body><Text style = {styles.heading}>Billing</Text></Body>
        </Header>
      </Container>
    );
  }
}

export default Billing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    backgroundColor: 'yellow',
  },
  heading:{
    fontSize: 18,
    fontWeight:'bold'
  },

});
