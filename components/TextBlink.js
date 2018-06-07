import React, { Component } from "react";
import { Text, View } from "react-native";

class Blink extends Component{
    constructor(props){
        super(props);
        this.state = {
            showText: true
        };
        var taskToDo = () => {
            this.setState(previouState => {
            return {
                showText: !previouState.showText
                }
            })
        }
        const timeToBlink = 1000;
        setInterval(taskToDo, timeToBlink)
    }

    render(){
        let textToDisplay = this.state.showText ? this.props.inputText : " ";
        return (
            <Text>{ textToDisplay }</Text>
        );
    }
}
export default class TextBlink extends Component{
    render(){
        return(
            <View>
                <Blink inputText="첫번째"></Blink>
                <Blink inputText="두번째"></Blink>
            </View>
        )
    }
}