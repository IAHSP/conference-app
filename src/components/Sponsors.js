import React, { Component } from 'react';
import { Content, Text } from 'native-base';
import { SponsorCard, SponsorBlock, SponsorBlockSingle, SponsorRow } from './sponsors/SponsorBlock';

export default class Sponsors extends Component {
  render() {
    return (
      <Content>
        <Text style={{textAlign: 'center', marginVertical: 20}}>Sponsors</Text>
        <SponsorCard title="Premiere Platinum Sponsors">
          <SponsorRow>
            <SponsorBlock src={require('../images/sponsor-logos/premierplatinum/classic-home.png')} />
            <SponsorBlock src={require('../images/sponsor-logos/premierplatinum/coaster-furniture.jpg')} />
          </SponsorRow>
          <SponsorRow>
            <SponsorBlock src={require('../images/sponsor-logos/premierplatinum/feizy-logo.png')} />
            <SponsorBlock src={require('../images/sponsor-logos/premierplatinum/rst-brands-logo-black.jpg')} />
          </SponsorRow>
          <SponsorRow>
            <SponsorBlockSingle src={require('../images/sponsor-logos/premierplatinum/smith-noble.png')} />
          </SponsorRow>
        </SponsorCard>
        <SponsorCard title="Platinum Sponsors">
          <SponsorRow>
            <SponsorBlock src={require('../images/sponsor-logos/platinum/dalyn-rug-logo.jpg')} />
            <SponsorBlock src={require('../images/sponsor-logos/platinum/essentials-for-living-logo-2018-l.jpg')} />
          </SponsorRow>
        </SponsorCard>
        <SponsorCard title="Gold Sponsors">
          <SponsorRow>
            <SponsorBlock src={require('../images/sponsor-logos/gold/artists-guild-of-america.jpg')} />
            <SponsorBlock src={require('../images/sponsor-logos/gold/cort-furniture-rental.jpg')} />
          </SponsorRow>
          <SponsorRow>
            <SponsorBlock src={require('../images/sponsor-logos/gold/d-w-silks.jpg')} />
            <SponsorBlock src={require('../images/sponsor-logos/gold/elk-group-international.jpg')} />
          </SponsorRow>
          <SponsorRow>
            <SponsorBlock src={require('../images/sponsor-logos/gold/europe-2-you-curate-a-life-well-lived.png')} />
            <SponsorBlock src={require('../images/sponsor-logos/gold/ollix-jla-home.png')} />
          </SponsorRow>
          <SponsorRow>
            <SponsorBlock src={require('../images/sponsor-logos/gold/paragon-logo.jpg')} />
            <SponsorBlock src={require('../images/sponsor-logos/gold/propac-images.png')} />
          </SponsorRow>
          <SponsorRow>
            <SponsorBlock src={require('../images/sponsor-logos/gold/props-america.jpg')} />
            <SponsorBlock src={require('../images/sponsor-logos/gold/rave-staging-business-training.png')} />
          </SponsorRow>
          <SponsorRow>
            <SponsorBlock src={require('../images/sponsor-logos/gold/srm-staging-policy-logo.jpg')} />
            <SponsorBlock src={require('../images/sponsor-logos/gold/uma-enterprises-logo.png')} />
          </SponsorRow>
          <SponsorRow>
            <SponsorBlock src={require('../images/sponsor-logos/gold/uma-home-decor.jpg')} />
            <SponsorBlock src={require('../images/sponsor-logos/gold/uttermost.png')} />
          </SponsorRow>
        </SponsorCard>
        <SponsorCard title="Silver Sponsors">
          <SponsorRow>
            <SponsorBlock src={require('../images/sponsor-logos/silver/alfac-janine-brown.jpg')} />
            <SponsorBlock src={require('../images/sponsor-logos/silver/churchill.png')} />
          </SponsorRow>
          <SponsorRow>
            <SponsorBlock src={require('../images/sponsor-logos/silver/sherwin-williams-logo.png')} />
            <SponsorBlock src={require('../images/sponsor-logos/silver/stagency-logo.png')} />
          </SponsorRow>
          <SponsorRow>
            <SponsorBlock src={require('../images/sponsor-logos/silver/staging-studio-logo.png')} />
            <SponsorBlock src={require('../images/sponsor-logos/silver/the-original-cubiqz-cardboard-furniture-for-homestaging.jpg')} />
          </SponsorRow>
          <SponsorRow>
            <SponsorBlockSingle src={require('../images/sponsor-logos/silver/viberent-landscape-logo.png')} />
          </SponsorRow>
        </SponsorCard>
        <SponsorCard title="Bronze Sponsors">
          <SponsorRow>
            <SponsorBlock src={require('../images/sponsor-logos/bronze/jlw-company.jpg')} />
            <SponsorBlock src={require('../images/sponsor-logos/bronze/stagedhomes-black-and-gold-logo.png')} />
          </SponsorRow>
          <SponsorRow>
            <SponsorBlock src={require('../images/sponsor-logos/bronze/the-successful-stager-logo.png')} />
            <SponsorBlock src={require('../images/sponsor-logos/bronze/trusentry.png')} />
          </SponsorRow>
        </SponsorCard>
      </Content>
    );
  }
}
