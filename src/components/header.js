import React from "react";
import { Container, Header, Left, Body, Right, Title } from 'native-base';

export const ICEHeader = (props) => {
  return (
    <Header>
      <Left/>
      <Body>
        <Title>{props.title}</Title>
      </Body>
      <Right />
    </Header>
  )
}