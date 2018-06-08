import React, { Component } from "react";
import { Text, View, TextInput, Keyboard } from "react-native";

export default class TextInputs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            typedText: 'please type your Text',
            typedPassword: '',
            typedDescription: '',
        };
    }
    componentWillMount () {
        this.keyboardDidshowListener = Keyboard.addListener('keyboardDidshow', ()=>{
            this.setState(() => {
                return { typedText: 'keyboard is shown'}
            })
        })
        this.keyboardDidshowListener = Keyboard.addListener('keyboardDidHide', ()=>{
            this.setState(() => {
                return { typedText: 'keyboard Hide'}
            })
        })
    }
    componentWillUnmount () {
        this.keyboardDidshowListener.remove()
    }
    render() {
        return (
            <View>
                <TextInput style={{
                    height: 40,
                    margin: 20,
                    padding: 10,
                    borderColer: 'gray',
                    borderWidth: 1,
                }}
                keyboardType='email-address'
                placeholder="Enter your email"
                placeholderTextColor="gray"
                onChangeText={
                    (text) => {
                        this.setState (
                            (previousState) => {
                                return{
                                    typedText: text
                                };
                            }
                        );
                    }
                }
                />
                <Text style={{margin: 20}}>{ this.state.typedText }</Text>
                <TextInput style={{
                    height: 40,
                    margin: 20,
                    padding: 10,
                    borderColer: 'gray',
                    borderWidth: 1,
                }}
                    keyboardType='default'
                    placeholder="Enter your password"
                    placeholderTextColor="gray"
                    secureTextEntry={true}
                    // autoFocus={true}
                    onChangeText={
                        (text) => {
                            this.setState(
                                (previousState) => {
                                    return {
                                        typedPassword: text
                                    };
                                }
                            );
                        }
                    }
                />
                <TextInput 
                    style= {{
                        height: 200,
                        margin: 20,
                        padding: 10,
                        borderColer: 'gray',
                        borderWidth: 1
                    }}
                    multiline={true}
                    borderBottomColer='green'
                    borderBottomWithd={3}
                    returnKeyType='none'
                    editable={true}
                    onSubmitEditing={Keyboard.dismiss}
                    onChangeText={
                        (text) => {
                            this.setState(
                                (previousState) => {
                                    return {
                                        typedDescription: text
                                    };
                                }
                            );
                        }
                    }
                />
            </View>
        );
    }
}