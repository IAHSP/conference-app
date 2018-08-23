import React, {Component} from 'react';
import { Container, Content } from 'native-base';

import { ICEHeader } from "./src/components/header";
import { ICEFooter } from "./src/components/footer"

export default class App extends Component<Props> {
  render() {
    return (
      <Container>
        <ICEHeader title="Home" />

        {/* TODO: Content */}
        <Content />
        
        <ICEFooter current="Home" />
      </Container>
    );
  }
}

