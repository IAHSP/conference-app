import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Content, Card, CardItem, Text, Body, View, Accordion, Icon } from "native-base";



export default class Schedule extends Component {
  state = {
    friday: [
      { a:"9:00-9:15 | LEADERSHIP TEAM "  , content: "Welcome & Overview" },
      { a: "9:15-9:45 | JENNIE NORRIS " , content: "Journey to The Top" },
      { a: "10:00-10:45 | FRED BERNS  " , content: "Selling Methods of the Masters" },
      { a: "10:50-11:20 | NAHEED OBERFELD" , content: "Mindset Strategies to Boost Your Income" },
      { a: "11:25-12:15 | JOANNE WEARY", content: "ONE DAY DECORATING-How to turn this immediate gratification service into income." },

      { a: "BREAKOUT SESSIONS "     , content: "ATTENDEES SELECT 2 – 1 per time slot (sign ups will be done online prior to conference)" },

      { a: "1:15-1:50 | LEADERSHIP TEAM "     , content: "Welcome & Overview" },
      { a: " 1:15-1:50| JENNIE NORRIS "     , content: "Journey to The Top" },
      { a: " 1:15-1:50 | FRED BERNS  " , content: "Selling Methods of the Masters" },
    ],
    saturday: [
      { a:"9:00 - 9:40 AM | BARB SCHWARZ  "  , content: "INSPIRATIONAL TALK" },
      { a: " 9:45- 12:45 PM|LHS DESIGNATION" , content: "LUXURY HOME STAGING DESIGNATION" },
      { a: " 1:45-2:45 PM | JOSEPH HAECKER " , content: "IAHSP® AND PRODUCT INTEGRATION" },
      { a: " 2:50-3:30 PM | CARRIE LITTLE " , content: "SOCIAL MEDIA STRATEGIES" },
      { a: " 3:45 - 4:15 PM | MARY JO CAMP", content: "DESIGN TRENDS" },
      { a: " 4:20-5:00 PM | SCOTT HANSEN "     , content: "Outthink - Outmarket - Outsell Your competition - 5 Part Profit Formula for Getting New Clients and Doubling Revenues" },
      { a: " 5:00-5:30 PM | JENNIE NORRIS "     , content: "LEADERSHIP TEAM" },
    ]
  }

  _renderHeader(item, expanded) {
 return (
   <View
     style={{ flexDirection: "row", padding: 10, justifyContent: "space-between", alignItems: "center", backgroundColor: "#EAA825", height:50 }}
   >
     <Text style={{ fontWeight: "600", color: "white" }}>
       {" "}{item.a}
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
        <Content padder>
          {/* ===================================================
            Thursday
          =================================================== */}
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 22}}>
              Thursday, Oct 18th
            </Text>
          </View>

          <Card>
            <CardItem header bordered style={{backgroundColor: '#EAA825'}}>
              <Text style={{color: 'white'}}>4:30-10 PM</Text>
            </CardItem>

            <CardItem>
              <Body>
                <Text>
                  REGISTRATION AND EXPO 25+ COMPANIES DISPLAYING THEIR PRODUCTS AND SERVICES! INCLUDES FOOD STATIONS, NO-HOST BARS! PLUS - DJ, KAROKE, DANCING, PHOTO BOOTH provided by the Charlotte IAHSP® Regional Chapter – the official 2018 HOST CHAPTER
                </Text>
              </Body>
            </CardItem>
          </Card>

          {/* ===================================================
            Friday
          =================================================== */}
          <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 10, marginBottom: 10}}>
            <Text style={{fontSize: 22}}>
            Friday, Oct 19th
            </Text>
          </View>

          <Card>
            <Accordion
              dataArray={this.state.friday}
              renderHeader={this._renderHeader}
              renderContent={this._renderContent}
            />
          </Card>

          {/* ===================================================
            Saturday
          =================================================== */}
          <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 10, marginBottom: 10}}>
            <Text style={{fontSize: 22}}>
            Saturday, Oct 20th
            </Text>
          </View>

          <Card>
            <Accordion
              dataArray={this.state.saturday}
              renderHeader={this._renderHeader}
              renderContent={this._renderContent}
            />
          </Card>
        </Content>
      </ScrollView>
    );
  }
}
