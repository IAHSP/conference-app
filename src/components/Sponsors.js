import React, { Component } from 'react';
import { Content, Text } from 'native-base';
import { SponsorCard, SponsorBlock, SponsorRow } from './sponsors/SponsorBlock';

export default class Sponsors extends Component {
  render() {
    return (
      <Content>
        <Text style={{textAlign: 'center', marginVertical: 20}}>Sponsors</Text>
        <SponsorCard title="Premiere Platinum Sponsors">
          <SponsorRow>
            <SponsorBlock src={require('../images/sponsor-logos/classic-home.png')} />
            <SponsorBlock src={require('../images/sponsor-logos/coaster-furniture.jpg')} />
          </SponsorRow>
          <SponsorRow>
            <SponsorBlock src={require('../images/sponsor-logos/classic-home.png')} />
            <SponsorBlock src={require('../images/sponsor-logos/coaster-furniture.jpg')} />
          </SponsorRow>
        </SponsorCard>
        <SponsorCard title="Platinum Sponsors">
          <SponsorRow>
            <SponsorBlock src={require('../images/sponsor-logos/classic-home.png')} />
            <SponsorBlock src={require('../images/sponsor-logos/coaster-furniture.jpg')} />
          </SponsorRow>
          <SponsorRow>
            <SponsorBlock src={require('../images/sponsor-logos/classic-home.png')} />
            <SponsorBlock src={require('../images/sponsor-logos/coaster-furniture.jpg')} />
          </SponsorRow>
        </SponsorCard>
        <SponsorCard title="Silver Sponsors">
          <SponsorRow>
            <SponsorBlock src={require('../images/sponsor-logos/classic-home.png')} />
            <SponsorBlock src={require('../images/sponsor-logos/coaster-furniture.jpg')} />
          </SponsorRow>
          <SponsorRow>
            <SponsorBlock src={require('../images/sponsor-logos/classic-home.png')} />
            <SponsorBlock src={require('../images/sponsor-logos/coaster-furniture.jpg')} />
          </SponsorRow>
        </SponsorCard>
      </Content>
    );
  }
}
