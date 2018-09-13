/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {Container, Icon, Card, CardItem, Content, Thumbnail, Header,Left, Right,Body} from 'native-base';


 class MyDataScreen extends Component {
   learnMoreClicked = () =>{
     this.props.navigation.navigate('LearnMoreScreen');
   }

   tAndCClicked = () =>{
     this.props.navigation.navigate('TandCScreen');
   }
  render() {
    return (
       <Container style={styles.container}>
       <View style={styles.container}>
       
        <Text style={{fontSize: 18,fontWeight: 'bold',color: 'red', flex:1}}>Remaining data bytes</Text>

        <View style={styles.icons}>
          <Icon style={styles.icon} name='ios-add'/>
          <Icon style={styles.icon} name='ios-add'/>
          <Icon style={styles.icon} name='ios-add'/>
          <Icon style={styles.icon} name='ios-add'/>
          <Icon style={styles.icon} name='ios-add'/>
          <Icon style={styles.icon} name='ios-add'/>
        </View>

        <Text>You have 5 Data Bytes sessions left</Text>
        </View>
        <View style={styles.container}>
          <Text>Data Bytes History</Text>
          <Text>Data Bytes sessions used during current billing cycle.</Text>
          <Text>You have 5 Data Bytes sessions left</Text>
          <Text button onPress={() =>this.learnMoreClicked()}>Learn More</Text>
          <Text button onPress={() =>this.tAndCClicked()}>Terms and Conditions</Text>
        </View>


</Container>

      // <Container style={styles.container}>
      //     <Content style={styles.innerContent}>
      //       <Text>Remaining Data Bytes</Text>
      //       <View style={styles.icons}>
      //         <Icon style={styles.icon} name='ios-add'/>
      //         <Icon style={styles.icon} name='ios-add'/>
      //         <Icon style={styles.icon} name='ios-add'/>
      //         <Icon style={styles.icon} name='ios-add'/>
      //         <Icon style={styles.icon} name='ios-add'/>
      //         <Icon style={styles.icon} name='ios-add'/>
      //       </View>
      //
      //     <Content>
      //
      //   <Content style={styles.innerContent}>
      //     <Text>Data Bytes History</Text>
      //     <Text>Data Bytes sessions used during current billing cycle.</Text>
      //     <Text>You have 5 Data Bytes sessions left</Text>
      //     <Text button onPress={() =>this.learnMoreClicked()}>Learn More</Text>
      //     <Text button onPress={() =>this.tAndCClicked()}>Terms and Conditions</Text>
      // </Content>
      //
      // </Container>

    );
  }
}

export default MyDataScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c8f3f4',
    alignItems:'center',
    justifyContent: 'flex-start',
    borderColor: 'red',
    borderWidth: 2

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
    borderColor: 'red',

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
