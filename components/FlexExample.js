import React, { Component } from "react";
import { Text, View } from "react-native";

export default class FlexDimension extends Component {
    render() {
        return (
            <View style={{ 
                flex: 1, 
                flexDirection: 'column',
                // justContent: 'flex-start'
                // justifyContent: 'flex-end'
                // justifyContent: 'space-between'
                // justifyContent: 'space-around'
                justifyContent: 'center',
                alignItems: 'center',
                }}>
                <Text style={{ width: 50, height: 50, backgroundColor: 'red', marginBottom: 5 }} />
                <Text style={{ width: 50, height: 50, backgroundColor: 'green', marginBottom: 5 }} />
                <Text style={{ width: 50, height: 50, backgroundColor: 'blue' }} />
            </View>
        )
    }
}