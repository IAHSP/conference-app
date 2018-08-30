import React from 'react';
import { Footer, FooterTab, Button } from 'native-base';
import Home from './Home';
import Calendar from './Calendar';
import Contact from './Contact';
import Sponsors from './Sponsors';

export const ICEFooter = (props) => {
  return (
    <Footer>
      <FooterTab>
        <Button
        onPress={() => props.navigation.navigate("Home")}>>
          
        </Button>
        <Button>
          <Calendar />
        </Button>
        <Button>
          <Contact />
        </Button>
        <Button>
          <Sponsors />
        </Button>
      </FooterTab>
    </Footer>
  );
}