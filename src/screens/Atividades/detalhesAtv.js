// import { useState } from 'react';
import { View, Text, StyleSheet, Pressable} from 'react-native';
import { useAtividades } from './atividades_context';

 const Detalhes = ({ route }) => {
    const { atividade } = route.params || {};
    const { atividadeslidas, toggleAtividadeLida} = useAtividades(); //Acessa o estado e a função do contexto

    const lida = atividadeslidas[atividade.id] || false; // Verifica se a atividade está lida

    return (
      <View style={styles.container}>
        {/* <Text style={styles.title}>{atividade.title}</Text> */}
        <Text style={styles.text}>{atividade.ati_descricao}</Text>
      
      <Pressable
        style={[styles.pressable, {backgroundColor: lida ? 'green' : 'red' } ]}
        onPress={() => toggleAtividadeLida(atividade.id)} // Alterna o id
      >        
        {/* <Text style={styles.pressableText}> {lida ? "Ja leu otario, ja era" : "Marcar como lida"} </Text> */}
      </Pressable>
   
      </View>
    );

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
      },
      text: {
        fontSize: 16,
        color: '#333',
      },
      pressable: {
        padding: 20,
        height: '5%',
        width: '10%',
        alignSelf: 'flex-end',
      }
  });

export default Detalhes;

