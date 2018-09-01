import React, { Component } from 'react';
import { Content, Text } from 'native-base';
import { SponsorCard, SponsorBlock } from './sponsors/SponsorBlock';

export default class Sponsors extends Component {
  render() {
    return (
      <Content>
        <Text style={{textAlign: 'center', marginVertical: 20}}>Sponsor Title</Text>
        <SponsorCard title="Premiere Platinum Sponsors">
            <SponsorBlock>Test</SponsorBlock>
            <SponsorBlock>Test2</SponsorBlock>
        </SponsorCard>
        <SponsorCard title="Platinum Sponsors">
            <SponsorBlock>Test</SponsorBlock>
            <SponsorBlock>Test2</SponsorBlock>
        </SponsorCard>
        <SponsorCard title="Gold Sponsors">
            <SponsorBlock>Test</SponsorBlock>
            <SponsorBlock>Test2</SponsorBlock>
        </SponsorCard>
      </Content>
    );
  }
}
