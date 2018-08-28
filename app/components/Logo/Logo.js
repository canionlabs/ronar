import React from "react";
import { Image, View, Text } from "react-native";

import styles from "./styles";

const Logo = () => (
  <View style={styles.container}>
    <Image
      resizeMode="contain"
      style={styles.logo}
      source={require("./images/logo.png")}
    />
    <Text style={styles.text}>
      Plataforma de monitoramento para produtos sensíveis a temperatura
    </Text>
  </View>
);

export default Logo;
