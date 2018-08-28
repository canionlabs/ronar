import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  container: {
    position: "absolute",
    bottom: 5,
    right: 5
  },
  modalContainer: {
    flex: 1
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end"
  },
  link: {
    alignSelf: "center",
    color: "$orange",
    fontWeight: "bold"
  }
});

export default styles;
