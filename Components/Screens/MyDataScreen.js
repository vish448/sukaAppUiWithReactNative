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

         <View style={styles.containerTop}>
            <Text style={{fontSize: 18,fontWeight: 'bold',color: 'red'}}>Remaining data bytes</Text>
            <View style={styles.icons}>
              <Icon style={styles.icon} name='ios-add'/>
              <Icon style={styles.icon} name='ios-add'/>
              <Icon style={styles.icon} name='ios-add'/>
              <Icon style={styles.icon} name='ios-add'/>
              <Icon style={styles.icon} name='ios-add'/>
              <Icon style={styles.icon} name='ios-add'/>
            </View>
            <Text style={styles.smallText}>You have 6 Data Bytes sessions left</Text>
          </View>

          <View style={styles.containerBottom}>
            <Text style={styles.smallText}>Data Bytes History</Text>
            <Text style={styles.smallText}>Data Bytes sessions used during current billing cycle.</Text>
            <Text style={styles.smallText}>You have 6 Data Bytes sessions left</Text>
            <Text style={{marginTop:20,marginButton:0}} button onPress={()=> this.learnMoreClicked()}>Learn More</Text>
            <Text style={{marginTop:20,marginButton:0}} button onPress={()=>this.tAndCClicked()}>Terms and Conditions</Text>
          </View>

        </Container>

    );
  }
}

export default MyDataScreen


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#c8f3f4',
    alignItems:'center',
    justifyContent: 'flex-start',
  },
  containerTop:{
    flex: 0.3,
    alignItems:'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  containerBottom: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'flex-start',
    marginTop: 20,
    borderTopColor: '#ccc',
    borderTopWidth: 1,
    padding: 20
  },
  smallText:{
    fontSize: 15,
    padding: 15
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
