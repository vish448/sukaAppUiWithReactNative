/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {Container, Icon, Card, CardItem, Content, Thumbnail, Header,Left, Right,Body} from 'native-base';


 class TandCScreen extends Component {
  render() {
    return (

      <Container style={styles.container}>
          <View style={styles.container1}>
            <Text style={styles.heading1}>Terms and Conditions</Text>
            <Text style={styles.desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
            <Text style={styles.desc}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </Text>
          </View>
      </Container>
    );
  }
}

export default TandCScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c8f3f4',
  },
  container1: {
    backgroundColor: '#FFF',
    alignItems: 'flex-start',
    margin: 20,
    borderRadius: 5,
    padding: 10
  },
  header:{
    backgroundColor: '#FEE600',
  },
  heading:{
    fontSize: 18,
    fontWeight:'bold',
    color:'#346A72',
    textTransform: 'uppercase',
  },
  heading1:{
    fontWeight: 'bold',
  },


});
