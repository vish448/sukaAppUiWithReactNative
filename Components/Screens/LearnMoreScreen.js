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
          <Content style={styles.innerContent}>
            <Text>Learn More Screen</Text>
        </Content>

      </Container>
    );
  }
}

export default LearnMoreScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c8f3f4',
    alignItems: 'center'
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
  icons:{
    flexDirection: 'row',
  },
  icon:{
    padding: 10
  },
  innerContent:{
    padding: 20,

    borderWidth: 2,
    borderColor: 'red'
  },
  cardItem:{
    flex:1,
    flexDirection: 'row',
  },
  cardIcon:{
    paddingRight: 15,
    flex:0.3,
    color:'#346A72'
  },
  cardBody:{
    width: 400,
    flex:4,
  },
  cardBodyHeader:{
    fontSize: 18,
    color: '#346A72',
    fontWeight: 'bold'
  },
  cardRight:{
    flex:0.2,

  },
  cardRightIcon:{
    color:'#346A72'
  },


});
