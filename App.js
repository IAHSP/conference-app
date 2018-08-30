import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

import Home from './src/components/Home';
import Calendar from './src/components/Calendar';
import Contact from './src/components/Contact';
import Sponsors from './src/components/Sponsors';

// Gets rid of the yellow warning error
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Home />
      </View>
    );
  }
}

class CalendarScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Calendar />
      </View>
    );
  }
}

class ContactScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Contact />
      </View>
    );
  }
}

class SponsorsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Sponsors />
      </View>
    );
  }
}

export default createBottomTabNavigator({
  Home: HomeScreen,
  Calendar: CalendarScreen,
  Contact: ContactScreen,
  Sponsors: SponsorsScreen,
});