import { Component, ReactNode, createElement } from "react";
import { Platform, Text, TouchableNativeFeedback, TouchableOpacity } from "react-native";

import { CustomStyle } from "../NativePinInput";

export interface PinInputButtonProps {
    caption: string;
    style: CustomStyle;
    onClick: (value: string) => void;
}

export class PinInputButton extends Component<PinInputButtonProps> {

    render(): ReactNode {
        const isAndroid = Platform.OS === "android";
        if (isAndroid) {
            return (
                <TouchableNativeFeedback style={this.props.style.touchableContainer} onPress={() => this.onClick()}>
                    <Text style={this.props.style.caption}>{this.props.caption}</Text>
                </TouchableNativeFeedback>
            );
        } else {
            return (
                <TouchableOpacity style={this.props.style.touchableContainer} onPress={() => this.onClick()}>
                    <Text style={this.props.style.caption}>{this.props.caption}</Text>
                </TouchableOpacity>
            );
        }
    }

    onClick() {
        this.props.onClick(this.props.caption);
    }
}
