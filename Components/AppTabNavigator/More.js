/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Linking,
} from 'react-native';

import {Container, Card, CardItem, Content, Thumbnail, Header,Left, Right,Body} from 'native-base';

import { StackNavigator } from 'react-navigation';

import Icon from 'react-native-vector-icons/FontAwesome'

class More extends Component {

  static navigationOptions = ({
    headerStyle: {
      backgroundColor: '#FBE54D',
    },
    headerTintColor: '#346A72',
  })

  segmentClicked = () =>{
    this.props.navigation.navigate('MyDataScreen');
    //<View><Text>Test</Text></View>
    //alert('segment Clicked')
  }

  sukaExtrasegmentClicked = () => {
    this.props.navigation.navigate('MyDataScreen');
  }

  tAndCClicked = () =>{
    this.props.navigation.navigate('TandCScreen');
  }

  render() {
    return (
      <Container style={styles.container}>
        <Content style={styles.outerContent}>
          <Content style={styles.innerContent}>

            <Card transparent>
              <CardItem bordered style={styles.cardItem} button onPress={() =>this.segmentClicked()}>
                <Icon name='mobile' size={34} style={styles.cardIcon}/>
                <Body style={styles.cardBody}>
                  <Text style={styles.cardBodyHeader}>My Data Bytes History</Text>
                  <Text style={styles.cardBodyContent}>See how many Data Bytes sessions you have left for this month</Text>
                </Body>
                <Right style={styles.cardRight}>
                  <Icon name='angle-right' size={24} style={styles.cardRightIcon} />
                </Right>
              </CardItem>
            </Card>

            <Card transparent>
              <CardItem bordered style={styles.cardItem} button onPress={() =>Linking.openURL( 'http://www.google.com' )}>
                <Icon name='map-marker' size={34} style={styles.cardIcon}/>
                <Body style={styles.cardBody}>
                  <Text style={styles.cardBodyHeader}>Find Us</Text>
                  <Text style={styles.cardBodyContent}>Find our locations on google</Text>
                </Body>
                <Right style={styles.cardRight}>
                  <Icon name='angle-right' size={24} style={styles.cardRightIcon} />
                </Right>
              </CardItem>
            </Card>

            <Card transparent>
              <CardItem bordered style={styles.cardItem} button onPress={() =>this.sukaExtrasegmentClicked()}>
                <Icon name='gift' size={34} style={styles.cardIcon}/>
                <Body style={styles.cardBody}>
                  <Text style={styles.cardBodyHeader}>SukaExtra - NEW!</Text>
                  <Text style={styles.cardBodyContent}>New perks everyWeek</Text>
                </Body>
                <Right style={styles.cardRight}>
                  <Icon name='angle-right' size={24} style={styles.cardRightIcon} />
                </Right>
              </CardItem>
            </Card>

            <Card transparent>
              <CardItem bordered style={styles.cardItem} button onPress={() =>this.sukaExtrasegmentClicked()}>
                <Icon name='user' size={34} style={styles.cardIcon}/>
                <Body style={styles.cardBody}>
                  <Text style={styles.cardBodyHeader}>Profile & Settings</Text>
                  <Text style={styles.cardBodyContent}>Update the profile Info</Text>
                </Body>
                <Right style={styles.cardRight}>
                  <Icon name='angle-right' size={24} style={styles.cardRightIcon} />
                </Right>
              </CardItem>
            </Card>

            <Card transparent>
              <CardItem bordered style={styles.cardItem} button onPress={()=>this.tAndCClicked()}>
                <Icon name='asterisk' size={34} style={styles.cardIcon}/>
                <Body style={styles.cardBody}>
                  <Text style={styles.cardBodyHeader}>Terms & Conditions</Text>
                  <Text style={styles.cardBodyContent}>Our temrms, coditions and policies</Text>
                </Body>
                <Right style={styles.cardRight}>
                  <Icon name='angle-right' size={24} style={styles.cardRightIcon} />
                </Right>
              </CardItem>
            </Card>

            <Card transparent>
              <CardItem bordered style={styles.cardItem} button onPress={() =>this.sukaExtrasegmentClicked()}>
                <Icon name='question' size={34} style={styles.cardIcon}/>
                <Body style={styles.cardBody}>
                  <Text style={styles.cardBodyHeader}>Faq</Text>
                 <Text style={styles.cardBodyContent}>Frequently asked questions</Text>
                </Body>
                <Right style={styles.cardRight}>
                  <Icon name='angle-right' size={24} style={styles.cardRightIcon} />
                </Right>
              </CardItem>
            </Card>

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
    flex:1

  },
  innerContent:{
    margin: 20,
    backgroundColor: '#FFF',
    borderTopWidth: 5,
    borderTopColor: '#47bcc6',
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
    fontSize: 16,
    color: '#346A72',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    justifyContent: 'center',
    alignItems: 'center',
    flex:1

  },
  cardRight:{
    flex:0.2,

  },
  cardRightIcon:{
    color:'#346A72'
  },


});
