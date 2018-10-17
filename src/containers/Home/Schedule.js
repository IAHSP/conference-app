import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Content, Card, CardItem, Text, Body, View, Accordion, Icon } from "native-base";

export default class Schedule extends Component {
  state = {
    friday: [
      { a: "9:00 - 9:15 AM | LEADERSHIP TEAM - GRAND BALLROOM ", content: "Welcome & Overview by the Leadership Team" },
      { a: "9:15 - 9:45 AM | JENNIE NORRIS - GRAND BALLROOM ", content: "Journey to the Top by Jennie Norris" },
      { a: "9:50 - 10:35 AM | FRED BERNS - GRAND BALLROOM ", content: "Selling Methods of the Masters by Fred Berns" },
      { a: "BREAK 20 MINS ", content: "Break 20 mins" },
      { a: "10:55 - 11:30 AM | NAHEED OBERFELD - GRAND BALLROOM ", content: "Mindset Strategies to Boost Your Income by Naheed Oberfeld" },
      { a: "11:45 AM - 12:30 PM | JOANNE WEARY - GRAND BALLROOM ", content: "ONE DAY DECORATING - How to turn this immediate gratification service into income by Joanne Weary" },
      { a: "12:30 - 1:15 PM | LUNCH BREAK (ON YOUR OWN) ", content: "Lunch break" },

      { a: "BREAKOUT SESSIONS ", content: "ATTENDEES SELECT 2 – 1 per time slot (sign ups will be done online prior to conference)" },

      { a: "1:15 - 1:50 PM | ANDREA CHENISI - PROVIDENCE 1 ", content: "Create a Winning Team and How to Maintain It by Andrea Chenisi" },
      { a: "1:15 - 1:50 PM | JUNE CARTER - PROVIDENCE 2 ", content: "Timing Sanity, The 34 Minute Time Management Process by June Carter" },
      { a: "1:15 - 1:50 PM | CATHERINE LEWIS BROWN - PROVIDENCE 3 ", content: "Pricing Strategies that Work by Catherine Lewis Brown" },
      { a: "1:15 - 1:50 PM | MARGARET GEHR - UPTOWN 1 ", content: "Planning for the Successful Expansion of your Business by Margaret Gehr" },
      { a: "1:55 - 2:30 PM | ANDREA CHENISI - PROVIDENCE 1 ", content: "Create a Winning Team and How to Maintain It by Andrea Chenisi" },
      { a: "1:55 - 2:30 PM | JUNE CARTER - PROVIDENCE 2 ", content: "Timing Sanity, The 34 Minute Time Management Process by June Carter" },
      { a: "1:55 - 2:30 PM | CATHERINE LEWIS BROWN - PROVIDENCE 3 ", content: "Pricing Strategies that Work by Catherine Lewis Brown" },
      { a: "1:55 - 2:30 PM | MARGARET GEHR - UPTOWN 1 ", content: "Planning for the Successful Expansion of your Business by Margaret Gehr" },

      { a: "BREAKOUT SESSIONS ", content: "ATTENDEES SELECT 2 – 1 per time slot (sign ups will be done online prior to conference)" },

      { a: "2:45 - 3:20 PM | KEVIN HTAIN - PROVIDENCE 1 ", content: "Working with the Media by Kevin Htain" },
      { a: "2:45 - 3:20 PM | CHRISTOPHER CORDER - PROVIDENCE 2 ", content: "Mastering Consultations by Christopher Corder" },
      { a: "2:45 - 3:20 PM | LAKEITHA SMITH - PROVIDENCE 3 ", content: "L-Suite Netwërk - Company Management by Lakeitha Smith" },
      { a: "2:45 - 3:20 PM | KAT TROULINOS - UPTOWN 1 ", content: "Staging for Builders by Kat Troulinos" },
      { a: "3:25 - 4:00 PM | KEVIN HTAIN - PROVIDENCE 1 ", content: "Working with the Media by Kevin Htain" },
      { a: "3:25 - 4:00 PM | CHRISTOPHER CORDER - PROVIDENCE 2 ", content: "Mastering Consultations by Christopher Corder" },
      { a: "3:25 - 4:00 PM | LAKEITHA SMITH - PROVIDENCE 3 ", content: "L-Suite Netwërk - Company Management by Lakeitha Smith" },
      { a: "3:25 - 4:00 PM | KAT TROULINOS - UPTOWN 1 ", content: "Staging for Builders by Kat Troulinos" },
      { a: "4:30 - 5:30 PM | KEYNOTE SPEAKERS - THE SCOTT BROTHERS - GRAND BALLROOM ", content: "Keynote Speakers - The Scott Brothers" },
      { a: "5:30 - 6:45 PM | MEET N GREET and BOOK SIGNING - PROMENADE ", content: "Meet N Greet - Book Signing" },
      { a: "7:30 - 10:30 PM | DINNER & AWARDS CEREMONY - GRAND BALLROOM ", content: "Red Carpet Gala Awards Dinner" },
    ],    
    saturday: [
      { a: "9:00 - 9:40 AM | BARB SCHWARZ - INSPIRATIONAL KEYNOTE SPEAKER ", content: "Inspirational Talk by Barb Schwarz" },
      { a: "9:45 AM - 12:45 PM | LHS DESIGNATION ", content: "Luxury Home Staging Designation (includes 1 break)" },
      { a: "12:45 - 1:30 PM | LUNCH BREAK (ON YOUR OWN) ", content: "Lunch break" },
      { a: "1:45 - 2:00 PM | SANJA RADOVANOVIC ", content: "IAHSP Europe Update by Sanja Radovanovic" },
      { a: "2:10 - 2:45 PM | CLASSIC HOME, COASTER, FEIZY, RST, SMITH & NOBLE ", content: "Premier Partner Vendors" },
      { a: "2:50 - 3:30 PM | CARRIE LITTLE ", content: "Social Media Strategies by Carrie Little" },
      { a: "3:30 - 3:45 PM | BREAK ", content: "BREAK" },
      { a: "3:45 - 4:15 PM | MARY JO CAMP ", content: "Design Trends by Mary Jo Camp" },
      { a: "4:20 - 5:00 PM | SCOTT HANSEN - BUSINESS KEYNOTE SPEAKER ", content: "Outthink - Outmarket - Outsell Your competition - 5 Part Profit Formula for Getting New Clients and Doubling Revenues" },
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
              <Text style={{color: 'white'}}>4:30 - 10:30 PM | IAHSP® CONFERENCE REGISTRATION & EXPO</Text>
            </CardItem>

            <CardItem>
              <Body>
                <Text>
                  VENDOR BOOTHS AND TABLES, DJ, KAROKE, PHOTO BOOTH, DANCING, FOOD, AND FUN!
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
              Saturday, Oct 20th - SPEAKER - ALL SESSIONS IN GRAND BALLROOM
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
