import { Component, ReactNode, createElement } from "react";
import { Platform, Text, TouchableNativeFeedback, TouchableOpacity, View } from "react-native";


// import { CustomStyle } from "../NativePinInput";

export interface TouchIDButtonProps {
    //caption: string;
    // style: CustomStyle;
    onClickTouchID: (value: string) => void;
}


export class TouchIDButton extends Component<TouchIDButtonProps> {

   

      
    render(): ReactNode {
        const isAndroid = Platform.OS === "android";
        if (isAndroid) {
            return (
                <TouchableNativeFeedback>
                    {this.renderView()}
                </TouchableNativeFeedback>
            );
        } else {
            return (
                <TouchableOpacity>
                    {this.renderView()}
                </TouchableOpacity>
            );
        }
    }

   
    private renderView = () => {
        // Do not apply styling to touchable, but to the child view
        return (
            <View >
                <Text >{'TouchID'}</Text>
            </View>
        );
    };
}
