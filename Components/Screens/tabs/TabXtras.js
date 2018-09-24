/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Card,
  CardItem,
  Body,
  Left,
  Right,
} from "native-base";

const cardImage = require("../../../assets/xtras1.png");
const cardImage2 = require("../../../assets/xtras2.png");

class TabXtras extends Component {
  checkOutSegmentClicked = () =>{
    alert('You are smiling! This is silly Right!');
  }

  render() {
    return (
      <Container style={styles.container}>
        <Content padder>
          <Card style={styles.mb}>
            <CardItem header style={styles.cardHeader}>
              <Left>
                <Text>Xtras 1</Text>
              </Left>
              <Right>
                <Text>3 days left</Text>
              </Right>
            </CardItem>
            <CardItem cardBody>
              <Body>
                  <Image source={cardImage}/>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  NativeBase builds a layer on top of React Native that provides
                  you with basic set of components for mobile application
                  development.
                </Text>
              </Body>
            </CardItem>
            <Button block style={styles.mb15} button onPress={() =>this.checkOutSegmentClicked()}>
             <Text style={styles.checkOut}>Check it out</Text>
           </Button>
          </Card>

          <Card style={styles.mb}>
            <CardItem header style={styles.cardHeader}>
              <Left>
                <Text>Xtras 2</Text>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Body>
                  <Image source={cardImage2}/>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  NativeBase builds a layer on top of React Native that provides
                  you with basic set of components for mobile application
                  development.
                </Text>
              </Body>
            </CardItem>
            <Button block style={styles.mb15} button onPress={() =>this.checkOutSegmentClicked()}>
             <Text style={styles.checkOut}>Check it out</Text>
           </Button>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default TabXtras

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mb: {
    marginBottom: 15,
  },
  mb15:{
    marginBottom: 20,
    margin: 10,
    borderRadius: 0,
    backgroundColor: '#FEE600',
    padding: 5,
    height: 30
  },
  checkOut:{
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  cardHeader:{
    backgroundColor: '#4abaaa'
  }
});
