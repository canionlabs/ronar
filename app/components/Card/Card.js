import React from "react";
import { View, Text, Dimensions } from "react-native";

import EStyleSheet from "react-native-extended-stylesheet";
import SvgUri from "react-native-svg-uri";

const styles = EStyleSheet.create({
  $cardWidth: Dimensions.get("window").width * (80 / 100), // %

  card: {
    marginVertical: 5,
    height: 100,
    width: "$cardWidth",
    backgroundColor: "$darkOrange",
    elevation: 4
  },
  title: {
    textAlign: "center",
    marginTop: 5,
    fontWeight: "300",
    color: "$white",
    fontSize: "$h1"
  },
  caution: {
    textAlign: "center",
    marginTop: 5,
    fontWeight: "300",
    color: "$white",
    fontSize: "$h1",
    marginLeft: 5
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  value: {
    textAlign: "center",
    fontWeight: "100",
    color: "$white",
    fontSize: 60,
    alignSelf: "center"
  },
  scale: {
    color: "$white",
    fontSize: 18
  }
});

const Card = ({}) => (
  <View style={styles.card}>
    <View style={styles.content}>
      <Text style={styles.title}>Câmara de Frios</Text>
      <Text style={styles.caution}>[SEM ENERGIA]</Text>
    </View>
    <View style={styles.content}>
      <SvgUri
        width="40"
        height="40"
        source={require("../../assets/icons/thermometer.svg")}
      />
      <Text style={styles.value}>10</Text>
      <Text style={styles.scale}>˚C</Text>
    </View>
  </View>
);

export default Card;
