import { Component, ReactNode, createElement } from "react";
import { Platform, TouchableNativeFeedback, TouchableOpacity, View } from "react-native";
import { Icon } from "mendix/components/native/Icon";
import { DynamicValue, NativeIcon, ValueStatus } from "mendix";

import { CustomStyle } from "../NativePinInput";

export interface TouchIDButtonProps {
    //caption: string;
    touchIDButtonIcon: DynamicValue<NativeIcon>;

    style: CustomStyle;
    onClick: () => void;

}

export class TouchIDButton extends Component<TouchIDButtonProps> {
    private defaultIconGlyph = "login";

    render(): ReactNode {
        const isAndroid = Platform.OS === "android";
        if (isAndroid) {
            return                 <TouchableNativeFeedback onPress={() => this.onClick()}>
            {this.renderIcon(this.defaultIconGlyph, this.props.touchIDButtonIcon)}</TouchableNativeFeedback>;
        } else {
            return <TouchableOpacity onPress={() => this.onClick()}>{this.renderIcon(this.defaultIconGlyph, this.props.touchIDButtonIcon)}</TouchableOpacity>;
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
        // Do not apply styling to touchable, but to the child view
        return (
        <View style={this.props.style.deleteButtonTouchable}>
                <Icon color={this.props.style.icon.color} icon={nativeIcon} size={this.props.style.icon.fontSize} />
        </View>
        );
    };
}
