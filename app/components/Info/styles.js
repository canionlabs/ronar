import EStyleSheet from "react-native-extended-stylesheet";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const styles = EStyleSheet.create({
  $buttonWidth: screenWidth * (70 / 100), // %

  container: {
    flex: 1,
    justifyContent: "flex-end"
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignSelf: "center"
  },
  link: {
    alignSelf: "center",
    color: "$orange",
    fontWeight: "bold"
  }
});

export default styles;
