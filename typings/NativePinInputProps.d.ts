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

export type DarkModeEnum = "device" | "dark" | "light";

export interface NativePinInputProps<Style> extends CommonProps<Style> {
    dataAttr: EditableValue<string>;
    maxLength: number;
    deleteButtonIcon: DynamicValue<NativeIcon>;
    darkMode: DarkModeEnum;
    onChangeAction?: ActionValue;
    onInputCompleteAction?: ActionValue;
}
