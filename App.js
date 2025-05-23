import { StatusBar } from 'expo-status-bar';
import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Card from './components/card';

const imageBackground = require('./assets/imageBackground.png');
const profile = require('./assets/profile.png');
const username = 'Sati Grguera';
const title = 'Backend Failure';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground source={imageBackground} style={styles.image} resizeMode='cover'>
        <Card profile={profile} username={username} title={title} />
      </ImageBackground>
    </SafeAreaView>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex'
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center'
  }
});
