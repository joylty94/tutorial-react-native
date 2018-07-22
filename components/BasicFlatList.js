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
            <View style={{
                flex: 1,
                backgroundColor : this.props.index % 2 === 0 ? "mediumseagreen" : "tomato" 
            }}>
            <Image 
                source={{uri: this.props.item.imgURL}}
                style={{ width: 100, height: 100, margin : 5}}>
            </Image>
            <View>
                <Text style={styles.flatListItem}>{this.props.item.name}</Text>
                <Text style={styles.flatListItem}>{this.props.item.age}</Text>
            </View>
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