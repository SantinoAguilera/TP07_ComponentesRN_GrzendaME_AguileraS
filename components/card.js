import { Image, StyleSheet, Text, View } from 'react-native';

export default function Card({ profile, username, title }) {

    return (
        <View style={styles.card}>
            <Image style={styles.image} source={profile} resizeMode='cover' />
            <Text style={styles.username}>{username}</Text>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 50,
        width: 300,
        height: 450,
        backgroundColor: '#eeeeee',
        justifyContent: 'center',
        alignItems: 'center'
    },
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
    }
});