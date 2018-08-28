import PropTypes from "prop-types";
import React, { Component } from "react";
import { StatusBar } from "react-native";

import { Container } from "../components/Container";
import { Logo } from "../components/Logo";
import { QRCode } from "../components/QRCode";

class Home extends Component {
  static propTypes = {};

  render() {
    return (
      <Container>
        <StatusBar />
        <Logo />
        <QRCode />
      </Container>
    );
  }
}

export default Home;
