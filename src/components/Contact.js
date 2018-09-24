import React, { Component } from 'react';
import { ScrollView, Linking } from 'react-native';
import { Content, Card, CardItem, Text, Body, View, Button } from "native-base";

export default class Contact extends Component {

  // helper method for mailto and phone call
  static async openURL(url: string): Promise<void> {
      try {
        await Linking.openURL(url);
      } catch (error) {
        console.log(error);
      }
  }


  render() {
    return (
      <ScrollView style={{flex:1}}>

        <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 22}}>
              Conference Information
            </Text>
          </View>

        <Content padder>

          <Card>
            <CardItem header bordered style={{backgroundColor: '#EAA825', height:40}}>
              <Text style={{color: 'white'}}>More Information About IAHSP 2018</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                For more information about the IAHSP 2018 conference,
                contact Christa at 844-IAHSP99 or through her email
                Christa@IAHSP.com
                </Text>
              </Body>
            </CardItem>

            <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
         <Button small
             onPress={() => Linking.openURL('tel:844-IAHSP99')}
            style={{ marginRight: 5, backgroundColor: '#EAA825' }}>
           <Text uppercase={false}>Call</Text>
         </Button>
         <Button small onPress={ ()=>{
                Linking.openURL("mailto:christa@IAHSP.com")}} style={{ backgroundColor: '#EAA825' }}>
           <Text uppercase={false}>Email</Text>
         </Button>
       </View>
          </Card>

          <Card>
            <CardItem header bordered style={{backgroundColor: '#EAA825', height:40}}>
              <Text style={{color: 'white'}}>IAHSP Conference</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                Event Date: October 18-20, 2018{"\n"}{"\n"}
                The Group Rate is available Arriving Thursday October
                18th and Friday, Oct 19th, 2018. We had a smaller block
                for Saturday that is sold out BUT there are plenty of rooms
                available for Saturday at our negotiated rate. To get a
                room for Saturday at our negotiated rate you must contact
                our conference coordinator: Danae Kaupp at 704.335.2037
                or Danae.Kaupp1@westin.com
                </Text>
              </Body>
            </CardItem>

            <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
         <Button small
                 onPress={() => Linking.openURL('tel:704-335-2037')}
           style={{ marginRight: 5, backgroundColor: '#EAA825' }}>
           <Text uppercase={false}>Call</Text>
         </Button>
         <Button small onPress={ ()=>{
                Linking.openURL("mailto:Danae.Kaupp1@westin.com")}}style={{ backgroundColor: '#EAA825' }}>
           <Text uppercase={false}>Email</Text>
         </Button>
       </View>
          </Card>

          <Card>
            <CardItem header bordered style={{backgroundColor: '#EAA825', height:40}}>
              <Text style={{color: 'white'}}>Westin Charlotte Hotel</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                Please make your reservations by calling Danae Kaupp
                at 704-335-2037 and asking for the IAHSP 2018 Room Block
                </Text>
              </Body>
            </CardItem>

            <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
         <Button small onPress={() => Linking.openURL('tel:704-335-2037') }
      title="support@example.com" style={{ marginRight: 5, backgroundColor: '#EAA825' }}>
           <Text uppercase={false}>Call Danae Kaupp</Text>
         </Button>

       </View>
          </Card>

          <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 5}}>
              <Text style={{fontSize: 15, color: 'grey' }}>
                Copy{'\u00A9'} IAHSP. All Rights Reserved.
              </Text>
            </View>

        </Content>

      </ScrollView>
    );
  }
}
