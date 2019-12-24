import { NativeModules, StyleSheet } from "react-native";

const darkMode =
    NativeModules && NativeModules.RNDarkMode && NativeModules.RNDarkMode.initialMode
        ? NativeModules.RNDarkMode.initialMode === "dark"
        : false;

export const styles = StyleSheet.create({
    container: {
        borderWidth: 0
    },
    readonlyText: {
        textAlign: "center",
        fontSize: 25,
        backgroundColor: darkMode ? "#1c1c1c" : "#f8f8f8",
        color: darkMode ? "#FFFFFF" : "#000000",
        height: 40
    },
    valueRow: {
        paddingHorizontal: 20,
        paddingBottom: 20,
        maxWidth: 600
    },
    buttonRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingBottom: 20,
        maxWidth: 600
    },
    touchableContainer: {
        width: 70,
        height: 70,
        backgroundColor: darkMode ? "#1c1c1c" : "#f8f8f8",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 35
    },
    emptyContainer: {
        width: 70,
        height: 70,
        backgroundColor: "transparent"
    },
    iconWrapper: {
    },
    icon: {
        fontSize: 25,
        color: darkMode ? "#FFFFFF" : "#000000",
    },
    caption: {
        textAlign: "center",
        fontSize: 25,
        color: darkMode ? "#FFFFFF" : "#000000",
    },
    validationMessage: {
        color: "#ed1c24"
    }
});
