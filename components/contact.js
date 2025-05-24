import { useState } from 'react';
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-web';

export default function Contact() {
    const [text, setText] = useState("");

    const contactar = () => {
        alert(text);
        setText("");
    }

    return (
        <View>
            <TextInput placeholder="Enviar Mensaje" onChangeText={(newText) => setText(newText)} defaultValue={text} style={styles.input} />
            <TouchableOpacity onPress={contactar} style={({ pressed }) => [
                {
                    backgroundColor: pressed
                        ? "aaaaff"
                        : "white"
                },
                styles.button
            ]}><Text>Contactar</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderRadius: 8,
        padding: 8,
        borderColor: 'black',
        borderWidth: 1
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        padding: 8,
        borderColor: 'black',
        borderWidth: 1
    }
})