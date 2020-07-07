import React from "react";
import { Linking, Text, TouchableOpacity, Alert, ImageBackground } from "react-native";
import QRCodeScanner from "react-native-qrcode-scanner";

export default class App extends React.Component {

    ifScaned = e => {
        console.log("data", e)
        Linking.openURL(e.data).catch(err =>
            Alert.alert("Invalid QRCode", e.data));
    }

    render() {
        return (

            <QRCodeScanner
                containerStyle={{ padding: 0, height: 200, width: 200 }}
                onRead={this.ifScaned}
                reactivate={true}
                permissionDialogMessage="Need Permission To Access Camera"
                reactivateTimeout={10}
                showMarker={true}
                markerStyle={{ borderColor: "#FFF", borderRadius: 10 }}
                bottomContent={

                    <TouchableOpacity >
                        <Text style={{ fontSize: 21, fontWeight: "bold", color: "#F3525C" }}> Scan QR Code</Text>
                    </TouchableOpacity>


                } />


        )
    }
}
