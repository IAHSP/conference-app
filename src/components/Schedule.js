import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body, View, Button, Accordion, Icon } from "native-base";

const dataArray = [
  { abc: "First Element", content: "Lorem ipsum dolor sit amet fsdkjfklsdfjsjdlfjklsdfjsdkljfjlk sdflkjsdflksdfjlksdflkj sdflkjsdklfj" },
  { abc: "Second Element", content: "Lorem ipsum dolor sit amet" },
  { abc: "Third Element", content: "Lorem ipsum dolor sit amet" },

];

export default class Schedule extends Component {

  _renderHeader(item, expanded) {
 return (
   <View
     style={{ flexDirection: "row", padding: 10, justifyContent: "space-between", alignItems: "center", backgroundColor: "#EAA825", height:30 }}
   >
     <Text style={{ fontWeight: "600", color: "white" }}>
       {" "}{item.abc}
     </Text>
     {expanded
       ? <Icon style={{ fontSize: 18, color: 'white' }} name="remove-circle" />
     : <Icon style={{ fontSize: 18, color: 'white' }} name="add-circle" />}
   </View>
 );
}
_renderContent(item) {
 return (
   <Text
     style={{ backgroundColor: "white", padding: 10 }}
   >
     {item.content}
   </Text>
 );
}





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
            <CardItem header bordered style={{backgroundColor: '#EAA825', height:30}}>
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
          </Card>
          <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 10, marginBottom: 10}}>
              <Text style={{fontSize: 22}}>
              Friday, Oct 19th
              </Text>
            </View>

        <Card>
            <Accordion
            dataArray={dataArray}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
          />
      </Card>

        </Content>

      </ScrollView>
    );
  }
}
