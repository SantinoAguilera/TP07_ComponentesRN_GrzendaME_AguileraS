import { useState } from 'react';
import { Pressable, Image, StyleSheet, Text, View } from 'react-native';
import Contact from './contact';

export default function Card({ profile, username, title }) {
    const [background, setBackground] = useState(false);

    const verPerfil = () => setBackground(!background);

    return (
        <View style={styles.card(background)}>
            <Image style={styles.image} source={profile} resizeMode='cover' />
            <Text style={styles.username}>{username}</Text>
            <Text style={styles.title}>{title}</Text>
            <Pressable onPress={verPerfil} style={({ pressed }) => [
                {
                    backgroundColor: pressed
                        ? "#ddf"
                        : "#eee"
                },
                styles.pressable
            ]}><Text>Ver Perfil</Text></Pressable>
            <Contact />
        </View>
    )
}

const styles = StyleSheet.create({
    card: ((background) => {
        const color = background ? '#6f6' : '#fff';

        return {
            borderRadius: 50,
            width: 300,
            height: 450,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: color
        }
    }),
    image: {
        borderRadius: 200,
        width: 200,
        height: 200,
        margin: 10
    },

    username: {
        fontWeight: 'bold',
        fontSize: 18
    },

    title: {
        fontStyle: 'italic',
        fontSize: 14
    },
    pressable: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        marginTop: 15
    }
});