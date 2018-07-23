import React, { Component } from 'react';
import { Text, FlatList, StyleSheet, View, Image, Alert, TextInput, Platform, Dimensions, TouchableHighlight, } from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import flatListData from '../data/flatListData';

var screen = Dimensions.get('window');

export default class EditModal extends Component {
    constructor(props) {
        super(props),
            this.state = {
                newName: '',
                newAge: '',
            }
    }
    showEditModal = (editingName, flatListItem) => {
        this.setState({
            key: editingName.key,
            name: editingName.name,
            age: editingName.age,
            flatListItem: flatListItem
        })
        this.refs.myModal.open();
    }
    generateKey = (numberOfCharaters) => {
        return require('random-string')({ length: numberOfCharaters });
    }
    render() {
        return (
            <Modal
                ref={"myModal"}
                style={{
                    justifyContent: 'center',
                    borderRadius: Platform.OS === 'ios' ? 30 : 30,
                    shadowRadius: 10,
                    width: screen.width - 80,
                    height: 300,
                }}
                position='center'
                backdrop={true}
                onClosed={() => {
                    // alert("Modal Closed");
                }}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 40,
                }}>New information</Text>
                <TextInput style={{
                    height: 40,
                    borderBottomColor: 'gray',
                    marginLeft: 30,
                    marginRight: 30,
                    marginTop: 20,
                    marginBottom: 10,
                    borderBottomWidth: 1,
                }}
                    onChangeText={(text) => this.setState({ newName: text })}
                    placeholder="Enter new name"
                    value={this.state.newName}
                />
                <TextInput style={{
                    height: 40,
                    borderBottomColor: 'gray',
                    marginLeft: 30,
                    marginRight: 30,
                    marginTop: 20,
                    marginBottom: 10,
                    borderBottomWidth: 1,
                }}
                    onChangeText={(text) => this.setState({ newAge: text })}
                    placeholder="Enter new discription"
                    value={this.state.newAge}
                />
                <Button
                    style={{ fontSize: 10, color: 'white' }}
                    containerStyle={{
                        padding: 8,
                        marginLeft: 30,
                        marginRight: 30,
                        height: 40,
                        borderRadius: 6,
                        backgroundColor: "mediumseagreen"
                    }}
                    onPress={() => {
                        if (this.state.newName.length === 0 || this.state.newAge.length === 0) {
                            alert("You must enter name and discription");
                            return;
                        }
                        var foundIndex = flatListData.findIndex(item => this.state.key === item.key)
                        if (foundIndex < 0){
                            return
                        }
                        flatListData[foundIndex].name = this.state.newName;
                        flatListData[foundIndex].age = this.state.newAge;
                        this.state.flatListItem.refreshFlatListItem()
                        this.refs.myModal.close();
                    }}
                >
                    Save
                </Button>
            </Modal>
        )
    }
}