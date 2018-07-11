import React, { Component } from 'react';
import {
    AppRegistry,
    ScrollView,
    Image, Text, View, TextInput,
    Dimensions
    } from 'react-native';

export default class VerticalScrollView extends Component {
    render(){
        let screenWidth = Dimensions.get('window').width;
        return(
            <ScrollView
                maximumZoomScale={3} // 안드로이드 안됨
                minimumZoomScale={0.2} // 안드로이드 안됨
                keyboardDismissMode='on-drag'
                >
                <Image
                    source={require('../images/cyclist.jpg')}
                    style={{ width: screenWidth, height: screenWidth * 1280 / 1920, marginTop: 20}}
                    >
                </Image>
                <Text style={{fontSize:20,
                              padding: 15,
                              textAlign:'center',
                              backgroundColor:'green'}}>
                    this is a text
                </Text>
                <TextInput style={{
                    padding: 10,
                    margin:10,
                }}
                placeholder='Enter text'
                borderwidth={1}>
                </TextInput>
                <View style={{backgroundColor: '#a03b51', height:50}}>
                    <Text style={{
                        fontSize: 20,
                        padding: 15,
                        textAlign: 'center',
                        color: 'white'
                    }}>
                        this inside a view
                    </Text>
                </View>
                <Image
                    source={require('../images/cyclist.jpg')}
                    style={{ width: screenWidth, height: screenWidth * 1280 / 1920, marginTop: 20 }}
                >
                </Image>
                <Image
                    source={require('../images/cyclist.jpg')}
                    style={{ width: screenWidth, height: screenWidth * 1280 / 1920, marginTop: 20 }}
                >
                </Image>
                <Image
                    source={require('../images/cyclist.jpg')}
                    style={{ width: screenWidth, height: screenWidth * 1280 / 1920, marginTop: 20 }}
                >
                </Image>
                <Image
                    source={require('../images/cyclist.jpg')}
                    style={{ width: screenWidth, height: screenWidth * 1280 / 1920, marginTop: 20 }}
                >
                </Image>
                <Image
                    source={require('../images/cyclist.jpg')}
                    style={{ width: screenWidth, height: screenWidth * 1280 / 1920, marginTop: 20 }}
                >
                </Image>
            </ScrollView>
        )
    }
}