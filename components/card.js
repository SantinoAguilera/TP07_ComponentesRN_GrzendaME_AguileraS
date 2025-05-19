import { Image, StyleSheet, Text, View } from 'react-native';

export default function Card(profile, username, title) {
    
    return (
        <View>
            <Image style={styles.image} source={profile} resizeMode='cover'/>
            <Text style={styles.username}>{username}</Text>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
      
    },

    username: {

    },

    title: {

    }
});