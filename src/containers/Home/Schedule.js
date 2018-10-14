import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Content, Card, CardItem, Text, Body, View, Accordion, Icon } from "native-base";

export default class Schedule extends Component {
  state = {
    friday: [
      { a: "9:00 - 9:15 AM | LEADERSHIP TEAM ", content: "Welcome & Overview by the Leadership Team" },
      { a: "9:15 - 9:45 AM | JENNIE NORRIS ", content: "Journey to the Top by Jennie Norris" },
      { a: "10:00 - 10:45 AM | FRED BERNS ", content: "Selling Methods of the Masters by Fred Berns" },
      { a: "10:50 - 11:20 AM | NAHEED OBERFELD ", content: "Mindset Strategies to Boost Your Income by Naheed Oberfeld" },
      { a: "11:25 AM - 12:15 PM | JOANNE WEARY ", content: "ONE DAY DECORATING - How to turn this immediate gratification service into income by Joanne Weary" },

      { a: "BREAKOUT SESSIONS ", content: "ATTENDEES SELECT 2 – 1 per time slot (sign ups will be done online prior to conference)" },

      { a: "1:15 - 1:50 PM | ANDREA CHENISI ", content: "Create a Winning Team and How to Maintain It by Andrea Chenisi" },
      { a: "1:15 - 1:50 PM | JUNE CARTER ", content: "Timing Sanity, The 34 Minute Time Management Process by June Carter" },
      { a: "1:15 - 1:50 PM | CATHERINE LEWIS BROWN ", content: "Pricing Strategies that Work by Catherine Lewis Brown" },
      { a: "1:15 - 1:50 PM | MARGARET GEHR ", content: "Planning for the Successful Expansion of your Business by Margaret Gehr" },
      { a: "1:55 - 2:30 PM | ANDREA CHENISI ", content: "Create a Winning Team and How to Maintain It by Andrea Chenisi" },
      { a: "1:55 - 2:30 PM | JUNE CARTER ", content: "Timing Sanity, The 34 Minute Time Management Process by June Carter" },
      { a: "1:55 - 2:30 PM | CATHERINE LEWIS BROWN ", content: "Pricing Strategies that Work by Catherine Lewis Brown" },
      { a: "1:55 - 2:30 PM | MARGARET GEHR ", content: "Planning for the Successful Expansion of your Business by Margaret Gehr" },

      { a: "BREAKOUT SESSIONS ", content: "ATTENDEES SELECT 2 – 1 per time slot (sign ups will be done online prior to conference)" },

      { a: "2:45 - 3:20 PM | KEVIN HTAIN ", content: "Working with the Media by Kevin Htain" },
      { a: "2:45 - 3:20 PM | CHRISTOPHER CORDER ", content: "Mastering Consultations by Christopher Corder" },
      { a: "2:45 - 3:20 PM | LAKEITHA SMITH ", content: "L-Suite Netwërk - Company Management by Lakeitha Smith" },
      { a: "2:45 - 3:20 PM | KAT TROULINOS ", content: "Staging for Builders by Kat Troulinos" },
      { a: "3:25 - 4:00 PM | KEVIN HTAIN ", content: "Working with the Media by Kevin Htain" },
      { a: "3:25 - 4:00 PM | CHRISTOPHER CORDER ", content: "Mastering Consultations by Christopher Corder" },
      { a: "3:25 - 4:00 PM | LAKEITHA SMITH ", content: "L-Suite Netwërk - Company Management by Lakeitha Smith" },
      { a: "3:25 - 4:00 PM | KAT TROULINOS ", content: "Staging for Builders by Kat Troulinos" },
      { a: "4:15 - 5:15 PM | KEYNOTE SPEAKERS - THE SCOTT BROTHERS ", content: "Keynote Speakers - The Scott Brothers" },
      { a: "5:00 - 6:00 PM | MEET N GREET and BOOK SIGNING ", content: "Meet N Greet and Book Signing" },
      { a: "7:15 - 10:30 PM | DINNER & AWARDS CEREMONY AND WWSSW® FUNDRAISER and RED CARPET GALA ", content: "Dinner & Awards Ceremony and WWSSW® Fundraiser and Red Carpet Gala" },
    ],    
    saturday: [
      { a: "9:00 - 9:40 AM | BARB SCHWARZ ", content: "Inspirational Talk by Barb Schwarz" },
      { a: "9:45 AM - 12:45 PM | LHS DESIGNATION ", content: "Luxury Home Staging Designation" },
      { a: "1:45 - 2:45 PM | JOSEPH HAECKER ", content: "IAHSP® and Product Integration by Joseph Haecker" },
      { a: "2:50 - 3:30 PM | CARRIE LITTLE ", content: "Social Media Strategies by Carrie Little" },
      { a: "3:45 - 4:15 PM | MARY JO CAMP ", content: "Design Trends by Mary Jo Camp" },
      { a: "4:20 - 5:00 PM | SCOTT HANSEN ", content: "Outthink - Outmarket - Outsell Your competition - 5 Part Profit Formula for Getting New Clients and Doubling Revenues" },
      { a: "5:00 - 5:30 PM | LEADERSHIP TEAM ", content: "The Leadership Team" },
    ]
  }

  _renderHeader(item, expanded) {
    return (
      <View
        style={{ flexDirection: "row", padding: 10, justifyContent: "space-between", alignItems: "center", backgroundColor: "#EAA825" }}
      >
        <Text style={{ fontSize: 15, fontWeight: "500", color: "white" }}>
          {item.a}
          {expanded
          ? <Icon style={{ fontSize: 17, color: 'white' }} name="ios-arrow-up" />
          : <Icon style={{ fontSize: 17, color: 'white' }} name="ios-arrow-down" />}
        </Text>        
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
          <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 10, marginBottom: 10}}>
            <Text style={{fontSize: 22}}>
              Thursday, Oct 18th
            </Text>
          </View>

          <Card>
            <CardItem header bordered style={{backgroundColor: '#EAA825', paddingTop: 10, paddingBottom: 10}}>
              <Text style={{color: 'white'}}>4:30 - 10:00 PM</Text>
            </CardItem>

            <CardItem>
              <Body>
                <Text>
                  REGISTRATION AND EXPO 25+ COMPANIES DISPLAYING THEIR PRODUCTS AND SERVICES! 
                  INCLUDES FOOD STATIONS, NO-HOST BARS! PLUS - DJ, KAROKE, DANCING, PHOTO BOOTH 
                  Provided by the Charlotte IAHSP® Regional Chapter – the Official 2018 HOST CHAPTER
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
