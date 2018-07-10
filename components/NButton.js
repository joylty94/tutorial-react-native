import React, { Component } from "react";
import { Alert, View, Button, Text } from "react-native";

export default class NButton extends Component {
    _onPressButton = () => {
        Alert.alert("you pressd the button!");
    }
    render() {
        return(
            <View style={{ 
                flex:1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Button onPress={this._onPressButton}
                title="button"
                color="red">
                </Button>
            </View>
        );
    }
}