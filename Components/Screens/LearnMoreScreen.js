/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {Container, Icon, Card, CardItem, Content, Thumbnail, Header,Left, Right,Body} from 'native-base';


 class LearnMoreScreen extends Component {
   learnMoreClicked = () =>{
     this.props.navigation.navigate('LearnMoreScreen');

     //alert('segment Clicked')
   }
  render() {
    return (

      <Container style={styles.container}>
          <View style={styles.container1}>
            <Text style={styles.heading1}>Question 1</Text>
            <Text style={styles.desc}></Text>
          </View>
      </Container>
    );
  }
}

export default LearnMoreScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c8f3f4',
  },
  container1: {
    flex: 1,
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
