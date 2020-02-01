import { StyleSheet } from "react-native";

export const commonStyles = StyleSheet.create({
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
        backgroundColor: "transparent"
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
        fontSize: 25
    },
    caption: {
        textAlign: "center",
        fontSize: 25
    }
});

export const darkStyles = StyleSheet.create({
    container: {
    },
    valueRow: {
    },
    readonlyText: {
        color: "#FFFFFF"
    },
    validationMessage: {
    },
    buttonRow: {
    },
    pinInputTouchable: {
        backgroundColor: "#1c1c1c"
    },
    deleteButtonTouchable: {
    },
    emptyContainer: {
    },
    icon: {
        color: "#FFFFFF"
    },
    caption: {
        color: "#FFFFFF"
    }
});

export const lightStyles = StyleSheet.create({
    container: {
    },
    valueRow: {
    },
    readonlyText: {
        color: "#000000"
    },
    validationMessage: {
    },
    buttonRow: {
    },
    pinInputTouchable: {
        backgroundColor: "#f8f8f8"
    },
    deleteButtonTouchable: {
    },
    emptyContainer: {
    },
    icon: {
        color: "#000000"
    },
    caption: {
        color: "#000000"
    }
});
