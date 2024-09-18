import { useState } from 'react';
import { View, Text, StyleSheet, Pressable} from 'react-native';

export default function Detalhes({ route }) {
    const { atividade } = route.params;
    const [lida, setLida] = useState(false);

    return (
        <View style={styles.container}>
         <Text style={styles.title}>{atividade.title}</Text>
         <Text style={styles.content}>{atividade.content}</Text>
        
         <Pressable
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
      content: {
        fontSize: 16,
        color: '#555',
      },
  });

