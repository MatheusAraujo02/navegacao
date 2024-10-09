import { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable, Dimensions, Alert } from 'react-native';

import api from '../../services/api';


export default function Emocao() {



  const [idSelecionado, setIdSelecionado] = useState(null);
  
  const mostrarEmocaoSelecionada = () => {
    switch (idSelecionado) {
      case 14:
        return 'Muito Feliz';
      case 15:
        return 'Feliz';
      case 16:
        return 'Neutro';
      case 17:
        return 'Triste';
      case 18:
        return 'Muito Triste';
      case 19:
        return 'Raiva';
      default:
        return 'Emoção não selecionada';
    }
  };


  const handleSalvarEmocao = async () => {
    if (idSelecionado !== null) {
      try {
        await api.post('/emocao_paciente', {
          emo_id: idSelecionado,
          emo_data: new Date().toISOString().split("T")[0],
          pac_id: 11,
        });
        setIdSelecionado(null);
        Alert.alert('Sucesso', 'Emoção salva com sucesso!');
      } catch (error) {
        console.error('Erro ao salvar emoção');
        Alert.alert('Erro', 'Houve um erro ao salvar a emoção. Tente novamente')
      }
    }
  }
  return (
    <View style={styles.container}>
      <Pressable onPress={() => setIdSelecionado(14)} >
      <Image source={require('../../../assets/MuitoFeliz.png')} style={styles.image} ></Image>
      </Pressable>
      
      <Pressable onPress={() => setIdSelecionado(15)}>
      <Image source={require('../../../assets/Feliz.png')} style={styles.image} ></Image>
      </Pressable>
            
      <Pressable onPress={() => setIdSelecionado(16)}>      
      <Image source={require('../../../assets/Neutro.png')}style={styles.image} ></Image>
      </Pressable>
     
      <Pressable onPress={() => setIdSelecionado(17)}>
      <Image source={require('../../../assets/Triste.png')}style={styles.image} ></Image>
      </Pressable>
      
      <Pressable onPress={() => setIdSelecionado(18)}>
      <Image source={require('../../../assets/MuitoTriste.png')}style={styles.image}></Image>
      </Pressable>
     
      <Pressable onPress={() => setIdSelecionado(19)}>
      <Image source={require('../../../assets/Raiva.png')} style={styles.image}></Image>
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
    // justifyContent: 'space-between',
  },
    image: {
      width: Dimensions.get('window').width / 7,
      height: Dimensions.get('window').width / 7, 
      // marginBottom: '-50%',
      // marginTop:'-15%'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  selectedEmotionText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
