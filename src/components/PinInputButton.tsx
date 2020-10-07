import { Component, ReactNode, createElement } from "react";
import { Platform, Text, TouchableNativeFeedback, TouchableOpacity, View } from "react-native";

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
                <TouchableNativeFeedback onPress={() => this.onClick()}>{this.renderView()}</TouchableNativeFeedback>
            );
        } else {
            return <TouchableOpacity onPress={() => this.onClick()}>{this.renderView()}</TouchableOpacity>;
        }
    }

    onClick() {
        this.props.onClick(this.props.caption);
    }
   
    private renderView = () => {
        // Do not apply styling to touchable, but to the child view
        return (
            <View style={this.props.style.pinInputTouchable}>
                <Text style={this.props.style.caption}>{this.props.caption}</Text>
            </View>
        );
    };
}
