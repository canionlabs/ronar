import PropTypes from "prop-types";
import React, { Component } from "react";
import { StatusBar } from "react-native";

import { Container } from "../components/Container";
import { Header } from "../components/Header";
import { ListItem } from "../components/ListItem";
import { PadContainer } from "../components/Container";

class DeviceList extends Component {
  static propTypes = {};

  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <Header />
        <PadContainer>
          <ListItem />
        </PadContainer>
      </Container>
    );
  }
}

export default DeviceList;
