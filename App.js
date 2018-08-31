import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Body, Container, Header, Icon, Left, Right, Tab, Tabs, TabHeading, Title } from 'native-base';

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
          <Tab heading={ <TabHeading style={{ backgroundColor: "#EAA825" }}><Icon name="home" style={{ color: "white" }} /></TabHeading>}>
            <Home />
          </Tab>
          <Tab heading={ <TabHeading style={{ backgroundColor: "#EAA825" }}><Icon name="calendar" style={{ color: "white" }} /></TabHeading>}>
            <Calendar />
          </Tab>
          <Tab heading={ <TabHeading style={{ backgroundColor: "#EAA825" }}><Icon name="home" style={{ color: "white" }} /></TabHeading>}>
            <Contact />
          </Tab>
          <Tab heading={ <TabHeading style={{ backgroundColor: "#EAA825" }}><Icon name="home" style={{ color: "white" }} /></TabHeading>}>
            <Sponsors />
          </Tab>
        </Tabs>
      </Container>
    );
  }  
}