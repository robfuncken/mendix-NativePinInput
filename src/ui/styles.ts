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
        paddingHorizontal: 0,
        justifyContent: "space-around",
        maxWidth: 360
    },
    pinInputTouchable: {
        justifyContent: "center",
    },
    deleteButtonTouchable: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
    },
    emptyContainer: {
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

export const circleStyles = StyleSheet.create({
    container: {
    },
    valueRow: {
    },
    readonlyText: {
    },
    validationMessage: {
    },
    buttonRow: {
        paddingBottom: 20
    },
    pinInputTouchable: {
        alignItems: "center",
        height: 70,
        width: 70,
        borderRadius: 35
    },
    deleteButtonTouchable: {
        height: 70,
        width: 70,
    },
    emptyContainer: {
        height: 70,
        width: 70,
    },
    icon: {
    },
    caption: {
    }
});

export const numKeyboardStyles = StyleSheet.create({
    container: {
    },
    valueRow: {
    },
    readonlyText: {
    },
    validationMessage: {
    },
    buttonRow: {
        paddingBottom: 10
    },
    pinInputTouchable: {
        borderRadius: 5,
        height: 50,
        width: 85
    },
    deleteButtonTouchable: {
        height: 50,
        width: 85
    },
    emptyContainer: {
        height: 50,
        width: 85
    },
    icon: {
    },
    caption: {
    }
});
