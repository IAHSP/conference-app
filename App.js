import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Body, Container, Header, Content, Tab, Tabs, Title, Subtitle, View } from 'native-base';

import Home from './src/components/Home';
import Schedule from './src/components/Schedule';
import Contact from './src/components/Contact';
import Sponsors from './src/components/Sponsors';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <Container>
        <Header hasTabs androidStatusBarColor="black" style={{ backgroundColor: "white" }}>          
          <Body>
            <Title style={{ alignSelf: "center", color: "black" }}>IAHSP Conference 2018</Title>
            <Subtitle>October 18-20, 2018</Subtitle>
          </Body>          
        </Header>

        <Tabs tabBarPosition="bottom" tabBarUnderlineStyle={{ backgroundColor: "#EAA825" }}>
          <Tab heading="Home" tabStyle={{backgroundColor: 'white'}} textStyle={{color: '#909294'}} activeTabStyle={{backgroundColor: 'white'}} activeTextStyle={{color: '#EAA825', fontWeight: 'bold'}}>
            <Content style={{ backgroundColor: "#F3F3F4" }}>
              <View style={{ padding: 10 }}>
                <Home />
              </View>
            </Content>
          </Tab>
          <Tab heading="Schedule" tabStyle={{backgroundColor: 'white'}} textStyle={{color: '#909294'}} activeTabStyle={{backgroundColor: 'white'}} activeTextStyle={{color: '#EAA825', fontWeight: 'bold'}}>
            <Content style={{ backgroundColor: "#F3F3F4" }}>
              <View style={{ padding: 10 }}>
                <Schedule />
              </View>
            </Content>
          </Tab>          
          <Tab heading="Contact" tabStyle={{backgroundColor: 'white'}} textStyle={{color: '#909294'}} activeTabStyle={{backgroundColor: 'white'}} activeTextStyle={{color: '#EAA825', fontWeight: 'bold'}}>
            <Content style={{ backgroundColor: "#F3F3F4" }}>
              <View style={{ padding: 10 }}>
                <Contact />
              </View>
            </Content>
          </Tab>
          <Tab heading="Sponsors" tabStyle={{backgroundColor: 'white'}} textStyle={{color: '#909294'}} activeTabStyle={{backgroundColor: 'white'}} activeTextStyle={{color: '#EAA825', fontWeight: 'bold'}}>
            <Content style={{ backgroundColor: "#F3F3F4" }}>
              <View style={{ padding: 10 }}>
                <Sponsors />
              </View>
            </Content>
          </Tab>
        </Tabs>
      </Container>
    );
  }  
}