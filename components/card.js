import { Image, StyleSheet, Text, View } from 'react-native';
import InteractiveSection from './interactiveSection';

export default function Card({profile, username, title}) {
    
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={profile} resizeMode='cover'/>
            <Text style={styles.username}>{username}</Text>
            <Text style={styles.title}>{title}</Text>
            <InteractiveSection />
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        borderRadius: 50,
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