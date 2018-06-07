import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Style extends Component {
    render(){
        return(
            <View style={ styles.container }>
                <Text style={ styles.firstText }>첫번째</Text>
                <Text style={ styles.secondText }>두번째</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container : {
        marginTop : 20,
        marginLeft : 10,
        marginRight : 10,
        backgroundColor: '#28B463',
        borderColor: '#1F618D',
    },
    firstText : {
        margin: 5, color: 'white'
    },
    secondText : {
        margin: 5,
        color: 'yellow',
        fontWeight: 'bold',
        fontSize: 20,
    }
})
