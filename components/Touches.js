import React, { Component } from 'react';
import { Alert, AppRegistry, StyleSheet, View,
    Image, Text,
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableOpacity,
    TouchableWitoutFeedback,
    } from 'react-native';

export default class Touches extends Component {
    _onPressButton = () => {
        Alert.alert("button")
    }
    render(){
        return(
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                // backgroundColor: 'yellow'
                }}>
                <TouchableHighlight
                onPress={this._onPressButton}
                underlayColor='red'
                onShowUnderlay={()=>{
                    alert("onSHowUnderlay Button!");
                }}
                >
                <View style={{backgroundColor:'green'}}>
                    <Text style={{
                        color: 'white',
                        padding:20,
                        fontSize:10
                    }}>
                        TouchableHighlight
                    </Text>
                </View>
                </TouchableHighlight>
                <TouchableNativeFeedback
                    onPress={this._onPressButton}
                    useForeground={false}
                    >
                <View Style={{
                    width: 300,
                    height: 50,
                    margin: 20,
                    backgroundColor: 'blue'}}>
                        <Text style={{
                            color: 'white',
                            margin: 10,
                            fontSize: 20,
                            textAlign: 'center'}}>
                            TouchableNativeFeedback
                        </Text>
                </View>
                </TouchableNativeFeedback>
                <TouchableOpacity
                    onPress={this._onPressButton}
                    Opacity={0.7}>
                    <View Style={{
                        width: 200,
                        height: 50,
                        margin: 20,
                        backgroundColor: 'red',
                    }}
                    >
                        <Text style={{
                            color: 'white',
                            margin: 10,
                            fontSize: 20,
                            textAlign: 'center'
                        }}>
                            TouchableOpacity
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}