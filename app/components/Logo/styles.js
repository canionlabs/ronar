import EStyleSheet from "react-native-extended-stylesheet";
import { Dimensions } from "react-native";

const imageWidth = Dimensions.get("window").width / 2;

const styles = EStyleSheet.create({
  container: {
    alignItems: "center"
  },
  logo: {
    width: imageWidth
  }
});

export default styles;
