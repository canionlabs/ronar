import PropTypes from "prop-types";
import React, { Component } from "react";
import { StatusBar } from "react-native";

import { Container } from "../components/Container";
import { Logo } from "../components/Logo";

class Home extends Component {
  static propTypes = {};

  render() {
    return (
      <Container>
        <StatusBar backgroundColor="red" translucent={false} />
        <Logo />
      </Container>
    );
  }
}

export default Home;
