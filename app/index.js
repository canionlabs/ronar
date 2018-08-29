import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";

import Home from "./screens/Home";

EStyleSheet.build({
  $primaryBackground: "#FFFFFF",
  $primaryText: "#F28B3C",
  $inputText: "#797979",

  $white: "#FFFFFF",
  $orange: "#FF6347",
  $green: "#00BD9D",
  $purple: "#9E768F",
  $gray: "#F0F0F0"

  // $outline: 1
});

export default () => <Home />;
