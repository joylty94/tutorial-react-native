import React, { Component } from "react";
import { Text, View } from "react-native";

export default class FlexDimension extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 10, backgroundColor: 'mediumaquamarine' }}/>
                <View style={{ flex: 70, backgroundColor: '#1e90ff' }}/>
                <View style={{ height: 100, backgroundColor: 'darkslategrey' }}/>
            </View>
        )
    }
}