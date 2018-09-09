import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body, View } from "native-base";

export default class Schedule extends Component {
  render() {
    return (
      <ScrollView style={{flex:1}}>

        <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 22}}>
              Thursday, Oct 18th
            </Text>
          </View>

        <Content padder>
          <Card>
            <CardItem header bordered style={{backgroundColor: '#f4bc42', height:30}}>
              <Text style={{color: 'white'}}>4:30PM - 10PM</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                REGISTRATION AND EXPO 25+ COMPANIES DISPLAYING THEIR PRODUCTS AND SERVICES! INCLUDES FOOD STATIONS, NO-HOST BARS! PLUS - DJ, KAROKE, DANCING, PHOTO BOOTH provided by the Charlotte IAHSP® Regional Chapter – the official 2018 HOST CHAPTER
                </Text>
              </Body>
            </CardItem>
          </Card>


        <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 10, marginBottom: 10}}>
            <Text style={{fontSize: 22}}>
              Friday , Oct 19th
            </Text>
          </View>


          <Card>
            <CardItem header bordered style={{backgroundColor: '#f4bc42', height:30}}>
              <Text style={{color: 'white'}}>4:30PM - 10PM</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                REGISTRATION AND EXPO 25+ COMPANIES DISPLAYING THEIR PRODUCTS AND SERVICES! INCLUDES FOOD STATIONS, NO-HOST BARS! PLUS - DJ, KAROKE, DANCING, PHOTO BOOTH provided by the Charlotte IAHSP® Regional Chapter – the official 2018 HOST CHAPTER
                </Text>
              </Body>
            </CardItem>
          </Card>

          <Card>
            <CardItem header bordered style={{backgroundColor: '#f4bc42', height:30}}>
              <Text style={{color: 'white'}}>4:30PM - 10PM</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                REGISTRATION AND EXPO 25+ COMPANIES DISPLAYING THEIR PRODUCTS AND SERVICES! INCLUDES FOOD STATIONS, NO-HOST BARS! PLUS - DJ, KAROKE, DANCING, PHOTO BOOTH provided by the Charlotte IAHSP® Regional Chapter – the official 2018 HOST CHAPTER
                </Text>
              </Body>
            </CardItem>
          </Card>

          <Card>
            <CardItem header bordered style={{backgroundColor: '#f4bc42', height:30}}>
              <Text style={{color: 'white'}}>4:30PM - 10PM</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                REGISTRATION AND EXPO 25+ COMPANIES DISPLAYING THEIR PRODUCTS AND SERVICES! INCLUDES FOOD STATIONS, NO-HOST BARS! PLUS - DJ, KAROKE, DANCING, PHOTO BOOTH provided by the Charlotte IAHSP® Regional Chapter – the official 2018 HOST CHAPTER
                </Text>
              </Body>
            </CardItem>
          </Card>

        </Content>

      </ScrollView>
    );
  }
}
