import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Body, Container, Header, Left, Right, Tab, Tabs, TabHeading, Title, View } from 'native-base';

import Home from './src/components/Home';
import Calendar from './src/components/Calendar';
import Contact from './src/components/Contact';
import Sponsors from './src/components/Sponsors';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs style={{ backgroundColor: "#EAA825" }}>
          <Left/>
          <Body>
            <Title>Test</Title>
          </Body>
          <Right />
        </Header>

        <Tabs tabBarPosition="bottom">
          <Tab heading={ <TabHeading style={{ backgroundColor: "#EAA825" }}><Icon name="home" style={{ color: "white", fontSize: 28 }} /></TabHeading>}>
            <View style={{ padding: 10 }}>
              <Home />
            </View>
          </Tab>
          <Tab heading={ <TabHeading style={{ backgroundColor: "#EAA825" }}><Icon name="calendar" style={{ color: "white", fontSize: 20 }} /></TabHeading>}>
            <View style={{ padding: 10 }}>
              <Calendar />
            </View>
          </Tab>
          <Tab heading={ <TabHeading style={{ backgroundColor: "#EAA825" }}><Icon name="phone" style={{ color: "white", fontSize: 25 }} /></TabHeading>}>
            <View style={{ padding: 10 }}>
              <Contact />
            </View>
          </Tab>
          <Tab heading={ <TabHeading style={{ backgroundColor: "#EAA825" }}><Icon name="info-circle" style={{ color: "white", fontSize: 25 }} /></TabHeading>}>
            <View style={{ padding: 10 }}>
              <Sponsors />
            </View>
          </Tab>
        </Tabs>
      </Container>
    );
  }  
}