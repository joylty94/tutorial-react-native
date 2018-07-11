import React, { Component } from 'react';
import { ScrollView, Text, View, Dimensions } from 'react-native';

export default class HorizontalScrollView extends Component {
    render(){
        let screenWidth = Dimensions.get('window').width;
        let screenHeight = Dimensions.get('window').Height;
        return(
            <ScrollView 
                horizontal={true}
                pagingEnabled={true}
                showHorizontalScrollIndicator={true}
                scrooIndicatorInsets={{top:10, left:10, bottom:10, right:10}} // ios에서만 가능
                onMomentumScrollBegin={()=>{
                    // alert('Begin scrolling')
                }}
                onMomentumScrollEnd={()=>{
                    // alert("End Scrolling")
                }}
                onScroll={(event)=>{
                    let logData = `scrolled to x = ${event.nativeEvent.contentOffset.x} y = ${event.nativeEvent.contentOffset.y}`
                }}
                scrollEventThrottle={10}
                >
                <View style={{
                    backgroundColor:'#5f9ca0',
                    flex: 1,
                    marginTop: 20,
                    width: screenWidth,
                    justifyContent: 'center',
                    alignItems: 'center'}}>
                    <Text style={{
                        fontSize:20,
                        color: 'white',
                        textAlign: 'center'
                    }}>
                        Screen 1
                    </Text>
                </View>
                <View style={{
                    backgroundColor: 'tomato',
                    flex: 1,
                    marginTop: 20,
                    width: screenWidth,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontSize: 20,
                        color: 'white',
                        textAlign: 'center'
                    }}>
                        Screen 2
                    </Text>
                </View>
                <View style={{
                    backgroundColor: '#663399',
                    flex: 1,
                    marginTop: 20,
                    width: screenWidth,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontSize: 20,
                        color: 'white',
                        textAlign: 'center'
                    }}>
                        Screen 3
                    </Text>
                </View>
            </ScrollView>
        )
    }
}