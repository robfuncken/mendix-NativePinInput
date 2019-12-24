import { Component, ReactNode, createElement } from "react";
import { Platform, Text, TouchableNativeFeedback, TouchableOpacity } from "react-native";
import { DynamicValue, NativeIcon, ValueStatus } from "mendix";
import { Icon } from "mendix/components/native/Icon";

import { CustomStyle } from "../NativePinInput";

export interface DeleteButtonProps {
    deleteButtonIcon: DynamicValue<NativeIcon>;
    style: CustomStyle;
    onClick: () => void;
}

export class DeleteButton extends Component<DeleteButtonProps> {

    private defaultIconGlyph = "glyphicon-trash";

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
                    {this.renderIcon(this.defaultIconGlyph, this.props.deleteButtonIcon)}
                </TouchableOpacity>
            );
        }
    }

    onClick() {
        this.props.onClick();
    }

    private renderIcon = (glyph: string, toBeRenderedIcon?: DynamicValue<NativeIcon>) => {
        const nativeIcon: NativeIcon =
            toBeRenderedIcon && toBeRenderedIcon.status === ValueStatus.Available
                ? toBeRenderedIcon.value
                : { type: "glyph", iconClass: glyph };

        return (
            <Icon color={this.props.style.icon.color} icon={nativeIcon} size={this.props.style.icon.fontSize} />
        );
    };
}
