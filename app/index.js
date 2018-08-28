import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";

import Home from "./screens/Home";

EStyleSheet.build({
  $primaryBackground: "#1d1e22",
  $primaryText: "#FFFFFF",
  $inputText: "#797979",

  $white: "#FFFFFF",
  $orange: "#FF6E40",
  $green: "#00BD9D",
  $purple: "#9E768F",
  $gray: "#F0F0F0"

  //   $outline: 1
});

export default () => <Home />;
