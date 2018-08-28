import EStyleSheet from "react-native-extended-stylesheet";
import { Dimensions, StatusBar } from "react-native";

const screenWidth = Dimensions.get("window").width;

const styles = EStyleSheet.create({
  $logoWidth: screenWidth * (70 / 100), // %
  $textWidth: screenWidth * (95 / 100), // %
  $logoHeight: screenWidth * (40 / 100), // %
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    "@media ios": {
      paddingTop: 20
    },
    "@media android": {
      paddingTop: StatusBar.currentHeight + 10
    }
  },
  logo: {
    alignSelf: "center",
    width: "$logoWidth",
    height: "$logoHeight"
  },
  text: {
    textAlign: "center",
    fontWeight: "100",
    color: "$orange",
    width: "$textWidth",
    fontSize: 11
  }
});

export default styles;
