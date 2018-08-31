import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";

import Home from "./screens/Home";
import DeviceList from "./screens/DeviceList";

EStyleSheet.build({
  // Base Colors
  $primaryBackground: "#FFFFFF",
  $primaryText: "#F28B3C",
  $inputText: "#797979",

  // Colors
  $white: "#FFFFFF",
  $orange: "#FF6347",
  $darkOrange: "#FF5252",
  $green: "#00BD9D",
  $purple: "#9E768F",
  $gray: "#F0F0F0",

  // Base Sizes
  $h1: 16

  // $outline: 1
});

export default () => <DeviceList />;
