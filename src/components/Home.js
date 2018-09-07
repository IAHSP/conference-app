import React, { Component } from 'react';
import { Image } from 'react-native';
import { Text, View } from 'native-base';

export default class Home extends Component {
  render() {
    return (
      <View>
        <View style={{ height: '30%', alignItems: 'center', justifyContent: 'center' }}>          
            <Image source={require('../public/images/home/2018-conference-expo-logo.png')} style={{ width: '100%', height: 300 }} />          
        </View>

        <View style={{ height: '20%' }}>
          <Text style={{ padding: 10, backgroundColor: 'lightgreen', color: 'white' }}>
            Oct 18-20, 2018 - Charlotte, NC
          </Text>
        </View>

        <View style={{ height: '50%' }}>
          <Text>
            The Internation Association of Home Staging Professionals&reg; (IAHSP&reg;) is excited to host this high level educational event for top Home Staging business owners worldwide! Join colleagues to learn, share and grow a successful business that has longevity and profitability. We have planned two power-packed days full of vital infomation as well as opportunities for you to network with colleagues from all over. Our vendor-sponsors play a key role in our business success and we are excited to welcome them to the EXPO portion of our event.
          </Text>
        </View>
      </View>
    );
  }
}