import { Component, ReactNode, createElement } from "react";
import { Platform, Text, TouchableNativeFeedback, TouchableOpacity } from "react-native";
import { DynamicValue, NativeIcon } from "mendix";


import { CustomStyle } from "../NativePinInput";

export interface DeleteButtonProps {
    deleteButtonIcon: DynamicValue<NativeIcon>;
    deleteButtonDarkModeIcon?: DynamicValue<NativeIcon>;
    style: CustomStyle;
    onClick: () => void;
}

export class DeleteButton extends Component<DeleteButtonProps> {

    render(): ReactNode {
        const isAndroid = Platform.OS === "android";
        if (isAndroid) {
            return (
                <TouchableNativeFeedback style={this.props.style.touchableContainer} onPress={() => this.onClick()}>
                    <Text style={this.props.style.caption}>Del</Text>
                </TouchableNativeFeedback>
            );
        } else {
            return (
                <TouchableOpacity style={this.props.style.touchableContainer} onPress={() => this.onClick()}>
                    <Text style={this.props.style.caption}>Del</Text>
                </TouchableOpacity>
            );
        }
    }

    onClick() {
        this.props.onClick();
    }
}
