import React from "react";
import { Dimensions, View, Text, FlatList } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

import { Card } from "../Card";

const styles = EStyleSheet.create({
  $fullWidth: Dimensions.get("window").width,
  sweetList: {
    width: "$fullWidth",
    marginVertical: 10
  },
  container: {
    alignItems: "center"
  }
});

const ListItem = ({}) => (
  <FlatList
    style={styles.sweetList}
    contentContainerStyle={styles.container}
    data={[{ key: "a" }, { key: "b" }, { key: "c" }]}
    renderItem={({ item }) => <Card />}
  />
);

export default ListItem;
