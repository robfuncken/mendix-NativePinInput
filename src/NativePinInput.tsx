import { Component, ReactNode, createElement } from "react";
import { TextStyle, ViewStyle, View } from "react-native";
import { NativePinInputProps } from "../typings/NativePinInputProps";
import { Style } from "./utils/common";
import { flattenStyles } from "./utils/common";
import { styles } from "./ui/styles";
import { PinInputButton } from "./components/PinInputButton";
import { ValueStatus } from "mendix";
import { DeleteButton } from "./components/DeleteButton";

export interface CustomStyle extends Style {
    container: ViewStyle;
    buttonRow: ViewStyle;
    touchableContainer: ViewStyle;
    emptyContainer: ViewStyle;
    iconWrapper: ViewStyle;
    caption: TextStyle;
}

const defaultStyle: CustomStyle = {
    container: styles.container,
    buttonRow: styles.buttonRow,
    touchableContainer: styles.touchableContainer,
    iconWrapper: styles.iconWrapper,
    emptyContainer: styles.emptyContainer,
    caption: styles.caption
};

export class NativePinInput extends Component<NativePinInputProps<CustomStyle>> {
    private readonly styles = flattenStyles(defaultStyle, this.props.style);

    constructor(props: NativePinInputProps<CustomStyle>) {
        super(props);


        this.onClick = this.onClick.bind(this);
        this.onDeleteClick = this.onDeleteClick.bind(this);
    }

    render(): ReactNode {

        return (
            <View>
                <View style={styles.buttonRow}>
                    <PinInputButton caption="1" style={this.styles} onClick={this.onClick}/>
                    <PinInputButton caption="2" style={this.styles} onClick={this.onClick}/>
                    <PinInputButton caption="3" style={this.styles} onClick={this.onClick}/>
                </View>
                <View style={styles.buttonRow}>
                    <PinInputButton caption="4" style={this.styles} onClick={this.onClick}/>
                    <PinInputButton caption="5" style={this.styles} onClick={this.onClick}/>
                    <PinInputButton caption="6" style={this.styles} onClick={this.onClick}/>
                </View>
                <View style={styles.buttonRow}>
                    <PinInputButton caption="7" style={this.styles} onClick={this.onClick}/>
                    <PinInputButton caption="8" style={this.styles} onClick={this.onClick}/>
                    <PinInputButton caption="9" style={this.styles} onClick={this.onClick}/>
                </View>
                <View style={styles.buttonRow}>
                    <View style={this.styles.emptyContainer}></View>
                    <PinInputButton caption="0" style={this.styles} onClick={this.onClick}/>
                    <DeleteButton
                        deleteButtonIcon={this.props.deleteButtonIcon}
                        deleteButtonDarkModeIcon={this.props.deleteButtonDarkModeIcon}
                        style={this.styles}
                        onClick={this.onDeleteClick}
                    />
                </View>
            </View>
        );

    }

    onClick(value: string) {

        const { dataAttr, onChangeAction, onInputCompleteAction } = this.props;

        if (!dataAttr || dataAttr.status !== ValueStatus.Available) {
            return;
        }
        // The display value is not updated immediately, so keep track of the length here.
        let displayValueLength = dataAttr.displayValue.length;
        if (displayValueLength < this.props.maxLength) {
            // Add digit to value
            dataAttr.setTextValue(dataAttr.displayValue + value);
            displayValueLength++;

            // Execute on change action if more input expected,
            // execute on input complete action if all digits were entered.
            if (displayValueLength < this.props.maxLength) {
                if (onChangeAction && onChangeAction.canExecute && !onChangeAction.isExecuting) {
                    onChangeAction.execute();
                }
            } else {
                if (onInputCompleteAction && onInputCompleteAction.canExecute && !onInputCompleteAction.isExecuting) {
                    onInputCompleteAction.execute();
                }
            }
        }
    }
    
    onDeleteClick() {

        const { dataAttr } = this.props;

        if (!dataAttr || dataAttr.status !== ValueStatus.Available) {
            return;
        }
        if (dataAttr.displayValue.length > 0) {
            dataAttr.setTextValue(dataAttr.displayValue.substr(0, dataAttr.displayValue.length - 1));
        }
    }
}
