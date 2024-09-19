import { useState } from 'react';
import { View, Text, StyleSheet, Pressable} from 'react-native';

 const Detalhes = ({ route }) => {
    const { atividade } = route.params;
    const [lida, setLida] = useState(false);

    return (
      <View style={styles.container}>
        {/* <Text style={styles.title}>{atividade.title}</Text> */}
        <Text style={styles.text}>{atividade.text}</Text>
      
      <Pressable
      style={styles.pressable}
        title={lida ? "Marcar como não lida" : "Marcar como lida"}
        onPress={() => setLida(!lida)}
      />
      </View>
    )


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
  });

export default Detalhes;

