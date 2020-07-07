import React, { Component } from 'react';
import Button from './src/utils/Button';
import LoginStyle from './Style';
import ScanQrCode from "./src/ScanScreen"
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Modal
} from 'react-native';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: '',
      modalVisible: false

    };
  }

  Scan() {
    this.setState({ modalVisible: !this.state.modalVisible })

  }

  render() {
    return (
      <ImageBackground
        style={LoginStyle.flex}
        resizeMode="cover"
        // resizeMode="contain"
        source={require('./src/assets/bg2.png')}>

        <StatusBar
          backgroundColor={"transparent"}
          barStyle={"dark-content"}
          translucent={true}
        />
        <SafeAreaView>
          <ScrollView>
            <View style={LoginStyle.View}>
              <View style={{ padding: 10 }}>
                <Text style={LoginStyle.Login} >QR CODE SCANNER</Text>
                <Text style={LoginStyle.P} >
                  This QR Code Scanner is probably the most used one. The QR code just contains the address of a website. By scanning the code, the website can be access by the user without the hassle of manually entering the address
                </Text>
              </View>


            </View>


            <View style={{ marginTop: -30 }}>
              <Button title="Scan QR Code " function={() => {
                this.Scan()
              }} />


              <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.modalVisible}
                onRequestClose={() => {
                  this.Scan()
                }}
              >
                <ScanQrCode />

              </Modal>



            </View>


          </ScrollView>

        </SafeAreaView>

      </ImageBackground >
    );
  }
}

