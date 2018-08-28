import React, { Component } from "react";
import { View, Text, Button, TouchableOpacity, Linking } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import SvgUri from "react-native-svg-uri";
import Modal from "react-native-modal";

import styles from "./styles";

class Info extends Component {
  state = {
    isModalVisible: false
  };

  handleSitePress = () => {
    Linking.openURL("http://monar.canionlabs.io");
  };

  _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });

  render() {
    return (
      <View style={styles.container}>
        <Modal
          backdropColor={EStyleSheet.value("$white")}
          isVisible={this.state.isModalVisible}
          onBackButtonPress={this._toggleModal}
          backdropOpacity={0.9}
        >
          <View style={{ flex: 1 }}>
            <Text style={styles.modalText}>
              A proposta do MONAR é reduzir perdas, aumentar vida útil e
              melhorar qualidade de produtos sensíveis a temperatura através de
              um sistema de monitoramento baseado em IoT diminuindo custos e
              simplificando logística.
            </Text>
            <TouchableOpacity
              onPress={this.handleSitePress}
              style={{ marginTop: 10 }}
            >
              <Text style={styles.link}>Visite nosso site</Text>
            </TouchableOpacity>
            <View style={styles.buttonContainer}>
              <Button
                onPress={this._toggleModal}
                title="Voltar"
                color={EStyleSheet.value("$orange")}
                style={styles.btn}
              />
            </View>
          </View>
        </Modal>
        <TouchableOpacity onPress={this._toggleModal}>
          <SvgUri
            width="20"
            height="20"
            fill={EStyleSheet.value("$white")}
            source={require("./images/question.svg")}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default Info;
