/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import {Container, Card, CardItem, Content, Thumbnail, Header,Left, Right,Body} from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome'


class More extends Component {

  static navigationOptions = ({
    tabBarIcon : ({tintColor}) => (
      <Icon name='ellipsis-h' size={24} style={{color: tintColor}}/>
    )
  })
  render() {
    return (
      <Container style={styles.container}>
        <Header style = {styles.header}>
          <Body><Text style = {styles.heading}>More</Text></Body>
        </Header>
        <Content style={styles.outerContent}>
          <Content style={styles.innerContent}>
            <Card transparent>
              <CardItem bordered style={styles.cardItem}>
                <Icon name='mobile' size={34} style={styles.cardIcon}/>
                <Body style={styles.cardBody}>
                  <Text style={styles.cardBodyHeader}>My Data Bytes History</Text>
                  <Text style={styles.cardBodyContent}>See how many Data Bytes sessions you have left for this month</Text>
                </Body>
                <Right style={styles.cardRight}>
                  <Icon name='angle-right' size={24} />
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

  },
  innerContent:{
    margin: 20,
    height:100,
    backgroundColor: '#FFF',
    borderTopWidth: 5,
    borderTopColor: '#346A72',
  },
  cardItem:{
    flex:1,
    flexDirection: 'row',
  },
  cardIcon:{
    paddingRight: 15,
    flex:0.3,
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
  }


});
