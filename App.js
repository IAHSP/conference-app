import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Body, Container, Header, Content, Tab, Tabs, TabHeading, Title, View } from 'native-base';

import Home from './src/components/Home';
import Schedule from './src/components/Schedule';
import Contact from './src/components/Contact';
import Sponsors from './src/components/Sponsors';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs androidStatusBarColor="black" style={{ backgroundColor: "white" }}>          
          <Body>
            <Title style={{ alignSelf: "center", color: "black" }}>Test</Title>
          </Body>          
        </Header>

        <Tabs tabBarPosition="bottom" tabBarUnderlineStyle={{ backgroundColor: "rgba(255, 255, 255, 0)" }}>
          <Tab heading={ <TabHeading style={{ backgroundColor: "white" }}><Icon name="home" style={{ color: "#909294", fontSize: 38 }} /></TabHeading>}>
            <Content style={{ backgroundColor: "#F3F3F4" }}>
              <View style={{ padding: 10 }}>
                <Home />
              </View>
            </Content>
          </Tab>
          <Tab heading={ <TabHeading style={{ backgroundColor: "white" }}><Icon name="calendar" style={{ color: "#909294", fontSize: 30 }} /></TabHeading>}>
            <Content style={{ backgroundColor: "#F3F3F4" }}>
              <View style={{ padding: 10 }}>
                <Schedule />
              </View>
            </Content>
          </Tab>          
          <Tab heading={ <TabHeading style={{ backgroundColor: "white" }}><Icon name="phone-square" style={{ color: "#909294", fontSize: 38 }} /></TabHeading>}>
            <Content style={{ backgroundColor: "#F3F3F4" }}>
              <View style={{ padding: 10 }}>
                <Contact />
              </View>
            </Content>
          </Tab>
          <Tab heading={ <TabHeading style={{ backgroundColor: "white" }}><Icon name="info-circle" style={{ color: "#909294", fontSize: 38 }} /></TabHeading>}>
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