import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const imageBackground = require('./assets/imageBackground.png');

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground source={imageBackground} resizeMode='stretch' style={styles.image}>

      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    
  }
});
