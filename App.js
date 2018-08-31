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
        <Header hasTabs>
          <Left/>
          <Body style={styles.container}>
            <Title>Test</Title>
          </Body>
          <Right />
        </Header>

        <Tabs tabBarPosition="bottom" tabBarUnderlineStyle={{borderBottomColor: 'black'}}>
          <Tab heading={ <TabHeading><Icon name="home" /></TabHeading>}>
            <Home />
          </Tab>
          <Tab heading={ <TabHeading><Icon name="calendar" /></TabHeading>}>
            <Calendar />
          </Tab>
          <Tab heading={ <TabHeading><Icon name="home" /></TabHeading>}>
            <Contact />
          </Tab>
          <Tab heading={ <TabHeading><Icon name="home" /></TabHeading>}>
            <Sponsors />
          </Tab>
        </Tabs>
      </Container>
    );
  }  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
});