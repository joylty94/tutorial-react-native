import React, { Component } from "react";
import { Text, View, TextInput } from "react-native";

export default class TextInputs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            typedText: 'please type your Text',
            typedPassword: ''
        };
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
            </View>
        );
    }
}