import React from "react";
import { View, Text } from "react-native";
import SvgUri from "react-native-svg-uri";

import styles from "./styles";

const Header = () => (
  <View
    style={{
      flex: 1,
      width: "100%"
    }}
  >
    <View
      style={{
        backgroundColor: "#FF6347",
        flexDirection: "row",
        alignItems: "center",
        height: 90,
        paddingTop: 20
      }}
    >
      <View style={{ marginHorizontal: 20 }}>
        <SvgUri
          width="20"
          height="20"
          fill="#FFFFFF"
          source={require("./images/back.svg")}
        />
      </View>
      <SvgUri width="90" height="90" source={require("./images/white.svg")} />
    </View>
  </View>
);

export default Header;
