/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {Container, Icon, Card, CardItem, Content, Thumbnail, Header,Left, Right,Body} from 'native-base';


class faqScreen extends Component {
  render() {
    return (
      <Container style={styles.container}>
          <View style={styles.container1}>
          <ScrollView
            showsVerticalScrollIndicator={false}>
            <Text style={styles.heading1}>Frequently Asked Questions</Text>
            <Text>{'\n'}</Text>
            <Text style={styles.heading1}>Answer 1</Text>
            <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</Text>
            <Text>{'\n'}</Text>
            <Text style={styles.heading1}>Answer 2</Text>
            <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</Text>
            <Text>{'\n'}</Text>
            <Text style={styles.heading1}>Answer 3</Text>
            <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</Text>
            <Text>{'\n'}</Text>
            <Text style={styles.heading1}>Answer 4</Text>
            <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</Text>
            </ScrollView>
          </View>
      </Container>
    );
  }
}

export default faqScreen

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
