import { Component, ReactNode, createElement } from 'react';
import { Text } from 'react-native';
import { CustomStyle } from "../NativePinInput";

export interface InputProps {
    validationMessage?: string;
    style: CustomStyle;
}

export class ValidationErrorView extends Component<InputProps> {
    render(): ReactNode {
        
        if (this.props.validationMessage) {
            return (
                <Text style={this.props.style.validationMessage}>
                    {this.props.validationMessage}
                </Text>
            );
        } else {
            return null;
        }
    }
}