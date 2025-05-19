import { StatusBar } from 'expo-status-bar';
import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Card from './components/card';

const imageBackground = require('./assets/imageBackground.png');
const profile = require('./assets/profile.png');
const username = 'Sati';
const title = 'Grguera';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto"/>
      <ImageBackground source={imageBackground} resizeMode='cover' style={styles.image}>
        <View style={styles.card}>
          <Card profile={profile} username={username} title={title}/>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
