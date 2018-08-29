import EStyleSheet from "react-native-extended-stylesheet";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const styles = EStyleSheet.create({
  $buttonWidth: screenWidth * (80 / 100), // %

  button: {
    backgroundColor: "$orange",
    justifyContent: "center",
    alignItems: "center",
    width: "$buttonWidth",
    marginVertical: 10,
    borderRadius: 24,
    height: 48
  },
  text: {
    color: "$white",
    fontSize: 24
  }
});

export default styles;
