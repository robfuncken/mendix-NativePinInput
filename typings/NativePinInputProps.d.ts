/**
 * This file was generated from NativePinInput.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Team
 */
import { ActionValue, DynamicValue, EditableValue, NativeIcon } from "mendix";

interface CommonProps<Style> {
    name: string;
    style: Style[];
}

export interface NativePinInputProps<Style> extends CommonProps<Style> {
    dataAttr: EditableValue<string>;
    maxLength: number;
    deleteButtonIcon: DynamicValue<NativeIcon>;
    onChangeAction?: ActionValue;
    onInputCompleteAction?: ActionValue;
}
