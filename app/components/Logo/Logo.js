import React from "react";
import { Image, View } from "react-native";

import styles from "./styles";

const Logo = () => (
  <View style={styles.container}>
    <Image
      resizeMode="contain"
      style={styles.logo}
      source={require("./images/logo.png")}
    />
  </View>
);

export default Logo;
