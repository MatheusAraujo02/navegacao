import { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable, Dimensions, Alert } from 'react-native';

import api from '../../services/api';


export default function Emocao() {



  const [idSelecionado, setIdSelecionado] = useState(null);
  
  const mostrarEmocaoSelecionada = () => {
    switch (idSelecionado) {
      case 1:
        return 'Feliz';
      case 2:
        return 'Neutro';
      case 4:
        return 'Triste';
      case 5:
        return 'Muito Feliz';
      case 6:
        return 'Muito Triste';
      case 7:
        return 'Raiva';
      default:
        return '';
    }
  };


  const handleSalvarEmocao = async () => {
    if (idSelecionado !== null) {
      try {
        await api.post('/emocao_paciente', {
          pac_id: 11,
          emo_id: idSelecionado,
          emo_data: new Date(),
        });
        setIdSelecionado(null);
        Alert.alert('Sucesso', 'Emoção salva com sucesso!');
      } catch (error) {
        console.error('Erro ao salvar emoção', error);
        Alert.alert('Erro', 'Houve um erro ao salvar a emoção. Tente novamente')
      }
    }
  }
  return (
    <View style={styles.container}>
      <Pressable onPress={() => setIdSelecionado(5)} >
      <Image source={require('../../../assets/RAIVA.png')} style={styles.image} ></Image>
      </Pressable>
      
      <Pressable onPress={() => setIdSelecionado(1)}>
      <Image source={require('../../../assets/RAIVA.png')} style={styles.image} ></Image>
      </Pressable>
            
      <Pressable onPress={() => setIdSelecionado(2)}>      
      <Image source={require('../../../assets/RAIVA.png')}style={styles.image} ></Image>
      </Pressable>
     
      <Pressable onPress={() => setIdSelecionado(4)}>
      <Image source={require('../../../assets/RAIVA.png')}style={styles.image} ></Image>
      </Pressable>
      
      <Pressable onPress={() => setIdSelecionado(6)}>
      <Image source={require('../../../assets/RAIVA.png')}style={styles.image}></Image>
      </Pressable>
     
      <Pressable onPress={() => setIdSelecionado(7)}>
      <Image source={require('../../../assets/RAIVA.png')} style={styles.image}></Image>
      </Pressable>
      

  

      {idSelecionado !== null && (
        <Text style={styles.selectedEmotionText}>
          Emoção Selecionada: {mostrarEmocaoSelecionada()}
        </Text>
      )}
      
      <Pressable onPress={handleSalvarEmocao}>
      <Text style={styles.title}>Emoção</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
    image: {
      width: Dimensions.get('window').width / 1.5,
      height: Dimensions.get('window').width / 1.5, 
      marginBottom: '-50%',
      marginTop:'-35%'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  selectedEmotionText: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 20,
  },
});
