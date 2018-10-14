import React, { Component } from 'react';
import { ScrollView, Linking } from 'react-native';
import { Content, Card, CardItem, Text, Body, View, Button } from "native-base";

export default class Contact extends Component {
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
              <CardItem header bordered style={{backgroundColor: '#EAA825'}}>
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
                    onPress={() => Linking.openURL('tel:8444247799')}
                    style={{ marginRight: 5, backgroundColor: '#EAA825' }}>
                  <Text uppercase={false}>Call</Text>
                </Button>
                <Button small onPress={ ()=>{ Linking.openURL("mailto:christa@IAHSP.com") }} style={{ backgroundColor: '#EAA825' }}>
                  <Text uppercase={false}>Email</Text>
                </Button>
              </View>
            </Card>

            <Card>
              <CardItem header bordered style={{backgroundColor: '#4080FF'}}>
                <Text style={{color: 'white'}}>IAHSP Facebook</Text>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>
                    IAHSP Mission is to provide standards for excellence, ethics and education in the Home Staging 
                    industry, as well as resources for our members to grow and thrive.
                  </Text>
                  <Text>
                    Let us know you'll be coming and share your experience!
                  </Text>
                </Body>
              </CardItem>

              <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
                <Button small
                    onPress={() => Linking.openURL('https://www.facebook.com/InternationalAssociationofHomeStagingProfessionals/')}
                    style={{ marginRight: 5, backgroundColor: '#4080FF' }}>
                  <Text uppercase={false}>Share on Facebook</Text>
                </Button>
              </View>
            </Card>

            

            <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 5}}>
              <Text style={{fontSize: 15, color: 'grey' }}>
                {'\u00A9'} IAHSP. All Rights Reserved.
              </Text>
            </View>
        </Content>
      </ScrollView>
    );
  }
}
