/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import {Container, Content, Thumbnail, Header,Left, Right,Body} from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome'


class More extends Component {

  static navigationOptions = ({
    tabBarIcon : ({tintColor}) => (
      <Icon name='ellipsis-h' size={24} style={{color: tintColor}}/>
    )
  })
  render() {
    return (
      <Container style={styles.container}>
        <Header style = {styles.header}>
          <Body><Text style = {styles.heading}>More</Text></Body>
        </Header>
        <Content style={styles.outerContent}>
          <Content style={styles.innerContent}>
            <Left><Text>Test</Text></Left>
            <Body><Text>I am body</Text></Body>
            <Right><Text>My Data Bytes His</Text></Right>
         </Content>
        </Content>
      </Container>
    );
  }
}

export default More;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c8f3f4'
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
  outerContent:{

  },
  innerContent:{
    margin: 20,
    height:100,
    backgroundColor: '#FFF',
    borderTopWidth: 5,
    borderTopColor: '#346A72'
  }

});
