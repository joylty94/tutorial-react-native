import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View, Image, Alert, Platform, TouchableHighlight } from 'react-native';
import flatListData from '../data/flatListData';
import Swipeout from 'react-native-swipeout';

const styles = StyleSheet.create({
    flatListItem: {
        fontSize : 16,
        padding : 10,
        color : 'white'
    }
}) 

class FlatListItem extends Component {
    constructor(props){
        super(props),
        this.state = {
            activeRowKey: null,
        }
    }
    render() {
        const swipeoutSetting ={
            autoClose : true,
            onClose: (sectionID, rowId, direction)=>{
                if(this.props.activeRowKey != null){
                    this.setState({activeRowKey : null});
                }
            },
            onOpen: (sectionID, rowId, direction)=>{
                this.setState({ activeRowKey : this.props.item.key });
            },
            right : [
                {
                    onPress : () =>{
                        const deletingRow = this.props.activeRowKey;
                        Alert.alert(
                            'Alert',
                            'Are you sure you want to delete ?',
                            [
                                {text: 'No', onPress: () => {console.log('Cancel press')}, type: 'cancel'},
                                {text: 'Yes', onPress: () =>{
                                    flatListData.splice(this.props.index, 1);
                                    this.props.refreshFlatList(deletingRow);
                                }}
                            ],
                            { cancelable : true }
                        );
                    },
                    text: 'Delete', type: 'delete'
                }
            ],
            rowId: this.props.index,
            sectionID: 1,
        }
        return (
            <Swipeout {...swipeoutSetting}>
                <View style={{ flex: 1, flexDirection: "column" }}>
                    <View style={{
                        flex: 1,
                        flexDirection: "row",
                        backgroundColor: "mediumseagreen",
                    }}>
                        <Image
                            source={{ uri: this.props.item.imgURL }}
                            style={{ width: 100, height: 100, margin: 5 }}>
                        </Image>
                        <View style={{
                            flex: 1,
                            flexDirection: 'column',
                            height: 100,
                        }}>
                            <Text style={styles.flatListItem}>{this.props.item.name}</Text>
                            <Text style={styles.flatListItem}>{this.props.item.age}</Text>
                        </View>
                    </View>
                    <View style={{ backgroundColor: 'white', height: 1 }}></View>
                </View>
            </Swipeout>
        )
    }
}

export default class BasicFlatList extends Component {
    constructor(props){
        super(props),
        this.state = ({
            deletedRowKey : null,
        })
    }
    refreshFlatList = (deleteKey) => {
        this.setState({
            deletedRowKey : deleteKey,
        })
    }
    _onPressAdd() {
        alert("You add Item ?");
    } 
    render() {
        return(
            <View style={{ flex:1, marginTop: Platform.OS === 'ios' ? 34 : 0 }}>
                <View style={{
                    backgroundColor : 'tomato',
                    height : 64,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    }}>
                    <TouchableHighlight
                        style={{marginRight:10}}
                        underlayColor='tomato'
                        onPress={this._onPressAdd}>
                        <Image 
                            source={require('../images/comma.png')}
                            style={{width:40, height:45}}>
                        </Image>
                    </TouchableHighlight>
                </View>
                <FlatList 
                    data={flatListData}
                    renderItem={({item, index})=>{
                        // console.log(`${JSON.stringify(item)}, ${index}`)
                        return(
                            <FlatListItem item={item} index={index} refreshFlatList={this.refreshFlatList}>

                            </FlatListItem>
                        )
                    }}
                >
                </FlatList>
            </View>
        )
    }
}