import React, { Component } from 'react';
import { Text, View, Card, CardItem, Body, Grid, Col } from 'native-base';

export class SponsorCard extends Component {
  render(props) {
    return (
      <View style={{marginBottom: 20}}>
        <Card>
          <CardItem header style={{ backgroundColor: "#EAA825"}}>
            <Text style={{color: "#ffffff"}}>{this.props.title}</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Grid>{this.props.children}</Grid>
            </Body>
          </CardItem>
        </Card>
      </View>
    );
  }
}

export class SponsorBlock extends Component {
  render() {
    return (
      <Col>
        <View>
          <Text style={{textAlign: 'center'}}>
            This is a sponsor block.
          </Text>
        </View>
      </Col>
    );
  }
}

