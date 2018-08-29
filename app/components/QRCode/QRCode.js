import React, { Component } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import { Constants, BarCodeScanner, Permissions } from "expo";

export default class QRCode extends Component {
  state = {
    hasCameraPermission: null
  };

  componentDidMount() {
    this._requestCameraPermission();
  }

  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === "granted"
    });
  };

  _handleBarCodeRead = data => {
    Alert.alert("Scan successful!", JSON.stringify(data));
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.hasCameraPermission === null ? (
          <Text>...</Text>
        ) : this.state.hasCameraPermission === false ? (
          <Text>É necessário a autorização do uso da camera</Text>
        ) : (
          <BarCodeScanner
            onBarCodeRead={this._handleBarCodeRead}
            style={styles.scanner}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 130,
    backgroundColor: "#FFFFFF",
    borderColor: "#FF6347",
    borderWidth: 2
  },
  scanner: {
    height: 250,
    width: 250
  }
});
