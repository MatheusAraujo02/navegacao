import { View, Text, StyleSheet } from 'react-native';

const Detalhes = ({ route }) => {
  const { note } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.dateText}>{note.date}</Text>
      <Text style={styles.noteText}>{note.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    dateText: {
      fontSize: 12,
      color: '#888',
    },
    noteText: {
      fontSize: 18,
      marginTop: 10,
    },
  });

export default Detalhes;