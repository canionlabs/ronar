import React, { Component } from "react";
import { View, Text, TouchableOpacity, Linking } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import Modal from "react-native-modal";

import { Button } from "../../components/Button";
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
              <TouchableOpacity onPress={this._toggleModal}>
                <Button text="Voltar" />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <View>
          <TouchableOpacity onPress={this._toggleModal}>
            <Button text="Precisa de ajuda?" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Info;
