import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';

export default function Contact() {
    const [text, setText] = useState("");

    const contactar = () => {
        alert(text);
        setText("");
    }

    return (
        <View>
            <TextInput placeholder="Enviar Mensaje" onChangeText={(newText) => setText(newText)} defaultValue={text} style={styles.input} />
            <TouchableOpacity onPress={contactar} style={styles.button}><Text>Contactar</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderRadius: 15,
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        backgroundColor: "#eee",
        marginTop: 5,
        width: 250
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        backgroundColor: "#eee",
        marginTop: 5,
        width: 250
    }
})