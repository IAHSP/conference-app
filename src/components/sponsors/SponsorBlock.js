import React, { Component } from 'react';
import { Image } from 'react-native';
import { Text, View, Card, CardItem, Body } from 'native-base';
import { Grid, Col } from 'react-native-easy-grid';

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
              {this.props.children}
            </Body>
          </CardItem>
        </Card>
      </View>
    );
  }
}

export class SponsorRow extends Component {
  render(props) {
    return (
      <Grid>{this.props.children}</Grid>
    );
  }
}

export class SponsorBlock extends Component {
  render(props) {
    return (
      <Col style={{
        paddingVertical: 0,
        paddingHorizontal: 10
      }}>
        <View>
          <Image
            style={{width: '100%', height: 100}}
            source={this.props.src}
            resizeMode={'contain'}
          />
        </View>
      </Col>
    );
  }
}

export class SponsorBlockSingle extends Component {
  render(props) {
    return (
      <Col style={{
        paddingVertical: 0,
        paddingHorizontal: 10
      }}>
        <View>
          <Image
            style={{
              width: '50%',
              height: 100,
              marginLeft: '25%'
            }}
            source={this.props.src}
            resizeMode={'contain'}
          />
        </View>
      </Col>
    );
  }
}

