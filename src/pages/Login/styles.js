import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f7',
        padding: 5,
    },

    form: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'center',
    },

    title: {
        marginBottom: 20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },

    input: {
        height: 55,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 10,
        borderRadius: 4,
    },

    submitButton: {
        marginTop: 20,
        backgroundColor: '#04d361',
        height: 56,
        borderRadius: 8,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },

    submitButtonText: {
        color: '#FFF',
        fontSize: 16,
    },

    errorMessage: {
        color: 'red',
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    }
});

export default styles;