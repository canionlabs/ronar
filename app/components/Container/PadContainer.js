import PropTypes from "prop-types";
import React from "react";
import { View } from "react-native";

import styles from "./styles";

const PadContainer = ({ children }) => (
  <View style={styles.padContainer}>{children}</View>
);

PadContainer.propTypes = {
  children: PropTypes.any
};

export default PadContainer;
