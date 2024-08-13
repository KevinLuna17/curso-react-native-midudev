import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

const icon = require('./assets/icon.png');

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image source={{ uri: "https://wallpapercave.com/wp/wp11383569.jpg" }} style={{width: 300, height: 200 }} />
      <Text style={{color: '#fff'}}>Tenemos aqui la app!</Text>
      <Button 
      title='Pulsa aqui' 
      onPress={()=> alert('Hola')} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center'
  },

});
