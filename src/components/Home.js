import React, { Component } from 'react';
import { Image } from 'react-native';
import { Button, Text, View } from 'native-base';

export default class Home extends Component {
  render() {
    return (
      <View>

        {/* Centering items */}
        <View style={{ paddingBottom: 5, alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('../public/images/home/2018-conference-expo-logo.png')} resizeMode={ "contain" } style={{ width: 150, height: 150 }} />          
                
          <Text style={{ marginBottom: 3, fontSize: 12, fontWeight: "bold" }}>
            2018 Educational Conference and Expo!
          </Text>

          <Text style={{ marginBottom: 15, padding: 8, backgroundColor: '#66AE73', color: 'white' }}>
            Oct 18-20, 2018 - Charlotte, NC
          </Text>
        </View>
      
        <Text style={{ fontSize: 12, marginBottom: 15 }}>
          The International Association of Home Staging Professionals&reg; (IAHSP&reg;) is excited to 
          host this high level educational event for top Home Staging business owners worldwide! Join 
          colleagues to learn, share and grow a successful business that has longevity and 
          profitability. We have planned two power-packed days full of vital information as well 
          as opportunities for you to network with colleagues from all over. Our vendor-sponsors play 
          a key role in our business success and we are excited to welcome them to the EXPO portion 
          of our event.
        </Text>

        {/* Centering buttons */}
        <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'center' }}>
          <Button small style={{ marginRight: 5, backgroundColor: '#EAA825' }}>
            <Text uppercase={false}>Sign up NOW</Text>
          </Button>
          <Button small style={{ backgroundColor: '#EAA825' }}>
            <Text uppercase={false}>See Schedule</Text>
          </Button>
        </View>
      </View>
    );
  }
}