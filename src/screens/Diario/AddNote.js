import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddNote = ({ route, navigation }) => {
  const { addNote } = route.params;
  const [newNote, setNewNote] = useState('');

  const handleSave = () => {
    if (newNote) {
      addNote(newNote);
      navigation.goBack(); // Voltar para a lista de notas
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        multiline
        numberOfLines={10}
        placeholder="Escreva sua nova nota aqui..."
        value={newNote}
        onChangeText={setNewNote}
      />
      <Button title="Salvar Nota" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  textInput: {
    flex: 1,
    fontSize: 18,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    textAlignVertical: 'top',
  },
});

export default AddNote;