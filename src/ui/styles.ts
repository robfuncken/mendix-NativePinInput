import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        borderWidth: 0
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
        backgroundColor: "grey",
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
    caption: {
        textAlign: "center",
        fontSize: 25,
        color: "#FFFFFF"
    }
});
