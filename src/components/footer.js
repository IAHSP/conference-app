import React from 'react';
import { Footer, FooterTab, Button, Text } from 'native-base';

export const ICEFooter = (props) => {
  return (
    <Footer>
      <FooterTab>
        <Button active>
          <Text>Home</Text>
        </Button>
        <Button>
          <Text>Calendar</Text>
        </Button>
        <Button>
          <Text>Contact</Text>
        </Button>
        <Button>
          <Text>Sponsors</Text>
        </Button>
      </FooterTab>
    </Footer>
  );
}
