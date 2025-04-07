
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f9f9f9",
        paddingTop: 32,
        paddingHorizontal: 16,
    },

    title: {
        fontSize: 24,
        fontWeight: "700",
        textAlign: "center",
        marginBottom: 16,
        color: "#333",
    },

    listContainer: {
        paddingBottom: 16, // extra space at bottom for scrolling
    },

    cartTitle: {
        fontSize: 18,
        fontWeight: "600",
        textAlign: "center",
        color: "#444",
        marginTop: 16,
    },
});
