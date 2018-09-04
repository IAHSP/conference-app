import React, { Component } from 'react';
import { Image } from 'react-native';
import { Content, Text } from 'native-base';
import { SponsorCard, SponsorBlock } from './sponsors/SponsorBlock';

export default class Sponsors extends Component {
  render() {
    return (
      <Content>
        <Text style={{textAlign: 'center', marginVertical: 20}}>Sponsor Title</Text>
        <SponsorCard title="Premiere Platinum Sponsors">
          <SponsorBlock>
            <Image
              source={require('../images/sponsor-logos/classic-home.png')}
              resizeMode={'contain'}
            />
          </SponsorBlock>
          <SponsorBlock>
            <Image
              source={require('../images/sponsor-logos/coaster-furniture.jpg')}
            />
          </SponsorBlock>
          <SponsorBlock>
            <Image
              source={require('../images/sponsor-logos/classic-home.png')}
              resizeMode={'contain'}
            />
          </SponsorBlock>
          <SponsorBlock>
            <Image
              source={require('../images/sponsor-logos/coaster-furniture.jpg')}
            />
          </SponsorBlock>
        </SponsorCard>
        <SponsorCard title="Platinum Sponsors">
          <SponsorBlock>
            <Image
              source={require('../images/sponsor-logos/classic-home.png')}
              resizeMode="contain"
            />
          </SponsorBlock>
          <SponsorBlock>
            <Image
              source={require('../images/sponsor-logos/coaster-furniture.jpg')}
              resizeMode="contain"
            />
          </SponsorBlock>
        </SponsorCard>
        <SponsorCard title="Gold Sponsors">
          <SponsorBlock>
            <Image
              source={require('../images/sponsor-logos/classic-home.png')}
              resizeMode="contain"
            />
          </SponsorBlock>
          <SponsorBlock>
            <Image
              source={require('../images/sponsor-logos/coaster-furniture.jpg')}
              resizeMode="contain"
            />
          </SponsorBlock>
        </SponsorCard>
        <SponsorCard title="Silver Sponsors">
          <SponsorBlock>
            <Image
              source={require('../images/sponsor-logos/classic-home.png')}
              resizeMode="contain"
            />
          </SponsorBlock>
          <SponsorBlock>
            <Image
              source={require('../images/sponsor-logos/coaster-furniture.jpg')}
              resizeMode="contain"
            />
          </SponsorBlock>
        </SponsorCard>
        <SponsorCard title="Bronze Sponsors">
          <SponsorBlock>
            <Image
              source={require('../images/sponsor-logos/classic-home.png')}
              resizeMode="contain"
            />
          </SponsorBlock>
          <SponsorBlock>
            <Image
              source={require('../images/sponsor-logos/coaster-furniture.jpg')}
              resizeMode="contain"
            />
          </SponsorBlock>
        </SponsorCard>
      </Content>
    );
  }
}
