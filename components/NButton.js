import React, { Component } from "react";
import { Alert, View, Text } from "react-native";
import Button from "react-native-button";

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
                <Button style={{
                    fontSize: 20,
                    color:"white",
                    backgroundColor:"red",
                    padding:10,
                    borderRadius:10
                }} 
                onPress={this._onPressButton}>
                Button
                </Button>
            </View>
        );
    }
}