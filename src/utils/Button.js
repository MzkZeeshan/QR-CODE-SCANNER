import React, { Component } from 'react';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Global from "../utils/global"
import {
    Text,
    View,
    TextInput, Image,
    KeyboardAvoidingView,
    ActivityIndicator,
    TouchableOpacity,
    ScrollView,
    Platform,
    StyleSheet,
} from 'react-native';
// import RoutesKey from '../navigation/routeskey';


class Button extends Component {
    constructor() {
        super();
        this.state = {};
    }
    componentDidMount() { }

    render() {
        return (
            <TouchableOpacity
                activeOpacity={0.4}
                style={styles.ButtonStyle}
                onPress={this.props.function}>
                <Text style={{ color: '#fff' }}>{this.props.title}</Text>

                <Image
                    style={{
                        width: 40,
                        height: 40,
                        alignSelf: 'center',
                        resizeMode: 'contain',
                        position: "absolute", right: 5
                    }}
                    source={require('../assets/right_arrow_circle.png')}
                />
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    button: {
        flexDirection: 'column',
        flex: 10,
        paddingBottom: 10,
    },

    ButtonStyle: {
        backgroundColor: '#F3525C',
        width: '60%',
        alignItems: 'center',
        color: 'blue',
        borderRadius: 50,
        alignSelf: 'center',
        marginVertical: 10,
        justifyContent: 'center',
        paddingVertical: 15,
    },

});

export default Button;
