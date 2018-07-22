import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View, Image } from 'react-native';
import flatListData from '../data/flatListData';

const styles = StyleSheet.create({
    flatListItem: {
        fontSize : 16,
        padding : 10,
        color : 'white'
    }
}) 

class FlatListItem extends Component {
    render() {
        return (
            <View style={{ flex: 1, flexDirection: "column"}}>
            <View style={{
                flex: 1,
                flexDirection: "row",
                backgroundColor : "mediumseagreen",
            }}>
            <Image 
                source={{uri: this.props.item.imgURL}}
                style={{ width: 100, height: 100, margin : 5}}>
            </Image>
            <View style={{
                flex: 1,
                flexDirection:'column',
                height: 100,
            }}>
                <Text style={styles.flatListItem}>{this.props.item.name}</Text>
                <Text style={styles.flatListItem}>{this.props.item.age}</Text>
            </View>
            </View>
            <View style={{backgroundColor: 'white', height: 1}}></View>
            </View>
        )
    }
}

export default class BasicFlatList extends Component {
    render() {
        return(
            <View style={{ flex:1, marginTop:22 }}>
                <FlatList 
                    data={flatListData}
                    renderItem={({item, index})=>{
                        // console.log(`${JSON.stringify(item)}, ${index}`)
                        return(
                            <FlatListItem item={item} index={index}>

                            </FlatListItem>
                        )
                    }}
                >
                </FlatList>
            </View>
        )
    }
}