import { NativeModules, StyleSheet } from "react-native";

const darkMode =
    NativeModules && NativeModules.RNDarkMode && NativeModules.RNDarkMode.initialMode
        ? NativeModules.RNDarkMode.initialMode === "dark"
        : false;

export const styles = StyleSheet.create({
    container: {
        borderWidth: 0
    },
    valueRow: {
        paddingHorizontal: 20,
        maxWidth: 360
    },
    readonlyText: {
        textAlign: "center",
        fontSize: 25,
        backgroundColor: "transparent",
        color: darkMode ? "#FFFFFF" : "#000000"
    },
    validationMessage: {
        textAlign: "center",
        color: "#ed1c24",
        height: 20
    },
    buttonRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingBottom: 20,
        maxWidth: 360
    },
    pinInputTouchable: {
        width: 70,
        height: 70,
        backgroundColor: darkMode ? "#1c1c1c" : "#f8f8f8",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 35
    },
    deleteButtonTouchable: {
        width: 70,
        height: 70,
        backgroundColor: "transparent",
        alignItems: "center",
        justifyContent: "center"
    },
    emptyContainer: {
        width: 70,
        height: 70,
        backgroundColor: "transparent"
    },
    icon: {
        fontSize: 25,
        color: darkMode ? "#FFFFFF" : "#000000",
    },
    caption: {
        textAlign: "center",
        fontSize: 25,
        color: darkMode ? "#FFFFFF" : "#000000",
    }
});
