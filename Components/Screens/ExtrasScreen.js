/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {Container, Button, Title, Tabs,Tab,Icon, Card, CardItem, Content, Thumbnail, Header,Left, Right,Body} from 'native-base';

import TabXtras from "./tabs/TabXtras";
import TabHistory from "./tabs/TabHistory";
import TabInfo from "./tabs/TabInfo";

class ExtrasScreen extends Component {
  render() {
    return (

      <Container>
       <Tabs tabBarUnderlineStyle={{ backgroundColor:'#346A72'}}>
         <Tab heading="Xtras" activeTextStyle={{ color:  '#346A72' }} >
           <TabXtras />
         </Tab>
         <Tab heading="History" activeTextStyle={{ color:  '#346A72' }}>
           <TabHistory />
         </Tab>
         <Tab heading="Info" activeTextStyle={{ color:  '#346A72' }}>
           <TabInfo />
         </Tab>
       </Tabs>
   </Container>
    );
  }
}

export default ExtrasScreen

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
  Tabs:{
    color:'red',
  },

});
