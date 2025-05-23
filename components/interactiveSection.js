import { Image, Pressable, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-web';

export default function InteractiveSection() {
    const contactar = () => {
        alert(document.getElementById('text').value)
    }
    const verPerfil = () => {
        document.getElementById('text').color = red; //Mati despues arregla esto. Tambien queda por hacer la ultima parte del punto 2.
    }
    return (
        <View>
            <TextInput id='text' placeholder="Enviar Mensaje"/>
            <TouchableOpacity onPress={contactar}><Text>Contactar</Text></TouchableOpacity>
            <Pressable onPress={verPerfil}><Text>Ver Perfil</Text></Pressable>
        </View>
    )
}

const styles = StyleSheet.create({

})