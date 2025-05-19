import { StatusBar } from 'expo-status-bar';
import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Card from './components/card';

const imageBackground = require('./assets/imageBackground.png');
const profile = require('./assets/profile.png');
const username = 'Sati Grguera';
const title = 'Backend Failure';


export default function App() {
  return (
    <SafeAreaView>
      <StatusBar style="light" />
      <ImageBackground source={imageBackground} resizeMode='cover' style={styles.image}></ImageBackground>
      <Card profile={profile} username={username} title={title} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
