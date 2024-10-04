import { StyleSheet, Text, View, Image } from 'react-native';

export default function Emocao() {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/RAIVA.png')} style={{height: '15%' }}></Image>
      <Image source={require('../../../assets/RAIVA.png')} style={{height: '15%' }}></Image>
      <Image source={require('../../../assets/RAIVA.png')} style={{height: '15%' }}></Image>
      <Image source={require('../../../assets/RAIVA.png')} style={{height: '15%' }}></Image>
      {/* <Text style={styles.title}>Emoção</Text> */}
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
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});
