import React from "react";
import SvgUri from "react-native-svg-uri";
import EStyleSheet from "react-native-extended-stylesheet";
import { View } from "react-native";

import styles from "./styles";

const QRCode = () => (
  <View style={styles.container}>
    <SvgUri
      style={styles.image}
      width="60"
      height="60"
      fill={EStyleSheet.value("$orange")}
      source={require("./images/qr-code.svg")}
    />
  </View>
);

export default QRCode;
