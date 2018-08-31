import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "$primaryBackground"
  },
  padContainer: {
    backgroundColor: "$primaryBackground",
    paddingTop: 80,
    zIndex: -10
  }
});

export default styles;
