import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import PropTypes from "prop-types";
import EStyleSheet from "react-native-extended-stylesheet/src/api";

import styles from "./styles";

const Button = ({ text }) => (
  <View style={styles.button}>
    <Text style={styles.text}>{text}</Text>
  </View>
);

Button.proptypes = {
  text: PropTypes.string
};

export default Button;
