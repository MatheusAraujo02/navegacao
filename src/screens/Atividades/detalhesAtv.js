import { useState } from 'react';
import { View, Text, StyleSheet, Pressable} from 'react-native';

 const Detalhes = ({ route }) => {
    const { atividade } = route.params;
    const [lida, setLida] = useState(false);

    return (
      <View style={styles.container}>
        {/* <Text style={styles.title}>{atividade.title}</Text> */}
        <Text style={styles.text}>{atividade.ati_descricao}</Text>
      
      <Pressable
        style={[styles.pressable, {backgroundColor: lida ? 'green' : 'red' } ]}
        onPress={() => setLida(!lida)}
      >        
        {/* <Text style={styles.pressableText}> {lida ? "Ja leu otario, ja era" : "Marcar como lida"} </Text> */}
      </Pressable>
   
      </View>
    );
    console.log(lida);

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
        color: '#555',
      },
      pressable: {
        padding: 20,
        height: '5%',
        width: '10%',
        alignSelf: 'flex-end',
      }
  });

export default Detalhes;

