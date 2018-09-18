/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
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
          <ScrollView
            showsVerticalScrollIndicator={false}>
            <Text style={styles.heading1}>Question 1</Text>
            <Text style={styles.desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
            <Text>{'\n'}</Text>
            <Text style={styles.heading1}>Question 2</Text>
            <Text style={styles.desc}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </Text>

            <Text>{'\n'}</Text>
            <Text style={styles.heading1}>Question 3</Text>
            <Text style={styles.desc}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.</Text>

            <Text>{'\n'}</Text>
            <Text style={styles.heading1}>Question 4</Text>
            <Text style={styles.desc}>This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</Text>

            <Text>{'\n'}</Text>
            <Text style={styles.heading1}>Question 5</Text>
            <Text style={styles.desc}>This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</Text>
            </ScrollView>
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
